ServerEvents.recipes(event => {


        event.recipes.gtceu.ember_igniter('flaming_dust')
        .itemInputs('2x gtceu:dormant_ember_dust', '1x gtceu:magma_dust')
        .inputFluids('minecraft:lava 10')
        .itemOutputs('1x kubejs:flaming_dust')
        .duration(300)
        .EUt(32)


})
