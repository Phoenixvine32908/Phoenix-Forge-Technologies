
GTCEuStartupEvents.registry('gtceu:recipe_type', phoenixvine => {
    phoenixvine.create('pressurized_fission_reactor')
        .category('fission')
        .setEUIO('out')
        .setMaxIOSize(1, 1, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);
        phoenixvine.create('advanced_pressurized_fission_reactor')
        .category('fission')
        .setEUIO('out')
        .setMaxIOSize(1, 1, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);
        phoenixvine.create('pressurized_fission_turbine')
        .category('fission')
        .setEUIO('out')
        .setMaxIOSize(0, 0, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL);
});

GTCEuStartupEvents.registry('gtceu:machine', phoenixvine => {
    phoenixvine.create('pressurized_fission_turbine', 'multiblock').machine((holder) => new $LargeTurbineMachine(holder, GTValues.IV))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('pressurized_fission_turbine')
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT])
        .appearanceBlock(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .pattern(definition => FactoryBlockPattern.start()
        .aisle("BBBBBBB", "BCCCCCB", "BCCCCCB", "BCCCCCB", "BBBBBBB")
        .aisle("BBBBBBB", "BAAAAAB", "BAAEAAB", "BAAAAAB", "BBCBCBB")
        .aisle("BBBBBBB", "BAEAEAB", "BEEEEEB", "BAEAEAB", "BCCGCCB")
        .aisle("BBBBBBB", "BAAAAAB", "BAAEAAB", "BAAAAAB", "BBCBCBB")
        .aisle("BBBBBBB", "BCCCCCB", "BCCDCCB", "BCCCCCB", "BBBBBBB")
           .where("A", Predicates.blocks("minecraft:air"))
           .where("B", Predicates.blocks("kubejs:fissile_reaction_safe_casing"))
           .where('C', Predicates.blocks('kubejs:fissile_heat_safe_casing').setMinGlobalLimited(6) // Corrected line
           .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
           .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
           .or(Predicates.abilities(PartAbility.OUTPUT_ENERGY).setMaxGlobalLimited(8))
           .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
           .where('D', Predicates.controller(Predicates.blocks(definition.get())))
           .where("E", Predicates.blocks("kubejs:fissile_safe_gearbox"))
           .where("G", Predicates.abilities(PartAbility.ROTOR_HOLDER))
            .build())
        .workableCasingRenderer(
          "kubejs:block/fissile_heat_safe_casing",
            "gtceu:block/multiblock/large_chemical_reactor",
            false
        )
    phoenixvine.create('pressurized_fission_reactor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('pressurized_fission_reactor')
        .generator(true)
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT])
        .appearanceBlock(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .pattern(definition => FactoryBlockPattern.start()
        .aisle("BCCCB", "CDDDC", "CDDDC", "CDDDC", "BCCCB")
        .aisle("CEFEC", "DGGGD", "DGGGD", "DGGGD", "CDHDC")
        .aisle("CFEFC", "DGFGD", "DGFGD", "DGFGD", "CHEHC")
        .aisle("CEFEC", "DGGGD", "DGGGD", "DGGGD", "CDHDC")
        .aisle("BCICB", "CDDDC", "CDDDC", "CDDDC", "BCCCB")
        .where("A", Predicates.blocks("minecraft:air"))
        .where('B', Predicates.any())
        .where('C', Predicates.blocks('kubejs:fissile_reaction_safe_casing').setMinGlobalLimited(12) // Corrected line
        .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
        .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
        .or(Predicates.abilities(PartAbility.OUTPUT_ENERGY).setMaxGlobalLimited(8))
        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
        .where("D", Predicates.blocks("minecraft:tinted_glass"))
        .where("E", Predicates.blocks("gtceu:kanthal_coil_block"))
        .where("F", Predicates.blocks("kubejs:base_fission_casing"))
        .where("G", Predicates.blocks("minecraft:ice"))
        .where("H", Predicates.blocks("kubejs:fissile_heat_safe_casing"))
        .where('I', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingRenderer(
          "kubejs:block/fissile_reaction_safe_casing",
            "gtceu:block/multiblock/fusion_reactor",
            false
        )
        phoenixvine.create('advanced_pressurized_fission_reactor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('advanced_pressurized_fission_reactor')
        .generator(true)
        .noRecipeModifier()
        .appearanceBlock(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .pattern(definition => FactoryBlockPattern.start()
        .aisle("BCCCCCB", "CDDDDDC", "CDDDDDC", "CDDDDDC", "CDDDDDC", "CDDDDDC", "BCCCCCB")
        .aisle("CCCCCCC", "DAAEAAD", "DAAEAAD", "DAAEAAD", "DAAEAAD", "DAAEAAD", "CDDFDDC")
        .aisle("CCGEGCC", "DAHHHAD", "DAHHHAD", "DAHHHAD", "DAIIIAD", "DAEEEAD", "CDFGFDC")
        .aisle("CCEEECC", "DEHEHED", "DEHEHED", "DEHEHED", "DEIEIED", "DEEEEED", "CFGFGFC")
        .aisle("CCGEGCC", "DAHHHAD", "DAHHHAD", "DAHHHAD", "DAIIIAD", "DAEEEAD", "CDFGFDC")
        .aisle("CCCCCCC", "DAAEAAD", "DAAEAAD", "DAAEAAD", "DAAEAAD", "DAAEAAD", "CDDFDDC")
        .aisle("BCCJCCB", "CDDDDDC", "CDDDDDC", "CDDDDDC", "CDDDDDC", "CDDDDDC", "BCCCCCB")
           .where("A", Predicates.blocks("minecraft:air"))
           .where('B', Predicates.any())
           .where('C', Predicates.blocks('kubejs:fissile_reaction_safe_casing').setMinGlobalLimited(12) // Corrected line
           .or(Predicates.abilities(PartAbility.IMPORT_ITEMS))
           .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
           .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS))
           .or(Predicates.abilities(PartAbility.EXPORT_FLUIDS))
           .or(Predicates.abilities(PartAbility.OUTPUT_ENERGY).setMaxGlobalLimited(8))
        .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
           .where("D", Predicates.blocks("minecraft:tinted_glass"))
           .where("E", Predicates.blocks("kubejs:base_fission_casing"))
           .where("F", Predicates.blocks("kubejs:fissile_heat_safe_casing"))
           .where("G", Predicates.blocks("gtceu:nichrome_coil_block"))
           .where("H", Predicates.blocks("kubejs:fission_cooling_casing"))
           .where("I", Predicates.blocks("minecraft:ice"))
           .where('J', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingRenderer(
          "kubejs:block/fissile_reaction_safe_casing",
            "gtceu:block/multiblock/fusion_reactor",
            false
        )
});
