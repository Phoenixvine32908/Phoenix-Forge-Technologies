GTCEuStartupEvents.registry("gtceu:material", (event) => {
  // Existing Material
  event.create("fluorite").gem().ore().color(0x0c9949).iconSet("diamond");

  // ⚡ ZPM–UV Tier
  event.create("quantariumite").ore().dust().color(0x7e00ff).iconSet("diamond");

  event
    .create("nevvonian_iron")
    .ore()
    .ingot()
    .color(0x7a687f)
    .iconSet("diamond");

  event.create("phoenixite").ore().dust().color(0xff4500).iconSet("diamond");

  event
    .create("akashic_bismuthite")
    .ore()
    .dust()
    .color(0xfbf8ff)
    .iconSet("diamond");

  event.create("starnite").ore().gem().color(0xffccff).iconSet("diamond");

  event
    .create("entropy_rich_ore")
    .ore()
    .dust()
    .color(0xde00e0)
    .iconSet("diamond");

  event
    .create("fractaline_core")
    .ore()
    .gem()
    .color(0xff0080)
    .iconSet("diamond");

  event.create("voltanite_ore").ore().dust().color(0x00cfff).iconSet("diamond");

  event
    .create("crystallized_fluxstone")
    .ore()
    .dust()
    .color(0xd4bfff)
    .iconSet("diamond");

  event
    .create("quantum_entropite")
    .ore()
    .dust()
    .color(0xc710ff)
    .iconSet("diamond");

  // 🍄 Overworld Addition
  event
    .create("mycelial_netherite_ore")
    .ore()
    .dust() // Assuming it can be processed into dust
    .color(0x643a3a)
    .iconSet("diamond"); // Dark brown color

  // 🧊 Overworld Addition
  event
    .create("glacial_cryonite_ore")
    .ore()
    .gem() // Could be a crystal-like ore
    .color(0xadd8e6)
    .iconSet("diamond"); // Light blue color

  // 🔮 UHV Tier
  event.create("chronoton_ore").ore().dust().color(0x77e3ff).iconSet("diamond");

  // 🔥 Nether Addition
  event
    .create("ignisium")
    .ore()
    .dust() // Could be a fiery dust
    .color(0xff4500)
    .iconSet("diamond"); // Orange-red color

  // 🌀 UEV Tier
  event
    .create("singulium_cluster")
    .ore()
    .gem()
    .color(0xbfffff)
    .iconSet("diamond");

  event
    .create("irreality_shard")
    .ore()
    .dust()
    .color(0x8888ff)
    .iconSet("diamond");

  // 🔻 UIV Tier
  event
    .create("dimensium_crystal_lattice")
    .ore()
    .gem()
    .color(0xffeedd)
    .iconSet("diamond");

  event
    .create("exotic_hadronite")
    .ore()
    .dust()
    .color(0xff55cc)
    .iconSet("diamond");

  // 🔆 MAX Tier
  event
    .create("akashic_resonance_crystal")
    .ore()
    .gem()
    .color(0xffffff)
    .iconSet("diamond");

  event.create("finality_shard").ore().gem().color(0xf6f6f6).iconSet("diamond");

  event
    .create("oblivium_cluster")
    .ore()
    .gem()
    .color(0x111111)
    .iconSet("diamond");

  event
    .create("dormant_ember")
    .ore()
    .ingot()
    .color(0x704214)
    .iconSet("shiny")
    .addOreByproducts("iron")
    .element("ember");
  event
    .create("osmiridium_80_20")
    .ore()
    .dust()
    .color(0xd3d3d3)
    .iconSet("shiny")
    .components("4x osmium", "1x iridium"); // Changed
  event
    .create("ismiridium_80_20")
    .ore()
    .dust()
    .color(0xe0e0e0)
    .iconSet("shiny")
    .components("4x iridium", "1x osmium"); // Changed
});
