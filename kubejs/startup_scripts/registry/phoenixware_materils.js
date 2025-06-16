// Class Imports - These look correct
const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
const $OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty');
const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder');
const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys');
Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.Material'); // This line is generally not needed

// Additional imports for material properties/tool properties
const $PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey');
const $RotorProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.RotorProperty');
const $IngotProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty");
const $ToolProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.ToolProperty');


// Helper Function for Icon Sets
function makeIconSet(event, id, parent) {
    event.create(id).parent(parent);
}

// Helper Function for Elements
function makeElement(event, id, prot, neut, sym) {
    event.create(id).protons(prot).neutrons(neut).symbol(sym);
}

// --- REVISED makeMaterial HELPER FUNCTION ---
// This function is for creating new GTCEu materials, including alloys.
// - Removed .element(GTElements.get(id)) as it's problematic for alloys.
// - Fixed cableProperties application.
// - Ensured 'flags' parameter is used.
function makeMaterial(event, id, color, color2, icon, flagsArray, cableProps, rotorProps) {
    const mat = event.create(id)
        .ingot()
        .color(color)
        .secondaryColor(color2)
        .iconSet(icon)
        .flags(flagsArray) // Use the passed flagsArray
        .fluid(); // This will create a fluid for the material

    if (cableProps && Array.isArray(cableProps) && cableProps.length === 4) {
        // Correct way to set cable properties
        mat.cableProperties(cableProps[0], cableProps[1], cableProps[2], cableProps[3]);
    }
    if (rotorProps && rotorProps.length === 4) {
        mat.rotorStats(rotorProps[0], rotorProps[1], rotorProps[2], rotorProps[3]);
    }
}

// Helper for 'limited' materials (from your previous context)
function makeLimitedMaterialWithCable(event, id, color, color2, icon, cableProps) {
    const mat = event.create(id)
        .ingot()
        .color(color)
        .secondaryColor(color2)
        .iconSet(icon)
        .flags([
            GTMaterialFlags.GENERATE_FINE_WIRE,
        ])
        .cableProperties(cableProps[0], cableProps[1], cableProps[2], cableProps[3])
        .fluid();
}

function makeLimitedMaterialnotEBF(event, id, color, color2, icon) {
    const mat = event.create(id)
        .ingot()
        .color(color)
        .secondaryColor(color2)
        .iconSet(icon)
        .flags([
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_DENSE,
            // Removed GENERATE_FINE_WIRE if not intended for all
        ])
        .fluid();
}

function makeLimitedMaterialEBF(event, id, color, color2, icon, blastTempData) {
    const mat = event.create(id)
        .ingot()
        .color(color)
        .secondaryColor(color2)
        .iconSet(icon)
        .blastTemp(blastTempData[0], blastTempData[1], blastTempData[2], blastTempData[3])
        .flags([
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_DENSE,
            // Removed GENERATE_FINE_WIRE if not intended for all
        ])
        .fluid();
}


