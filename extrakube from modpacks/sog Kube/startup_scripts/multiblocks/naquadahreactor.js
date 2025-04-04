GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('naquadahmk1')
        .category('drack')
        .setEUIO('in')
        .setMaxIOSize(0, 0, 2, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})





GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('naquadahreactormk1', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('naquadahmk1')
        .appearanceBlock(GTBlocks.MACHINE_CASING_HV)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('###############', '###############', '###############', '#####ZZZZZ#####', '###############', '###############', '###############')
            .aisle('###############', '###############', '#####CVVVC#####', '###ZZ#####ZZ###', '#####CVVVC#####', '###############', '###############')
            .aisle('###############', '###C###A###C###', '###CC##B##CC###', '##Z##ZZZZZ##Z##', '###CC##B##CC###', '###C###A###C###', '###############')
            .aisle('###############', '##C####A####C##', '##C#########C##', '#Z#ZZ#####ZZ#Z#', '##CA########C##', '##C####A####C##', '###############')
            .aisle('###############', '#######A#######', '##C#########C##', '#Z#ZA#####AZ#Z#', '##C#########C##', '#######A#######', '###############')
            .aisle('#######A#######', '###############', '#C###########C#', 'Z#Z##AA#####Z#Z', '#C###########C#', '###############', '#######A#######')
            .aisle('#######A#######', '###############', '#V#####B#####V#', 'Z#Z##ABBB###Z#Z', '#V#####B#####V#', '###############', '#######A#######')
            .aisle('#####AABAA#####', '##AAA#####AAA##', '#VB###BBB###BV#', 'Z#Z###BBB###Z#Z', '#VB###BBB###BV#', '##AAA#####AAA##', '#####AAAAA#####')
            .aisle('#######A#######', '###############', '#V#####B#####V#', 'Z#Z###BBBA##Z#Z', '#V#####B#####V#', '###############', '#######A#######')
            .aisle('#######A#######', '###############', '#C###########C#', 'Z#Z#####AA##Z#Z', '#C###########C#', '###############', '#######A#######')
            .aisle('###############', '#######A#######', '##C#########C##', '#Z#Z######AZ#Z#', '##C#########C##', '#######A#######', '###############')
            .aisle('###############', '##C####A####C##', '##C#########C##', '#Z#ZZ#####ZZ#Z#', '##C########AC##', '##C####A####C##', '###############')
            .aisle('###############', '###C###A###C###', '###CC##B##CC###', '##Z##ZZZZZ##Z##', '###CC##B##CC###', '###C###A###C###', '###############')
            .aisle('###############', '###############', '#####CVVVC#####', '###ZZ#####ZZ###', '#####CVVVC#####', '###############', '###############')
            .aisle('###############', '###############', '###############', '#####ZOKNZ#####', '###############', '###############', '###############')

            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:europium_block'))
            .where('V',
                 Predicates.blocks('gtceu:naquadah_coil_block')
                   .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                
                )
            .where('Z', Predicates.blocks('gtceu:superconducting_coil'))
            .where('A', Predicates.blocks('gtceu:europium_frame'))
            .where(
                "C",
                Predicates.blocks('gtceu:inert_machine_casing')
                  .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )
            .where('O', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(1)
            )
            .where('N', Predicates.abilities(PartAbility.MAINTENANCE))
            .where('#', Predicates.any())
            .build()
        )
        .workableCasingRenderer("gtceu:block/casings/voltage/zpm/side", 'gtceu:block/multiblock/generator/large_steam_turbine', true)
})