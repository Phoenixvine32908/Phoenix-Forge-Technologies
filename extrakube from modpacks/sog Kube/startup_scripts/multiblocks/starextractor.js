GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('starextractor')
        .category('drack')
        .setEUIO('in')
        .setMaxIOSize(2, 4, 1, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})





GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('starextractor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('starextractor')
        .appearanceBlock(GTBlocks.MACHINE_CASING_IV)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCCCCCC', 'CBBBBBC', 'CBBBBBC', 'CBBBBBC', 'CBBBBBC', 'CBBBBBC', 'CCCCCCC')
            .aisle('CCCCCCC', 'BAAAAAB', 'B#####B', 'B#####B', 'C#####C', 'BAAAAAB', 'CCCCCCC')
            .aisle('CCCCCCC', 'BAWWWAB', 'B#FFF#B', 'B#FFF#B', 'C#FFF#C', 'BAWWWAB', 'CCCCCCC')
            .aisle('CCCCCCC', 'BAWWWAB', 'B#FFF#B', 'B#F#F#B', 'C#FFF#C', 'BAWWWAB', 'CCCCCCC')
            .aisle('CCCCCCC', 'BAWWWAB', 'B#FFF#B', 'B#FFF#B', 'C#FFF#C', 'BAWWWAB', 'CCCCCCC')
            .aisle('CCCCCCC', 'BAAAAAB', 'B#####B', 'B#####B', 'C#####C', 'BAAAAAB', 'CCCCCCC')
            .aisle('CCCCCCC', 'CBOKNBC', 'CBBBBBC', 'CBBBBBC', 'CBBBBBC', 'CBBBBBC', 'CCCCCCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:laminated_glass'))
            .where('A', Predicates.blocks('gtceu:tungstensteel_firebox_casing'))
            .where(
                "C",
                Predicates.blocks('gtceu:robust_machine_casing')
                  .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )
            .where('O', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(1)
            )
            .where('N', Predicates.abilities(PartAbility.MAINTENANCE))
            .where('#', Predicates.air())
            .where('W', Predicates.blocks('gtceu:rtm_alloy_coil_block'))
            .where('F', Predicates.blocks('gtceu:tungstensteel_turbine_casing'))
            .build()
        )
        .workableCasingRenderer("gtceu:block/casings/voltage/iv/side", 'gtceu:block/multiblock/fusion_reactor', true)
})


GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('starcondenser')
        .category('drack')
        .setEUIO('in')
        .setMaxIOSize(1, 0, 0, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})





GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('starcondenser', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('starcondenser')
        .appearanceBlock(GTBlocks.MACHINE_CASING_UV)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', '#A#', '#A#', '#A#', '###', '###', '###', )
            .aisle('CCC', 'ABA', 'ABA', 'ABA', '#A#', '#A#', '#A#', )
            .aisle('CKC', '#A#', '#A#', '#A#', '###', '###', '###', )
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:purple_lamp'))
            .where('A', Predicates.blocks('gtceu:atomic_alloy_frame'))
            .where(
                "C",
                Predicates.blocks('gtceu:atomic_casing')
                  .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                  .or(Predicates.abilities(PartAbility.MAINTENANCE))
            )
            .where('#', Predicates.any())
            .build()
        )
        .workableCasingRenderer("gtceu:block/casings/gcym/atomic_casing", 'gtceu:block/multiblock/fusion_reactor', true)
})