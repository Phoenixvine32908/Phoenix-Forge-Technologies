ServerEvents.recipes(event => {

    event.recipes.gtceu.chemical_bath('zirconium_dust_to_hafnium_chloride')
    .itemInputs('4x gtceu:zirconium_dust')
    .inputFluids('gtceu:hydrochloric_acid 1000')
    .outputFluids('gtceu:hafnium_chloride 2000')
    .duration(200)
    .EUt(GTValues.VA[GTValues.HV]/2)
        event.recipes.gtceu.assembler('thermal_power_upgrade')
    .itemInputs('1x gtceu:aurum_steel_gear','4x gtceu:fiery_bronze_plate','2x gtceu:tempered_glass')
    .inputFluids('gtceu:glue 500')
    .itemOutputs('thermal:dynamo_output_augment')
    .duration(200)
    .EUt(GTValues.VA[GTValues.LV]/2)

    event.recipes.gtceu.centrifuge('zircon_dust_from_blackstone_dust')
    .itemInputs('4x gtceu:blackstone_dust')
    .itemOutputs('6x gtceu:magma_dust', '2x gtceu:dormant_ember_dust', 'gtceu:zircon_dust', 'gtceu:silicon_dust')
    .duration(400)
    .EUt(GTValues.VA[GTValues.LV]/2)
    event.recipes.gtceu.centrifuge('zircon_dust_processing')
    .itemInputs('12x gtceu:zircon_dust')
    .itemOutputs('6x gtceu:impure_zirconium_dust','2x gtceu:impure_hafnium_dust')
    .duration(400)
    .EUt(GTValues.VA[GTValues.HV]/2)
    
    event.recipes.gtceu.electrolyzer('hafnium_chloride')
    .inputFluids('gtceu:hafnium_chloride 500')
    .outputFluids('gtceu:hydrochloric_acid 200')
    .itemOutputs('1x gtceu:hafnium_dust')
    .duration(100)
    .EUt(GTValues.VA[GTValues.HV]/2)
    event.recipes.gtceu.chemical_bath('cooling_zircalloy')
    .itemInputs('gtceu:hot_zircalloy_ingot')
    .itemOutputs('1x gtceu:zircalloy_ingot')
    .inputFluids('minecraft:water 1000')
    .duration(200)
    .EUt(GTValues.VA[GTValues.HV]/2)
    event.recipes.gtceu.chemical_bath('cooling_magmatic_manganese_lead_distilled')
        .itemInputs('gtceu:hot_magmatic_manganese_lead_ingot')
        .inputFluids('gtceu:distilled_water 1000')
        .itemOutputs('1x gtceu:magmatic_manganese_lead_ingot')
        .duration(150)
        .EUt(GTValues.VA[GTValues.LV] / 2);

    event.recipes.gtceu.chemical_bath('cooling_magmatic_manganese_lead_water')
        .itemInputs('gtceu:hot_magmatic_manganese_lead_ingot')
        .inputFluids('minecraft:water 1000')
        .itemOutputs('1x gtceu:magmatic_manganese_lead_ingot')
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV] / 2);

    // Cooling recipes for Cryogenic Aluminum Strand
    event.recipes.gtceu.chemical_bath('cooling_cryogenic_aluminum_strand_distilled')
        .itemInputs('gtceu:hot_cryogenic_aluminum_strand_ingot')
        .inputFluids('gtceu:distilled_water 1000')
        .itemOutputs('1x gtceu:cryogenic_aluminum_strand_ingot')
        .duration(150)
        .EUt(GTValues.VA[GTValues.MV] / 2);

    event.recipes.gtceu.chemical_bath('cooling_cryogenic_aluminum_strand_water')
        .itemInputs('gtceu:hot_cryogenic_aluminum_strand_ingot')
        .inputFluids('minecraft:water 1000')
        .itemOutputs('1x gtceu:cryogenic_aluminum_strand_ingot')
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV] / 2);

    // Cooling recipes for Icy Steel Matrix
    event.recipes.gtceu.chemical_bath('cooling_icy_steel_matrix_distilled')
        .itemInputs('gtceu:hot_icy_steel_matrix_ingot')
        .inputFluids('gtceu:distilled_water 1000')
        .itemOutputs('1x gtceu:icy_steel_matrix_ingot')
        .duration(150)
        .EUt(GTValues.VA[GTValues.HV] / 2);

    event.recipes.gtceu.chemical_bath('cooling_icy_steel_matrix_water')
        .itemInputs('gtceu:hot_icy_steel_matrix_ingot')
        .inputFluids('minecraft:water 1000')
        .itemOutputs('1x gtceu:icy_steel_matrix_ingot')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV] / 2);

    // Cooling recipes for Source Titanium Filament
    event.recipes.gtceu.chemical_bath('cooling_source_titanium_filament_distilled')
        .itemInputs('gtceu:hot_source_titanium_filament_ingot')
        .inputFluids('gtceu:distilled_water 1000')
        .itemOutputs('1x gtceu:source_titanium_filament_ingot')
        .duration(150)
        .EUt(GTValues.VA[GTValues.EV] / 2);

    event.recipes.gtceu.chemical_bath('cooling_source_titanium_filament_water')
        .itemInputs('gtceu:hot_source_titanium_filament_ingot')
        .inputFluids('minecraft:water 1000')
        .itemOutputs('1x gtceu:source_titanium_filament_ingot')
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV] / 2);
    event.recipes.gtceu.assembler('fissile_heat_safe_casing')
    .itemInputs('6x gtceu:zircalloy_plate', '1x gtceu:stainless_steel_frame', '2x gtceu:aluminfrost_large_fluid_pipe')
    .circuit(2)
    .itemOutputs('2x kubejs:fissile_heat_safe_casing')
    .inputFluids('kubejs:frost 100')
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]/2)
    event.recipes.gtceu.assembler('fissile_reaction_safe_casing')
    .itemInputs('3x gtceu:zircalloy_plate','2x gtceu:stainless_steel_plate', '1x gtceu:zircalloy_frame')
    .circuit(6)
    .itemOutputs('2x kubejs:fissile_reaction_safe_casing')
    .inputFluids('gtceu:stainless_steel 250')
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]/2)
    event.recipes.gtceu.assembler('graphene_based_fission_rods')
    .itemInputs('16x gtceu:graphene_foil', 'gtceu:solid_machine_casing', 'gtceu:zircalloy_frame')
    .circuit(1)
    .itemOutputs('2x kubejs:base_fission_casing')
    .inputFluids('gtceu:steel 250')
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]/2)
    event.recipes.gtceu.assembler('fissile_safe_gearbox')
    .itemInputs('4x gtceu:zircalloy_plate','2x gtceu:zircalloy_gear', '1x gtceu:zircalloy_frame')
    .circuit(4)
    .itemOutputs('2x kubejs:fissile_safe_gearbox')
    .inputFluids('gtceu:gold 1000')
    .duration(100)
    .EUt(GTValues.VA[GTValues.LV]/2)
    event.recipes.gtceu.chemical_reactor('uranium_oxide')
    .itemInputs('4x gtceu:uraninite_dust')
    .inputFluids('gtceu:oxygen 500')
    .outputFluids('gtceu:uranium_oxide 1000')
    .duration(100)
    .EUt(GTValues.VA[GTValues.HV]/2)
    event.recipes.gtceu.assembler('zirconium_rod')
    .itemInputs('4x gtceu:lead_plate', 'gtceu:universal_fluid_cell', '2x gtceu:stainless_steel_plate')
    .itemOutputs('12x kubejs:zirconium_rod')
    .duration(200)
    .EUt(GTValues.VA[GTValues.HV]/2)
    event.recipes.gtceu.canner('zirconium_rod')
    .itemInputs('4x kubejs:zirconium_rod')
    .inputFluids('gtceu:uranium_oxide 250')
    .itemOutputs('kubejs:basic_fuel_rod')
    .duration(120)
    .EUt(GTValues.VA[GTValues.HV]/2)
    event.recipes.gtceu.chemical_bath('cooling_zircalloy_distilled')
    .itemInputs('gtceu:hot_zircalloy_ingot')
    .inputFluids('gtceu:distilled_water 1000')
    .itemOutputs('1x gtceu:zircalloy_ingot')
    .duration(150)
    .EUt(GTValues.VA[GTValues.HV]/2)
    event.recipes.gtceu.assembler('alchemical_imbuer')
    .itemInputs('4x ars_nouveau:source_gem_block', '2x gtceu:stainless_steel_large_fluid_pipe', '16x ars_nouveau:sourcestone', '4x gtceu:clean_machine_casing', '2x #gtceu:circuits/hv')
    .inputFluids('gtceu:soldering_alloy 613')
    .itemOutputs('1x gtceu:alchemical_imbuer')
    .duration(150)
    .EUt(GTValues.VA[GTValues.HV]/2)
    event.recipes.gtceu.assembler('advanced_pressurized_fission_reactor')
    .itemInputs('4x kubejs:fissile_reaction_safe_casing', '2x gtceu:titanium_gear', '8x gtceu:dense_frost_reinforced_stained_steel_plate', '3x #gtceu:circuits/ev', '3x gtceu:dense_zircalloy_plate')
    .inputFluids('gtceu:soldering_alloy 613')
    .itemOutputs('1x gtceu:advanced_pressurized_fission_reactor')
    .duration(150)
    .EUt(GTValues.VA[GTValues.EV]/2)
    event.recipes.gtceu.assembler('dimensional_anchor')
    .itemInputs('4x kubejs:frost_reinforced_stained_steel_drilling_kit', '2x gtceu:frost_reinforced_stained_steel_gear', 
        '8x gtceu:dense_frost_reinforced_stained_steel_plate', '3x #gtceu:circuits/ev', '3x gtceu:dense_zircalloy_plate','4x gtceu:icy_steel_matrix_single_wire')
    .inputFluids('gtceu:soldering_alloy 4200')
    .itemOutputs('1x gtceu:dimensional_anchor12')
    .duration(150)
    .EUt(GTValues.VA[GTValues.EV]/2)
    event.recipes.gtceu.assembler('aetherial_fabricator')
    .itemInputs('4x kubejs:source_imbued_titanium_drill_head', '2x gtceu:source_imbued_titanium_gear', 
        '8x gtceu:source_imbued_titanium_plate', '5x #gtceu:circuits/ev', '3x gtceu:dense_zircalloy_plate', '4x gtceu:source_titanium_filament_single_wire')
    .inputFluids('gtceu:soldering_alloy 4200')
    .itemOutputs('1x gtceu:aetherial_fabricator12')
    .duration(150)
    .EUt(GTValues.VA[GTValues.EV]/2)
    event.recipes.gtceu.assembler('pressurized_fission_turbine')
    .itemInputs('2x kubejs:fissile_reaction_safe_casing','8x kubejs:fissile_heat_safe_casing', '2x gtceu:dense_zircalloy_plate','1x #gtceu:circuits/ev', '2x gtceu:titanium_large_fluid_pipe' )
    .inputFluids('gtceu:soldering_alloy 613')
    .itemOutputs('1x gtceu:pressurized_fission_turbine')
    .duration(150)
    .EUt(GTValues.VA[GTValues.EV]/2)
    event.recipes.gtceu.assembler('budding_amethyst_assembly')
        .itemInputs(
            '4x minecraft:amethyst_block',   // Amethyst blocks for structure
            '4x minecraft:amethyst_shard',   // Amethyst shards for crystal growth
            'minecraft:ender_eye'            // Ender Eye for mystical growth/energy
        )
        .itemOutputs('minecraft:budding_amethyst')
        .duration(200)                      // Processing time (ticks)
        .EUt(GTValues.VA[GTValues.MV]);     // Energy consumption: MV tier (512 EU/t)

    // --- AE2 Flawless Budding Certus Quartz Recipe (GTCEu Assembler) ---
    // A higher-tier recipe using the Assembler, requiring HV voltage for precision and power.
    event.recipes.gtceu.assembler('flawless_budding_certus_quartz_assembly')
        .itemInputs(
            '4x ae2:charged_certus_quartz_crystal', // Charged Certus for pure energy/perfection
            '4x ae2:certus_quartz_crystal',         // Regular Certus for bulk material
            'ae2:growth_accelerator',               // AE2 Growth Accelerator to symbolize crystal perfection
            'ae2:fluix_crystal'                     // Fluix Crystal for AE2 integration
        )
        .itemOutputs('ae2:flawless_budding_quartz')
        .duration(400)                      // Longer processing time
        .EUt(GTValues.VA[GTValues.HV]);
    event.recipes.gtceu.assembler('pressurized_fission_reactor')
    .itemInputs('4x kubejs:fissile_reaction_safe_casing', '8x gtceu:stainless_steel_large_fluid_pipe', '4x gtceu:zircalloy_frame', '2x #gtceu:circuits/hv')
    .inputFluids('gtceu:soldering_alloy 613')
    .itemOutputs('1x gtceu:pressurized_fission_reactor')
    .duration(150)
    .EUt(GTValues.VA[GTValues.HV]/2)
    event.recipes.gtceu.mixer('zircalloy_dust')
    .itemInputs('3x gtceu:zirconium_dust', '2x gtceu:niobium_dust', 'gtceu:hafnium_dust')
    .itemOutputs('5x gtceu:zircalloy_dust')
    .duration(100)
    .circuit(15)
    .EUt(GTValues.VA[GTValues.HV]/2)
        event.recipes.gtceu.mixer('space_grade_steel_dust')
        .itemInputs(
            '1x gtceu:zircalloy_dust', 
            '2x gtceu:tungsten_dust', 
            '4x gtceu:icy_steel_matrix_dust',
            '2x gtceu:stainless_steel_dust',
        )
        .inputFluids('gtceu:steel 750')
        .itemOutputs('4x gtceu:space_grade_steel_dust')
        .duration(200)
        .circuit(12)
        .EUt(GTValues.VA[GTValues.EV]); 
    event.recipes.gtceu.pressurized_fission_reactor('fission1')
    .itemInputs('3x kubejs:basic_fuel_rod')
    .itemOutputs('10x gtceu:low_level_radioactive_waste_ingot')
    .duration(1000)
    .EUt(-GTValues.VA[GTValues.HV]*4)
    event.recipes.gtceu.advanced_pressurized_fission_reactor('fission2')
    .itemInputs('3x kubejs:basic_fuel_rod')
    .perTick(true)
    .inputFluids('minecraft:water 100')
    .outputFluids('gtceu:medium_pressure_fissile_steam 100')
    .chancedOutput('gtceu:low_level_radioactive_waste_ingot', 500, 0)
    .duration(5000)
    .EUt(-GTValues.VA[GTValues.ULV])
    event.recipes.gtceu.pressurized_fission_turbine('fission3')
    .perTick(true)
    .inputFluids('gtceu:medium_pressure_fissile_steam 10')
    .outputFluids('gtceu:distilled_water 20')
    .duration(200)
    .EUt(-GTValues.VA[GTValues.EV]*4)
    event.recipes.gtceu.centrifuge('fissio')
    .itemInputs('1x gtceu:low_level_radioactive_waste_dust')
    .itemOutputs('5x gtceu:lead_dust', '3x gtceu:thorium_dust')
    .outputFluids('gtceu:helium 500')
    .duration(500)
    .EUt(GTValues.VA[GTValues.HV]/2)
    event.recipes.gtceu.source_imbument('source_gem')
    .itemInputs('1x minecraft:amethyst_shard')
    .inputFluids('gtceu:source_of_magic 250')
    .itemOutputs('2x ars_nouveau:source_gem')
    .duration(40)
    .EUt(GTValues.VA[GTValues.HV]/2)
    event.recipes.gtceu.source_imbument('source_gem_without_source')
    .itemInputs('1x minecraft:amethyst_shard')
    .itemOutputs('1x ars_nouveau:source_gem')
    .duration(1500)
    .EUt(GTValues.VA[GTValues.HV]/2)
    event.recipes.gtceu.source_extraction('source_from_wheat')
    .itemInputs('3x minecraft:wheat')
    .outputFluids('gtceu:source_of_magic 125')
    .duration(190)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_carrot')
    .itemInputs('2x minecraft:carrot')
    .outputFluids('gtceu:source_of_magic 125')
    .duration(160)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_potato')
    .itemInputs('2x minecraft:potato')
    .outputFluids('gtceu:source_of_magic 125')
    .duration(160)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_beetroot')
    .itemInputs('3x minecraft:beetroot')
    .outputFluids('gtceu:source_of_magic 125')
    .duration(170)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_sugarcane')
    .itemInputs('3x minecraft:sugar_cane')
    .outputFluids('gtceu:source_of_magic 125')
    .duration(195)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_pumpkin')
    .itemInputs('1x minecraft:pumpkin')
    .outputFluids('gtceu:source_of_magic 250')
    .duration(200)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_melon')
    .itemInputs('1x minecraft:melon_slice')
    .outputFluids('gtceu:source_of_magic 80')
    .duration(180)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_nether_wart')
    .itemInputs('2x minecraft:nether_wart')
    .outputFluids('gtceu:source_of_magic 125')
    .duration(200)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_allium')
    .itemInputs('3x minecraft:allium')
    .outputFluids('gtceu:source_of_magic 75')
    .duration(150)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_azure_bluet')
    .itemInputs('3x minecraft:azure_bluet')
    .outputFluids('gtceu:source_of_magic 75')
    .duration(150)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_blue_orchid')
    .itemInputs('2x minecraft:blue_orchid')
    .outputFluids('gtceu:source_of_magic 90')
    .duration(160)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_cornflower')
    .itemInputs('3x minecraft:cornflower')
    .outputFluids('gtceu:source_of_magic 80')
    .duration(155)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_dandelion')
    .itemInputs('4x minecraft:dandelion')
    .outputFluids('gtceu:source_of_magic 50')
    .duration(130)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_lily_of_the_valley')
    .itemInputs('2x minecraft:lily_of_the_valley')
    .outputFluids('gtceu:source_of_magic 100')
    .duration(170)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_orange_tulip')
    .itemInputs('3x minecraft:orange_tulip')
    .outputFluids('gtceu:source_of_magic 80')
    .duration(155)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_oxeye_daisy')
    .itemInputs('3x minecraft:oxeye_daisy')
    .outputFluids('gtceu:source_of_magic 75')
    .duration(150)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_pink_tulip')
    .itemInputs('3x minecraft:pink_tulip')
    .outputFluids('gtceu:source_of_magic 80')
    .duration(155)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_poppy')
    .itemInputs('3x minecraft:poppy')
    .outputFluids('gtceu:source_of_magic 65')
    .duration(140)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_red_tulip')
    .itemInputs('3x minecraft:red_tulip')
    .outputFluids('gtceu:source_of_magic 80')
    .duration(155)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_sunflower')
    .itemInputs('1x minecraft:sunflower')
    .outputFluids('gtceu:source_of_magic 150')
    .duration(180)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_white_tulip')
    .itemInputs('3x minecraft:white_tulip')
    .outputFluids('gtceu:source_of_magic 80')
    .duration(155)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_brown_mushroom')
    .itemInputs('4x minecraft:brown_mushroom')
    .outputFluids('gtceu:source_of_magic 60')
    .duration(145)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_red_mushroom')
    .itemInputs('4x minecraft:red_mushroom')
    .outputFluids('gtceu:source_of_magic 60')
    .duration(145)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_crimson_fungus')
    .itemInputs('2x minecraft:crimson_fungus')
    .outputFluids('gtceu:source_of_magic 90')
    .duration(165)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_warped_fungus')
    .itemInputs('2x minecraft:warped_fungus')
    .outputFluids('gtceu:source_of_magic 90')
    .duration(165)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_seagrass')
    .itemInputs('4x minecraft:seagrass')
    .outputFluids('gtceu:source_of_magic 45')
    .duration(135)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_kelp')
    .itemInputs('4x minecraft:kelp')
    .outputFluids('gtceu:source_of_magic 50')
    .duration(140)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_bamboo')
    .itemInputs('4x minecraft:bamboo')
    .outputFluids('gtceu:source_of_magic 55')
    .duration(140)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_cactus')
    .itemInputs('3x minecraft:cactus')
    .outputFluids('gtceu:source_of_magic 70')
    .duration(145)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_vine')
    .itemInputs('4x minecraft:vine')
    .outputFluids('gtceu:source_of_magic 40')
    .duration(130)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_glow_lichen')
    .itemInputs('2x minecraft:glow_lichen')
    .outputFluids('gtceu:source_of_magic 110')
    .duration(175)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_lilypad')
    .itemInputs('4x minecraft:lily_pad')
    .outputFluids('gtceu:source_of_magic 50')
    .duration(135)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_sweet_berries')
    .itemInputs('4x minecraft:sweet_berries')
    .outputFluids('gtceu:source_of_magic 35')
    .duration(125)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_twisting_vines')
    .itemInputs('3x minecraft:twisting_vines')
    .outputFluids('gtceu:source_of_magic 85')
    .duration(160)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_weeping_vines')
    .itemInputs('3x minecraft:weeping_vines')
    .outputFluids('gtceu:source_of_magic 85')
    .duration(160)
    .EUt(GTValues.VA[GTValues.HV] / 3)
