




ServerEvents.recipes(event => {
  event.remove({ id: 'gtceu:shaped/luv_machine_hull' })
  event.remove({ id: 'gtceu:assembler/hull_luv' })
  event.remove({ id: 'gtceu:assembler/casing_luv' })
  event.remove({ id: 'gtceu:shaped/casing_luv' })
  event.remove({ id: 'gtceu:shaped/casing_assembly_control' })
  event.shaped('2x gtceu:assembly_line_casing', [
    'SDS',
    'DCD',
    'BDB'
  ], {
    S: 'gtceu:hpic_chip',
    C: 'gtceu:tungsten_carbide_frame',
    D: '#gtceu:circuits/zpm',
    B: 'gtceu:iv_electric_motor'
  })
  event.recipes.gtceu.assembly_line('luv_hull_assline')
    .itemInputs(['gtceu:iridium_frame', '16x gtceu:rhodium_plated_palladium_plate', '8x cosmiccore:double_prismatic_tungstensteel_plate', '16x gtceu:osmiridium_screw', '#gtceu:circuits/hv', '2x gtceu:niobium_titanium_quadruple_cable'])
    .itemOutputs('gtceu:luv_machine_hull')
    .inputFluids(
      Fluid.of('cosmiccore:prisma', 576),
      Fluid.of('gtceu:silicone_rubber', 1152),
      Fluid.of('gtceu:styrene_butadiene_rubber', 1152),
      Fluid.of('gtceu:soldering_alloy', 1152),
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:iv_machine_hull')).EUt(GTValues.VA[GTValues.IV]).duration(1000))
    .duration(300)
    .EUt(GTValues.VA[GTValues.LuV])
  event.recipes.gtceu.assembly_line('luv_hull_assline_casing')
    .itemInputs(['gtceu:luv_machine_casing', '8x gtceu:rhodium_plated_palladium_plate', '4x cosmiccore:double_prismatic_tungstensteel_plate', '8x gtceu:osmiridium_screw', '#gtceu:circuits/hv', '2x gtceu:niobium_titanium_quadruple_cable'])
    .itemOutputs('gtceu:luv_machine_hull')
    .inputFluids(
      Fluid.of('cosmiccore:prisma', 576),
      Fluid.of('gtceu:silicone_rubber', 1152),
      Fluid.of('gtceu:styrene_butadiene_rubber', 1152),
      Fluid.of('gtceu:soldering_alloy', 1152),
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:iv_machine_hull')).EUt(GTValues.VA[GTValues.IV]).duration(1000))
    .duration(300)
    .EUt(GTValues.VA[GTValues.LuV])

  //LUV MOTOR
  event.remove({ id: 'gtceu:assembly_line/electric_motor_luv' })
  event.recipes.gtceu.assembly_line('luv_new_motor')
    .itemInputs(['gtceu:long_magnetic_samarium_rod', '4x cosmiccore:long_resonant_virtue_meld_rod', '2x cosmiccore:resonant_virtue_meld_ring', '4x cosmiccore:resonant_virtue_meld_round', '64x gtceu:fine_ruridit_wire', '64x gtceu:fine_ruridit_wire', '64x gtceu:fine_ruridit_wire', '64x gtceu:fine_ruridit_wire', '2x gtceu:niobium_titanium_quadruple_cable'])
    .itemOutputs('gtceu:luv_electric_motor')
    .inputFluids(
      Fluid.of('gtceu:soldering_alloy', 288),
      Fluid.of('gtceu:lubricant', 500)
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:iv_electric_motor')).EUt(GTValues.VA[GTValues.IV]).duration(1000))
    .duration(600)
    .EUt(GTValues.VA[GTValues.IV])

  //LUV PISTON
  event.remove({ id: 'gtceu:assembly_line/electric_piston_luv' })
  event.recipes.gtceu.assembly_line('luv_new_piston')
    .itemInputs(['gtceu:luv_electric_motor', '4x cosmiccore:resonant_virtue_meld_plate', '4x cosmiccore:resonant_virtue_meld_ring', '32x cosmiccore:resonant_virtue_meld_round', '4x cosmiccore:long_resonant_virtue_meld_rod', 'cosmiccore:resonant_virtue_meld_gear', '2x cosmiccore:small_resonant_virtue_meld_gear', '2x gtceu:niobium_titanium_quadruple_cable'])
    .itemOutputs('gtceu:luv_electric_piston')
    .inputFluids(
      Fluid.of('gtceu:soldering_alloy', 288),
      Fluid.of('gtceu:lubricant', 500)
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:iv_electric_piston')).EUt(GTValues.VA[GTValues.IV]).duration(1000))
    .duration(600)
    .EUt(GTValues.VA[GTValues.IV])

  //LUV PUMP
  event.remove({ id: 'gtceu:assembly_line/electric_pump_luv' })
  event.recipes.gtceu.assembly_line('luv_new_pump')
    .itemInputs(['gtceu:luv_electric_motor', 'gtceu:niobium_titanium_normal_fluid_pipe', '4x cosmiccore:resonant_virtue_meld_plate', '8x cosmiccore:resonant_virtue_meld_screw', '4x gtceu:silicone_rubber_ring', 'cosmiccore:resonant_virtue_meld_rotor', '2x gtceu:niobium_titanium_quadruple_cable'])
    .itemOutputs('gtceu:luv_electric_pump')
    .inputFluids(
      Fluid.of('gtceu:soldering_alloy', 288),
      Fluid.of('gtceu:lubricant', 500)
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:iv_electric_pump')).EUt(GTValues.VA[GTValues.IV]).duration(1000))
    .duration(600)
    .EUt(GTValues.VA[GTValues.IV])
  //LUV CONVEYOR
  event.remove({ id: 'gtceu:assembly_line/conveyor_module_luv' })
  event.recipes.gtceu.assembly_line('luv_conveyor_module_new')
    .itemInputs(['2x gtceu:luv_electric_motor', '2x cosmiccore:resonant_virtue_meld_plate', '4x cosmiccore:resonant_virtue_meld_ring', '32x cosmiccore:resonant_virtue_meld_round', '4x cosmiccore:resonant_virtue_meld_screw', '2x gtceu:niobium_titanium_quadruple_cable'])
    .itemOutputs('gtceu:luv_conveyor_module')
    .inputFluids(
      Fluid.of('gtceu:soldering_alloy', 288),
      Fluid.of('gtceu:lubricant', 500),
      Fluid.of('gtceu:styrene_butadiene_rubber', 1152)
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:iv_conveyor_module')).EUt(GTValues.VA[GTValues.IV]).duration(1000))
    .duration(600)
    .EUt(GTValues.VA[GTValues.IV])

  //LUV ROBOT-ARM
  event.remove({ id: 'gtceu:assembly_line/robot_arm_luv' })
  event.recipes.gtceu.assembly_line('robot_arm_luv_new')
    .itemInputs(['4x cosmiccore:long_resonant_virtue_meld_rod', 'cosmiccore:resonant_virtue_meld_gear', 'cosmiccore:small_resonant_virtue_meld_gear', '2x gtceu:luv_electric_motor', 'gtceu:luv_electric_piston', '#gtceu:circuits/luv', '2x #gtceu:circuits/iv', '4x #gtceu:circuits/ev', '4x gtceu:niobium_titanium_quadruple_cable'])
    .itemOutputs('gtceu:luv_robot_arm')
    .inputFluids(
      Fluid.of('gtceu:soldering_alloy', 1152),
      Fluid.of('gtceu:lubricant', 500),
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:iv_robot_arm')).EUt(GTValues.VA[GTValues.IV]).duration(1000))
    .duration(600)
    .EUt(GTValues.VA[GTValues.IV])

  //R.Virtue Coil
  event.recipes.gtceu.assembly_line('resonant_virtue_coil_assem')
    .itemInputs(['2x cosmiccore:prismatic_tungstensteel_frame', '4x gtceu:iv_voltage_coil', '12x cosmiccore:resonant_virtue_meld_double_wire', '8x gtceu:galvanized_ethersteel_screw', '32x gtceu:elementium_foil', '16x cosmiccore:prismatic_tungstensteel_foil', '16x gtceu:terrasteel_foil'])
    .itemOutputs('cosmiccore:resonant_virtue_meld_coil_block')
    .inputFluids(
      Fluid.of('gtceu:high_grade_solder', 288),
      Fluid.of('gtceu:argon', 2000)
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('cosmiccore:prismatic_tungstensteel_coil_block')).EUt(GTValues.VA[GTValues.IV]).duration(1000))
    .duration(600)
    .EUt(GTValues.VA[GTValues.IV])
  //Naquadric Superalloy Coil
  event.recipes.gtceu.assembly_line('nsa_coil_assem')
    .itemInputs(['2x cosmiccore:resonant_virtue_meld_frame', '4x gtceu:luv_voltage_coil', '16x cosmiccore:naquadric_superalloy_double_wire', '16x gtceu:naquadah_alloy_screw', '48x cosmiccore:resonant_virtue_meld_foil', '24x gtceu:naquadah_alloy_foil', '24x gtceu:osmiridium_foil'])
    .itemOutputs('cosmiccore:naquadric_superalloy_coil_block')
    .inputFluids(
      Fluid.of('gtceu:high_grade_solder', 1152),
      Fluid.of('gtceu:argon', 4000),
      Fluid.of('gtceu:uu_matter', 2000)
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('cosmiccore:resonant_virtue_meld_coil_block')).EUt(GTValues.VA[GTValues.LuV]).duration(1000))
    .duration(800)
    .EUt(GTValues.VA[GTValues.LuV])

  //CleanroomMaintHatch
  event.remove({ id: 'gtceu:shaped/maintenance_hatch_cleaning' })
  event.recipes.gtceu.assembly_line('clean_hatch_assemblyline')
    .itemInputs(['64x gtceu:plascrete', '64x gtceu:plascrete', '16x gtceu:filter_casing', '16x gtceu:hssg_spring', '4x gtceu:nano_processor_mainframe', '4x gtceu:luv_robot_arm', 'gtceu:auto_maintenance_hatch', 'gtceu:cleanroom', 'gtceu:luv_diode'])
    .itemOutputs('gtceu:cleaning_maintenance_hatch')
    .inputFluids(
      Fluid.of('gtceu:high_grade_solder', 1440),
      Fluid.of('gtceu:argon', 16000)
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:auto_maintenance_hatch')).EUt(GTValues.VA[GTValues.IV]).duration(1000))
    .duration(600)
    .EUt(GTValues.VA[GTValues.IV])
  //NPR
  event.recipes.gtceu.assembly_line('naquahine_reactor_controller')
    .itemInputs(['4x cosmiccore:fusion_grade_magnet', '4x gtceu:quantum_processor_mainframe', 'gtceu:iv_lapotronic_battery', '16x gtceu:iv_field_generator', '64x gtceu:uhpic_chip', '32x gtceu:indium_tin_barium_titanium_cuprate_single_wire', '16x gtceu:iv_field_generator'])
    .itemOutputs('cosmiccore:naquahine_pressure_reactor')
    .inputFluids(
      Fluid.of('gtceu:high_grade_solder', 2880),
      Fluid.of('gtceu:niobium_titanium', 4608),
      Fluid.of('gtceu:argon', 32000)
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:molten_salt_reactor')).EUt(GTValues.VA[GTValues.IV]).duration(1000))
    .duration(600)
    .EUt(GTValues.VA[GTValues.IV])
  ///ZPM STUFF

  //ZPM MOTOR
  event.remove({ id: 'gtceu:assembly_line/electric_motor_zpm' })
  event.recipes.gtceu.assembly_line('zpm_new_motor')
    .itemInputs(['4x gtceu:long_magnetic_samarium_rod', '4x gtceu:long_neutronite_rod', '4x gtceu:neutronite_ring', '8x gtceu:neutronite_round', '64x cosmiccore:fine_naquadric_superalloy_wire', '64x cosmiccore:fine_naquadric_superalloy_wire', '64x cosmiccore:fine_naquadric_superalloy_wire', '64x cosmiccore:fine_naquadric_superalloy_wire', '64x cosmiccore:fine_naquadric_superalloy_wire', '4x gtceu:vanadium_gallium_quadruple_cable'])
    .itemOutputs('gtceu:zpm_electric_motor')
    .inputFluids(
      Fluid.of('gtceu:high_grade_solder', 576),
      Fluid.of('gtceu:lubricant', 1000)
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:luv_electric_motor')).EUt(GTValues.VA[GTValues.IV]).duration(1000))
    .duration(600)
    .EUt(GTValues.VA[GTValues.LuV])

  event.remove({ id: 'gtceu:assembly_line/electric_piston_zpm' })
  //ZPM PISTON
  event.recipes.gtceu.assembly_line('new_zpm_piston_recipe')
    .itemInputs(['gtceu:zpm_electric_motor', '4x gtceu:neutronite_plate', '6x gtceu:neutronite_ring', '48x gtceu:neutronite_round', '8x gtceu:neutronite_spring', '4x gtceu:long_neutronite_rod', 'gtceu:neutronite_gear', '2x gtceu:small_neutronite_gear', '2x gtceu:vanadium_gallium_quadruple_cable'])
    .itemOutputs('gtceu:zpm_electric_piston')
    .inputFluids(
      Fluid.of('gtceu:high_grade_solder', 576),
      Fluid.of('gtceu:lubricant', 1000)
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:luv_electric_piston')).EUt(GTValues.VA[GTValues.IV]).duration(1000))
    .duration(600)
    .EUt(GTValues.VA[GTValues.LuV])






  // ZPM HULL AND CASING
  event.remove({ id: 'gtceu:assembler/casing_zpm' })
  event.remove({ id: 'gtceu:assembler/hull_zpm' })
  event.remove({ id: 'gtceu:shaped/casing_zpm' })
  event.remove({ id: 'gtceu:shaped/zpm_machine_hull' })
  event.recipes.gtceu.assembly_line('zpm_hull_assline')
    .itemInputs(['cosmiccore:trinavine_frame', '16x cosmiccore:naquadric_superalloy_plate', '8x gtceu:double_neutronite_plate', '16x cosmiccore:trinavine_screw', '#gtceu:circuits/ev', '2x gtceu:vanadium_gallium_quadruple_cable'])
    .itemOutputs('gtceu:zpm_machine_hull')
    .inputFluids(
      Fluid.of('cosmiccore:prisma', 576),
      Fluid.of('gtceu:silicone_rubber', 1152),
      Fluid.of('gtceu:styrene_butadiene_rubber', 1152),
      Fluid.of('gtceu:soldering_alloy', 1152),
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:luv_machine_hull')).EUt(GTValues.VA[GTValues.IV]).duration(1000))
    .duration(300)
    .EUt(GTValues.VA[GTValues.LuV])
  event.recipes.gtceu.assembly_line('zpm_hull_assline_casing')
    .itemInputs(['gtceu:zpm_machine_casing', '8x cosmiccore:naquadric_superalloy_plate', '4x gtceu:double_neutronite_plate', '8x cosmiccore:trinavine_screw', '#gtceu:circuits/ev', '2x gtceu:vanadium_gallium_quadruple_cable'])
    .itemOutputs('gtceu:zpm_machine_hull')
    .inputFluids(
      Fluid.of('cosmiccore:prisma', 576),
      Fluid.of('gtceu:silicone_rubber', 1152),
      Fluid.of('gtceu:styrene_butadiene_rubber', 1152),
      Fluid.of('gtceu:soldering_alloy', 1152),
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('gtceu:luv_machine_hull')).EUt(GTValues.VA[GTValues.IV]).duration(1000))
    .duration(300)
    .EUt(GTValues.VA[GTValues.LuV])




  //Interstellar Hulls

  event.recipes.gtceu.assembly_line('cosmiccore:vomahine_certified_interstellar_grade_casing')
    .itemInputs(['2x cosmiccore:trinavine_frame', '16x gtceu:double_titanium_plate', '32x gtceu:double_aluminium_plate', '32x gtceu:double_aluminium_plate', '64x gtceu:aluminium_screw', '64x gtceu:aluminium_screw', '64x gtceu:aluminium_rod', '64x gtceu:aluminium_rod', '64x gtceu:aluminium_rod'])
    .itemOutputs('cosmiccore:vomahine_certified_interstellar_grade_casing')
    .inputFluids(
      Fluid.of('gtceu:high_grade_solder', 1152),
    )
    .stationResearch(b => b
      .researchStack('gtceu:fusion_casing')
      .CWUt(32)
      .EUt(GTValues.VA[GTValues.ZPM]))
    .duration(1750)
    .EUt(GTValues.VA[GTValues.ZPM])





  ///////


  event.recipes.gtceu.assembly_line('the_meatball')
    .itemInputs(['64x cosmiccore:macroverse_processor_mainframe', '64x cosmiccore:macroverse_processor_mainframe', '64x cosmiccore:macroverse_processor_mainframe', '64x cosmiccore:macroverse_processor_mainframe', '64x cosmiccore:macroverse_processor_mainframe', '64x cosmiccore:macroverse_processor_mainframe', '64x cosmiccore:macroverse_processor_mainframe', '64x cosmiccore:macroverse_processor_mainframe', '64x cosmiccore:macroverse_processor_mainframe', '64x cosmiccore:macroverse_processor_mainframe', '64x cosmiccore:macroverse_processor_mainframe', '64x cosmiccore:macroverse_processor_mainframe', '64x cosmiccore:macroverse_processor_mainframe', '64x cosmiccore:macroverse_processor_mainframe', '64x cosmiccore:macroverse_processor_mainframe', '64x cosmiccore:macroverse_processor_mainframe'])
    .itemOutputs('kubejs:cosmic_meatballs')
    .inputFluids(
      Fluid.of('cosmiccore:prisma', 100000000),
      Fluid.of('gtceu:uu_matter', 100000000),
      Fluid.of('gtceu:neutronium', 100000000),
      Fluid.of('gtceu:virtue_meld', 1),
    )
  ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of('cosmiccore:macroverse_processor_mainframe')).EUt(GTValues.VA[GTValues.IV]).duration(1000))
    .duration(99999999)
    .EUt(GTValues.VA[GTValues.MAX])



})