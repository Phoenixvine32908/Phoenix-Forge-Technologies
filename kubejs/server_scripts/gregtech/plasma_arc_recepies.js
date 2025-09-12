/**
plasma arc furnace recipes
 */

ServerEvents.recipes(event => {

    Java.loadClass("com.gregtechceu.gtceu.api.GTValues")

    event.recipes.gtceu.assembly_line("high_pressure_arc_furnace")
        .itemInputs("4x #gtceu:circuits/zpm",
            "8x kubejs:plasma_resistant")
        .inputFluids("gtceu:soldering_alloy 1152","gtceu:niobium_titanium 1152")
        .itemOutputs("gtceu:high_pressure_arc_furnace")
        .duration(600)
        .EUt(29723)
        .stationResearch(b => b.researchStack(Item.of("gtceu:large_arc_smelter")).EUt(30720).CWUt(16, 32000))

    event.recipes.gtceu.high_pressure_arc_furnace("high_pressure_arc_furnace")
        .circuit(1)
        .itemInputs("4x gtceu:crude_quantum_binder")
        .inputFluids("minecraft:lava 1152","gtceu:naquad_alloy 1152")
        .outputFluids("minecraft:lava 3000")
        .duration(180000)
        .EUt(131072)


})
