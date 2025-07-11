const CoilWorkableElectricMultiblockMachine = Java.loadClass("com.gregtechceu.gtceu.api.machine.multiblock.CoilWorkableElectricMultiblockMachine")
Java.loadClass("com.gregtechceu.gtceu.api.GTValues")
GTCEuStartupEvents.registry('gtceu:recipe_type', allthemods => {
  allthemods.create('superheated_pyrolyzing_oven')
    .category('gregstar')
    .setEUIO('in')
    .setMaxIOSize(2, 1, 1, 1) // Adjusted values
    .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.CHEMICAL);
});
GTCEuStartupEvents.registry('gtceu:machine', event => {
const GCYMRecipeTypes = Java.loadClass("com.gregtechceu.gtceu.common.data.GCYMRecipeTypes") // Have to load it here because ALLOY_BLAST_RECIPES is not defined outside of the event
event.create("emberwake_alloy_hearth", "multiblock")
        .machine((holder) => new CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.ALL)
        .recipeTypes(GCYMRecipeTypes.ALLOY_BLAST_RECIPES)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT, (machine, recipe) => GTRecipeModifiers.ebfOverclock(machine, recipe)])
        .appearanceBlock(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("BCCCB", "BCDCB", "BCDCB", "BEEEB", "BFFFB", "BCCCB", "BBBBB", "BBBBB", "BBBBB")
            .aisle("CCCCC", "CDGDC", "CADAC", "EADAE", "FAFAF", "CCCCC", "BCFCB", "BBFBB", "BBFBB")
            .aisle("CCCCC", "DGHGD", "DDHDD", "EDHDE", "FFAFF", "CCCCC", "BFCFB", "BFAFB", "BFIFB")
            .aisle("CCCCC", "CDGDC", "CADAC", "EADAE", "FAFAF", "CCCCC", "BCFCB", "BBFBB", "BBFBB")
            .aisle("BCCCB", "BCJCB", "BCDCB", "BEEEB", "BFFFB", "BCCCB", "BBBBB", "BBBBB", "BBBBB")
            .where("A", Predicates.blocks("minecraft:air"))
            .where('B', Predicates.any())
           .where('C', Predicates.blocks('gtceu:high_temperature_smelting_casing').setMinGlobalLimited(10) 
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where("D", Predicates.blocks("gtceu:neutronium_frame"))
            .where("E", Predicates.blocks("gtceu:heat_vent"))
            .where("F", Predicates.heatingCoils())
            .where("G", Predicates.blocks("gtceu:fusion_coil"))
            .where("H", Predicates.blocks("gtceu:robust_machine_casing"))
            .where("I", Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1))
            .where('J', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingRenderer("gtceu:block/casings/gcym/high_temperature_smelting_casing", 'gtceu:block/multiblock/gcym/blast_alloy_smelter', false);

    // --- ADVANCED CRACKING UNIT ---
    event.create("advanced_cracking_unit", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .machine((holder) => new CoilWorkableElectricMultiblockMachine(holder))
        .recipeTypes(GTRecipeTypes.CRACKING_RECIPES)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT_SUBTICK, (machine, recipe) => GTRecipeModifiers.crackerOverclock(machine, recipe)])
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern.start()
            // Original pattern - no changes needed here now
            .aisle("BBBBBBB", "BCCCCCB", "BBBBBBB", "BBBBBBB", "BBBBBBB")
            .aisle("BBBBBBB", "CADAAAC", "EAAAAAE", "EADADAE", "EEBBBEE")
            .aisle("BBBBBBB", "CDFDFDC", "EADADAE", "EDFDFDE", "EEBGBEE")
            .aisle("BBBBBBB", "CADADAC", "EAAAAAE", "EADADAE", "EEBBBEE")
            .aisle("BBBBBBB", "BHHHHHB", "BHHIHHB", "BHHHHHB", "BBBBBBB")
            .where("A", Predicates.any())
            .where("B", Predicates.blocks("gtceu:robust_machine_casing"))
            .where("C", Predicates.blocks("gtceu:tungstensteel_firebox_casing"))
            .where("D", Predicates.blocks("gtceu:tungstensteel_pipe_casing"))
            .where("E", Predicates.heatingCoils())
            .where("F", Predicates.blocks("gtceu:hp_steam_solid_boiler"))
            .where("G", Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1))
            .where('H', Predicates.blocks('gtceu:clean_machine_casing').setMinGlobalLimited(10) 
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('I', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_clean_stainless_steel",
            "gtceu:block/multiblock/cracking_unit", false);

    // --- SUPERHEATED PYROLYZING OVEN ---
    event.create("superheated_pyrolyzing_oven", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .machine((holder) => new CoilWorkableElectricMultiblockMachine(holder))
        .recipeTypes('superheated_pyrolyzing_oven')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT, (machine, recipe) => GTRecipeModifiers.pyrolyseOvenOverclock(machine, recipe)])
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("BBCCCBB", "BBCDCBB", "BBCCCBB", "BBCCCBB", "BBEEEBB", "BBEEEBB")
            .aisle("BCCCCCB", "BCAFACB", "BCAFACB", "BCGGGCB", "BEAAAEB", "BEHHHEB")
            .aisle("CCCCCCC", "CAAFAAC", "CAAFAAC", "CGGGGGC", "EAAAAAE", "EHHHHHE")
            .aisle("CCCCCCC", "DFFFFFD", "CFFFFFC", "CGGGGGC", "EAAAAAE", "EHHMHHE")
            .aisle("CCCCCCC", "CAAFAAC", "CAAFAAC", "CGGGGGC", "EAAAAAE", "EHHHHHE")
            .aisle("BCCCCCB", "BCAFACB", "BCAFACB", "BCGGGCB", "BEAAAEB", "BEHHHEB")
            .aisle("BBCCCBB", "BBCICBB", "BBCCCBB", "BBCCCBB", "BBEEEBB", "BBEEEBB")
            .where("A", Predicates.blocks("minecraft:air"))
            .where("B", Predicates.any())
            .where('C', Predicates.blocks('gtceu:solid_machine_casing').setMinGlobalLimited(10) 
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where("D", Predicates.blocks("gtceu:steel_firebox_casing"))
            .where("E", Predicates.blocks("gtceu:laminated_glass"))
            .where("F", Predicates.blocks("gtceu:ptfe_pipe_casing"))
            .where("G", Predicates.heatingCoils())
            .where("H", Predicates.blocks("gtceu:high_temperature_smelting_casing"))
            .where("M", Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1))
            .where('I', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/multiblock/pyrolyse_oven", false);

})