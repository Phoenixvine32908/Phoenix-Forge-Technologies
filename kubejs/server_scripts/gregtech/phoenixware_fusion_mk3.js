ServerEvents.recipes(event => {

  function PhoenixwareFusionMk3Recipe(event, id, fluidInput1, fluidInput2, fluidOutput, dur, power) {
    const rec = event.recipes.gtceu.phoenixware_fusion_mk3(id)
      .duration(dur)
      .EUt(power)
      .inputFluids(Fluid.of(fluidInput1.split(' ')[0], parseInt(fluidInput1.split(' ')[1])))
      .inputFluids(Fluid.of(fluidInput2.split(' ')[0], parseInt(fluidInput2.split(' ')[1])))
      .outputFluids(Fluid.of(fluidOutput.split(' ')[0], parseInt(fluidOutput.split(' ')[1])));
  }

  const phoenixwareFusionMk3Recipes = [
    ["europium_mk3", "gtceu:neodymium 16", "gtceu:hydrogen 275", "gtceu:europium 16", 20, 1048576,],
    ["uranium_mk3", "gtceu:gold 16", "gtceu:aluminium 16", "gtceu:uranium 16", 32, 1048576,],
    ["helium_plasma_mk3", "gtceu:deuterium 125", "gtceu:tritium 125", "gtceu:helium_plasma 125", 4, 1048576,],
    ["uranium_235_mk3", "gtceu:mercury 125", "gtceu:magnesium 16", "gtceu:uranium_235 16", 32, 1048576,],
    ["osmium_mk3", "gtceu:silver 16", "gtceu:copper 16", "gtceu:osmium 16", 20, 1048576,],
    ["duranium_mk3", "gtceu:gallium 16", "gtceu:radon 125", "gtceu:duranium 16", 20, 1048576,],
    ["chromium_mk3", "gtceu:hydrogen 125", "gtceu:vanadium 16", "gtceu:chromium 16", 20, 1048576,],
    ["lutetium_mk3", "gtceu:lanthanum 16", "gtceu:silicon 16", "gtceu:lutetium 16", 4, 1048576,],
    ["plutonium_mk3", "gtceu:xenon 125", "gtceu:zinc 16", "gtceu:plutonium 16", 64, 1048576,],
    ["nitrogen_mk3", "gtceu:beryllium 16", "gtceu:deuterium 375", "gtceu:nitrogen_plasma 125", 8, 1048576,],
    ["oxygen_plasma_mk3", "gtceu:carbon 16", "gtceu:helium_3 125", "gtceu:oxygen_plasma 16", 16, 1048576,],
    ["tritanium_mk3", "gtceu:titanium 32", "gtceu:duranium 32", "gtceu:tritanium 16", 32, 1048576,],
    ["plutonium_241_mk3", "gtceu:krypton 125", "gtceu:cerium 16", "gtceu:plutonium_241 16", 64, 1048576,],
    ["americium_mk3", "gtceu:lutetium 32", "gtceu:chromium 32", "gtceu:americium 32", 32, 1048576,],
    ["darmstadtium_mk3", "gtceu:arsenic_vapor 32", "gtceu:ruthenium 16", "gtceu:darmstadtium 16", 16, 1048576,],
    ["radon_mk3", "gtceu:gold 16", "gtceu:mercury 16", "gtceu:radon 125", 32, 1048576,],
    ["argon_plasma_mk3", "gtceu:carbon 16", "gtceu:magnesium 16", "gtceu:argon_plasma 125", 32, 1048576,],
    ["iron_plasma_mk3", "gtceu:silicon 16", "gtceu:magnesium 16", "gtceu:iron_plasma 16", 32, 1048576,],
    ["naquadria_mk3", "gtceu:enriched_naquad 16", "gtceu:radon 125", "gtceu:naquadria 4", 64, 1048576,],
    ["nickel_plasma_mk3", "gtceu:potassium 16", "gtceu:fluorine 125", "gtceu:nickel_plasma 16", 16, 1048576,],
    ["neutronium_mk3", "gtceu:americium 128", "gtceu:naquadria 128", "gtceu:neutronium 32", 200, 1048576,],


    // Add more recipes here

  ];

  phoenixwareFusionMk3Recipes.forEach(([id, fluidInput1, fluidInput2, fluidOutput, dur, power]) => {
    PhoenixwareFusionMk3Recipe(event, id, fluidInput1, fluidInput2, fluidOutput, dur, power);
  });
})