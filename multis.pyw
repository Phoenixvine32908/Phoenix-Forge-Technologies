#!/usr/bin/env python3
"""
multis_gui_rot_paste.py

Features:
- Load Minecraft .nbt structure files
- Load JSON files
- Accept direct pasted JSON (Copy/Paste Gadget export)
- Accept raw statePosArrayList strings
- Rotation (0/90/180/270)
- Mirroring (X and Z)
- Save as .txt or .js
- No file required — pasting works
"""

import os
import re
import json
from nbt import nbt
import tkinter as tk
from tkinter import ttk, filedialog, messagebox, scrolledtext


# ================================================================
# ===============   ORIGINAL TRANSFORM_JSON LOGIC   ===============
# ================================================================
def transform_json(input_data):
    """Expect {"statePosArrayList": "<string>"}"""
    statePos_str = input_data.get("statePosArrayList", "")
    if statePos_str.startswith('"') and statePos_str.endswith('"'):
        statePos_str = statePos_str[1:-1]

    statePos_str = statePos_str.replace('\\"', '"')

    m_blocks = re.search(r"blockstatemap:\[(.*?)\](?:,|})", statePos_str, re.DOTALL)
    if not m_blocks:
        raise ValueError("blockstatemap not found in statePosArrayList")

    blockstatemap_str = m_blocks.group(1)
    block_names = re.findall(r'Name:"(.*?)"', blockstatemap_str)

    def extract_pos(tag):
        m = re.search(fr"{tag}:\{{(.*?)\}}", statePos_str)
        if not m:
            raise ValueError(f"{tag} missing from statePosArrayList")
        return m.group(1)

    def parse_pos(pos_string):
        pos = {}
        for part in pos_string.split(","):
            key, value = part.split(":")
            pos[key.strip()] = int(value.strip())
        return pos

    startpos = parse_pos(extract_pos("startpos"))
    endpos   = parse_pos(extract_pos("endpos"))

    x_dim = endpos["X"] - startpos["X"] + 1
    y_dim = endpos["Y"] - startpos["Y"] + 1
    z_dim = endpos["Z"] - startpos["Z"] + 1

    m_list = re.search(r"statelist:\[I;(.*?)\]", statePos_str, re.DOTALL)
    if not m_list:
        raise ValueError("statelist missing")

    statelist_nums = [int(x) for x in m_list.group(1).split(",") if x.strip()]
    expected = x_dim * y_dim * z_dim
    if len(statelist_nums) != expected:
        raise ValueError(f"Statelist size mismatch (expected {expected}, got {len(statelist_nums)})")

    block_to_letter = {"minecraft:air": "A"}
    next_char = ord("B")

    def assign(b):
        nonlocal next_char
        if b == "minecraft:air":
            return "A"
        if b not in block_to_letter:
            block_to_letter[b] = chr(next_char)
            next_char += 1
        return block_to_letter[b]

    structure = []
    idx = 0
    for z in range(z_dim):
        layer = []
        for y in range(y_dim):
            row = []
            for x in range(x_dim):
                block_index = statelist_nums[idx]
                idx += 1
                block_type = block_names[block_index] if 0 <= block_index < len(block_names) else "minecraft:air"
                row.append(assign(block_type))
            layer.append(row)
        structure.append(layer)

    keys = {v: k for k, v in block_to_letter.items()}
    return {"structure": structure, "keys": keys}


# ================================================================
# =====================   ROTATION / MIRROR   ====================
# ================================================================
def rotate_and_mirror_structure(structure, rotation_deg, mirror_x, mirror_z):
    z_dim = len(structure)
    y_dim = len(structure[0])
    x_dim = len(structure[0][0])

    coords = {(x,y,z): structure[z][y][x] for z in range(z_dim) for y in range(y_dim) for x in range(x_dim)}

    if rotation_deg in (90,270):
        new_x_dim, new_z_dim = z_dim, x_dim
    else:
        new_x_dim, new_z_dim = x_dim, z_dim

    new_y_dim = y_dim

    def rot(x,y,z):
        if rotation_deg == 0:
            return x,y,z
        if rotation_deg == 90:
            return z, y, (x_dim - 1 - x)
        if rotation_deg == 180:
            return (x_dim - 1 - x), y, (z_dim - 1 - z)
        if rotation_deg == 270:
            return (z_dim - 1 - z), y, x

    new_coords = {}
    for (x,y,z), val in coords.items():
        nx, ny, nz = rot(x,y,z)

        if mirror_x:
            nx = new_x_dim - 1 - nx
        if mirror_z:
            nz = new_z_dim - 1 - nz

        new_coords[(nx,ny,nz)] = val

    new_struct = []
    for z in range(new_z_dim):
        layer=[]
        for y in range(new_y_dim):
            row=[]
            for x in range(new_x_dim):
                row.append(new_coords.get((x,y,z), "A"))
            layer.append(row)
        new_struct.append(layer)

    return new_struct


