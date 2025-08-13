
GTCEuStartupEvents.registry('gtceu:recipe_type', phoenixvine => {
    phoenixvine.create('comb_decanting')
        .category('bees')
        .setEUIO('in')
        .setMaxIOSize(1, 2, 0, 2)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);
          phoenixvine.create('swarm_nurturing')
        .category('bees')
        .setEUIO('in')
        .setMaxIOSize(2, 1, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);
          phoenixvine.create('apis_progenitor')
        .category('bees')
        .setEUIO('in')
        .setMaxIOSize(2, 1, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);
          phoenixvine.create('simulated_colony')
        .category('bees')
        .setEUIO('in')
        .setMaxIOSize(3, 1, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);
});

GTCEuStartupEvents.registry('gtceu:machine', phoenixvine => {
             phoenixvine.create('comb_decanter', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('comb_decanting')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .appearanceBlock(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .pattern(definition => FactoryBlockPattern.start()
       .aisle("BCDDDCB", "BCDDDCB", "BCDDDCB", "BCDDDCB", "BBBBBBB", "BBBBBBB", "BBBBBBB", "BBBBBBB")
.aisle("CDDDDDC", "CDEAEDC", "CDAAADC", "CDAAADC", "BCFFFCB", "BBGGGBB", "BBFFFBB", "BBDDDBB")
.aisle("DDDDDDD", "DECACED", "DACACAD", "DACACAD", "BFFAFFB", "BGGAGGB", "BFFAFFB", "BDDDDDB")
.aisle("DDDDDDD", "DAAAAAD", "DAAAAAD", "DAAAAAD", "BFAAAFB", "BGAAAGB", "BFAAAFB", "BDDHDDB")
.aisle("DDDDDDD", "DECACED", "DACACAD", "DACACAD", "BFFAFFB", "BGGAGGB", "BFFAFFB", "BDDDDDB")
.aisle("CDDDDDC", "CDEAEDC", "CDAAADC", "CDAAADC", "BCFFFCB", "BBGGGBB", "BBFFFBB", "BBDDDBB")
.aisle("BCDDDCB", "BCDJDCB", "BCDDDCB", "BCDDDCB", "BBBBBBB", "BBBBBBB", "BBBBBBB", "BBBBBBB")
   .where("A", Predicates.blocks("minecraft:air"))
   .where('B', Predicates.any())
   .where("C", Predicates.blocks("gtceu:tungsten_steel_frame"))
   .where('D', Predicates.blocks('gtceu:high_temperature_smelting_casing').setMinGlobalLimited(10) 
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
   .where("E", Predicates.blocks("minecraft:honey_block"))
   .where("F", Predicates.blocks("gtceu:rtm_alloy_coil_block"))
   .where("G", Predicates.blocks("gtceu:heat_vent"))
   .where("H", Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1))
   .where('J', Predicates.controller(Predicates.blocks(definition.get())))

            .build())
        .workableCasingRenderer(
            "gtceu:block/casings/gcym/high_temperature_smelting_casing",
            "gtceu:block/multiblock/large_miner",
            false
        )

             phoenixvine.create('swarm_nuturer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('swarm_nurturing')
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT])
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern.start()
      .aisle("BCCCB", "BDDDB", "BDDDB", "BCCCB")
.aisle("CBBBC", "DEEED", "DAAAD", "CEEEC")
.aisle("CBBBC", "DFFFD", "DAAAD", "CFFFC")
.aisle("CBBBC", "DEEED", "DAAAD", "CEEEC")
.aisle("CBBBC", "CBGBC", "CBBBC", "CCCCC")
   .where("A", Predicates.blocks("minecraft:air"))
      .where('B', Predicates.blocks('gtceu:clean_machine_casing').setMinGlobalLimited(2) 
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
   .where("C", Predicates.blocks("gtceu:stainless_steel_frame"))
   .where("D", Predicates.blocks("gtceu:molybdenum_disilicide_coil_block"))
   .where("E", Predicates.blocks("gtceu:steel_frame"))
   .where("F", Predicates.blocks("gtceu:stainless_steel_gearbox"))
   .where('G', Predicates.controller(Predicates.blocks(definition.get())))

            .build())
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_clean_stainless_steel",
            "gtceu:block/multiblock/large_miner",
            false
        )

              phoenixvine.create('apis_progenitor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('apis_progenitor')
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT])
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .pattern(definition => FactoryBlockPattern.start()
.aisle("BBBBB", "CDDDC", "CDDDC", "CDDDC", "EFFFE")
.aisle("BGGGB", "DHHHD", "DAAAD", "DAAAD", "FBBBF")
.aisle("BGGGB", "DHHHD", "DAAAD", "DAAAD", "FBBBF")
.aisle("BGGGB", "DHHHD", "DAAAD", "DAAAD", "FBBBF")
.aisle("BBIBB", "CDDDC", "CDDDC", "CDDDC", "EFFFE")
   .where("A", Predicates.blocks("minecraft:air"))
   .where('B', Predicates.blocks('gtceu:robust_machine_casing').setMinGlobalLimited(2) 
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
   .where("C", Predicates.blocks("gtceu:tungsten_steel_frame"))
   .where("D", Predicates.blocks("gtceu:tempered_glass"))
  .where('E', Predicates.any())
   .where("F", Predicates.blocks("gtceu:treated_wood_frame"))
   .where("G", Predicates.blocks("minecraft:dirt"))
   .where("H", Predicates.blocks("minecraft:poppy"))
   .where('I', Predicates.controller(Predicates.blocks(definition.get())))

            .build())
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_robust_tungstensteel",
            "gtceu:block/multiblock/large_miner",
            false
        )

        
              phoenixvine.create('simulated_colony', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('simulated_colony')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
.aisle("BCDDDCB", "BCEEECB", "BCEEECB", "BCEEECB", "BBBBBBB")
.aisle("CDFFFDC", "CGAHAGC", "CGAIAGC", "CGAAAGC", "BBFFFBB")
.aisle("DFFFFFD", "EAAAAAE", "EAAAAAE", "EAAAAAE", "BFFFFFB")
.aisle("DFFFFFD", "EHAHAHE", "EIAIAIE", "EAAAAAE", "BFFFFFB")
.aisle("DFFFFFD", "EAAAAAE", "EAAAAAE", "EAAAAAE", "BFFFFFB")
.aisle("CDFFFDC", "CGAHAGC", "CGAIAGC", "CGAAAGC", "BBFFFBB")
.aisle("BCDJDCB", "BCEEECB", "BCEEECB", "BCEEECB", "BBBBBBB")
   .where("A", Predicates.blocks("minecraft:air"))
   .where('B', Predicates.any())
   .where("C", Predicates.blocks("gtceu:treated_wood_frame"))
   .where("D", Predicates.blocks("gtceu:solid_machine_casing"))
      .where('D', Predicates.blocks('gtceu:solid_machine_casing').setMinGlobalLimited(2) 
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setExactLimit(1))
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
   .where("E", Predicates.blocks("gtceu:tempered_glass"))
   .where("F", Predicates.blocks("gtceu:treated_wood_planks"))
   .where("G", Predicates.blocks("gtceu:steel_frame"))
   .where("H", Predicates.blocks("minecraft:dirt"))
   .where("I", Predicates.blocks("minecraft:poppy"))
  .where('J', Predicates.controller(Predicates.blocks(definition.get())))

            .build())
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/multiblock/large_miner",
            false
        )
});
