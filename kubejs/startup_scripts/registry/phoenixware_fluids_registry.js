function makePlasma(event, id, color, color2){
    event.create(id).plasma().color(color).secondaryColor(color2);
}

GTCEuStartupEvents.registry('gtceu:material', event => {

    const plasmas = [
        [
            "superheated_plasma",
            0xFFA500,
            0xA9423F
        ],
        [
            "dormant_phoenix_based_plasma",
            0xcd8c19,
            0xA9423F
        ],
        [
            "quantum_stable_plasma",
            0xd8d6d6,
            0xA9423F
        ],
        [
            "true_phoenix_based_plasma",
            0x8d00fc,
            0x00FFFF
        ],
        [
            "active_phoenix_based_plasma",
            0xfc4f4f,
            0xA9423F
        ]
    ]

    event.create("trinaquadalloy")
        .ingot().fluid()
        .color(0x281832).iconSet(GTMaterialIconSet.BRIGHT)
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .components('6x trinium', '2x naquadah', '1x carbon')
        .blastTemp(8747, 'higher', GTValues.VA[GTValues.ZPM], 1200)

    plasmas.forEach(plasma => {
        makePlasma(event, plasma[0], plasma[1], plasma[2]);
    })
})
StartupEvents.registry('fluid', event => {

    event.create("grass_water")
        .thinTexture(0x00ff11)
        .bucketColor(0x00ff11)
        .displayName("Grass Water")

})