/**
Registry for the melferious matrix
 */

GTCEuStartupEvents.registry("gtceu:recipe_type", phoenixvine => {
    phoenixvine.create("melferious_matrix")
        .category("multiblock")
        .setEUIO("in")
        .setMaxIOSize(4, 6, 4, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);
});

GTCEuStartupEvents.registry("gtceu:machine", phoenixvine => {
    phoenixvine.create("melferious_matrix", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(["melferious_matrix"])
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT_SUBTICK, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("BBBCCCBBB", "BBBCCCBBB", "BBBDDDBBB", "BBBDDDBBB", "BBBEEEBBB", "BBBBBBBBB")
            .aisle("BCCCCCCCB", "BCFGGGFCB", "BDDGGGDDB", "BDDGGGDDB", "BEEGGGEEB", "BBEEEEEBB")
            .aisle("CCCCCCCCC", "CHGIIIGHC", "DHGJJJGHD", "DIGAAAGID", "BEGAAAGEB", "BBEAGAEBB")
            .aisle("CCCCCCCCC", "CHGIJIGHC", "DHGJJJGHD", "DIGABAGID", "BEGAKAGEB", "BBEGGGEBB")
            .aisle("CCCCCCCCC", "CHGIIIGHC", "DHGJJJGHD", "DIGAAAGID", "BEGA2AGEB", "BBEAGAEBB")
            .aisle("BCCCCCCCB", "BCFGGGFCB", "BDDGGGDDB", "BDDGGGDDB", "BEEGGGEEB", "BBEEEEEBB")
            .aisle("BBBCCCBBB", "BBBCLCBBB", "BBBDDDBBB", "BBBDDDBBB", "BBBEEEBBB", "BBBBBBBBB")
            .where("A", Predicates.blocks("minecraft:air"))
            .where("2", Predicates.blocks("minecraft:dirt"))
            .where("B", Predicates.any())
            .where("C", Predicates.blocks("gtceu:sturdy_machine_casing").setMinGlobalLimited(10)
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where("D", Predicates.blocks("gtceu:tungsten_steel_frame"))
            .where("E", Predicates.blocks("minecraft:warped_hyphae"))
            .where("F", Predicates.blocks("gtceu:tungsten_steel_crate"))
            .where("G", Predicates.blocks("gtceu:treated_wood_frame"))
            .where("H", Predicates.blocks("gtceu:tungstensteel_pipe_casing"))
            .where("I", Predicates.blocks("minecraft:honeycomb_block"))
            .where("J", Predicates.blocks("minecraft:honey_block"))
            .where("K", Predicates.blocks("minecraft:poppy"))
            .where("L", Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingModel("gtceu:block/casings/solid/machine_casing_sturdy_hsse", "gtceu:block/multiblock/implosion_compressor")
});
