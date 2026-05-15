/**
 * Registry for sigle block machines
 */
GTCEuStartupEvents.registry("gtceu:recipe_type", phoenixvine => {
    phoenixvine.create("test_turbine")
        .category("multiblock")
        .setEUIO("in")
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
        .setMaxIOSize(2, 1, 5, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SCIENCE)
    phoenixvine.create("thermo_generator")
        .setEUIO("out")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(0, 0, 1, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SCIENCE)
    phoenixvine.create('water_source')
        .category('simple')
        .setEUIO('in')
        .setMaxIOSize(1, 0, 0, 1)
        .setSlotOverlay(false, false, GuiTextures.CIRCUIT_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_BATH, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
});

GTCEuStartupEvents.registry("gtceu:machine", phoenixvine => {






    phoenixvine.create('earth_sieve', 'simple')
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
        .definition((tier, builder) => {
            return builder
                .recipeType('earth_sieve')
                .workableTieredHullModel('gtceu:block/machines/sifter')
    })

    phoenixvine.create("thermo_generator", "simple")
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType("thermo_generator")
                .workableTieredHullModel("gtceu:block/machines/thermal_centrifuge")

        )

    phoenixvine.create("confectionery_fabricator", "simple")
        .tiers(GTValues.IV, GTValues.LuV, GTValues.ZPM)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType("confectionery_fabricator")
                .workableTieredHullModel("gtceu:block/machines/thermal_centrifuge")
        )
    phoenixvine.create("ember_igniter", "simple")
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.NON_Y_AXIS)
                .recipeType("ember_igniter")
                .workableTieredHullModel("gtceu:block/machines/sifter")

        )
    phoenixvine.create('water_source', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) => {
            return builder
                .recipeType('water_source')
                .workableTieredHullModel('gtceu:block/machines/ore_washer')
        })


});
