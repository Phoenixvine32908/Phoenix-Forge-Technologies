
const $LargeTurbineMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.generator.LargeTurbineMachine")
GTCEuStartupEvents.registry('gtceu:recipe_type', phoenixvine => {
    phoenixvine.create('test_turbine')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 2, 2)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);
        phoenixvine.create("earth_sieve")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(1, 16, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FORGE_HAMMER)
        phoenixvine.create("ember_igniter")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(2, 1, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FURNACE)
        phoenixvine.create("confectionery_fabricator")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(2, 1, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SCIENCE)
        phoenixvine.create("thermo_generator")
        .setEUIO("out")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(0, 0, 1, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SCIENCE)
});

GTCEuStartupEvents.registry('gtceu:machine', phoenixvine => {
    phoenixvine.create("earth_sieve", "simple")
    .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
    .definition((tier, builder) =>
        builder 
            .rotationState(RotationState.NON_Y_AXIS)
            .recipeType("earth_sieve")
            .workableTieredHullRenderer("gtceu:block/machines/sifter")
            
        )
        phoenixvine.create("thermo_generator", "simple")
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
        .definition((tier, builder) =>
            builder 
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType("thermo_generator")
                .workableTieredHullRenderer("gtceu:block/machines/thermal_centrifuge")
                
            )
        phoenixvine.create("confectionery_fabricator", "simple")
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV,GTValues.UEV,GTValues.UIV,GTValues.UXV,GTValues.OpV)
        .definition((tier, builder) =>
            builder 
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType("confectionery_fabricator")
                .workableTieredHullRenderer("gtceu:block/machines/thermal_centrifuge")    
            )
            phoenixvine.create("ember_igniter", "simple")
            .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
            .definition((tier, builder) =>
                builder 
                    .rotationState(RotationState.NON_Y_AXIS)
                    .recipeType("ember_igniter")
                    .workableTieredHullRenderer("gtceu:block/machines/sifter")
                    
                )
    phoenixvine.create('test_turbine', 'multiblock').machine((holder) => new $LargeTurbineMachine(holder, GTValues.MAX))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('plasma_generator')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT_SUBTICK])
        .appearanceBlock(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .pattern(definition => FactoryBlockPattern.start()
        .aisle("CCCCCCC", "OOOOOOO", "OOOOOOO", "OOOOOOO", "OOOOOOO", "OOOOOOO", "OOOOOOO")
        .aisle("CNCNCNC", "OOAOAOO", "OOOOOOO", "OOOOOOO", "OOOOOOO", "OOAOAOO", "OCNCNCO")
        .aisle("CCCCCCC", "OAOAOAO", "OOAOAOO", "OOAOAOO", "OOAOAOO", "OANNNAO", "ONCCCNO")
        .aisle("CNCNCNC", "OOATAOO", "OOOCOOO", "OOOCOOO", "OOOCOOO", "OONTNOO", "OCCHCCO")
        .aisle("CCCCCCC", "OAOAOAO", "OOAOAOO", "OOAOAOO", "OOAOAOO", "OANNNAO", "ONCCCNO")
        .aisle("CNCNCNC", "OOAOAOO", "OOOOOOO", "OOOOOOO", "OOOOOOO", "OOAOAOO", "OCNCNCO")
        .aisle("CCC@CCC", "OOOOOOO", "OOOOOOO", "OOOOOOO", "OOOOOOO", "OOOOOOO", "OOOOOOO")
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('O', Predicates.blocks("minecraft:air"))
            .where('N', Predicates.blocks("kubejs:phoenix_enriched_naquad_casing"))
            .where('A', Predicates.blocks("gtceu:naquadah_alloy_frame"))
            .where('T', Predicates.blocks("gtceu:tungstensteel_pipe_casing")) 
            .where('H', Predicates.blocks("gtceu:heat_vent")) 
            .where('C', Predicates.blocks('kubejs:reliable_naquadah_alloy_machine_casing').setMinGlobalLimited(10) // Corrected line
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setMaxGlobalLimited(1))
                .or(Predicates.ability(PartAbility.ROTOR_HOLDER))
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .build())
        .workableCasingRenderer(
          "kubejs:block/reliable_naquadah_alloy_machine_casing",
            "gtceu:block/multiblock/fusion_reactor",
            false
        )
});
