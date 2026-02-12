ItemEvents.modification(event => {
  event.modify("minecraft:ender_pearl", item => {
    item.maxStackSize = 64;
    item.fireResistant = true;
    item.rarity = "UNCOMMON";
  });

  event.modify("minecraft:sugar_cane", item => {
    item.burnTime = 300;
  });

  event.modify("gtceu:honey_ingot", item => {
    item.foodProperties = food => {
      food.hunger(2);
      food.saturation(50);
    };
  });

  event.modify("productivebees:honey_treat", item => {
    item.foodProperties = food => {
      food.hunger(4);
      food.saturation(200);
      food.fastToEat();
    };
  });
});
