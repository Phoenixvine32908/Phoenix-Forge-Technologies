/**
phoenixware fusion mk1 recipes
 

ServerEvents.recipes(event => {

    function PhoenixwareFusionMk1Recipe(event, id, fluidInput1, fluidInput2, fluidOutput, dur, power) {
        const rec = event.recipes.gtceu.phoenixware_fusion_mk1(id)
            .duration(dur)
            .EUt(power)
            .inputFluids(Fluid.of(fluidInput1.split(" ")[0], parseInt(fluidInput1.split(" ")[1])))
            .inputFluids(Fluid.of(fluidInput2.split(" ")[0], parseInt(fluidInput2.split(" ")[1])))
            .outputFluids(Fluid.of(fluidOutput.split(" ")[0], parseInt(fluidOutput.split(" ")[1])));
    }

    const phoenixwareFusionMk1Recipes = [
        ["europium_mk1", "gtceu:neodymium 16", "gtceu:hydrogen 275", "gtceu:europium 16", 80, 100000,],
        ["uranium_mk1", "gtceu:gold 16", "gtceu:aluminium 16", "gtceu:uranium 16", 128, 100000,],
        ["helium_plasma_mk1", "gtceu:deuterium 125", "gtceu:tritium 125", "gtceu:helium_plasma 125", 16, 100000,],
        ["uranium_235_mk1", "gtceu:mercury 125", "gtceu:magnesium 16", "gtceu:uranium_235 16", 128, 100000,],
        ["osmium_mk1", "gtceu:silver 16", "gtceu:copper 16", "gtceu:osmium 16", 80, 100000,],
        ["duranium_mk1", "gtceu:gallium 16", "gtceu:radon 125", "gtceu:duranium 16", 80, 100000,],
        ["chromium_mk1", "gtceu:hydrogen 125", "gtceu:vanadium 16", "gtceu:chromium 16", 80, 100000,],
        ["lutetium_mk1", "gtceu:lanthanum 16", "gtceu:silicon 16", "gtceu:lutetium 16", 16, 100000,],
        // Add more recipes here

    ];

    phoenixwareFusionMk1Recipes.forEach(([id, fluidInput1, fluidInput2, fluidOutput, dur, power]) => {
        PhoenixwareFusionMk1Recipe(event, id, fluidInput1, fluidInput2, fluidOutput, dur, power);
    });
})
    */
