const MINERAL_BEE_MATERIALS = [
  "pitchblende",
  "copper",
  "lepidolite",
  "cinnabar",
  "topaz",
  "amethyst",
  "prismarine",
  "realgar",
  "pyrope",
  "zinc",
  "tin",
  "diamond",
  "iron",
  "fluorite",
  "ruby",
  "sapphire",
  "stibnite",
  "opal",
  "cheese",
  "lapis",
  "electrotine",
  "constantan",
  "redstone",
  "niter",
  "coal",
  "ilmenite",
  "silicon",
  "galena",
  "experience",
  "sodalite",
  "gold",
  "obsidian",
  "cobaltite",
  "bauxite",
  "silver",
  "tungstate",
  "emerald",
  "tricalcium_phosphate",
  "nickel",
  "fluix",
  "malachite",
  "lead",
  "invar",
  "desh",
  "arcane",
  "rune",
  "menril",
  "warped",
  "magmatic",
  "rocked",
  "steamy",
  "super_factory",
  "slimy",
  "brown_shroom",
  "sculk",
  "crystalline",
  "scheelite",
  "spacial",
  "frosty",
  "withered",
  "arcane_crystal",
  "sticky_resin",
  "zombie",
  "blazing",
  "red_shroom",
  "infinity",
  "skeletal",
  "crimson",
  "silky",
  "steel",
  "apatite",
  "cobalt",
  "salty",
  "sponge",
  "ghostly",
  "thorium",
  "graphite",
  "sphalerite",
  "netherite",
  "ender",
  "acidic",
  "chromite",
  "pyrolusite",
  "platinum",
  "bismuth",
  "glowing",
  "bastnasite",
  "tetrahedrite",
  "sulfur",
  "oilsands",
  "tantalite",
  "barite",
  "vanadium_magnetite",
  "draconic",
  "pyrochlore",
  "voidglass_shard",
  "crystalized_fluxstonee",
  "ignisium",
  "sky_steel",
];
const MATERIAL_COLORS = {
  pitchblende: { base: 0x6b5b95, secondary: 0x3b3146 },
  steel: { base: 0x3b3b3b, secondary: 0x727272 },
  apatite: { base: 0x68fcfc, secondary: 0x3e9797 },
  cobalt: { base: 0x0f3d79, secondary: 0x0f3d79 },
  salty: { base: 0x945e5a, secondary: 0x68fcfc },
  sponge: { base: 0xbcbc96, secondary: 0xe81123 },
  ghostly: { base: 0xb5c3c8, secondary: 0xbdc8cd },
  copper: { base: 0xb87333, secondary: 0xa0522d },
  rune: { base: 0x72154e, secondary: 0x3a0838 },
  menril: { base: 0x596f86, secondary: 0x354251 },
  crimson: { base: 0x390d0c, secondary: 0xb7abad },
  warped: { base: 0x073921, secondary: 0x4f2c17 },
  magmatic: { base: 0xcd691b, secondary: 0x7b3f10 },
  rocked: { base: 0x646060, secondary: 0xc1b9b8 },
  steamy: { base: 0xe2e2e2, secondary: 0x888888 },
  slimy: { base: 0x2ce551, secondary: 0x1c9234 },
  brown_shroom: { base: 0x71492e, secondary: 0x2ce551 },
  sculk: { base: 0x131313, secondary: 0x0c0c0c },
  crystalline: { base: 0x7a7672, secondary: 0x8c8883 },
  super_factory: { base: 0xb7abad, secondary: 0xe3cdd1 },
  scheelite: { base: 0x24355c, secondary: 0x213256 },
  spacial: { base: 0xdce2f3, secondary: 0x6e95bf },
  silky: { base: 0xdce2f3, secondary: 0x6e95bf },
  frosty: { base: 0x979797, secondary: 0x8e908b },
  withered: { base: 0x131313, secondary: 0x141414 },
  arcane_crystal: { base: 0x292f89, secondary: 0x444fe4 },
  sticky_resin: { base: 0x131313, secondary: 0x141414 },
  zombie: { base: 0x3e3434, secondary: 0x786464 },
  blazing: { base: 0xf9d678, secondary: 0x3e3434 },
  red_shroom: { base: 0x540c09, secondary: 0xf9d678 },
  infinity: { base: 0x131313, secondary: 0x141414 },
  skeletal: { base: 0x636363, secondary: 0x727272 },

  lepidolite: { base: 0xb57edc, secondary: 0x8b5fbf },
  arcane: { base: 0xb403e9, secondary: 0x8e02b8 },
  cinnabar: { base: 0xe34234, secondary: 0xb22222 },
  topaz: { base: 0xffc87c, secondary: 0xffb347 },
  amethyst: { base: 0x9966cc, secondary: 0x6c3483 },
  prismarine: { base: 0x7fffd4, secondary: 0x40e0d0 },
  realgar: { base: 0xff9933, secondary: 0xcc5500 },
  pyrope: { base: 0x8b0000, secondary: 0xb22222 },
  zinc: { base: 0x7d7f7d, secondary: 0xa9a9a9 },
  tin: { base: 0xd9d6cf, secondary: 0xb0b0b0 },
  diamond: { base: 0xb9f2ff, secondary: 0xe0ffff },
  iron: { base: 0xd8d8d8, secondary: 0xa9a9a9 },
  fluorite: { base: 0xa3e3ed, secondary: 0x6fc3df },
  ruby: { base: 0xe0115f, secondary: 0xa52a2a },
  sapphire: { base: 0x0f52ba, secondary: 0x4682b4 },
  stibnite: { base: 0x484848, secondary: 0xa9a9a9 },
  opal: { base: 0xa8c3bc, secondary: 0xe0ffff },
  cheese: { base: 0xfffacd, secondary: 0xffd700 },
  lapis: { base: 0x26619c, secondary: 0x1c39bb },
  electrotine: { base: 0x00ffff, secondary: 0x00ced1 },
  constantan: { base: 0xd2691e, secondary: 0xb87333 },
  redstone: { base: 0xff0000, secondary: 0x8b0000 },
  niter: { base: 0xededed, secondary: 0xb0b0b0 },
  coal: { base: 0x222222, secondary: 0x444444 },
  ilmenite: { base: 0x4b3a2f, secondary: 0x8b5f2f },
  silicon: { base: 0xc0c0c0, secondary: 0x808080 },
  galena: { base: 0x8b8b8b, secondary: 0x5a5a5a },
  sodalite: { base: 0x284387, secondary: 0x1c1c7c },
  gold: { base: 0xffd700, secondary: 0xb8860b },
  obsidian: { base: 0x2d2d2d, secondary: 0x4b0082 },
  cobaltite: { base: 0x3d59ab, secondary: 0x1e3a5c },
  bauxite: { base: 0xa0522d, secondary: 0x8b4513 },
  silver: { base: 0xc0c0c0, secondary: 0xb0b0b0 },
  tungstate: { base: 0xb0c4de, secondary: 0x4682b4 },
  emerald: { base: 0x50c878, secondary: 0x228b22 },
  tricalcium_phosphate: { base: 0xf5f5dc, secondary: 0xe0e0e0 },
  nickel: { base: 0xafafaf, secondary: 0x7f7f7f },
  fluix: { base: 0x6e00ff, secondary: 0xb266ff },
  malachite: { base: 0x43b48c, secondary: 0x228b22 },
  lead: { base: 0x575757, secondary: 0x363636 },
  invar: { base: 0xb2b2b2, secondary: 0x8b8b8b },
  desh: { base: 0xc1440e, secondary: 0x8b4000 },
  experience: { base: 0x39ff14, secondary: 0x00c800 }, // Added for experience bee (liquid exp green)

  // LuV Bee Materials
  thorium: { base: 0x14230e, secondary: 0x111e0c },
  graphite: { base: 0x10130b, secondary: 0x262821 },
  sphalerite: { base: 0x544a2c, secondary: 0x2c2817 },
  netherite: { base: 0x4c484c, secondary: 0x474447 },
  ender: { base: 0x0b0b0b, secondary: 0x0b0b0b },
  acidic: { base: 0xd9bc8e, secondary: 0x79694f },
  chromite: { base: 0x544155, secondary: 0x2c222c },
  pyrolusite: { base: 0x1f1e1d, secondary: 0x363230 },
  platinum: { base: 0x428b8e, secondary: 0x67d9dd },
  bismuth: { base: 0xe9e084, secondary: 0x7a7545 },
  glowing: { base: 0x816f40, secondary: 0xe7c874 },
  bastnasite: { base: 0x733a21, secondary: 0x452314 },
  tetrahedrite: { base: 0x171d16, secondary: 0x242d22 },
  sulfur: { base: 0xd3ec8a, secondary: 0xe1fc93 },
  oilsands: { base: 0x181814, secondary: 0x3c3729 },
  tantalite: { base: 0x180b04, secondary: 0x302828 },
  barite: { base: 0x34270f, secondary: 0x433823 },
  vanadium_magnetite: { base: 0x373741, secondary: 0x130f17 },
  draconic: { base: 0x1c1c1c, secondary: 0x0e0e0e },
  pyrochlore: { base: 0x160d07, secondary: 0x2a1a0d },
  voidglass_shard: { base: 0x6900a8, secondary: 0x62009d },
  crystalized_fluxstonee: { base: 0x7e7197, secondary: 0xc4b1ec },
  ignisium: { base: 0x972900, secondary: 0x6c2207 },
  sky_steel: { base: 0x414445, secondary: 0x1e2a24 },
};

