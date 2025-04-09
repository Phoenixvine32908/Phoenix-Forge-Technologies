GTCEuStartupEvents.registry('gtceu:recipe_type', phoenixvine => {
    phoenixvine.create('emberwake_alloy_hearth')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(4, 1, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL);
});

GTCEuStartupEvents.registry('gtceu:machine', phoenixvine => {
    phoenixvine.create('emberwake_alloy_hearth', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('alloy_blast_smelter')
        .recipeModifiers([GTRecipeModifiers.OC_PERFECT_SUBTICK])
        .appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
        .pattern(definition => FactoryBlockPattern.start()   
        .aisle("BBCCCCCBB", "DEAAAAAED", "DEAAAAAED", "DEAAAAAED", "DEAAAAAED", "AAAAAAAAA", "AAAAAAAAA", "AAAAAAAAA", "AAAAAAAAA", "AAAAAAAAA")
.aisle("BBBCCCBBB", "EFGAAAGFE", "EFGAAAGFE", "EFGAAAGFE", "EFGAAAGFE", "AGAAAAAGA", "AAAAAAAAA", "AAAAAAAAA", "AHHAAAHHA", "AIICCCIIA")
.aisle("CBBBBBBBC", "AGJKKKJGA", "AGJKLKJGA", "AGJKKKJGA", "AGGIIIGGA", "AAGIIIGAA", "AAMMMMMAA", "AAGIIIGAA", "AHGGGGGHA", "AIICCCIIA")
.aisle("CCBBBBBCC", "AAKAAAKAA", "AAKAHAKAA", "AAKAAAKAA", "AAIGGGIAA", "AAIEEEIAA", "AAMEHEMAA", "AAIEEEIAA", "AAGGGGGAA", "ACCMMMCCA")
.aisle("CCBBBBBCC", "AAKAHAKAA", "AALHNHLAA", "AAKAHAKAA", "AAIGGGIAA", "AAIEHEIAA", "AAMHOHMAA", "AAIEHEIAA", "AAGGGGGAA", "ACCMMMCCA")
.aisle("CCBBBBBCC", "AAKAAAKAA", "AAKAHAKAA", "AAKAAAKAA", "AAIGGGIAA", "AAIEEEIAA", "AAMEHEMAA", "AAIEEEIAA", "AAGGGGGAA", "ACCMMMCCA")
.aisle("CBBBBBBBC", "AGJKKKJGA", "AGJKPKJGA", "AGJKKKJGA", "AGGIIIGGA", "AAGIIIGAA", "AAMMMMMAA", "AAGIIIGAA", "AHGGGGGHA", "AIICCCIIA")
.aisle("BBBCCCBBB", "EFGAAAGFE", "EFGAAAGFE", "EFGAAAGFE", "EFGAAAGFE", "AGAAAAAGA", "AAAAAAAAA", "AAAAAAAAA", "AHHAAAHHA", "AIICCCIIA")
.aisle("BBCCCCCBB", "DEAAAAAED", "DEAAAAAED", "DEAAAAAED", "DEAAAAAED", "AAAAAAAAA", "AAAAAAAAA", "AAAAAAAAA", "AAAAAAAAA", "AAAAAAAAA")
   .where("A", Predicates.blocks("minecraft:air"))
   .where("B", Predicates.blocks("kubejs:reliable_naquadah_alloy_machine_casing"))
   .where("C", Predicates.blocks("gtceu:neutronium_frame"))
   .where("D", Predicates.blocks("kubejs:unstable_logic"))
   .where("E", Predicates.blocks("kubejs:plasma_resistant"))
   .where("F", Predicates.blocks("kubejs:phoenix_enriched_naquad_casing"))
   .where("G", Predicates.blocks("gtceu:high_temperature_smelting_casing").setMinGlobalLimited(6)
   .or(Predicates.abilities(PartAbility.MAINTENANCE).setMaxGlobalLimited(1))
   .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
   .or(Predicates.autoAbilities(definition.getRecipeTypes())))
   .where("H", Predicates.blocks("gtceu:phoenix_enriched_naquad_frame"))
   .where('I', Predicates.heatingCoils())
   .where("J", Predicates.blocks("kubejs:heat_dissipating_coils"))
   .where("K", Predicates.blocks("kubejs:quasi_stable_fusion_casing"))
   .where("L", Predicates.blocks("kubejs:ashglass_viewing_panel"))
   .where("M", Predicates.blocks("gtceu:heat_vent"))
   .where("N", Predicates.blocks("kubejs:phoenix_ignition_matrix"))
   .where("O", Predicates.blocks("kubejs:volatile_plasma_chamber"))
   .where('P', Predicates.controller(Predicates.blocks(definition.get())))
   .where("Q", Predicates.blocks("gtceu:watertight_casing"))

    
  
          
            .build())
            .workableCasingRenderer('kubejs:block/reliable_naquadah_alloy_machine_casing', 'gtceu:block/multiblock/fusion_reactor', false)
});


