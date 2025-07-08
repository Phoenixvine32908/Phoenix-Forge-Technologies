const MINERAL_BEE_MATERIALS = [
    "pitchblende", "copper", "lepidolite", "cinnabar", "topaz", "amethyst", "prismarine", "realgar",
    "pyrope", "zinc", "tin", "diamond", "iron", "fluorite", "ruby", "sapphire", "stibnite", "opal",
    "cheese",
    "lapis", "electrotine", "constantan", "redstone", "niter", "coal", "ilmenite", "silicon", "galena", "experience",
    "sodalite", "gold", "obsidian", "cobaltite", "bauxite", "silver", "tungstate", "emerald",
    "tricalcium_phosphate", "nickel", "fluix", "malachite", "lead", "invar", "desh", "arcane", "rune", "menril", "warped",
    "magmatic", "rocked", "steamy", "supa", "slimy", "brown_shroom", "sculk", "crystalline", "scheelite", "spacial",
     "frosty", "withered","arcane_crystal", "sticky_resin", "zombie", "blazing", "red_shroom", "infinity", "skeletal", "crimson", "silky"

];

const MATERIAL_COLORS = {
    pitchblende:      { base: 0x6B5B95, secondary: 0x3B3146 },
    copper:           { base: 0xB87333, secondary: 0xA0522D },
    rune:             { base: 0x72154e, secondary: 0x3a0838 },
    menril:             { base: 0x596f86, secondary: 0x354251},
    crimson:             { base: 0x390d0c, secondary: 0xb7abad},
    warped:             { base: 0x073921, secondary: 0x4f2c17},
    magmatic:             { base: 0xcd691b, secondary: 0x7b3f10 },
    rocked:             { base: 0x646060, secondary: 0xc1b9b8 },
    steamy:             { base: 0xe2e2e2, secondary: 0x888888 },
    super_factory:             { base: 0xc79ba2, secondary: 0xd4a5ad },
    slimy:             { base: 0x2ce551, secondary: 0x1c9234 },
    brown_shroom:             { base: 0x71492e, secondary: 0x2ce551 },
    sculk:             { base: 0x131313, secondary: 0x0c0c0c },
    crystalline:             { base: 0x7a7672, secondary: 0x8c8883 },
    supa:             { base: 0xb7abad, secondary: 0xe3cdd1 },
    scheelite:             { base: 0x24355c, secondary: 0x213256 },
    spacial:             { base: 0xdce2f3 , secondary: 0x6e95bf  },
     silky:             { base: 0xdce2f3 , secondary: 0x6e95bf  },
    frosty:             { base: 0x979797 , secondary: 0x8e908b },
    withered:             { base: 0x131313 , secondary: 0x141414  },
    arcane_crystal:             { base: 0x292f89 , secondary: 0x444fe4  },
    sticky_resin:              { base: 0x131313 , secondary: 0x141414  },
    zombie:             { base: 0x3e3434 , secondary: 0x786464  },
    blazing:             { base: 0xf9d678 , secondary: 0x3e3434  },
    red_shroom:             { base: 0x540c09 , secondary: 0xf9d678  },
    infinity:            { base: 0x131313 , secondary: 0x141414  },
    skeletal:             { base: 0x636363 , secondary: 0x727272  },

    lepidolite:       { base: 0xB57EDC, secondary: 0x8B5FBF },
    arcane:           { base: 0xb403e9, secondary: 0x8e02b8 },
    cinnabar:         { base: 0xE34234, secondary: 0xB22222 },
    topaz:            { base: 0xFFC87C, secondary: 0xFFB347 },
    amethyst:         { base: 0x9966CC, secondary: 0x6C3483 },
    prismarine:       { base: 0x7FFFD4, secondary: 0x40E0D0 },
    realgar:          { base: 0xFF9933, secondary: 0xCC5500 },
    pyrope:           { base: 0x8B0000, secondary: 0xB22222 },
    zinc:             { base: 0x7D7F7D, secondary: 0xA9A9A9 },
    tin:              { base: 0xD9D6CF, secondary: 0xB0B0B0 },
    diamond:          { base: 0xB9F2FF, secondary: 0xE0FFFF },
    iron:             { base: 0xD8D8D8, secondary: 0xA9A9A9 },
    fluorite:         { base: 0xA3E3ED, secondary: 0x6FC3DF },
    ruby:             { base: 0xE0115F, secondary: 0xA52A2A },
    sapphire:         { base: 0x0F52BA, secondary: 0x4682B4 },
    stibnite:         { base: 0x484848, secondary: 0xA9A9A9 },
    opal:             { base: 0xA8C3BC, secondary: 0xE0FFFF },
    cheese:           { base: 0xFFFACD, secondary: 0xFFD700 },
    lapis:            { base: 0x26619C, secondary: 0x1C39BB },
    electrotine:      { base: 0x00FFFF, secondary: 0x00CED1 },
    constantan:       { base: 0xD2691E, secondary: 0xB87333 },
    redstone:         { base: 0xFF0000, secondary: 0x8B0000 },
    niter:            { base: 0xEDEDED, secondary: 0xB0B0B0 },
    coal:             { base: 0x222222, secondary: 0x444444 },
    ilmenite:         { base: 0x4B3A2F, secondary: 0x8B5F2F },
    silicon:          { base: 0xC0C0C0, secondary: 0x808080 },
    galena:           { base: 0x8B8B8B, secondary: 0x5A5A5A },
    sodalite:         { base: 0x284387, secondary: 0x1C1C7C },
    gold:             { base: 0xFFD700, secondary: 0xB8860B },
    obsidian:         { base: 0x2D2D2D, secondary: 0x4B0082 },
    cobaltite:        { base: 0x3D59AB, secondary: 0x1E3A5C },
    bauxite:          { base: 0xA0522D, secondary: 0x8B4513 },
    silver:           { base: 0xC0C0C0, secondary: 0xB0B0B0 },
    tungstate:        { base: 0xB0C4DE, secondary: 0x4682B4 },
    emerald:          { base: 0x50C878, secondary: 0x228B22 },
    tricalcium_phosphate: { base: 0xF5F5DC, secondary: 0xE0E0E0 },
    nickel:           { base: 0xAFAFAF, secondary: 0x7F7F7F },
    fluix:            { base: 0x6E00FF, secondary: 0xB266FF },
    malachite:        { base: 0x43B48C, secondary: 0x228B22 },
    lead:             { base: 0x575757, secondary: 0x363636 },
    invar:            { base: 0xB2B2B2, secondary: 0x8B8B8B },
    desh:             { base: 0xC1440E, secondary: 0x8B4000 },
    experience:       { base: 0x39FF14, secondary: 0x00C800 } // Added for experience bee (liquid exp green)
};

