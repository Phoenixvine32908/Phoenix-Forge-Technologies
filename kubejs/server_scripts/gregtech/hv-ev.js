/**
HV and EV recipes
 */

ServerEvents.recipes(event => {

    event.recipes.gtceu.chemical_bath("zirconium_dust_to_hafnium_chloride")
        .itemInputs("4x gtceu:zirconium_dust")
        .inputFluids("gtceu:hydrochloric_acid 1000")
        .outputFluids("gtceu:hafnium_chloride 2000")
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV] / 2)
    event.recipes.gtceu.assembler("thermal_power_upgrade")
        .itemInputs("1x gtceu:aurum_steel_gear","4x gtceu:fiery_bronze_plate","2x gtceu:tempered_glass")
        .inputFluids("gtceu:glue 500")
        .itemOutputs("thermal:dynamo_output_augment")
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV] / 2)
    event.recipes.gtceu.macerator("certus_quartz_dust_2")
        .itemInputs("ae2:certus_quartz_crystal")
        .itemOutputs("gtceu:certus_quartz_dust")
        .duration(80)
        .EUt(GTValues.VA[GTValues.LV] / 2)
    event.recipes.gtceu.assembler("good_circuit_universal")

    event.recipes.gtceu.assembly_line("kubejs:epp/assembler_matrix_frame")
        .itemInputs("2x gtceu:dense_85_percent_pure_nevonian_steel_plate", "4x gtceu:blue_steel_frame", "gtceu:plascrete", "#gtceu:circuits/ev")
        .inputFluids("gtceu:polytetrafluoroethylene 288")
        .itemOutputs("4x expatternprovider:assembler_matrix_frame")
        .duration(150)
        .EUt(1920)
    event.recipes.gtceu.assembly_line("kubejs:epp/assembler_matrix_glass")
        .itemInputs("2x gtceu:dense_85_percent_pure_nevonian_steel_plate", "4x gtceu:blue_steel_frame", "gtceu:cleanroom_glass", "#gtceu:circuits/ev")
        .inputFluids("gtceu:polytetrafluoroethylene 288")
        .itemOutputs("4x expatternprovider:assembler_matrix_glass")
        .duration(150)
        .EUt(1920)


    // Assembler Matrix Wall
    event.recipes.gtceu.assembly_line("kubejs:epp/assembler_matrix_wall")
        .itemInputs("expatternprovider:assembler_matrix_frame", "gtceu:hv_electric_motor", "gtceu:small_85_percent_pure_nevonian_steel_gear")
        .itemOutputs("expatternprovider:assembler_matrix_wall")
        .duration(100)
        .EUt(1920)

    // Assembler Matrix Pattern Core
    event.recipes.gtceu.assembly_line("kubejs:epp/assembler_matrix_pattern")
        .itemInputs("4x expatternprovider:assembler_matrix_frame", "4x ae2:engineering_processor", "expatternprovider:ex_pattern_provider", "6x ae2:blue_lumen_paint_ball", "2x gtceu:85_percent_pure_nevonian_steel_spring")
        .inputFluids("gtceu:polytetrafluoroethylene 288")
        .itemOutputs("expatternprovider:assembler_matrix_pattern")
        .duration(150)
        .EUt(1920)

    // Assembler Matrix Craft Core
    event.recipes.gtceu.assembly_line("kubejs:epp/assembler_matrix_crafter")
        .itemInputs("4x expatternprovider:assembler_matrix_frame", "4x ae2:engineering_processor", "expatternprovider:ex_molecular_assembler", "6x ae2:purple_lumen_paint_ball","2x gtceu:85_percent_pure_nevonian_steel_screw")
        .inputFluids("gtceu:polytetrafluoroethylene 288")
        .itemOutputs("expatternprovider:assembler_matrix_crafter")
        .duration(150)
        .EUt(1920)

    // Assembler Matrix Speed Core
    event.recipes.gtceu.assembly_line("kubejs:epp/assembler_matrix_speed")
        .itemInputs("4x expatternprovider:assembler_matrix_frame", "4x megacells:accumulation_processor", "mae2:4x_crafting_accelerator", "expatternprovider:ex_pattern_provider", "expatternprovider:ex_molecular_assembler", "6x ae2:red_lumen_paint_ball", "16x gtceu:85_percent_pure_nevonian_steel_frame")
        .inputFluids("gtceu:polytetrafluoroethylene 288")
        .itemOutputs("expatternprovider:assembler_matrix_speed")
        .duration(150)
        .EUt(1920)

    event.recipes.gtceu.large_chemical_reactor("printed_accumulation_processor")
        .itemInputs("2x gtceu:85_percent_pure_nevonian_steel_gear", "4x megacells:sky_steel_ingot", "gtceu:tempered_glass")
        .inputFluids("gtceu:hydrofluoric_acid 288")
        .itemOutputs("2x megacells:printed_accumulation_processor")
        .duration(150)
        .EUt(1920)
    event.recipes.gtceu.circuit_assembler("accumulation_processor")
        .itemInputs("4x gtceu:85_percent_pure_nevonian_steel_rod", "gtceu:tungsten_steel_frame", "#gtceu:circuits/ev")
        .inputFluids("gtceu:soldering_alloy 288")
        .itemOutputs("1x megacells:accumulation_processor")
        .duration(150)
        .EUt(1920)
    event.recipes.gtceu.centrifuge("zircon_dust_from_blackstone_dust")
        .itemInputs("3x gtceu:blackstone_dust")
        .itemOutputs("1x gtceu:magma_dust", "1x gtceu:dormant_ember_dust", "gtceu:silicon_dust")
        .chancedOutput("1x gtceu:zircon_dust", 2500, 1)  // Slightly lower
        .duration(650)
        .EUt(GTValues.VA[GTValues.MV] / 2)
    event.recipes.gtceu.centrifuge("zircon_dust_processing")
        .itemInputs("20x gtceu:zircon_dust")
        .itemOutputs("8x gtceu:impure_zirconium_dust","4x gtceu:impure_hafnium_dust")
        .duration(400)
        .EUt(GTValues.VA[GTValues.HV] / 2)

    event.recipes.gtceu.electrolyzer("hafnium_chloride")
        .inputFluids("gtceu:hafnium_chloride 500")
        .outputFluids("gtceu:hydrochloric_acid 200")
        .itemOutputs("1x gtceu:hafnium_dust")
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV] / 2);



    event.recipes.gtceu.assembler("fissile_heat_safe_casing")
        .itemInputs("6x gtceu:zircalloy_plate", "1x gtceu:stainless_steel_frame", "2x gtceu:aluminfrost_large_fluid_pipe")
        .circuit(2)
        .itemOutputs("2x kubejs:fissile_heat_safe_casing")
        .inputFluids("phoenixcore:frost 100")
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV] / 2)
    event.recipes.gtceu.assembler("fission_cooling_casing")
        .itemInputs("1x gtceu:zircalloy_plate","2x gtceu:frost_reinforced_stained_steel_plate", "1x gtceu:blue_steel_frame", "2x minecraft:packed_ice")
        .circuit(6)
        .itemOutputs("2x kubejs:fission_cooling_casing")
        .inputFluids("gtceu:vanadium_steel 144")
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV] / 2)
    event.recipes.gtceu.cutter("quartz_plates")
        .itemInputs("ae2:quartz_block")
        .itemOutputs("4x gtceu:certus_quartz_plate")
        .inputFluids("gtceu:distilled_water 100")
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV] / 2)
    event.recipes.gtceu.assembler("tinted_glass")
        .itemInputs("4x gtceu:lead_plate","12x gtceu:tempered_glass", "4x minecraft:amethyst_shard", "2x gtceu:aluminfrost_plate")
        .circuit(6)
        .itemOutputs("12x minecraft:tinted_glass")
        .inputFluids("gtceu:steel 144")
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV] / 2)
    event.recipes.gtceu.assembler("fissile_reaction_safe_casing")
        .itemInputs("3x gtceu:zircalloy_plate","2x gtceu:stainless_steel_plate", "1x gtceu:zircalloy_frame")
        .circuit(6)
        .itemOutputs("2x kubejs:fissile_reaction_safe_casing")
        .inputFluids("gtceu:stainless_steel 250")
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV] / 2)
    event.recipes.gtceu.assembler("graphene_based_fission_rods")
        .itemInputs("16x gtceu:graphene_foil", "gtceu:solid_machine_casing", "gtceu:zircalloy_frame")
        .circuit(1)
        .itemOutputs("2x kubejs:base_fission_casing")
        .inputFluids("gtceu:steel 250")
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV] / 2)
    event.recipes.gtceu.macerator("aurum_wood_dust")
        .itemInputs("1x forbidden_arcanus:aurum_log")
        .itemOutputs("4x gtceu:aurum_wood_dust")
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV] / 2)
    event.recipes.gtceu.assembler("fissile_safe_gearbox")
        .itemInputs("4x gtceu:zircalloy_plate","2x gtceu:zircalloy_gear", "1x gtceu:zircalloy_frame")
        .circuit(4)
        .itemOutputs("2x kubejs:fissile_safe_gearbox")
        .inputFluids("gtceu:gold 1000")
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV] / 2)
    event.recipes.gtceu.chemical_reactor("uranium_oxide")
        .itemInputs("2x gtceu:uraninite_dust")
        .inputFluids("gtceu:oxygen 500")
        .outputFluids("gtceu:uranium_oxide 1000")
        .duration(100)
        .EUt(GTValues.VA[GTValues.HV] / 2)
    event.recipes.gtceu.assembler("zirconium_rod")
        .itemInputs("4x gtceu:lead_plate", "gtceu:universal_fluid_cell", "2x gtceu:stainless_steel_plate", "1x gtceu:dense_zircalloy_plate")
        .itemOutputs("12x kubejs:zirconium_rod")
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV] / 2)
    event.recipes.gtceu.canner("zirconium_fuel_rod")
        .itemInputs("1x kubejs:zirconium_rod")
        .inputFluids("gtceu:uranium_oxide 250")
        .itemOutputs("kubejs:basic_fuel_rod")
        .duration(120)
        .EUt(GTValues.VA[GTValues.HV] / 2)
    event.recipes.gtceu.assembler("alchemical_imbuer")
        .itemInputs("4x ars_nouveau:source_gem_block", "2x gtceu:stainless_steel_large_fluid_pipe", "16x ars_nouveau:sourcestone", "4x gtceu:clean_machine_casing", "2x #gtceu:circuits/hv")
        .inputFluids("gtceu:soldering_alloy 613")
        .itemOutputs("1x gtceu:alchemical_imbuer")
        .duration(150)
        .EUt(GTValues.VA[GTValues.HV] / 2)
    event.recipes.gtceu.assembler("advanced_pressurized_fission_reactor")
        .itemInputs("4x kubejs:fissile_reaction_safe_casing", "2x gtceu:source_imbued_titanium_gear", "8x gtceu:dense_frost_reinforced_stained_steel_plate", "3x #gtceu:circuits/ev", "3x gtceu:dense_zircalloy_plate")
        .inputFluids("gtceu:soldering_alloy 613")
        .itemOutputs("1x phoenixcore:advanced_pressurized_fission_reactor")
        .duration(150)
        .EUt(GTValues.VA[GTValues.HV] / 2)
    event.recipes.gtceu.assembler("dimensional_anchor")
        .itemInputs("4x kubejs:frost_reinforced_stained_steel_drilling_kit", "2x gtceu:frost_reinforced_stained_steel_gear",
            "8x gtceu:dense_frost_reinforced_stained_steel_plate", "3x #gtceu:circuits/ev", "3x gtceu:dense_zircalloy_plate","4x gtceu:icy_steel_matrix_single_wire")
        .inputFluids("gtceu:soldering_alloy 4200")
        .itemOutputs("1x gtceu:dimensional_anchor12")
        .duration(150)
        .EUt(GTValues.VA[GTValues.EV] / 2)
    event.recipes.gtceu.assembler("aetherial_fabricator")
        .itemInputs("4x kubejs:source_imbued_titanium_drill_head", "2x gtceu:source_imbued_titanium_gear",
            "8x gtceu:source_imbued_titanium_plate", "5x #gtceu:circuits/ev", "3x gtceu:dense_zircalloy_plate", "4x gtceu:source_titanium_filament_single_wire")
        .inputFluids("gtceu:soldering_alloy 4200")
        .itemOutputs("1x gtceu:aetherial_fabricator12")
        .duration(150)
        .EUt(GTValues.VA[GTValues.EV] / 2)
    event.recipes.gtceu.assembler("heat_exchanger")
        .itemInputs("2x kubejs:fissile_reaction_safe_casing","8x kubejs:fissile_heat_safe_casing", "2x gtceu:dense_zircalloy_plate","1x #gtceu:circuits/ev", "2x gtceu:titanium_large_fluid_pipe" )
        .inputFluids("gtceu:soldering_alloy 613")
        .itemOutputs("1x phoenixcore:heat_exchanger")
        .duration(150)
        .EUt(GTValues.VA[GTValues.EV] / 2)
    event.recipes.gtceu.compressor("budding_amethyst_assembly")
        .itemInputs(
            "16x minecraft:amethyst_block",   // Amethyst blocks for structure
        )
        .itemOutputs("minecraft:budding_amethyst")
        .duration(1200)
        .EUt(GTValues.VA[GTValues.HV]);

    // --- AE2 Flawless Budding Certus Quartz Recipe (GTCEu Assembler) ---
    // A higher-tier recipe using the Assembler, requiring HV voltage for precision and power.
    event.recipes.gtceu.assembler("flawless_budding_certus_quartz_assembly")
        .itemInputs(
            "4x ae2:charged_certus_quartz_crystal", // Charged Certus for pure energy/perfection
            "4x ae2:certus_quartz_crystal",         // Regular Certus for bulk material
            "ae2:growth_accelerator",               // AE2 Growth Accelerator to symbolize crystal perfection
            "ae2:fluix_crystal"                     // Fluix Crystal for AE2 integration
        )
        .itemOutputs("ae2:flawless_budding_quartz")
        .duration(400)                      // Longer processing time
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.assembler("pressurized_fission_reactor")
        .itemInputs("4x kubejs:fissile_reaction_safe_casing", "8x gtceu:stainless_steel_large_fluid_pipe", "4x gtceu:zircalloy_frame", "2x #gtceu:circuits/hv")
        .inputFluids("gtceu:soldering_alloy 613")
        .itemOutputs("1x phoenixcore:pressurized_fission_reactor")
        .duration(150)
        .EUt(GTValues.VA[GTValues.HV] / 2)
    event.recipes.gtceu.mixer("zircalloy_dust")
        .itemInputs("5x gtceu:zirconium_dust", "1x gtceu:small_bismuth_dust", "2x gtceu:hafnium_dust")
        .itemOutputs("7x gtceu:zircalloy_dust")
        .duration(100)
        .circuit(15)
        .EUt(GTValues.VA[GTValues.HV] / 2)
    event.recipes.gtceu.mixer("void_touched_tungsten_steel")
        .itemInputs("4x gtceu:tungsten_dust", "4x gtceu:voidglass_shard_dust", "2x gtceu:vanadium_steel_dust")
        .inputFluids("gtceu:liquid_ender_air 500")
        .itemOutputs("8x gtceu:void_touched_tungsten_steel_dust")
        .duration(160)
        .circuit(15)
        .EUt(GTValues.VA[GTValues.EV] / 2)
        // 1. Boron Carbide (B4C) Dust - EV Tier
