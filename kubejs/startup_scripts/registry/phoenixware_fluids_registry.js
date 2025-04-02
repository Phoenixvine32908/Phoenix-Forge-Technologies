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

    plasmas.forEach(plasma => {
        makePlasma(event, plasma[0], plasma[1], plasma[2]);
    })
})