ServerEvents.recipes(event => {
    
  event.recipes.gtceu.assembler("ender_bag")
            .itemInputs("4x minecraft:leather", "2x minecraft:ender_eye")
            .inputFluids("gtceu:ender_air 2000")
            .itemOutputs("enderchests:ender_bag")
            .duration(100)
            .EUt(2048)
   
})