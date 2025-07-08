ServerEvents.recipes(phoenix => {
    // Import GTValues if not already imported in this script
    const GTValues = Java.loadClass('com.gregtechceu.gtceu.api.GTValues');
   phoenix.recipes.gtceu.simulated_colony('water_bee')
       .notConsumable((Item.of('productivebees:bee_cage', {
    entity: "productivebees:configurable_bee",
    name: "Water Bee",
    type: "productivebees:water"
})).weakNBT())
        .notConsumable("minecraft:salmon")
        .inputFluids("gtceu:sugar_water 100") 
        .itemOutputs("16x minecraft:salmon")
        .duration(400) 
        .EUt(GTValues.VA[GTValues.IV]/2)
             
        phoenix.recipes.gtceu.apis_progenitor('diamond_bee')
        .itemInputs("2x gtceu:raw_diamond_block") 
             .notConsumable((Item.of('productivebees:bee_cage', {
    entity: "productivebees:configurable_bee",
    type: "productivebees:redstone"
})).weakNBT())
     .notConsumable((Item.of('productivebees:bee_cage', {
    entity: "productivebees:configurable_bee",
    type: "productivebees:emerald"
})).weakNBT())
       .itemOutputs((Item.of('productivebees:bee_cage', {
    entity: "productivebees:configurable_bee",
    type: "productivebees:diamond"
})).weakNBT())
        .duration(100) 
        .EUt(GTValues.VA[GTValues.IV]/2)
        phoenix.recipes.gtceu.centrifuge('impure_honey_purification')
        .notConsumable("gtceu:fluid_filter")
        .inputFluids("gtceu:impure_honey 100") 
        .outputFluids("productivebees:honey 75")
        .itemOutputs("1x gtceu:wax_dust")
        .duration(40) 
        .EUt(GTValues.VA[GTValues.IV]/2)
        phoenix.recipes.gtceu.mixer('melting_catalyst')
        .itemInputs("2x gtceu:carbon_dust", "1x minecraft:glowstone_dust") 
        .circuit(4)
        .inputFluids("minecraft:water 2500", "gtceu:naphtha 250") 
        .outputFluids("gtceu:melting_catalyst 2500")
        .duration(100) 
        .EUt(GTValues.VA[GTValues.EV]/2)
    // Consolidated list of bee materials.
    // DEFINED HERE to ensure it's accessible throughout this recipe script.
    const BEE_MATERIAL_TYPES = [
        "pitchblende", "copper", "lepidolite", "experience", "arcane", "cinnabar", "topaz",
        "amethyst", "blazing", "prismarine", "sculk", "realgar", "rune", "pyrope", "zinc", "tin",
        "diamond", "iron", "fluorite", "warped", "brown_shroom", "scheelite", "frosty", "ruby",
        "red_shroom", "sapphire", "stibnite", "opal", "withered", "cheese", "lapis", "electrotine", "constantan", "redstone",
        "skeletal", "zombie", "silky", "niter", "slimy", "coal", "ilmenite", "silicon", "galena",
        "menril", "crystalline", "sodalite", "gold", "obsidian", "cobaltite", "bauxite", "rocked", "supa", "desh", "crimson", "silver", "infinity", "tungstate",
        "emerald", "tricalcium_phosphate", "spacial", "arcane_crystal", "magmatic", "nickel", "fluix", "malachite",
        "lead", "invar", "sticky_resin"
    ];

    function makeBeeCombRecipe({
        id,
        bee,
        pollinationBlock,
        combCount,
        EUt,
        duration,
        outputComb, // optional
        customDisplayName // optional, for display name override
    }) {
        const beeName = bee.charAt(0).toUpperCase() + bee.slice(1).replace(/_/g, ' ');
        const inputItem = Item.of('productivebees:bee_cage', `{type:"productivebees:${bee}", entity: "productivebees:configurable_bee"}`);
        let output;
        if (outputComb) {
            output = Item.of(outputComb).withCount(combCount);
        } else {
            let nbt = `{EntityTag:{type:"productivebees:${bee}"}}`;
            output = Item.of('productivebees:configurable_honeycomb', nbt).withCount(combCount);
            if (customDisplayName) {
                output = output.withName(customDisplayName);
            }
        }

        phoenix.recipes.gtceu.simulated_colony(id)
            .EUt(EUt)
            .duration(duration)
            .notConsumable((inputItem).withCount(1).weakNBT())
            .notConsumable(pollinationBlock)
            .inputFluids("gtceu:sugar_water 100")
            .itemInputs("kubejs:honey_comb_base")
            .itemOutputs(output);
    }

    // Define pollination blocks per bee
    const beePollinationBlocks = {
        amethyst: Item.of('minecraft:amethyst_block'),
        diamond: Item.of('minecraft:diamond_block'),
        gold: Item.of('minecraft:gold_block'),
        lapis: Item.of('minecraft:lapis_block'),
        emerald: Item.of('minecraft:emerald_block'),
        copper: Item.of('minecraft:copper_block'),
        pitchblende: Item.of('gtceu:raw_pitchblende_block'),
        lepidolite: Item.of('gtceu:raw_lepidolite_block'),
        experience: Item.of("minecraft:bookshelf"),
        arcane: Item.of("ars_nouveau:source_gem_block"),
        cinnabar: Item.of('gtceu:raw_cinnabar_block'),
        topaz: Item.of('gtceu:raw_topaz_block'),
        blazing: Item.of("minecraft:magma_block"),
        prismarine: Item.of('minecraft:prismarine'),
        sculk: Item.of("minecraft:sculk"),
        realgar: Item.of("gtceu:raw_realgar_block"),
        rune: Item.of("forbidden_arcanus:rune_block"),
        pyrope: Item.of("gtceu:raw_pyrope_block"),
        zinc: Item.of('gtceu:zinc_block'),
        tin: Item.of('gtceu:tin_block'),
        iron: Item.of('minecraft:iron_block'),
        fluorite: Item.of('gtceu:raw_fluorite_block'),
        warped: Item.of('minecraft:warped_nylium'),
        brown_shroom: Item.of('minecraft:brown_mushroom_block'),
        scheelite: Item.of('gtceu:raw_scheelite_block'),
        frosty: Item.of('minecraft:snow_block'),
        ruby: Item.of('gtceu:raw_ruby_block'),
        red_shroom: Item.of('minecraft:red_mushroom_block'),
        sapphire: Item.of('gtceu:raw_sapphire_block'),
        stibnite: Item.of('gtceu:raw_stibnite_block'),
        opal: Item.of('gtceu:raw_opal_block'),
        withered: Item.of('minecraft:wither_rose'),
        cheese: Item.of('ad_astra:cheese_block'),
        electrotine: Item.of('gtceu:raw_electrotine_block'),
        constantan: Item.of('thermal:constantan_block'),
        redstone: Item.of('minecraft:redstone_block'),
        skeletal: Item.of('minecraft:bone_block'),
        zombie: Item.of('minecraft:rotten_flesh'),
        silky: Item.of('minecraft:string'),
        niter: Item.of('thermal:niter_block'),
        slimy: Item.of('minecraft:slime_block'),
        coal: Item.of('minecraft:coal_block'),
        ilmenite: Item.of('gtceu:raw_ilmenite_block'),
        silicon: Item.of('gtceu:silicon_block'),
        galena: Item.of('gtceu:raw_galena_block'),
        menril: Item.of('integrateddynamics:crystalized_menril_block'),
        crystalline: Item.of('minecraft:quartz_block'),
        sodalite: Item.of('gtceu:raw_sodalite_block'),
        obsidian: Item.of('minecraft:obsidian'),
        cobaltite: Item.of('gtceu:raw_cobaltite_block'),
        bauxite: Item.of('gtceu:raw_bauxite_block'),
        rocked: Item.of('gtceu:raw_rock_salt_block'),
        supa: Item.of('sfm:cable'),
        desh: Item.of('ad_astra:desh_block'),
        crimson: Item.of('minecraft:crimson_nylium'),
        silver: Item.of('gtceu:raw_silver_block'),
        infinity: Item.of('enderio:grains_of_infinity'),
        tungstate: Item.of('gtceu:raw_tungstate_block'),
        tricalcium_phosphate: Item.of('gtceu:raw_tricalcium_phosphate_block'),
        spacial: Item.of('gtceu:raw_certus_quartz_block'),
        arcane_crystal: Item.of('forbidden_arcanus:arcane_crystal_block'),
        magmatic: Item.of('minecraft:magma_cream'),
        nickel: Item.of('gtceu:nickel_block'),
        fluix: Item.of('ae2:fluix_block'),
        malachite: Item.of('gtceu:raw_malachite_block'),
        lead: Item.of('gtceu:raw_lead_block'),
        invar: Item.of('gtceu:invar_block'),
        sticky_resin: Item.of('gtceu:sticky_resin')
        // Add more bee-specific pollination blocks as needed
    };

    // Add all IV bees comb recipes
    BEE_MATERIAL_TYPES.forEach(bee => {
        makeBeeCombRecipe({
            id: `kubejs:gtceu/simulated_colony/${bee}`,
            bee: bee,
            pollinationBlock: beePollinationBlocks[bee],
            combCount: 1,
            EUt: 6128, // IV tier
            duration: 2400
        });
    });

    // Specific Bee Comb Recipes (if not covered by the generic loop)
    makeBeeCombRecipe({
        id: 'kubejs:gtceu/simulated_colony/ghostly_bee',
        bee: 'unique_bee', // If unique_bee is not in BEE_MATERIAL_TYPES, this is needed
        pollinationBlock: Item.of('minecraft:ghast_tear'),
        outputComb: 'productivebees:honeycomb_ghostly',
        combCount: 1,
        EUt: GTValues.VA[GTValues.IV],
        duration: 2200
    });
    makeBeeCombRecipe({
        id: 'kubejs:gtceu/simulated_colony/sugarbag_bee',
        bee: 'sugarbag',
        pollinationBlock: Item.of('minecraft:sugar_cane'),
        outputComb: 'productivebees:sugarbag_honeycomb',
        combCount: 1,
        EUt: GTValues.VA[GTValues.IV],
        duration: 2200
    });
    makeBeeCombRecipe({
        id: 'kubejs:gtceu/simulated_colony/rancher_bee',
        bee: 'rancher_bee',
        pollinationBlock: Item.of('minecraft:milk_bucket'),
        outputComb: 'productivebees:honeycomb_milky',
        combCount: 1,
        EUt: GTValues.VA[GTValues.IV],
        duration: 2200
    });
    makeBeeCombRecipe({
        id: 'kubejs:gtceu/simulated_colony/creebee',
        bee: 'creebee',
        pollinationBlock: Item.of('minecraft:tnt'),
        outputComb: 'productivebees:honeycomb_powdery',
        combCount: 1,
        EUt: GTValues.VA[GTValues.IV],
        duration: 2200
    });

    function addLumberBeeRecipes() {
        const bee = 'lumber';
        const logTypes = [
            { log: 'minecraft:oak_log', pollination: Item.of('minecraft:oak_log') },
            { log: 'minecraft:spruce_log', pollination: Item.of('minecraft:spruce_log') },
            { log: 'minecraft:birch_log', pollination: Item.of('minecraft:birch_log') },
            { log: 'minecraft:jungle_log', pollination: Item.of('minecraft:jungle_log') },
            { log: 'minecraft:acacia_log', pollination: Item.of('minecraft:acacia_log') },
            { log: 'minecraft:dark_oak_log', pollination: Item.of('minecraft:dark_oak_log') },
            { log: 'minecraft:mangrove_log', pollination: Item.of('minecraft:mangrove_log') },
            { log: 'minecraft:cherry_log', pollination: Item.of('minecraft:cherry_log') },
            { log: 'minecraft:crimson_stem', pollination: Item.of('minecraft:crimson_stem') },
            { log: 'gtceu:rubber_log', pollination: Item.of('gtceu:rubber_log') },
            { log: 'forbidden_arcanus:edelwood_log', pollination: Item.of('forbidden_arcanus:edelwood_log') },
            { log: 'forbidden_arcanus:aurum_log', pollination: Item.of('forbidden_arcanus:aurum_log') },
            { log: 'minecraft:warped_stem', pollination: Item.of('minecraft:warped_stem') },
            // Ars Nouveau wood types
            { log: 'ars_nouveau:red_archwood_log', pollination: Item.of('ars_nouveau:red_archwood_log') },
            { log: 'ars_nouveau:blue_archwood_log', pollination: Item.of('ars_nouveau:blue_archwood_log') },
            { log: 'ars_nouveau:green_archwood_log', pollination: Item.of('ars_nouveau:green_archwood_log') },
            { log: 'ars_nouveau:purple_archwood_log', pollination: Item.of('ars_nouveau:purple_archwood_log') }
        ];
        logTypes.forEach(type => {
            phoenix.recipes.gtceu.simulated_colony(`kubejs:gtceu/simulated_colony/lumber_${type.log.replace(':', '_')}`)
                .EUt(GTValues.VA[GTValues.IV])
                .duration(660)
                .notConsumable(IngredientHelper.weakNBT(Item.of('productivebees:bee_cage', `{type:"productivebees:${bee}", entity: "productivebees:configurable_bee"}`).withName('Lumber Bee Cage')).withCount(1))
                .notConsumable(type.pollination)
                .inputFluids("gtceu:sugar_water 100")
                .itemOutputs(Item.of(type.log).withCount(64));
        });
    }
    addLumberBeeRecipes();

    function addQuarryBeeRecipes() {
        const bee = 'quarry';
        const stoneTypes = [
            { stone: 'minecraft:stone', pollination: Item.of('minecraft:stone') },
            { stone: 'minecraft:cobblestone', pollination: Item.of('minecraft:cobblestone') },
            { stone: 'minecraft:andesite', pollination: Item.of('minecraft:andesite') },
            { stone: 'minecraft:diorite', pollination: Item.of('minecraft:diorite') },
            { stone: 'minecraft:granite', pollination: Item.of('minecraft:granite') },
            { stone: 'minecraft:deepslate', pollination: Item.of('minecraft:deepslate') },
            { stone: 'minecraft:tuff', pollination: Item.of('minecraft:tuff') },
            { stone: 'minecraft:calcite', pollination: Item.of('minecraft:calcite') },
            { stone: 'minecraft:basalt', pollination: Item.of('minecraft:basalt') },
            { stone: 'minecraft:smooth_basalt', pollination: Item.of('minecraft:smooth_basalt') },
            { stone: 'minecraft:blackstone', pollination: Item.of('minecraft:blackstone') },
            { stone: 'minecraft:end_stone', pollination: Item.of('minecraft:end_stone') },
            { stone: 'minecraft:sandstone', pollination: Item.of('minecraft:sandstone') },
            { stone: 'minecraft:red_sandstone', pollination: Item.of('minecraft:red_sandstone') },
            { stone: 'forbidden_arcanus:darkstone', pollination: Item.of('forbidden_arcanus:darkstone') },
        ];
        stoneTypes.forEach(type => {
            phoenix.recipes.gtceu.simulated_colony(`kubejs:gtceu/simulated_colony/quarry_${type.stone.replace(':', '_')}`)
                .EUt(GTValues.VA[GTValues.IV])
                .duration(660)
                .notConsumable(IngredientHelper.weakNBT(Item.of('productivebees:bee_cage', `{type:"productivebees:${bee}", entity: "productivebees:configurable_bee"}`).withName('Quarry Bee Cage')).withCount(1))
                .notConsumable(type.pollination)
                .inputFluids("gtceu:sugar_water 100")
                .itemOutputs(Item.of(type.stone).withCount(64));
        });
    }
    addQuarryBeeRecipes();

    // Define constant values for Impure Honey Fluid and Pollen Concentrate
    const IMPURE_HONEY_FLUID_AMOUNT = 1000; // Example amount, adjust as needed
    const IMPURE_HONEY_FLUID_ID = 'gtceu:impure_honey';

    // Assuming 'pollen_concentrate_fluid' is a fluid. If it's an item, change the ID and recipe type.
    const POLLEN_CONCENTRATE_ID = 'gtceu:pollen_concentrate_fluid';
    const POLLEN_CONCENTRATE_AMOUNT = 750; // Example amount, adjust as needed

    // Recipe for the Comb Decanter
    function makeCombDecantingRecipe({
        id,
        bee,
        EUt,
        duration,
        rawWaxDustId // This will be the specific raw wax dust for each bee
    }) {
        // The input comb always has special NBT based on the bee type
        let inputNBT = `{EntityTag:{type:"productivebees:${bee}"}}`;
        let inputComb = Item.of('productivebees:configurable_honeycomb', inputNBT).withCount(1);

        // Fluid output: Impure Honey Fluid and Pollen Concentrate
        const outputFluids = [
            { fluid: IMPURE_HONEY_FLUID_ID, amount: IMPURE_HONEY_FLUID_AMOUNT },
            { fluid: POLLEN_CONCENTRATE_ID, amount: POLLEN_CONCENTRATE_AMOUNT }
        ];

        // Item Outputs: Raw Wax Dust (specific to bee) and Honey Comb Base
        const outputItems = [
            Item.of(rawWaxDustId).withCount(4),
            Item.of("kubejs:honey_comb_base")
        ];

        phoenix.recipes.gtceu.comb_decanting(id)
            .EUt(EUt)
            .duration(duration)
            .itemInputs(IngredientHelper.weakNBT(inputComb)) // Use IngredientHelper.weakNBT for NBT matching
            .itemOutputs(outputItems)
            .outputFluids(outputFluids);
    }

    // Dynamically generate the raw wax dust IDs based on the GTCEu material creation pattern
    const beeRawWaxDusts = {};
    BEE_MATERIAL_TYPES.forEach(materialName => {
        beeRawWaxDusts[materialName] = `gtceu:raw_${materialName}_wax_dust`;
    });

    BEE_MATERIAL_TYPES.forEach(bee => {
        const rawWaxDustItem = beeRawWaxDusts[bee]; // Get the specific raw wax dust ID for this bee

        makeCombDecantingRecipe({
            id: `kubejs:gtceu/decanting/${bee}`,
            bee: bee, // The 'bee' argument is used to construct the NBT for the input comb
            EUt: 4000, // IV tier
            duration: 400,
            rawWaxDustId: rawWaxDustItem // Pass the specific raw wax dust ID
        });
    });

    // --- NEW FUNCTION: Raw Wax Processing Recipe ---
    // Takes raw_X_wax_dust, melting_catalyst (fluid), outputs honeyed_X (fluid)
  
    const MELTING_CATALYST_FLUID_ID = 'gtceu:melting_catalyst';
    const MELTING_CATALYST_AMOUNT = 10; // Example amount for melting catalyst input

    function makeRawWaxProcessingRecipe({
        id,
        materialName, // Corrected from 'bee' for clarity, as it refers to the material
        EUt,
        duration,
        inputRawWaxDustAmount // How much raw wax dust is consumed
    }) {
        const inputItem = `gtceu:raw_${materialName}_wax_dust`;
        const outputFluid = `gtceu:honeyed_${materialName}`;
        const outputFluidAmount = 500; // Example: 500mB of honeyed fluid per processed dust

        // Using 'centrifuge' machine for this separation/processing
        // Consider if 'mixer' or another machine type might be more appropriate based on your pack's logic.
        phoenix.recipes.gtceu.brewery(id)
            .EUt(EUt)
            .duration(duration)
            .itemInputs(`${inputRawWaxDustAmount}x ${inputItem}`) // Input raw wax dust
            .inputFluids(`${MELTING_CATALYST_FLUID_ID} ${MELTING_CATALYST_AMOUNT}`) // Melting catalyst input
            .outputFluids(`${outputFluid} ${outputFluidAmount}`); // Honeyed material as fluid output
    }

    // Generate Raw Wax Processing Recipes for all materials
    BEE_MATERIAL_TYPES.forEach(material => { // Using the consistent BEE_MATERIAL_TYPES list
        makeRawWaxProcessingRecipe({
            id: `kubejs:gtceu/wax_processing/${material}`, // Unique ID for each recipe
            materialName: material,
            EUt: 6128, // Example EUt, adjust as needed
            duration: 400, // Example duration, adjust as needed
            inputRawWaxDustAmount: 1 // Consumes 1 raw wax dust
        });
    });
    // --- NEW FUNCTION: Honeyed Fluid to Final Ore Item Recipe ---

    const FINAL_ORE_RECIPE_HONEY_OUTPUT_AMOUNT = 250; // Constant honey fluid output

    // Define the specific item output for each honeyed material
    const finalOreItemOutputs = {
        // Vanilla Ores / GTCEu Raw Ores (prefer GTCEu raw if exists, then vanilla raw, then vanilla block if no raw)
       pitchblende: Item.of('gtceu:raw_pitchblende', 4),
        copper: Item.of('gtceu:raw_copper', 4),
        lepidolite: Item.of('gtceu:raw_lepidolite', 4),
        cinnabar: Item.of('gtceu:raw_cinnabar', 4),
        topaz: Item.of('gtceu:raw_topaz', 4),
        amethyst: Item.of('gtceu:raw_amethyst', 4), // Already 4, keep
        realgar: Item.of('gtceu:raw_realgar', 4),
        pyrope: Item.of('gtceu:raw_pyrope', 4),
        zinc: Item.of('gtceu:zinc_ingot', 4),
        tin: Item.of('gtceu:raw_tin', 4),
        diamond: Item.of('gtceu:raw_diamond', 4),
        iron: Item.of('gtceu:raw_iron', 4),
        fluorite: Item.of('gtceu:raw_fluorite', 4),
        scheelite: Item.of('gtceu:raw_scheelite', 4),
        ruby: Item.of('gtceu:raw_ruby', 4),
        sapphire: Item.of('gtceu:raw_sapphire', 4),
        stibnite: Item.of('gtceu:raw_stibnite', 4),
        opal: Item.of('gtceu:raw_opal', 4),
        lapis: Item.of('gtceu:lapis_ore', 4),
        electrotine: Item.of('gtceu:raw_electrotine', 4),
        coal: Item.of('gtceu:coal_ore', 4),
        ilmenite: Item.of('gtceu:raw_ilmenite', 4),
        silicon: Item.of('gtceu:silicon_dust', 4),
        galena: Item.of('gtceu:raw_galena', 4),
        gold: Item.of('gtceu:raw_gold', 4),
        cobaltite: Item.of('gtceu:raw_cobaltite', 4),
        bauxite: Item.of('gtceu:raw_bauxite', 4),
        silver: Item.of('gtceu:raw_silver', 4),
        tungstate: Item.of('gtceu:raw_tungstate', 4),
        emerald: Item.of('gtceu:raw_emerald', 4),
        tricalcium_phosphate: Item.of('gtceu:raw_tricalcium_phosphate', 4),
        lead: Item.of('gtceu:raw_lead', 4),
        malachite: Item.of('gtceu:raw_malachite', 4),

        // Other materials (non-ore type outputs)
        experience: Item.of('minecraft:experience_bottle', 4),
        arcane: Item.of('ars_nouveau:source_gem', 4),
        blazing: Item.of('minecraft:blaze_powder', 4), // Already 4, keep
        prismarine: Item.of('minecraft:prismarine_shard', 4), // Already 4, keep
        sculk: Item.of('minecraft:sculk', 4),
        rune: Item.of('forbidden_arcanus:rune', 4),
        warped: Item.of('minecraft:warped_wart_block', 4),
        brown_shroom: Item.of('minecraft:brown_mushroom_block', 4), // Changed from 32 to 4
        frosty: Item.of('minecraft:snowball', 4), // Changed from 32 to 4
        red_shroom: Item.of('minecraft:red_mushroom_block', 4), // Changed from 16 to 4
        withered: Item.of('minecraft:wither_rose', 4), // Changed from 2 to 4
        cheese: Item.of('ad_astra:cheese', 4), // Already 4, keep
        constantan: Item.of('thermal:constantan_ingot', 4), // Changed from 2 to 4
        redstone: Item.of('minecraft:redstone', 4), // Changed from 8 to 4
        skeletal: Item.of('minecraft:bone', 4), // Changed from 16 to 4
        zombie: Item.of('minecraft:rotten_flesh', 4), // Changed from 16 to 4
        silky: Item.of('minecraft:string', 4), // Changed from 32 to 4
        niter: Item.of('thermal:niter_dust', 4), // Changed from 32 to 4
        slimy: Item.of('minecraft:slime_ball', 4), // Changed from 16 to 4
        menril: Item.of('integrateddynamics:menril_log', 4), // Changed from 32 to 4
        crystalline: Item.of('minecraft:quartz', 4), // Already 4, keep
        sodalite: Item.of('gtceu:raw_sodalite', 4), // Already 4, keep
        obsidian: Item.of('minecraft:obsidian', 4), // Changed from 8 to 4
        rocked: Item.of('gtceu:raw_rock_salt', 4), // Already 4, keep
        supa: Item.of('sfm:cable', 4), // Changed from 1 to 4
        desh: Item.of('ad_astra:raw_desh', 4), // Already 4, keep
        crimson: Item.of('minecraft:crimson_fungus', 4),
        infinity: Item.of('enderio:grains_of_infinity', 4),
        spacial: Item.of('ae2:certus_quartz_crystal', 4),
        arcane_crystal: Item.of('forbidden_arcanus:arcane_crystal', 4),
        magmatic: Item.of('minecraft:magma_block', 4),
        nickel: Item.of('gtceu:raw_nickel', 4),
        fluix: Item.of('ae2:fluix_crystal', 4),
        invar: Item.of('gtceu:invar_ingot', 4),
        sticky_resin: Item.of('gtceu:sticky_resin', 4)
        // Add more specific mappings as needed for other BEE_MATERIAL_TYPES
    };

    function makeHoneyedFluidProcessingRecipe({
        id,
        materialName,
        EUt,
        duration,
        outputItem // The specific item to output for this material
    }) {
        const inputHoneyedFluid = `gtceu:honeyed_${materialName}`;

        phoenix.recipes.gtceu.centrifuge(id)
            .EUt(EUt)
            .duration(duration)
            .inputFluids(`${inputHoneyedFluid} 500`) // Takes 500mB of honeyed material fluid
            .outputFluids(`${IMPURE_HONEY_FLUID_ID} ${FINAL_ORE_RECIPE_HONEY_OUTPUT_AMOUNT}`) // Outputs 500mB of impure honey
            .itemOutputs(outputItem); // Outputs the specific ore/item
    }

    // Generate Honeyed Fluid Processing Recipes for all materials
    BEE_MATERIAL_TYPES.forEach(material => {
        // Ensure there's a defined output for every material
        if (finalOreItemOutputs[material]) {
            makeHoneyedFluidProcessingRecipe({
                id: `kubejs:gtceu/honeyed_fluid_processing/${material}`,
                materialName: material,
                EUt: 6128, // Example EUt, adjust as needed (IV tier)
                duration: 400, // Example duration, adjust as needed
                outputItem: finalOreItemOutputs[material] // Get the specific output item from the map
            });
        } else {
            console.warn(`[KubeJS] No final ore item defined for honeyed_fluid_processing of material: ${material}`);
        }
    });
// --- Helper Function: Converts "Some Bee Name" to "some_bee_name" ---
    function toBeeId(name) {
        return name.toLowerCase().replace(/\s+/g, '_').replace(/'/g, '');
    }

    // --- Core Function: Apis Progenitor Transformation Recipe Generator ---
    function makeApisProgenitorTransformationRecipe({
        id,
        outputBeeType,
        inputBeeType,
        itemInput,
        fluidInput,
        duration,
        EUt
    }) {
        const inputBeeCage = Item.of('productivebees:bee_cage', {
            entity: "productivebees:configurable_bee",
            type: `productivebees:${inputBeeType}`
        }).weakNBT();

        const outputBeeCage = Item.of('productivebees:bee_cage', {
            entity: "productivebees:configurable_bee",
            type: `productivebees:${outputBeeType}`
        });

        // Start creating the Apis Progenitor recipe
        const recipe = phoenix.recipes.gtceu.apis_progenitor(id)
            .EUt(EUt)
            .duration(duration)
            .itemInputs(itemInput) // Correct
            .notConsumable(inputBeeCage);

        // Conditionally add fluid input using .inputFluids
        if (fluidInput) {
            recipe.inputFluids(fluidInput); // Correct
        }

        recipe.itemOutputs(outputBeeCage); // CORRECTED: Now uses .itemOutputs as per your example!

        // console.log(`Generated Apis Progenitor recipe: ${outputBeeType} from ${inputBeeType} + ${itemInput}${fluidInput ? ` + ${fluidInput}` : ''}`);
    }

    // --- Recipe Data Definition (All input bees are 'diamond', all fluids are 'gtceu:epoxy' for testing) ---
    // Remember to change 'inputBee' and 'fluid' back to your desired values after testing!
    const beeRecipeData = [
        // --- Core GregTech Metals & Gems ---
        { outputBee: 'copper', inputBee: 'diamond', item: '2x gtceu:raw_copper_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'tin', inputBee: 'diamond', item: '2x gtceu:raw_tin_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'zinc', inputBee: 'diamond', item: '2x gtceu:raw_zinc_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'iron', inputBee: 'diamond', item: '2x gtceu:raw_iron_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'gold', inputBee: 'diamond', item: '2x gtceu:raw_gold_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'lead', inputBee: 'diamond', item: '2x gtceu:raw_lead_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'silver', inputBee: 'diamond', item: '2x gtceu:raw_silver_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'nickel', inputBee: 'diamond', item: '2x gtceu:raw_nickel_block', fluid: '250 gtceu:epoxy' },

        { outputBee: 'redstone', inputBee: 'diamond', item: '2x minecraft:redstone_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'lapis', inputBee: 'diamond', item: '2x minecraft:lapis_lazuli_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'diamond', inputBee: 'diamond', item: '2x gtceu:raw_diamond_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'emerald', inputBee: 'diamond', item: '2x gtceu:raw_emerald_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'coal', inputBee: 'diamond', item: '2x gtceu:coal_block', fluid: '250 gtceu:epoxy' },

        // --- Alloys & Later Metals ---
        { outputBee: 'constantan', inputBee: 'diamond', item: '2x gtceu:constantan_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'electrotine', inputBee: 'diamond', item: '2x gtceu:electrotine_dust', fluid: '250 gtceu:epoxy' },
        { outputBee: 'invar', inputBee: 'diamond', item: '2x gtceu:invar_block', fluid: '250 gtceu:epoxy' },

        // --- More Gems & Minerals ---
        { outputBee: 'sapphire', inputBee: 'diamond', item: '2x gtceu:raw_sapphire_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'ruby', inputBee: 'diamond', item: '2x gtceu:raw_ruby_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'amethyst', inputBee: 'diamond', item: '2x gtceu:raw_amethyst_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'topaz', inputBee: 'diamond', item: '2x gtceu:raw_topaz_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'fluorite', inputBee: 'diamond', item: '2x gtceu:raw_fluorite_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'cinnabar', inputBee: 'diamond', item: '2x gtceu:raw_cinnabar_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'realgar', inputBee: 'diamond', item: '2x gtceu:raw_realgar_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'stibnite', inputBee: 'diamond', item: '2x gtceu:raw_stibnite_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'opal', inputBee: 'diamond', item: '2x gtceu:raw_opal_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'pyrope', inputBee: 'diamond', item: '2x gtceu:raw_pyrope_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'scheelite', inputBee: 'diamond', item: '2x gtceu:raw_scheelite_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'cobaltite', inputBee: 'diamond', item: '2x gtceu:raw_cobaltite_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'bauxite', inputBee: 'diamond', item: '2x gtceu:raw_bauxite_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'tungstate', inputBee: 'diamond', item: '2x gtceu:raw_tungstate_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'desh', inputBee: 'diamond', item: '2x gtceu:raw_desh_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'tricalcium_phosphate', inputBee: 'diamond', item: '2x gtceu:raw_tricalcium_phosphate_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'pitchblende', inputBee: 'diamond', item: '2x gtceu:raw_pitchblende_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'galena', inputBee: 'diamond', item: '2x gtceu:raw_galena_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'illmenite', inputBee: 'diamond', item: '2x gtceu:raw_illmenite_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'niter', inputBee: 'diamond', item: '2x gtceu:niter_dust', fluid: '250 gtceu:epoxy' },
        { outputBee: 'malachite', inputBee: 'diamond', item: '2x gtceu:raw_malachite_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'amber', inputBee: 'diamond', item: '1x gtceu:sticky_resin', fluid: '250 gtceu:epoxy' },

        // --- Thematic/Environmental Bees ---
        { outputBee: 'water', inputBee: 'diamond', item: '1x minecraft:water_bucket', fluid: '250 gtceu:epoxy' },
        { outputBee: 'obsidian', inputBee: 'diamond', item: '1x minecraft:obsidian', fluid: '250 gtceu:epoxy' },
        { outputBee: 'blazing', inputBee: 'diamond', item: '1x minecraft:blaze_rod', fluid: '250 gtceu:epoxy' },
        { outputBee: 'prismarine', inputBee: 'diamond', item: '1x minecraft:prismarine_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'sculk', inputBee: 'diamond', item: '1x minecraft:sculk_catalyst', fluid: '250 gtceu:epoxy' },
        { outputBee: 'sponge', inputBee: 'diamond', item: '1x minecraft:sponge', fluid: '250 gtceu:epoxy' },
        { outputBee: 'frosty', inputBee: 'diamond', item: '1x minecraft:blue_ice', fluid: '250 gtceu:epoxy' },
        { outputBee: 'slimy', inputBee: 'diamond', item: '1x minecraft:slime_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'menril', inputBee: 'diamond', item: '1x integrateddynamics:menril_log', fluid: '250 gtceu:epoxy' },
        { outputBee: 'salty', inputBee: 'diamond', item: '1x minecraft:salt', fluid: '250 gtceu:epoxy' },
        { outputBee: 'steamy', inputBee: 'diamond', item: '1x gtceu:steel_turbine_blade', fluid: '250 gtceu:epoxy' },
        { outputBee: 'reed', inputBee: 'diamond', item: '1x minecraft:sugar_cane', fluid: '250 gtceu:epoxy' },
        { outputBee: 'sweat', inputBee: 'diamond', item: '1x minecraft:cactus', fluid: '250 gtceu:epoxy' },
        { outputBee: 'bumble', inputBee: 'diamond', item: '1x minecraft:dandelion', fluid: '250 gtceu:epoxy' },

        // --- Shroombees ---
        { outputBee: 'warped_shroom', inputBee: 'diamond', item: '1x minecraft:warped_fungus', fluid: '250 gtceu:epoxy' },
        { outputBee: 'brown_shroom', inputBee: 'diamond', item: '1x minecraft:brown_mushroom_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'red_shroom', inputBee: 'diamond', item: '1x minecraft:red_mushroom_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'crimson_shroom', inputBee: 'diamond', item: '1x minecraft:crimson_fungus', fluid: '250 gtceu:epoxy' },

        // --- Mob/Utility Bees ---
        { outputBee: 'exp', inputBee: 'diamond', item: '1x minecraft:experience_bottle', fluid: '250 gtceu:epoxy' },
        { outputBee: 'arcane', inputBee: 'diamond', item: '1x minecraft:ender_pearl', fluid: '250 gtceu:epoxy' },
        { outputBee: 'rune', inputBee: 'diamond', item: '1x minecraft:enchanted_book', fluid: '250 gtceu:epoxy' },
        { outputBee: 'awakened', inputBee: 'diamond', item: '1x minecraft:crying_obsidian', fluid: '250 gtceu:epoxy' },
        { outputBee: 'withered', inputBee: 'diamond', item: '1x minecraft:wither_skeleton_skull', fluid: '250 gtceu:epoxy' },
        { outputBee: 'sugarbag', inputBee: 'diamond', item: '1x minecraft:honey_bottle', fluid: '250 gtceu:epoxy' },
        { outputBee: 'skeleton', inputBee: 'diamond', item: '1x minecraft:bone_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'zombie', inputBee: 'diamond', item: '1x minecraft:rotten_flesh', fluid: '250 gtceu:epoxy' },
        { outputBee: 'silky', inputBee: 'diamond', item: '1x minecraft:string', fluid: '250 gtceu:epoxy' },
        { outputBee: 'rancher', inputBee: 'diamond', item: '1x minecraft:hay_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'lumber', inputBee: 'diamond', item: '1x minecraft:oak_log', fluid: '250 gtceu:epoxy' },
        { outputBee: 'quarry', inputBee: 'diamond', item: '1x minecraft:diamond_pickaxe', fluid: '250 gtceu:epoxy' },
        { outputBee: 'ghostly', inputBee: 'diamond', item: '1x minecraft:phantom_membrane', fluid: '250 gtceu:epoxy' },
        { outputBee: 'lepodolite', inputBee: 'diamond', item: '2x gtceu:raw_lepodolite_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'magmatic', inputBee: 'diamond', item: '1x minecraft:magma_block', fluid: '250 gtceu:epoxy' },
        { outputBee: 'spatial', inputBee: 'diamond', item: '1x ae2:spatial_cell_2m', fluid: '250 gtceu:epoxy' },
        { outputBee: 'arcanus', inputBee: 'diamond', item: '1x arcanus:magic_essence', fluid: '250 gtceu:epoxy' },

        // --- Unique/Playful Bees ---
        { outputBee: 'baz', inputBee: 'diamond', item: '1x minecraft:totem_of_undying', fluid: '250 gtceu:epoxy' },
        { outputBee: 'sussy', inputBee: 'diamond', item: '1x minecraft:dark_oak_log', fluid: '250 gtceu:epoxy' },
        { outputBee: 'cheesy', inputBee: 'diamond', item: '1x minecraft:yellow_dye', fluid: '250 gtceu:epoxy' },
        { outputBee: 'biz', inputBee: 'diamond', item: '1x minecraft:golden_carrot', fluid: '250 gtceu:epoxy' },
        { outputBee: 'bitz', inputBee: 'diamond', item: '1x minecraft:cookie', fluid: '250 gtceu:epoxy' },
        { outputBee: 'rocked', inputBee: 'diamond', item: '1x minecraft:cobblestone', fluid: '250 gtceu:epoxy' },
        { outputBee: 'supa', inputBee: 'diamond', item: '1x minecraft:sugar', fluid: '250 gtceu:epoxy' },
        { outputBee: 'pepto_beesmol', inputBee: 'diamond', item: '1x minecraft:pink_dye', fluid: '250 gtceu:epoxy' },

        // --- Special Material Bee (Silicon as Dust!) ---
        { outputBee: 'silicon', inputBee: 'diamond', item: '2x gtceu:silicon_dust', fluid: '250 gtceu:epoxy' },

        // --- Applied Energistics Integration ---
        { outputBee: 'fluix', inputBee: 'diamond', item: '1x ae2:fluix_crystal', fluid: '250 gtceu:epoxy' },
    ];

    // --- Generate Recipes from Data ---
    const BASE_DURATION = 100;
    const BASE_EUT = GTValues.VA[GTValues.IV] / 2;

    beeRecipeData.forEach(data => {
        makeApisProgenitorTransformationRecipe({
            id: `kubejs:gtceu/apis_progenitor/${data.outputBee}_transformation`,
            outputBeeType: data.outputBee,
            inputBeeType: data.inputBee,
            itemInput: data.item,
            fluidInput: data.fluid,
            duration: BASE_DURATION,
            EUt: BASE_EUT
        });
    });
});