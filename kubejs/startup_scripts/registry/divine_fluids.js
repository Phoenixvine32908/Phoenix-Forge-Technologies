function makePlasma(event, id, color, color2){
    event.create(id).plasma().color(color).secondaryColor(color2);
}

GTCEuStartupEvents.registry('gtceu:material', event => {

    const plasmas = [
        [
            "duck_plasma",
            0xFFA500,
            0xA9423F
        ],
    ];

    plasmas.forEach(plasma => {
        makePlasma(event, plasma[0], plasma[1], plasma[2]);
    })
})

StartupEvents.registry('fluid', event => {


    event.create("chaos")
        .thickTexture(0x000000)
        .bucketColor(0x1E1E1E)
        .displayName("Chaos")

})