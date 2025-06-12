ServerEvents.recipes(event => {

    const addSuperheatedPyrolyzingOvenRecipe = (recipeConfig) => {
      
      
        // Log the ID of the recipe being created for debugging
        console.log(`[KubeJS] Creating Superheated Pyrolyzing Oven recipe: ${recipeConfig.id}`);

        let recipeBuilder = event.recipes.gtceu.superheated_pyrolyzing_oven(recipeConfig.id)
            .duration(recipeConfig.duration)
            .EUt(recipeConfig.EUt)
            .circuit(recipeConfig.circuit || 0);

     
        if (recipeConfig.itemInputs && Array.isArray(recipeConfig.itemInputs) && recipeConfig.itemInputs.length > 0) {
            recipeBuilder.itemInputs(recipeConfig.itemInputs);
        }
        if (recipeConfig.inputFluids && Array.isArray(recipeConfig.inputFluids) && recipeConfig.inputFluids.length > 0) {
            recipeBuilder.inputFluids(recipeConfig.inputFluids);
        }
        if (recipeConfig.itemOutputs && Array.isArray(recipeConfig.itemOutputs) && recipeConfig.itemOutputs.length > 0) {
            recipeBuilder.itemOutputs(recipeConfig.itemOutputs);
        }
        if (recipeConfig.outputFluids && Array.isArray(recipeConfig.outputFluids) && recipeConfig.outputFluids.length > 0) {
            recipeBuilder.outputFluids(recipeConfig.outputFluids);
        }
    };

 
    const scaleIngredient = (ingredient, multiplier) => {

        if (ingredient.item && ingredient.getCount) {

        }

        if (ingredient.fluid && ingredient.getAmount) {
            return `${ingredient.fluid.id} ${ingredient.getAmount() * multiplier}`;

        }
        console.warn(`[KubeJS] Unhandled ingredient type in scaleIngredient: ${JSON.stringify(ingredient)}`);
        return ingredient.toString();
    };



    event.forEachRecipe('gtceu:pyrolyse_oven', recipe => {
        const originalId = recipe.getId();

        console.log(`[KubeJS] Considering original Pyrolyse Oven recipe: ${originalId}`);

        if (originalId.includes('superheated_pyrolyzing_oven') || originalId.endsWith('_1000x')) {
            console.log(`[KubeJS] Skipping already processed or superheated recipe: ${originalId}`);
            return;
        }


        const originalPath = originalId.substring(originalId.indexOf('/') + 1);


        const newId = `gtceu:superheated_pyrolyzing_oven/${originalPath}_1000x`;

        const originalDuration = recipe.duration;
        const originalCircuit = recipe.circuit || 0;

  
        const newEUt = GTValues.VA[GTValues.ZPM] / 2;

        // Scale inputs and outputs
        const newItems = recipe.itemInputs.map(input => scaleIngredient(input, 1000));
        const newFluids = recipe.inputFluids.map(input => scaleIngredient(input, 1000));
        const newOutputItems = recipe.itemOutputs.map(output => scaleIngredient(output, 1000));
        const newOutputFluids = recipe.outputFluids.map(output => scaleIngredient(output, 1000));

        // Call the helper function with the constructed config object
        addSuperheatedPyrolyzingOvenRecipe({
            id: newId,
            duration: originalDuration,
            EUt: newEUt,
            circuit: originalCircuit,
            itemInputs: newItems,
            inputFluids: newFluids,
            itemOutputs: newOutputItems,
            outputFluids: newOutputFluids
        });
    });
});
