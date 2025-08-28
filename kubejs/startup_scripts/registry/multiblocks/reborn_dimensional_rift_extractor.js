GTCEuStartupEvents.registry('gtceu:recipe_type', phoenixvine => {
    phoenixvine.create('reborn_dimensional_rift_extractor')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 2, 2)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);
});

GTCEuStartupEvents.registry('gtceu:machine', phoenixvine => {
    phoenixvine.create('reborn_dimensional_rift_extractor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('chemical_reactor')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT_SUBTICK, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .pattern(definition => FactoryBlockPattern.start()
        .aisle("BBBBBBB", "CCCCCCC", "CCCCCCC", "CCCCCCC", "CCCCCCC", "CCCCCCC", "CCCCCCC")
.aisle("BDBDBDB", "CCECECC", "CCCCCCC", "CCCCCCC", "CCCCCCC", "CCECECC", "CBDBDBC")
.aisle("BBBBBBB", "CECECEC", "CCECECC", "CCECECC", "CCECECC", "CEDDDEC", "CDBBBDC")
.aisle("BDBDBDB", "CCEFECC", "CCCBCCC", "CCCBCCC", "CCCBCCC", "CCDFDCC", "CBBGBBC")
.aisle("BBBBBBB", "CECECEC", "CCECECC", "CCECECC", "CCECECC", "CEDDDEC", "CDBBBDC")
.aisle("BDBDBDB", "CCECECC", "CCCCCCC", "CCCCCCC", "CCCCCCC", "CCECECC", "CBDBDBC")
.aisle("BBBHBBB", "CCCCCCC", "CCCCCCC", "CCCCCCC", "CCCCCCC", "CCCCCCC", "CCCCCCC")
   .where("A", Predicates.blocks("minecraft:air"))
   .where('B', Predicates.blocks('kubejs:reliable_naquadah_alloy_machine_casing').setMinGlobalLimited(10) // Corrected line
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.INPUT_LASER).setMaxGlobalLimited(1))
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
   .where('C', Predicates.any())
   .where("D", Predicates.blocks("kubejs:phoenix_enriched_naquad_casing"))
   .where("E", Predicates.blocks("gtceu:naquadah_alloy_frame"))
   .where("F", Predicates.blocks("gtceu:tungstensteel_pipe_casing"))
   .where("G", Predicates.blocks("gtceu:heat_vent"))
   .where('H', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingModel(
          "kubejs:block/reliable_naquadah_alloy_machine_casing",
            "gtceu:block/multiblock/fusion_reactor",
        )
});