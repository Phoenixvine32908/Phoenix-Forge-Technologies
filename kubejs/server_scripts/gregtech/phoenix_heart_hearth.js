/**
phoenix heart hearth recipes
 */

ServerEvents.recipes(event => {

    event.recipes.gtceu.phoenix_heart_hearth("silicon_ingo")
        .itemInputs("1x gtceu:silicon_dust")
        .inputFluids("gtceu:argon 1000")
        .itemOutputs("gtceu:silicon_ingot")
        .duration(300)
        .EUt(8192)


    // if (recipe.outputs.item) {
    //      recipe.outputs.item.forEach( (itemOutput) => {
    //        if (itemOutput.content.type == 'gtceu:sized') {
    //           let oldItem = itemOutput.content.ingredient.item
    //           if (oldItem.includes("hot_")) {
    //             let newItem = oldItem.replace("hot_", "")
    //           itemOutput.content.ingredient.item = newItem
    //       }
    //    } else {
    //        console.log("unhandled output item type " + itemOutput.content.type)
    //     }
    //  })
    //   }

})