// GTCEu Element Registration
GTCEuStartupEvents.registry('gtceu:element', event => {
    const elements = [
        ["phoenix_enriched_tritanium", 1, 32, "PET"],
        ["phoenix_enriched_naquad", 25, 32, "PENaq"],
        ["akashic_zeronium", 24, 12, "ASHK"],
        ["aetherium_steel", 26, 30, "AES"],
        ["void_touched_tungsten_steel", 74, 110, "VTT"],
        ["celestial_aurorium", -1, -1, "CAu"],
        ["primordial_flux_metal", -1, -1, "PFM"],
        ["eternal_starforged_steel", -1, -1, "ESS"],
        ["dimensional_reflection_alloy", -1, -1, "DRA"],
        ["timewoven_platinum", -1, -1, "TWPt"],
        ["soulbound_ethersteel", -1, -1, "SEth"],
        ["tachyon_infused_chromium", -1, -1, "TiCr"],
        ["echo_crystal_alloy", -1, -1, "ECA"],
        ["nebular_resonance_ingot", -1, -1, "NRI"],
        ["paradoxium", -1, -1, "Px"],
        ["subspace_cobalt", 27, 33, "QIC"],
        ["singularity_forged_titanium", 22, 26, "SFTi"],
        ["exotic_vanadium_composite", 23, 28, "EVC"],
        ["dark_matter_plated_iridium", 77, 116, "DMPIr"],
        ["corrupted_hyperalloy", -1, -1, "CHA"],
        ["reality_bound_osmium", 76, 114, "RBOs"],
        ["void_stitched_neodymium", 60, 84, "VSNd"],
        ["phoenix_tempered_mithril", -1, -1, "PTMi"],
        ["void_sung_adamantite", -1, -1, "VSA"],
        ["entangled_palladium", 46, 60, "QLPd"],
        ["entangled_neutron_alloy", -1, -1, "ENeA"],
        ["superposition_tungsten_matrix", -1, -1, "SWM"],
        ["exo_temporal_orichalcum", -1, -1, "ETO"],
        ["infinity", -1, -1, "∞"],
        ["galaxium_core_alloy", -1, -1, "GCA"],
        ["dark_nebula_infused_iridium", 77, 118, "DNIIr"],
        ["eldritch_voidsteel", -1, -1, "EVSt"],
        ["akashic_chrono_metal", -1, -1, "ACM"],
        ["absolute_zero_zeronium", 24, 14, "AZZr"],
        ["multiversal_hyperalloy", -1, -1, "MHA"],
        ["glitched_corruption_substrate", -1, -1, "GCS"],
        ["galactic_heart_matter", -1, -1, "GHM"],
        ["event_horizon_matter", -1, -1, "EHM"],
        ["antimatter", -1, -1, "aM"]
    ];

    elements.forEach(elem => {
        makeElement(event, elem[0], elem[1], elem[2], elem[3]);
    });
});

// GTCEu Material Icon Set Registration
GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
    const shiny = GTMaterialIconSet.SHINY;
    const dull = GTMaterialIconSet.DULL;
    const radioactive = GTMaterialIconSet.RADIOACTIVE;
    const bright = GTMaterialIconSet.BRIGHT;
    const metallic = GTMaterialIconSet.METALLIC;
    const iconSets = {
        sculk_alloy: dull,
        chemical: bright,
        eltz: shiny,
        radio: radioactive,
        monium: shiny,
        phoenix_enriched_tritanium: shiny,
        phoenix_enriched_naquad: shiny,
        akashic_zeronium: shiny,
        aetherium_steel: shiny,
        void_touched_tungsten_steel: dull,
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
        infinity: shiny, // Added infinity icon set and set its parent to shiny
        aurum_steel: metallic, // Assuming metallic for aurum steel
        aluminfrost: bright, // Assuming bright for aluminfrost
        space_grade_steel: metallic, // Assuming metallic for space grade steel
        cryo_aluminum_supercon: shiny, // From your `makeLimitedMaterialWithCable` iconSet
        cryo_steel_supercon: shiny, // From your `makeLimitedMaterialWithCable` iconSet
        source_titanium_supercon: shiny, // From your `makeLimitedMaterialWithCable` iconSet
        magmatic_manganese_lead: shiny // From your `makeLimitedMaterialWithCable` iconSet
    };

    for (const key in iconSets) {
        if (iconSets.hasOwnProperty(key)) {
            makeIconSet(event, key, iconSets[key]);
        }
    }
});

