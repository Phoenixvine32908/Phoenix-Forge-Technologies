const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const $OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty');
const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder');
const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys');
Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.Material');

StartupEvents.registry('item', event => {
  event.create('phoenix_feather').displayName('§cFeather §6Of §cRebirth').texture("kubejs:item/phoenix_feather");
});

function makeIconSet(event, id, parent) {
  event.create(id).parent(parent);
}

function makeElement(event, id, prot, neut, sym) {
  event.create(id).protons(prot).neutrons(neut).symbol(sym);
}

function makeMaterial(event, id, color, color2, icon, flgs, cableProps, rotorProps) {
  const mat = event.create(id)
    .ingot()
    .element(GTElements.get(id))
    .color(color)
    .secondaryColor(color2)
    .iconSet(icon)
    .flags(flgs)
    .fluid();
  if (cableProps && Array.isArray(cableProps)) {
    mat.cableProperties.apply(mat, cableProps);
  }
  if (rotorProps && rotorProps.length === 4) {
    mat.rotorStats(rotorProps[0], rotorProps[1], rotorProps[2], rotorProps[3]);
  }
}

GTCEuStartupEvents.registry('gtceu:element', event => {
  const elements = [
    ["phoenix_enriched_tritanium", 1, 32, "PET"],
    ["phoenix_enriched_naquad", 25, 32, "PENaq"],
    ["akashic_zeronium", 24, 12, "ASHK"],
    ["aetherium_steel", 26, 30, "AES"],
    ["void_touched_tungsten", 74, 110, "VTT"],
    ["celestial_aurorium", -1, -1, "CAu"], // Placeholder protons/neutrons for alloy
    ["primordial_flux_metal", -1, -1, "PFM"], // Placeholder protons/neutrons for alloy
    ["eternal_starforged_steel", -1, -1, "ESS"], // Placeholder protons/neutrons for alloy
    ["dimensional_reflection_alloy", -1, -1, "DRA"], // Placeholder protons/neutrons for alloy
    ["timewoven_platinum", -1, -1, "TWPt"], // Placeholder protons/neutrons for alloy
    ["soulbound_ethersteel", -1, -1, "SEth"], // Placeholder protons/neutrons for alloy
    ["tachyon_infused_chromium", -1, -1, "TiCr"], // Placeholder protons/neutrons for alloy
    ["echo_crystal_alloy", -1, -1, "ECA"], // Placeholder protons/neutrons for alloy
    ["nebular_resonance_ingot", -1, -1, "NRI"], // Placeholder protons/neutrons for alloy
    ["paradoxium", -1, -1, "Px"], // Placeholder protons/neutrons for alloy
    ["subspace_cobalt", 27, 33, "QIC"],
    ["singularity_forged_titanium", 22, 26, "SFTi"],
    ["exotic_vanadium_composite", 23, 28, "EVC"],
    ["dark_matter_plated_iridium", 77, 116, "DMPIr"],
    ["corrupted_hyperalloy", -1, -1, "CHA"], // Placeholder protons/neutrons for alloy
    ["reality_bound_osmium", 76, 114, "RBOs"],
    ["void_stitched_neodymium", 60, 84, "VSNd"],
    ["phoenix_tempered_mithril", -1, -1, "PTMi"], // Placeholder protons/neutrons for alloy
    ["void_sung_adamantite", -1, -1, "VSA"], // Placeholder protons/neutrons for alloy
    ["entangled_palladium", 46, 60, "QLPd"],
    ["entangled_neutron_alloy", -1, -1, "ENeA"], // Placeholder protons/neutrons for alloy
    ["superposition_tungsten_matrix", -1, -1, "SWM"], // Placeholder protons/neutrons for alloy
    ["exo_temporal_orichalcum", -1, -1, "ETO"], // Placeholder protons/neutrons for alloy
    ["infinity", -1, -1, "Inf"], // Placeholder protons/neutrons for alloy
    ["galaxium_core_alloy", -1, -1, "GCA"], // Placeholder protons/neutrons for alloy
    ["dark_nebula_infused_iridium", 77, 118, "DNIIr"],
    ["eldritch_voidsteel", -1, -1, "EVSt"], // Placeholder protons/neutrons for alloy
    ["akashic_chrono_metal", -1, -1, "ACM"], // Placeholder protons/neutrons for alloy
    ["absolute_zero_zeronium", 24, 14, "AZZr"],
    ["multiversal_hyperalloy", -1, -1, "MHA"], // Placeholder protons/neutrons for alloy
    ["glitched_corruption_substrate", -1, -1, "GCS"], // Placeholder protons/neutrons for alloy
    ["galactic_heart_matter", -1, -1, "GHM"], // Placeholder protons/neutrons for alloy
    ["event_horizon_matter", -1, -1, "EHM"], // Placeholder protons/neutrons for alloy
    ["antimatter", -1, -1, "aM"] // Placeholder protons/neutrons for alloy
  ];

  elements.forEach(elem => {
    makeElement(event, elem[0], elem[1], elem[2], elem[3]);
  });
});

GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
  const shiny = GTMaterialIconSet.SHINY;
  const dull = GTMaterialIconSet.DULL;

  const iconSets = {
    omnium: shiny,
    sculk_alloy: dull,
    eltz: shiny,
    monium: shiny,
    phoenix_enriched_tritanium: shiny,
    phoenix_enriched_naquad: shiny,
    akashic_zeronium: shiny,
    aetherium_steel: shiny,
    void_touched_tungsten: dull,
    subspace_cobalt: shiny,
    singularity_forged_titanium: shiny,
    exotic_vanadium_composite: dull,
    dark_matter_plated_iridium: dull,
    corrupted_hyperalloy: dull,
    reality_bound_osmium: shiny,
    void_stitched_neodymium: dull,
    phoenix_tempered_mithril: shiny,
    void_sung_adamantite: dull,
    entangled_palladium: shiny,
    entangled_neutron_alloy: dull,
    superposition_tungsten_matrix: dull,
    exo_temporal_orichalcum: shiny,
    galaxium_core_alloy: shiny,
    dark_nebula_infused_iridium: dull,
    eldritch_voidsteel: dull,
    akashic_chrono_metal: shiny,
    absolute_zero_zeronium: shiny,
    multiversal_hyperalloy: shiny,
    glitched_corruption_substrate: dull,
    galactic_heart_matter: shiny,
    event_horizon_matter: shiny,
    antimatter: shiny,
    fiery_bronze: dull,
    honey: shiny,
  };

  for (const key in iconSets) {
    if (iconSets.hasOwnProperty(key)) {
      makeIconSet(event, key, iconSets[key]);
    }
  }
});

