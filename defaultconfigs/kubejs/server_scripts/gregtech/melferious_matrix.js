ServerEvents.recipes(event => {



    event.recipes.gtceu.assembler('melferious_matrix')
        .itemInputs('4x #gtceu:circuits/iv',
            '8x fluxnetworks_flux_dust')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('gtceu:melferious_matrix')
        .duration(3000)
        .EUt(8192)

        event.recipes.gtceu.melferious_matrix('comb')
        .itemInputs[{ item: Item.of("productivebees:bee_cage", '{EntityTag:{type:"' + 'productivebees:epoxy' + '"}}')}]
        .itemOutputs[{ item: Item.of("productivebees:configurable_comb", '{EntityTag:{type:"' + 'productivebees:epoxy' + '"}}')}]
        .duration(300)
        .EUt(8192)



})
