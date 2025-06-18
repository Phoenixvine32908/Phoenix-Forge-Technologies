ServerEvents.recipes(allthemods => {
    allthemods.forEachRecipe({ type: 'gtceu:pyrolyse_oven' }, rawRecipe => {
        // get variables from raw recipe
        let recipe = JSON.parse(rawRecipe.json)
        let inputItemsArray = recipe.inputs.item
        let inputFluidsArray = recipe.inputs.fluid
        let outputItemsArray = recipe.outputs.item
        let outputFluidsArray = recipe.outputs.fluid
        let duration = recipe.duration
        // added power variable because I forgot to mention it before
        let power = parseInt(recipe.tickInputs.eu[0].content)
        let baseId = rawRecipe.getId() + '_base'
        let boostedId = rawRecipe.getId() + '_boosted'

    
        // made the recipe builders into separate variables so we can split up recipe building across multiple lines
        let baseRecipe = allthemods.recipes.gtceu.superheated_pyrolyzing_oven(baseId)
        let boostedRecipe = allthemods.recipes.gtceu.superheated_pyrolyzing_oven(boostedId)

        let multiplier = 1000
        let circuit = -1
        let notConsumable = []
        let itemInputs = []
        let inputFluids = []
        let itemOutputs = []
        let outputFluids = []

           // take our JSON recipe input items and determine if they are circuits or items, consumed or not consumed
        // then add them to our itemInputs array as Ingredient objects
        inputItemsArray.forEach(inputItem => {
            // check if it is a circuit
            if (inputItem.content.type == 'gtceu:circuit') {
                circuit = inputItem.content.configuration // if it is, just grab the circuit number
            } else if (inputItem.content.type == 'gtceu:sized') {
                // check if the chance on consuming this input is 10000
                if (inputItem.chance == 10000) {
                    itemInputs.push(Ingredient.of(inputItem.content.ingredient, inputItem.content.count))
                } else { // otherwise log it
                    console.log("Oops, chance was not 10000 for " + JSON.stringify(inputItem.content.ingredient))
                }
            } else { // we did not account for this type of ingredient...
                console.log("Ingredient type " + inputItem.content.type + " not accounted for, please report this")
            }
        })

        // take our JSON recipe input fluids and add them into an array of Fluid objects
        // TODO: advanced - handle chanced fluid inputs
        // TODO: are there any input fluids in this recipe? 
        //       add an if loop to check
        inputFluidsArray.forEach(fluidInput => {
            inputFluids.push(Fluid.of(fluidInput.content.value, fluidInput.content.amount))
        })

        // take our JSON recipe output items and add them into an array of Ingredient objects
        // TODO: advanced - handle chanced item outputs
        outputItemsArray.forEach(outputItem => {
            itemOutputs.push(Ingredient.of(outputItem.content.ingredient, outputItem.content.count))
        })

        // take our JSON recipe output fluids and add them into an array of Fluid objects
        // TODO: advanced - handle chanced fluid outputs
        // TODO: are there any output fluids in this recipe? 
        //       add an if loop to check
        outputFluidsArray.forEach(fluidOutput => {
            outputFluids.push(Fluid.of(fluidOutput.content.ingredient, fluidOutput.content.amount))
        })

        baseRecipe.duration(duration)
        baseRecipe.EUt(power)

        if (circuit != -1) {
            baseRecipe.circuit(circuit)
            boostedRecipe.circuit(circuit)
        }
 if (itemInputs.length > 0) {
    baseRecipe.itemInputs(itemInputs)
}

// Add fluid inputs if present
if (inputFluids.length > 0) {
    baseRecipe.inputFluids(inputFluids)
}

// Add item outputs if present
if (itemOutputs.length > 0) {
    baseRecipe.itemOutputs(itemOutputs)
}

// Add fluid outputs if present
if (outputFluids.length > 0) {
    baseRecipe.outputFluids(outputFluids)
}
        
        // TODO: are there any Ingredient objects in our itemOutputs array?
        //       if present, add them to the baseRecipe

        // TODO: are there any Fluid objects in our outputFluids array?
        //       if present, add them to the baseRecipe
 allthemods.recipes.gtceu.superheated_pyrolyzing_oven(baseId)
            .circuit(circuit)
            .duration(duration)
            .itemInputs(itemInputs)
            .inputFluids(inputFluids)
            .itemOutputs(itemOutputs)
            .outputFluids(outputFluids)
            .EUt(power)

        allthemods.recipes.gtceu.superheated_pyrolyzing_oven(boostedId)
            .circuit(circuit)
            .itemInputs(Ingredient.of(itemInputs, itemInputs.getCount() * multiplier))
            .itemOutputs(Ingredient.of(itemOutputs, itemOutputs.getCount() * multiplier))
            .inputFluids(Fluid.of(inputFluids, inputFluids.getCount() * multiplier))
            .outputFluids(Fluid.of(outputFluids, outputFluids.getCount() * multiplier))
            .duration(duration)
            .EUt(power)
       
    })
});