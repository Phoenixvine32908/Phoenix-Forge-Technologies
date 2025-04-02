function makeIconSet(event, id, parent){
    event.create(id).parent(parent);
}

function makeElement(event, id, prot, neut, sym){
    event.create(id).protons(prot).neutrons(neut).symbol(sym);
}

function makeMaterial(event, id, color, color2, icon, flgs, prps){
    const mat = event.create(id)
    .ingot()
    .element(GTElements.get(id))
    .color(color)
    .secondaryColor(color2)
    .iconSet(icon)
    .flags(flgs)
    .fluid();
    mat.cableProperties.apply(mat, prps)
}

GTCEuStartupEvents.registry('gtceu:element', event => {

    const elements = [
        [
            "phoenix_enriched_neutronium",
            29,
            32,
            "PENEU"
        ],
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
        phoenix_enriched_neutronium: shiny,
        phoenix_enriched_tritanium: shiny,
        phoenix_enriched_naquad: shiny,
        akashic_zeronium: shiny
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

    const materials = [
        [
            "akashic_zeronium",
            0x8F00FF,
            0x000000,
            [GTValues.V[GTValues.MAX], 400000, 400000, true]
        ],
        [
            "phoenix_enriched_naquad",
            0xFFA500,
            0x000000,
            [GTValues.V[GTValues.ZPM], 64, 8, true]
        ],
        [
            "phoenix_enriched_tritanium",
            0xFF0000,
            0x000000,
            [GTValues.V[GTValues.ZPM], 64, 8, true]
        ],
        [
            "phoenix_enriched_neutronium",
            0xFFFFFF,
            0xCBC3E3,
            [GTValues.V[GTValues.ZPM], 64, 8, true]
        ]
    ]

    materials.forEach(mat => {
        makeMaterial(event, mat[0], mat[1], mat[2], "shiny", materialFlags, mat[3]);
    });

});
