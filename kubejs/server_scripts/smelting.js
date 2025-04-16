ServerEvents.recipes(event => {
event.smelting('1x minecraft:oak_log', 'minecraft:charcoal')
    console.log('Hello! The recipe event has fired!')
  })

  ServerEvents.recipes(event => {
    // --- Log to Charcoal Recipes ---
    event.smelting('1x minecraft:charcoal', 'minecraft:oak_log');
    event.smelting('1x minecraft:charcoal', 'minecraft:spruce_log');
    event.smelting('1x minecraft:charcoal', 'minecraft:birch_log');
    event.smelting('1x minecraft:charcoal', 'minecraft:jungle_log');
    event.smelting('1x minecraft:charcoal', 'minecraft:acacia_log');
    event.smelting('1x minecraft:charcoal', 'minecraft:dark_oak_log');
    event.smelting('1x minecraft:charcoal', 'minecraft:mangrove_log');
    event.smelting('1x minecraft:charcoal', 'minecraft:crimson_stem');
    event.smelting('1x minecraft:charcoal', 'minecraft:warped_stem');
  
    // --- Wood (Bark Block) to Charcoal Recipes ---
    event.smelting('1x minecraft:charcoal', 'minecraft:oak_wood');
    event.smelting('1x minecraft:charcoal', 'minecraft:spruce_wood');
    event.smelting('1x minecraft:charcoal', 'minecraft:birch_wood');
    event.smelting('1x minecraft:charcoal', 'minecraft:jungle_wood');
    event.smelting('1x minecraft:charcoal', 'minecraft:acacia_wood');
    event.smelting('1x minecraft:charcoal', 'minecraft:dark_oak_wood');
    event.smelting('1x minecraft:charcoal', 'minecraft:mangrove_wood');
    event.smelting('1x minecraft:charcoal', 'minecraft:crimson_hyphae');
    event.smelting('1x minecraft:charcoal', 'minecraft:warped_hyphae');
  
    console.log('Hello! The recipe event has fired, and charcoal recipes for all vanilla logs and wood types have been added!');
  })