def apply_rotation_mirror(data, rot, mx, mz):
    return {"structure": rotate_and_mirror_structure(data["structure"], rot, mx, mz),
            "keys": data["keys"]}


# ================================================================
# =====================   NBT FILE LOADING (NBT Library FIX)   ===
# ================================================================
def load_nbt_file(path):
    """
    Loads an NBT file using the alternative 'NBT' library (twoolie/NBT),
    which is often more resilient to newer Minecraft versions like 1.20.1.
    """
    
    try:
        # The NBT library uses NBTFile and automatically handles GZIP compression.
        # 'r' is for read mode.
        nbt_file = nbt.NBTFile(path, 'r')
        
        # The root tag is accessed directly from the NBTFile object
        root = nbt_file 

    except Exception as e:
        import os 
        raise ValueError(
            f"NBT Load Failed (NBT Library): {type(e).__name__}: {e}. "
            f"The file '{os.path.basename(path)}' may be corrupt or from a significantly different Minecraft version."
        )

    # --- Rest of the logic remains the same, accessing data through the root object ---
    # The keys in the structure file are all correct, just the loading mechanism changed.
    
    # Structure files use a list of 3 integers for size:
    size = [tag.value for tag in root["size"].tags]
    x_dim, y_dim, z_dim = size

    palette = root["palette"]
    names = []
    for entry in palette.tags:
        nm = entry["Name"].value
        props = entry.get("Properties")
        if props:
            # Reconstruct properties string from the Compound Tag
            d = {k: v.value for k, v in props.tags}
            nm = nm + "[" + ",".join(f"{k}={v}" for k, v in d.items()) + "]"
        names.append(nm)

    total = x_dim * y_dim * z_dim
    statelist = [0] * total

    # NBT library requires iteration over the list tags
    for blk in root["blocks"].tags:
        x, y, z = [tag.value for tag in blk["pos"].tags]
        # Convert 3D coordinates (x,y,z) to 1D array index
        idx = z * (y_dim * x_dim) + y * x_dim + x
        statelist[idx] = blk["state"].value

    blockmap = ",".join(f'{{Name:"{n}"}}' for n in names)
    statelist_str = ",".join(str(i) for i in statelist)

    s = (
        f"blockstatemap:[{blockmap}],"
        f"startpos:{{X:0,Y:0,Z:0}},"
        f"endpos:{{X:{x_dim-1},Y:{y_dim-1},Z:{z_dim-1}}},"
        f"statelist:[I;{statelist_str}]"
    )
    return {"statePosArrayList": s}

# ================================================================
# ==================   PASTE-PARSER (NEW!)   =====================
# ================================================================
def parse_pasted_input(text):
    """
    Accepts:
    - Full JSON object: {"name": "...", "statePosArrayList": "...", ...}
    - Raw {"statePosArrayList": "..."}
    - Only the statePosArrayList string
    """

    text = text.strip()

    # Try full JSON
    if text.startswith("{") and text.endswith("}"):
        try:
            data = json.loads(text)
            if "statePosArrayList" in data:
                return {"statePosArrayList": data["statePosArrayList"]}
        except:
            pass

    # Try "statePosArrayList": "..."
    m = re.search(r'"statePosArrayList"\s*:\s*"([^"]+)"', text)
    if m:
        return {"statePosArrayList": m.group(1)}

    # Try raw string
    if text.startswith("blockstatemap:"):
        return {"statePosArrayList": text}

    raise ValueError("Could not locate statePosArrayList in pasted input.")