event.recipes.gtceu.source_extraction('source_from_coal')
    .itemInputs('2x minecraft:coal')
    .outputFluids('gtceu:source_of_magic 500')
    .duration(220)
    .EUt(GTValues.VA[GTValues.HV] / 2.5)

event.recipes.gtceu.source_extraction('source_from_coke')
    .itemInputs('1x gtceu:coke')
    .outputFluids('gtceu:source_of_magic 600')
    .duration(250)
    .EUt(GTValues.VA[GTValues.HV] / 2.5)

event.recipes.gtceu.source_extraction('source_from_charcoal')
    .itemInputs('2x minecraft:charcoal')
    .outputFluids('gtceu:source_of_magic 450')
    .duration(210)
    .EUt(GTValues.VA[GTValues.HV] / 2.5)
event.recipes.gtceu.source_extraction('source_from_oak_log')
    .itemInputs('4x minecraft:oak_log')
    .outputFluids('gtceu:source_of_magic 200')
    .duration(180)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_spruce_log')
    .itemInputs('4x minecraft:spruce_log')
    .outputFluids('gtceu:source_of_magic 200')
    .duration(180)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_birch_log')
    .itemInputs('4x minecraft:birch_log')
    .outputFluids('gtceu:source_of_magic 200')
    .duration(180)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_jungle_log')
    .itemInputs('4x minecraft:jungle_log')
    .outputFluids('gtceu:source_of_magic 200')
    .duration(180)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_acacia_log')
    .itemInputs('4x minecraft:acacia_log')
    .outputFluids('gtceu:source_of_magic 220')
    .duration(190)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_dark_oak_log')
    .itemInputs('4x minecraft:dark_oak_log')
    .outputFluids('gtceu:source_of_magic 220')
    .duration(190)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_mangrove_log')
    .itemInputs('4x minecraft:mangrove_log')
    .outputFluids('gtceu:source_of_magic 210')
    .duration(185)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_cherry_log')
    .itemInputs('4x minecraft:cherry_log')
    .outputFluids('gtceu:source_of_magic 210')
    .duration(185)
    .EUt(GTValues.VA[GTValues.HV] / 3)

