ServerEvents.recipes(event => {
 event.recipes.gtceu.assembly_line('sterile_cleaning_maintenance_hatch')
     .itemInputs('4x #gtceu:circuits/uhv',
      '2x gtceu:uhv_robot_arm',
      '1x gtceu:uhv_machine_hull',
      '1x gtceu:auto_maintenance_hatch',
   '2x gtceu:ruthenium_trinium_americium_neutronate_single_wire',
     )
     .inputFluids('gtceu:soldering_alloy 1152','gtceu:tritanium 1152')
     .itemOutputs('gtmutils:sterile_cleaning_maintenance_hatch')
     .duration(600)
     .EUt(GTValues.VA[GTValues.UHV]/2)
     .stationResearch(b => b.researchStack(Item.of('gtceu:cleaning_maintenance_hatch')).EUt(30720).CWUt(64, 32000))


     event.recipes.gtceu.fusion_reactor('stabilized_antimatter')
     .inputFluids([
      Fluid.of('kubejs:chaos', 5000), 
      Fluid.of('gtceu:uranium_235', 2500), 
     ])
     .outputFluids(Fluid.of('gtceu:stabilized_antimatter', 1000))
     .duration(64).EUt(1048576)
     .fusionStartEU(600000000)

     event.recipes.gtceu.extractor('chaos')
     .itemInputs('4x draconicevolution:large_chaos_frag')
     .outputFluids('kubejs:chaos 6000')
     .duration(1000)
     .EUt(1048576)
      // Motors
       // Motors
       event.recipes.gtceu.assembly_line('uhv_motor')
            .itemInputs('gtceu:long_magnetic_samarium_rod', '8x gtceu:long_stabilized_antimatter_rod', '8x gtceu:stabilized_antimatter_ring', '16x gtceu:stabilized_antimatter_round', '64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire', '64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire', '32x gtceu:fine_ruthenium_trinium_americium_neutronate_wire', '2x gtceu:europium_single_cable', '4x gtceu:ruthenium_trinium_americium_neutronate_plate')
            .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 2000', 'gtceu:tritanium 1152', 'gtceu:naquadria 576')
            .itemOutputs('gtceu:uhv_electric_motor')
            .duration(600)
            .EUt(491520)
     
        .stationResearch(b => b
         .researchStack('gtceu:uv_electric_motor')
         .CWUt(96, 384000)
         .EUt(368640)
        )
     
       // Pistons
       event.recipes.gtceu.assembly_line('uhv_piston')
        .itemInputs('gtceu:uhv_electric_motor', '4x gtceu:stabilized_antimatter_plate', '4x gtceu:stabilized_antimatter_ring', '16x gtceu:stabilized_antimatter_round', '4x gtceu:stabilized_antimatter_rod', 'gtceu:stabilized_antimatter_gear', '2x gtceu:small_stabilized_antimatter_gear', '2x gtceu:europium_single_cable', '2x gtceu:ruthenium_trinium_americium_neutronate_plate')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 2000', 'gtceu:tritanium 1152', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_electric_piston')
        .duration(600)
        .EUt(491520)
     
        .stationResearch(b => b
         .researchStack('gtceu:uv_electric_piston')
         .CWUt(96, 384000)
         .EUt(368640)
        )
     
       // Robot Arms
       event.recipes.gtceu.assembly_line('uhv_robot_arm')
        .itemInputs('4x gtceu:long_stabilized_antimatter_rod', 'gtceu:stabilized_antimatter_gear', '3x gtceu:small_stabilized_antimatter_gear', '3x gtceu:uhv_electric_motor', 'gtceu:uhv_electric_piston', '#gtceu:circuits/uhv', '2x #gtceu:circuits/uv', '4x #gtceu:circuits/zpm', '4x gtceu:europium_single_cable', '2x gtceu:ruthenium_trinium_americium_neutronate_plate')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 2000', 'gtceu:tritanium 1152', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_robot_arm')
        .duration(600)
        .EUt(491520)
     
        .stationResearch(b => b
         .researchStack('gtceu:uv_robot_arm')
         .CWUt(96, 384000)
         .EUt(368640)
        )
     
       // Sensors
       event.recipes.gtceu.assembly_line('uhv_sensor')
        .itemInputs('gtceu:neutronium_frame', 'gtceu:uhv_electric_motor', '4x gtceu:stabilized_antimatter_plate', '2x gtceu:gravi_star', '#gtceu:circuits/uhv', '64x gtceu:ruthenium_trinium_americium_neutronate_foil', '32x gtceu:ruthenium_trinium_americium_neutronate_foil', '4x gtceu:europium_single_cable', '2x gtceu:fine_ruthenium_trinium_americium_neutronate_wire')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:tritanium 1152', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_sensor')
        .duration(600)
        .EUt(491520)
     
        .stationResearch(b => b
         .researchStack('gtceu:uv_sensor')
         .CWUt(96, 384000)
         .EUt(368640)
        )
        event.recipes.gtceu.assembler('uhv_wireless_energy_rec')
        .itemInputs('gtceu:uhv_sensor','gtceu:uhv_emitter','4x gtceu:ender_pearl_plate','2x #gtceu:circuits/uhv','gtceu:uv_voltage_coil','2x gtceu:uhpic_chip','2x gtceu:ruthenium_trinium_americium_neutronate_single_wire','2x gtceu:red_alloy_single_wire','4x gtceu:darmstadtium_plate',)
        .inputFluids('gtceu:soldering_alloy 1000')
        .itemOutputs('gtmthings:uhv_wireless_energy_receive_cover')
        .duration(200)
        .EUt(1048576)
        event.recipes.gtceu.assembler('uhv_wireless_energy_rec_4a')
        .itemInputs('2x gtmthings:uhv_wireless_energy_receive_cover','32x gtceu:advanced_smd_inductor','2x gtceu:uv_voltage_coil','4x gtceu:ruthenium_trinium_americium_neutronate_quadruple_wire','2x gtceu:double_battery_alloy_plate',)
        .inputFluids('gtceu:soldering_alloy 1000')
        .itemOutputs('gtmthings:uhv_4a_wireless_energy_receive_cover')
        .duration(200)
        .EUt(1048576)
       // Emitters
       event.recipes.gtceu.assembly_line('uhv_emitter')
        .itemInputs('gtceu:neutronium_frame', 'gtceu:uhv_electric_motor', '4x gtceu:long_stabilized_antimatter_rod', '2x gtceu:gravi_star', '#gtceu:circuits/uhv', '64x gtceu:ruthenium_trinium_americium_neutronate_foil', '32x gtceu:ruthenium_trinium_americium_neutronate_foil', '4x gtceu:europium_single_cable', '2x gtceu:fine_ruthenium_trinium_americium_neutronate_wire')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:tritanium 1152', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_emitter')
        .duration(600)
        .EUt(491520)
     
        .stationResearch(b => b
         .researchStack('gtceu:uv_emitter')
         .CWUt(96, 384000)
         .EUt(368640)
        )
     
       // Field Generators
       event.recipes.gtceu.assembly_line('uhv_field_generator')
        .itemInputs('gtceu:neutronium_frame', '6x gtceu:stabilized_antimatter_plate', '2x gtceu:gravi_star', '2x gtceu:uhv_emitter', '2x #gtceu:circuits/uhv', '64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire', '64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire', '4x gtceu:europium_single_cable', '4x gtceu:ruthenium_trinium_americium_neutronate_plate')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:tritanium 1152', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_field_generator')
        .duration(600)
        .EUt(491520)
     
        .stationResearch(b => b
         .researchStack('gtceu:uv_field_generator')
         .CWUt(96, 384000)
         .EUt(368640)
        )
     
       // Conveyors
       event.recipes.gtceu.assembly_line('uhv_conveyor')
        .itemInputs('2x gtceu:uhv_electric_motor', '2x gtceu:stabilized_antimatter_plate', '4x gtceu:stabilized_antimatter_ring', '16x gtceu:stabilized_antimatter_round', '4x gtceu:stabilized_antimatter_screw', '2x gtceu:europium_single_cable', '2x gtceu:ruthenium_trinium_americium_neutronate_plate')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 2000', 'gtceu:styrene_butadiene_rubber 5760', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_conveyor_module')
        .duration(600)
        .EUt(491520)
     
        .stationResearch(b => b
         .researchStack('gtceu:uv_conveyor_module')
         .CWUt(96, 384000)
         .EUt(368640)
        )
     
       // Pumps
       event.recipes.gtceu.assembly_line('uhv_pump')
        .itemInputs('gtceu:uhv_electric_motor', 'gtceu:neutronium_large_fluid_pipe', '2x gtceu:stabilized_antimatter_plate', '8x gtceu:stabilized_antimatter_screw', '16x gtceu:silicone_rubber_ring', '12x gtceu:stabilized_antimatter_ring', 'gtceu:tungsten_steel_rotor', '2x gtceu:europium_single_cable', '2x gtceu:ruthenium_trinium_americium_neutronate_plate')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 2000', 'gtceu:tritanium 1152', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_electric_pump')
        .duration(600)
        .EUt(491520)
     
        .stationResearch(b => b
         .researchStack('gtceu:uv_electric_pump')
         .CWUt(96, 384000)
         .EUt(368640)
        )
     
       // Fluid Regulators
       event.recipes.gtceu.assembler('uhv_fluid_regulator')
        .itemInputs('gtceu:uhv_electric_pump', '2x #gtceu:circuits/uhv', '1x gtceu:ruthenium_trinium_americium_neutronate_plate')
        .circuit(1)
        .itemOutputs('gtceu:uhv_fluid_regulator')
        .duration(50)
        .EUt(1966080)
     })