// --- CONSOLIDATED GTCEu Material Registration ---
// All material creations and modifications are now in one event block.
GTCEuStartupEvents.registry('gtceu:material', event => {
    // Flags arrays (defined here to be accessible within this block)
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

    // --- Calls to your helper functions ---
    // NOTE: Removed the 'lumium' call here to prevent duplicate registration.
    // Lumium should be provided by GTCEu or another mod.


    makeLimitedMaterialWithCable(
        event,
        'magmatic_manganese_lead',
        0x8B4513,
        0xFF4500,
        'magmatic_manganese_lead',
        [GTValues.V[GTValues.LV], 2, 2, true],
    );

    makeLimitedMaterialWithCable(
        event,
        'cryogenic_aluminum_strand',
        0xADD8E6,
        0x87CEFA,
        'cryo_aluminum_supercon',
        [GTValues.V[GTValues.MV], 4, 0, true],
    );

    makeLimitedMaterialWithCable(
        event,
        'icy_steel_matrix',
        0xE0FFFF,
        0x696969,
        'cryo_steel_supercon',
        [GTValues.V[GTValues.HV], 8, 0, true],
    );

    makeLimitedMaterialWithCable(
        event,
        'source_titanium_filament',
        0x800080,
        0xFF00FF,
        'source_titanium_supercon',
        [GTValues.V[GTValues.EV], 16, 0, true],
    );

    // --- Materials defined using the generic 'makeMaterial' helper ---
    const materials = [
        // Using the revised makeMaterial helper, ensure the iconSet matches the ID from iconSets map
        ["akashic_zeronium", 0x8F00FF, 0x000000, materialFlags, [GTValues.V[GTValues.MAX], 400000, 400000, true], [200000, 50000, 105.5, 100000000]],
        ["phoenix_enriched_naquad", 0xFFA500, 0x000000, materialFlags, [GTValues.V[GTValues.ZPM], 64, 8, true], [1500, 400, 12.0, 750000]],
        ["phoenix_enriched_tritanium", 0xFF0000, 0x000000, materialFlags, [GTValues.V[GTValues.ZPM], 64, 8, true], [1800, 450, 14.0, 900000]],
        ["aetherium_steel", 0xADD8E6, 0x808080, materialFlags, [GTValues.V[GTValues.ZPM], 32, 4, true], [1300, 350, 11.0, 600000]],
        ["subspace_cobalt", 0x00FFFF, 0x008B8B, materialFlags, [GTValues.V[GTValues.UV], 32, 4, true], [1600, 420, 13.5, 700000]],
        ["singularity_forged_titanium", 0x808080, 0x696969, materialFlags, [GTValues.V[GTValues.UV], 64, 8, true], [1700, 430, 14.5, 850000]],
        ["exotic_vanadium_composite", 0xFFA07A, 0xCD5C5C, materialFlags, [GTValues.V[GTValues.UV], 32, 4, true], [1400, 380, 16.0, 780000]],
        ["dark_matter_plated_iridium", 0x191970, 0x000000, materialFlags, [GTValues.V[GTValues.UV], 128, 16, true], [1900, 480, 17.0, 950000]],
        ["corrupted_hyperalloy", 0xFF00FF, 0x8B008B, materialFlags, [GTValues.V[GTValues.UEV], 64, 8, true], [1650, 410, 15.0, 820000]],
        ["reality_bound_osmium", 0x00FF00, 0x32CD32, materialFlags, [GTValues.V[GTValues.UEV], 128, 16, true], [2000, 520, 19.0, 1050000]],
        ["void_stitched_neodymium", 0x9400D3, 0x4B0082, materialFlags, [GTValues.V[GTValues.UEV], 64, 8, true], [1550, 390, 17.5, 900000]],
        ["celestial_aurorium", 0xFFD700, 0xFFFACD, materialFlags, [GTValues.V[GTValues.MAX], 4096, 512, true], [2650, 670, 27.5, 2100000]],
        ["primordial_flux_metal", 0x8A2BE2, 0x4B0082, materialFlags, [GTValues.V[GTValues.OpV], 2048, 256, true], [2500, 630, 24.0, 1950000]],
        ["eternal_starforged_steel", 0x708090, 0xF5F5F5, materialFlags, [GTValues.V[GTValues.UIV], 512, 64, true], [2150, 520, 21.0, 1600000]],
        ["dimensional_reflection_alloy", 0x00CED1, 0xE6E6FA, materialFlags, [GTValues.V[GTValues.UEV], 1024, 128, true], [2400, 580, 25.5, 1850000]],
        ["timewoven_platinum", 0xE5E4E2, 0xC0C0C0, materialFlags, [GTValues.V[GTValues.UXV], 2048, 256, true], [2550, 610, 26.5, 2000000]],
        ["soulbound_ethersteel", 0x87CEEB, 0x00008B, materialFlags, [GTValues.V[GTValues.UIV], 512, 64, true], [2000, 490, 22.0, 1500000]],
        ["tachyon_infused_chromium", 0xB0C4DE, 0x5F9EA0, materialFlags, [GTValues.V[GTValues.OpV], 1024, 128, true], [2450, 600, 24.5, 1750000]],
        ["echo_crystal_alloy", 0xDA70D6, 0x8B008B, materialFlags, [GTValues.V[GTValues.OpV], 4096, 512, true], [2750, 690, 28.0, 2250000]],
        ["nebular_resonance_ingot", 0x4682B4, 0xD8BFD8, materialFlags, [GTValues.V[GTValues.MAX], 8192, 1024, true], [2850, 710, 29.5, 2400000]],
        ["paradoxium", 0x000000, 0xFF1493, materialFlags, [GTValues.V[GTValues.MAX], 16384, 2048, true], [3000, 750, 32.0, 3000000]],
        ["phoenix_tempered_mithril", 0xE0FFFF, 0xAFEEEE, materialFlags, [GTValues.V[GTValues.UIV], 128, 16, true], [2100, 530, 16.0, 1150000]],
        ["void_sung_adamantite", 0x2F4F4F, 0x000000, materialFlags, [GTValues.V[GTValues.UIV], 256, 32, true], [1850, 460, 20.0, 1200000]],
        ["entangled_palladium", 0xF0E68C, 0xBDB76B, materialFlags, [GTValues.V[GTValues.UIV], 128, 16, true], [1950, 490, 18.5, 1000000]],
        ["entangled_neutron_alloy", 0x778899, 0x2F4F4F, materialFlags, [GTValues.V[GTValues.UXV], 256, 32, true], [2300, 580, 21.0, 1300000]],
        ["superposition_tungsten_matrix", 0xD3D3D3, 0xA9A9A9, materialFlags, [GTValues.V[GTValues.UXV], 512, 64, true], [2050, 510, 22.0, 1400000]],
        ["exo_temporal_orichalcum", 0xFFD700, 0xB8860B, materialFlags, [GTValues.V[GTValues.UXV], 256, 32, true], [2250, 560, 19.5, 1250000]],
        ["galactic_heart_matter", 0xF08080, 0xDC143C, materialFlags, [GTValues.V[GTValues.OpV], 256, 32, true], [2200, 550, 23.5, 1550000]],
        ["dark_nebula_infused_iridium", 0x483D8B, 0x191970, materialFlags, [GTValues.V[GTValues.OpV], 1024, 128, true], [2150, 540, 24.0, 1600000]],
        ["eldritch_voidsteel", 0x000000, 0x800080, materialFlags, [GTValues.V[GTValues.OpV], 512, 64, true], [2350, 590, 25.0, 1700000]],
        ["akashic_chrono_metal", 0xF5F5DC, 0xFFE4C4, materialFlags, [GTValues.V[GTValues.MAX], 1024, 128, true], [2500, 620, 26.0, 1800000]],
        ["absolute_zero_zeronium", 0x00FFFF, 0x8FBC8F, materialFlags, [GTValues.V[GTValues.MAX], 2048, 256, true], [2200, 550, 27.0, 1900000]],
        ["multiversal_hyperalloy", 0xFFFAFA, 0xF0FFF0, materialFlags, [GTValues.V[GTValues.MAX], 1024, 128, true], [2600, 650, 28.0, 2000000]],
        ["glitched_corruption_substrate", 0x800080, 0xFF00FF, materialFlags, [GTValues.V[GTValues.UEV], 32, 4, true], [1450, 370, 16.5, 880000]],
        ["event_horizon_matter", 0x000000, 0xFFFFFF, materialFlags, [GTValues.V[GTValues.MAX], 4096, 512, true], [2700, 680, 29.0, 2200000]],
        ["antimatter", 0x000000, 0xFFFFFF, materialFlags, [GTValues.V[GTValues.MAX], 8192, 1024, true], [2800, 700, 30.0, 2500000]]
    ];

    materials.forEach(mat => {
        // Pass the element ID as the icon set ID here
        makeMaterial(event, mat[0], mat[1], mat[2], mat[0], mat[3], mat[4], mat[5]);
    });

    // --- Individual Material Definitions ---
    // These now use the 'event.create' directly.
    event.create('infinity')
        .ingot()
        .element(GTElements.get("infinity")) // This assumes 'infinity' element is defined and this is not an alloy
        .iconSet('infinity')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_SMALL_GEAR);

    event.create('fiery_bronze')
        .ingot()
        .color(0xff6d00)
        .secondaryColor(0xa0522d)
        .iconSet('fiery_bronze')
        .fluidPipeProperties(2000, 40, true, false, false, false)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_FRAME);

    event.create('aurum_steel')
        .ingot()
        .color(0xd0a860)
        .secondaryColor(0xc0c0c0)
        .iconSet('aurum_steel')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW);

    event.create('aluminfrost')
        .ingot()
        .color(0xadd8e6)
        .secondaryColor(0xc0c0c0)
        .fluidPipeProperties(4000, 80, false, false, false, false)
        .iconSet('aluminfrost')
        .flags(GTMaterialFlags.GENERATE_PLATE,
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
            GTMaterialFlags.GENERATE_ROTOR);
