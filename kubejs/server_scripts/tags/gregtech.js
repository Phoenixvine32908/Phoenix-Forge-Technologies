/**
GT related tags
 */

ServerEvents.tags("item", (event) => {
    event.add("forge:rods/long/hsla", "kubejs:hsla_steel_long_rod");
    event.add("forge:springs/hsla", "kubejs:hsla_steel_spring");
    event.add("forge:crops", [
        "minecraft:crimson_fungus",
        "minecraft:warped_fungus",
        "minecraft:seagrass",
        "minecraft:kelp",
        "minecraft:bamboo",
        "minecraft:cactus",
        "minecraft:vine",
        "minecraft:glow_lichen",
        "minecraft:lily_pad",
        "minecraft:sweet_berries",
        "minecraft:twisting_vines",
        "minecraft:weeping_vines"
    ]);
    event.add("gtceu:purified_platline_ores", ["gtceu:purified_chalcopyrite_ore", "gtceu:purified_cooperite_ore", "gtceu:purified_pentlandite_ore", "gtceu:purified_bornite_ore", "gtceu:purified_chalcocite_ore", "gtceu:purified_tetrahedrite_ore"]);
    event.add("purified_indium_ores", ["gtceu:purified_sphalerite_ore", "gtceu:purified_galena_ore"]);
});