event.recipes.gtceu.source_extraction('source_from_oak_planks')
    .itemInputs('4x minecraft:oak_planks')
    .outputFluids('gtceu:source_of_magic 150')
    .duration(160)
    .EUt(GTValues.VA[GTValues.HV] / 3.2)

event.recipes.gtceu.source_extraction('source_from_spruce_planks')
    .itemInputs('4x minecraft:spruce_planks')
    .outputFluids('gtceu:source_of_magic 150')
    .duration(160)
    .EUt(GTValues.VA[GTValues.HV] / 3.2)

event.recipes.gtceu.source_extraction('source_from_birch_planks')
    .itemInputs('4x minecraft:birch_planks')
    .outputFluids('gtceu:source_of_magic 150')
    .duration(160)
    .EUt(GTValues.VA[GTValues.HV] / 3.2)

event.recipes.gtceu.source_extraction('source_from_jungle_planks')
    .itemInputs('4x minecraft:jungle_planks')
    .outputFluids('gtceu:source_of_magic 150')
    .duration(160)
    .EUt(GTValues.VA[GTValues.HV] / 3.2)

event.recipes.gtceu.source_extraction('source_from_acacia_planks')
    .itemInputs('4x minecraft:acacia_planks')
    .outputFluids('gtceu:source_of_magic 165')
    .duration(170)
    .EUt(GTValues.VA[GTValues.HV] / 3.2)

