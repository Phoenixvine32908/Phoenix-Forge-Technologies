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
        .aisle("BBBBBBB", "CCCCCCC", "CCCCCCC", "CCCCCCC", "CCCCCCC", "CCCCCCC", "BBBBBBB", "CCCCCCC", "CCCCCCC", "CCCCCCC", "CCCCCCC")
.aisle("BBBBBBB", "CCDCDCC", "CCACCCC", "CCACCCC", "CCACCCC", "CCDCDCC", "BEFFFEB", "CGFFFGC", "CGEEEGC", "CGFFFGC", "CBBBBBC")
.aisle("BBBBBBB", "CDCDCDC", "CCDADCC", "CCDADCC", "CCDADCC", "CDBBBDC", "BFAHAFB", "CFAHAFC", "CEAIAEC", "CFAHAFC", "CBHHHBC")
.aisle("BBBBBBB", "CCDGDCC", "CCAGACC", "CCAGACC", "CCAGACC", "CCBEBCC", "BFHAHFB", "CFHIHFC", "CEIJIEC", "CFHIHFC", "CBHHHBC")
.aisle("BBBBBBB", "CDCDCDC", "CCDADCC", "CCDADCC", "CCDADCC", "CDBBBDC", "BFAHAFB", "CFAHAFC", "CEAIAEC", "CFAHAFC", "CBHHHBC")
.aisle("BBBBBBB", "CCDCDCC", "CCCCCCC", "CCCCCCC", "CCCCCCC", "CCDCDCC", "BEFFFEB", "CGFFFGC", "CGEEEGC", "CGFFFGC", "CBBBBBC")
.aisle("BBBBBBB", "CCCCCCC", "CCCCCCC", "CCCCCCC", "CCCCCCC", "CCCCCCC", "BBBKBBB", "CCCCCCC", "CCCCCCC", "CCCCCCC", "CCCCCCC")
   .where("A", Predicates.blocks("minecraft:air"))
   .where('B', Predicates.blocks('gtceu:high_temperature_smelting_casing').setMinGlobalLimited(10) // Corrected line
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.INPUT_LASER).setMaxGlobalLimited(1))
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
   .where('C', Predicates.any())
   .where("D", Predicates.blocks("gtceu:naquadah_alloy_frame"))
   .where("E", Predicates.blocks("gtceu:heat_vent"))
   .where("F", Predicates.blocks("kubejs:plasma_resistant"))
   .where("G", Predicates.blocks("gtceu:trinium_coil_block"))
   .where("H", Predicates.blocks("kubejs:heat_dissipating_coils"))
   .where("I", Predicates.blocks("kubejs:quantum_stabilized_electrodes"))
   .where("J", Predicates.blocks("kubejs:volatile_plasma_chamber"))
   .where('K', Predicates.controller(Predicates.blocks(definition.get())))

            .build())
        .workableCasingRenderer(
            "gtceu:block/casings/gcym/high_temperature_smelting_casing",
            "gtceu:block/multiblock/fusion_reactor",
            false
        )
});