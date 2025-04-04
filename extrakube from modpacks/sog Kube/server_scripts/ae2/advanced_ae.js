ServerEvents.recipes(event => {
	
	event.recipes.gtceu.assembly_line('quantum_helmet')
	.itemInputs('gtceu:quarktech_helmet', 'ae2:wireless_access_point', '12x advanced_ae:quantum_processor', '5x advanced_ae:quantum_storage_component', '4x #gtceu:circuits/uv', '32x gtceu:fine_americium_wire', '2x gtceu:nether_star_lens', '32x advanced_ae:quantum_alloy_plate', '32x advanced_ae:quantum_alloy_plate', '16x advanced_ae:quantum_alloy_plate')
	.itemOutputs('advanced_ae:quantum_helmet')
	.inputFluids(
	Fluid.of('gtceu:soldering_alloy', 1440),
	Fluid.of('gtceu:lubricant', 1250), 
	Fluid.of('gtceu:polybenzimidazole', 11520),
	Fluid.of('advanced_ae:quantum_infusion_source', 16000)
	)
	.duration(2000)
	.EUt(GTValues.VA[GTValues.UV])       
	
	event.recipes.gtceu.assembly_line('quantum_chestplate')
	.itemInputs('gtceu:advanced_quarktech_chestplate', 'ae2:wireless_access_point', '32x advanced_ae:quantum_processor', '8x advanced_ae:quantum_storage_component', '16x #gtceu:circuits/uv', '32x gtceu:fine_americium_wire', '32x gtceu:fine_americium_wire', '32x advanced_ae:quantum_alloy_plate', '32x advanced_ae:quantum_alloy_plate', '32x advanced_ae:quantum_alloy_plate', '32x advanced_ae:quantum_alloy_plate')
	.itemOutputs('advanced_ae:quantum_chestplate')
	.inputFluids(
	Fluid.of('gtceu:soldering_alloy', 2304),
	Fluid.of('gtceu:lubricant', 2000), 
	Fluid.of('gtceu:polybenzimidazole', 18432),
	Fluid.of('advanced_ae:quantum_infusion_source', 32000)
	)
	.duration(2000)
	.EUt(GTValues.VA[GTValues.UV])   
	
	event.recipes.gtceu.assembly_line('quantum_leggings')
	.itemInputs('gtceu:quarktech_leggings', 'ae2:wireless_access_point', '24x advanced_ae:quantum_processor', '6x advanced_ae:quantum_storage_component', '12x #gtceu:circuits/uv', '32x gtceu:fine_americium_wire', '32x gtceu:fine_americium_wire', '32x advanced_ae:quantum_alloy_plate', '32x advanced_ae:quantum_alloy_plate', '32x advanced_ae:quantum_alloy_plate', '16x advanced_ae:quantum_alloy_plate')
	.itemOutputs('advanced_ae:quantum_leggings')
	.inputFluids(
	Fluid.of('gtceu:soldering_alloy', 2016),
	Fluid.of('gtceu:lubricant', 1750), 
	Fluid.of('gtceu:polybenzimidazole', 16128),
	Fluid.of('advanced_ae:quantum_infusion_source', 24000)
	)
	.duration(2000)
	.EUt(GTValues.VA[GTValues.UV])   
	
	event.recipes.gtceu.assembly_line('quantum_boots')
	.itemInputs('gtceu:quarktech_boots', 'ae2:wireless_access_point', '16x advanced_ae:quantum_processor', '4x advanced_ae:quantum_storage_component', '4x #gtceu:circuits/uv', '32x gtceu:fine_americium_wire', '32x advanced_ae:quantum_alloy_plate', '32x advanced_ae:quantum_alloy_plate')
	.itemOutputs('advanced_ae:quantum_boots')
	.inputFluids(
	Fluid.of('gtceu:soldering_alloy', 1152),
	Fluid.of('gtceu:lubricant', 1000), 
	Fluid.of('gtceu:polybenzimidazole', 9216),
	Fluid.of('advanced_ae:quantum_infusion_source', 16000)
	)
	.duration(2000)
	.EUt(GTValues.VA[GTValues.UV])   
	
	event.recipes.gtceu.assembler('uprade_base')
          .itemInputs('16x advanced_ae:quantum_alloy_plate', '8x advanced_ae:quantum_processor', '16x gtceu:fine_americium_wire')
          .inputFluids('gtceu:polybenzimidazole 576')
          .itemOutputs('advanced_ae:quantum_upgrade_base')
          .duration(1500)
          .EUt(GTValues.VA[GTValues.ZPM])
		  
	let upgradecards = (input1, input2, input3, output) => {
		event.recipes.gtceu.assembler(output)
			.itemInputs('advanced_ae:quantum_upgrade_base', '32x gtceu:tritanium_foil', '32x gtceu:fine_americium_wire', input1, input2, input3)
          .inputFluids('gtceu:polybenzimidazole 1152')
          .itemOutputs(output)
          .duration(1500)
          .EUt(GTValues.VA[GTValues.ZPM])
		
	}
	upgradecards('4x gtceu:zpm_electric_piston', '32x ae2:speed_card', 'minecraft:air', 'advanced_ae:walk_speed_card')
	upgradecards('8x gtceu:uv_electric_piston', '64x ae2:speed_card', '4x advanced_ae:walk_speed_card', 'advanced_ae:sprint_speed_card')
	upgradecards('4x gtceu:zpm_electric_piston', '16x advanced_ae:quantum_alloy_stairs', 'minecraft:air', 'advanced_ae:step_assist_card')
	upgradecards('2x gtceu:gravitation_engine_unit', '4x gtceu:zpm_electric_piston', 'minecraft:air', 'advanced_ae:jump_height_card')
	upgradecards('4x gtceu:zpm_field_generator', 'minecraft:lava_bucket', 'minecraft:air', 'advanced_ae:lava_immunity_card')
	upgradecards('16x gtceu:gravitation_engine_unit', '16x #gtceu:circuits/zpm', 'angelring:energetic_angel_ring', 'advanced_ae:flight_card')
	upgradecards('4x gtceu:uv_electric_pump', 'gtceu:zpm_compressor', 'ad_astra:large_gas_tank', 'advanced_ae:water_breathing_card')
	upgradecards('4x advanced_ae:stock_export_bus_part', 'sophisticatedbackpacks:advanced_feeding_upgrade', 'ae2:wireless_access_point', 'advanced_ae:auto_feeding_card')
	upgradecards('16x advanced_ae:stock_export_bus_part', 'merequester:requester', 'ae2:wireless_access_point', 'advanced_ae:auto_stock_card')
	upgradecards('2x gtceu:zpm_robot_arm', 'gtceu:hv_item_magnet', 'minecraft:air', 'advanced_ae:magnet_card')
	upgradecards('16x gtceu:uv_field_generator', 'ae2:portable_item_cell_256k', '16x megacells:mega_energy_cell', 'advanced_ae:hp_buffer_card')
	upgradecards('8x gtceu:uv_field_generator', '8x gtceu:uv_electric_piston', '64x ae2:speed_card', 'advanced_ae:evasion_card')
	upgradecards('16x gtceu:uv_field_generator', Item.of('gtceu:gold_drum', '{Fluid:{Amount:32000,FluidName:"gtceu:potion",Tag:{Potion:"minecraft:strong_regeneration"}}}'), '16x megacells:mega_energy_cell', 'advanced_ae:regeneration_card')
	upgradecards('8x gtceu:uv_robot_arm', '8x gtceu:uv_electric_piston', 'gtceu:nano_saber', 'advanced_ae:strength_card')
	upgradecards('8x gtceu:uv_robot_arm', '8x gtceu:uv_electric_piston', '64x ae2:speed_card', 'advanced_ae:attack_speed_card')
	upgradecards('16x gtceu:zpm_world_accelerator', '64x minecraft:beacon', 'minecraft:air', 'advanced_ae:luck_card')
	upgradecards('2x gtceu:uv_robot_arm', '4x gtceu:long_tritanium_rod', 'minecraft:air', 'advanced_ae:reach_card')
	upgradecards('8x gtceu:uv_electric_motor', '8x gtceu:naquadah_alloy_rotor', '64x ae2:speed_card', 'advanced_ae:swim_speed_card')
	upgradecards('8x gtceu:zpm_sensor', '8x gtceu:zpm_emitter', 'gtceu:nightvision_goggles', 'advanced_ae:night_vision_card')
	upgradecards('8x gtceu:uv_field_generator', '8x gtceu:gravitation_engine_unit', '16x #gtceu:circuits/uv', 'advanced_ae:flight_drift_card')
	upgradecards('4x gtceu:uv_charger_4x', '32x megacells:mega_energy_cell', 'ae2:wireless_access_point', 'advanced_ae:recharging_card')
	upgradecards('8x gtceu:uv_robot_arm', 'ae2:cell_workbench', 'ae2:wireless_access_point', 'advanced_ae:portable_workbench_card')
	upgradecards('8x gtceu:zpm_sensor', 'merequester:requester', 'ae2:wireless_access_point', 'advanced_ae:pick_craft_card')
	
	})