event.recipes.gtceu.mixer("boron_carbide_dust")
    .itemInputs("4x gtceu:boron_dust", "1x gtceu:carbon_dust")
    .itemOutputs("5x phoenixcore:boron_carbide_dust")
    .duration(150)
    .circuit(1)
    .EUt(GTValues.EV); // Uses the correct EUt for EV

// 2. Niobium Modified Silicon Carbide (Nb-SiC) Dust - IV Tier
event.recipes.gtceu.mixer("niobium_modified_silicon_carbide_dust")
    .itemInputs("1x gtceu:niobium_dust", "1x gtceu:silicon_dust", "2x gtceu:carbon_dust")
    .itemOutputs("4x phoenixcore:niobium_modified_silicon_carbide_dust")
    .duration(200)
    .circuit(2)
    .EUt(GTValues.IV); // Uses the correct EUt for IV

    event.recipes.gtceu.mixer("space_grade_steel_dust")
        .itemInputs(
            "1x gtceu:zircalloy_dust",
            "2x gtceu:tungsten_dust",
            "4x gtceu:icy_steel_matrix_dust",
            "2x gtceu:molybdenum_dust",
        )
        .inputFluids("gtceu:steel 750")
        .itemOutputs("4x gtceu:space_grade_steel_dust")
        .duration(200)
        .circuit(12)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.pressurized_fission_reactor("fission1")
        .chancedInput("1x kubejs:basic_fuel_rod", 5000, 0)
        .itemOutputs("10x gtceu:low_level_radioactive_waste_dust")
        .duration(2200)
        .addData("required_cooling", 1000)
        .EUt(-GTValues.VA[GTValues.EV])
    event.recipes.gtceu.advanced_pressurized_fission_reactor("fission2")
        .itemInputs("3x kubejs:basic_fuel_rod")
        .perTick(true)
        .inputFluids("minecraft:water 100")
        .outputFluids("gtceu:medium_pressure_fissile_steam 100")
        .chancedOutput("gtceu:low_level_radioactive_waste_ingot", 500, 0)
        .duration(6000)


    event.recipes.gtceu.centrifuge("fissio")
        .itemInputs("5x gtceu:low_level_radioactive_waste_dust")
        .itemOutputs("5x gtceu:lead_dust", "3x gtceu:thorium_dust")
        .outputFluids("gtceu:helium 500")
        .duration(150)
        .EUt(GTValues.VA[GTValues.EV] / 2)
    event.recipes.gtceu.source_imbument("source_gem")
        .itemInputs("1x minecraft:amethyst_shard")
        .inputFluids("gtceu:source_of_magic 250")
        .itemOutputs("2x ars_nouveau:source_gem")
        .duration(40)
        .EUt(GTValues.VA[GTValues.HV] / 2)

    event.recipes.gtceu.source_imbument("85_percent_pure_nevonian_steel_cooling")
        .itemInputs("1x gtceu:hot_85_percent_pure_nevonian_steel_ingot")
        .inputFluids("gtceu:source_of_magic 2500")
        .itemOutputs("1x gtceu:85_percent_pure_nevonian_steel_ingot")
        .duration(400)
        .EUt(GTValues.VA[GTValues.EV] / 2)
    event.recipes.gtceu.source_imbument("source_gem_without_source")
        .itemInputs("1x minecraft:amethyst_shard")
        .itemOutputs("1x ars_nouveau:source_gem")
        .circuit(2)
        .duration(1500)
        .EUt(GTValues.VA[GTValues.HV] / 2)
    event.recipes.gtceu.source_extraction("source_from_wheat")
        .itemInputs("3x minecraft:wheat")
        .outputFluids("gtceu:source_of_magic 125")
        .duration(190)
        .EUt(GTValues.VA[GTValues.HV] / 3)

    event.recipes.gtceu.source_extraction("source_from_flowers")
        .itemInputs("2x #minecraft:flowers")
        .outputFluids("gtceu:source_of_magic 80")
        .duration(150)
        .EUt(GTValues.VA[GTValues.HV] / 3);

    // Generic crop extraction (covers wheat, carrot, potato, beetroot, etc.)
    event.recipes.gtceu.source_extraction("source_from_crops")
        .itemInputs("3x #forge:crops")
        .outputFluids("gtceu:source_of_magic 100")
        .duration(160)
        .EUt(GTValues.VA[GTValues.HV] / 3);

    event.recipes.gtceu.source_extraction("source_from_brown_mushroom")
        .itemInputs("4x #forge:mushrooms")
        .outputFluids("gtceu:source_of_magic 60")
        .duration(145)
        .EUt(GTValues.VA[GTValues.HV] / 3)
    event.recipes.gtceu.source_extraction("source_from_coal")
        .itemInputs("2x minecraft:coal")
        .outputFluids("gtceu:source_of_magic 500")
        .duration(220)
        .EUt(GTValues.VA[GTValues.HV] / 2.5)

    event.recipes.gtceu.source_extraction("source_from_coke")
        .itemInputs("1x gtceu:coke_gem")
        .outputFluids("gtceu:source_of_magic 400")
        .duration(250)
        .EUt(GTValues.VA[GTValues.HV] / 2.5)

    event.recipes.gtceu.source_extraction("source_from_charcoal")
        .itemInputs("2x minecraft:charcoal")
        .outputFluids("gtceu:source_of_magic 450")
        .duration(210)
        .EUt(GTValues.VA[GTValues.HV] / 2.5)

    event.recipes.gtceu.source_extraction("source_from_logs")
        .itemInputs("4x #minecraft:logs")
        .outputFluids("gtceu:source_of_magic 200")
        .duration(180)
        .EUt(GTValues.VA[GTValues.HV] / 3)
    event.recipes.gtceu.source_extraction("source_from_planks")
        .itemInputs("4x #minecraft:planks")
        .outputFluids("gtceu:source_of_magic 200")
        .duration(180)
        .EUt(GTValues.VA[GTValues.HV] / 3)
    event.recipes.gtceu.source_extraction("source_from_lava")
        .inputFluids("minecraft:lava 1000")
        .outputFluids("gtceu:source_of_magic 500")
        .duration(280)
        .EUt(GTValues.VA[GTValues.HV] / 2)
    event.recipes.gtceu.extractor("lava_from_magma")
        .itemInputs("minecraft:magma_block")
        .outputFluids("minecraft:lava 250")
        .duration(280)
        .EUt(GTValues.VA[GTValues.LV] / 2)
    event.recipes.gtceu.extractor("lava_from_magma_dust")
        .itemInputs("gtceu:magma_dust")
        .outputFluids("minecraft:lava 150")
        .duration(280)
        .EUt(GTValues.VA[GTValues.LV] / 2)
    event.recipes.gtceu.source_imbument("source_imbued_titanium")
        .itemInputs("1x gtceu:titanium_ingot")
        .inputFluids("gtceu:source_of_magic 1000")
        .itemOutputs("gtceu:source_imbued_titanium_ingot")
        .duration(160)
        .EUt(GTValues.VA[GTValues.HV] / 3)
    // Space Grade Steel Drilling Kit - EV Assembler
    event.recipes.gtceu.assembler("space_grade_steel_drilling_kit")
        .itemInputs(
            "16x gtceu:space_grade_steel_plate",
            "32x gtceu:space_grade_steel_screw",
            "4x gtceu:ev_field_generator",
            "8x gtceu:ev_electric_motor",
            "20x #gtceu:circuits/ev",
            "16x gtceu:source_titanium_filament_single_wire",
            "8x kubejs:space_grade_steel_drill_head",
            "1x gtceu:ev_machine_hull")
        .inputFluids("gtceu:soldering_alloy 1200")
        .itemOutputs("kubejs:space_grade_steel_drilling_kit")
        .duration(400)
        .EUt(GTValues.VA[GTValues.EV]);

    // / Frost Reinforced Stained Steel Drilling Kit - EV Assembler
    event.recipes.gtceu.assembler("frost_reinforced_stained_steel_drilling_kit")
        .itemInputs(
            "16x gtceu:frost_reinforced_stained_steel_plate",
            "32x gtceu:frost_reinforced_stained_steel_screw",
            "4x gtceu:hv_field_generator",
            "8x gtceu:hv_electric_motor",
            "24x #gtceu:circuits/hv",
            "16x gtceu:icy_steel_matrix_single_wire",
            "12x kubejs:frost_reinforced_stained_steel_drill_head",
            "1x gtceu:hv_machine_hull")
        .inputFluids("gtceu:soldering_alloy 1200")
        .itemOutputs("kubejs:frost_reinforced_stained_steel_drilling_kit")
        .duration(400)
        .EUt(GTValues.VA[GTValues.EV]);

    // Aluminfrost Drilling Kit - EV Assembler
    event.recipes.gtceu.assembler("aluminfrost_drilling_kit")
        .itemInputs(
            "16x gtceu:aluminfrost_plate",
            "32x gtceu:aluminfrost_screw",
            "4x gtceu:mv_field_generator",
            "8x gtceu:mv_electric_motor",
            "20x #gtceu:circuits/mv",
            "16x gtceu:cryogenic_aluminum_strand_single_wire",
            "10x kubejs:aluminfrost_drill_head",
            "1x gtceu:mv_machine_hull")
        .inputFluids("gtceu:soldering_alloy 1200")
        .itemOutputs("kubejs:aluminfrost_drilling_kit")
        .duration(400)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.large_chemical_reactor("85_percent_pure_nevonian_steel_dust")
        .itemInputs(
            "4x gtceu:exquisite_coke_gem",
            "16x gtceu:diamond_dust",
            "2x gtceu:nevvonian_iron_dust")
        .inputFluids("gtceu:source_of_magic 1200", "gtceu:titanium 250")
        .outputFluids("gtceu:titanium_tetrachloride 100")
        .itemOutputs("4x gtceu:85_percent_pure_nevonian_steel_dust")
        .duration(800)
        .EUt(GTValues.VA[GTValues.EV]);

    // Aurum Steel Drilling Kit - EV Assembler
    event.recipes.gtceu.assembler("aurum_steel_drilling_kit")
        .itemInputs(
            "16x gtceu:aurum_steel_plate",
            "32x gtceu:aurum_steel_screw",
            "4x gtceu:lv_field_generator",
            "8x gtceu:lv_electric_motor",
            "20x #gtceu:circuits/lv",
            "16x gtceu:magmatic_manganese_lead_single_wire",
            "8x kubejs:aurum_steel_drill_head",
            "1x gtceu:lv_machine_hull")
        .inputFluids("gtceu:soldering_alloy 1200")
        .itemOutputs("kubejs:aurum_steel_drilling_kit")
        .duration(400)
        .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.mixer("magmatic_manganese_lead_alloy")
        .itemInputs(
            "2x gtceu:manganese_dust", // Manganese component (LV)
            "2x gtceu:lead_dust",
            "8x gtceu:dormant_ember_dust",
            // Lead component (LV)
        )
        .inputFluids("minecraft:lava 288") // "Magmatic" implies lava/heat
        .itemOutputs("12x gtceu:magmatic_manganese_lead_dust") // Output the custom material dust
        .duration(200) // LV tier duration
        .EUt(GTValues.VA[GTValues.LV]); // LV voltage


    // 2. Cryogenic Aluminum Strand (MV Mixer) - NO CHANGE
    // Create the Cryogenic Aluminum Strand alloy/compound.
    // Niobium is HV, which is appropriate for an MV output.
    event.recipes.gtceu.mixer("cryo_aluminum_superconductor_alloy")
        .itemInputs(
            "4x gtceu:aluminium_dust", // Aluminum component (LV)
            "1x gtceu:silicon_dust",
            "6x gtceu:permafrost_dust", // Niobium component (HV) - OK for MV output
        )
        .inputFluids("gtceu:nitrogen 250") // "Cryogenic" implies liquid nitrogen
        .itemOutputs("5x gtceu:cryogenic_aluminum_strand_dust") // Output the custom material dust
        .duration(300) // MV tier duration
        .EUt(GTValues.VA[GTValues.MV]); // MV voltage

    // 3. Icy Steel Matrix (HV Mixer) - REVISED
    // Create the Icy Steel Matrix alloy/compound, replacing Tungsten (IV) with Titanium (EV).
    event.recipes.gtceu.mixer("icy_steel_matrix_alloy")
        .itemInputs(
            "4x gtceu:steel_dust",    // Steel component (HV)
            "2x gtceu:stainless_steel_dust",
            "4x gtceu:unrefined_aluminfrost_dust",
            "12x gtceu:permafrost_dust",
        )
        .inputFluids("gtceu:nitrogen 50")
        .itemOutputs("18x gtceu:icy_steel_matrix_dust") // Output the custom material dust
        .duration(600) // HV tier duration
        .EUt(GTValues.VA[GTValues.HV]); // HV voltage

    event.recipes.gtceu.mixer("source_titanium_filament_alloy")
        .itemInputs(
            "4x gtceu:titanium_dust",
            "64x ars_nouveau:source_gem",
            "2x gtceu:molybdenum_dust",

        )
        .inputFluids("gtceu:source_of_magic 1200")
        .itemOutputs("6x gtceu:source_titanium_filament_dust") // Output the custom material dust
        .duration(200) // EV tier duration
        .EUt(GTValues.VA[GTValues.EV]); // EV voltage
    event.recipes.gtceu.assembler("diamond_ring")
        .itemInputs(
            "4x gtceu:double_iridium_plate",
            "32x gtceu:tungsten_steel_plate",
            "2x gtceu:molybdenum_dust",
            "1x gtceu:advanced_electric_jetpack"

        )
        .inputFluids("gtceu:void_touched_tungsten_steel 670")
        .itemOutputs("1x angelring:diamond_ring") // Output the custom material dust
        .duration(500) // EV tier duration
        .EUt(GTValues.VA[GTValues.EV]); // EV voltage
    // Space Miner Module - EV Assembler
    event.recipes.gtceu.assembler("space_miner_module")
        .itemInputs(
            "1x kubejs:space_grade_steel_drilling_kit",       // Slot 1: Core custom drilling kit
            "1x gtceu:ev_machine_hull",                     // Slot 2: Base machine structure
            "4x gtceu:ev_robot_arm",                          // Slot 3: Key robotic components
            "4x gtceu:ev_sensor",                             // Slot 4: Key sensor components
            "2x gtceu:ev_field_generator",                    // Slot 5: High-end EV power/control
            "8x #gtceu:circuits/ev",                          // Slot 6: Logic (highest available EV circuit)
            "4x gtceu:ev_emitter",                            // Slot 7: Energy emission/cutting
            "8x gtceu:space_grade_steel_plate",               // Slot 8: Primary custom structural material
            "8x gtceu:source_titanium_filament_single_wire"  // Slot 9: High-tech custom wiring
        )
        .inputFluids("kubejs:cryo_ember_fluid 32000")
        .itemOutputs("kubejs:space_miner_module")
        .duration(600)
        .EUt(GTValues.VA[GTValues.EV]);

    // Earthbound Miner Module - EV Assembler
    event.recipes.gtceu.assembler("earthbound_miner_module")
        .itemInputs(
            "2x kubejs:frost_reinforced_stained_steel_drilling_kit", // Slot 1: Core custom drilling kit 1
            "4x kubejs:aurum_steel_drilling_kit",     // Slot 2: Core custom drilling kit 2
            "2x kubejs:aluminfrost_drilling_kit",                   // Slot 3: Core custom drilling kit 3
            "1x gtceu:ev_machine_hull",                             // Slot 4: Base machine structure (essential)
            "4x gtceu:ev_robot_arm",                                // Slot 5: Key robotic components for automation
            "8x gtceu:stable_machine_casing",                     // Slot 6: REPLACED anchor_casing. A robust EV-tier structural component.
            "4x gtceu:ev_electric_pump",                            // Slot 7: For fluid/material extraction
            "32x #gtceu:circuits/ev",                                // Slot 8: Logic (should resolve to advanced_circuit_board or similar in your setup)
            "16x gtceu:icy_steel_matrix_single_wire"                 // Slot 9: Custom cryogenic/structural wiring
        )
        .inputFluids("kubejs:cryo_ember_fluid 12000")
        .itemOutputs("kubejs:earthbound_miner_module")
        .duration(600)
        .EUt(GTValues.VA[GTValues.EV]);


    event.recipes.gtceu.assembler("aluminfrost_drum")
        .itemInputs("2x gtceu:long_aluminfrost_rod", "4x gtceu:aluminfrost_plate")
        .circuit(2)
        .itemOutputs("gtceu:aluminfrost_drum")
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler("aluminfrost_crate")
        .itemInputs("4x gtceu:long_aluminfrost_rod", "4x gtceu:aluminfrost_plate")
        .circuit(1)
        .itemOutputs(" gtceu:aluminfrost_crate")
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.gtceu.assembler("void_touched_tungsten_steel_drum")
        .itemInputs("2x gtceu:long_void_touched_tungsten_steel_rod", "4x gtceu:void_touched_tungsten_steel_plate")
        .circuit(2)
        .itemOutputs("gtceu:void_touched_tungsten_steel_drum")
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.assembler("void_touched_tungsten_steel_crate")
        .circuit(1)
        .itemInputs("4x gtceu:long_void_touched_tungsten_steel_rod", "4x gtceu:void_touched_tungsten_steel_plate")
        .itemOutputs("gtceu:void_touched_tungsten_steel_crate")
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.assembler("frost_reinforced_stained_steel_drum")
        .itemInputs("2x gtceu:long_frost_reinforced_stained_steel_rod", "4x gtceu:frost_reinforced_stained_steel_plate")
        .circuit(2)
        .itemOutputs(" gtceu:frost_reinforced_stained_steel_drum")
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu.assembler("frost_reinforced_stained_steel_crate")
        .itemInputs("4x gtceu:long_frost_reinforced_stained_steel_rod", "4x gtceu:frost_reinforced_stained_steel_plate")
        .circuit(1)
        .itemOutputs(" gtceu:frost_reinforced_stained_steel_crate")
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV]);

    event.recipes.gtceu.assembler("source_imbued_titanium_drum")
        .itemInputs("2x gtceu:long_source_imbued_titanium_rod", "4x gtceu:source_imbued_titanium_plate")
        .circuit(2)
        .itemOutputs(" gtceu:source_imbued_titanium_drum")
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.assembler("source_imbued_titanium_crate")
        .itemInputs("4x gtceu:long_source_imbued_titanium_rod", "4x gtceu:source_imbued_titanium_plate")
        .circuit(1)
        .itemOutputs(" gtceu:source_imbued_titanium_crate")
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.assembler("resonant_rhodium_alloy_drum")
        .itemInputs("2x gtceu:long_resonant_rhodium_alloy_rod", "4x gtceu:resonant_rhodium_alloy_plate")
        .circuit(2)
        .itemOutputs(" gtceu:resonant_rhodium_alloy_drum")
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.assembler("resonant_rhodium_alloy_crate")
        .itemInputs("4x gtceu:long_resonant_rhodium_alloy_rod", "4x gtceu:resonant_rhodium_alloy_plate")
        .circuit(1)
        .itemOutputs(" gtceu:resonant_rhodium_alloy_crate")
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV]);


})
