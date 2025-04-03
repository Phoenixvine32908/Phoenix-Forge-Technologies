function circuitAssemblerRecipe(event, id, inputs, outputs, dur, power) {
    const rec = event.recipes.gtceu.circuit_assembler(id)
    .duration(dur)
    .EUt(power);
    rec.itemInputs.apply(rec, inputs)
    rec.itemOutputs.apply(rec, outputs)
}

ServerEvents.recipes(event => {

    const formingPressRecipes = [
        ["processor_logic2", ["4x minecraft:blaze_powder"], ["1x powah:crystal_blazing"], 600, 64],
    ]

    formingPressRecipes.forEach(([id, inputs, outputs, dur, power]) => {
        formingPressRecipe(event, id, inputs, outputs, dur, power);
    });
})