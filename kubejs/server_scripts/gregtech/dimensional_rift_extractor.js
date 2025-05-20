ServerEvents.recipes((event) => {
    const gtr = event.recipes.gtceu;
  
    function addAnchorRecipe(name, rawOre, outputOre, dimension) {
      gtr.dimensional_anchor(name)
        .notConsumable(`1x ${rawOre}`)
        .itemOutputs(`${outputOre}`)
        .inputFluids('gtceu:drilling_fluid 500')
        .duration(75)
        .EUt(1280)
        .dimension(dimension);
    }
    function addDimensionalRiftExtractorRecipe(name, rawOre, outputOre, dimension) {
      gtr.aetherial_fabricator(name)
        .notConsumable(`1x ${rawOre}`)
        .itemOutputs(`${outputOre}`)
        .inputFluids('gtceu:drilling_fluid 500')
        .duration(75)
        .EUt(1280)
        .dimension(dimension);
    }
  
    // Overworld Recipe
    addAnchorRecipe("bentonite_ore_overworld_9", "gtceu:raw_bentonite", "9x gtceu:bentonite_ore", "overworld");
    
    //Nether Recipes
addDimensionalRiftExtractorRecipe("bentonite_ore_overworld_9", "gtceu:raw_bentonite", "9x gtceu:bentonite_ore", "overworld");
    //End Recipes

    //Moon Recipes


});