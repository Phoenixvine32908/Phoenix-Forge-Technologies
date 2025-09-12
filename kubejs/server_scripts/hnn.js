/**
Hnn recipes
 */

function assemblerRecipe(event, id, inputs, outputs, dur, power) {
    const rec = event.recipes.gtceu.assembler(id)
        .duration(dur)
        .EUt(power);
    rec.itemInputs.apply(rec, inputs)
    rec.itemOutputs.apply(rec, outputs)
}

ServerEvents.recipes(event => {

    event.recipes.gtceu.electrolyzer("gt_quartz")
        .itemInputs("4x minecraft:glass")
        .itemOutputs("minecraft:quartz")
        .duration(100)
        .EUt(20)
    const assemblerRecipes = [
        ["hostilenetworks:framework", ["4x minecraft:clay_ball", "2x minecraft:redstone", "1x minecraft:smooth_stone", "2x #gtceu:circuits/lv"], ["1x hostilenetworks:blank_data_model"], 600, 16],
    ]

    assemblerRecipes.forEach(([id, inputs, outputs, dur, power]) => {
        assemblerRecipe(event, id, inputs, outputs, dur, power);
    });
})
ItemEvents.rightClicked(event => {
    if (event.item.id === "hostilenetworks:overworld_prediction") {
        event.player.addXP(10)
        event.item.count--
    }
    if (event.item.id === "hostilenetworks:nether_prediction") {
        event.player.addXP(20)
        event.item.count--
    }
    if (event.item.id === "hostilenetworks:end_prediction") {
        event.player.addXP(25)
        event.item.count--
    }
})
