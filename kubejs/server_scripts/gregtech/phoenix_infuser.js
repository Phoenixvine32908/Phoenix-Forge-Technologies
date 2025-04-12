ServerEvents.recipes(event => {
        function PhoenixwareFusionMk4Recipe(event, id, fluidInput1, fluidInput2, fluidOutput, dur, power) {
            const rec = event.recipes.gtceu.phoenix_infuser(id)
              .duration(dur)
              .EUt(power)
              .inputFluids(Fluid.of(fluidInput1.split(' ')[0], parseInt(fluidInput1.split(' ')[1])))
              .inputFluids(Fluid.of(fluidInput2.split(' ')[0], parseInt(fluidInput2.split(' ')[1])))
              .outputFluids(Fluid.of(fluidOutput.split(' ')[0], parseInt(fluidOutput.split(' ')[1])));
          }
        
          const phoenixwareFusionMk4Recipes = [
            ["europium_mk4", "gtceu:neodymium 16", "gtceu:hydrogen 275", "gtceu:europium 16", 10,  4194304,],
            ["uranium_mk4", "gtceu:gold 16", "gtceu:aluminium 16", "gtceu:uranium 16", 16,  4194304,],
            ["helium_plasma_mk4", "gtceu:deuterium 125", "gtceu:tritium 125", "gtceu:helium_plasma 125", 2,  4194304,],
            ["uranium_235_mk4", "gtceu:mercury 125", "gtceu:magnesium 16", "gtceu:uranium_235 16", 16,  4194304,],
            ["osmium_mk4", "gtceu:silver 16", "gtceu:copper 16", "gtceu:osmium 16", 10,  4194304,],
            ["duranium_mk4", "gtceu:gallium 16", "gtceu:radon 125", "gtceu:duranium 16", 10,  4194304,],
            ["chromium_mk4", "gtceu:hydrogen 125", "gtceu:vanadium 16", "gtceu:chromium 16", 10,  4194304,],
            ["lutetium_mk4", "gtceu:lanthanum 16", "gtceu:silicon 16", "gtceu:lutetium 16", 2,  4194304,],
            ["plutonium_mk4", "gtceu:xenon 125", "gtceu:zinc 16", "gtceu:plutonium 16", 32,  4194304,],
            ["nitrogen_mk4", "gtceu:beryllium 16", "gtceu:deuterium 375", "gtceu:nitrogen_plasma 125", 4,  4194304,],
            ["oxygen_plasma_mk4", "gtceu:carbon 16", "gtceu:helium_3 125", "gtceu:oxygen_plasma 16", 8,  4194304,],
            ["tritanium_mk4", "gtceu:titanium 32", "gtceu:duranium 32", "gtceu:tritanium 16", 16,  4194304,],
            ["plutonium_241_mk4", "gtceu:krypton 125", "gtceu:cerium 16", "gtceu:plutonium_241 16", 32,  4194304,],
            ["americium_mk4", "gtceu:lutetium 32", "gtceu:chromium 32", "gtceu:americium 32", 16,  4194304,],
            ["darmstadtium_mk4", "gtceu:arsenic_vapor 32", "gtceu:ruthenium 16", "gtceu:darmstadtium 16", 8,  4194304,],
            ["radon_mk4", "gtceu:gold 16", "gtceu:mercury 16", "gtceu:radon 125", 8,  4194304,],
            ["argon_plasma_mk4", "gtceu:carbon 16", "gtceu:magnesium 16", "gtceu:argon_plasma 125", 16,  4194304,],
            ["iron_plasma_mk4", "gtceu:silicon 16", "gtceu:magnesium 16", "gtceu:iron_plasma 16", 16,  4194304,],
            ["naquadria_mk4", "gtceu:enriched_naquad 16", "gtceu:radon 125", "gtceu:naquadria 4", 32,  4194304,],
            ["nickel_plasma_mk4", "gtceu:potassium 16", "gtceu:fluorine 125", "gtceu:nickel_plasma 16", 8,  4194304,],
            ["neutronium_mk4", "gtceu:americium 128", "gtceu:naquadria 128", "gtceu:neutronium 32", 150,  4194304,],
        
        
            // Add more recipes here
        
          ];
        
          phoenixwareFusionMk4Recipes.forEach(([id, fluidInput1, fluidInput2, fluidOutput, dur, power]) => {
            PhoenixwareFusionMk4Recipe(event, id, fluidInput1, fluidInput2, fluidOutput, dur, power);
          });

})
