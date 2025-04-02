
function assemblerRecipe(event, id, inputs, outputs, dur, power) {
  const rec = event.recipes.gtceu.assembler(id)
  .duration(dur)
  .EUt(power);
  rec.itemInputs.apply(rec, inputs)
  rec.itemOutputs.apply(rec, outputs)
}

ServerEvents.recipes(event => {
    
    const assemblerRecipes = [
        ["hostilenetworks:framework", ["4x minecraft:clay_ball", "2x minecraft:redstone", "1x minecraft:smooth_stone", "2x #gtceu:circuits/lv"], ["1x hostilenetworks:blank_data_model"], 600, 16],
        ["hostilenetworks:prediction_matrix", ["4x minecraft:clay_ball", "4x minecraft:iron_ingot", "8x minecraft:glass_pane", "2x minecraft:gold_ingot", "1x #gtceu:circuits/lv"], ["128x hostilenetworks:prediction_matrix"], 600, 16]
    ]

    assemblerRecipes.forEach(([id, inputs, outputs, dur, power]) => {
        assemblerRecipe(event, id, inputs, outputs, dur, power);
      });
})