GTCEuStartupEvents.registry('gtceu:recipe_type', phoenixvine => {
    phoenixvine.create('dimensional_rift_extractor')
        .category('multiblock')
        .setEUIO('in') 
        .setMaxIOSize(1, 1, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);
});
 
GTCEuStartupEvents.registry('gtceu:machine', phoenixvine => {
    phoenixvine.create('dimensional_rift_extractor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('dimensional_rift_extractor')
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
.workableCasingRenderer("gtceu:block/casings/solid/machine_casing_stable_titanium", "gtceu:block/multiblock/large_miner", false)
    
}); // .or(Predicates.blocks(INPUT_ENERGY_HATCH[EV]))
