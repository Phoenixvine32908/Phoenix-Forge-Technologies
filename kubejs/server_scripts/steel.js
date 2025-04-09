ServerEvents.recipes((event) => {
  // Shapeless recipes - Removed duplicates and ensured unique ingredient combinations
  event.shapeless("gtceu:steel_ingot", [
    "2x gtceu:coal_dust",
    "gtceu:iron_dust",
  ]);
  event.shapeless("gtceu:steel_ingot", [
    "2x gtceu:coal_dust",
    "gtceu:wrought_iron_dust",
  ]);
  event.shapeless("gtceu:steel_ingot", [
    "2x minecraft:coal",
    "gtceu:wrought_iron_dust",
  ]);
  event.shapeless("gtceu:steel_ingot", [
    "2x minecraft:coal",
    "gtceu:iron_dust",
  ]);
  event.shapeless("gtceu:steel_ingot", [
    "1x gtceu:coke_dust",
    "gtceu:iron_dust",
  ]);
  event.shapeless("gtceu:steel_ingot", [
    "2x gtceu:coal_dust",
    "minecraft:iron_ingot",
  ]);
  event.shapeless("gtceu:steel_ingot", [
    "1x gtceu:coke_dust",
    "minecraft:iron_ingot",
  ]);
  event.shapeless("gtceu:steel_ingot", [
    "2x gtceu:coke",
    "gtceu:iron_dust",
  ]);
  event.shapeless("gtceu:steel_ingot", [
    "2x gtceu:coke",
    "gtceu:wrought_iron_dust",
  ]);
  event.shapeless("gtceu:steel_ingot", [
    "2x minecraft:charcoal",
    "gtceu:wrought_iron_dust",
  ]);
  event.shapeless("gtceu:steel_ingot", [
    "2x gtceu:charcoal_dust",
    "gtceu:iron_dust",
  ]);
  event.shapeless("gtceu:steel_ingot", [
    "2x gtceu:charcoal_dust",
    "minecraft:iron_ingot",
  ]);
  event.shapeless("gtceu:steel_ingot", [
    "2x minecraft:charcoal",
    "minecraft:iron_ingot",
  ]);
});

function alloySmelterRecipe(event, id, inputs, outputs, dur, power) {
  const rec = event.recipes.gtceu.alloy_smelter(id)
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

    ["steel_block1", ["2x minecraft:coal_block", "1x minecraft:iron_block"], ["1x gtceu:steel_block"], 600, 112],
  ];

  alloySmelterRecipes.forEach(([id, inputs, outputs, dur, power]) => {
    alloySmelterRecipe(event, `gtceu:${id}_from_alloy_smelter`, inputs, outputs, dur, power);
  });
});