GTCEuStartupEvents.registry('gtceu:material', event => {
  const materialFlags = [
    GTMaterialFlags.GENERATE_PLATE,
    GTMaterialFlags.GENERATE_LONG_ROD,
    GTMaterialFlags.GENERATE_RING,
    GTMaterialFlags.GENERATE_ROUND,
    GTMaterialFlags.GENERATE_GEAR,
    GTMaterialFlags.GENERATE_SMALL_GEAR,
    GTMaterialFlags.GENERATE_SPRING,
    GTMaterialFlags.PHOSPHORESCENT,
    GTMaterialFlags.GENERATE_ROD,
    GTMaterialFlags.GENERATE_BOLT_SCREW,
    GTMaterialFlags.GENERATE_FRAME,
    GTMaterialFlags.GENERATE_DENSE,
    GTMaterialFlags.GENERATE_FINE_WIRE,
    GTMaterialFlags.GENERATE_FOIL,
    GTMaterialFlags.GENERATE_ROTOR
  ];
  const limitedFlags = [
    GTMaterialFlags.GENERATE_PLATE,
    GTMaterialFlags.GENERATE_GEAR,
    GTMaterialFlags.GENERATE_SMALL_GEAR,
    GTMaterialFlags.GENERATE_DENSE,
    GTMaterialFlags.GENERATE_FINE_WIRE,
  ];
  const materials = [
    [
      "akashic_zeronium",
      0x8F00FF,
      0x000000,
      [GTValues.V[GTValues.MAX], 400000, 400000, true], // cableProps
      [200000, 50000, 105.5, 100000000] // rotorProps
    ],
    [
      "phoenix_enriched_naquad",
      0xFFA500,
      0x000000,
      [GTValues.V[GTValues.ZPM], 64, 8, true], // cableProps
      [1500, 400, 12.0, 750000] // rotorProps
    ],
    [
      "phoenix_enriched_tritanium",
      0xFF0000,
      0x000000,
      [GTValues.V[GTValues.ZPM], 64, 8, true], // cableProps
      [1800, 450, 14.0, 900000] // rotorProps
    ],
    [
      "aetherium_steel",
      0xADD8E6,
      0x808080,
      [GTValues.V[GTValues.ZPM], 32, 4, true], // cableProps
      [1300, 350, 11.0, 600000] // rotorProps
    ],
    [
      "void_touched_tungsten",
      0x4B0082,
      0x000000,
      [GTValues.V[GTValues.UV], 16, 2, true], // cableProps
      [1000, 250, 18.0, 800000] // rotorProps
    ],
    [
      "subspace_cobalt",
      0x00FFFF,
      0x008B8B,
      [GTValues.V[GTValues.UV], 32, 4, true], // cableProps
      [1600, 420, 13.5, 700000] // rotorProps
    ],
    [
      "singularity_forged_titanium",
      0x808080,
      0x696969,
      [GTValues.V[GTValues.UV], 64, 8, true], // cableProps
      [1700, 430, 14.5, 850000] // rotorProps
    ],
    [
      "exotic_vanadium_composite",
      0xFFA07A,
      0xCD5C5C,
      [GTValues.V[GTValues.UV], 32, 4, true], // cableProps
      [1400, 380, 16.0, 780000] // rotorProps
    ],
    [
      "dark_matter_plated_iridium",
      0x191970,
      0x000000,
      [GTValues.V[GTValues.UV], 128, 16, true], // cableProps
      [1900, 480, 17.0, 950000] // rotorProps
    ],
    [
      "corrupted_hyperalloy",
      0xFF00FF,
      0x8B008B,
      [GTValues.V[GTValues.UEV], 64, 8, true], // cableProps
      [1650, 410, 15.0, 820000] // rotorProps
    ],
    [
      "reality_bound_osmium",
      0x00FF00,
      0x32CD32,
      [GTValues.V[GTValues.UEV], 128, 16, true], // cableProps
      [2000, 520, 19.0, 1050000] // rotorProps
    ],
    [
      "void_stitched_neodymium",
      0x9400D3,
      0x4B0082,
      [GTValues.V[GTValues.UEV], 64, 8, true], // cableProps
      [1550, 390, 17.5, 900000] // rotorProps
    ],
    [
      "celestial_aurorium",
      0xFFD700,
      0xFFFACD,
      [GTValues.V[GTValues.MAX], 4096, 512, true], // cableProps
      [2650, 670, 27.5, 2100000] // rotorProps
    ],
    [
      "primordial_flux_metal",
      0x8A2BE2,
      0x4B0082,
      [GTValues.V[GTValues.OpV], 2048, 256, true], // cableProps
      [2500, 630, 24.0, 1950000] // rotorProps
    ],
    [
      "eternal_starforged_steel",
      0x708090,
      0xF5F5F5,
      [GTValues.V[GTValues.UIV], 512, 64, true], // cableProps
      [2150, 520, 21.0, 1600000] // rotorProps
    ],
    [
      "dimensional_reflection_alloy",
      0x00CED1,
      0xE6E6FA,
      [GTValues.V[GTValues.UEV], 1024, 128, true], // cableProps
      [2400, 580, 25.5, 1850000] // rotorProps
    ],
    [
      "timewoven_platinum",
      0xE5E4E2,
      0xC0C0C0,
      [GTValues.V[GTValues.UXV], 2048, 256, true], // cableProps
      [2550, 610, 26.5, 2000000] // rotorProps
    ],
    [
      "soulbound_ethersteel",
      0x87CEEB,
      0x00008B,
      [GTValues.V[GTValues.UIV], 512, 64, true], // cableProps
      [2000, 490, 22.0, 1500000] // rotorProps
    ],
    [
      "tachyon_infused_chromium",
      0xB0C4DE,
      0x5F9EA0,
      [GTValues.V[GTValues.OpV], 1024, 128, true], // cableProps
      [2450, 600, 24.5, 1750000] // rotorProps
    ],
    [
      "echo_crystal_alloy",
      0xDA70D6,
      0x8B008B,
      [GTValues.V[GTValues.OpV], 4096, 512, true], // cableProps
      [2750, 690, 28.0, 2250000] // rotorProps
    ],
    [
      "nebular_resonance_ingot",
      0x4682B4,
      0xD8BFD8,
      [GTValues.V[GTValues.MAX], 8192, 1024, true], // cableProps
      [2850, 710, 29.5, 2400000] // rotorProps
    ],
    [
      "paradoxium",
      0x000000,
      0xFF1493,
      [GTValues.V[GTValues.MAX], 16384, 2048, true], // cableProps
      [3000, 750, 32.0, 3000000] // rotorProps
    ],
    [
      "phoenix_tempered_mithril",
      0xE0FFFF,
      0xAFEEEE,
      [GTValues.V[GTValues.UIV], 128, 16, true], // cableProps
      [2100, 530, 16.0, 1150000] // rotorProps
    ],
    [
      "void_sung_adamantite",
      0x2F4F4F,
      0x000000,
      [GTValues.V[GTValues.UIV], 256, 32, true], // cableProps
      [1850, 460, 20.0, 1200000] // rotorProps
    ],
    [
      "entangled_palladium",
      0xF0E68C,
      0xBDB76B,
      [GTValues.V[GTValues.UIV], 128, 16, true], // cableProps
      [1950, 490, 18.5, 1000000] // rotorProps
    ],
    [
      "entangled_neutron_alloy",
      0x778899,
      0x2F4F4F,
      [GTValues.V[GTValues.UXV], 256, 32, true], // cableProps
      [2300, 580, 21.0, 1300000] // rotorProps
    ],
    [
      "superposition_tungsten_matrix",
      0xD3D3D3,
      0xA9A9A9,
      [GTValues.V[GTValues.UXV], 512, 64, true], // cableProps
      [2050, 510, 22.0, 1400000] // rotorProps
    ],
    [
      "exo_temporal_orichalcum",
      0xFFD700,
      0xB8860B,
      [GTValues.V[GTValues.UXV], 256, 32, true], // cableProps
      [2250, 560, 19.5, 1250000] // rotorProps
    ],
    [
      "galactic_heart_matter",
      0xF08080,
      0xDC143C,
      [GTValues.V[GTValues.OpV], 256, 32, true], // cableProps
      [2200, 550, 23.5, 1550000] // rotorProps
    ],
    [
      "dark_nebula_infused_iridium",
      0x483D8B,
      0x191970,
      [GTValues.V[GTValues.OpV], 1024, 128, true], // cableProps
      [2150, 540, 24.0, 1600000] // rotorProps
    ],
    [
      "eldritch_voidsteel",
      0x000000,
      0x800080,
      [GTValues.V[GTValues.OpV], 512, 64, true], // cableProps
      [2350, 590, 25.0, 1700000] // rotorProps
    ],
    [
      "akashic_chrono_metal",
      0xF5F5DC,
      0xFFE4C4,
      [GTValues.V[GTValues.MAX], 1024, 128, true], // cableProps
      [2500, 620, 26.0, 1800000] // rotorProps
    ],
    [
      "absolute_zero_zeronium",
      0x00FFFF,
      0x8FBC8F,
      [GTValues.V[GTValues.MAX], 2048, 256, true], // cableProps
      [2200, 550, 27.0, 1900000] // rotorProps
    ],                                                         
    [
      "multiversal_hyperalloy",
      0xFFFAFA,
      0xF0FFF0,
      [GTValues.V[GTValues.MAX], 1024, 128, true], // cableProps
      [2600, 650, 28.0, 2000000] // rotorProps
    ],
    [
      "glitched_corruption_substrate",
      0x800080,
      0xFF00FF,
      [GTValues.V[GTValues.UEV], 32, 4, true], // cableProps
      [1450, 370, 16.5, 880000] // rotorProps
    ],
    [
      "event_horizon_matter",
      0x000000,
      0xFFFFFF,
      [GTValues.V[GTValues.MAX], 4096, 512, true], // cableProps
      [2700, 680, 29.0, 2200000] // rotorProps
    ],
    [
      "antimatter",
      0x000000,
      0xFFFFFF,
      [GTValues.V[GTValues.MAX], 8192, 1024, true], // cableProps
      [2800, 700, 30.0, 2500000] // rotorProps
    ]
  ];

  materials.forEach(mat => {
    makeMaterial(event, mat[0], mat[1], mat[2], mat[0], materialFlags, mat[3], mat[4]);
  });
  event.create('infinity')
        .ingot()
        .element(GTElements.get("infinity"))
        .color(0xffffff)
        .iconSet('infinity')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_SMALL_GEAR)
        event.create('fiery_bronze')
        .ingot()
        .color(0xff6d00)
        .secondaryColor(0xa0522d)
        .iconSet('fiery_bronze')
        .fluidPipeProperties(2000, 40, false, false, false, false)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_FRAME)
        event.create('aurum_steel')
        .ingot()
        .color(0xd0a860)
        .secondaryColor(0xc0c0c0)
        .iconSet('aurum_steel')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR)
        event.create('aluminfrost')
        .ingot()
        .color(0xadd8e6)
        .secondaryColor(0xc0c0c0)
        .fluidPipeProperties(4000, 80, false, false, false, false)
        .iconSet('aluminfrost')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_PLATE)
        event.create('frost_reinforced_stained_steel')
        .ingot()
        .color(0xADD8E6)
        .secondaryColor(0xE0FFFF)
        .fluidPipeProperties(10000, 120, false, true, true, false)
        .iconSet('aluminfrost')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_PLATE)
        event.create('magma')
        .dust()
        .color(0xff6d00)
        .secondaryColor(0xeaa92e)
        .iconSet('fiery_bronze')
        event.create('unrefined_aluminfrost')
        .dust()
        .color(0xA7D1EB)
        .secondaryColor(0x778899)
        .iconSet('fiery_bronze')
        event.create('gold_iron_alloy')
        .ingot()
        .color(0xFFD700)
        .secondaryColor(0xC0C0C0)
        .iconSet('fiery_bronze')
        event.create('blazing_crystal')
    .ingot()
    .color(0xFF8C00) // Dark Orange
    .secondaryColor(0xFF4500) // Orange Red
    .iconSet('fiery_bronze');

