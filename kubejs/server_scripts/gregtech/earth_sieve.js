ServerEvents.recipes(event => {
 // Cobblestone Sieving (increased chances)
 event.recipes.gtceu.earth_sieve('from_cobblestone')
    .itemInputs('4x minecraft:cobblestone')
    .chancedOutput('kubejs:mineral_sand_vein_traces', 40, 1) // Slightly lower
    // Consider adding very low chances for other basic traces if desired
    .duration(250)
    .EUt(16);

  // Stone Sieving (slightly lower chances)
  event.recipes.gtceu.earth_sieve('from_stone')
    .itemInputs('4x minecraft:stone')
    .chancedOutput('kubejs:redstone_vein_traces', 45, 1) // Slightly lower
    .chancedOutput('kubejs:coal_vein_traces', 50, 1)    // Slightly lower
    .chancedOutput('kubejs:iron_vein_traces', 35, 1)    // Slightly lower
    .chancedOutput('kubejs:copper_vein_traces', 30, 1)   // Slightly lower
    .chancedOutput('kubejs:apatite_vein_traces', 40, 1)  // Slightly lower
    .chancedOutput('kubejs:mineral_sand_vein_traces', 45, 1) // Slightly lower
    .duration(250)
    .EUt(16);

  // Deepslate Sieving (slightly lower chances)
  event.recipes.gtceu.earth_sieve('from_deepslate')
    .itemInputs('4x minecraft:deepslate')
    .chancedOutput('kubejs:sapphire_vein_traces', 35, 1)   // Slightly lower
    .chancedOutput('kubejs:olivine_vein_traces', 40, 1)   // Slightly lower
    .chancedOutput('kubejs:mica_vein_traces', 45, 1)      // Slightly lower
    .chancedOutput('kubejs:manganese_vein_traces', 30, 1) // Slightly lower
    .chancedOutput('kubejs:lapis_vein_traces', 45, 1)     // Slightly lower
    .chancedOutput('kubejs:diamond_vein_traces', 12, 1)    // Slightly lower
    .chancedOutput('kubejs:nickel_vein_traces', 30, 1)    // Slightly lower
    .chancedOutput('kubejs:magnetite_vein_traces', 40, 1) // Slightly lower
    .chancedOutput('kubejs:garnet_vein_traces', 43, 1)    // Slightly lower
    .chancedOutput('kubejs:casseterite_vein_traces', 25, 1) // Slightly lower
    .chancedOutput('kubejs:garnet_tin_vein_traces', 20, 1) // Slightly lower
    .chancedOutput('kubejs:galena_vein_traces', 27, 1)    // Slightly lower
    .chancedOutput('kubejs:copper_tin_vein_traces', 33, 1) // Slightly lower
    .chancedOutput('kubejs:topaz_vein_traces', 35, 1)     // Slightly lower
    .chancedOutput('kubejs:tetrahedrite_vein_traces', 33, 1) // Slightly lower
    .duration(250)
    .EUt(16);

  event.recipes.gtceu.earth_sieve('from_cobbled_deepslate')
    .itemInputs('4x minecraft:cobbled_deepslate')
    .chancedOutput('kubejs:sapphire_vein_traces', 40, 1)   // Slightly lower
    .chancedOutput('kubejs:olivine_vein_traces', 45, 1)   // Slightly lower
    .chancedOutput('kubejs:mica_vein_traces', 50, 1)      // Slightly lower
    .chancedOutput('kubejs:manganese_vein_traces', 35, 1) // Slightly lower
    .chancedOutput('kubejs:lapis_vein_traces', 50, 1)     // Slightly lower
    .chancedOutput('kubejs:diamond_vein_traces', 17, 1)    // Slightly lower
    .chancedOutput('kubejs:nickel_vein_traces', 30, 1)    // Slightly lower
    .chancedOutput('kubejs:magnetite_vein_traces', 40, 1) // Slightly lower
    .chancedOutput('kubejs:garnet_vein_traces', 43, 1)    // Slightly lower
    .chancedOutput('kubejs:casseterite_vein_traces', 25, 1) // Slightly lower
    .chancedOutput('kubejs:garnet_tin_vein_traces', 20, 1) // Slightly lower
    .chancedOutput('kubejs:galena_vein_traces', 27, 1)    // Slightly lower
    .chancedOutput('kubejs:copper_tin_vein_traces', 33, 1) // Slightly lower
    .chancedOutput('kubejs:topaz_vein_traces', 35, 1)     // Slightly lower
    .chancedOutput('kubejs:tetrahedrite_vein_traces', 33, 1) // Slightly lower
    .duration(250)
    .EUt(16);

  // Dirt Sieving (slightly lower chances)
  event.recipes.gtceu.earth_sieve('from_dirt')
    .itemInputs('4x minecraft:dirt')
    .chancedOutput('kubejs:oilsands_vein_traces', 40, 1) // Slightly lower
    .chancedOutput('kubejs:salts_vein_traces', 35, 1)    // Slightly lower
    .chancedOutput('kubejs:coal_vein_traces', 15, 1)     // Slightly lower
    .chancedOutput('kubejs:apatite_vein_traces', 12, 1)   // Slightly lower
    .chancedOutput('kubejs:mineral_sand_vein_traces', 25, 1) // Slightly lower
    .chancedOutput('kubejs:iron_vein_traces', 8, 1)     // Slightly lower
    .chancedOutput('kubejs:copper_vein_traces', 4, 1)    // Slightly lower
    .chancedOutput('kubejs:lapis_vein_traces', 1, 1)    // Slightly lower
    .chancedOutput('kubejs:redstone_vein_traces', 3, 1)  // Slightly lower
    .duration(250)
    .EUt(16);

  // Gravel Sieving (slightly lower chances)
  event.recipes.gtceu.earth_sieve('from_gravel')
    .itemInputs('4x minecraft:gravel')
    .chancedOutput('kubejs:copper_vein_traces', 35, 1)   // Slightly lower
    .chancedOutput('kubejs:sapphire_vein_traces', 8, 1)   // Slightly lower
    .chancedOutput('kubejs:redstone_vein_traces', 25, 1)  // Slightly lower
    .chancedOutput('kubejs:olivine_vein_traces', 12, 1)  // Slightly lower
    .chancedOutput('kubejs:mica_vein_traces', 14, 1)     // Slightly lower
    .chancedOutput('kubejs:manganese_vein_traces', 6, 1)  // Slightly lower
    .chancedOutput('kubejs:nickel_vein_traces', 5, 1)    // Slightly lower
    .chancedOutput('kubejs:iron_vein_traces', 30, 1)    // Slightly lower
    .chancedOutput('kubejs:magnetite_vein_traces', 10, 1) // Slightly lower
    .chancedOutput('kubejs:garnet_vein_traces', 10, 1)   // Slightly lower
    .chancedOutput('kubejs:casseterite_vein_traces', 3, 1) // Slightly lower
    .chancedOutput('kubejs:galena_vein_traces', 5, 1)    // Slightly lower
    .chancedOutput('kubejs:copper_tin_vein_traces', 7, 1) // Slightly lower
    .chancedOutput('kubejs:coal_vein_traces', 20, 1)     // Slightly lower
    .duration(250)
    .EUt(16);

  // Sand Sieving (slightly lower chances)
  event.recipes.gtceu.earth_sieve('from_sand')
    .itemInputs('4x minecraft:sand')
    .chancedOutput('kubejs:oilsands_vein_traces', 35, 1) // Slightly lower
    .chancedOutput('kubejs:salts_vein_traces', 60, 1)    // Slightly lower
    .chancedOutput('kubejs:mineral_sand_vein_traces', 70, 1) // Slightly lower
    .chancedOutput('kubejs:copper_vein_traces', 3, 1)    // Slightly lower
    .chancedOutput('kubejs:apatite_vein_traces', 15, 1)   // Slightly lower
    .chancedOutput('kubejs:topaz_vein_traces', 8, 1)     // Slightly lower
    .chancedOutput('kubejs:tetrahedrite_vein_traces', 8, 1) // Slightly lower
    .chancedOutput('kubejs:mineral_sand_vein_traces', 60, 1) // Slightly lower
    .chancedOutput('kubejs:iron_vein_traces', 5, 1)     // Slightly lower
    .chancedOutput('kubejs:lapis_vein_traces', 15, 1)    // Slightly lower
    .chancedOutput('kubejs:diamond_vein_traces', 1, 1)   // Slightly lower
    .duration(250)
    .EUt(16);
  // Sifter Recipes for Vein Traces
  //.itemOutputsRanged("kubejs:oilsands_vein_traces", 10, 45)
  // Copper Vein Traces
  event.recipes.gtceu.sifter('sift_copper_traces')
    .itemInputs('kubejs:copper_vein_traces')
    .itemOutputs('gtceu:copper_dust')
    .duration(100)
    .EUt(8);

  // Sapphire Vein Traces
  event.recipes.gtceu.sifter('sift_sapphire_traces')
    .itemInputs('kubejs:sapphire_vein_traces')
    .itemOutputs('gtceu:sapphire_dust')
    .duration(100)
    .EUt(8);

  // Redstone Vein Traces
  event.recipes.gtceu.sifter('sift_redstone_traces')
    .itemInputs('kubejs:redstone_vein_traces')
    .itemOutputs('minecraft:redstone')
    .duration(100)
    .EUt(8);

  // Olivine Vein Traces
  event.recipes.gtceu.sifter('sift_olivine_traces')
    .itemInputs('kubejs:olivine_vein_traces')
    .itemOutputs('gtceu:olivine_dust')
    .duration(100)
    .EUt(8);

  // Mica Vein Traces
  event.recipes.gtceu.sifter('sift_mica_traces')
    .itemInputs('kubejs:mica_vein_traces')
    .itemOutputs('gtceu:mica_dust')
    .duration(100)
    .EUt(8);

  // Manganese Vein Traces
  event.recipes.gtceu.sifter('sift_manganese_traces')
    .itemInputs('kubejs:manganese_vein_traces')
    .itemOutputs('gtceu:manganese_dust')
    .duration(100)
    .EUt(8);

  // Lapis Vein Traces
  event.recipes.gtceu.sifter('sift_lapis_traces')
    .itemInputs('kubejs:lapis_vein_traces')
    .itemOutputs('minecraft:lapis_lazuli')
    .duration(100)
    .EUt(8);

  // Diamond Vein Traces
  event.recipes.gtceu.sifter('sift_diamond_traces')
    .itemInputs('kubejs:diamond_vein_traces')
    .itemOutputs('minecraft:diamond')
    .duration(100)
    .EUt(8);

  // Oilsands Traces
  event.recipes.gtceu.sifter('sift_oilsands_traces')
    .itemInputs('kubejs:oilsands_vein_traces')
    .itemOutputs('gtceu:oilsands_dust')
    .duration(100)
    .EUt(8);

  // Salt Traces
  event.recipes.gtceu.sifter('sift_salts_traces')
    .itemInputs('kubejs:salts_vein_traces')
    .itemOutputs('gtceu:salt_dust')
    .duration(100)
    .EUt(8);

  // Nickel Vein Traces
  event.recipes.gtceu.sifter('sift_nickel_traces')
    .itemInputs('kubejs:nickel_vein_traces')
    .itemOutputs('gtceu:nickel_dust')
    .duration(100)
    .EUt(8);

    // Mineral Sands Vein Traces
  event.recipes.gtceu.sifter('sift_mineral_sand_traces')
    .itemInputs('kubejs:mineral_sand_vein_traces')
    .itemOutputs('gtceu:basaltic_mineral_sand_dust', 'gtceu:granitic_mineral_sand_dust')
    .duration(100)
    .EUt(8);

  // Iron Vein Traces
  event.recipes.gtceu.sifter('sift_iron_traces')
    .itemInputs('kubejs:iron_vein_traces')
    .itemOutputs('gtceu:iron_dust')
    .duration(100)
    .EUt(8);

  // Magnetite Vein Traces
  event.recipes.gtceu.sifter('sift_magnetite_traces')
    .itemInputs('kubejs:magnetite_vein_traces')
    .itemOutputs('gtceu:magnetite_dust')
    .duration(100)
    .EUt(8);

  // Garnet Vein Traces
  event.recipes.gtceu.sifter('sift_garnet_traces')
    .itemInputs('kubejs:garnet_vein_traces')
    .itemOutputs('gtceu:garnet_sand_dust')
    .duration(100)
    .EUt(8);

  // Casseterite Vein Traces
  event.recipes.gtceu.sifter('sift_casseterite_traces')
    .itemInputs('kubejs:casseterite_vein_traces')
    .itemOutputs('gtceu:cassiterite_dust')
    .duration(100)
    .EUt(8);

  // Garnet Tin Vein Traces (Assuming this yields both)
  event.recipes.gtceu.sifter('sift_garnet_tin_traces')
    .itemInputs('kubejs:garnet_tin_vein_traces')
    .itemOutputs('gtceu:garnet_sand_dust', 'gtceu:tin_dust') // Adjust if it yields something else
    .duration(100)
    .EUt(8);

  // Galena Vein Traces
  event.recipes.gtceu.sifter('sift_galena_traces')
    .itemInputs('kubejs:galena_vein_traces')
    .itemOutputs('gtceu:galena_dust')
    .duration(100)
    .EUt(8);

  // Copper Tin Vein Traces (Assuming this yields both)
  event.recipes.gtceu.sifter('sift_copper_tin_traces')
    .itemInputs('kubejs:copper_tin_vein_traces')
    .itemOutputs('gtceu:copper_dust', 'gtceu:tin_dust') // Adjust if it yields something else
    .duration(100)
    .EUt(8);

  // Coal Vein Traces
  event.recipes.gtceu.sifter('sift_coal_traces')
    .itemInputs('kubejs:coal_vein_traces')
    .itemOutputs('minecraft:coal')
    .duration(100)
    .EUt(8);

  // Apatite Vein Traces
  event.recipes.gtceu.sifter('sift_apatite_traces')
    .itemInputs('kubejs:apatite_vein_traces')
    .itemOutputs('gtceu:apatite_dust')
    .duration(100)
    .EUt(8);

  // Topaz Vein Traces
  event.recipes.gtceu.sifter('sift_topaz_traces')
    .itemInputs('kubejs:topaz_vein_traces')
    .itemOutputs('gtceu:topaz_dust')
    .duration(100)
    .EUt(8);

  // Tetrahedrite Vein Traces
  event.recipes.gtceu.sifter('sift_tetrahedrite_traces')
    .itemInputs('kubejs:tetrahedrite_vein_traces')
    .itemOutputs('gtceu:tetrahedrite_dust')
    .duration(100)
    .EUt(8);
});