const $SoulProperty = Java.loadClass('com.ghostipedia.cosmiccore.api.capability.recipe.SoulRecipeCapability')
ServerEvents.recipes(event => {
  // event.remove({ output: Fluid.of(itemName) })
  event.recipes.gtceu.drygmy_grove('grove_zombie')
  .notConsumable('ars_nouveau:drygmy_charm')
  .notConsumable('minecraft:rotten_flesh')
  .itemOutputs('16x minecraft:rotten_flesh')
  .chancedOutput(Item.of('minecraft:iron_ingot', 1), 1000, 500)
  .duration(6000)
  .EUt(GTValues.VA[GTValues.EV]);
event.recipes.gtceu.drygmy_grove('grove_guardian')
  .notConsumable('ars_nouveau:drygmy_charm')
  .notConsumable('oceansdelight:guardian')
  .itemOutputs('32x minecraft:prismarine_shard')
  .chancedOutput(Item.of('minecraft:prismarine_crystals', 8), 4000, 1500)
  .chancedOutput(Item.of('minecraft:cod', 4), 2000, 1000)
  .duration(6000)
  .EUt(GTValues.VA[GTValues.EV]);
// todo enderman
// event.recipes.gtceu.drygmy_grove('grove_enderman')
//   .notConsumable('ars_nouveau:drygmy_charm')
//   .notConsumable('oceansdelight:guardian')
//   .itemOutputs('32x minecraft:prismarine_shard')
//   .chancedOutput(Item.of('minecraft:prismarine_crystals', 8), 4000, 1500)
//   .chancedOutput(Item.of('minecraft:cod', 4), 2000, 1000)
//   .duration(6000)
//   .EUt(GTValues.VA[GTValues.EV]);
event.recipes.gtceu.drygmy_grove('grove_blaze')
  .notConsumable('ars_nouveau:drygmy_charm')
  .notConsumable('create:blaze_cake')
  .itemOutputs('16x minecraft:blaze_rod')
  .chancedOutput(Item.of('gtceu:ash_dust', 8), 4000, 1500)
  .chancedOutput(Item.of('gtceu:sulfur_dust', 2), 2000, 1000)
  .duration(6000)
  .EUt(GTValues.VA[GTValues.EV]);
event.recipes.gtceu.drygmy_grove('grove_skeleton')
  .notConsumable('ars_nouveau:drygmy_charm')
  .notConsumable('minecraft:skeleton_skull')
  .itemOutputs('32x minecraft:bone')
  .chancedOutput(Item.of('minecraft:arrow', 8), 4000, 1500)
  .chancedOutput(Item.of('gtceu:calcium_dust', 2), 2000, 1000)
  .duration(6000)
  .EUt(GTValues.VA[GTValues.EV]);
// event.recipes.gtceu.drygmy_grove('grove_wither_maybe')
//   .notConsumable('ars_nouveau:drygmy_charm')
//   .notConsumable('oceansdelight:guardian')
//   .itemOutputs('32x minecraft:prismarine_shard')
//   .chancedOutput(Item.of('', 8), 4000, 1500)
//   .chancedOutput(Item.of('minecraft:nether_star', 4), 100, 1000)
//   .duration(6000)
//   .EUt(GTValues.VA[GTValues.EV]);

  // event.recipes.gtceu.soul_forge('bm_tester')
  //   .input("soul", 200) // doesn't display 
  //   .notConsumable('ars_nouveau:drygmy_charm')
  //   .itemOutputs('minecraft:sand')
  //   .duration(10)
  //   .EUt(GTValues.VA[GTValues.EV]);
})