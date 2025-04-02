function formingPressRecipe(event, id, inputs, outputs, dur, power) {
    const rec = event.recipes.gtceu.forming_press(id)
    .duration(dur)
    .EUt(power);
    rec.itemInputs.apply(rec, inputs)
    rec.itemOutputs.apply(rec, outputs)
}

ServerEvents.recipes(event => {

    const formingPressRecipes = [
        ["blaze_crystal1", ["4x minecraft:blaze_powder"], ["1x powah:crystal_blazing"], 600, 64],
        ["blaze_crystal2", ["1x minecraft:blaze_rod"], ["1x powah:crystal_blazing"], 600, 64],
        ["blaze_crystal_block", ["9x minecraft:blaze_rod"], ["1x powah:blazing_crystal_block"], 900, 64],
        ["energized_steel_block", ["2x minecraft:gold_block", "2x minecraft:iron_block"], ["4x powah:energized_steel_block"], 2800, 16],
        ["energy_steel", ["2x minecraft:iron_ingot", "2x minecraft:gold_ingot"], ["4x powah:steel_energized"], 1200, 16],
        ["niotic_crystal_block", ["1x minecraft:diamond_block"], ["1x powah:niotic_crystal_block"], 1700, 384],
        ["crystal_niotic", ["1x minecraft:diamond"], ["1x powah:crystal_niotic"], 1200, 384],
        ["spirited_crystal_block", ["1x minecraft:emerald_block"], ["1x powah:spirited_crystal_block"], 600, 1024],
        ["crystal_spirited", ["1x minecraft:emerald"], ["1x powah:crystal_spirited"], 400, 1024],
        ["crystal_nitro", ["2x minecraft:nether_star", "2x minecraft:redstone_block", "1x powah:blazing_crystal_block"], ["16x powah:crystal_nitro"], 400, 4096]
    ]

    formingPressRecipes.forEach(([id, inputs, outputs, dur, power]) => {
        formingPressRecipe(event, id, inputs, outputs, dur, power);
    });
})