event.create('energized_steel')
    .ingot()
    .color(0x4682B4) // SteelBlue
    .secondaryColor(0xFFFFE0) // LightYellow
    .iconSet('fiery_bronze');

event.create('niotic_crystal')
    .ingot()
    .color(0x8A2BE2) // BlueViolet
    .secondaryColor(0xE0FFFF) // LightCyan
    .iconSet('fiery_bronze');

event.create('spirited_crystal')
    .ingot()
    .color(0x00FF7F) // SpringGreen
    .secondaryColor(0xAFEEEE) // PaleTurquoise
    .iconSet('fiery_bronze');

event.create('nitro')
    .ingot()
    .color(0xDC143C) // Crimson
    .secondaryColor(0xFFD700) // Gold
    .iconSet('fiery_bronze');

    
event.create('honey')
.ingot()
.color(0xE79A3F) // Crimson
.secondaryColor(0xCC8F00) // Gold
.iconSet('honey')
});


GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
  event.create('infinity')
})
const $PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')
const $RotorBuilder = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.RotorProperty');

GTCEuStartupEvents.registry('gtceu:material', event => {
  // Existing materials that get an item form
  GTMaterials.Silver.setProperty($PropertyKey.ROTOR, new $RotorBuilder(21473, 21474, 28.0, 21474));
})