GTCEuStartupEvents.registry('gtceu:recipe_type', sasline => {
    sasline.create('draconic_mk1')
        .category('compact_draconic_reactors')
        .setEUIO('out')
        .setMaxIOSize(3, 3, 3, 3)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);

    sasline.create('draconic_mk2')
        .category('compact_draconic_reactors')
        .setEUIO('out')
        .setMaxIOSize(3, 3, 3, 3)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);

    sasline.create('draconic_mk3')
        .category('compact_draconic_reactors')
        .setEUIO('out')
        .setMaxIOSize(3, 3, 3, 3)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);
});

GTCEuStartupEvents.registry('gtceu:machine', sasline => {
    // MK1
    sasline.create('compact_draconic_fusion_reactor_mk1', 'multiblock')
        .tooltips(Component.translatable('block.gtceu.draconic_fusion_reactor_mki.desc'))
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GCYMBlocks.CASING_ATOMIC)
        .generator(true)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH]) 
        .recipeType("draconic_mk1")
        .pattern(definition => FactoryBlockPattern.start()
            .aisle(" xxx ","xxxxx","xxxxx","xxxxx"," xxx ")
            .aisle("xxxxx","xyyyx","xyyyx","xyyyx","xxxxx")
            .aisle("xxxxx","xyiyx","xzbzx","xyzyx","xxxxx")
            .aisle("xxxxx","xyyyx","xyyyx","xyyyx","xxxxx")
            .aisle(" xcx ","xsssx","xsssx","xsssx"," xxx ")
            .where('c', Predicates.controller(Predicates.blocks(definition.get())))
            .where('z', Predicates.blocks('draconicevolution:reactor_stabilizer'))
            .where('x', Predicates.blocks('gtceu:fusion_casing').setMinGlobalLimited(30)
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.OUTPUT_LASER).setMaxGlobalLimited(1))
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('i', Predicates.blocks('draconicevolution:reactor_injector'))
            .where('s', Predicates.blocks('gtceu:fusion_glass'))
            .where('b', Predicates.blocks('draconicevolution:reactor_core'))
            .where(' ', Predicates.any())
            .where('y', Predicates.air())
        .build())
        .workableCasingRenderer(
            "gtceu:block/casings/fusion/fusion_casing",
            "gtceu:block/multiblock/fusion_reactor",
            false
        );

    // MK2
    sasline.create('compact_draconic_fusion_reactor_mk2', 'multiblock')
        .tooltips(Component.translatable('block.gtceu.draconic_fusion_reactor_mkii.desc'))
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GCYMBlocks.CASING_ATOMIC)
        .generator(true)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH]) 
        .recipeType("draconic_mk2")
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("  xxx  "," xxxxx ","xxxxxxx","xxxxxxx","xxxxxxx"," xxxxx ","  xxx  ")
            .aisle(" xxxxx ","xyyyyyx","xyyyyyx","xyyzyyx","xyyyyyx","xyyyyyx"," xxxxx ")
            .aisle("xxxxxxx","xyyyyyx","xyyyyyx","xyyyyyx","xyyyyyx","xyyyyyx","xxxxxxx")
            .aisle("xxxxxxx","xyyiyyx","xyyyyyx","xzybyzx","xyyyyyx","xyyzyyx","xxxxxxx")
            .aisle("xxxxxxx","xyyyyyx","xyyyyyx","xyyyyyx","xyyyyyx","xyyyyyx","xxxxxxx")
            .aisle(" xxxxx ","xyyyyyx","xyyyyyx","xyyyyyx","xyyyyyx","xyyyyyx"," xxxxx ")
            .aisle("  xcx  "," xsssx ","xsssssx","xsssssx","xsssssx"," xsssx ","  xxx  ")
            .where('c', Predicates.controller(Predicates.blocks(definition.get())))
            .where('z', Predicates.blocks('draconicevolution:reactor_stabilizer'))
            .where('x', Predicates.blocks('gtceu:fusion_casing_mk2').setMinGlobalLimited(50)
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.OUTPUT_LASER).setMaxGlobalLimited(1))
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('i', Predicates.blocks('draconicevolution:reactor_injector'))
            .where('s', Predicates.blocks('gtceu:fusion_glass'))
            .where('b', Predicates.blocks('draconicevolution:reactor_core'))
            .where(' ', Predicates.any())
            .where('y', Predicates.air())
        .build())
        .workableCasingRenderer(
            "gtceu:block/casings/fusion/fusion_casing_mk2",
            "gtceu:block/multiblock/fusion_reactor",
            false
        );

    // MK3
    sasline.create('compact_draconic_fusion_reactor_mk3', 'multiblock')
        .tooltips(Component.translatable('block.gtceu.draconic_fusion_reactor_mkiii.desc'))
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GCYMBlocks.CASING_ATOMIC)
        .generator(true)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH]) 
        .recipeType("draconic_mk3")
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("   xxx   ","  xxxxx  "," xxxxxxx ","xxxxxxxxx","xxxxxxxxx","xxxxxxxxx"," xxxxxxx ","  xxxxx  ","   xxx   ")
            .aisle("  xxxxx  "," xaaaaax ","xaaaaaaax","xaaaaaaax","xaaaaaaax","xaaaaaaax","xaaaaaaax"," xaaaaax ","  xxxxx  ")
            .aisle(" xxxxxxx ","xaaaaaaax","xayyyyyax","xayyyyyax","xayyzyyax","xayyyyyax","xayyyyyax","xaaaaaaax"," xxxxxxx ")
            .aisle("xxxxxxxxx","xaaaaaaax","xayyyyyax","xayyyyyax","xayyyyyax","xayyyyyax","xayyyyyax","xaaaaaaax","xxxxxxxxx")
            .aisle("xxxxxxxxx","xaaaaaaax","xayyiyyax","xayyyyyax","xazybyzax","xayyyyyax","xayyzyyax","xaaaaaaax","xxxxxxxxx")
            .aisle("xxxxxxxxx","xaaaaaaax","xayyyyyax","xayyyyyax","xayyyyyax","xayyyyyax","xayyyyyax","xaaaaaaax","xxxxxxxxx")
            .aisle(" xxxxxxx ","xaaaaaaax","xayyyyyax","xayyyyyax","xayyyyyax","xayyyyyax","xayyyyyax","xaaaaaaax"," xxxxxxx ")
            .aisle("  xxxxx  "," xaaaaax ","xayyyyyax","xayyyyyax","xayyyyyax","xayyyyyax","xayyyyyax"," xaaaaax ","  xxxxx  ")
            .aisle("   xcx   ","  xxxxx  "," xsssssx ","xxsssssxx","xxsssssxx","xxsssssxx"," xsssssx ","  xxxxx  ","   xxx   ")
            .where('c', Predicates.controller(Predicates.blocks(definition.get())))
            .where('z', Predicates.blocks('draconicevolution:reactor_stabilizer'))
            .where('x', Predicates.blocks('gtceu:fusion_casing_mk3').setMinGlobalLimited(50)
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.OUTPUT_LASER).setMaxGlobalLimited(1))
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('i', Predicates.blocks('draconicevolution:reactor_injector'))
            .where('s', Predicates.blocks('gtceu:fusion_glass'))
            .where('b', Predicates.blocks('draconicevolution:reactor_core'))
            .where(' ', Predicates.any())
            .where('y', Predicates.air())
            .where('a', Predicates.blocks('draconicevolution:infused_obsidian'))
        .build())
        .workableCasingRenderer(
            "gtceu:block/casings/fusion/fusion_casing_mk3",
            "gtceu:block/multiblock/fusion_reactor",
            false
        );
});