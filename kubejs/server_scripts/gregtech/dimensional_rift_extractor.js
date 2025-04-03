ServerEvents.recipes((event) => {
    const gtr = event.recipes.gtceu;
  
    function addDimensionalRiftExtractorRecipe(name, rawOre, outputOre, dimension) {
      gtr.dimensional_rift_extractor(name)
        .notConsumable(`1x ${rawOre}`)
        .itemOutputs(`${outputOre}`)
        .inputFluids('gtceu:drilling_fluid 500')
        .duration(75)
        .EUt(1280)
        .dimension(dimension);
    }
  
    // Overworld Recipes with 9 output ore
    addDimensionalRiftExtractorRecipe("bentonite_ore_overworld_9", "gtceu:raw_bentonite", "9x gtceu:bentonite_ore", "overworld");
    addDimensionalRiftExtractorRecipe("magnetite_ore_overworld_9", "gtceu:raw_magnetite", "9x gtceu:magnetite_ore", "overworld");
    addDimensionalRiftExtractorRecipe("olivine_ore_overworld_9", "gtceu:raw_olivine", "9x gtceu:olivine_ore", "overworld");
    addDimensionalRiftExtractorRecipe("glauconite_sand_ore_overworld_9", "gtceu:raw_glauconite_sand", "9x gtceu:glauconite_sand_ore", "overworld");
    addDimensionalRiftExtractorRecipe("almandine_ore_overworld_9", "gtceu:raw_almandine", "9x gtceu:almandine_ore", "overworld");
    addDimensionalRiftExtractorRecipe("pyrope_ore_overworld_9", "gtceu:raw_pyrope", "9x gtceu:pyrope_ore", "overworld");
    addDimensionalRiftExtractorRecipe("sapphire_ore_overworld_9", "gtceu:raw_sapphire", "9x gtceu:sapphire_ore", "overworld");
    addDimensionalRiftExtractorRecipe("green_sapphire_ore_overworld_9", "gtceu:raw_green_sapphire", "9x gtceu:green_sapphire_ore", "overworld");
    addDimensionalRiftExtractorRecipe("goethite_ore_overworld_9", "gtceu:raw_goethite", "9x gtceu:goethite_ore", "overworld");
    addDimensionalRiftExtractorRecipe("yellow_limonite_ore_overworld_9", "gtceu:raw_yellow_limonite", "9x gtceu:yellow_limonite_ore", "overworld");
    addDimensionalRiftExtractorRecipe("hematite_ore_overworld_9", "gtceu:raw_hematite", "9x gtceu:hematite_ore", "overworld");
    addDimensionalRiftExtractorRecipe("malachite_ore_overworld_9", "gtceu:raw_malachite", "9x gtceu:malachite_ore", "overworld");
    addDimensionalRiftExtractorRecipe("soapstone_ore_overworld_9", "gtceu:raw_soapstone", "9x gtceu:soapstone_ore", "overworld");
    addDimensionalRiftExtractorRecipe("talc_ore_overworld_9", "gtceu:raw_talc", "9x gtceu:talc_ore", "overworld");
    addDimensionalRiftExtractorRecipe("pentlandite_ore_overworld_9", "gtceu:raw_pentlandite", "9x gtceu:pentlandite_ore", "overworld");
    addDimensionalRiftExtractorRecipe("grossular_ore_overworld_9", "gtceu:raw_grossular", "9x gtceu:grossular_ore", "overworld");
    addDimensionalRiftExtractorRecipe("spessartine_ore_overworld_9", "gtceu:raw_spessartine", "9x gtceu:spessartine_ore", "overworld");
    addDimensionalRiftExtractorRecipe("pyrolusite_ore_overworld_9", "gtceu:raw_pyrolusite", "9x gtceu:pyrolusite_ore", "overworld");
    addDimensionalRiftExtractorRecipe("tantalite_ore_overworld_9", "gtceu:raw_tantalite", "9x gtceu:tantalite_ore", "overworld");
    addDimensionalRiftExtractorRecipe("chalcopyrite_ore_overworld_9", "gtceu:raw_chalcopyrite", "9x gtceu:chalcopyrite_ore", "overworld");
    addDimensionalRiftExtractorRecipe("zeolite_ore_overworld_9", "gtceu:raw_zeolite", "9x gtceu:zeolite_ore", "overworld");
    addDimensionalRiftExtractorRecipe("cassiterite_ore_overworld_9", "gtceu:raw_cassiterite", "9x gtceu:cassiterite_ore", "overworld");
    addDimensionalRiftExtractorRecipe("realgar_ore_overworld_9", "gtceu:raw_realgar", "9x gtceu:realgar_ore", "overworld");
    addDimensionalRiftExtractorRecipe("coal_ore_overworld_9", "gtceu:raw_coal", "9x gtceu:coal_ore", "overworld");
    addDimensionalRiftExtractorRecipe("iron_ore_overworld_9", "minecraft:raw_iron", "9x minecraft:iron_ore", "overworld");
    addDimensionalRiftExtractorRecipe("pyrite_ore_overworld_9", "gtceu:raw_pyrite", "9x gtceu:pyrite_ore", "overworld");
    addDimensionalRiftExtractorRecipe("copper_ore_overworld_9", "minecraft:raw_copper", "9x minecraft:copper_ore", "overworld");
    addDimensionalRiftExtractorRecipe("vanadium_magnetite_ore_overworld_9", "gtceu:raw_vanadium_magnetite", "9x gtceu:vanadium_magnetite_ore", "overworld");
    addDimensionalRiftExtractorRecipe("gold_ore_overworld_9", "minecraft:raw_gold", "9x minecraft:gold_ore", "overworld");
    addDimensionalRiftExtractorRecipe("lazurite_ore_overworld_9", "gtceu:raw_lazurite", "9x gtceu:lazurite_ore", "overworld");
    addDimensionalRiftExtractorRecipe("sodalite_ore_overworld_9", "gtceu:raw_sodalite", "9x gtceu:sodalite_ore", "overworld");
    addDimensionalRiftExtractorRecipe("lapis_ore_overworld_9", "gtceu:raw_lapis", "9x gtceu:lapis_ore", "overworld");
    addDimensionalRiftExtractorRecipe("calcite_ore_overworld_9", "gtceu:raw_calcite", "9x gtceu:calcite_ore", "overworld");
    addDimensionalRiftExtractorRecipe("galena_ore_overworld_9", "gtceu:raw_galena", "9x gtceu:galena_ore", "overworld");
    addDimensionalRiftExtractorRecipe("silver_ore_overworld_9", "gtceu:raw_silver", "9x gtceu:silver_ore", "overworld");
    addDimensionalRiftExtractorRecipe("lead_ore_overworld_9", "gtceu:raw_lead", "9x gtceu:lead_ore", "overworld");
    addDimensionalRiftExtractorRecipe("kyanite_ore_overworld_9", "gtceu:raw_kyanite", "9x gtceu:kyanite_ore", "overworld");
    addDimensionalRiftExtractorRecipe("mica_ore_overworld_9", "gtceu:raw_mica", "9x gtceu:mica_ore", "overworld");
    addDimensionalRiftExtractorRecipe("bauxite_ore_overworld_9", "gtceu:raw_bauxite", "9x gtceu:bauxite_ore", "overworld");
    addDimensionalRiftExtractorRecipe("pollucite_ore_overworld_9", "gtceu:raw_pollucite", "9x gtceu:pollucite_ore", "overworld");
    addDimensionalRiftExtractorRecipe("tin_ore_overworld_9", "gtceu:raw_tin", "9x gtceu:tin_ore", "overworld");
    addDimensionalRiftExtractorRecipe("red_garnet_ore_overworld_9", "gtceu:raw_red_garnet", "9x gtceu:red_garnet_ore", "overworld");
    addDimensionalRiftExtractorRecipe("yellow_garnet_ore_overworld_9", "gtceu:raw_yellow_garnet", "9x gtceu:yellow_garnet_ore", "overworld");
    addDimensionalRiftExtractorRecipe("amethyst_ore_overworld_9", "gtceu:raw_amethyst", "9x gtceu:amethyst_ore", "overworld");
    addDimensionalRiftExtractorRecipe("opal_ore_overworld_9", "gtceu:raw_opal", "9x gtceu:opal_ore", "overworld");
    addDimensionalRiftExtractorRecipe("basaltic_mineral_sand_ore_overworld_9", "gtceu:raw_basaltic_mineral_sand", "9x gtceu:basaltic_mineral_sand_ore", "overworld");
    addDimensionalRiftExtractorRecipe("granitic_mineral_sand_ore_overworld_9", "gtceu:raw_granitic_mineral_sand", "9x gtceu:granitic_mineral_sand_ore", "overworld");
    addDimensionalRiftExtractorRecipe("fullers_earth_ore_overworld_9", "gtceu:raw_fullers_earth", "9x gtceu:fullers_earth_ore", "overworld");
    addDimensionalRiftExtractorRecipe("gypsum_ore_overworld_9", "gtceu:raw_gypsum", "9x gtceu:gypsum_ore", "overworld");
    addDimensionalRiftExtractorRecipe("rock_salt_ore_overworld_9", "gtceu:raw_rock_salt", "9x gtceu:rock_salt_ore", "overworld");
    addDimensionalRiftExtractorRecipe("salt_ore_overworld_9", "gtceu:raw_salt", "9x gtceu:salt_ore", "overworld");
    addDimensionalRiftExtractorRecipe("lepidolite_ore_overworld_9", "gtceu:raw_lepidolite", "9x gtceu:lepidolite_ore", "overworld");
    addDimensionalRiftExtractorRecipe("spodumene_ore_overworld_9", "gtceu:raw_spodumene", "9x gtceu:spodumene_ore", "overworld");
    addDimensionalRiftExtractorRecipe("redstone_ore_overworld_9", "gtceu:raw_redstone", "9x gtceu:redstone_ore", "overworld");
    addDimensionalRiftExtractorRecipe("ruby_ore_overworld_9", "gtceu:raw_ruby", "9x gtceu:ruby_ore", "overworld");
    addDimensionalRiftExtractorRecipe("cinnabar_ore_overworld_9", "gtceu:raw_cinnabar", "9x gtceu:cinnabar_ore", "overworld");
    addDimensionalRiftExtractorRecipe("apatite_ore_overworld_9", "gtceu:raw_apatite", "9x gtceu:apatite_ore", "overworld");
    addDimensionalRiftExtractorRecipe("tricalcium_phosphate_ore_overworld_9", "gtceu:raw_tricalcium_phosphate", "9x gtceu:tricalcium_phosphate_ore", "overworld");
    addDimensionalRiftExtractorRecipe("pyrochlore_ore_overworld_9", "gtceu:raw_pyrochlore", "9x gtceu:pyrochlore_ore", "overworld");
    addDimensionalRiftExtractorRecipe("cassiterite_sand_ore_overworld_9", "gtceu:raw_cassiterite_sand", "9x gtceu:cassiterite_sand_ore", "overworld");
    addDimensionalRiftExtractorRecipe("garnet_sand_ore_overworld_9", "gtceu:raw_garnet_sand", "9x gtceu:garnet_sand_ore", "overworld");
    addDimensionalRiftExtractorRecipe("asbestos_ore_overworld_9", "gtceu:raw_asbestos", "9x gtceu:asbestos_ore", "overworld");
    addDimensionalRiftExtractorRecipe("diatomite_ore_overworld_9", "gtceu:raw_diatomite", "9x gtceu:diatomite_ore", "overworld");
    addDimensionalRiftExtractorRecipe("oilsands_ore_overworld_9", "gtceu:raw_oilsands", "9x gtceu:oilsands_ore", "overworld");
    addDimensionalRiftExtractorRecipe("graphite_ore_overworld_9", "gtceu:raw_graphite", "9x gtceu:graphite_ore", "overworld");
    addDimensionalRiftExtractorRecipe("diamond_ore_overworld_9", "gtceu:raw_diamond", "9x gtceu:diamond_ore", "overworld");
    addDimensionalRiftExtractorRecipe("garnierite_ore_overworld_9", "gtceu:raw_garnierite", "9x gtceu:garnierite_ore", "overworld");
    addDimensionalRiftExtractorRecipe("nickel_ore_overworld_9", "gtceu:raw_nickel", "9x gtceu:nickel_ore", "overworld");
    addDimensionalRiftExtractorRecipe("cobaltite_ore_overworld_9", "gtceu:raw_cobaltite", "9x gtceu:cobaltite_ore", "overworld");

    addDimensionalRiftExtractorRecipe("tetrahedrite_ore_nether_9", "gtceu:raw_tetrahedrite", "9x gtceu:tetrahedrite_ore", "the_nether");
  addDimensionalRiftExtractorRecipe("copper_ore_nether_9", "minecraft:raw_copper", "9x minecraft:copper_ore", "the_nether");
  addDimensionalRiftExtractorRecipe("stibnite_ore_nether_9", "gtceu:raw_stibnite", "9x gtceu:stibnite_ore", "the_nether");
  addDimensionalRiftExtractorRecipe("bastnasite_ore_nether_9", "gtceu:raw_bastnasite", "9x gtceu:bastnasite_ore", "the_nether");
  addDimensionalRiftExtractorRecipe("molybdenum_ore_nether_9", "gtceu:raw_molybdenum", "9x gtceu:molybdenum_ore", "the_nether");
  addDimensionalRiftExtractorRecipe("neodymium_ore_nether_9", "gtceu:raw_neodymium", "9x gtceu:neodymium_ore", "the_nether");
  addDimensionalRiftExtractorRecipe("monazite_ore_nether_9", "gtceu:raw_monazite", "9x gtceu:monazite_ore", "the_nether");
  addDimensionalRiftExtractorRecipe("redstone_ore_nether_9", "gtceu:raw_redstone", "9x gtceu:redstone_ore", "the_nether");
  addDimensionalRiftExtractorRecipe("ruby_ore_nether_9", "gtceu:raw_ruby", "9x gtceu:ruby_ore", "the_nether");
  addDimensionalRiftExtractorRecipe("cinnabar_ore_nether_9", "gtceu:raw_cinnabar", "9x gtceu:cinnabar_ore", "the_nether");
  addDimensionalRiftExtractorRecipe("saltpeter_ore_nether_9", "gtceu:raw_saltpeter", "9x gtceu:saltpeter_ore", "the_nether");
  addDimensionalRiftExtractorRecipe("diatomite_ore_nether_9", "gtceu:raw_diatomite", "9x gtceu:diatomite_ore", "the_nether");
  addDimensionalRiftExtractorRecipe("electrotine_ore_nether_9", "gtceu:raw_electrotine", "9x gtceu:electrotine_ore", "the_nether");
  addDimensionalRiftExtractorRecipe("alunite_ore_nether_9", "gtceu:raw_alunite", "9x gtceu:alunite_ore", "the_nether");
  addDimensionalRiftExtractorRecipe("beryllium_ore_nether_9", "gtceu:raw_beryllium", "9x gtceu:beryllium_ore", "the_nether");
  addDimensionalRiftExtractorRecipe("emerald_ore_nether_9", "gtceu:raw_emerald", "9x gtceu:emerald_ore", "the_nether");
  addDimensionalRiftExtractorRecipe("grossular_ore_nether_9", "gtceu:raw_grossular", "9x gtceu:grossular_ore", "the_nether");
  addDimensionalRiftExtractorRecipe("pyrolusite_ore_nether_9", "gtceu:raw_pyrolusite", "9x gtceu:pyrolusite_ore", "the_nether");
  addDimensionalRiftExtractorRecipe("tantalite_ore_nether_9", "gtceu:raw_tantalite", "9x gtceu:tantalite_ore", "the_nether");
  addDimensionalRiftExtractorRecipe("wulfenite_ore_nether_9", "gtceu:raw_wulfenite", "9x gtceu:wulfenite_ore", "the_nether");
  addDimensionalRiftExtractorRecipe("molybdenite_ore_nether_9", "gtceu:raw_molybdenite", "9x gtceu:molybdenite_ore", "the_nether");
  addDimensionalRiftExtractorRecipe("molybdenum_ore_nether_9_2", "gtceu:raw_molybdenum", "9x gtceu:molybdenum_ore", "the_nether");
  addDimensionalRiftExtractorRecipe("powellite_ore_nether_9", "gtceu:raw_powellite", "9x gtceu:powellite_ore", "the_nether");
  addDimensionalRiftExtractorRecipe("goethite_ore_nether_9", "gtceu:raw_goethite", "9x gtceu:goethite_ore", "the_nether");
  addDimensionalRiftExtractorRecipe("yellow_limonite_ore_nether_9", "gtceu:raw_yellow_limonite", "9x gtceu:yellow_limonite_ore", "the_nether");
  addDimensionalRiftExtractorRecipe("hematite_ore_nether_9", "gtceu:raw_hematite", "9x gtceu:hematite_ore", "the_nether");
  addDimensionalRiftExtractorRecipe("gold_ore_nether_9", "minecraft:raw_gold", "9x minecraft:gold_ore", "the_nether");
  addDimensionalRiftExtractorRecipe("quartzite_ore_nether_9", "gtceu:raw_quartzite", "9x gtceu:quartzite_ore", "the_nether");
  addDimensionalRiftExtractorRecipe("certus_quartz_ore_nether_9", "gtceu:raw_certus_quartz", "9x gtceu:netherrack_certus_quartz_ore", "the_nether");

  // End Recipes with 9 output ore
  addDimensionalRiftExtractorRecipe("magnetite_ore_end_9", "gtceu:raw_magnetite", "9x gtceu:magnetite_ore", "the_end");
  addDimensionalRiftExtractorRecipe("bauxite_ore_end_9", "gtceu:raw_bauxite", "9x gtceu:bauxite_ore", "the_end");
  addDimensionalRiftExtractorRecipe("bornite_ore_end_9", "gtceu:raw_bornite", "9x gtceu:bornite_ore", "the_end");
  addDimensionalRiftExtractorRecipe("scheelite_ore_end_9", "gtceu:raw_scheelite", "9x gtceu:scheelite_ore", "the_end");
  addDimensionalRiftExtractorRecipe("pitchblende_ore_end_9", "gtceu:raw_pitchblende", "9x gtceu:pitchblende_ore", "the_end");
  addDimensionalRiftExtractorRecipe("naquadah_ore_end_9", "gtceu:raw_naquadah", "9x gtceu:naquadah_ore", "the_end");

});