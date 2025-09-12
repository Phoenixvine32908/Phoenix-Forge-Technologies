/**
Recipes for the bee related multiblocks
 */

ServerEvents.recipes(phoenix => {
    // Import GTValues if not already imported in this script

    // recipe broken throws error in log.

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
        .inputFluids("gtceu:sugar_water 100")
        .itemOutputs("productivebees:honeycomb_milky")
        .duration(400)
        .EUt(GTValues.VA[GTValues.IV] / 2)

    phoenix.recipes.gtceu.centrifuge("impure_honey_purification")
        .notConsumable("gtceu:fluid_filter")
        .inputFluids("gtceu:impure_honey 1000")
        .outputFluids("productivebees:honey 750")
        .itemOutputs("1x gtceu:wax_dust")
        .duration(40)
        .EUt(GTValues.VA[GTValues.IV] / 2)
    phoenix.recipes.gtceu.mixer("melting_catalyst")
        .itemInputs("2x gtceu:carbon_dust", "1x minecraft:glowstone_dust")
        .circuit(4)
        .inputFluids("minecraft:water 2500", "gtceu:naphtha 250")
        .outputFluids("gtceu:melting_catalyst 2500")
        .duration(100)
        .EUt(GTValues.VA[GTValues.EV] / 2)
    // Consolidated list of bee materials.


    // --- Helper Functions ---
    function toBeeId(name) {
        return name.toLowerCase().replace(/\s+/g, "_").replace(/'/g, "");
    }

    function formatBeeNameForDisplay(beeId) {
        if (!beeId) return "";
        return String(beeId).replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase());
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
        "crystalline": "Crystalline Bee",
        "rune": "Rune Bee",
        "withered": "Withered Bee",
        "skeletal": "Skeletal Bee",
        "sticky_resin": "Sticky Resin Bee",
        "zombie": "ZomBee",
        "silicon": "Silicon Bee",
        "silky": "Silky Bee",
        "ghostly": "Ghostly Bee",
        "lepidolite": "Lepidolite Bee",
        "magmatic": "Magmatic Bee",
        "spacial": "Spatial Bee",
        "arcane": "Arcane Bee",
        "cheese": "CheesyB",
        "rocked": "Rocked Bee",
        "super_factory": "Super Factory Bee",
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

            const inputBeeCage = Item.of("productivebees:bee_cage", inputBeeNbt).weakNBT();

            // Construct NBT for output bee cage, adding 'name' if defined
            const outputBeeNbt = {
                entity: "productivebees:configurable_bee",
                type: `productivebees:${outputBeeType}`
            };
            if (inputBeeCageDisplayNames[outputBeeType]) { // Use inputBeeCageDisplayNames for consistency
                outputBeeNbt.name = inputBeeCageDisplayNames[outputBeeType];
            }
            const outputBeeCage = Item.of("productivebees:bee_cage", outputBeeNbt);

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
            { log: "minecraft:oak_log", pollination: Item.of("minecraft:oak_log") },
            { log: "minecraft:spruce_log", pollination: Item.of("minecraft:spruce_log") },
            { log: "minecraft:birch_log", pollination: Item.of("minecraft:birch_log") },
            { log: "minecraft:jungle_log", pollination: Item.of("minecraft:jungle_log") },
            { log: "minecraft:acacia_log", pollination: Item.of("minecraft:acacia_log") },
            { log: "minecraft:dark_oak_log", pollination: Item.of("minecraft:dark_oak_log") },
            { log: "minecraft:mangrove_log", pollination: Item.of("minecraft:mangrove_log") },
            { log: "minecraft:cherry_log", pollination: Item.of("minecraft:cherry_log") },
            { log: "minecraft:crimson_stem", pollination: Item.of("minecraft:crimson_stem") },
            { log: "gtceu:rubber_log", pollination: Item.of("gtceu:rubber_log") },
            { log: "forbidden_arcanus:edelwood_log", pollination: Item.of("forbidden_arcanus:edelwood_log") },
            { log: "forbidden_arcanus:aurum_log", pollination: Item.of("forbidden_arcanus:aurum_log") },
            { log: "minecraft:warped_stem", pollination: Item.of("minecraft:warped_stem") },
            // Ars Nouveau wood types
            { log: "ars_nouveau:red_archwood_log", pollination: Item.of("ars_nouveau:red_archwood_log") },
            { log: "ars_nouveau:blue_archwood_log", pollination: Item.of("ars_nouveau:blue_archwood_log") },
            { log: "ars_nouveau:green_archwood_log", pollination: Item.of("ars_nouveau:green_archwood_log") },
            { log: "ars_nouveau:purple_archwood_log", pollination: Item.of("ars_nouveau:purple_archwood_log") }
        ];
        logTypes.forEach(type => {
            phoenix.recipes.gtceu.simulated_colony(`kubejs:gtceu/simulated_colony/lumber_${type.log.replace(":", "_")}`)
                .EUt(GTValues.VA[GTValues.IV])
                .duration(1200)
                .notConsumable(IngredientHelper.weakNBT(Item.of("productivebees:bee_cage", {entity: "productivebees:lumber_bee",name: "Lumber Bee"})))
                .notConsumable(type.pollination)
                .inputFluids("gtceu:sugar_water 100")
                .itemOutputs(Item.of(type.log).withCount(64));
        });
    }
    addLumberBeeRecipes();

    function addLuVBeeRecipes() {
        const LuVBeeTypes = [
            { luv_bee: "thorium", luVbeeName: "Thorium Bee", pollination: "gtceu:thorium_block", LuVoutputComb: "thorium" },
            { luv_bee: "graphite", luVbeeName: "Graphite Bee", pollination: "gtceu:raw_graphite_block", LuVoutputComb: "graphite" },
            { luv_bee: "sphalerite", luVbeeName: "Sphalerite Bee", pollination: "gtceu:raw_sphalerite_block", LuVoutputComb: "sphalerite" },
            { luv_bee: "netherite", luVbeeName: "Ancient Bee", pollination: "minecraft:ancient_debris", LuVoutputComb: "netherite" },
            { luv_bee: "ender", luVbeeName: "Ender Bee", pollination: "minecraft:end_stone", LuVoutputComb: "ender" },
            { luv_bee: "apatite", luVbeeName: "Apatite Bee", pollination: "gtceu:raw_apatite_block", LuVoutputComb: "apatite" },
            { luv_bee: "acidic", luVbeeName: "Acidic Bee", pollination: "gtceu:sulfuric_acid_bucket", LuVoutputComb: "acidic" },
            { luv_bee: "chromite", luVbeeName: "Chromite Bee", pollination: "gtceu:raw_chromite_block", LuVoutputComb: "chromite" },
            { luv_bee: "pyrolusite", luVbeeName: "Pyrolusite Bee", pollination: "gtceu:raw_pyrolusite_block", LuVoutputComb: "pyrolusite" },
            { luv_bee: "platinum", luVbeeName: "Platinum Bee", pollination: "gtceu:raw_platinum_block", LuVoutputComb: "platinum" },
            { luv_bee: "bismuth", luVbeeName: "Bismuth Bee", pollination: "gtceu:bismuth_block", LuVoutputComb: "bismuth" },
            { luv_bee: "glowing", luVbeeName: "Glowing Bee", pollination: "minecraft:glowstone", LuVoutputComb: "glowing" },
            { luv_bee: "bastnasite", luVbeeName: "Bastnasite Bee", pollination: "gtceu:raw_bastnasite_block", LuVoutputComb: "bastnasite" },
            { luv_bee: "tetrahedrite", luVbeeName: "Tetrahedrite Bee", pollination: "gtceu:raw_tetrahedrite_block", LuVoutputComb: "tetrahedrite" },
            { luv_bee: "sulfur", luVbeeName: "Sulfur Bee", pollination: "gtceu:raw_sulfur_block", LuVoutputComb: "sulfur" },
            { luv_bee: "oilsands", luVbeeName: "Oilsands Bee", pollination: "gtceu:raw_oilsands_block", LuVoutputComb: "oilsands" },
            { luv_bee: "cobalt", luVbeeName: "Cobalt Bee", pollination: "gtceu:raw_cobalt_block", LuVoutputComb: "cobalt" },
            { luv_bee: "tantalite", luVbeeName: "Tantalite Bee", pollination: "gtceu:raw_tantalite_block", LuVoutputComb: "tantalite" },
            { luv_bee: "barite", luVbeeName: "Barite Bee", pollination: "gtceu:raw_barite_block", LuVoutputComb: "barite" },
            { luv_bee: "vanadium_magnetite", luVbeeName: "Vanadium Magnetite Bee", pollination: "gtceu:raw_vanadium_magnetite_block", LuVoutputComb: "vanadium_magnetite" },
            { luv_bee: "draconic", luVbeeName: "Draconic Bee", pollination: "minecraft:dragon_egg", LuVoutputComb: "draconic" },
            { luv_bee: "pyrochlore", luVbeeName: "Pyrochlore Bee", pollination: "gtceu:raw_pyrochlore_block", LuVoutputComb: "pyrochlore" },
            { luv_bee: "voidglass_shard", luVbeeName: "Voidglass Shard Bee", pollination: "gtceu:raw_voidglass_shard_block", LuVoutputComb: "voidglass_shard" },
            { luv_bee: "crystallized_fluxstone", luVbeeName: "Crystallized Fluxstone Bee", pollination: "gtce:raw_crystalized_fluxstone_block", LuVoutputComb: "crystalized_fluxstonee" },
            { luv_bee: "ignisium", luVbeeName: "Ignisium Bee", pollination: "gtceu:raw_ignisium_block", LuVoutputComb: "ignisium" },
            { luv_bee: "sky_steel", luVbeeName: "Sky Steel Bee", pollination: "megacells:sky_steel_block", LuVoutputComb: "sky_steel" }
        ];

        // --- LuV Bee Comb Decanting ---
        function makeLuVCombDecantingRecipe({
            id,
            bee,
            EUt,
            duration,
            rawWaxDustId
        }) {
            let inputNBT = `{EntityTag:{type:"productivebees:${bee}"}}`;
            let inputComb = Item.of("productivebees:configurable_honeycomb", inputNBT).withCount(1);

            // Fluid output: Impure Honey Fluid and Pollen Concentrate (as strings)
            const outputFluids = [
                "gtceu:impure_honey 1000",
                "gtceu:pollen_concentrate_fluid 1000"
            ];

            const outputItems = [
                Item.of(rawWaxDustId).withCount(4),
                Item.of("kubejs:honey_comb_base")
            ];

            phoenix.recipes.gtceu.comb_decanting(id)
                .EUt(EUt)
                .duration(duration)
                .itemInputs(IngredientHelper.weakNBT(inputComb))
                .itemOutputs(outputItems)
                .outputFluids(outputFluids);
        }

        // --- LuV Bee Wax Processing ---
        function makeLuVRawWaxProcessingRecipe({
            id,
            materialName,
            EUt,
            duration,
            inputRawWaxDustAmount
        }) {
            const inputItem = `gtceu:raw_${materialName}_wax_dust`;
            const outputFluid = `gtceu:honeyed_${materialName}`;
            const outputFluidAmount = 1000;

            phoenix.recipes.gtceu.brewery(id)
                .EUt(EUt)
                .duration(duration)
                .itemInputs(`${inputRawWaxDustAmount}x ${inputItem}`)
                .inputFluids("gtceu:melting_catalyst 100")
                .outputFluids(`${outputFluid} ${outputFluidAmount}`);
        }

        // Generate LuV comb decanting and wax processing recipes
        LuVBeeTypes.forEach(type => {
            // Comb Decanting
            makeLuVCombDecantingRecipe({
                id: `kubejs:gtceu/decanting/luv/${type.luv_bee}`,
                bee: type.luv_bee,
                EUt: GTValues.VA[GTValues.LuV],
                duration: 3600,
                rawWaxDustId: `gtceu:raw_${type.luv_bee}_wax_dust`
            });

            // Wax Processing
            makeLuVRawWaxProcessingRecipe({
                id: `kubejs:gtceu/wax_processing/luv/${type.luv_bee}`,
                materialName: type.luv_bee,
                EUt: GTValues.VA[GTValues.LuV],
                duration: 400,
                inputRawWaxDustAmount: 1
            });
        });

        LuVBeeTypes.forEach(type => {
            let LuVoutputNBT = `{EntityTag:{type:"productivebees:${type.LuVoutputComb}"}}`;
            let LuVoutputComb = Item.of("productivebees:configurable_honeycomb", LuVoutputNBT).withCount(1);

            const inputLuVBeeNbt = {
                type:`productivebees:${type.luv_bee}`,
                entity: "productivebees:configurable_bee",
                name: type.luVbeeName
            };

            phoenix.recipes.gtceu.melferious_matrix(`kubejs:gtceu/simulated_colony/quarry_${type.luv_bee.replace(":", "_")}`)
                .EUt(GTValues.VA[GTValues.LuV])
                .duration(1800)
                .notConsumable(IngredientHelper.weakNBT(Item.of("productivebees:bee_cage", inputLuVBeeNbt)))
                .itemInputs("kubejs:honey_comb_base")
                .notConsumable(type.pollination)
                .inputFluids("gtceu:sugar_water 100")
                .itemOutputs(LuVoutputComb.withCount(1));
        });
    }
    addLuVBeeRecipes();


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

        const inputItem = Item.of("productivebees:bee_cage", inputBeeNbt);

        let output;
        if (outputComb) {
            output = Item.of(outputComb).withCount(combCount);

        } else {
            let nbt = `{EntityTag:{type:"productivebees:${bee}"}}`;
            output = Item.of("productivebees:configurable_honeycomb", nbt).withCount(combCount);


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
        amethyst: Item.of("minecraft:amethyst_block"),
        diamond: Item.of("minecraft:diamond_block"),
        steel: Item.of("gtceu:steel_block"),
        salty: Item.of("gtceu:salt_block"),
        gold: Item.of("minecraft:gold_block"),
        lapis: Item.of("minecraft:lapis_block"),
        emerald: Item.of("minecraft:emerald_block"),
        copper: Item.of("minecraft:copper_block"),
        pitchblende: Item.of("gtceu:raw_pitchblende_block"),
        lepidolite: Item.of("gtceu:raw_lepidolite_block"),
        experience: Item.of("minecraft:bookshelf"),
        arcane: Item.of("ars_nouveau:source_gem_block"),
        cinnabar: Item.of("gtceu:raw_cinnabar_block"),
        topaz: Item.of("gtceu:raw_topaz_block"),
        blazing: Item.of("minecraft:magma_block"),
        prismarine: Item.of("minecraft:prismarine"),
        sculk: Item.of("minecraft:sculk"),
        realgar: Item.of("gtceu:raw_realgar_block"),
        rune: Item.of("forbidden_arcanus:rune_block"),
        pyrope: Item.of("gtceu:raw_pyrope_block"),
        zinc: Item.of("gtceu:zinc_block"),
        tin: Item.of("gtceu:tin_block"),
        iron: Item.of("minecraft:iron_block"),
        fluorite: Item.of("gtceu:raw_fluorite_block"),
        warped_shroom: Item.of("minecraft:warped_nylium"),
        brown_shroom: Item.of("minecraft:brown_mushroom_block"),
        scheelite: Item.of("gtceu:raw_scheelite_block"),
        frosty: Item.of("minecraft:snow_block"),
        ruby: Item.of("gtceu:raw_ruby_block"),
        red_shroom: Item.of("minecraft:red_mushroom_block"),
        sapphire: Item.of("gtceu:raw_sapphire_block"),
        stibnite: Item.of("gtceu:raw_stibnite_block"),
        opal: Item.of("gtceu:raw_opal_block"),
        withered: Item.of("minecraft:wither_rose"),
        cheese: Item.of("ad_astra:cheese_block"),
        electrotine: Item.of("gtceu:raw_electrotine_block"),
        constantan: Item.of("thermal:constantan_block"),
        redstone: Item.of("minecraft:redstone_block"),
        skeletal: Item.of("minecraft:bone_block"),
        zombie: Item.of("minecraft:rotten_flesh"),
        silky: Item.of("minecraft:string"),
        niter: Item.of("thermal:niter_block"),
        slimy: Item.of("minecraft:slime_block"),
        coal: Item.of("minecraft:coal_block"),
        ilmenite: Item.of("gtceu:raw_ilmenite_block"),
        silicon: Item.of("gtceu:silicon_block"),
        galena: Item.of("gtceu:raw_galena_block"),
        menril: Item.of("integrateddynamics:crystalized_menril_block"),
        sodalite: Item.of("gtceu:raw_sodalite_block"),
        obsidian: Item.of("minecraft:obsidian"),
        cobaltite: Item.of("gtceu:raw_cobaltite_block"),
        cobalt: Item.of("gtceu:cobalt_block"),
        bauxite: Item.of("gtceu:raw_bauxite_block"),
        rocked: Item.of("gtceu:raw_rock_salt_block"),
        super_factory: Item.of("sfm:cable"),
        desh: Item.of("ad_astra:desh_block"),
        crimson_shroom: Item.of("minecraft:crimson_nylium"),
        silver: Item.of("gtceu:raw_silver_block"),
        infinity: Item.of("enderio:grains_of_infinity"),
        tungstate: Item.of("gtceu:raw_tungstate_block"),
        tricalcium_phosphate: Item.of("gtceu:raw_tricalcium_phosphate_block"),
        spatial: Item.of("gtceu:raw_certus_quartz_block"),
        arcane_crystal: Item.of("forbidden_arcanus:arcane_crystal_block"),
        magmatic: Item.of("minecraft:magma_cream"),
        nickel: Item.of("gtceu:nickel_block"),
        fluix: Item.of("ae2:fluix_block"),
        invar: Item.of("gtceu:invar_block"),
        sticky_resin: Item.of("gtceu:sticky_resin"),
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
            id: "kubejs:gtceu/apis_progenitor/diamond_from_redstone_emerald",
            outputBeeType: "diamond",
            inputBeeType: "ender",
            itemInput: "4x minecraft:lapis_block",
            fluidInput: null, // No fluid input for this specific recipe
            duration: 100,
            EUt: GTValues.VA[GTValues.IV] / 2

        },
        {
            id: "kubejs:gtceu/apis_progenitor/emerald_from_lapis_redstone",
            outputBeeType: "emerald",
            inputBeeType: "diamond",
            itemInput: "4x minecraft:emerald_block",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV]
        },
        {
            id: "kubejs:gtceu/apis_progenitor/pitchblende",
            outputBeeType: "pitchblende",
            inputBeeType: "diamond",
            itemInput: "4x gtceu:raw_pitchblende_block",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV]
        },
        {
            id: "kubejs:gtceu/apis_progenitor/copper_from_water",
            outputBeeType: "copper",
            inputBeeType: "crystalline",
            itemInput: "4x minecraft:copper_block",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // crystalline bee + copper block
        },
        {
            id: "kubejs:gtceu/apis_progenitor/exp_from_water",
            outputBeeType: "experience",
            inputBeeType: "emerald",
            itemInput: "64x crazyae2addons:xp_shard",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // emerald bee + lapis block
        },
        {
            id: "kubejs:gtceu/apis_progenitor/arcane_from_water",
            outputBeeType: "arcane",
            inputBeeType: "diamond",
            itemInput: "32x ars_nouveau:source_gem_block",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // diamond bee + source gem block
        },
        {
            id: "kubejs:gtceu/apis_progenitor/cinnabar_from_water",
            outputBeeType: "cinnabar",
            inputBeeType: "diamond",
            itemInput: "4x gtceu:raw_cinnabar_block",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // diamond bee + cinnabar block
        },
        // --- LuV Bee Apis Progenitor Recipes ---
        {
            id: "kubejs:gtceu/apis_progenitor/thorium_from_water",
            outputBeeType: "thorium",
            inputBeeType: "diamond",
            itemInput: "4x gtceu:thorium_block",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.LuV]
            // diamond bee + thorium block
        },
        {
            id: "kubejs:gtceu/apis_progenitor/graphite_from_water",
            outputBeeType: "graphite",
            inputBeeType: "diamond",
            itemInput: "4x gtceu:raw_graphite_block",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.LuV]
            // diamond bee + graphite block
        },
        {
            id: "kubejs:gtceu/apis_progenitor/sphalerite_from_water",
            outputBeeType: "sphalerite",
            inputBeeType: "diamond",
            itemInput: "4x gtceu:raw_sphalerite_block",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.LuV]
            // diamond bee + sphalerite block
        },
        {
            id: "kubejs:gtceu/apis_progenitor/netherite_from_water",
            outputBeeType: "netherite",
            inputBeeType: "diamond",
            itemInput: "4x minecraft:ancient_debris",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.LuV]
            // diamond bee + ancient debris
        },
        {
            id: "kubejs:gtceu/apis_progenitor/ender_from_water",
            outputBeeType: "ender",
            inputBeeType: "diamond",
            itemInput: "4x minecraft:end_stone",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.LuV]
            // diamond bee + end stone
        },
        {
            id: "kubejs:gtceu/apis_progenitor/apatite_from_water_luv",
            outputBeeType: "apatite",
            inputBeeType: "diamond",
            itemInput: "4x gtceu:raw_apatite_block",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.LuV]
            // diamond bee + apatite block
        },
        {
            id: "kubejs:gtceu/apis_progenitor/acidic_from_water",
            outputBeeType: "acidic",
            inputBeeType: "diamond",
            itemInput: "4x gtceu:sulfuric_acid_bucket",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.LuV]
            // diamond bee + sulfuric acid bucket
        },
        {
            id: "kubejs:gtceu/apis_progenitor/chromite_from_water",
            outputBeeType: "chromite",
            inputBeeType: "diamond",
            itemInput: "4x gtceu:raw_chromite_block",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.LuV]
            // diamond bee + chromite block
        },
        {
            id: "kubejs:gtceu/apis_progenitor/pyrolusite_from_water",
            outputBeeType: "pyrolusite",
            inputBeeType: "diamond",
            itemInput: "4x gtceu:raw_pyrolusite_block",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.LuV]
            // diamond bee + pyrolusite block
        },
        {
            id: "kubejs:gtceu/apis_progenitor/platinum_from_water",
            outputBeeType: "platinum",
            inputBeeType: "diamond",
            itemInput: "4x gtceu:raw_platinum_block",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.LuV]
            // diamond bee + platinum block
        },
        {
            id: "kubejs:gtceu/apis_progenitor/bismuth_from_water",
            outputBeeType: "bismuth",
            inputBeeType: "diamond",
            itemInput: "4x gtceu:bismuth_block",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.LuV]
            // diamond bee + bismuth block
        },
        {
            id: "kubejs:gtceu/apis_progenitor/glowing_from_water",
            outputBeeType: "glowing",
            inputBeeType: "diamond",
            itemInput: "4x minecraft:glowstone",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.LuV]
            // diamond bee + glowstone
        },
        {
            id: "kubejs:gtceu/apis_progenitor/bastnasite_from_water",
            outputBeeType: "bastnasite",
            inputBeeType: "diamond",
            itemInput: "4x gtceu:raw_bastnasite_block",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.LuV]
            // diamond bee + bastnasite block
        },
        {
            id: "kubejs:gtceu/apis_progenitor/tetrahedrite_from_water",
            outputBeeType: "tetrahedrite",
            inputBeeType: "diamond",
            itemInput: "4x gtceu:raw_tetrahedrite_block",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.LuV]
            // diamond bee + tetrahedrite block
        },
        {
            id: "kubejs:gtceu/apis_progenitor/sulfur_from_water",
            outputBeeType: "sulfur",
            inputBeeType: "diamond",
            itemInput: "4x gtceu:raw_sulfur_block",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.LuV]
            // diamond bee + sulfur block
        },
        {
            id: "kubejs:gtceu/apis_progenitor/oilsands_from_water",
            outputBeeType: "oilsands",
            inputBeeType: "diamond",
            itemInput: "4x gtceu:raw_oilsands_block",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.LuV]
            // diamond bee + oilsands block
        },
        {
            id: "kubejs:gtceu/apis_progenitor/cobalt_from_water_luv",
            outputBeeType: "cobalt",
            inputBeeType: "diamond",
            itemInput: "4x gtceu:raw_cobaltite_block",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.LuV]
            // diamond bee + cobalt block
        },
        {
            id: "kubejs:gtceu/apis_progenitor/tantalite_from_water",
            outputBeeType: "tantalite",
            inputBeeType: "diamond",
            itemInput: "4x gtceu:raw_tantalite_block",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.LuV]
            // diamond bee + tantalite block
        },
        {
            id: "kubejs:gtceu/apis_progenitor/barite_from_water",
            outputBeeType: "barite",
            inputBeeType: "diamond",
            itemInput: "4x gtceu:raw_barite_block",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.LuV]
            // diamond bee + barite block
        },
        {
            id: "kubejs:gtceu/apis_progenitor/vanadium_magnetite_from_water",
            outputBeeType: "vanadium_magnetite",
            inputBeeType: "diamond",
            itemInput: "4x gtceu:raw_vanadium_magnetite_block",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.LuV]
            // diamond bee + vanadium magnetite block
        },
        {
            id: "kubejs:gtceu/apis_progenitor/draconic_from_water",
            outputBeeType: "draconic",
            inputBeeType: "diamond",
            itemInput: "1x minecraft:dragon_egg",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.LuV]
            // diamond bee + dragon egg
        },
        {
            id: "kubejs:gtceu/apis_progenitor/pyrochlore_from_water",
            outputBeeType: "pyrochlore",
            inputBeeType: "diamond",
            itemInput: "4x gtceu:raw_pyrochlore_block",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.LuV]
            // diamond bee + pyrochlore block
        },
        {
            id: "kubejs:gtceu/apis_progenitor/voidglass_shard_from_water",
            outputBeeType: "voidglass_shard",
            inputBeeType: "diamond",
            itemInput: "32x gtceu:raw_voidglass_shard_block",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.LuV]
            // diamond bee + voidglass shard block
        },
        {
            id: "kubejs:gtceu/apis_progenitor/crystallized_fluxstone_from_water",
            outputBeeType: "crystallized_fluxstone",
            inputBeeType: "diamond",
            itemInput: "32x gtce:raw_crystalized_fluxstone_block",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.LuV]
            // diamond bee + crystallized fluxstone block
        },
        {
            id: "kubejs:gtceu/apis_progenitor/ignisium_from_water",
            outputBeeType: "ignisium",
            inputBeeType: "diamond",
            itemInput: "32x gtceu:raw_ignisium_block",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.LuV]
            // diamond bee + ignisium block
        },
        {
            id: "kubejs:gtceu/apis_progenitor/sky_steel_from_water",
            outputBeeType: "sky_steel",
            inputBeeType: "diamond",
            itemInput: "32x megacells:sky_steel_block",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.LuV]
            // diamond bee + sky steel block
        },
        // --- End LuV Bee Recipes ---
        // steel bee + desh block
        {
            id: "kubejs:gtceu/apis_progenitor/crimson_shroom_from_water",
            outputBeeType: "crimson",
            inputBeeType: "brown_shroombee",
            itemInput: "4x minecraft:crimson_fungus",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // brown shroombee + crimson fungus
        },
        {
            id: "kubejs:gtceu/apis_progenitor/silver_from_water",
            outputBeeType: "silver",
            inputBeeType: "iron",
            itemInput: "4x gtceu:raw_silver_block",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // iron bee + silver block
        },
        {
            id: "kubejs:gtceu/apis_progenitor/infinity_from_water",
            outputBeeType: "infinity",
            inputBeeType: "blazing",
            itemInput: "32x minecraft:obsidian",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // blazzing bee + obsidian
        },
        {
            id: "kubejs:gtceu/apis_progenitor/tungstate_from_water",
            outputBeeType: "tungstate",
            inputBeeType: "silver",
            itemInput: "32x gtceu:raw_tungstate_block",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // silver bee + tungstate
        },
        {
            id: "kubejs:gtceu/apis_progenitor/tricalcium_phosphate_from_water",
            outputBeeType: "tricalcium_phosphate",
            inputBeeType: "apatite",
            itemInput: "4x gtceu:raw_tricalcium_phosphate_block",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // apatite bee + ore block
        },
        {
            id: "kubejs:gtceu/apis_progenitor/apatite_from_water",
            outputBeeType: "apatite",
            inputBeeType: "diamond",
            itemInput: "4x gtceu:raw_apatite_block",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // apatite bee + ore block
        },
        {
            id: "kubejs:gtceu/apis_progenitor/spatial_from_water",
            outputBeeType: "spacial",
            inputBeeType: "crystalline",
            itemInput: "4x gtceu:raw_certus_quartz_block",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // crystalline bee + ender
        },
        {
            id: "kubejs:gtceu/apis_progenitor/arcane_crystal_from_water",
            outputBeeType: "arcane_crystal",
            inputBeeType: "diamond",
            itemInput: "4x forbidden_arcanus:arcane_crystal_block",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // diamnond bee + arcane crystal block
        },

        {
            id: "kubejs:gtceu/apis_progenitor/fluix_from_water",
            outputBeeType: "fluix",
            inputBeeType: "spacial",
            itemInput: "32x ae2:fluix_pearl",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // spatial bee + fluix pearl
        },
        {
            id: "kubejs:gtceu/apis_progenitor/malachite_from_water",
            outputBeeType: "malachite",
            inputBeeType: "diamond",
            itemInput: "4x gtceu:raw_malachite_block",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // diamond bee + malachite block
        },

        {
            id: "kubejs:gtceu/apis_progenitor/invar_from_water",
            outputBeeType: "invar",
            inputBeeType: "iron",
            itemInput: "4x gtceu:raw_nickel_block",
            fluidInput: null,
            duration: 360,
            EUt: GTValues.VA[GTValues.IV] / 2
            // nickel block + iron bees

        },

    ];


    // Call the function with the array of recipes
    makeApisProgenitorTransformationRecipe(apisProgenitorRecipes);

    // Define constant values for Impure Honey Fluid and Pollen Concentrate
    const IMPURE_HONEY_FLUID_AMOUNT = 1000; // Example amount, adjust as needed
    const IMPURE_HONEY_FLUID_ID = "gtceu:impure_honey";

    // Assuming 'pollen_concentrate_fluid' is a fluid. If it's an item, change the ID and recipe type.
    const POLLEN_CONCENTRATE_ID = "gtceu:pollen_concentrate_fluid";
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
        let inputComb = Item.of("productivebees:configurable_honeycomb", inputNBT).withCount(1);

        // Fluid output: Impure Honey Fluid and Pollen Concentrate (as strings)
        const outputFluids = [
            `${IMPURE_HONEY_FLUID_ID} ${IMPURE_HONEY_FLUID_AMOUNT}`,
            `${POLLEN_CONCENTRATE_ID} ${POLLEN_CONCENTRATE_AMOUNT}`
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

    const MELTING_CATALYST_FLUID_ID = "gtceu:melting_catalyst";
    const MELTING_CATALYST_AMOUNT = 100; // Example amount for melting catalyst input

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
        pitchblende: Item.of("gtceu:raw_pitchblende", 4),
        cobalt: Item.of("gtceu:cobalt_dust", 4),
        steel: Item.of("gtceu:steel_ingot", 3),
        ghostly: Item.of("minecraft:ghast_tear", 1),
        salty: Item.of("gtceu:raw_salt", 4),
        apatite: Item.of("gtceu:raw_apatite", 4),
        sponge: Item.of("minecraft:sponge", 1),
        copper: Item.of("gtceu:raw_copper", 4),
        lepidolite: Item.of("gtceu:raw_lepidolite", 4),
        cinnabar: Item.of("gtceu:raw_cinnabar", 4),
        topaz: Item.of("gtceu:raw_topaz", 4),
        amethyst: Item.of("gtceu:raw_amethyst", 4),
        realgar: Item.of("gtceu:raw_realgar", 4),
        pyrope: Item.of("gtceu:raw_pyrope", 4),
        zinc: Item.of("gtceu:zinc_ingot", 4),
        tin: Item.of("gtceu:raw_tin", 4),
        diamond: Item.of("gtceu:raw_diamond", 4),
        iron: Item.of("gtceu:raw_iron", 4),
        fluorite: Item.of("gtceu:raw_fluorite", 4),
        scheelite: Item.of("gtceu:raw_scheelite", 4),
        ruby: Item.of("gtceu:raw_ruby", 4),
        sapphire: Item.of("gtceu:raw_sapphire", 4),
        stibnite: Item.of("gtceu:raw_stibnite", 4),
        opal: Item.of("gtceu:raw_opal", 4),
        lapis: Item.of("gtceu:raw_lapis", 4),
        electrotine: Item.of("gtceu:raw_electrotine", 4),
        coal: Item.of("gtceu:coal_ore", 4),
        ilmenite: Item.of("gtceu:raw_ilmenite", 4),
        silicon: Item.of("gtceu:silicon_ingot", 4),
        galena: Item.of("gtceu:raw_galena", 4),
        gold: Item.of("gtceu:raw_gold", 4),
        cobaltite: Item.of("gtceu:raw_cobaltite", 4),
        bauxite: Item.of("gtceu:raw_bauxite", 4),
        silver: Item.of("gtceu:raw_silver", 4),
        tungstate: Item.of("gtceu:raw_tungstate", 4),
        emerald: Item.of("gtceu:raw_emerald", 4),
        tricalcium_phosphate: Item.of("gtceu:raw_tricalcium_phosphate", 4),
        lead: Item.of("gtceu:raw_lead", 4),
        malachite: Item.of("gtceu:raw_malachite", 4),

        // Other materials (non-ore type outputs)
        experience: Item.of("crazyae2addons:xp_shard", 32),
        arcane: Item.of("ars_nouveau:source_gem", 4),
        blazing: Item.of("minecraft:blaze_powder", 1),
        prismarine: Item.of("minecraft:prismarine_shard", 4),
        sculk: Item.of("minecraft:sculk", 4),
        rune: Item.of("forbidden_arcanus:rune", 4),
        warped: Item.of("minecraft:warped_wart_block", 4),
        brown_shroom: Item.of("minecraft:brown_mushroom_block", 4),
        frosty: Item.of("minecraft:snowball", 4),
        red_shroom: Item.of("minecraft:red_mushroom_block", 4),
        withered: Item.of("minecraft:wither_rose", 4),
        cheese: Item.of("ad_astra:cheese", 4),
        constantan: Item.of("thermal:constantan_ingot", 4),
        redstone: Item.of("minecraft:redstone", 4),
        skeletal: Item.of("minecraft:bone", 4),
        zombie: Item.of("minecraft:rotten_flesh", 4),
        silky: Item.of("minecraft:string", 4),
        niter: Item.of("thermal:niter_dust", 4),
        slimy: Item.of("minecraft:slime_ball", 4),
        menril: Item.of("integrateddynamics:menril_log", 4),
        crystalline: Item.of("gtceu:raw_nether_quartz", 4),
        sodalite: Item.of("gtceu:raw_sodalite", 4),
        obsidian: Item.of("minecraft:obsidian", 4),
        rocked: Item.of("gtceu:raw_rock_salt", 4),
        super_factory: Item.of("sfm:cable", 4),
        desh: Item.of("ad_astra:raw_desh", 9),
        crimson: Item.of("minecraft:crimson_fungus", 4),
        infinity: Item.of("enderio:grains_of_infinity", 4),
        spacial: Item.of("ae2:certus_quartz_crystal", 4),
        arcane_crystal: Item.of("forbidden_arcanus:arcane_crystal", 1),
        magmatic: Item.of("minecraft:magma_block", 1),
        nickel: Item.of("gtceu:raw_nickel", 4),
        fluix: Item.of("ae2:fluix_crystal", 4),
        invar: Item.of("gtceu:invar_ingot", 1),
        sticky_resin: Item.of("gtceu:sticky_resin", 4),

        // LuV Bees
        thorium: Item.of("gtceu:thorium_dust", 4),
        graphite: Item.of("gtceu:raw_graphite", 4),
        sphalerite: Item.of("gtceu:raw_sphalerite", 4),
        netherite: Item.of("minecraft:ancient_debris", 1),
        ender: Item.of("minecraft:ender_pearl", 4),
        acidic: Item.of("gtceu:sulfuric_acid_bucket", 4),
        chromite: Item.of("gtceu:raw_chromite_dust", 4),
        pyrolusite: Item.of("gtceu:raw_pyrolusite", 4),
        platinum: Item.of("gtceu:raw_platinum", 4),
        bismuth: Item.of("gtceu:bismuth_dust", 4),
        glowing: Item.of("minecraft:glowstone_dust", 4),
        bastnasite: Item.of("gtceu:raw_bastnasite", 4),
        tetrahedrite: Item.of("gtceu:raw_tetrahedrite", 4),
        titanium: Item.of("gtceu:rutile_dust", 4),
        sulfur: Item.of("gtceu:raw_sulfur", 4),
        oilsands: Item.of("gtceu:raw_oilsands", 4),
        tantalite: Item.of("gtceu:raw_tantalite", 4),
        barite: Item.of("gtceu:raw_barite", 4),
        vanadium_magnetite: Item.of("gtceu:raw_vanadium_magnetite", 4),
        draconic: Item.of("productivebees:draconic_dust", 4),
        pyrochlore: Item.of("gtceu:raw_pyrochlore", 4),
        molybdenum: Item.of("gtceu:raw_molybdenite", 4),
        voidglass_shard: Item.of("gtceu:raw_voidglass_shard", 4),
        crystallized_fluxstone: Item.of("gtceu:raw_crystallized_fluxstone", 4),
        ignisium: Item.of("gtceu:raw_ignisium", 4),
        sky_steel: Item.of("megacells:sky_steel_ingot", 3)
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