event.recipes.gtceu.source_extraction('source_from_dark_oak_planks')
    .itemInputs('4x minecraft:dark_oak_planks')
    .outputFluids('gtceu:source_of_magic 165')
    .duration(170)
    .EUt(GTValues.VA[GTValues.HV] / 3.2)

event.recipes.gtceu.source_extraction('source_from_mangrove_planks')
    .itemInputs('4x minecraft:mangrove_planks')
    .outputFluids('gtceu:source_of_magic 160')
    .duration(165)
    .EUt(GTValues.VA[GTValues.HV] / 3.2)

event.recipes.gtceu.source_extraction('source_from_cherry_planks')
    .itemInputs('4x minecraft:cherry_planks')
    .outputFluids('gtceu:source_of_magic 160')
    .duration(165)
    .EUt(GTValues.VA[GTValues.HV] / 3.2)
event.recipes.gtceu.source_extraction('source_from_lava')
    .inputFluids('minecraft:lava 1000')
    .outputFluids('gtceu:source_of_magic 500')
    .duration(280)
    .EUt(GTValues.VA[GTValues.HV] / 2)
    event.recipes.gtceu.extractor('lava_from_magma')
    .itemInputs("minecraft:magma_block")
    .outputFluids("minecraft:lava 250")
    .duration(280)
    .EUt(GTValues.VA[GTValues.LV] / 2)
      event.recipes.gtceu.extractor('lava_from_magma_dust')
    .itemInputs("gtceu:magma_dust")
    .outputFluids("minecraft:lava 150")
    .duration(280)
    .EUt(GTValues.VA[GTValues.LV] / 2)
    event.recipes.gtceu.source_imbument('source_imbued_titanium')
    .itemInputs('1x gtceu:titanium_ingot')
    .inputFluids('gtceu:source_of_magic 1500')
    .itemOutputs('gtceu:source_imbued_titanium_ingot')
    .duration(160)
    .EUt(GTValues.VA[GTValues.HV] / 3)
    // Space Grade Steel Drilling Kit - EV Assembler
