function formingPressRecipe(event, id, inputs, outputs, dur, power) {
  const rec = event.recipes.gtceu.forming_press(id)
  .duration(dur)
  .EUt(power);
  rec.itemInputs.apply(rec, inputs)
  rec.itemOutputs.apply(rec, outputs)
}

function assemblerRecipe(event, id, inputs, outputs, dur, power) {
  const rec = event.recipes.gtceu.assembler(id)
  .duration(dur)
  .EUt(power);
  rec.itemInputs.apply(rec, inputs)
  rec.itemOutputs.apply(rec, outputs)
}

ServerEvents.recipes(event => {
  const formingPressRecipes = [
    ["honeyv1", ["2x minecraft:honey_block", "2x minecraft:honeycomb", "1x gtceu:small_stainless_steel_dust"], ["4x productivebees:honey_treat"], 120, 4096],
    ["honeyv2", ["2x minecraft:honey_block", "2x minecraft:honeycomb", "1x gtceu:small_tungsten_steel_dust"], ["8x productivebees:honey_treat"], 120, 4096],
    ["honeyv3", ["2x minecraft:honey_block", "2x minecraft:honeycomb", "1x gtceu:small_rhodium_plated_palladium_dust"], ["16x productivebees:honey_treat"], 120, 4096],
    ["honeyv4", ["2x minecraft:honey_block", "2x minecraft:honeycomb", "1x gtceu:small_naquadah_alloy_dust"], ["32x productivebees:honey_treat"], 120, 4096],
    ["honeyv5", ["2x minecraft:honey_block", "2x minecraft:honeycomb", "1x gtceu:small_trinium_dust"], ["64x productivebees:honey_treat"], 120, 4096]
  ];

  formingPressRecipes.forEach(([id, inputs, outputs, dur, power]) => {
    formingPressRecipe(event, id, inputs, outputs, dur, power);
  });

  const assemblerRecipes = [
    ["incubater", ["6x minecraft:iron_ingot", "2x minecraft:hay_block", "1x minecraft:daylight_detector", "4x productivebees:honey_treat", "2x #gtceu:circuits/iv"], ["1x productivebees:incubator"], 600, 4096],
    ["breeding_chamber", ["6x minecraft:iron_ingot", "2x minecraft:rose_bush", "1x productivebees:upgrade_breeding", "8x productivebees:honey_treat", "2x #gtceu:circuits/iv"], ["1x productivebees:breeding_chamber"], 600, 4096],
    ["gene_indexer", ["6x minecraft:iron_ingot", "2x minecraft:crafting_table", "1x minecraft:comparator", "8x productivebees:honey_treat", "2x #gtceu:circuits/iv"], ["1x productivebees:gene_indexer"], 600, 4096],
];

  assemblerRecipes.forEach(([id, inputs, outputs, dur, power]) => {
    assemblerRecipe(event, id, inputs, outputs, dur, power);
  });
});
