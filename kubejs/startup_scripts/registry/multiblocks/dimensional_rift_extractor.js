GTCEuStartupEvents.registry('gtceu:recipe_type', phoenixvine => {
  phoenixvine.create('dimensional_anchoring12')
    .category('dim')
    .setEUIO('in')
    .setMaxIOSize(3, 30, 1, 0) // Adjusted values
    .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.ARC);

phoenixvine.create('aetherial_fabrication12')
    .category('dim')
    .setEUIO('in')
    .setMaxIOSize(3, 25, 1, 0) // Adjusted values
    .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.ARC);
});
GTCEuStartupEvents.registry('gtceu:machine', phoenixvine => {
    phoenixvine.create('dimensional_anchor12', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('dimensional_anchoring12')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH,GTRecipeModifiers.OC_NON_PERFECT])
        .appearanceBlock(GTBlocks.CASING_TITANIUM_STABLE)
        .pattern(definition => FactoryBlockPattern.start()
        .aisle("BCDCB", "BBEBB", "BBEBB", "BBEBB", "BBBBB", "BBBBB", "BBBBB", "BBBBB", "BBBBB", "BBBBB", "BBBBB", "BBBBB")
.aisle("CCCCC", "BEFEB", "BEGEB", "BBEBB", "BBEBB", "BBEBB", "BBEBB", "BBBBB", "BBBBB", "BBBBB", "BBBBB", "BBBBB")
.aisle("DCCCD", "EFFFE", "EGHGE", "EEGEE", "BEGEB", "BEGEB", "BEGEB", "BBEBB", "BBEBB", "BBEBB", "BBEBB", "BBEBB")
.aisle("CCCCC", "BEFEB", "BEGEB", "BBEBB", "BBEBB", "BBEBB", "BBEBB", "BBBBB", "BBBBB", "BBBBB", "BBBBB", "BBBBB")
.aisle("BCICB", "BBEBB", "BBEBB", "BBEBB", "BBBBB", "BBBBB", "BBBBB", "BBBBB", "BBBBB", "BBBBB", "BBBBB", "BBBBB")
   .where('B', Predicates.any())
          .where("C", Predicates.blocks("gtceu:stable_machine_casing").setMinGlobalLimited(5)
                 .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
   .or(Predicates.autoAbilities(definition.getRecipeTypes())))
   .where("D", Predicates.blocks("gtceu:titanium_firebox_casing"))
   .where("E", Predicates.blocks("gtceu:titanium_frame"))
   .where("F", Predicates.blocks("gtceu:nichrome_coil_block"))
   .where("G", Predicates.blocks("gtceu:titanium_gearbox"))
   .where("H", Predicates.blocks("gtceu:high_temperature_smelting_casing"))
   .where('I', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
            .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_stable_titanium", "gtceu:block/multiblock/large_miner", false)
            
            phoenixvine.create('aetherial_fabricator12', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('aetherial_fabrication12')
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.PARALLEL_HATCH])
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("BCCCB", "BDDDB", "BCCCB", "BBCBB", "BBCBB", "BBBBB", "BBBBB", "BBBBB", "BBBBB", "BBBBB", "BBBBB")
            .aisle("CEEEC", "DAAAD", "CAAAC", "BEAEB", "BEAEB", "BEEEB", "BBEBB", "BBEBB", "BBBBB", "BBBBB", "BBBBB")
            .aisle("CEEEC", "DAAAD", "CAAAC", "CAAAC", "CAAAC", "BEAEB", "BEAEB", "BEAEB", "BBCBB", "BBDBB", "BBCBB")
            .aisle("CEEEC", "DAAAD", "CAAAC", "BEAEB", "BEAEB", "BEEEB", "BBEBB", "BBEBB", "BBBBB", "BBBBB", "BBBBB")
            .aisle("BCCCB", "BCFCB", "BCCCB", "BBCBB", "BBCBB", "BBBBB", "BBBBB", "BBBBB", "BBBBB", "BBBBB", "BBBBB")
            .where("A", Predicates.blocks("minecraft:air"))
            .where('B', Predicates.any())
            .where("C", Predicates.blocks("gtceu:clean_machine_casing").setMinGlobalLimited(5)
             .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
   .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where("D", Predicates.blocks("gtceu:kanthal_coil_block"))
            .where("E", Predicates.blocks("gtceu:stainless_steel_frame"))
            .where('F', Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        // CRITICAL FIX FOR THIS MACHINE: Use the custom machine's own block model for rendering
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_clean_stainless_steel', 'gtceu:block/multiblock/large_miner', false);
      
});