event.recipes.gtceu.assembler('space_grade_steel_drilling_kit')
    .itemInputs(
        '8x gtceu:space_grade_steel_plate',
        '16x gtceu:space_grade_steel_screw',
        '2x gtceu:ev_field_generator',
        '4x gtceu:ev_electric_motor',
        '20x #gtceu:circuits/ev',
        '4x gtceu:source_titanium_filament_single_wire',
        '8x kubejs:space_grade_steel_drill_head',
        '1x gtceu:ev_machine_hull')
    .inputFluids('gtceu:soldering_alloy 1200')
    .itemOutputs('kubejs:space_grade_steel_drilling_kit')
    .duration(400)
    .EUt(GTValues.VA[GTValues.EV]);

/// Frost Reinforced Stained Steel Drilling Kit - EV Assembler
event.recipes.gtceu.assembler('frost_reinforced_stained_steel_drilling_kit')
    .itemInputs(
        '8x gtceu:frost_reinforced_stained_steel_plate',
        '16x gtceu:frost_reinforced_stained_steel_screw',
        '2x gtceu:hv_field_generator',
        '4x gtceu:hv_electric_motor',
        '20x #gtceu:circuits/hv',
        '4x gtceu:icy_steel_matrix_single_wire',
        '12x kubejs:frost_reinforced_stained_steel_drill_head',
        '1x gtceu:hv_machine_hull')
    .inputFluids('gtceu:soldering_alloy 1200')
    .itemOutputs('kubejs:frost_reinforced_stained_steel_drilling_kit')
    .duration(400)
    .EUt(GTValues.VA[GTValues.EV]);