GTCEuStartupEvents.registry("gtceu:material", (event) => {
  // --- Custom Materials for Advanced Comb Processing Pipeline ---

  // Stage I: Initial Comb Breakdown (Comb Decanter) Outputs
  event
    .create("impure_wax")
    .fluid()
    .color(0xffa500)
    .secondaryColor(0xd2691e)
    .iconSet("dull");

  // Stage III: Mineralized Wax Chunk Processing (Catalytic Centrifuge) Inputs/Outputs
  event
    .create("melting_catalyst")
    .fluid()
    .color(0xadd8e6)
    .secondaryColor(0x6a5acd)
    .iconSet("dull");

  event
    .create("impure_honey")
    .fluid()
    .color(0xd2b48c)
    .secondaryColor(0x8b4513)
    .iconSet("dull");

  MINERAL_BEE_MATERIALS.forEach((materialName) => {
    const colors = MATERIAL_COLORS[materialName] || {
      base: 0xaaaaaa,
      secondary: 0x555555,
    };

    // honeyed_<materialName>_dust (from Catalytic Centrifuge)
    event
      .create(`honeyed_${materialName}`)
      .fluid()
      .color(colors.base)
      .secondaryColor(colors.secondary)
      .iconSet("dull");

    event
      .create(`raw_${materialName}_wax`)
      .dust()
      .color(colors.secondary)
      .secondaryColor(colors.base)
      .iconSet("dull");
  });
});
