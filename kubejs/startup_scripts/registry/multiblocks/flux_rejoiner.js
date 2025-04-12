GTCEuStartupEvents.registry('gtceu:recipe_type', phoenixvine => {
    phoenixvine.create('flux_rejoiner')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(4, 1, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL);
});

GTCEuStartupEvents.registry('gtceu:machine', phoenixvine => {
    phoenixvine.create('flux_rejoiner', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('flux_rejoiner')
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.PARALLEL_HATCH])
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .pattern(definition => FactoryBlockPattern.start()
        .aisle("QGQ", "CCC", "QGQ")
        .aisle("G9G", "COC", "G9G")
        .aisle("QGQ", "C@C", "QGQ")
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('O', Predicates.blocks("minecraft:air"))
            .where('Q', Predicates.blocks("minecraft:crying_obsidian"))
            .where('G', Predicates.blocks("gtceu:purple_lamp"))
            .where('A', Predicates.blocks("minecraft:obsidan"))
            .where('9', Predicates.blocks("fluxnetworks:flux_block"))
            .where('C', Predicates.blocks("gtceu:robust_machine_casing").setMinGlobalLimited(1) // Corrected line
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .build())
            .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_robust_tungstensteel", "gtceu:block/multiblock/large_miner", false)
});