// Aluminfrost Drilling Kit - EV Assembler
event.recipes.gtceu.assembler('aluminfrost_drilling_kit')
    .itemInputs(
        '8x gtceu:aluminfrost_plate',
        '16x gtceu:aluminfrost_screw',
        '2x gtceu:mv_field_generator',
        '4x gtceu:mv_electric_motor',
        '20x #gtceu:circuits/mv',
        '4x gtceu:cryogenic_aluminum_strand_single_wire',
        '10x kubejs:aluminfrost_drill_head',
        '1x gtceu:mv_machine_hull')
    .inputFluids('gtceu:soldering_alloy 1200')
    .itemOutputs('kubejs:aluminfrost_drilling_kit')
    .duration(400)
    .EUt(GTValues.VA[GTValues.EV]);

// Aurum Steel Drilling Kit - EV Assembler
event.recipes.gtceu.assembler('aurum_steel_drilling_kit')
    .itemInputs(
        '8x gtceu:aurum_steel_plate',
        '16x gtceu:aurum_steel_screw',
        '2x gtceu:lv_field_generator',
        '4x gtceu:lv_electric_motor',
        '20x #gtceu:circuits/lv',
        '4x gtceu:magmatic_manganese_lead_single_wire',
        '8x kubejs:aurum_steel_drill_head',
        '1x gtceu:lv_machine_hull')
    .inputFluids('gtceu:soldering_alloy 1200')
    .itemOutputs('kubejs:aurum_steel_drilling_kit')
    .duration(400)
    .EUt(GTValues.VA[GTValues.EV]);
    event.recipes.gtceu.mixer('magmatic_manganese_lead_alloy')
        .itemInputs(
            '2x gtceu:manganese_dust', // Manganese component (LV)
            '2x gtceu:lead_dust',
            '8x gtceu:dormant_ember_dust',
                  // Lead component (LV)
        )
        .inputFluids('minecraft:lava 288') // "Magmatic" implies lava/heat
        .itemOutputs('12x gtceu:magmatic_manganese_lead_dust') // Output the custom material dust
        .duration(200) // LV tier duration
        .EUt(GTValues.VA[GTValues.LV]); // LV voltage


    // 2. Cryogenic Aluminum Strand (MV Mixer) - NO CHANGE
    // Create the Cryogenic Aluminum Strand alloy/compound.
    // Niobium is HV, which is appropriate for an MV output.
    event.recipes.gtceu.mixer('cryo_aluminum_superconductor_alloy')
        .itemInputs(
            '4x gtceu:aluminium_dust', // Aluminum component (LV)
            '1x gtceu:niobium_dust',
            '6x gtceu:permafrost_dust', // Niobium component (HV) - OK for MV output
        )
        .inputFluids('gtceu:nitrogen 250') // "Cryogenic" implies liquid nitrogen
        .itemOutputs('5x gtceu:cryogenic_aluminum_strand_dust') // Output the custom material dust
        .duration(300) // MV tier duration
        .EUt(GTValues.VA[GTValues.MV]); // MV voltage

    // 3. Icy Steel Matrix (HV Mixer) - REVISED
    // Create the Icy Steel Matrix alloy/compound, replacing Tungsten (IV) with Titanium (EV).
    event.recipes.gtceu.mixer('icy_steel_matrix_alloy')
        .itemInputs(
            '4x gtceu:steel_dust',    // Steel component (HV)
            '2x gtceu:stainless_steel_dust',
            '4x gtceu:unrefined_aluminfrost_dust',
            '12x gtceu:permafrost_dust',  // Titanium component (EV) - Appropriate for HV output
        )
        .inputFluids('gtceu:nitrogen 50') 
        .itemOutputs('18x gtceu:icy_steel_matrix_dust') // Output the custom material dust
        .duration(600) // HV tier duration
        .EUt(GTValues.VA[GTValues.HV]); // HV voltage

    event.recipes.gtceu.mixer('source_titanium_filament_alloy')
        .itemInputs(
            '4x gtceu:titanium_dust',
            '64x ars_nouveau:source_gem',
            '2x gtceu:molybdenum_dust',

        )
        .inputFluids('gtceu:source_of_magic 1200')
        .itemOutputs('14x gtceu:source_titanium_filament_dust') // Output the custom material dust
        .duration(500) // EV tier duration
        .EUt(GTValues.VA[GTValues.EV]); // EV voltage
        event.recipes.gtceu.assembler('diamond_ring')
        .itemInputs(
            '4x gtceu:double_iridium_plate',
            '32x gtceu:tungsten_steel_plate',
            '2x gtceu:molybdenum_dust',
            '1x gtceu:advanced_electric_jetpack'

        )
        .inputFluids('gtceu:void_touched_tungsten 670') 
        .itemOutputs('1x angelring:diamond_ring') // Output the custom material dust
        .duration(500) // EV tier duration
        .EUt(GTValues.VA[GTValues.EV]); // EV voltage
