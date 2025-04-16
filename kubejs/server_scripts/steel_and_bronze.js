ServerEvents.recipes((event) => {
  // Shapeless recipes - Removed duplicates and ensured unique ingredient combinations
  event.shapeless("gtceu:steel_dust", [
    "2x gtceu:coal_dust",
    "gtceu:iron_dust",
  ]);
  event.shapeless("gtceu:steel_dust", [
    "2x gtceu:coal_dust",
    "gtceu:wrought_iron_dust",
  ]);
  event.shapeless("gtceu:steel_dust", [
    "2x minecraft:coal",
    "gtceu:wrought_iron_dust",
  ]);
  event.shapeless("gtceu:steel_dust", [
    "2x minecraft:coal",
    "gtceu:iron_dust",
  ]);
  event.shapeless("4x gtceu:fiery_bronze_dust", [
    "3x gtceu:copper_dust",
    "1x gtceu:tin_dust",
    "1x gtceu:dormant_ember_dust",
  ]);
  event.shapeless("5x gtceu:aurum_steel_dust", [
    "2x gtceu:steel_dust",
    "1x gtceu:gold_dust",
    "2x gtceu:dormant_ember_dust",
    "1x gtceu:magma_dust",
  ]);
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
  event.shaped("gtceu:steam_machine_casing", ["PFP", "PZP", "PWP"], {
    P: "gtceu:fiery_bronze_plate",
    W: "#forge:tools/wrenches",
    F: "#forge:tools/hammers",
    Z: "minecraft:bricks"
  });
  event.shaped("gtceu:bronze_firebox_casing", ["PRP", "RFR", "PRP"], {
    P: "gtceu:fiery_bronze_plate",
    F: "gtceu:fiery_bronze_frame",
    R: "gtceu:fiery_bronze_rod",

  });
  event.shaped("gtceu:lv_machine_casing", ["PPP", "PWP", "PPP"], {
    P: "gtceu:aurum_steel_plate",
    W: "#forge:tools/wrenches",
  });
  event.shaped("gtceu:bronze_machine_casing", ["PPP", "PWP", "PPP"], {
    P: "gtceu:fiery_bronze_plate",
    W: "#forge:tools/wrenches",
  });
  event.shaped("gtceu:lv_machine_hull", ["PPP", "WZW", "   "], {
    P: "gtceu:aurum_steel_plate",
    W: "gtceu:tin_single_cable",
    Z: "gtceu:lv_machine_casing"
  });
  event.shapeless("gtceu:steel_dust", [
    "1x gtceu:coke_dust",
    "gtceu:iron_dust",
  ]); 
  event.shapeless("gtceu:steel_dust", [
    "2x gtceu:coal_dust",
    "minecraft:iron_ingot",
  ]);
  event.shapeless("gtceu:steel_dust", [
    "1x gtceu:coke_dust",
    "minecraft:iron_ingot",
  ]);
  event.shapeless("gtceu:steel_dust", [
    "2x gtceu:coke",
    "gtceu:iron_dust",
  ]);
  event.shapeless("gtceu:steel_dust", [
    "2x gtceu:coke",
    "gtceu:wrought_iron_dust",
  ]);
  event.shapeless("gtceu:magma_dust", [
    "1x minecraft:magma_block",
    "#forge:tools/hammers",
  ]);
  event.shapeless("gtceu:steel_dust", [
    "2x minecraft:charcoal",
    "gtceu:wrought_iron_dust",
  ]);
  event.shapeless("gtceu:steel_dust", [
    "2x gtceu:charcoal_dust",
    "gtceu:iron_dust",
  ]);
  event.shapeless("gtceu:steel_dust", [
    "2x gtceu:charcoal_dust",
    "minecraft:iron_ingot",
  ]);
  event.shapeless("gtceu:steel_dust", [
    "2x minecraft:charcoal",
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
function mixerRecipe(event, id, inputs, outputs, dur, power) {
  const rec = event.recipes.gtceu.mixer(id)
    .duration(dur)
    .EUt(power);
  rec.itemInputs(inputs); // Use spread syntax to pass inputs as individual arguments
  rec.itemOutputs(outputs); // Use spread syntax for outputs as well (though less likely to be an issue here)
}

ServerEvents.recipes(event => {
  const alloySmelterRecipes = [
    ["steel_ingot_coal_iron_ingot", ["2x minecraft:coal", "1x minecraft:iron_ingot"], ["1x gtceu:steel_ingot"], 200, 7],
    ["steel_ingot_coal_dust_iron_ingot", ["2x #forge:dusts/coal", "1x minecraft:iron_ingot"], ["1x gtceu:steel_ingot"], 200, 7],
    ["steel_ingot_coal_dust_iron_dust", ["2x #forge:dusts/coal", "1x gtceu:iron_dust"], ["1x gtceu:steel_ingot"], 200, 7],
    ["steel_ingot_coal_dust_wrought_iron_ingot", ["2x #forge:dusts/coal", "1x gtceu:wrought_iron_ingot"], ["1x gtceu:steel_ingot"], 200, 7],
    ["steel_ingot_coal_wrought_iron_ingot", ["2x minecraft:coal", "1x gtceu:wrought_iron_ingot"], ["1x gtceu:steel_ingot"], 200, 7],
    ["steel_ingot_coke_dust_iron_ingot", ["1x gtceu:coke_dust", "1x minecraft:iron_ingot"], ["1x gtceu:steel_ingot"], 200, 7],
    ["steel_ingot_coal_dust_wrought_iron_ingot_gt", ["2x gtceu:coal_dust", "1x gtceu:wrought_iron_ingot"], ["1x gtceu:steel_ingot"], 100, 7],
    ["steel_ingot_coke_iron_ingot", ["2x gtceu:coke_gem", "1x minecraft:iron_ingot"], ["1x gtceu:steel_ingot"], 100, 7],
    ["steel_ingot_charcoal_wrought_iron_ingot", ["2x minecraft:charcoal", "1x gtceu:wrought_iron_ingot"], ["1x gtceu:steel_ingot"], 200, 7],
    ["steel_ingot_charcoal_dust_iron_ingot", ["2x gtceu:charcoal_dust", "1x minecraft:iron_ingot"], ["1x gtceu:steel_ingot"], 200, 7],
    ["steel_ingot_coke_wrought_iron_ingot_gt", ["2x gtceu:coke_gem", "1x gtceu:wrought_iron_ingot"], ["1x gtceu:steel_ingot"], 100, 7],
    ["steel_ingot_charcoal_dust_wrought_iron_ingot_gt", ["2x gtceu:charcoal_dust", "1x gtceu:wrought_iron_ingot"], ["1x gtceu:steel_ingot"], 200, 7],
    ["fiery_bronze1", ["2x gtceu:charcoal_dust", "1x gtceu:wrought_iron_ingot"], ["1x gtceu:fiery_bronze_ingot"], 200, 7],

    ["steel_block1", ["2x minecraft:coal_block", "1x minecraft:iron_block"], ["1x gtceu:steel_block"], 600, 112],
  ];

  alloySmelterRecipes.forEach(([id, inputs, outputs, dur, power]) => {
    alloySmelterRecipe(event, `gtceu:${id}_from_alloy_smelter`, inputs, outputs, dur, power);
  });
  const mixerRecipes = [
    ["fiery_bronze_dust_from_mixer", ["3x gtceu:copper_dust", "1x gtceu:tin_dust", "1x gtceu:dormant_ember_dust"], ["4x gtceu:fiery_bronze_dust"], 300, 7],
    ["aurum_steel_dust_from_mixer", ["2x gtceu:steel_dust", "1x gtceu:gold_dust", "2x gtceu:dormant_ember_dust", "1x gtceu:magma_dust"], ["5x gtceu:aurum_steel_dust"], 300, 7],
    // You can add more mixer recipes here following the same format
    // ["recipe_id", ["input1", "input2", ...], ["output1", "output2", ...], duration, power],
  ];
  
  mixerRecipes.forEach(([id, inputs, outputs, dur, power]) => {
    mixerRecipe(event, `gtceu:${id}_from_mixer`, inputs, outputs, dur, power);
    
  });
});