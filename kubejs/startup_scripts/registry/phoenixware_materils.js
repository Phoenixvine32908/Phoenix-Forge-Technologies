const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty')
const $OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty')
const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder')
const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys')


StartupEvents.registry('item', event => {
    
    event.create('phoenix_feather').displayName('§cFeather §6Of §cRebirth').texture("kubejs:item/phoenix_feather")
})

function makeIconSet(event, id, parent){
    event.create(id).parent(parent);
}

function makeElement(event, id, prot, neut, sym){
    event.create(id).protons(prot).neutrons(neut).symbol(sym);
}

function makeMaterial(event, id, color, color2, icon, flgs, props){
    const mat = event.create(id)
    .ingot()
    .element(GTElements.get(id))
    .color(color)
    .secondaryColor(color2)
    .iconSet(icon)
    .flags(flgs)
    .fluid();
    mat.cableProperties.apply(mat, props)
    .rotorStats(1200, 300, 13.0, 655360)
}


GTCEuStartupEvents.registry('gtceu:element', event => {

    const elements = [
   //     [
   //         "phoenix_enriched_neutronium",
   //         29,
   //         32,
    //        "PENEU"
    //    ],
        [
            "phoenix_enriched_tritanium",
            1,
            32,
            "PET"
        ],
        [
            "phoenix_enriched_naquad",
            25,
            32,
            "PENaq"
        ],
        [
            "akashic_zeronium",
            24,
            12,
            "ASHK"
        ],
        [
            "aetherium_steel",
            26, // Example protons for a fictional steel
            30, // Example neutrons
            "AES"
        ],
        [
            "void_touched_tungsten",
            74,
            110,
            "VTT"
        ],
        [
            "celestial_aurorium",
            0xFFD700, // Gold
            0xFFFACD, // Lemon Chiffon
            [GTValues.V[GTValues.MAX], 4096, 512, true],
            [2650, 670, 27.5, 2100000]
        ],
        [
            "primordial_flux_metal",
            0x8A2BE2, // Blue Violet
            0x4B0082, // Indigo
            [GTValues.V[GTValues.OpV], 2048, 256, true],
            [2500, 630, 24.0, 1950000]
        ],
        [
            "eternal_starforged_steel",
            0x708090, // Slate Gray
            0xF5F5F5, // White Smoke
            [GTValues.V[GTValues.UIV], 512, 64, true],
            [2150, 520, 21.0, 1600000]
        ],
        [
            "dimensional_reflection_alloy",
            0x00CED1, // Dark Turquoise
            0xE6E6FA, // Lavender
            [GTValues.V[GTValues.UEV], 1024, 128, true],
            [2400, 580, 25.5, 1850000]
        ],
        [
            "timewoven_platinum",
            0xE5E4E2, // Platinum
            0xC0C0C0, // Silver
            [GTValues.V[GTValues.UXV], 2048, 256, true],
            [2550, 610, 26.5, 2000000]
        ],
        [
            "soulbound_ethersteel",
            0x87CEEB, // Sky Blue
            0x00008B, // Dark Blue
            [GTValues.V[GTValues.UIV], 512, 64, true],
            [2000, 490, 22.0, 1500000]
        ],
        [
            "tachyon_infused_chromium",
            0xB0C4DE, // Light Steel Blue
            0x5F9EA0, // Cadet Blue
            [GTValues.V[GTValues.OpV], 1024, 128, true],
            [2450, 600, 24.5, 1750000]
        ],
        [
            "echo_crystal_alloy",
            0xDA70D6, // Orchid
            0x8B008B, // Dark Magenta
            [GTValues.V[GTValues.OpV], 4096, 512, true],
            [2750, 690, 28.0, 2250000]
        ],
        [
            "nebular_resonance_ingot",
            0x4682B4, // Steel Blue
            0xD8BFD8, // Thistle
            [GTValues.V[GTValues.MAX], 8192, 1024, true],
            [2850, 710, 29.5, 2400000]
        ],
        [
            "paradoxium",
            0x000000, // Black
            0xFF1493, // Deep Pink
            [GTValues.V[GTValues.MAX], 16384, 2048, true],
            [3000, 750, 32.0, 3000000]
        ]
        [
            "quantum_infused_cobalt",
            27,
            33,
            "QIC"
        ],
        [
            "singularity_forged_titanium",
            22,
            26,
            "SFTi"
        ],
        [
            "exotic_vanadium_composite",
            23,
            28,
            "EVC"
        ],
        [
            "dark_matter_plated_iridium",
            77,
            116,
            "DMPIr"
        ],
        [
            "corrupted_hyperalloy",
            28, // Example
            35, // Example
            "CHA"
        ],
        [
            "reality_bound_osmium",
            76,
            114,
            "RBOs"
        ],
        [
            "void_stitched_neodymium",
            60,
            84,
            "VSNd"
        ],
        [
            "phoenix_tempered_mithril",
            -1, // Placeholder for alloy
            -1, // Placeholder for alloy
            "PTMi"
        ],
        [
            "void_sung_adamantite",
            -2, // Placeholder for alloy
            -2, // Placeholder for alloy
            "VSA"
        ],
        [
            "quantum_locked_palladium",
            46,
            60,
            "QLPd"
        ],
        [
            "entangled_neutron_alloy",
            -3, // Placeholder for alloy
            -3, // Placeholder for alloy
            "ENeA"
        ],
        [
            "superposition_tungsten_matrix",
            -4, // Placeholder for alloy
            -4, // Placeholder for alloy
            "SWM"
        ],
        [
            "exo_temporal_orichalcum",
            -5, // Placeholder for alloy
            -5, // Placeholder for alloy
            "ETO"
        ],
        [
            "infinity",
            0, // Placeholder for alloy
            0, // Placeholder for alloy
            "∞"
        ],
        [
            "galaxium_core_alloy",
            -6, // Placeholder for alloy
            -6, // Placeholder for alloy
            "GCA"
        ],
        [
            "dark_nebula_infused_iridium",
            77,
            118,
            "DNIIr"
        ],
        [
            "eldritch_voidsteel",
            -7, // Placeholder for alloy
            -7, // Placeholder for alloy
            "EVSt"
        ],
        [
            "akashic_chrono_metal",
            -8, // Placeholder for alloy
            -8, // Placeholder for alloy
            "ACM"
        ],
        [
            "absolute_zero_zeronium",
            24,
            14,
            "AZZr"
        ],
        [
            "multiversal_hyperalloy",
            -9, // Placeholder for alloy
            -9, // Placeholder for alloy
            "MHA"
        ],
        [
            "glitched_corruption_substrate",
            -10, // Placeholder
            -10, // Placeholder
            "GCS"
        ],
        [
            "galactic_heart_matter",
            -11, // Placeholder
            -11, // Placeholder
            "GHM"
        ],
        [
            "event_horizon_matter",
            -12, // Placeholder
            -12, // Placeholder
            "EHM"
        ],
        [
            "antimatter",
            -13, // Placeholder
            -13, // Placeholder
            "aM"
        ]
    ]

    elements.forEach(elem => {
        makeElement(event, elem[0], elem[1], elem[2], elem[3]);
    })
});

GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {

    const shiny = GTMaterialIconSet.SHINY;
    const dull = GTMaterialIconSet.DULL

    const iconSets = {
        omnium: shiny,
        sculk_alloy: dull,
        infinity: shiny,
        eltz: shiny,
        monium: shiny,
        phoenix_enriched_tritanium: shiny,
        phoenix_enriched_naquad: shiny,
        akashic_zeronium: shiny,
        aetherium_steel: shiny,
        void_touched_tungsten: dull,
        quantum_infused_cobalt: shiny,
        singularity_forged_titanium: shiny,
        exotic_vanadium_composite: dull,
        dark_matter_plated_iridium: dull,
        corrupted_hyperalloy: dull,
        reality_bound_osmium: shiny,
        void_stitched_neodymium: dull,
        phoenix_tempered_mithril: shiny,
        void_sung_adamantite: dull,
        quantum_locked_palladium: shiny,
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
        antimatter: shiny
    }

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
    ]
 //   event.create("phoenix_enriched_neutronium")
  //      .ingot().fluid()
    //    .element(GTElements.get("phoenix_enriched_neutronium"))
    //    .iconSet('phoenix_enriched_neutronium')
     //   .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE);

    const materials = [
        [
            "akashic_zeronium",
            0x8F00FF,
            0x000000,
            [GTValues.V[GTValues.MAX], 400000, 400000, true],
            [200000, 50000, 105.5, 100000000] // Rotor Stats: maxSpeed, acceleration, torque, energyCapacity
        ],
        [
            "infinity",
            0xFFFFFF,
            0xFFFFFF,
            [GTValues.V[GTValues.OpV], 400000, 400000, true],
            [2000, 500, 15.5, 1000000] // Rotor Stats: maxSpeed, acceleration, torque, energyCapacity
        ],
        [
            "phoenix_enriched_naquad",
            0xFFA500,
            0x000000,
            [GTValues.V[GTValues.ZPM], 64, 8, true],
            [1500, 400, 12.0, 750000]  // Rotor Stats
        ],
        [
            "phoenix_enriched_tritanium",
            0xFF0000,
            0x000000,
            [GTValues.V[GTValues.ZPM], 64, 8, true],
            [1800, 450, 14.0, 900000]  // Rotor Stats
        ],
       // [
      //      "phoenix_enriched_neutronium",
    //        0xFFFFFF,
     //       0xCBC3E3,
     //       [GTValues.V[GTValues.ZPM], 64, 8, true],
     //       [2200, 550, 16.5, 1100000] // Rotor Stats
     //   ],
        [
            "aetherium_steel",
            0xADD8E6, // Light Blue
            0x808080, // Gray
            [GTValues.V[GTValues.ZPM], 32, 4, true], // Example voltage tier
            [1300, 350, 11.0, 600000]
        ],
        [
            "void_touched_tungsten",
            0x4B0082, // Indigo
            0x000000, // Black
            [GTValues.V[GTValues.UV], 16, 2, true],
            [1000, 250, 18.0, 800000]
        ],
        [
            "quantum_infused_cobalt",
            0x00FFFF, // Cyan
            0x008B8B, // Dark Cyan
            [GTValues.V[GTValues.UV], 32, 4, true],
            [1600, 420, 13.5, 700000]
        ],
        [
            "singularity_forged_titanium",
            0x808080, // Gray
            0x696969, // Dim Gray
            [GTValues.V[GTValues.UV], 64, 8, true],
            [1700, 430, 14.5, 850000]
        ],
        [
            "exotic_vanadium_composite",
            0xFFA07A, // Light Salmon
            0xCD5C5C, // Indian Red
            [GTValues.V[GTValues.UV], 32, 4, true],
            [1400, 380, 16.0, 780000]
        ],
        [
            "dark_matter_plated_iridium",
            0x191970, // Midnight Blue
            0x000000, // Black
            [GTValues.V[GTValues.UV], 128, 16, true],
            [1900, 480, 17.0, 950000]
        ],
        [
            "corrupted_hyperalloy",
            0xFF00FF, // Magenta
            0x8B008B, // Dark Magenta
            [GTValues.V[GTValues.UEV], 64, 8, true],
            [1650, 410, 15.0, 820000]
        ],
        [
            "reality_bound_osmium",
            0x00FF00, // Lime
            0x32CD32, // Lime Green
            [GTValues.V[GTValues.UEV], 128, 16, true],
            [2000, 520, 19.0, 1050000]
        ],
        [
            "void_stitched_neodymium",
            0x9400D3, // Dark Violet
            0x4B0082, // Indigo
            [GTValues.V[GTValues.UEV], 64, 8, true],
            [1550, 390, 17.5, 900000]
        ],
        [
            "phoenix_tempered_mithril",
            0xE0FFFF, // Light Cyan
            0xAFEEEE, // Pale Turquoise
            [GTValues.V[GTValues.UIV], 128, 16, true],
            [2100, 530, 16.0, 1150000]
        ],
        [
            "void_sung_adamantite",
            0x2F4F4F, // Dark Slate Gray
            0x000000, // Black
            [GTValues.V[GTValues.UIV], 256, 32, true],
            [1850, 460, 20.0, 1200000]
        ],
        [
            "quantum_locked_palladium",
            0xF0E68C, // Khaki
            0xBDB76B, // Dark Khaki
            [GTValues.V[GTValues.UIV], 128, 16, true],
            [1950, 490, 18.5, 1000000]
        ],
        [
            "entangled_neutron_alloy",
            0x778899, // Light Slate Gray
            0x2F4F4F, // Dark Slate Gray
            [GTValues.V[GTValues.UXV], 256, 32, true],
            [2300, 580, 21.0, 1300000]
        ],
        [
            "superposition_tungsten_matrix",
            0xD3D3D3, // Light Gray
            0xA9A9A9, // Dark Gray
            [GTValues.V[GTValues.UXV], 512, 64, true],
            [2050, 510, 22.0, 1400000]
        ],
        [
            "exo_temporal_orichalcum",
            0xFFD700, // Gold
            0xB8860B, // Dark Goldenrod
            [GTValues.V[GTValues.UXV], 256, 32, true],
            [2250, 560, 19.5, 1250000]
        ],
        [
            "galactic_heart_matter",
            0xF08080, // Light Coral
            0xDC143C, // Crimson
            [GTValues.V[GTValues.OpV], 256, 32, true],
            [2200, 550, 23.5, 1550000]
        ],
        [
            "dark_nebula_infused_iridium",
            0x483D8B, // Dark Slate Blue
            0x191970, // Midnight Blue
            [GTValues.V[GTValues.OpV], 1024, 128, true],
            [2150, 540,
24.0, 1600000]
        ],
        [
            "eldritch_voidsteel",
            0x000000, // Black
            0x800080, // Purple
            [GTValues.V[GTValues.OpV], 512, 64, true],
            [2350, 590, 25.0, 1700000]
        ],
        [
            "akashic_chrono_metal",
            0xF5F5DC, // Beige
            0xFFE4C4, // Bisque
            [GTValues.V[GTValues.MAX], 1024, 128, true],
            [2500, 620, 26.0, 1800000]
        ],
        [
            "absolute_zero_zeronium",
            0x00FFFF, // Cyan
            0x8FBC8F, // Dark Sea Green
            [GTValues.V[GTValues.MAX], 2048, 256, true],
            [2200, 550, 27.0, 1900000]
        ],
        [
            "multiversal_hyperalloy",
            0xFFFAFA, // Snow
            0xF0FFF0, // Honeydew
            [GTValues.V[GTValues.MAX], 1024, 128, true],
            [2600, 650, 28.0, 2000000]
        ],
        [
            "glitched_corruption_substrate",
            0x800080, // Purple
            0xFF00FF, // Magenta
            [GTValues.V[GTValues.UEV], 32, 4, true],
            [1450, 370, 16.5, 880000]
        ],
        [
            "event_horizon_matter",
            0x000000, // Black
            0xFFFFFF, // White
            [GTValues.V[GTValues.MAX], 4096, 512, true], // Example properties
            [2700, 680, 29.0, 2200000] // Example rotor stats
        ],
        [
            "antimatter",
            0x000000, // Black
            0xFFFFFF, // White
            [GTValues.V[GTValues.MAX], 8192, 1024, true],
            [2800, 700, 30.0, 2500000] // Example, likely needs careful balancing
        ]
    ];


    
    materials.forEach(mat => {
        makeMaterial(event, mat[0], mat[1], mat[2], mat[0], materialFlags, mat[3]);
    });

});