// Space Miner Module - EV Assembler
event.recipes.gtceu.assembler('space_miner_module')
    .itemInputs(
        '1x kubejs:space_grade_steel_drilling_kit',       // Slot 1: Core custom drilling kit
        '1x gtceu:ev_machine_hull',                     // Slot 2: Base machine structure
        '4x gtceu:ev_robot_arm',                          // Slot 3: Key robotic components
        '4x gtceu:ev_sensor',                             // Slot 4: Key sensor components
        '2x gtceu:ev_field_generator',                    // Slot 5: High-end EV power/control
        '8x #gtceu:circuits/ev',                          // Slot 6: Logic (highest available EV circuit)
        '4x gtceu:ev_emitter',                            // Slot 7: Energy emission/cutting
        '8x gtceu:space_grade_steel_plate',               // Slot 8: Primary custom structural material
        '8x gtceu:source_titanium_filament_single_wire'  // Slot 9: High-tech custom wiring
    )
    .inputFluids('kubejs:cryo_ember_fluid 16000')
    .itemOutputs('kubejs:space_miner_module')
    .duration(600)
    .EUt(GTValues.VA[GTValues.EV]);

// Earthbound Miner Module - EV Assembler 
event.recipes.gtceu.assembler('earthbound_miner_module')
    .itemInputs(
        '1x kubejs:frost_reinforced_stained_steel_drilling_kit', // Slot 1: Core custom drilling kit 1
        '1x kubejs:aurum_steel_drilling_kit',     // Slot 2: Core custom drilling kit 2
        '1x kubejs:aluminfrost_drilling_kit',                   // Slot 3: Core custom drilling kit 3
        '1x gtceu:ev_machine_hull',                             // Slot 4: Base machine structure (essential)
        '4x gtceu:ev_robot_arm',                                // Slot 5: Key robotic components for automation
        '8x gtceu:stable_machine_casing',                     // Slot 6: REPLACED anchor_casing. A robust EV-tier structural component.
        '4x gtceu:ev_electric_pump',                            // Slot 7: For fluid/material extraction
        '8x #gtceu:circuits/ev',                                // Slot 8: Logic (should resolve to advanced_circuit_board or similar in your setup)
        '8x gtceu:icy_steel_matrix_single_wire'                 // Slot 9: Custom cryogenic/structural wiring
    )
    .inputFluids('kubejs:cryo_ember_fluid 12000')
    .itemOutputs('kubejs:earthbound_miner_module')
    .duration(600)
    .EUt(GTValues.VA[GTValues.EV]);
})