GTCEuStartupEvents.registry('gtceu:material', event => {

    // --- Custom Materials for Advanced Comb Processing Pipeline ---

    // Stage I: Initial Comb Breakdown (Comb Decanter) Outputs
    event.create('impure_wax')
        .fluid()
        .color(0xFFA500)
        .secondaryColor(0xD2691E)
        .iconSet('dull');

    // Stage III: Mineralized Wax Chunk Processing (Catalytic Centrifuge) Inputs/Outputs
    event.create('melting_catalyst')
        .fluid()
        .color(0xADD8E6)
        .secondaryColor(0x6A5ACD)
        .iconSet('dull');

  



          event.create('impure_honey')
        .fluid()
        .color(0xD2B48C)
        .secondaryColor(0x8B4513)
        .iconSet('dull')

    MINERAL_BEE_MATERIALS.forEach(materialName => {
        const colors = MATERIAL_COLORS[materialName] || { base: 0xAAAAAA, secondary: 0x555555 };

        // honeyed_<materialName>_dust (from Catalytic Centrifuge)
        event.create(`honeyed_${materialName}`)
            .fluid()
            .color(colors.base)
            .secondaryColor(colors.secondary)
            .iconSet('dull');

        event.create(`raw_${materialName}_wax`)
            .dust()
            .color(colors.secondary)
            .secondaryColor(colors.base)
            .iconSet('dull');
        
    });
});