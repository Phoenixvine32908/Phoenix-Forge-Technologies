ServerEvents.recipes(phoenix => {
    // Import GTValues if not already imported in this script
   
  //recipe broken throws error in log.

    phoenix.recipes.gtceu.simulated_colony('water_bee')
       .notConsumable((Item.of('productivebees:bee_cage', {
    entity: "productivebees:configurable_bee",
    name: "Water Bee",
    type: "productivebees:water"
})).weakNBT())
        .notConsumable("minecraft:salmon")
        .inputFluids("gtceu:sugar_water 100")
        .itemOutputs("16x minecraft:salmon")
        .duration(600)
        .EUt(GTValues.VA[GTValues.IV]/2)
         phoenix.recipes.gtceu.simulated_colony('rancher')
       .notConsumable((Item.of('productivebees:bee_cage', {
    entity: "productivebees:rancher_bee",
    name: "Rancher Bee",
})).weakNBT())
        .notConsumable("minecraft:milk_bucket")
        .inputFluids("gtceu:sugar_water 100")
        .itemOutputs('productivebees:honeycomb_milky')
        .duration(400)
        .EUt(GTValues.VA[GTValues.IV]/2)

        phoenix.recipes.gtceu.centrifuge('impure_honey_purification')
        .notConsumable("gtceu:fluid_filter")
        .inputFluids("gtceu:impure_honey 1000")
        .outputFluids("productivebees:honey 750")
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


    // --- Helper Functions ---
    function toBeeId(name) {
        return name.toLowerCase().replace(/\s+/g, '_').replace(/'/g, '');
    }

    function formatBeeNameForDisplay(beeId) {
        if (!beeId) return '';
        return String(beeId).replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }

    // --- Define custom display names for input bee cages ---
    // The key is the bee's registry ID (e.g., 'iron'), the value is the desired display name.
   const inputBeeCageDisplayNames = {
    "iron": "Iron Bee", // Adjusted based on your example, use carefully
    "diamond": "Diamond Bee",
    "apatite": "Apatite Bee",
    "copper": "Copper Bee",
    "emerald": "Emerald Bee",
    "gold": "Gold Bee",
    "redstone": "Redstone Bee",
    "lapis": "Lapis Bee",
    "zinc": "Zinc Bee",
    "tin": "Tin Bee",
    "lead": "Lead Bee",
    "silver": "Silver Bee",
    "nickel": "Nickel Bee",
    "coal": "Coal Bee",
    "constantan": "Constantan Bee",
    "electrotine": "Electrotine Bee",
    "invar": "Invar Bee",
    "sapphire": "Sapphire Bee",
    "ruby": "RuBee",
    "amethyst": "Amethyst Bee",
    "topaz": "Topaz Bee",
    "fluorite": "Fluorite Bee",
    "cinnabar": "Cinnabar Bee",
    "realgar": "Realgar Bee",
    "stibnite": "Stibnite Bee",
    "opal": "Opal Bee",
    "pyrope": "Pyrope Bee",
    "scheelite": "Scheelite Bee",
    "cobaltite": "Cobaltite Bee",
      "cobalt": "Cobalt Bee",
    "bauxite": "Bauxite Bee",
    "tungstate": "Tungstate Bee",
    "desh": "Desh Bee",
    "steel": "Steel Bee",
    "tricalcium_phosphate": "Tricalcium Phosphate Bee",
    "pitchblende": "Pitchblende Bee",
    "galena": "Galena Bee",
    "ilmenite": "Ilmenite Bee",
    "niter": "Niter Bee",
    "malachite": "Malachite Bee",
    "obsidian": "Obsidian Bee",
    "blazing": "Blazing Bee",
    "prismarine": "Prismarine Bee",
    "sculk": "Sculk Bee",
    "sponge": "Sponge Bee",
    "frosty": "Frosty Bee",
    "slimy": "Slimy Bee",
    "menril": "Menril Bee",
    "salty": "Salty Bee",
    "steamy": "Steamy Bee",
    "warped": "Warped Shroombee",
    "brown_shroom": "Brown Shroombee",
    "red_shroom": "Red Shroombee",
    "crimson": "Crimson Shroombee",
    "experience": "Experience Bee",
    "arcane_crystal": "Arcanus Bee",
    "rune": "Rune Bee",
    "withered": "Withered Bee",
    "skeletal": "Skeletal Bee",
    "zombie": "ZomBee",
    "silky": "Silky Bee",
    "ghostly": "Ghostly Bee",
    "lepidolite": "Lepidolite Bee",
    "magmatic": "Magmatic Bee",
    "spacial": "Spatial Bee",
    "arcane": "Arcane Bee",
    "cheese": "CheesyB",
    "rocked": "Rocked Bee",
    "super_factory": "Super Factory Bee",
    "silicon": "Silicon Bee",
    "fluix": "Fluix Bee"
    // Ensure all bees used in your recipes are defined here
};


    // --- MODIFIED: makeApisProgenitorTransformationRecipe function ---
function makeApisProgenitorTransformationRecipe(recipes) {
    recipes.forEach(recipeConfig => {
        const {
            id,
            outputBeeType,
            inputBeeType,
            itemInput,
            fluidInput,
            duration,
            EUt
        } = recipeConfig;

        // Construct NBT for input bee cage, adding 'name' if defined
        const inputBeeNbt = {
            entity: "productivebees:configurable_bee",
            type: `productivebees:${inputBeeType}`
        };
        if (inputBeeCageDisplayNames[inputBeeType]) {
            inputBeeNbt.name = inputBeeCageDisplayNames[inputBeeType];
        }

        const inputBeeCage = Item.of('productivebees:bee_cage', inputBeeNbt).weakNBT();

        // Construct NBT for output bee cage, adding 'name' if defined
        const outputBeeNbt = {
            entity: "productivebees:configurable_bee",
            type: `productivebees:${outputBeeType}`
        };
        if (inputBeeCageDisplayNames[outputBeeType]) { // Use inputBeeCageDisplayNames for consistency
            outputBeeNbt.name = inputBeeCageDisplayNames[outputBeeType];
        }
        const outputBeeCage = Item.of('productivebees:bee_cage', outputBeeNbt);

        const recipe = phoenix.recipes.gtceu.apis_progenitor(id)
            .EUt(EUt)
            .duration(duration)
            .itemInputs(itemInput)
            .itemInputs(inputBeeCage);

        if (fluidInput) {
            recipe.inputFluids(fluidInput);
        }

        recipe.itemOutputs(outputBeeCage);
    });
}

    function addLumberBeeRecipes() {
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
                .duration(1200)
                .notConsumable(IngredientHelper.weakNBT(Item.of('productivebees:bee_cage', {entity: "productivebees:lumber_bee",name: "Lumber Bee"})))
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
                .duration(1200)
                .notConsumable(IngredientHelper.weakNBT(Item.of('productivebees:bee_cage', {entity: "productivebees:quarry_bee",name: "Quarry Bee"})))
                .notConsumable(type.pollination)
                .inputFluids("gtceu:sugar_water 100")
                .itemOutputs(Item.of(type.stone).withCount(64));
        });
    }
    addQuarryBeeRecipes();
    // --- MODIFIED: makeBeeCombRecipe function ---
    function makeBeeCombRecipe({
        id,
        bee,
        pollinationBlock,
        combCount,
        EUt,
        duration,
        outputComb,
        customDisplayName
    }) {
        // Construct NBT for input bee cage, adding 'name' if defined
        const inputBeeNbt = {
            type:`productivebees:${bee}`,
            entity: "productivebees:configurable_bee"
        };
        if (inputBeeCageDisplayNames[bee]) {
            inputBeeNbt.name = inputBeeCageDisplayNames[bee];
        }

        const inputItem = Item.of('productivebees:bee_cage', inputBeeNbt);

        let output;
        if (outputComb) {
            output = Item.of(outputComb).withCount(combCount);

        } else {
            let nbt = `{EntityTag:{type:"productivebees:${bee}"}}`;
            output = Item.of('productivebees:configurable_honeycomb', nbt).withCount(combCount);


        }

        phoenix.recipes.gtceu.simulated_colony(id)
            .EUt(EUt)
            .duration(duration)
            .notConsumable(inputItem.withCount(1).weakNBT())
            .itemInputs(pollinationBlock)
            .inputFluids("gtceu:sugar_water 100")
            .itemInputs("kubejs:honey_comb_base")
            .itemOutputs(output);
    }

    // Define pollination blocks per bee (from your original code)
    const beePollinationBlocks = {
        amethyst: Item.of('minecraft:amethyst_block'),
        diamond: Item.of('minecraft:diamond_block'),
        steel: Item.of('gtceu:steel_block'),
        salty: Item.of('gtceu:salt_block'),
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
        warped_shroom: Item.of('minecraft:warped_nylium'),
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
        sodalite: Item.of('gtceu:raw_sodalite_block'),
        obsidian: Item.of('minecraft:obsidian'),
        cobaltite: Item.of('gtceu:raw_cobaltite_block'),
        cobalt: Item.of('gtceu:cobalt_block'),
        bauxite: Item.of('gtceu:raw_bauxite_block'),
        rocked: Item.of('gtceu:raw_rock_salt_block'),
        super_factory: Item.of('sfm:cable'),
        desh: Item.of('ad_astra:desh_block'),
        crimson_shroom: Item.of('minecraft:crimson_nylium'),
        silver: Item.of('gtceu:raw_silver_block'),
        infinity: Item.of('enderio:grains_of_infinity'),
        tungstate: Item.of('gtceu:raw_tungstate_block'),
        tricalcium_phosphate: Item.of('gtceu:raw_tricalcium_phosphate_block'),
        spatial: Item.of('gtceu:raw_certus_quartz_block'),
        arcane_crystal: Item.of('forbidden_arcanus:arcane_crystal_block'),
        magmatic: Item.of('minecraft:magma_cream'),
        nickel: Item.of('gtceu:nickel_block'),
        fluix: Item.of('ae2:fluix_block'),
        invar: Item.of('gtceu:invar_block'),
        sticky_resin: Item.of('gtceu:sticky_resin'),
    };

    const BEE_MATERIAL_TYPES = Object.keys(inputBeeCageDisplayNames); // Dynamically use keys from the map

    BEE_MATERIAL_TYPES.forEach(bee => {
        if (!beePollinationBlocks[bee]) {
            console.warn(`[KubeJS] No pollination block defined for bee type: ${bee}. Skipping recipe.`);
            return;
        }

        makeBeeCombRecipe({
            id: `kubejs:gtceu/simulated_colony/${bee}_comb_generation`,
            bee: bee,
            pollinationBlock: beePollinationBlocks[bee],
            combCount: 1,
            EUt: 6128,
            duration: 3600
        });
    });

   const apisProgenitorRecipes = [
        {
            id: 'kubejs:gtceu/apis_progenitor/diamond_from_redstone_emerald',
            outputBeeType: 'diamond',
            inputBeeType: 'ender',
            itemInput: '4x minecraft:lapis_block',
            fluidInput: null, // No fluid input for this specific recipe
            duration: 100,
            EUt: GTValues.VA[GTValues.IV] / 2
             
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/emerald_from_lapis_redstone',
            outputBeeType: 'emerald',
            inputBeeType: 'diamond',
            itemInput: '4x minecraft:emerald_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV]
        },
         {
            id: 'kubejs:gtceu/apis_progenitor/pitchblende',
            outputBeeType: 'pitchblende',
            inputBeeType: 'diamond',
            itemInput: '4x gtceu:raw_pitchblende_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV]
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/copper_from_water',
            outputBeeType: 'copper',
            inputBeeType: 'crystalline',
            itemInput: '4x minecraft:copper_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            //crystalline bee + copper block
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/exp_from_water',
            outputBeeType: 'experience',
            inputBeeType: 'emerald',
            itemInput: '64x crazyae2addons:xp_shard',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            //emerald bee + lapis block
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/arcane_from_water',
            outputBeeType: 'arcane',
            inputBeeType: 'diamond',
            itemInput: '32x ars_nouveau:source_gem_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            //diamond bee + source gem block
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/cinnabar_from_water',
            outputBeeType: 'cinnabar',
            inputBeeType: 'diamond',
            itemInput: '4x gtceu:raw_cinnabar_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // diamond bee + cinnabar block
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/topaz_from_water',
            outputBeeType: 'topaz',
            inputBeeType: 'diamond',
            itemInput: '4x gtceu:raw_topaz_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            //diamond bee + topaz block
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/amethyst_from_water',
            outputBeeType: 'amethyst',
            inputBeeType: 'diamond',
            itemInput: '4x gtceu:raw_amethyst_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // diamond bee + raw amethyst block
        },

        {
            id: 'kubejs:gtceu/apis_progenitor/realgar_from_water',
            outputBeeType: 'realgar',
            inputBeeType: 'diamond',
            itemInput: '4x gtceu:realgar_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            //diamond bee + realgar block
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/rune_from_water',
            outputBeeType: 'rune',
            inputBeeType: 'diamond',
            itemInput: '4x forbidden_arcanus:rune_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // diamond bee + rune block
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/pyrope_from_water',
            outputBeeType: 'pyrope',
            inputBeeType: 'diamond',
            itemInput: '4x gtceu:raw_pyrope_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            //diamond bee + pyrope block
        },
       
        {
            id: 'kubejs:gtceu/apis_progenitor/tin_from_water',
            outputBeeType: 'tin',
            inputBeeType: 'crystalline',
            itemInput: '4x gtceu:tin_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            //crysalline + tin block
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/iron_from_water',
            outputBeeType: 'iron',
            inputBeeType: 'crystalline',
            itemInput: '4x minecraft:iron_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // crysallite bee + iron block
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/fluorite_from_water',
            outputBeeType: 'fluorite',
            inputBeeType: 'diamond',
            itemInput: '4x gtceu:raw_fluorite_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // diamond bee + flourine block
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/warped_shroom_from_water',
            outputBeeType: 'warped',
            inputBeeType: 'brown_shroombee',
            itemInput: '4x minecraft:warped_fungus',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // brown shroom bee + warped fungus
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/scheelite_from_water',
            outputBeeType: 'scheelite',
            inputBeeType: 'diamond',
            itemInput: '4x gtceu:raw_scheelite_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2

        },
        {
            id: 'kubejs:gtceu/apis_progenitor/frosty_from_water',
            outputBeeType: 'frosty',
            inputBeeType: 'water',
            itemInput: '1x minecraft:blue_ice',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            //water bee + blue ice
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/ruby_from_water',
            outputBeeType: 'ruby',
            inputBeeType: 'diamond',
            itemInput: '4x gtceu:ruby_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            //diamond bee + ruby block
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/red_shroom_from_water',
            outputBeeType: 'red_shroom',
            inputBeeType: 'brown_shroombee',
            itemInput: '4x minecraft:red_mushroom',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            //brown shroombee + crimson fungus
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/sapphire_from_water',
            outputBeeType: 'sapphire',
            inputBeeType: 'diamond',
            itemInput: '4x gtceu:sapphire_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // diamond bee + sapphire block
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/stibnite_from_water',
            outputBeeType: 'stibnite',
            inputBeeType: 'cinnabar',
            itemInput: '4x gtceu:raw_stibnite_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // cinnabar bee + raw stibnite block
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/opal_from_water',
            outputBeeType: 'opal',
            inputBeeType: 'diamond',
            itemInput: '4x gtceu:raw_opal_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            //diamond bee + opal bloc
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/withered_from_water',
            outputBeeType: 'withered',
            inputBeeType: 'skeletal',
            itemInput: '1x minecraft:wither_rose',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // skeletal bee + wither rose 
        },
         {
            id: 'kubejs:gtceu/apis_progenitor/zombee',
            outputBeeType: 'zombie',
            inputBeeType: 'skeletal',
            itemInput: '256x minecraft:rotten_flesh',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // skeletal bee + rotten flesh
        },
         {
            id: 'kubejs:gtceu/apis_progenitor/skeletal_from_water',
            outputBeeType: 'skeletal',
            inputBeeType: 'crystalline',
            itemInput: '256x minecraft:bone',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // skeletal bee + wither rose 
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/cheesy_from_water',
            outputBeeType: 'cheese',
            inputBeeType: 'diamond',
            itemInput: '4x ad_astra:cheese_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            //diamond bee + cheese block
        },
    
        {
            id: 'kubejs:gtceu/apis_progenitor/electrotine_from_water',
            outputBeeType: 'electrotine',
            inputBeeType: 'redstone',
            itemInput: '4x gtceu:electrum_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            //redstone bee + electrum block
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/constantan_from_water',
            outputBeeType: 'constantan',
            inputBeeType: 'crystalline',
            itemInput: '4x thermal:constantan_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // crystalline bee + constantan block
        },

        {
            id: 'kubejs:gtceu/apis_progenitor/ilmenite_from_water',
            outputBeeType: 'ilmenite',
            inputBeeType: 'iron',
            itemInput: '12x gtceu:rutile_dust',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            //iron bee + rutile
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/galena_from_water',
            outputBeeType: 'galena',
            inputBeeType: 'zinc',
            itemInput: '4x gtceu:lead_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            //zinc bee + lead block
        },
      
        {
            id: 'kubejs:gtceu/apis_progenitor/sodalite_from_water',
            outputBeeType: 'sodalite',
            inputBeeType: 'diamond',
            itemInput: '4x gtceu:raw_sodalite_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            //diamond bee + sodalite block
        },

        {
            id: 'kubejs:gtceu/apis_progenitor/gold_from_water', // Already exists, but adding for completeness
            outputBeeType: 'gold',
            inputBeeType: 'crystalline',
            itemInput: '4x minecraft:gold_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            //crysatalline + gold block
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/cobaltite_from_water',
            outputBeeType: 'cobaltite',
            inputBeeType: 'cobalt',
            itemInput: '4x gtceu:raw_sulfur_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // cobalt bee + raw sulfur block
        },
          {
            id: 'kubejs:gtceu/apis_progenitor/sponge',
            outputBeeType: 'sponge',
            inputBeeType: 'water',
            itemInput: '4x minecraft:sponge',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // cobalt bee + raw sulfur block
        },
          {
            id: 'kubejs:gtceu/apis_progenitor/ghostly',
            outputBeeType: 'ghostly',
            inputBeeType: 'cobalt',
            itemInput: '32x minecraft:ghast_tear',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // cobalt bee + raw sulfur block
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/cobalt_from_water',
            outputBeeType: 'cobalt',
            inputBeeType: 'diamond',
            itemInput: '4x gtceu:cobalt_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // cobalt bee + raw sulfur block
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/bauxite_from_water',
            outputBeeType: 'bauxite',
            inputBeeType: 'nickel',
            itemInput: '4x gtceu:raw_bauxite_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // nickel bee + bauxite block 
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/salty_from_water',
            outputBeeType: 'salty',
            inputBeeType: 'water',
            itemInput: '4x gtceu:salt_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // water bee + salt block
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/rocked_from_water',
            outputBeeType: 'rocked',
            inputBeeType: 'water',
            itemInput: '4x gtceu:rock_salt_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // water bee + rock salt block
        },
      
        {
            id: 'kubejs:gtceu/apis_progenitor/steamy_from_water',
            outputBeeType: 'steamy',
            inputBeeType: 'water',
            itemInput: '4x minecraft:coal_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // water bee + coal block
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/supa_from_water',
            outputBeeType: 'super_factory',
            inputBeeType: 'diamond',
            itemInput: '32x sfm:cable',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // diamond bee + sfm cable
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/desh_from_water',
            outputBeeType: 'desh',
            inputBeeType: 'steel',
            itemInput: '4x ad_astra:desh_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            //steel bee + desh block
        },
           {
            id: 'kubejs:gtceu/apis_progenitor/steel_from_water',
            outputBeeType: 'steel',
            inputBeeType: 'iron',
            itemInput: '64x gtceu:steel_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            //steel bee + desh block
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/crimson_shroom_from_water',
            outputBeeType: 'crimson',
            inputBeeType: 'brown_shroombee',
            itemInput: '4x minecraft:crimson_fungus',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // brown shroombee + crimson fungus
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/silver_from_water',
            outputBeeType: 'silver',
            inputBeeType: 'iron',
            itemInput: '4x gtceu:raw_silver_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            //iron bee + silver block
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/infinity_from_water',
            outputBeeType: 'infinity',
            inputBeeType: 'blazing',
            itemInput: '32x minecraft:obsidian',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            //blazzing bee + obsidian
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/tungstate_from_water',
            outputBeeType: 'tungstate',
            inputBeeType: 'silver',
            itemInput: '32x gtceu:raw_tungstate_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            //silver bee + tungstate
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/tricalcium_phosphate_from_water',
            outputBeeType: 'tricalcium_phosphate',
            inputBeeType: 'apatite',
            itemInput: '4x gtceu:raw_tricalcium_phosphate_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            //apatite bee + ore block
        },
         {
            id: 'kubejs:gtceu/apis_progenitor/apatite_from_water',
            outputBeeType: 'apatite',
            inputBeeType: 'diamond',
            itemInput: '4x gtceu:raw_apatite_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            //apatite bee + ore block
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/spatial_from_water',
            outputBeeType: 'spacial',
            inputBeeType: 'crystalline',
            itemInput: '4x gtceu:raw_certus_quartz_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            //crystalline bee + ender
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/arcane_crystal_from_water',
            outputBeeType: 'arcane_crystal',
            inputBeeType: 'diamond',
            itemInput: '4x forbidden_arcanus:arcane_crystal_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            //diamnond bee + arcane crystal block
        },
      
        {
            id: 'kubejs:gtceu/apis_progenitor/fluix_from_water',
            outputBeeType: 'fluix',
            inputBeeType: 'spacial',
            itemInput: '32x ae2:fluix_pearl',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            //spatial bee + fluix pearl
        },
        {
            id: 'kubejs:gtceu/apis_progenitor/malachite_from_water',
            outputBeeType: 'malachite',
            inputBeeType: 'diamond',
            itemInput: '4x gtceu:raw_malachite_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            //diamond bee + malachite block
        },
      
        {
            id: 'kubejs:gtceu/apis_progenitor/invar_from_water',
            outputBeeType: 'invar',
            inputBeeType: 'iron',
            itemInput: '4x gtceu:raw_nickel_block',
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            //nickel block + iron bees

        },
    
    ];
  

    // Call the function with the array of recipes
    makeApisProgenitorTransformationRecipe(apisProgenitorRecipes);

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
            duration: 3600,
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
        const outputFluidAmount = 1000; // Example: 500mB of honeyed fluid per processed dust

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
       cobalt: Item.of('gtceu:cobalt_dust', 4),
       steel: Item.of('gtceu:steel_ingot', 3),
       ghostly: Item.of('minecraft:ghast_tear', 1),
       salty: Item.of('gtceu:raw_salt', 4),
       apatite: Item.of('gtceu:raw_apatite', 4),
       sponge: Item.of('minecraft:sponge', 1),
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
        steel: Item.of('gtceu:steel_ingot', 4),

        coal: Item.of('gtceu:coal_ore', 4),
        ilmenite: Item.of('gtceu:raw_ilmenite', 4),
        silicon: Item.of('gtceu:silicon_ingot', 4),
        galena: Item.of('gtceu:raw_galena', 4),
        gold: Item.of('gtceu:raw_gold', 4),
        cobaltite: Item.of('gtceu:raw_cobaltite', 4),
        cobalt: Item.of('gtceu:cobalt_dust', 1),
        bauxite: Item.of('gtceu:raw_bauxite', 4),
        silver: Item.of('gtceu:raw_silver', 4),
        tungstate: Item.of('gtceu:raw_tungstate', 4),
        emerald: Item.of('gtceu:raw_emerald', 4),
        tricalcium_phosphate: Item.of('gtceu:raw_tricalcium_phosphate', 4),
        lead: Item.of('gtceu:raw_lead', 4),
        malachite: Item.of('gtceu:raw_malachite', 4),

        // Other materials (non-ore type outputs)
        experience: Item.of('crazyae2addons:xp_shard', 32),
        arcane: Item.of('ars_nouveau:source_gem', 4),
        blazing: Item.of('minecraft:blaze_powder', 1), // Already 4, keep
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
        crystalline: Item.of('gtceu:raw_nether_quartz', 4), // Already 4, keep
        sodalite: Item.of('gtceu:raw_sodalite', 4), // Already 4, keep
        obsidian: Item.of('minecraft:obsidian', 4), // Changed from 8 to 4
        rocked: Item.of('gtceu:raw_rock_salt', 4), // Already 4, keep
        super_factory: Item.of('sfm:cable', 4), // Changed from 1 to 4
        desh: Item.of('ad_astra:raw_desh', 9), // Already 4, keep
        crimson: Item.of('minecraft:crimson_fungus', 4),
        infinity: Item.of('enderio:grains_of_infinity', 4),
        spacial: Item.of('ae2:certus_quartz_crystal', 4),
        arcane_crystal: Item.of('forbidden_arcanus:arcane_crystal', 1),
        magmatic: Item.of('minecraft:magma_block', 1),
        nickel: Item.of('gtceu:raw_nickel', 4),
        fluix: Item.of('ae2:fluix_crystal', 4),
        invar: Item.of('gtceu:invar_ingot', 1),
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


});