event.create('85_percent_pure_nevonian_steel')
        .ingot()
        .color(0xFFFFE0)
        .secondaryColor(0xFFD700)
        .iconSet('shiny')
        .blastTemp(3800, 'mid', GTValues.VA[GTValues.EV], 1200)
        .flags(GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.PHOSPHORESCENT,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_DENSE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_DENSE,);
        event.create('void_touched_tungsten_steel')
        .ingot()
        .fluid()
        .color(0x4B0082)
        .secondaryColor(0x000000)
        .iconSet('metallic')
        .blastTemp(4200, 'mid', GTValues.VA[GTValues.EV], 850)
        .flags(GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_SPRING,
            GTMaterialFlags.PHOSPHORESCENT,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_DENSE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_DENSE,);

    event.create('frost_reinforced_stained_steel')
        .ingot()
        .color(0xADD8E6)
        .secondaryColor(0xE0FFFF)
        .fluidPipeProperties(10000, 120, false, true, true, false)
        .iconSet('shiny')
        .flags(GTMaterialFlags.GENERATE_PLATE,
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
            GTMaterialFlags.GENERATE_ROTOR);

    event.create('magma')
        .dust()
        .color(0xff6d00)
        .secondaryColor(0xeaa92e)
        .iconSet('fiery_bronze'); // Assuming this refers to the icon set you defined earlier

    event.create('unrefined_aluminfrost')
        .dust()
        .color(0xA7D1EB)
        .secondaryColor(0x778899)
        .iconSet('fiery_bronze');

    event.create('gold_iron_alloy')
        .ingot()
        .color(0xFFD700)
        .secondaryColor(0xC0C0C0)
        .iconSet('fiery_bronze');

    event.create('space_grade_steel')
        .ingot()
        .color(0xA9A9A9)
        .secondaryColor(0xB0B0B0)
        .blastTemp(3700, 'mid', GTValues.VA[GTValues.EV], 1600)
        .iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE,
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
            GTMaterialFlags.GENERATE_ROTOR);

    event.create('signalum')
        .ingot()
        .color(0xFF4500)
        .secondaryColor(0xFFA07A)
        .iconSet('shiny');

    event.create('low_level_radioactive_waste')
        .ingot()
        .color(0x262a23)
        .secondaryColor(0x365320)
        .iconSet('radio');

    event.create('enderium')
        .ingot()
        .color(0x008080)
        .secondaryColor(0x00CED1)
        .iconSet('shiny');

    event.create('source_imbued_titanium')
        .ingot()
        .color(0xc600ff)
        .flags(GTMaterialFlags.GENERATE_PLATE,
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
            GTMaterialFlags.GENERATE_ROTOR)
        .iconSet('metallic');

    // Fluid Materials
    event.create('hafnium_chloride')
        .fluid()
        .color(0xC0C0C0)
        .iconSet('bright');

    event.create('source_of_magic')
        .fluid()
        .color(0x8F00FF)
        .iconSet('bright');

    event.create('medium_pressure_fissile_steam')
        .fluid()
        .color(0x7da10e)
        .iconSet('bright');

    event.create('uranium_oxide')
        .fluid()
        .color(0x00FF00)
        .secondaryColor(0x000000)
        .iconSet('dull');
 event.create('sucrose')
        .fluid()
        .color(0xF8F8F8)
        .iconSet('dull');
        event.create('fructose')
        .fluid()
        .color(0xF0F0F0)
        .iconSet('dull');
        event.create('glucose')
        .fluid()
        .color(0xFFFAF0)
        .iconSet('dull');
        event.create('polymethyl_methacrylate')
        .ingot()
        .polymer()
        .fluid()
        .color(0xF0F8FF)
        .secondaryColor(0xF5FFFF)
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .iconSet('dull');
         event.create('methyl_methacrylate')
        .fluid()
        .color(0xF0F8FF)
        .secondaryColor(0xF5FFFA)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_SPRING, GTMaterialFlags.GENERATE_FRAME)
        .iconSet('dull');


    event.create('zircalloy')
        .ingot()
        .color(0x002327)
        .secondaryColor(0x000000)
        .blastTemp(2700, 'low', GTValues.VA[GTValues.HV], 600)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_SPRING, GTMaterialFlags.GENERATE_FRAME)
        .iconSet('dull');

    event.create('soularium')
        .ingot()
        .color(0xA020F0)
        .secondaryColor(0x8B008B)
        .iconSet('dull');

    event.create('electrical_steel')
        .ingot()
        .color(0xB0E0E6)
        .secondaryColor(0x87CEEB)
        .iconSet('dull');

    event.create('blazing_crystal')
        .ingot()
        .color(0xFF8C00)
        .secondaryColor(0xFF4500)
        .iconSet('fiery_bronze');

    event.create('energized_steel')
        .ingot()
        .color(0x4682B4)
        .secondaryColor(0xFFFFE0)
        .iconSet('fiery_bronze');

    event.create('niotic_crystal')
        .ingot()
        .color(0x8A2BE2)
        .secondaryColor(0xE0FFFF)
        .iconSet('fiery_bronze');

    event.create('spirited_crystal')
        .ingot()
        .color(0x00FF7F)
        .secondaryColor(0xAFEEEE)
        .iconSet('fiery_bronze');

    event.create('nitro')
        .ingot()
        .color(0xDC143C)
        .secondaryColor(0xFFD700)
        .iconSet('fiery_bronze');

    event.create('honey')
        .ingot()
        .color(0xE79A3F)
        .secondaryColor(0xCC8F00)
        .iconSet('honey');

    event.create('zircon')
        .ingot()
        .color(0xF4F8FF)
        .secondaryColor(0xF4F8FF)
        .iconSet('radio');

    // --- Modifications to existing GTCEu materials ---
    GTMaterials.Silver.setProperty($PropertyKey.ROTOR, new $RotorProperty(200, 1000, 2.0, 50));
    GTMaterials.Francium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Zirconium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Hafnium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Hafnium.setProperty($PropertyKey.ORE, new $OreProperty());

    GTMaterials.Zirconium.setProperty($PropertyKey.ORE, new $OreProperty());
    GTMaterials.Radium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Actinium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Polonium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Protactinium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Neptunium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Curium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Berkelium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Californium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Einsteinium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Fermium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Mendelevium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Nobelium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Lawrencium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Strontium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Strontium.addFlags(GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_ROUND, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_SPRING, GTMaterialFlags.GENERATE_BOLT_SCREW);

});


