GTCEuStartupEvents.registry('gtceu:recipe_type', phoenixvine => {
    phoenixvine.create('high_pressure_arc_furnace')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 2, 2)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);
});

GTCEuStartupEvents.registry('gtceu:machine', phoenixvine => {
    phoenixvine.create('high_pressure_arc_furnace', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('high_pressure_arc_furnace')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT_SUBTICK])
        .appearanceBlock(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .pattern(definition => FactoryBlockPattern.start()
        .aisle("CCCCCCC", "OOOOOOO", "OOOOOOO", "OOOOOOO", "OOOOOOO", "OOOOOOO", "CCCCCCC", "OOOOOOO", "OOOOOOO", "OOOOOOO", "OOOOOOO")
        .aisle("CCCCCCC", "OOAOAOO", "OOOOOOO", "OOOOOOO", "OOOOOOO", "OOAOAOO", "C2QQQ2C", "O3QQQ3O", "O32223O", "O3QQQ3O", "OCCCCCO")
        .aisle("CCCCCCC", "OAOAOAO", "OOAOAOO", "OOAOAOO", "OOAOAOO", "OACCCAO", "CQOGOQC", "OQOGOQO", "O2O9O2O", "OQOGOQO", "OCGGGCO")
        .aisle("CCCCCCC", "OOA3AOO", "OOO3OOO", "OOO3OOO", "OOO3OOO", "OOC2COO", "CQGOGQC", "OQG9GQO", "O29192O", "OQG9GQO", "OCGGGCO")
        .aisle("CCCCCCC", "OAOAOAO", "OOAOAOO", "OOAOAOO", "OOAOAOO", "OACCCAO", "CQOGOQC", "OQOGOQO", "O2O9O2O", "OQOGOQO", "OCGGGCO")
        .aisle("CCCCCCC", "OOAOAOO", "OOOOOOO", "OOOOOOO", "OOOOOOO", "OOAOAOO", "C2QQQ2C", "O3QQQ3O", "O32223O", "O3QQQ3O", "OCCCCCO")
        .aisle("CCCCCCC", "OOOOOOO", "OOOOOOO", "OOOOOOO", "OOOOOOO", "OOOOOOO", "CCC@CCC", "OOOOOOO", "OOOOOOO", "OOOOOOO", "OOOOOOO")
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('O', Predicates.blocks("minecraft:air"))
            .where('Q', Predicates.blocks("kubejs:plasma_resistant"))
            .where('G', Predicates.blocks("kubejs:heat_dissipating_coils"))
            .where('A', Predicates.blocks("gtceu:naquadah_alloy_frame"))
            .where('9', Predicates.blocks("kubejs:quantum_stabilized_electrodes"))
            .where('2', Predicates.blocks("gtceu:heat_vent"))
            .where('3', Predicates.blocks("gtceu:trinium_coil_block"))
            .where('1', Predicates.blocks("kubejs:supercooled_reactor_core"))
            .where('C', Predicates.blocks('gtceu:high_temperature_smelting_casing').setMinGlobalLimited(10) // Corrected line
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.INPUT_LASER).setMaxGlobalLimited(1))
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .build())
        .workableCasingRenderer(
            "gtceu:block/casings/gcym/high_temperature_smelting_casing",
            "gtceu:block/multiblock/fusion_reactor",
            false
        )
});