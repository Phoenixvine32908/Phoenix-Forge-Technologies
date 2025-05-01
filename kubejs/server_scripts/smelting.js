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
    event.smelting('1x minecraft:charcoal', 'minecraft:crimson_stem');i
    event.smelting('1x minecraft:charcoal', 'minecraft:warped_stem');
    event.smelting('1x minecraft:charcoal', 'gtceu:rubber_log');
    event.smelting('1x gtceu:gold_iron_alloy_ingot', '1x gtceu:gold_iron_alloy_dust');
    event.smelting('1x minecraft:glass', '1x minecraft:sand');
    event.smelting('1x gtceu:wrought_iron_ingot', '1x minecraft:iron_ingot');
  
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
    event.smelting('1x gtceu:steel_ingot', 'gtceu:steel_dust');
  
    console.log('Hello! The recipe event has fired, and charcoal recipes for all vanilla logs and wood types have been added!');
  })