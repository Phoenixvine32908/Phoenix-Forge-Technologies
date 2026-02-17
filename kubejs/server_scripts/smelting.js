/**
Smelting recipes
 */


ServerEvents.recipes(event => {
    // --- Log to Charcoal Recipes ---
    event.smelting("1x minecraft:charcoal", "minecraft:oak_log");
    event.smelting("1x minecraft:charcoal", "minecraft:spruce_log");
    event.smelting("1x minecraft:charcoal", "minecraft:birch_log");
    event.smelting("1x minecraft:charcoal", "minecraft:jungle_log");
    event.smelting("1x minecraft:charcoal", "minecraft:acacia_log");
    event.smelting("1x minecraft:charcoal", "minecraft:dark_oak_log");
    event.smelting("1x minecraft:charcoal", "minecraft:mangrove_log");
    event.smelting("1x minecraft:charcoal", "minecraft:crimson_stem");
    event.smelting("1x minecraft:charcoal", "minecraft:warped_stem");
    event.smelting("1x minecraft:charcoal", "gtceu:rubber_log");
    event.smelting("1x minecraft:glass", "1x minecraft:sand");
    event.smelting("1x gtceu:wrought_iron_ingot", "1x minecraft:iron_ingot");
    event.smelting("1x phoenixcore:dormant_ember_dust", "1x phoenixcore:raw_dormant_ember")
    event.smelting("1x phoenixcore:dormant_ember_dust", "1x phoenixcore:deepslate_dormant_ember_ore")
    event.smelting("1x phoenixcore:dormant_ember_dust", "1x phoenixcore:dormant_ember_ore")
    event.smelting("1x phoenixcore:permafrost_dust", "1x phoenixcore:raw_permafrost")
    event.smelting("1x phoenixcore:permafrost_dust", "1x phoenixcore:permafrost_ore")
    event.smelting("1x phoenixcore:permafrost_dust", "1x phoenixcore:deepslate_permafrost_ore")


    // --- Wood (Bark Block) to Charcoal Recipes ---
    event.smelting("1x minecraft:charcoal", "minecraft:oak_wood");
    event.smelting("1x minecraft:charcoal", "minecraft:spruce_wood");
    event.smelting("1x minecraft:charcoal", "minecraft:birch_wood");
    event.smelting("1x minecraft:charcoal", "minecraft:jungle_wood");
    event.smelting("1x minecraft:charcoal", "minecraft:acacia_wood");
    event.smelting("1x minecraft:charcoal", "minecraft:dark_oak_wood");
    event.smelting("1x minecraft:charcoal", "minecraft:mangrove_wood");
    event.smelting("1x minecraft:charcoal", "minecraft:crimson_hyphae");
    event.smelting("1x minecraft:charcoal", "forbidden_arcanus:aurum_log");
    event.smelting("1x minecraft:charcoal", "minecraft:warped_hyphae");
    event.smelting("1x minecraft:charcoal", "ars_nouveau:blue_archwood_log");
    event.smelting("1x minecraft:charcoal", "ars_nouveau:red_archwood_log");
    event.smelting("1x minecraft:charcoal", "ars_nouveau:purple_archwood_log");
    event.smelting("1x minecraft:charcoal", "ars_nouveau:green_archwood_log");
    event.smelting("1x gtceu:steel_ingot", "gtceu:steel_dust");

    console.log("Hello! The recipe event has fired, and charcoal recipes for all vanilla logs and wood types have been added!");
})