# ================================================================
# ========================   GUI CLASS   ==========================
# ================================================================
class GUI(tk.Tk):
    def __init__(self):
        super().__init__()

        self.title("Multis: .nbt → KubeJS (with Rotate, Mirror, Paste Support)")
        self.geometry("1000x700")

        top = ttk.Frame(self, padding=8)
        top.pack(fill="x")

        self.file_var = tk.StringVar()
        ttk.Entry(top, textvariable=self.file_var).pack(side="left", fill="x", expand=True)
        ttk.Button(top, text="Browse...", command=self.pick_file).pack(side="left", padx=5)

        ttk.Label(top, text="Rotate:").pack(side="left", padx=(10, 0))
        self.rot = tk.IntVar(value=0)
        ttk.Combobox(top, textvariable=self.rot, values=(0, 90, 180, 270), width=5, state="readonly").pack(side="left")

        self.mx = tk.BooleanVar()
        self.mz = tk.BooleanVar()
        ttk.Checkbutton(top, text="Mirror X", variable=self.mx).pack(side="left", padx=5)
        ttk.Checkbutton(top, text="Mirror Z", variable=self.mz).pack(side="left", padx=5)
        
        # New Toggle: Forgiving Air Mode
        self.forgiving_air = tk.BooleanVar(value=True) # Default to ON
        ttk.Checkbutton(top, text="Forgiving Air (ANY/VOID)", variable=self.forgiving_air).pack(side="left", padx=10)

        ttk.Button(top, text="Generate", command=self.generate).pack(side="left", padx=10)

        # Paste area
        mid = ttk.Labelframe(self, text="Paste Copy/Paste Gadget JSON here")
        mid.pack(fill="both", expand=False, padx=8, pady=8)

        self.paste_box = scrolledtext.ScrolledText(mid, height=10)
        self.paste_box.pack(fill="both", expand=True, padx=5, pady=5)

        # Output
        outf = ttk.Labelframe(self, text="Output")
        outf.pack(fill="both", expand=True, padx=8, pady=8)

        self.out = scrolledtext.ScrolledText(outf)
        self.out.pack(fill="both", expand=True)

        # Bottom buttons
        bot = ttk.Frame(self, padding=8)
        bot.pack(fill="x")

        ttk.Button(bot, text="Copy", command=self.copy).pack(side="left")
        ttk.Button(bot, text="Save .txt", command=self.save_txt).pack(side="left", padx=5)
        ttk.Button(bot, text="Save .js", command=self.save_js).pack(side="left", padx=5)

        ttk.Button(bot, text="Clear", command=self.clear_all).pack(side="right")

        self.generated = []
        self.transformed = None


    # ----- GUI behaviors -----
    def pick_file(self):
        f = filedialog.askopenfilename(filetypes=[("NBT","*.nbt"),("JSON","*.json"),("All","*.*")])
        if f:
            self.file_var.set(f)

    def load_from_file(self, path):
        if path.lower().endswith(".nbt"):
            return load_nbt_file(path)
        with open(path, "r", encoding="utf8") as f:
            data = json.load(f)
        if "statePosArrayList" not in data:
            raise ValueError("JSON missing statePosArrayList")
        return {"statePosArrayList": data["statePosArrayList"]}

    def generate(self):
        text = self.paste_box.get("1.0", "end").strip()
        file = self.file_var.get().strip()

        try:
            if file:
                raw = self.load_from_file(file)
            elif text:
                raw = parse_pasted_input(text)
            else:
                messagebox.showwarning("No Input", "Please select a file or paste data.")
                return
        except Exception as e:
            messagebox.showerror("Error", str(e))
            return

        try:
            data = transform_json(raw)

            data = apply_rotation_mirror(data,
                                         int(self.rot.get()),
                                         bool(self.mx.get()),
                                         bool(self.mz.get()))
            lines = self.build_kubejs(data)
            self.generated = lines
            self.transformed = data

            self.out.delete("1.0", "end")
            self.out.insert("end", "\n".join(lines))

            messagebox.showinfo("Done", "Generated successfully.")
        except Exception as e:
            messagebox.showerror("Error", str(e))


    # MODIFIED: Implements the Forgiving Air logic based on the toggle state.
    def build_kubejs(self, data):
        out = []
        for layer in data["structure"]:
            rows = ['"' + ''.join(r) + '"' for r in layer]
            out.append(".aisle(" + ", ".join(rows) + ")")

        # Get the state of the new toggle
        is_forgiving = self.forgiving_air.get()
        
        for k, v in data["keys"].items():
            
            if is_forgiving:
                # Forgiving Air Mode: air -> ANY, void -> AIR
                if v == "minecraft:air":
                    predicate = "Predicates.ANY"
                elif v == "minecraft:structure_void":
                    predicate = "Predicates.AIR"
                else:
                    predicate = f'Predicates.blocks("{v}")'
            else:
                # Default Mode: everything -> Predicates.blocks("...")
                predicate = f'Predicates.blocks("{v}")'
            
            out.append(f'   .where("{k}", {predicate})')
        return out


    # Buttons
    def copy(self):
        if not self.generated: return
        self.clipboard_clear()
        self.clipboard_append("\n".join(self.generated))
        messagebox.showinfo("Copied", "Copied to clipboard.")

    def save_txt(self):
        if not self.generated: return
        f = filedialog.asksaveasfilename(defaultextension=".txt")
        if not f: return
        with open(f, "w", encoding="utf8") as fp:
            fp.write("\n".join(self.generated))
        messagebox.showinfo("Saved", "Saved.")

    def save_js(self):
        if not self.generated: return
        f = filedialog.asksaveasfilename(defaultextension=".js")
        if not f: return
        with open(f, "w", encoding="utf8") as fp:
            fp.write("/** Generated KubeJS */\nfunction register(builder){\n")
            for ln in self.generated:
                fp.write("    " + ln + "\n")
            fp.write("}\n")
        messagebox.showinfo("Saved", ".js saved.")

    def clear_all(self):
        self.file_var.set("")
        self.paste_box.delete("1.0", "end")
        self.out.delete("1.0", "end")
        self.generated = []


# ================================================================
# =====================   MAIN ENTRY POINT   =====================
# ================================================================
if __name__ == "__main__":
    GUI().mainloop()