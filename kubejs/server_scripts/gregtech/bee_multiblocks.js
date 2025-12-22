/**
Recipes for the bee related multiblocks
 */

ServerEvents.recipes(phoenix => {
    phoenix.recipes.gtceu.simulated_colony("water_bee")
        .notConsumable((Item.of("productivebees:bee_cage", {
            entity: "productivebees:configurable_bee",
            name: "Water Bee",
            type: "productivebees:water"
        })).weakNBT())
        .notConsumable("minecraft:salmon")
        .inputFluids("minecraft:water 100")
        .itemOutputs("16x minecraft:salmon")
        .duration(600)
        .EUt(GTValues.VA[GTValues.IV] / 2)
    phoenix.recipes.gtceu.simulated_colony("rancher")
        .notConsumable((Item.of("productivebees:bee_cage", {
            entity: "productivebees:rancher_bee",
            name: "Rancher Bee",
        })).weakNBT())
        .notConsumable("minecraft:milk_bucket")
        .inputFluids("phoenixcore:sugar_water 100")
        .itemOutputs("productivebees:honeycomb_milky")
        .duration(400)
        .EUt(GTValues.VA[GTValues.IV] / 2)

    phoenix.recipes.gtceu.centrifuge("impure_honey_purification")
        .notConsumable("gtceu:fluid_filter")
        .inputFluids("gtceu:impure_honey 1000")
        .outputFluids("productivebees:honey 75", "gtceu:pollen_concentrate_fluid 250")
        .itemOutputs("4x gtceu:wax_dust")
        .duration(40)
        .EUt(GTValues.VA[GTValues.IV] / 2)
    phoenix.recipes.gtceu.mixer("melting_catalyst")
        .itemInputs("2x gtceu:carbon_dust", "1x minecraft:glowstone_dust")
        .circuit(4)
        .inputFluids("minecraft:water 2500", "gtceu:naphtha 250")
        .outputFluids("gtceu:melting_catalyst 2500")
        .duration(100)
        .EUt(GTValues.VA[GTValues.EV] / 2)

})