/**
Void dimension recipes
 */

function formingPressRecipe(event, id, inputs, outputs, dur, power) {
    const rec = event.recipes.gtceu.forming_press(id)
        .duration(dur)
        .EUt(power);
    rec.itemInputs.apply(rec, inputs)
    rec.itemOutputs.apply(rec, outputs)
}

ServerEvents.recipes(event => {

    const formingPressRecipes = [
        ["void_portal", ["2x minecraft:nether_star"], ["1x javd:portal_block"], 600, 64]
    ]

    formingPressRecipes.forEach(([id, inputs, outputs, dur, power]) => {
        formingPressRecipe(event, id, inputs, outputs, dur, power);
    });
})
