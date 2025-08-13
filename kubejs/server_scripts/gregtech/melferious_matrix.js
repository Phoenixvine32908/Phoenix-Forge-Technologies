const Tags = Java.loadClass('dev.latvian.mods.kubejs.util.Tags');
const $FluidStackJS = Java.loadClass('dev.latvian.mods.kubejs.fluid.FluidStackJS');

ServerEvents.recipes(phoenixvine => {

    function addOutputs(recipeBuilder, output, count) {
        let i = count;
        while (i > 127) {
            recipeBuilder.itemOutputs(output.withCount(127));
            i = i - 127;
        }
        recipeBuilder.itemOutputs(output.withCount(i));
    }

    function addChancedOutputs(recipeBuilder, output, chance, count) {
        let i = count;
        while (i > 127) {
            recipeBuilder.chancedOutput(output.withCount(127), chance / 1000, 0);
            i = i - 127;
        }
        recipeBuilder.chancedOutput(output.withCount(i), chance / 1000, 0);
    }

    function makeLimitedMatrixRecipe(id, input, flower, outputNbt, baseCombCount, upgradeBeta, upgradeBlock, upgradeGamma, upgradeOmega, chance, customDisplayName) {
        const inputItem = Item.of('productivebees:bee_cage', `{type:"productivebees:${input}", entity: "productivebees:configurable_bee"}`);
        const baseOutputNbt = `{EntityTag:{type:"productivebees:${input}"}}`;
        let baseOutputDisplay;
        if (customDisplayName) {
            baseOutputDisplay = { display: { Name: `{"text":"${customDisplayName}"}` } };
        } else {
            baseOutputDisplay = { display: { Name: `{"translate":"item.productivebees.configurable_honeycomb.${outputNbt}"}` } };
        }
        const baseOutput = Object.assign(baseOutputNbt, baseOutputDisplay);
        const betaHoneycombCount = baseCombCount;

        // Beta (Prog 1) - Limited Output
        phoenixvine.recipes.gtceu.melferious_matrix(`${id}_beta1`)
            .circuit(1)
            .EUt(1048)
            .duration(300)
            .notConsumable(IngredientHelper.weakNBT(inputItem).withCount(1))
            .notConsumable(Item.of(upgradeBeta, 1))
            .chancedOutput(Item.of('productivebees:configurable_honeycomb', baseOutput).withCount(betaHoneycombCount), chance, 1000)
            .notConsumable(flower);

    }

    function makeStandardMatrixRecipe(id, input, flower, outputNbt, combCount, upgradeBeta, customDisplayName) {
        const inputItem = Item.of('productivebees:bee_cage', `{type:"productivebees:${input}", entity: "productivebees:configurable_bee"}`);
        const baseOutputNbt = `{EntityTag:{type:"productivebees:${input}"}}`;
        let baseOutputDisplay;
        if (customDisplayName) {
            baseOutputDisplay = { display: { Name: `{"text":"${customDisplayName}"}` } };
        } else {
            baseOutputDisplay = { display: { Name: `{"translate":"item.productivebees.configurable_honeycomb.${outputNbt}"}` } };
        }
        const baseOutput = Object.assign(baseOutputNbt, baseOutputDisplay);
        const betaHoneycombCount = combCount;

        // Beta (Prog 1) - Standard Output (Honeycomb)
        phoenixvine.recipes.gtceu.melferious_matrix(`${id}_beta1`)
            .circuit(1)
            .EUt(1048)
            .duration(300)
            .notConsumable(IngredientHelper.weakNBT(inputItem).withCount(1))
            .notConsumable(Item.of(upgradeBeta, 1))
            .itemOutputs(Item.of('productivebees:configurable_honeycomb', baseOutput).withCount(betaHoneycombCount))
            .notConsumable(flower);
    }

    // //////////// machine controllers ////////////////
    phoenixvine.shaped('gtceu:melferious_matrix', ['CAC', 'ABA', 'WSW'], {
        A: '#gtceu:circuits/luv',
        W: 'gtceu:black_steel_single_cable',
        S: 'gtceu:stable_machine_casing',
        C: 'productivebees:upgrade_productivity_4',
        B: 'productivebees:upgrade_comb_block'
    }).id('gtceu:shaped/melferious_matrix');

    // ////////////// Individual melferious_matrix recipes ////////////////

    // Generic Bees
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/amethyst', 'amethyst', Item.of('minecraft:amethyst_block'), 'amethyst',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/crystalline', 'crystalline', Item.of('minecraft:quartz_block'), 'crystalline',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/diamond', 'diamond', Item.of('minecraft:diamond_block'), 'diamond',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/emerald', 'emerald', Item.of('minecraft:emerald_block'), 'emerald',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/lapis', 'lapis_gem', Item.of('minecraft:lapis_block'), 'lapis',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/redstone', 'redstone', Item.of('minecraft:redstone_block'), 'redstone',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/iron', 'iron', Item.of('minecraft:iron_block'), 'iron',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/gold', 'gold', Item.of('minecraft:gold_block'), 'gold',  4, 'productivebees:upgrade_productivity_2',        );

    // Ore Bees
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/barite', 'barite', Item.of('gtceu:raw_barite_block'), 'barite',  4, 'productivebees:upgrade_productivity_2',        ); 
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/lepidolite', 'lepidolite', Item.of('gtceu:raw_lepidolite_block'), 'lepidolite',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/bastnasite', 'bastnasite', Item.of('gtceu:raw_bastnasite_block'), 'bastnasite',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/bauxite', 'bauxite', Item.of('gtceu:raw_bauxite_block'), 'bauxite',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/chromite', 'chromite', Item.of('gtceu:raw_chromite_block'), 'chromite',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/cobaltite', 'cobaltite', Item.of('gtceu:raw_cobaltite_block'), 'cobaltite',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/electrotine', 'electrotine', Item.of('gtceu:raw_electrotine_block'), 'electrotine',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/galena', 'galena', Item.of('gtceu:raw_galena_block'), 'galena',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/graphite', 'graphite', Item.of('gtceu:raw_graphite_block'), 'graphite',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/ilmenite', 'ilmenite', Item.of('gtceu:raw_ilmenite_block'), 'ilmenite',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/naquadah', 'naquadah', Item.of('gtceu:raw_naquadah_block'), 'naquadah',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/neodymium', 'neodymium', Item.of('gtceu:raw_neodymium_block'), 'neodymium',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/topaz', 'topaz', Item.of('gtceu:raw_topaz_block'), 'topaz',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/pyrope', 'pyrope', Item.of('gtceu:raw_pyrope_block'), 'pyrope',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/ruby', 'ruby', Item.of('gtceu:raw_ruby_block'), 'ruby',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/sapphire', 'sapphire', Item.of('gtceu:raw_sapphire_block'), 'sapphire',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/sodalite', 'sodalite', Item.of('gtceu:raw_sodalite_block'), 'sodalite',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/cinnabar', 'cinnabar', Item.of('gtceu:raw_cinnabar_block'), 'cinnabar',  4, 'productivebees:upgrade_productivity_2', 'productivebeesees:upgrade_comb_block',    );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/apatite', 'apatite', Item.of('gtceu:raw_apatite_block'), 'apatite',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/neutronium', 'neutronium', Item.of('gtceu:neutronium_block'), 'neutronium',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/slimy', 'slimy', Item.of('minecraft:slime_block'), 'slimy',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/oilsands', 'oilsands', Item.of('gtceu:raw_oilsands_block'), 'oilsands',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/palladium', 'palladium', Item.of('gtceu:raw_palladium_block'), 'palladium',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/pyrochlore', 'pyrochlore', Item.of('gtceu:raw_pyrochlore_block'), 'pyrochlore',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/pyrolusite', 'pyrolusite', Item.of('gtceu:raw_pyrolusite_block'), 'pyrolusite',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/realgar', 'realgar', Item.of('gtceu:raw_realgar_block'), 'realgar',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/scheelite', 'scheelite', Item.of('gtceu:raw_scheelite_block'), 'scheelite',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/sheldonite', 'sheldonite', Item.of('gtceu:raw_cooperite_block'), 'sheldonite',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/sphalerite', 'sphalerite', Item.of('gtceu:raw_sphalerite_block'), 'sphalerite',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/stibnite', 'stibnite', Item.of('gtceu:raw_stibnite_block'), 'stibnite',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/tantalite', 'tantalite', Item.of('gtceu:raw_tantalite_block'), 'tantalite',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/tetrahedrite', 'tetrahedrite', Item.of('gtceu:raw_tetrahedrite_block'), 'tetrahedrite',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/tricalcium_phosphate', 'tricalcium_phosphate', Item.of('gtceu:raw_tricalcium_phosphate_block'), 'tricalcium_phosphate',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/tungstate', 'tungstate', Item.of('gtceu:raw_tungstate_block'), 'tungstate',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/vanadium_magnetite', 'vanadium_magnetite', Item.of('gtceu:raw_vanadium_magnetite_block'), 'vanadium_magnetite',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/draconic', 'draconic', Item.of('minecraft:dragon_egg'), 'draconic',  4, 'productivebees:upgrade_productivity_2',        );
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/fluorite', 'fluorite', Item.of('gtceu:raw_fluorite_block'), 'fluorite',  4, 'productivebees:upgrade_productivity_2',        ); 
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/platinum_bee', 'platinum', Item.of('gtceu:platinum_ingot'), 'platinum', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/tungsten_bee', 'tungsten', Item.of('gtceu:tungsten_ingot'), 'tungsten', 10, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/rose_gold_bee', 'rose_gold', Item.of('gtceu:rose_gold_ingot'), 'rose_gold', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/bismuth_bee', 'bismuth', Item.of('gtceu:bismuth_ingot'), 'bismuth', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/iridum_bee', 'iridum', Item.of('gtceu:iridium_ingot'), 'iridum', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/withered_bee', 'withered', Item.of('minecraft:wither_rose'), 'withered', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/lapis_bee', 'lapis', Item.of('minecraft:lapis_lazuli'), 'lapis', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/cobalt_bee', 'cobalt', Item.of('gtceu:cobalt_ingot'), 'cobalt', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/zombie_bee', 'zombie', Item.of('minecraft:rotten_flesh'), 'zombie', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/steel_bee', 'steel', Item.of('gtceu:steel_ingot'), 'steel', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/skeletal_bee', 'skeletal', Item.of('minecraft:bone'), 'skeletal', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/silky_bee', 'silky', Item.of('minecraft:string'), 'silky', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/copper_bee', 'copper', Item.of('minecraft:copper_block'), 'copper', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/bronze_bee', 'bronze', Item.of('gtceu:bronze_ingot'), 'bronze', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/coal_bee', 'coal', Item.of('minecraft:coal'), 'coal', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/molybdenum_bee', 'molybdenum', Item.of('gtceu:molybdenum_ingot'), 'molybdenum', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/silver_bee', 'silver', Item.of('gtceu:silver_ingot'), 'silver', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/radioactive_bee', 'radioactive', Item.of('gtceu:uranium_ingot'), 'radioactive', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/electrum_bee', 'electrum', Item.of('gtceu:electrum_ingot'), 'electrum', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/spacial_bee', 'spacial', Item.of('ae2:singularity'), 'spacial', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/uranite_bee', 'uranite', Item.of('gtceu:uraninite_dust'), 'uranite', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/ancient_bee', 'ancient', Item.of('minecraft:ancient_debris'), 'ancient', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/magmatic_bee', 'magmatic', Item.of('minecraft:magma_cream'), 'magmatic', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/nickel_bee', 'nickel', Item.of('gtceu:nickel_ingot'), 'nickel', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/sky_steel_bee', 'sky_steel', Item.of('megacells:sky_steel_ingot'), 'sky_steel', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/lead_bee', 'lead', Item.of('gtceu:lead_ingot'), 'lead', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/invar_bee', 'invar', Item.of('gtceu:invar_ingot'), 'invar', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/osmium_bee', 'osmium', Item.of('gtceu:osmium_block'), 'osmium', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/sticky_resin_bee', 'sticky_resin', Item.of('gtceu:sticky_resin'), 'sticky_resin', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/palladium_bee', 'palladium', Item.of('gtceu:palladium_ingot'), 'palladium', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/menril_bee', 'menril', Item.of('integrateddynamics:crystalized_menril_chunk'), 'menril', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/brass_bee', 'brass', Item.of('gtceu:brass_ingot'), 'brass', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/obsidian_bee', 'obsidian', Item.of('minecraft:obsidian'), 'obsidian', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/creebee', 'creebee', Item.of('minecraft:tnt'), 'productivebees:comb_powdery', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/glowing', 'glowing', Item.of('minecraft:glowstone'), 'glowing', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/experience', 'experience', Item.of('minecraft:bookshelf'), 'experience', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/blazing', 'blazing', Item.of('minecraft:magma_block'), 'blazing', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/prismarine', 'prismarine', Item.of('minecraft:sea_lantern'), 'prismarine', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/sculk', 'sculk', Item.of('minecraft:sculk_catalyst'), 'sculk', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/zinc', 'zinc', Item.of('gtceu:zinc_block'), 'zinc', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/tin', 'tin', Item.of('gtceu:tin_block'), 'tin', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/sulfur', 'sulfur', Item.of('minecraft:coal_ore'), 'sulfur', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/warped_shroombee', 'warped_shroombee', Item.of('minecraft:warped_fungus'), 'warped', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/brown_shroombee', 'brown_shroombee', Item.of('minecraft:brown_mushroom'), 'brown_shroom', 4, 'productivebees:upgrade_productivity_2');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/fluix', 'fluix', Item.of('ae2:fluix_crystal'), 'fluix', 4, 'productivebees:upgrade_productivity_2');

    function addWannaBeeRecipe(beeName, mobEntityType, upgrade) {
        const recipeBuilder = phoenixvine.recipes.gtceu.melferious_matrix(`kubejs:gtceu/melferious_matrix/wanna_${beeName.toLowerCase().replace(' ', '_')}_${upgrade.split('_').pop()}`)
            .EUt(1048)
            .duration(300)
            .notConsumable(IngredientHelper.weakNBT(Item.of('productivebees:bee_cage', `{type:"productivebees:wanna", entity: "productivebees:configurable_bee"}`)).withCount(1))
            .notConsumable(Item.of("productivebees:amber", `{BlockEntityTag:{EntityData:{entityType:"${mobEntityType}"}}}`).weakNBT())
            .notConsumable(Item.of(upgrade, 1));
        return recipeBuilder; // Return the recipe builder to chain output definitions
    }

    function setCircuit(recipeBuilder, circuitLevel) {
        recipeBuilder.circuit(circuitLevel);
    }

    // Only one recipe per mob type, using upgrade 2

    // Piglin
    const piglinRecipe = addWannaBeeRecipe('Piglin', 'minecraft:piglin', 'productivebees:upgrade_productivity_2');
    setCircuit(piglinRecipe, 1);
    piglinRecipe.chancedOutput('minecraft:gold_ingot', 8000, 4);
    piglinRecipe.chancedOutput('minecraft:rotten_flesh', 6000, 4);
    piglinRecipe.chancedOutput('minecraft:porkchop', 5000, 4);
    piglinRecipe.chancedOutput('minecraft:emerald', 3000, 4);

    // Hoglin
    const hoglinRecipe = addWannaBeeRecipe('Hoglin', 'minecraft:hoglin', 'productivebees:upgrade_productivity_2');
    setCircuit(hoglinRecipe, 1);
    hoglinRecipe.chancedOutput('minecraft:porkchop', 7000, 2);
    hoglinRecipe.chancedOutput('minecraft:leather', 5000, 1);

    // Zombified Piglin
    const zombifiedPiglinRecipe = addWannaBeeRecipe('Zombified Piglin', 'minecraft:zombified_piglin', 'productivebees:upgrade_productivity_2');
    setCircuit(zombifiedPiglinRecipe, 1);
    zombifiedPiglinRecipe.chancedOutput('minecraft:gold_ingot', 7000, 4);
    zombifiedPiglinRecipe.chancedOutput('minecraft:rotten_flesh', 8000, 8);
    zombifiedPiglinRecipe.chancedOutput('minecraft:gold_nugget', 5000, 20);

    // Zombified Hoglin
    const zombifiedHoglinRecipe = addWannaBeeRecipe('Zombified Hoglin', 'minecraft:zombified_hoglin', 'productivebees:upgrade_productivity_2');
    setCircuit(zombifiedHoglinRecipe, 1);
    zombifiedHoglinRecipe.chancedOutput('minecraft:rotten_flesh', 9500, 8);
    zombifiedHoglinRecipe.chancedOutput('minecraft:leather', 6000, 4);
    zombifiedHoglinRecipe.chancedOutput('minecraft:slime_ball', 3000, 4);

    // Piglin Brute
    const piglinBruteRecipe = addWannaBeeRecipe('Piglin Brute', 'minecraft:piglin_brute', 'productivebees:upgrade_productivity_2');
    setCircuit(piglinBruteRecipe, 1);
    piglinBruteRecipe.chancedOutput('minecraft:gold_ingot', 9500, 8);
    piglinBruteRecipe.chancedOutput('minecraft:rotten_flesh', 4000, 4);
    piglinBruteRecipe.chancedOutput('minecraft:porkchop', 6000, 4);
    piglinBruteRecipe.chancedOutput('minecraft:netherite_scrap', 750, 4);

    // Shulker
    const shulkerRecipe = addWannaBeeRecipe('Shulker', 'minecraft:shulker', 'productivebees:upgrade_productivity_2');
    setCircuit(shulkerRecipe, 1);
    shulkerRecipe.chancedOutput('minecraft:shulker_shell', 8500, 4);
    shulkerRecipe.chancedOutput('minecraft:ender_pearl', 4000, 4);

    // Phantom
    const phantomRecipe = addWannaBeeRecipe('Phantom', 'minecraft:phantom', 'productivebees:upgrade_productivity_2');
    setCircuit(phantomRecipe, 1);
    phantomRecipe.chancedOutput('minecraft:phantom_membrane', 9000, 4);
    phantomRecipe.chancedOutput('minecraft:leather', 3500, 4);

    // Blaze
    const blazeRecipe = addWannaBeeRecipe('Blaze', 'minecraft:blaze', 'productivebees:upgrade_productivity_2');
    setCircuit(blazeRecipe, 1);
    blazeRecipe.chancedOutput('minecraft:blaze_rod', 8000, 4);
    blazeRecipe.chancedOutput('minecraft:glowstone_dust', 5000, 8);

    // Elder Guardian
    const elderGuardianRecipe = addWannaBeeRecipe('Elder Guardian', 'minecraft:elder_guardian', 'productivebees:upgrade_productivity_2');
    setCircuit(elderGuardianRecipe, 1);
    elderGuardianRecipe.chancedOutput('minecraft:prismarine_shard', 7000, 12);
    elderGuardianRecipe.chancedOutput('minecraft:prismarine_crystals', 6000, 8);
    elderGuardianRecipe.chancedOutput('minecraft:sponge', 2000, 4);
    elderGuardianRecipe.chancedOutput('minecraft:diamond_block', 100, 4);
    elderGuardianRecipe.chancedOutput('minecraft:heart_of_the_sea', 100, 4);

    // Evoker
    const evokerRecipe = addWannaBeeRecipe('Evoker', 'minecraft:evoker', 'productivebees:upgrade_productivity_2');
    setCircuit(evokerRecipe, 1);
    evokerRecipe.chancedOutput('minecraft:totem_of_undying', 2500, 4);
    evokerRecipe.chancedOutput('minecraft:emerald', 7000, 8);
    evokerRecipe.chancedOutput('minecraft:gold_ingot', 4000, 6);

    // Magma Cube
    const magmaCubeRecipe = addWannaBeeRecipe('Magma Cube', 'minecraft:magma_cube', 'productivebees:upgrade_productivity_2');
    setCircuit(magmaCubeRecipe, 1);
    magmaCubeRecipe.chancedOutput('minecraft:magma_cream', 9500, 8);
    magmaCubeRecipe.chancedOutput('minecraft:coal', 6000, 8);

    // Warden
    const wardenRecipe = addWannaBeeRecipe('Warden', 'minecraft:warden', 'productivebees:upgrade_productivity_2');
    setCircuit(wardenRecipe, 1);
    wardenRecipe.chancedOutput('minecraft:sculk_catalyst', 2000, 4);
    wardenRecipe.chancedOutput('minecraft:echo_shard', 5000, 8);
    wardenRecipe.chancedOutput('minecraft:diamond', 750, 4);

    // Illager (Pillager)
    const illagerRecipe = addWannaBeeRecipe('Illager', 'minecraft:pillager', 'productivebees:upgrade_productivity_2');
    setCircuit(illagerRecipe, 1);
    illagerRecipe.chancedOutput('minecraft:crossbow', 6000, 4);
    illagerRecipe.chancedOutput('minecraft:emerald', 4000, 4);

    // Slime
    const slimeRecipe = addWannaBeeRecipe('Slime', 'minecraft:slime', 'productivebees:upgrade_productivity_2');
    setCircuit(slimeRecipe, 1);
    slimeRecipe.chancedOutput('minecraft:slime_ball', 9500, 12);
    slimeRecipe.chancedOutput('minecraft:sugar', 7000, 8);

    // Vindicator
    const vindicatorRecipe = addWannaBeeRecipe('Vindicator', 'minecraft:vindicator', 'productivebees:upgrade_productivity_2');
    setCircuit(vindicatorRecipe, 1);
    vindicatorRecipe.chancedOutput('minecraft:emerald', 7500, 4);
    vindicatorRecipe.chancedOutput('minecraft:iron_axe', 6000, 4);
    vindicatorRecipe.chancedOutput('minecraft:oak_log', 8000, 12);

    // Witch
    const witchRecipe = addWannaBeeRecipe('Witch', 'minecraft:witch', 'productivebees:upgrade_productivity_2');
    setCircuit(witchRecipe, 1);
    witchRecipe.chancedOutput('minecraft:glass_bottle', 7000, 4);
    witchRecipe.chancedOutput('minecraft:glowstone_dust', 5000, 4);
    witchRecipe.chancedOutput('minecraft:redstone', 5000, 4);
    witchRecipe.chancedOutput('minecraft:spider_eye', 5000, 4);
    witchRecipe.chancedOutput('minecraft:sugar', 5000, 4);
    witchRecipe.chancedOutput('minecraft:stick', 5000, 4);
    witchRecipe.chancedOutput('minecraft:gunpowder', 5000, 4);
    witchRecipe.chancedOutput('minecraft:fermented_spider_eye', 3000, 4);

    // Wither Skeleton
    const witherSkeletonRecipe = addWannaBeeRecipe('Wither Skeleton', 'minecraft:wither_skeleton','productivebees:upgrade_productivity_2');
    setCircuit(witherSkeletonRecipe, 1);
    witherSkeletonRecipe.chancedOutput('minecraft:coal', 8000, 4);
    witherSkeletonRecipe.chancedOutput('minecraft:bone', 7000, 4);
    witherSkeletonRecipe.chancedOutput('minecraft:wither_skeleton_skull', 1000, 2);
    witherSkeletonRecipe.chancedOutput('minecraft:nether_wart', 5000, 12);

    // Creeper
    const creeperRecipe = addWannaBeeRecipe('Creeper', 'minecraft:creeper', 'productivebees:upgrade_productivity_2');
    setCircuit(creeperRecipe, 1);
    creeperRecipe.chancedOutput('minecraft:gunpowder', 9500, 8);
    creeperRecipe.chancedOutput('minecraft:tnt', 1500, 4);

    // Zombie
    const zombieRecipe = addWannaBeeRecipe('Zombie', 'minecraft:zombie', 'productivebees:upgrade_productivity_2');
    setCircuit(zombieRecipe, 1);
    zombieRecipe.chancedOutput('minecraft:rotten_flesh', 9800, 12);
    zombieRecipe.chancedOutput('minecraft:iron_ingot', 1000, 4);
    zombieRecipe.chancedOutput('minecraft:carrot', 1000, 4);
    zombieRecipe.chancedOutput('minecraft:potato', 1000, 4);
    zombieRecipe.chancedOutput('minecraft:copper_ingot', 4000, 8);

    // Skeleton
    const skeletonRecipe = addWannaBeeRecipe('Skeleton', 'minecraft:skeleton', 'productivebees:upgrade_productivity_2');
    setCircuit(skeletonRecipe, 1);
    skeletonRecipe.chancedOutput('minecraft:bone', 9500, 8);
    skeletonRecipe.chancedOutput('minecraft:arrow', 1000, 4);
    skeletonRecipe.chancedOutput('minecraft:string', 5000, 4);

    // Spider
    const spiderRecipe = addWannaBeeRecipe('Spider', 'minecraft:spider', 'productivebees:upgrade_productivity_2');
    setCircuit(spiderRecipe, 1);
    spiderRecipe.chancedOutput('minecraft:string', 9500, 16);
    spiderRecipe.chancedOutput('minecraft:spider_eye', 2000, 4);
    spiderRecipe.chancedOutput('minecraft:fermented_spider_eye', 3500, 4);

    // Enderman
    const endermanRecipe = addWannaBeeRecipe('Enderman', 'minecraft:enderman', 'productivebees:upgrade_productivity_2');
    setCircuit(endermanRecipe, 1);
    endermanRecipe.chancedOutput('minecraft:ender_pearl', 8000, 4);
    endermanRecipe.chancedOutput('minecraft:end_eye', 4000, 4);

    // Ghast
    const ghastRecipe = addWannaBeeRecipe('Ghast', 'minecraft:ghast', 'productivebees:upgrade_productivity_2');
    setCircuit(ghastRecipe, 1);
    ghastRecipe.chancedOutput('minecraft:ghast_tear', 9000, 4);
    ghastRecipe.chancedOutput('minecraft:gunpowder', 4000, 4);
    ghastRecipe.chancedOutput('minecraft:gold_nugget', 6000, 20);

});
