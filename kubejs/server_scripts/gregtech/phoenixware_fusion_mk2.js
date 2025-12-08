/**
phoenixware fusion mk2 recipes
 */
ServerEvents.recipes(event => {

    function PhoenixwareFusionMk2Recipe(event, id, fluidInput1, fluidInput2, fluidOutput, dur, power) {
        const rec = event.recipes.gtceu.phoenixware_fusion_mk2(id)
            .duration(dur)
            .EUt(power)
            .inputFluids(Fluid.of(fluidInput1.split(" ")[0], parseInt(fluidInput1.split(" ")[1])))
            .inputFluids(Fluid.of(fluidInput2.split(" ")[0], parseInt(fluidInput2.split(" ")[1])))
            .outputFluids(Fluid.of(fluidOutput.split(" ")[0], parseInt(fluidOutput.split(" ")[1])));
    }

    const phoenixwareFusionMk2Recipes = [
        ["europium_mk2", "gtceu:neodymium 16", "gtceu:hydrogen 275", "gtceu:europium 16", 40, 262144,],
        ["uranium_mk2", "gtceu:gold 16", "gtceu:aluminium 16", "gtceu:uranium 16", 64, 262144,],
        ["helium_plasma_mk2", "gtceu:deuterium 125", "gtceu:tritium 125", "gtceu:helium_plasma 125", 8, 262144,],
        ["uranium_235_mk2", "gtceu:mercury 125", "gtceu:magnesium 16", "gtceu:uranium_235 16", 64, 262144,],
        ["osmium_mk2", "gtceu:silver 16", "gtceu:copper 16", "gtceu:osmium 16", 40, 262144,],
        ["duranium_mk2", "gtceu:gallium 16", "gtceu:radon 125", "gtceu:duranium 16", 40, 262144,],
        ["chromium_mk2", "gtceu:hydrogen 125", "gtceu:vanadium 16", "gtceu:chromium 16", 40, 262144,],
        ["lutetium_mk2", "gtceu:lanthanum 16", "gtceu:silicon 16", "gtceu:lutetium 16", 8, 262144,],
        ["plutonium_mk2", "gtceu:xenon 125", "gtceu:zinc 16", "gtceu:plutonium 16", 128, 262144,],
        ["nitrogen_mk2", "gtceu:beryllium 16", "gtceu:deuterium 375", "gtceu:nitrogen_plasma 125", 16, 262144,],
        ["oxygen_plasma_mk2", "gtceu:carbon 16", "gtceu:helium_3 125", "gtceu:oxygen_plasma 16", 32, 262144,],
        ["tritanium_mk2", "gtceu:titanium 32", "gtceu:duranium 32", "gtceu:tritanium 16", 64, 262144,],
        ["plutonium_241_mk2", "gtceu:krypton 125", "gtceu:cerium 16", "gtceu:plutonium_241 16", 128, 262144,],
        ["americium_mk2", "gtceu:lutetium 32", "gtceu:chromium 32", "gtceu:americium 32", 64, 262144,],
        ["darmstadtium_mk2", "gtceu:arsenic 32", "gtceu:ruthenium 16", "gtceu:darmstadtium 16", 32, 262144,],
        ["radon_mk2", "gtceu:gold 16", "gtceu:mercury 16", "gtceu:radon 125", 64, 262144,],
        ["argon_plasma_mk2", "gtceu:carbon 16", "gtceu:magnesium 16", "gtceu:argon_plasma 125", 64, 262144,],
        ["indium_mk2", "gtceu:silver 144", "gtceu:lithium 144", "gtceu:indium 144", 8, 262144,],


        // Add more recipes here

    ];

    phoenixwareFusionMk2Recipes.forEach(([id, fluidInput1, fluidInput2, fluidOutput, dur, power]) => {
        PhoenixwareFusionMk2Recipe(event, id, fluidInput1, fluidInput2, fluidOutput, dur, power);
    });
})
