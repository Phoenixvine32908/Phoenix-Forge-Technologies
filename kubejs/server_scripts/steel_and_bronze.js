ServerEvents.recipes((event) => {
  // Shapeless recipes - Removed duplicates and ensured unique ingredient combinations
  event.shapeless("gtceu:steel_dust", [
    "1x gtceu:coal_dust",
    "gtceu:iron_dust",
  ]);
  event.shapeless("gtceu:steel_dust", [
    "1x gtceu:coal_dust",
    "gtceu:wrought_iron_dust",
  ]);
  event.shapeless("minecraft:paper", [
    "3x minecraft:sugarcane",
  ]);
  event.shapeless("gtceu:steel_dust", [
    "1x minecraft:coal",
    "gtceu:wrought_iron_dust",
  ]);
  event.shapeless("gtceu:steel_dust", [
    "1x minecraft:coal",
    "gtceu:iron_dust",
  ]);
  event.shapeless("gtceu:glass_tube", [
    "6x minecraft:glass_pane",
  ]);
  event.shapeless("minecraft:crying_obsidian", [
    "1x minecraft:obsidian",
  ]);
  event.shapeless("gtceu:dormant_ember_dust", [
    "#forge:tools/mortar",
    "gtceu:dormant_ember_ingot"
  ]);
  event.shapeless("gtceu:permafrost_dust", [
    "#forge:tools/mortar",
    "gtceu:permafrost_ingot"
  ]);
  event.shapeless("4x gtceu:fiery_bronze_dust", [
    "3x gtceu:copper_dust",
    "1x gtceu:tin_dust",
    "1x gtceu:dormant_ember_dust",
  ]);
  event.shapeless("1x gtceu:programmed_circuit", [
    "#gtceu:circuits",
  ]);
  event.shapeless("4x gtceu:tin_alloy_dust", [
    "3x gtceu:iron_dust",
    "gtceu:tin_dust"
  ]);
  event.shapeless("1x gtceu:red_alloy_dust", [
    "4x minecraft:redstone",
    "1x gtceu:copper_dust"
  ]);
  event.shapeless("2x gtceu:gold_iron_alloy_dust", [
    "1x gtceu:iron_dust",
    "1x gtceu:gold_dust",
  ]);
  event.shapeless("5x gtceu:aurum_steel_dust", [
    "2x gtceu:steel_dust",
    "1x gtceu:gold_dust",
    "2x gtceu:dormant_ember_dust",
    "1x gtceu:magma_dust",
  ]);
  event.shaped("gtceu:wood_plate", [" L ", " S ", " S "], {
    S: "#minecraft:planks",
    L: "#forge:tools/hammers",
  });
  event.shaped("ironfurnaces:iron_furnace", ["SSS", "SLS", "SSS"], {
    S: "gtceu:wrought_iron_ingot",
    L: "minecraft:furnace",
  });
  event.shaped("ironfurnaces:iron_furnace", ["SSS", "GLG", "SSS"], {
    S: "gtceu:wrought_iron_ingot",
    L: "ironfurnaces:copper_furnace",
    G: "minecraft:glass"
  });
  event.shaped("gtceu:large_steam_compressor", ["SPS", "PCP", "SLS"], {
    S: "gtceu:steam_machine_casing",
    L: "gtceu:fiery_bronze_gear",
    P: "gtceu:dense_steel_plate",
    C: "gtceu:hp_steam_compressor"
  });
  event.shaped("gtceu:rubber_plate", [" L ", " S ", " S "], {
    S: "gtceu:sticky_resin",
    L: "#forge:tools/hammers",
  });

  event.shaped("gtceu:lp_steam_liquid_boiler", ["PPP", "PBP", "PWP"], {
    P: "gtceu:fiery_bronze_plate",
    W: "gtceu:bronze_brick_casing",
    B: "minecraft:glass",
  });
  event.shaped("gtceu:lp_steam_solid_boiler", ["PPP", "PTP", "GBG"], {
    P: "gtceu:fiery_bronze_plate",
    B: "minecraft:furnace",
    G: "minecraft:bricks",
    T: "#forge:tools/wrench"
  });
  event.shaped("gtceu:lp_steam_solar_boiler", ["BBB", "PPP", "FWF"], {
    P: "gtceu:silver_plate",
    W: "gtceu:bronze_brick_casing",
    B: "minecraft:glass",
    F: "gtceu:fiery_bronze_small_fluid_pipe",
  });
  event.shaped("gtceu:lp_steam_extractor", ["FFF", "ZWB", "FFF"], {
    W: "gtceu:bronze_brick_casing",
    B: "minecraft:glass",
    F: "gtceu:fiery_bronze_small_fluid_pipe",
    Z: "#forge:pistons"
  });
  event.shaped("gtceu:lp_steam_macerator", ["PFP", "FWF", "FZF"], {
    P: "minecraft:diamond",
    W: "gtceu:bronze_machine_casing",
    F: "gtceu:fiery_bronze_small_fluid_pipe",
    Z: "#forge:pistons"
  });
  event.shaped("gtceu:lp_steam_compressor", ["FFF", "ZWZ", "FFF"], {
    W: "gtceu:bronze_machine_casing",
    F: "gtceu:fiery_bronze_small_fluid_pipe",
    Z: "#forge:pistons"
  });
  event.shaped("gtceu:lp_steam_forge_hammer", ["FZF", "FWF", "FAF"], {
    W: "gtceu:bronze_machine_casing",
    F: "gtceu:fiery_bronze_small_fluid_pipe",
    Z: "#forge:pistons",
    A: "minecraft:anvil",
  });
  event.shaped("gtceu:lp_steam_furnace", ["FFF", "FWF", "FAF"], {
    W: "gtceu:bronze_brick_casing",
    F: "gtceu:fiery_bronze_small_fluid_pipe",
    A: "minecraft:furnace",
  });
  event.shaped("gtceu:lp_steam_alloy_smelter", ["FFF", "AWA", "FFF"], {
    W: "gtceu:bronze_brick_casing",
    F: "gtceu:fiery_bronze_small_fluid_pipe",
    A: "minecraft:furnace",
  });
  event.shaped("gtceu:lp_steam_rock_crusher", ["ZFZ", "FWF", "PFP"], {
    P: "minecraft:diamond",
    W: "gtceu:bronze_machine_casing",
    F: "gtceu:fiery_bronze_small_fluid_pipe",
    Z: "#forge:pistons"
  });
  event.shaped("gtceu:lp_steam_miner", ["PFP", "FWF", "ZFZ"], {
    P: "minecraft:diamond",
    W: "gtceu:bronze_brick_casing",
    F: "gtceu:fiery_bronze_normal_fluid_pipe",
    Z: "gtceu:small_fiery_bronze_gear"
  });
  event.shaped("watercollector:watercollector", ["ZFZ", "PWP", " R "], {
    P: "minecraft:water_bucket",
    W: "#minecraft:logs",
    F: "#minecraft:leaves",
    Z: "minecraft:stick",
    R: "minecraft:iron_ingot"
  });
  event.shaped("2x gtceu:steam_machine_casing", ["PFP", "PZP", "PWP"], {
    P: "gtceu:fiery_bronze_plate",
    W: "#forge:tools/wrenches",
    F: "#forge:tools/hammers",
    Z: "minecraft:bricks"
  });
  event.shaped("2x gtceu:industrial_steam_casing", ["PFP", "PZP", "PWP"], {
    P: "gtceu:fiery_bronze_plate",
    W: "#forge:tools/wrenches",
    F: "#forge:tools/hammers",
    Z: "gtceu:steel_frame"
  });
  event.shaped("2x gtceu:bronze_firebox_casing", ["PRP", "RFR", "PRP"], {
    P: "gtceu:fiery_bronze_plate",
    F: "gtceu:fiery_bronze_frame",
    R: "gtceu:fiery_bronze_rod",

  });
  event.shaped("17x gtceu:tantalite_ore", ["PPP", "PPP", "PPP"], {
    P: "kubejs:phoenix_feather",
  });
  event.shaped("16x gtceu:rubber_sapling", ["   ", "   ", "  P"], {
    P: "kubejs:phoenix_feather",
  });
  event.shaped("17x gtceu:apatite_ore", ["PPP", "PPP", "PP "], {
    P: "kubejs:phoenix_feather",
  });
  event.shaped("64x minecraft:clay_ball", ["P  ", "   ", "   "], {
    P: "kubejs:phoenix_feather",
  });
  event.shaped("gtceu:lv_machine_casing", ["PPP", "PWP", "PPP"], {
    P: "gtceu:aurum_steel_plate",
    W: "#forge:tools/wrenches",
  });
  event.shaped("gtceu:mv_machine_casing", ["PPP", "PWP", "PPP"], {
    P: "gtceu:aluminfrost_plate",
    W: "#forge:tools/wrenches",
  });
  event.shaped("gtceu:hv_machine_casing", ["PPP", "PWP", "PPP"], {
    P: "gtceu:frost_reinforced_stained_steel_plate",
    W: "#forge:tools/wrenches",
  });
  event.shaped("gtceu:iv_machine_casing", ["PPP", "PWP", "PPP"], {
    P: "gtceu:void_touched_tungsten_steel_plate",
    W: "#forge:tools/wrenches",
  });
  event.shaped("gtceu:ev_machine_casing", ["PPP", "PWP", "PPP"], {
    P: "gtceu:source_imbued_titanium_plate",
    W: "#forge:tools/wrenches",
  });
  event.shaped("gtceu:bronze_machine_casing", ["PPP", "PWP", "PPP"], {
    P: "gtceu:fiery_bronze_plate",
    W: "#forge:tools/wrenches",
  });
  event.shaped("gtceu:lv_machine_hull", ["SPS", "WZW", "   "], {
    P: "gtceu:aurum_steel_plate",
    W: "gtceu:tin_single_cable",
    Z: "gtceu:lv_machine_casing",
    S: "gtceu:wrought_iron_plate"
  });
  event.shaped("ad_astra:nasa_workbench", ["APW", "SZS", "WPA"], {
    P: "gtceu:dense_frost_reinforced_stained_steel_plate",
    W: "#gtceu:circuits/ev",
    Z: "gtceu:ev_machine_hull",
    S: "gtceu:aluminfrost_gear",
    A: "gtceu:ev_robot_arm"
  });
    event.shaped("gtceu:iv_machine_hull", ["SPS", "WZW", "   "], {
    P: "gtceu:void_touched_tungsten_steel_plate",
    W: "gtceu:tin_single_cable",
    Z: "gtceu:iv_machine_casing",
    S: "gtceu:polytetrafluoroethylene_plate"
  });

  event.shaped("gtceu:mv_machine_hull", ["SPS", "WZW", "   "], {
    P: "gtceu:aluminfrost_plate",
    W: "gtceu:copper_single_cable",
    Z: "gtceu:mv_machine_casing",
    S: "gtceu:wrought_iron_plate"
  }); 
  event.shaped("gtceu:hv_machine_hull", ["SPS", "WZW", "   "], {
    P: "gtceu:frost_reinforced_stained_steel_plate",
    W: "gtceu:gold_single_cable",
    Z: "gtceu:hv_machine_casing",
    S: "gtceu:polyethylene_plate"
  }); 
  event.shaped("gtceu:ev_machine_hull", ["SPS", "WZW", "   "], {
    P: "gtceu:source_imbued_titanium_plate",
    W: "gtceu:aluminium_single_cable",
    Z: "gtceu:ev_machine_casing",
    S: "gtceu:polyethylene_plate"
  }); 
  event.shaped("gtceu:distillation_tower", ["PWP", "ZSZ", "PWP"], {
    P: "#gtceu:circuits/hv",
    W: "gtceu:stainless_steel_large_fluid_pipe",
    Z: "gtceu:hv_electric_pump",
    S: "gtceu:hv_machine_hull"
  });
  event.shaped("gtceu:pyrolyse_oven", ["APW", "PSP", "AZW"], {
    P: "#gtceu:circuits/lv",
    W: "gtceu:tin_quadruple_wire",
    Z: "gtceu:lv_electric_pump",
    A: "gtceu:lv_electric_piston",
    S: "gtceu:lv_machine_hull"
  });
  event.shaped("gtceu:pyrolyse_oven", ["APW", "PSP", "AZW"], {
    P: "#gtceu:circuits/lv",
    W: "gtceu:tin_quadruple_wire",
    Z: "gtceu:lv_electric_pump",
    A: "gtceu:lv_electric_piston",
    S: "gtceu:lv_machine_hull"
  });
  event.shaped("minecraft:glass_bottle", ["   ", " P ", "P P"], {
    P: "minecraft:glass",
  });
  event.shaped("enderio:energetic_conduit", ["BBB", "EEE", "BBB"], {
    B: "enderio:conduit_binder",
    E: "enderio:energetic_alloy_ingot"
  });
  event.shapeless("gtceu:steel_dust", [
    "1x gtceu:coke_dust",
    "gtceu:iron_dust",
  ]); 
  event.shapeless("gtceu:steel_dust", [
    "1x gtceu:coal_dust",
    "minecraft:iron_ingot",
  ]);
  event.shapeless("gtceu:steel_dust", [
    "1x gtceu:coke_dust",
    "minecraft:iron_ingot",
  ]);
  event.shapeless("gtceu:steel_dust", [
    "1x gtceu:coke",
    "gtceu:iron_dust",
  ]);
  event.shapeless("gtceu:steel_dust", [
    "1x gtceu:coke",
    "gtceu:wrought_iron_dust",
  ]);
  event.shapeless("gtceu:magma_dust", [
    "1x minecraft:magma_block",
    "#forge:tools/hammers",
  ]);
  event.shapeless("gtceu:steel_dust", [
    "1x minecraft:charcoal",
    "gtceu:wrought_iron_dust",
  ]);
  event.shapeless("gtceu:steel_dust", [
    "1x gtceu:charcoal_dust",
    "gtceu:iron_dust",
  ]);
  event.shapeless("gtceu:steel_dust", [
    "1x gtceu:charcoal_dust",
    "minecraft:iron_ingot",
  ]);
  event.shapeless("gtceu:steel_dust", [
    "1x minecraft:charcoal",
    "minecraft:iron_ingot",
  ]);
  event.recipes.gtceu.compressor('rubber_sheet1')
        .itemInputs('1x gtceu:sticky_resin')
        .itemOutputs('1x gtceu:rubber_plate')
        .duration(250)
        .EUt(12)
});



