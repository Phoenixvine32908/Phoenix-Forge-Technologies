ServerEvents.recipes((event) => {
  const recipesToRemove = [
    "productivebees:honey_treat",
    "productivebees:honey_treat_from_block",
    "powah:energizing/energized_steel",
    "productivebees:bottler/honey_treat",
    "powah:energizing/blazing_crystal",
    "powah:energizing/niotic_crystal",
    "powah:energizing/spirited_crystal",
    "powah:energizing/nitro_crystal",
    "productivebees:gene_indexer",
    "productivebees:breeding_chamber", 
    "productivebees:incubator",
    "powah:energizing/blazing_crystal_2",
    "hostilenetworks:prediction_matrix",
    "hostilenetworks:framework",
    "gtceu:extruder/extrude_phoenix_enriched_naquad_ingot_to_gear",
    "gtceu:fluid_solidifier/solidify_phoenix_enriched_naquad_gear",
    "gtceu:alloy_smelter/alloy_smelt_phoenix_enriched_naquad_ingot_to_gear",
    "gtceu:shaped/gear_phoenix_enriched_naquad",
    "gtceu:shaped/rotor_phoenix_enriched_naquad",
    "gtceu:fluid_solidifier/solidify_phoenix_enriched_naquad_to_rotor",
    "gtceu:extruder/extrude_phoenix_enriched_naquad_ingot_to_rotor",
    "gtceu:shaped/spring_phoenix_enriched_naquad",
    "gtceu:bender/bend_phoenix_enriched_naquad_long_rod_to_spring",
    "gtceu:bender/bend_phoenix_enriched_naquad_ingot_to_foil",
    "gtceu:shaped/foil_phoenix_enriched_naquad",
    "gtceu:shaped/bolt_saw_phoenix_enriched_naquad",
    "gtceu:extruder/extrude_phoenix_enriched_naquad_ingot_to_bolt",
    "gtceu:cutter/cut_phoenix_enriched_naquad_rod_to_bolt_water",
    "gtceu:cutter/cut_phoenix_enriched_naquad_rod_to_bolt_distilled_water",
    "gtceu:cutter/cut_phoenix_enriched_naquad_rod_to_bolt_lubricant",
    "gtceu:cutter/cut_phoenix_enriched_naquad_long_rod_to_rod_water",
    "gtceu:extruder/extrude_phoenix_enriched_naquad_to_rod",
    "gtceu:lathe/lathe_phoenix_enriched_naquad_to_rod",
    "gtceu:shaped/stick_phoenix_enriched_naquad",
    "gtceu:shaped/plate_phoenix_enriched_naquad", 
    "gtceu:forge_hammer/hammer_phoenix_enriched_naquad_to_plate",
    "gtceu:fluid_solidifier/solidify_phoenix_enriched_naquad_to_plate",
    "gtceu:extruder/extrude_phoenix_enriched_naquad_to_plate", 
    "gtceu:cutter/cut_phoenix_enriched_naquad_block_to_plate_water",
    "gtceu:cutter/cut_phoenix_enriched_naquad_block_to_plate_distilled_water",
    "gtceu:cutter/cut_phoenix_enriched_naquad_block_to_plate_lubricant",
    "gtceu:bender/bend_phoenix_enriched_naquad_to_plate",
    "gtceu:shapeless/fine_wire_phoenix_enriched_naquad",
    "gtceu:wiremill/mill_phoenix_enriched_naquad_wire_to_fine_wire",
    "gtceu:wiremill/mill_phoenix_enriched_naquad_wire_fine",
    "gtceu:shaped/screw_phoenix_enriched_naquad",
    "gtceu:lathe/lathe_phoenix_enriched_naquad_bolt_to_screw",
    "gtceu:shaped/stick_long_stick_phoenix_enriched_naquad",
    "gtceu:forge_hammer/hammer_phoenix_enriched_naquad_rod_to_long_rod",
    "gtceu:extruder/extrude_phoenix_enriched_naquad_ingot_to_long_rod",
    "gtceu:bender/bend_phoenix_enriched_naquad_ingot_to_dense_plate",
    "gtceu:bender/bend_phoenix_enriched_naquad_plate_to_dense_plate",
    "gtceu:shaped/round_phoenix_enriched_naquad",
    "gtceu:shaped/round_from_ingot_phoenix_enriched_naquad",
    "gtceu:lathe/lathe_phoenix_enriched_naquad_nugget_to_round",
    "gtceu:shaped/plate_double_phoenix_enriched_naquad",
    "gtceu:bender/bend_phoenix_enriched_naquad_plate_to_double_plate",
    "gtceu:bender/bend_phoenix_enriched_naquad_ingot_to_double_plate", 
    "gtceu:shaped/phoenix_enriched_naquad_wire_single",
    "gtceu:wiremill/mill_phoenix_enriched_naquad_wire",
    "gtceu:extruder/extrude_phoenix_enriched_naquad_wire",
    "gtceu:wiremill/mill_phoenix_enriched_naquad_wire_2",
    "gtceu:wiremill/mill_phoenix_enriched_naquad_wire_4",
    "gtceu:wiremill/mill_phoenix_enriched_naquad_wire_8",
    "gtceu:wiremill/mill_phoenix_enriched_naquad_wire_16",

    "gtceu:shaped/rotor_phoenix_enriched_tritanium",
    "gtceu:fluid_solidifier/solidify_phoenix_enriched_tritanium_to_rotor",
    "gtceu:extruder/extrude_phoenix_enriched_tritanium_ingot_to_rotor",
    "gtceu:shaped/spring_phoenix_enriched_tritanium",
    "gtceu:bender/bend_phoenix_enriched_tritanium_long_rod_to_spring",
    "gtceu:bender/bend_phoenix_enriched_tritanium_ingot_to_foil",
    "gtceu:shaped/foil_phoenix_enriched_tritanium",
    "gtceu:shaped/bolt_saw_phoenix_enriched_tritanium",
    "gtceu:extruder/extrude_phoenix_enriched_tritanium_ingot_to_bolt",
    "gtceu:cutter/cut_phoenix_enriched_tritanium_rod_to_bolt_water",
    "gtceu:cutter/cut_phoenix_enriched_tritanium_rod_to_bolt_distilled_water",
    "gtceu:cutter/cut_phoenix_enriched_tritanium_rod_to_bolt_lubricant",
    "gtceu:cutter/cut_phoenix_enriched_tritanium_long_rod_to_rod_water",
    "gtceu:extruder/extrude_phoenix_enriched_tritanium_to_rod",
    "gtceu:lathe/lathe_phoenix_enriched_tritanium_to_rod",
    "gtceu:shaped/stick_phoenix_enriched_tritanium",
    "gtceu:shaped/plate_phoenix_enriched_tritanium", 
    "gtceu:forge_hammer/hammer_phoenix_enriched_tritanium_to_plate",
    "gtceu:fluid_solidifier/solidify_phoenix_enriched_tritanium_to_plate",
    "gtceu:extruder/extrude_phoenix_enriched_tritanium_to_plate", 
    "gtceu:cutter/cut_phoenix_enriched_tritanium_block_to_plate_water",
    "gtceu:cutter/cut_phoenix_enriched_tritanium_block_to_plate_distilled_water",
    "gtceu:cutter/cut_phoenix_enriched_tritanium_block_to_plate_lubricant",
    "gtceu:bender/bend_phoenix_enriched_tritanium_to_plate",
    "gtceu:shapeless/fine_wire_phoenix_enriched_tritanium",
    "gtceu:wiremill/mill_phoenix_enriched_tritanium_wire_to_fine_wire",
    "gtceu:wiremill/mill_phoenix_enriched_tritanium_wire_fine",
    "gtceu:shaped/screw_phoenix_enriched_tritanium",
    "gtceu:lathe/lathe_phoenix_enriched_tritanium_bolt_to_screw",
    "gtceu:shaped/stick_long_stick_phoenix_enriched_tritanium",
    "gtceu:forge_hammer/hammer_phoenix_enriched_tritanium_rod_to_long_rod",
    "gtceu:extruder/extrude_phoenix_enriched_tritanium_ingot_to_long_rod",
    "gtceu:bender/bend_phoenix_enriched_tritanium_ingot_to_dense_plate",
    "gtceu:bender/bend_phoenix_enriched_tritanium_plate_to_dense_plate",
    "gtceu:shaped/round_phoenix_enriched_tritanium",
    "gtceu:shaped/round_from_ingot_phoenix_enriched_tritanium",
    "gtceu:lathe/lathe_phoenix_enriched_tritanium_nugget_to_round",
    "gtceu:shaped/plate_double_phoenix_enriched_tritanium",
    "gtceu:bender/bend_phoenix_enriched_tritanium_plate_to_double_plate",
    "gtceu:bender/bend_phoenix_enriched_tritanium_ingot_to_double_plate", 
    "gtceu:shaped/phoenix_enriched_tritanium_wire_single",
    "gtceu:wiremill/mill_phoenix_enriched_tritanium_wire",
    "gtceu:extruder/extrude_phoenix_enriched_tritanium_wire",
    "gtceu:wiremill/mill_phoenix_enriched_tritanium_wire_2",
    "gtceu:wiremill/mill_phoenix_enriched_tritanium_wire_4",
    "gtceu:wiremill/mill_phoenix_enriched_tritanium_wire_8",
    "gtceu:wiremill/mill_phoenix_enriched_tritanium_wire_16",
    "gtceu:extruder/extrude_phoenix_enriched_tritanium_ingot_to_gear",
    "gtceu:fluid_solidifier/solidify_phoenix_enriched_tritanium_gear",
    "gtceu:alloy_smelter/alloy_smelt_phoenix_enriched_tritanium_ingot_to_gear",
    "gtceu:shaped/gear_phoenix_enriched_tritanium",

    "gtceu:shaped/rotor_phoenix_enriched_neutronium",
    "gtceu:fluid_solidifier/solidify_phoenix_enriched_neutronium_to_rotor",
    "gtceu:extruder/extrude_phoenix_enriched_neutronium_ingot_to_rotor",
    "gtceu:shaped/spring_phoenix_enriched_neutronium",
    "gtceu:bender/bend_phoenix_enriched_neutronium_long_rod_to_spring",
    "gtceu:bender/bend_phoenix_enriched_neutronium_ingot_to_foil",
    "gtceu:shaped/foil_phoenix_enriched_neutronium",
    "gtceu:shaped/bolt_saw_phoenix_enriched_neutronium",
    "gtceu:extruder/extrude_phoenix_enriched_neutronium_ingot_to_bolt",
    "gtceu:cutter/cut_phoenix_enriched_neutronium_rod_to_bolt_water",
    "gtceu:cutter/cut_phoenix_enriched_neutronium_rod_to_bolt_distilled_water",
    "gtceu:cutter/cut_phoenix_enriched_neutronium_rod_to_bolt_lubricant",
    "gtceu:cutter/cut_phoenix_enriched_neutronium_long_rod_to_rod_water",
    "gtceu:extruder/extrude_phoenix_enriched_neutronium_to_rod",
    "gtceu:lathe/lathe_phoenix_enriched_neutronium_to_rod",
    "gtceu:shaped/stick_phoenix_enriched_neutronium",
    "gtceu:shaped/plate_phoenix_enriched_neutronium", 
    "gtceu:forge_hammer/hammer_phoenix_enriched_neutronium_to_plate",
    "gtceu:fluid_solidifier/solidify_phoenix_enriched_neutronium_to_plate",
    "gtceu:extruder/extrude_phoenix_enriched_neutronium_to_plate", 
    "gtceu:cutter/cut_phoenix_enriched_neutronium_block_to_plate_water",
    "gtceu:cutter/cut_phoenix_enriched_neutronium_block_to_plate_distilled_water",
    "gtceu:cutter/cut_phoenix_enriched_neutronium_block_to_plate_lubricant",
    "gtceu:bender/bend_phoenix_enriched_neutronium_to_plate",
    "gtceu:shapeless/fine_wire_phoenix_enriched_neutronium",
    "gtceu:wiremill/mill_phoenix_enriched_neutronium_wire_to_fine_wire",
    "gtceu:wiremill/mill_phoenix_enriched_neutronium_wire_fine",
    "gtceu:shaped/screw_phoenix_enriched_neutronium",
    "gtceu:lathe/lathe_phoenix_enriched_neutronium_bolt_to_screw",
    "gtceu:shaped/stick_long_stick_phoenix_enriched_neutronium",
    "gtceu:forge_hammer/hammer_phoenix_enriched_neutronium_rod_to_long_rod",
    "gtceu:extruder/extrude_phoenix_enriched_neutronium_ingot_to_long_rod",
    "gtceu:bender/bend_phoenix_enriched_neutronium_ingot_to_dense_plate",
    "gtceu:bender/bend_phoenix_enriched_neutronium_plate_to_dense_plate",
    "gtceu:shaped/round_phoenix_enriched_neutronium",
    "gtceu:shaped/round_from_ingot_phoenix_enriched_neutronium",
    "gtceu:lathe/lathe_phoenix_enriched_neutronium_nugget_to_round",
    "gtceu:shaped/plate_double_phoenix_enriched_neutronium",
    "gtceu:bender/bend_phoenix_enriched_neutronium_plate_to_double_plate",
    "gtceu:bender/bend_phoenix_enriched_neutronium_ingot_to_double_plate", 
    "gtceu:shaped/phoenix_enriched_neutronium_wire_single",
    "gtceu:wiremill/mill_phoenix_enriched_neutronium_wire",
    "gtceu:extruder/extrude_phoenix_enriched_neutronium_wire",
    "gtceu:wiremill/mill_phoenix_enriched_neutronium_wire_2",
    "gtceu:wiremill/mill_phoenix_enriched_neutronium_wire_4",
    "gtceu:wiremill/mill_phoenix_enriched_neutronium_wire_8",
    "gtceu:wiremill/mill_phoenix_enriched_neutronium_wire_16",
    "gtceu:extruder/extrude_phoenix_enriched_neutronium_ingot_to_gear",
    "gtceu:fluid_solidifier/solidify_phoenix_enriched_neutronium_gear",
    "gtceu:alloy_smelter/alloy_smelt_phoenix_enriched_neutronium_ingot_to_gear",
    "gtceu:shaped/gear_phoenix_enriched_neutronium",

    "gtceu:shaped/rotor_phoenix_enriched_akashic_zeronium",
    "gtceu:fluid_solidifier/solidify_phoenix_enriched_akashic_zeronium_to_rotor",
    "gtceu:extruder/extrude_phoenix_enriched_akashic_zeronium_ingot_to_rotor",
    "gtceu:shaped/spring_phoenix_enriched_akashic_zeronium",
    "gtceu:bender/bend_phoenix_enriched_akashic_zeronium_long_rod_to_spring",
    "gtceu:bender/bend_phoenix_enriched_akashic_zeronium_ingot_to_foil",
    "gtceu:shaped/foil_phoenix_enriched_akashic_zeronium",
    "gtceu:shaped/bolt_saw_phoenix_enriched_akashic_zeronium",
    "gtceu:extruder/extrude_phoenix_enriched_akashic_zeronium_ingot_to_bolt",
    "gtceu:cutter/cut_phoenix_enriched_akashic_zeronium_rod_to_bolt_water",
    "gtceu:cutter/cut_phoenix_enriched_akashic_zeronium_rod_to_bolt_distilled_water",
    "gtceu:cutter/cut_phoenix_enriched_akashic_zeronium_rod_to_bolt_lubricant",
    "gtceu:cutter/cut_phoenix_enriched_akashic_zeronium_long_rod_to_rod_water",
    "gtceu:extruder/extrude_phoenix_enriched_akashic_zeronium_to_rod",
    "gtceu:lathe/lathe_phoenix_enriched_akashic_zeronium_to_rod",
    "gtceu:shaped/stick_phoenix_enriched_akashic_zeronium",
    "gtceu:shaped/plate_phoenix_enriched_akashic_zeronium", 
    "gtceu:forge_hammer/hammer_phoenix_enriched_akashic_zeronium_to_plate",
    "gtceu:fluid_solidifier/solidify_phoenix_enriched_akashic_zeronium_to_plate",
    "gtceu:extruder/extrude_phoenix_enriched_akashic_zeronium_to_plate", 
    "gtceu:cutter/cut_phoenix_enriched_akashic_zeronium_block_to_plate_water",
    "gtceu:cutter/cut_phoenix_enriched_akashic_zeronium_block_to_plate_distilled_water",
    "gtceu:cutter/cut_phoenix_enriched_akashic_zeronium_block_to_plate_lubricant",
    "gtceu:bender/bend_phoenix_enriched_akashic_zeronium_to_plate",
    "gtceu:shapeless/fine_wire_phoenix_enriched_akashic_zeronium",
    "gtceu:wiremill/mill_phoenix_enriched_akashic_zeronium_wire_to_fine_wire",
    "gtceu:wiremill/mill_phoenix_enriched_akashic_zeronium_wire_fine",
    "gtceu:shaped/screw_phoenix_enriched_akashic_zeronium",
    "gtceu:lathe/lathe_phoenix_enriched_akashic_zeronium_bolt_to_screw",
    "gtceu:shaped/stick_long_stick_phoenix_enriched_akashic_zeronium",
    "gtceu:forge_hammer/hammer_phoenix_enriched_akashic_zeronium_rod_to_long_rod",
    "gtceu:extruder/extrude_phoenix_enriched_akashic_zeronium_ingot_to_long_rod",
    "gtceu:bender/bend_phoenix_enriched_akashic_zeronium_ingot_to_dense_plate",
    "gtceu:bender/bend_phoenix_enriched_akashic_zeronium_plate_to_dense_plate",
    "gtceu:shaped/round_phoenix_enriched_akashic_zeronium",
    "gtceu:shaped/round_from_ingot_phoenix_enriched_akashic_zeronium",
    "gtceu:lathe/lathe_phoenix_enriched_akashic_zeronium_nugget_to_round",
    "gtceu:shaped/plate_double_phoenix_enriched_akashic_zeronium",
    "gtceu:bender/bend_phoenix_enriched_akashic_zeronium_plate_to_double_plate",
    "gtceu:bender/bend_phoenix_enriched_akashic_zeronium_ingot_to_double_plate", 
    "gtceu:shaped/phoenix_enriched_akashic_zeronium_wire_single",
    "gtceu:wiremill/mill_phoenix_enriched_akashic_zeronium_wire",
    "gtceu:extruder/extrude_phoenix_enriched_akashic_zeronium_wire",
    "gtceu:wiremill/mill_phoenix_enriched_akashic_zeronium_wire_2",
    "gtceu:wiremill/mill_phoenix_enriched_akashic_zeronium_wire_4",
    "gtceu:wiremill/mill_phoenix_enriched_akashic_zeronium_wire_8",
    "gtceu:wiremill/mill_phoenix_enriched_akashic_zeronium_wire_16",
    "gtceu:extruder/extrude_phoenix_enriched_akashic_zeronium_ingot_to_gear",
    "gtceu:fluid_solidifier/solidify_phoenix_enriched_akashic_zeronium_gear",
    "gtceu:alloy_smelter/alloy_smelt_phoenix_enriched_akashic_zeronium_ingot_to_gear",
    "gtceu:shaped/gear_phoenix_enriched_akashic_zeronium",
    "gtceu:shaped/ring_phoenix_enriched_naquad",
    "gtceu:shaped/ring_phoenix_enriched_tritanium",
    "gtceu:shaped/ring_phoenix_enriched_neutronium",
    "gtceu:shaped/ring_akashic_zeronium",,
    "gtceu:extruder/extrude_phoenix_enriched_naquad_ingot_to_ring",
    "gtceu:extruder/extrude_phoenix_enriched_tritanium_ingot_to_ring",
    "gtceu:extruder/extrude_phoenix_enriched_neutronium_ingot_to_ring",
    "gtceu:extruder/extrude_akashic_zeronium_ingot_to_ring",
    "fluxnetworks:fluxpoint",
    "fluxnetworks:fluxplug",
    "fluxnetworks:fluxcore",
    "fluxnetworks:fluxblock",
    "javd:portal_block"

  ];

  recipesToRemove.forEach(recipeId => {
    event.remove({ id: recipeId });
    // Logging is now handled outside the removal logic if needed.
  });


  event.recipes.gtceu.forming_press('blaze_crystal1')
  .itemInputs('4x minecraft:blaze_powder')
  .itemOutputs('1x powah:crystal_blazing')
  .duration(600)
  .EUt(64);

  event.recipes.gtceu.forming_press('void_portal')
  .itemInputs('2x minectaft:nether_star', )
  .itemOutputs('1x powah:crystal_blazing')
  .duration(600)
  .EUt(64);

event.recipes.gtceu.forming_press('blaze_crystal2')
  .itemInputs('1x minecraft:blaze_rod')
  .itemOutputs('1x powah:crystal_blazing')
  .duration(600)
  .EUt(64);

event.recipes.gtceu.forming_press('blaze_crystal_block')
  .itemInputs('9x minecraft:blaze_rod')
  .itemOutputs('1x powah:blazing_crystal_block')
  .duration(900)
  .EUt(64);

  event.recipes.gtceu.forming_press('energized_steel_block')
  .itemInputs('2x minecraft:gold_block', '2x minecraft:iron_block')
  .itemOutputs('4x powah:energized_steel_block')
  .duration(2800)
  .EUt(16);
    event.recipes.gtceu.forming_press('energy_steel')
    .itemInputs('2x minecraft:iron_ingot', '2x minecraft:gold_ingot')
    .itemOutputs('4x powah:steel_energized')
    .duration(1200)
    .EUt(16);
    event.recipes.gtceu.forming_press('niotic_crystal_block')
    .itemInputs('1x minecraft:diamond_block')
    .itemOutputs('1x powah:niotic_crystal_block')
    .duration(1700)
    .EUt(384);
      event.recipes.gtceu.forming_press('crystal_niotic')
      .itemInputs('1x minecraft:diamond')
      .itemOutputs('1x powah:crystal_niotic')
      .duration(1200)
      .EUt(384);
      event.recipes.gtceu.forming_press('spirited_crystal_block')
      .itemInputs('1x minecraft:emerald_block')
      .itemOutputs('1x powah:spirited_crystal_block')
      .duration(600)
      .EUt(1024);
        event.recipes.gtceu.forming_press('crystal_spirited')
        .itemInputs('1x minecraft:emerald')
        .itemOutputs('1x powah:crystal_spirited')
        .duration(400)
        .EUt(1024);
        event.recipes.gtceu.forming_press('crystal_nitro')
        .itemInputs('2x minecraft:nether_star', '2x minecraft:redstone_block', '1x powah:blazing_crystal_block')
    .itemOutputs('16x powah:crystal_nitro')
    .duration(400)
    .EUt(4096);


    event.recipes.gtceu.forming_press('honeyv1')
    .itemInputs('2x minecraft:honey_block', '2x minecraft:honeycomb', '1x gtceu:small_stainless_steel_dust')
    .itemOutputs('4x productivebees:honey_treat')
    .duration(120)
    .EUt(4096);
    event.recipes.gtceu.forming_press('honeyv2')
    .itemInputs('2x minecraft:honey_block', '2x minecraft:honeycomb', '1x gtceu:small_tungsten_steel_dust')
    .itemOutputs('8x productivebees:honey_treat')
    .duration(120)
    .EUt(4096);
    event.recipes.gtceu.forming_press('honeyv3')
    .itemInputs('2x minecraft:honey_block', '2x minecraft:honeycomb', '1x gtceu:small_rhodium_plated_palladium_dust')
    .itemOutputs('16x productivebees:honey_treat')
    .duration(120)
    .EUt(4096);
    event.recipes.gtceu.forming_press('honeyv4')
    .itemInputs('2x minecraft:honey_block', '2x minecraft:honeycomb', '1x gtceu:small_naquadah_alloy_dust')
    .itemOutputs('32x productivebees:honey_treat')
    .duration(120)
    .EUt(4096);
    event.recipes.gtceu.forming_press('honeyv5')
    .itemInputs('2x minecraft:honey_block', '2x minecraft:honeycomb', '1x gtceu:small_trinium_dust')
    .itemOutputs('64x productivebees:honey_treat')
    .duration(120)
    .EUt(4096);
    event.recipes.gtceu.assembler('incubater')
    .itemInputs('6x minecraft:iron_ingot', '2x minecraft:hay_block', '1x minecraft:daylight_detector', '4x productivebees:honey_treat', '2x #gtceu:circuits/iv')
    .itemOutputs('1x productivebees:incubator')
    .duration(600)
    .EUt(4096);
    event.recipes.gtceu.assembler('breeding_chamber')
    .itemInputs('6x minecraft:iron_ingot', '2x minecraft:rose_bush', '1x productivebees:upgrade_breeding', '8x productivebees:honey_treat', '2x #gtceu:circuits/iv')
    .itemOutputs('1x productivebees:breeding_chamber')
    .duration(600)
    .EUt(4096);
    event.recipes.gtceu.assembler('gene_indexer')
    .itemInputs('6x minecraft:iron_ingot', '2x minecraft:crafting_table', '1x minecraft:comparator', '8x productivebees:honey_treat', '2x #gtceu:circuits/iv')
    .itemOutputs('1x productivebees:gene_indexer')
    .duration(600)
    .EUt(4096);
    event.recipes.gtceu.assembler('hostilenetworks:framework')
    .itemInputs('4x minecraft:clay_ball', '2x minecraft:redstone', '1x minecraft:smooth_stone', '2x #gtceu:circuits/lv')
    .itemOutputs('1x hostilenetworks:blank_data_model')
    .duration(600)
    .EUt(16);
    event.recipes.gtceu.assembler('hostilenetworks:prediction_matrix')
    .itemInputs('4x minecraft:clay_ball', '4x minecraft:iron_ingot', '8x minecraft:glass_pane', '2x minecraft:gold_ingot', '1x #gtceu:circuits/lv')
    .itemOutputs('128x hostilenetworks:prediction_matrix') 
    .duration(600)
    .EUt(16);

  const potentiallyUndefinedTag = undefined; // Example
  if (potentiallyUndefinedTag) {
    event.remove({ id: potentiallyUndefinedTag });
    // Logging is now handled outside the removal logic if needed.
  } else {
    console.log("Warning: Tried to remove an undefined recipeTag!");
  }
});