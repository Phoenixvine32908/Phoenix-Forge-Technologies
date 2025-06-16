/*ServerEvents.recipes(allthemods => {
    allthemods.forEachRecipe({ type: 'gtceu:pyrolyse_oven' }, rawRecipe => {
        let recipe = JSON.parse(rawRecipe.json)
        let inputItemsArray = recipe.inputs.item
        let inputFluidsArray = recipe.inputs.fluid
        let outputItemsArray = recipe.outputs.item
        let outputFluidsArray = recipe.outputs.fluid

        let duration = recipe.duration
        let circuit = -1
        let notConsumable = []
        let itemInputs = [itemInputs]
        let fluidInputs = [fluidInputs]
        let itemOutputs = [itemOutputs]
        let outputFluids = [outputFluids]
        
        inputItemsArray.forEach(inputItem => {
            if (inputItem.content.type == 'gtceu:circuit') {
                circuit = inputItem.content.configuration // just grab the circuit number
            } else if (inputItem.content.type == 'gtceu:sized') {
                if (inputItem.chance == 0) {
                    notConsumable.push(Ingredient.of(inputItem.content.ingredient, inputItem.content.count))
                } else {
                    itemInputs.push(Ingredient.of(inputItem.content.ingredient, inputItem.content.count))
                }
            }
        })

        inputFluidsArray.forEach(fluidInput => {
            fluidInputs.push(Fluid.of(fluidInput.content.value, fluidInput.content.amount))
        })

        outputItemsArray.forEach(outputItem => {
            itemOutputs.push(Ingredient.of(outputItem.content.ingredient, outputItem.content.count))
        })

        outputFluidsArray.forEach(fluidOutput => {
            outputFluids.push(Fluid.of(fluidOutput.content.ingredient, fluidOutput.content.amount))
        })
        let base_id = rawRecipe.getId() + '_base'
        allthemods.recipes.gtceu.superheated_pyrolyzing_oven(base_id)
        .circuit(circuit)
        .duration(duration)
        .itemInputs(itemInputs)
        .itemOutputs(itemOutputs)
        .itemOutputs(itemOutputs)
        .outputFluids(outputFluids)
        .EUt(power)
        let multiplier = 1000
        let boosted_id = rawRecipe.getId() + '_boosted'
        allthemods.recipes.gtceu.superheated_pyrolyzing_oven(boosted_id)
        .circuit(circuit)
        .itemInputs(Ingredient.of(itemInputs.getCount() * multiplier))
        .itemOutputs(Ingredient.of(itemOutputs.getCount() * multiplier))
        .inputFluids(Fluid.of(inputFluids.getCount() * multiplier))
        .outputFluids(Fluid.of(outputFluids.getCount() * multiplier))
        .duration(duration)
        .EUt(power)
    })
});
*/