function alloySmelterRecipe(event, id, inputs, outputs, dur, power) {
  const rec = event.recipes.gtceu.alloy_smelter(id)
    .duration(dur)
    .EUt(power);
  rec.itemInputs(inputs); // Use spread syntax to pass inputs as individual arguments
  rec.itemOutputs(outputs); // Use spread syntax for outputs as well (though less likely to be an issue here)
}
function mixerRecipe(event, id, inputs, outputs, dur, power, program) {
  const rec = event.recipes.gtceu.mixer(id)
  .duration(dur)
  .EUt(power)
  .circuit(program);
  rec.itemInputs(inputs); // Use spread syntax to pass inputs as individual arguments
  rec.itemOutputs(outputs); // Use spread syntax for outputs as well (though less likely to be an issue here)
}

ServerEvents.recipes(event => {
  const alloySmelterRecipes = [
    ["steel_ingot_coal_iron_ingot", ["1x minecraft:coal", "1x minecraft:iron_ingot"], ["1x gtceu:steel_ingot"], 200, 7],
    ["steel_ingot_charcoal_iron_ingot", ["1x minecraft:charcoal", "1x minecraft:iron_ingot"], ["1x gtceu:steel_ingot"], 200, 7],
    ["steel_ingot_coal_dust_iron_ingot", ["1x #forge:dusts/coal", "1x minecraft:iron_ingot"], ["1x gtceu:steel_ingot"], 200, 7],
    ["steel_ingot_coal_dust_iron_dust", ["1x #forge:dusts/coal", "1x gtceu:iron_dust"], ["1x gtceu:steel_ingot"], 200, 7],
    ["steel_ingot_coal_dust_wrought_iron_ingot", ["1x #forge:dusts/coal", "1x gtceu:wrought_iron_ingot"], ["1x gtceu:steel_ingot"], 200, 7],
    ["steel_ingot_coal_wrought_iron_ingot", ["1x minecraft:coal", "1x gtceu:wrought_iron_ingot"], ["1x gtceu:steel_ingot"], 200, 7],
    ["steel_ingot_coke_dust_iron_ingot", ["1x gtceu:coke_dust", "1x minecraft:iron_ingot"], ["1x gtceu:steel_ingot"], 200, 7],
    ["steel_ingot_coal_dust_wrought_iron_ingot_gt", ["1x gtceu:coal_dust", "1x gtceu:wrought_iron_ingot"], ["1x gtceu:steel_ingot"], 100, 7],
    ["steel_ingot_coke_iron_ingot", ["1x gtceu:coke_gem", "1x minecraft:iron_ingot"], ["1x gtceu:steel_ingot"], 100, 7],
    ["steel_ingot_charcoal_wrought_iron_ingot", ["1x minecraft:charcoal", "1x gtceu:wrought_iron_ingot"], ["1x gtceu:steel_ingot"], 200, 7],
    ["steel_ingot_charcoal_dust_iron_ingot", ["1x gtceu:charcoal_dust", "1x minecraft:iron_ingot"], ["1x gtceu:steel_ingot"], 200, 7],
    ["steel_ingot_coke_wrought_iron_ingot_gt", ["1x gtceu:coke_gem", "1x gtceu:wrought_iron_ingot"], ["1x gtceu:steel_ingot"], 100, 7],
    ["steel_ingot_charcoal_dust_wrought_iron_ingot_gt", ["1x gtceu:charcoal_dust", "1x gtceu:wrought_iron_ingot"], ["1x gtceu:steel_ingot"], 200, 7],
    ["fiery_bronze1", ["1x gtceu:charcoal_dust", "1x gtceu:wrought_iron_ingot"], ["1x gtceu:fiery_bronze_ingot"], 200, 7],

    ["steel_block1", ["1x minecraft:coal_block", "1x minecraft:iron_block"], ["1x gtceu:steel_block"], 600, 112],
  ];

  alloySmelterRecipes.forEach(([id, inputs, outputs, dur, power]) => {
    alloySmelterRecipe(event, `gtceu:${id}_from_alloy_smelter`, inputs, outputs, dur, power);
  });
  const mixerRecipes = [
    ["fiery_bronze_dust_from_mixer", ["3x gtceu:copper_dust", "1x gtceu:tin_dust", "1x gtceu:dormant_ember_dust"], ["4x gtceu:fiery_bronze_dust"], 300, 7, 4],
    ["aurum_steel_dust_from_mixer", ["2x gtceu:steel_dust", "1x gtceu:gold_dust", "2x gtceu:dormant_ember_dust", "1x gtceu:magma_dust"], ["5x gtceu:aurum_steel_dust"], 300, 7, 2],
    ["unrefined_aluminfrost_dust_from_mixer", ["2x gtceu:aluminium_dust", "1x gtceu:permafrost_dust"], ["4x gtceu:unrefined_aluminfrost_dust"], 300, 32, 3],
    // You can add more mixer recipes here following the same format
    // ["recipe_id", ["input1", "input2", ...], ["output1", "output2", ...], duration, power],
  ];
  
  mixerRecipes.forEach(([id, inputs, outputs, dur, power, program]) => {
    mixerRecipe(event, `gtceu:${id}_from_mixer`, inputs, outputs, dur, power, program);
    
  });
});