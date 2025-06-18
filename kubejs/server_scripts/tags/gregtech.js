ServerEvents.tags("item", (event) => {
  event.add("forge:rods/long/hsla", "kubejs:hsla_steel_long_rod");
  event.add("forge:springs/hsla", "kubejs:hsla_steel_spring");
  event.add('forge:crops', [
    'minecraft:crimson_fungus',
    'minecraft:warped_fungus',
    'minecraft:seagrass',
    'minecraft:kelp',
    'minecraft:bamboo',
    'minecraft:cactus',
    'minecraft:vine',
    'minecraft:glow_lichen',
    'minecraft:lily_pad',
    'minecraft:sweet_berries',
    'minecraft:twisting_vines',
    'minecraft:weeping_vines'
  ]);
});
