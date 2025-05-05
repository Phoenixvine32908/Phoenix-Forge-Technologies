GTCEuStartupEvents.registry('gtceu:recipe_type', phoenixvine => {
    phoenixvine.create('alchemical_imbuer')
        .category('multiblock')
        .setEUIO('in') 
        .setMaxIOSize(3, 1, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL);
});

GTCEuStartupEvents.registry('gtceu:machine', phoenixvine => {
    phoenixvine.create('alchemical_imbuer', 'multiblock')
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeTypes('alchemical_imbuer')
    .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT])
    .appearanceBlock(GTBlocks.CASING_TITANIUM_STABLE)
    .pattern(definition => FactoryBlockPattern.start()
    .aisle("XXX", "#F#", "#F#", "#F#", "###", "###", "###")
            .aisle("XXX", "FCF", "FCF", "FCF", "#F#", "#F#", "#F#")
            .aisle("XSX", "#F#", "#F#", "#F#", "###", "###", "###")
            .where("S", Predicates.controller(Predicates.blocks(definition.get())))
            .where("X", Predicates.blocks("gtceu:stable_machine_casing")
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where("C", Predicates.blocks("gtceu:stable_machine_casing"))
            .where("F", Predicates.blocks("gtceu:titanium_frame"))
            .where("#", Predicates.any())
    .build()
    )
    .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_stable_titanium", "gtceu:block/multiblock/implosion_compressor", false)
    }); // .or(Predicates.blocks(INPUT_ENERGY_HATCH[EV]))