// GTCEu Material Modification (for tool properties)
// This event is specifically designed for modifying *existing* materials.
GTCEuStartupEvents.materialModification(event => {
    GTMaterials.get('aluminfrost').setProperty($PropertyKey.TOOL, new $ToolProperty.Builder.of(1.8, 1.7, 2000, 4, [GTToolType.SWORD, GTToolType.PICKAXE, GTToolType.SHOVEL, GTToolType.AXE, GTToolType.HOE, GTToolType.WRENCH, GTToolType.HARD_HAMMER, GTToolType.SAW, GTToolType.FILE, GTToolType.SCREWDRIVER, GTToolType.WIRE_CUTTER, GTToolType.KNIFE, GTToolType.SOFT_MALLET]).build());
    GTMaterials.get('akashic_zeronium').setProperty($PropertyKey.TOOL, new $ToolProperty.Builder.of(6.5, 5.9, 2147483647, 6,
       [GTToolType.SWORD,GTToolType.DRILL_LV,GTToolType.DRILL_MV,GTToolType.DRILL_HV,GTToolType.DRILL_EV,
        GTToolType.DRILL_IV,GTToolType.PICKAXE, GTToolType.SHOVEL, GTToolType.AXE, GTToolType.HOE, 
        GTToolType.WRENCH, GTToolType.HARD_HAMMER, GTToolType.SAW, GTToolType.FILE, GTToolType.SCREWDRIVER, 
        GTToolType.WIRE_CUTTER, GTToolType.KNIFE, GTToolType.SOFT_MALLET]).build());
});
 /*  .enchantability(30)
        .addTypes(GTToolType.SWORD)
        .addTypes(GTToolType.PICKAXE)
        .addTypes(GTToolType.DRILL_LV)
        .addTypes(GTToolType.DRILL_MV)
        .addTypes(GTToolType.DRILL_HV)
        .addTypes(GTToolType.DRILL_EV)
        .addTypes(GTToolType.DRILL_IV)
        .addTypes(GTToolType.AXE)
        .addTypes(GTToolType.CHAINSAW_LV)
        .addTypes(GTToolType.SHOVEL)
        .addTypes(GTToolType.SPADE)
        .addTypes(GTToolType.HOE)
        .addTypes(GTToolType.SCYTHE)
        .addTypes(GTToolType.SHEARS)
        .addTypes(GTToolType.WRENCH)
        .addTypes(GTToolType.WRENCH_LV)
        .addTypes(GTToolType.WRENCH_HV)
        .addTypes(GTToolType.WRENCH_IV)
        .addTypes(GTToolType.SCREWDRIVER)
        .addTypes(GTToolType.SCREWDRIVER_LV)
        .addTypes(GTToolType.WIRE_CUTTER)
        .addTypes(GTToolType.WIRE_CUTTER_LV)
        .addTypes(GTToolType.WIRE_CUTTER_HV)
        .addTypes(GTToolType.WIRE_CUTTER_IV)
        .addTypes(GTToolType.MORTAR)
        .addTypes(GTToolType.HARD_HAMMER)
        .addTypes(GTToolType.MINING_HAMMER)
        .addTypes(GTToolType.SAW)
        .addTypes(GTToolType.BUZZSAW)
        .addTypes(GTToolType.KNIFE)
        .addTypes(GTToolType.BUTCHERY_KNIFE)
        .addTypes(GTToolType.FILE)
        .addTypes(GTToolType.CROWBAR)*/