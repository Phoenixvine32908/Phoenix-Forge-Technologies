import re
import json


def transform_json(input_data):
    statePos_str = input_data.get("statePosArrayList", "")

    m_blocks = re.search(r"blockstatemap:\[(.*?)\](?:,|})", statePos_str)
    if not m_blocks:
        raise ValueError("Nie znaleziono blockstatemap w statePosArrayList.")
    blockstatemap_str = m_blocks.group(1)
    block_names = re.findall(r'Name:"(.*?)"', blockstatemap_str)

    # Wyciągamy startpos i endpos
    m_start = re.search(r"startpos:\{(.*?)\}", statePos_str)
    m_end = re.search(r"endpos:\{(.*?)\}", statePos_str)
    if not m_start or not m_end:
        raise ValueError("Nie znaleziono startpos lub endpos w statePosArrayList.")

    def parse_pos(pos_str):
        pos = {}
        for part in pos_str.split(","):
            key, value = part.split(":")
            pos[key.strip()] = int(value.strip())
        return pos

    startpos = parse_pos(m_start.group(1))
    endpos = parse_pos(m_end.group(1))

    x_dim = endpos["X"] - startpos["X"] + 1
    y_dim = endpos["Y"] - startpos["Y"] + 1
    z_dim = endpos["Z"] - startpos["Z"] + 1
    total_blocks = x_dim * y_dim * z_dim

    m_list = re.search(r"statelist:\[I;(.*?)\]", statePos_str)
    if not m_list:
        raise ValueError("Nie znaleziono statelist w statePosArrayList.")
    statelist_str = m_list.group(1)
    statelist_nums = [int(x) for x in statelist_str.split(",") if x.strip() != ""]
    if len(statelist_nums) != total_blocks:
        raise ValueError(
            "Liczba elementów w statelist nie zgadza się z wymiarami struktury."
        )

    block_to_letter = {"minecraft:air": "A"}
    next_letter_ord = ord("B")

    def assign_letter(block_type):
        nonlocal next_letter_ord
        if block_type == "minecraft:air":
            return "A"
        if block_type not in block_to_letter:
            block_to_letter[block_type] = chr(next_letter_ord)
            next_letter_ord += 1
        return block_to_letter[block_type]

    structure = []
    index = 0
    for _ in range(z_dim):
        layer = []
        for _ in range(y_dim):
            row = []
            for _ in range(x_dim):
                block_index = statelist_nums[index]
                index += 1
                block_type = block_names[block_index]
                letter = assign_letter(block_type)
                row.append(letter)
            layer.append(row)
        structure.append(layer)

    keys = {v: k for k, v in block_to_letter.items()}

    return {"structure": structure, "keys": keys}


def json_input(prompt=""):
    lines = []
    while True:
        line = input(prompt if not lines else "")
        lines.append(line)
        try:
            return json.loads("\n".join(lines))
        except json.JSONDecodeError:
            continue


def gen_output(data):
    output_lines = []

    for aisle in data["structure"]:
        rows_str = ["".join(row) for row in aisle]
        tmp = ", ".join(f'"{row}"' for row in rows_str)
        line = f".aisle({tmp})"
        output_lines.append(line)

    for key, block in data["keys"].items():
        output_lines.append(f'   .where("{key}", Predicates.blocks("{block}"))')

    return output_lines


def main():
    input_json = json_input("Enter the input json: ")
    data = transform_json(input_json)
    lines = gen_output(data)
    print("\033[H\033[J", end="")
    print("\033[31mThe constructed kubejs multiblock:\033[0m")
    print("\033[32m" + "\n".join(lines) + "\033[0m")


if __name__ == "__main__":
    main()
