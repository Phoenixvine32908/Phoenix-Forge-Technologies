ServerEvents.recipes(event => {



    event.recipes.gtceu.assembler('flux_rejoiner')
        .itemInputs('4x #gtceu:circuits/iv',
            '8x fluxnetworks_flux_dust')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('gtceu:flux_rejoiner')
        .duration(3000)
        .EUt(8192)

        event.recipes.gtceu.flux_rejoiner('flux_dus')
        .itemInputs('4x minecraft:redstone')
        .chancedInput('minecraft:obsidian', 100, 1)
        .itemOutputs('fluxnetworks:flux_dust')
        .duration(300)
        .EUt(8192)

        event.recipes.gtceu.flux_rejoiner('flux_plug')
        .itemInputs('4x fluxnetworks:flux_core', 'fluxnetworks:flux_block')
        .itemOutputs('fluxnetworks:flux_plug')
        .duration(600)
        .EUt(8192)
      event.recipes.gtceu.flux_rejoiner('flux_point')
        .itemInputs('4x fluxnetworks:flux_core', 'minecraft:redstone_block')
        .itemOutputs('fluxnetworks:flux_point')
        .duration(600)
        .EUt(8192)

      event.recipes.gtceu.flux_rejoiner('flux_core')
        .itemInputs('4x fluxnetworks:flux_dust', '4x minecraft:obsidian', 'minecraft:ender_eye')
        .itemOutputs('4x fluxnetworks:flux_core')
        .duration(600)
        .EUt(8192)
      event.recipes.gtceu.flux_rejoiner('flux_block')
        .itemInputs('5x fluxnetworks:flux_dust', '5x fluxnetworks:flux_core')
        .itemOutputs('fluxnetworks:flux_block')
        .duration(300)
        .EUt(8192)


})
