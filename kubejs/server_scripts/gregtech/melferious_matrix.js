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
            recipeBuilder.chancedOutput(output.withCount(127), chance / 10000, 0);
            i = i - 127;
        }
        recipeBuilder.chancedOutput(output.withCount(i), chance / 10000, 0);
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
        const gammaHoneycombCount = betaHoneycombCount * 2;
        const omegaCombCount = 40;

        // Beta (Prog 1) - Limited Output
        phoenixvine.recipes.gtceu.melferious_matrix(`${id}_beta1`)
            .circuit(1)
            .EUt(1048)
            .duration(300)
            .notConsumable(IngredientHelper.weakNBT(inputItem).withCount(1))
            .notConsumable(Item.of(upgradeBeta, 1))
            .chancedOutput(Item.of('productivebees:configurable_honeycomb', baseOutput).withCount(betaHoneycombCount), chance, 0)
            .notConsumable(flower);

        // Block (Prog 2) - Limited Output
        phoenixvine.recipes.gtceu.melferious_matrix(`${id}_block2`)
            .circuit(2)
            .EUt(1048)
            .duration(300)
            .notConsumable(IngredientHelper.weakNBT(inputItem).withCount(1))
            .notConsumable(Item.of(upgradeBlock, 1))
            .chancedOutput(Item.of('productivebees:configurable_comb', baseOutput).withCount(baseCombCount), chance, 0)
            .notConsumable(flower);

        // Gamma (Prog 3) - Limited Output
        phoenixvine.recipes.gtceu.melferious_matrix(`${id}_gamma3`)
            .circuit(3)
            .EUt(1048)
            .duration(300)
            .notConsumable(IngredientHelper.weakNBT(inputItem).withCount(1))
            .notConsumable(Item.of(upgradeGamma, 1))
            .chancedOutput(Item.of('productivebees:configurable_honeycomb', baseOutput).withCount(gammaHoneycombCount), chance, 0)
            .notConsumable(flower);

        // Omega (Prog 4) - Limited Output
        phoenixvine.recipes.gtceu.melferious_matrix(`${id}_omega4`)
            .circuit(4)
            .EUt(1048)
            .duration(300)
            .notConsumable(IngredientHelper.weakNBT(inputItem).withCount(1))
            .notConsumable(Item.of(upgradeOmega, 1))
            .chancedOutput(Item.of('productivebees:configurable_comb', baseOutput).withCount(omegaCombCount), chance, 0)
            .notConsumable(flower);
    }

    function makeStandardMatrixRecipe(id, input, flower, outputNbt, combCount, upgradeBeta, upgradeBlock, upgradeGamma, upgradeOmega, customDisplayName) {
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
        const gammaHoneycombCount = betaHoneycombCount * 2;
        const omegaCombCount = 40;

        // Beta (Prog 1) - Standard Output (Honeycomb)
        phoenixvine.recipes.gtceu.melferious_matrix(`${id}_beta1`)
            .circuit(1)
            .EUt(1048)
            .duration(300)
            .notConsumable(IngredientHelper.weakNBT(inputItem).withCount(1))
            .notConsumable(Item.of(upgradeBeta, 1))
            .itemOutputs(Item.of('productivebees:configurable_honeycomb', baseOutput).withCount(betaHoneycombCount))
            .notConsumable(flower);

        // Block (Prog 2) - Comb Output
        phoenixvine.recipes.gtceu.melferious_matrix(`${id}_block2`)
            .circuit(2)
            .EUt(1048)
            .duration(300)
            .notConsumable(IngredientHelper.weakNBT(inputItem).withCount(1))
            .notConsumable(Item.of(upgradeBlock, 1))
            .itemOutputs(Item.of('productivebees:configurable_comb', baseOutput).withCount(combCount))
            .notConsumable(flower);

        // Gamma (Prog 3) - Increased Honeycomb Output
        phoenixvine.recipes.gtceu.melferious_matrix(`${id}_gamma3`)
            .circuit(3)
            .EUt(1048)
            .duration(300)
            .notConsumable(IngredientHelper.weakNBT(inputItem).withCount(1))
            .notConsumable(Item.of(upgradeGamma, 1))
            .itemOutputs(Item.of('productivebees:configurable_honeycomb', baseOutput).withCount(gammaHoneycombCount))
            .notConsumable(flower);

        // Omega (Prog 4) - Larger Comb Output
        phoenixvine.recipes.gtceu.melferious_matrix(`${id}_omega4`)
            .circuit(4)
            .EUt(1048)
            .duration(300)
            .notConsumable(IngredientHelper.weakNBT(inputItem).withCount(1))
            .notConsumable(Item.of(upgradeOmega, 1))
            .itemOutputs(Item.of('productivebees:configurable_comb', baseOutput).withCount(omegaCombCount))
            .notConsumable(flower);
    }

    // //////////// machine controllers ////////////////
    phoenixvine.shaped('gtceu:melferious_matrix', ['CAC', 'ABA', 'WSW'], {
        A: '#gtceu:circuits/ev',
        W: 'gtceu:black_steel_single_cable',
        S: 'gtceu:stable_machine_casing',
        C: 'productivebees:upgrade_productivity_4',
        B: 'productivebees:upgrade_comb_block'
    }).id('gtceu:shaped/melferious_matrix');

    // ////////////// Individual melferious_matrix recipes ////////////////

    // Generic Bees
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/amethyst', 'amethyst', Item.of('minecraft:amethyst_block'), 'amethyst', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/crystalline', 'crystalline', Item.of('minecraft:quartz_block'), 'crystalline', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/diamond', 'diamond', Item.of('minecraft:diamond_block'), 'diamond', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/emerald', 'emerald', Item.of('minecraft:emerald_block'), 'emerald', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/lapis', 'lapis_gem', Item.of('minecraft:lapis_block'), 'lapis', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/redstone', 'redstone', Item.of('minecraft:redstone_block'), 'redstone', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/iron', 'iron', Item.of('minecraft:iron_block'), 'iron', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/gold', 'gold', Item.of('minecraft:gold_block'), 'gold', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');

    // Ore Bees
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/barite', 'barite', Item.of('gtceu:raw_barite_block'), 'barite', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4'); 
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/lepidolite', 'lepidolite', Item.of('gtceu:raw_lepidolite_block'), 'lepidolite', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/bastnasite', 'bastnasite', Item.of('gtceu:raw_bastnasite_block'), 'bastnasite', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/bauxite', 'bauxite', Item.of('gtceu:raw_bauxite_block'), 'bauxite', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/chromite', 'chromite', Item.of('gtceu:raw_chromite_block'), 'chromite', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/cobaltite', 'cobaltite', Item.of('gtceu:raw_cobaltite_block'), 'cobaltite', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/electrotine', 'electrotine', Item.of('gtceu:raw_electrotine_block'), 'electrotine', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/galena', 'galena', Item.of('gtceu:raw_galena_block'), 'galena', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/graphite', 'graphite', Item.of('gtceu:raw_graphite_block'), 'graphite', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/ilmenite', 'ilmenite', Item.of('gtceu:raw_ilmenite_block'), 'ilmenite', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/naquadah', 'naquadah', Item.of('gtceu:raw_naquadah_block'), 'naquadah', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/neodymium', 'neodymium', Item.of('gtceu:raw_neodymium_block'), 'neodymium', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/topaz', 'topaz', Item.of('gtceu:raw_topaz_block'), 'topaz', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/pyrope', 'pyrope', Item.of('gtceu:raw_pyrope_block'), 'pyrope', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/ruby', 'ruby', Item.of('gtceu:raw_ruby_block'), 'ruby', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/sapphire', 'sapphire', Item.of('gtceu:raw_sapphire_block'), 'sapphire', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/sodalite', 'sodalite', Item.of('gtceu:raw_sodalite_block'), 'sodalite', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/cinnabar', 'cinnabar', Item.of('gtceu:raw_cinnabar_block'), 'cinnabar', 10, 'productivebees:upgrade_productivity_2', 'productivebeesees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/apatite', 'apatite', Item.of('gtceu:raw_apatite_block'), 'apatite', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/neutronium', 'neutronium', Item.of('gtceu:neutronium_block'), 'neutronium', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/slimy', 'slimy', Item.of('minecraft:slime_block'), 'slimy', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/oilsands', 'oilsands', Item.of('gtceu:raw_oilsands_block'), 'oilsands', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/palladium', 'palladium', Item.of('gtceu:raw_palladium_block'), 'palladium', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/pyrochlore', 'pyrochlore', Item.of('gtceu:raw_pyrochlore_block'), 'pyrochlore', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/pyrolusite', 'pyrolusite', Item.of('gtceu:raw_pyrolusite_block'), 'pyrolusite', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/realgar', 'realgar', Item.of('gtceu:raw_realgar_block'), 'realgar', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/scheelite', 'scheelite', Item.of('gtceu:raw_scheelite_block'), 'scheelite', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/sheldonite', 'sheldonite', Item.of('gtceu:raw_cooperite_block'), 'sheldonite', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/sphalerite', 'sphalerite', Item.of('gtceu:raw_sphalerite_block'), 'sphalerite', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/stibnite', 'stibnite', Item.of('gtceu:raw_stibnite_block'), 'stibnite', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/tantalite', 'tantalite', Item.of('gtceu:raw_tantalite_block'), 'tantalite', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/tetrahedrite', 'tetrahedrite', Item.of('gtceu:raw_tetrahedrite_block'), 'tetrahedrite', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/tricalcium_phosphate', 'tricalcium_phosphate', Item.of('gtceu:raw_tricalcium_phosphate_block'), 'tricalcium_phosphate', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/tungstate', 'tungstate', Item.of('gtceu:raw_tungstate_block'), 'tungstate', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/vanadium_magnetite', 'vanadium_magnetite', Item.of('gtceu:raw_vanadium_magnetite_block'), 'vanadium_magnetite', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');
    makeStandardMatrixRecipe('kubejs:gtceu/melferious_matrix/draconic', 'draconic', Item.of('minecraft:dragon_egg'), 'draconic', 10, 'productivebees:upgrade_productivity_2', 'productivebees:upgrade_comb_block', 'productivebees:upgrade_productivity_3', 'productivebees:upgrade_productivity_4');

    // New Bees
    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/ghostly',
        'ghostly',
        Item.of('minecraft:soul_sand'),
        'productivebees:comb_ghostly',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4'
    );
    const rancherFlower = Item.of("productivebees:amber", `{BlockEntityTag:{EntityData:{entityType:{minecraft:cow}"}}}`).weakNBT()
    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/rancher',
        'rancher',
        rancherFlower,
        'productivebees:comb_milky',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4'
    );
    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/frost_bee',
        'frost',
        Item.of('minecraft:snowball'),
        'frost',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4',
        'Frost Honeycomb'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/platinum_bee',
        'platinum',
        Item.of('gtceu:platinum_ingot'),
        'platinum',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4',
        'Platinum Honeycomb'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/tungsten_bee',
        'tungsten',
        Item.of('gtceu:tungsten_ingot'),
        'tungsten',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4',
        'Tungsten Honeycomb'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/rose_gold_bee',
        'rose_gold',
        Item.of('gtceu:rose_gold_ingot'),
        'rose_gold',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4',
        'Rose Gold Honeycomb'
    );



    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/bismuth_bee',
        'bismuth',
        Item.of('gtceu:bismuth_ingot'),
        'bismuth',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4',
        'Bismuth Honeycomb'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/iridum_bee',
        'iridum',
        Item.of('gtceu:iridium_ingot'),
        'iridum',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4',
        'Iridum Honeycomb'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/withered_bee',
        'withered',
        Item.of('minecraft:wither_rose'),
        'withered',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4',
        'Withered Honeycomb'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/lapis_bee',
        'lapis',
        Item.of('minecraft:lapis_lazuli'),
        'lapis',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4',
        'Lapis Honeycomb'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/cobalt_bee',
        'cobalt',
        Item.of('gtceu:cobalt_ingot'),
        'cobalt',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4',
        'Cobalt Honeycomb'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/zombie_bee',
        'zombie',
        Item.of('minecraft:rotten_flesh'),
        'zombie',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4',
        'Zombie Honeycomb'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/steel_bee',
        'steel',
        Item.of('gtceu:steel_ingot'),
        'steel',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4',
        'Steel Honeycomb'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/skeletal_bee',
        'skeletal',
        Item.of('minecraft:bone'),
        'skeletal',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4',
        'Skeletal Honeycomb'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/silky_bee',
        'silky',
        Item.of('minecraft:string'),
        'silky',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4',
        'Silky Honeycomb'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/copper_bee',
        'copper',
        Item.of('minecraft:copper_block'),
        'copper',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4',
        'Copper Honeycomb'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/bronze_bee',
        'bronze',
        Item.of('gtceu:bronze_ingot'),
        'bronze',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4',
        'Bronze Honeycomb'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/coal_bee',
        'coal',
        Item.of('minecraft:coal'),
        'coal',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4',
        'Coal Honeycomb'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/molybdenum_bee',
        'molybdenum',
        Item.of('gtceu:molybdenum_ingot'),
        'molybdenum',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4',
        'Molybdenum Honeycomb'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/silver_bee',
        'silver',
        Item.of('gtceu:silver_ingot'),
        'silver',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4',
        'Silver Honeycomb'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/radioactive_bee',
        'radioactive',
        Item.of('gtceu:uranium_ingot'),
        'radioactive',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4',
        'Radioactive Honeycomb'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/electrum_bee',
        'electrum',
        Item.of('gtceu:electrum_ingot'),
        'electrum',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4',
        'Electrum Honeycomb'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/spacial_bee',
        'spacial',
        Item.of('ae2:singularity'), // Assuming an AE2 related item
        'spacial',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4',
        'spacial Honeycomb'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/uranite_bee',
        'uranite',
        Item.of('gtceu:uraninite_dust'),
        'uranite',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4',
        'Uranite Honeycomb'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/fluix_bee',
        'fluix',
        Item.of('ae2:fluix_crystal'),
        'fluix',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4',
        'Fluix Honeycomb'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/ancient_bee',
        'ancient',
        Item.of('minecraft:ancient_debris'),
        'ancient',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4',
        'Ancient Honeycomb'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/magmatic_bee',
        'magmatic',
        Item.of('minecraft:magma_cream'),
        'magmatic',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4',
        'Magmatic Honeycomb'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/nickel_bee',
        'nickel',
        Item.of('gtceu:nickel_ingot'),
        'nickel',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4',
        'Nickel Honeycomb'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/sky_steel_bee',
        'sky_steel',
        Item.of( 'megacells:sky_steel_ingot' ),
        'sky_steel',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4',
        'Sky Steel Honeycomb'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/lead_bee',
        'lead',
        Item.of('gtceu:lead_ingot'),
        'lead',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4',
        'Lead Honeycomb'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/invar_bee',
        'invar',
        Item.of('gtceu:invar_ingot'),
        'invar',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4',
        'Invar Honeycomb'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/osmium_bee',
        'osmium',
        Item.of('gtceu:osmium_block'),
        'osmium',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4',
        'Osmium Honeycomb'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/sticky_resin_bee',
        'sticky_resin',
        Item.of('gtceu:sticky_resin'),
        'sticky_resin',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4',
        'Sticky Resin Honeycomb'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/palladium_bee',
        'palladium',
        Item.of('gtceu:palladium_ingot'),
        'palladium',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4',
        'Palladium Honeycomb'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/menril_bee',
        'menril',
        Item.of('integrateddynamics:crystalized_menril_chunk'),
        'menril',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4',
        'Menril Honeycomb'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/brass_bee',
        'brass',
        Item.of('gtceu:brass_ingot'),
        'brass',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4',
        'Brass Honeycomb'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/obsidian_bee',
        'obsidian',
        Item.of('minecraft:obsidian'),
        'obsidian',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4',
        'Obsidian Honeycomb'
    );
    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/creebee',
        'creebee',
        Item.of('minecraft:tnt'),
        'productivebees:comb_powdery',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/glowing',
        'glowing',
        Item.of('minecraft:glowstone'),
        'glowing',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/experience',
        'experience',
        Item.of('minecraft:bookshelf'),
        'experience',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/blazing',
        'blazing',
        Item.of('minecraft:magma_block'),
        'blazing',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4'
    );

    // Titanium Bee (Limited Output - 20% for all tiers)
    makeLimitedMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/titanium',
        'titanium',
        Item.of('gtceu:titanium_block'),
        'titanium',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4',
        2000 // 20% chance for comb output in all tiers
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/prismarine',
        'prismarine',
        Item.of('minecraft:sea_lantern'),
        'prismarine',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/sculk',
        'sculk',
        Item.of('minecraft:sculk_catalyst'),
        'sculk',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/zinc',
        'zinc',
        Item.of('gtceu:zinc_block'),
        'zinc',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/tin',
        'tin',
        Item.of('gtceu:tin_block'),
        'tin',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/sulfur',
        'sulfur',
        Item.of('minecraft:coal_ore'),
        'sulfur',
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/warped_shroombee',
        'warped_shroombee',
        Item.of('minecraft:warped_fungus'),
        'warped', // Corrected output name
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4'
    );

    makeStandardMatrixRecipe(
        'kubejs:gtceu/melferious_matrix/brown_shroombee',
        'brown_shroombee',
        Item.of('minecraft:brown_mushroom'),
        'brown_shroom', // Corrected output name
        10,
        'productivebees:upgrade_productivity_2',
        'productivebees:upgrade_comb_block',
        'productivebees:upgrade_productivity_3',
        'productivebees:upgrade_productivity_4'
    );

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

    // Piglin Recipes
    const piglinRecipeProg2 = addWannaBeeRecipe('Piglin', 'minecraft:piglin', 'productivebees:upgrade_productivity_2');
    setCircuit(piglinRecipeProg2, 1);
    piglinRecipeProg2.chancedOutput('minecraft:gold_ingot', 6000, 1);   // 60%
    piglinRecipeProg2.chancedOutput('minecraft:rotten_flesh', 4000, 1); // 40%
    piglinRecipeProg2.chancedOutput('minecraft:porkchop', 3000, 1);     // 30%

    const piglinRecipeGamma3 = addWannaBeeRecipe('Piglin', 'minecraft:piglin', 'productivebees:upgrade_productivity_3');
    setCircuit(piglinRecipeGamma3, 1);
    piglinRecipeGamma3.chancedOutput('minecraft:gold_ingot', 7000, 2);   // 70% (2x output)
    piglinRecipeGamma3.chancedOutput('minecraft:rotten_flesh', 5000, 2); // 50% (2x output)
    piglinRecipeGamma3.chancedOutput('minecraft:porkchop', 4000, 2);     // 40% (2x output)
    piglinRecipeGamma3.chancedOutput('minecraft:emerald', 2000, 2);      // 20% (2x output)

    const piglinRecipeOmega4 = addWannaBeeRecipe('Piglin', 'minecraft:piglin', 'productivebees:upgrade_productivity_4');
    setCircuit(piglinRecipeOmega4, 1); // Still circuit 1 as only Omega should work
    piglinRecipeOmega4.chancedOutput('minecraft:gold_ingot', 8000, 4);   // 80% (4x output)
    piglinRecipeOmega4.chancedOutput('minecraft:rotten_flesh', 6000, 4); // 60% (4x output)
    piglinRecipeOmega4.chancedOutput('minecraft:porkchop', 5000, 4);     // 50% (4x output)
    piglinRecipeOmega4.chancedOutput('minecraft:emerald', 3000, 4);      // 30% (4x output)

    // Hoglin Recipes
    const hoglinRecipeProg2 = addWannaBeeRecipe('Hoglin', 'minecraft:hoglin', 'productivebees:upgrade_productivity_2');
    setCircuit(hoglinRecipeProg2, 1);
    hoglinRecipeProg2.chancedOutput('minecraft:porkchop', 7000, 2); // 70%
    hoglinRecipeProg2.chancedOutput('minecraft:leather', 5000, 1); // 50%

    const hoglinRecipeGamma3 = addWannaBeeRecipe('Hoglin', 'minecraft:hoglin', 'productivebees:upgrade_productivity_3');
    setCircuit(hoglinRecipeGamma3, 1);
    hoglinRecipeGamma3.chancedOutput('minecraft:porkchop', 8000, 4); // 80% (2x output)
    hoglinRecipeGamma3.chancedOutput('minecraft:leather', 6000, 2); // 60% (2x output)
    hoglinRecipeGamma3.chancedOutput('minecraft:bone', 3000, 2);     // 30% (2x output)

    const hoglinRecipeOmega4 = addWannaBeeRecipe('Hoglin', 'minecraft:hoglin', 'productivebees:upgrade_productivity_4');
    setCircuit(hoglinRecipeOmega4, 1); // Still circuit 1
    hoglinRecipeOmega4.chancedOutput('minecraft:porkchop', 9000, 8); // 90% (4x output)
    hoglinRecipeOmega4.chancedOutput('minecraft:leather', 7000, 4); // 70% (4x output)
    hoglinRecipeOmega4.chancedOutput('minecraft:bone', 4000, 4);     // 40% (4x output)

    // Zombified Piglin Recipes

    const zombifiedPiglinRecipeOmega4 = addWannaBeeRecipe('Zombified Piglin', 'minecraft:zombified_piglin', 'productivebees:upgrade_productivity_4');
    setCircuit(zombifiedPiglinRecipeOmega4, 1); // Still circuit 1
    zombifiedPiglinRecipeOmega4.chancedOutput('minecraft:gold_ingot', 7000, 4);   // 70% (4x output)
    zombifiedPiglinRecipeOmega4.chancedOutput('minecraft:rotten_flesh', 8000, 8); // 80% (4x output)
    zombifiedPiglinRecipeOmega4.chancedOutput('minecraft:gold_nugget', 5000, 20); // 50% (4x output)

    // Zombified Hoglin Recipes
    const zombifiedHoglinRecipeOmega4 = addWannaBeeRecipe('Zombified Hoglin', 'minecraft:zombified_hoglin', 'productivebees:upgrade_productivity_4');
    setCircuit(zombifiedHoglinRecipeOmega4, 1); // Still circuit 1
    zombifiedHoglinRecipeOmega4.chancedOutput('minecraft:rotten_flesh', 9500, 8); // 95% (4x output)
    zombifiedHoglinRecipeOmega4.chancedOutput('minecraft:leather', 6000, 4); // 60% (4x output)
    zombifiedHoglinRecipeOmega4.chancedOutput('minecraft:slime_ball', 3000, 4); // 30% (4x output)

    // Piglin Brute Recipes
    const piglinBruteRecipeOmega4 = addWannaBeeRecipe('Piglin Brute', 'minecraft:piglin_brute', 'productivebees:upgrade_productivity_4');
    setCircuit(piglinBruteRecipeOmega4, 1); // Still circuit 1
    piglinBruteRecipeOmega4.chancedOutput('minecraft:gold_ingot', 9500, 8);   // 95% (4x output)
    piglinBruteRecipeOmega4.chancedOutput('minecraft:rotten_flesh', 4000, 4); // 40% (4x output)
    piglinBruteRecipeOmega4.chancedOutput('minecraft:porkchop', 6000, 4);     // 60% (4x output)
    piglinBruteRecipeOmega4.chancedOutput('minecraft:netherite_scrap', 750, 4); // 7.5% (4x output)

    // Shulker Recipes
    const shulkerRecipeOmega4 = addWannaBeeRecipe('Shulker', 'minecraft:shulker', 'productivebees:upgrade_productivity_4');
    setCircuit(shulkerRecipeOmega4, 1); // Still circuit 1
    shulkerRecipeOmega4.chancedOutput('minecraft:shulker_shell', 8500, 4); // 85% (4x output)
    shulkerRecipeOmega4.chancedOutput('minecraft:ender_pearl', 4000, 4);   // 40% (4x output)

    // Phantom Recipes
    const phantomRecipeOmega4 = addWannaBeeRecipe('Phantom', 'minecraft:phantom', 'productivebees:upgrade_productivity_4');
    setCircuit(phantomRecipeOmega4, 1); // Still circuit 1
    phantomRecipeOmega4.chancedOutput('minecraft:phantom_membrane', 9000, 4); // 90% (4x output)
    phantomRecipeOmega4.chancedOutput('minecraft:leather', 3500, 4);       // 35% (4x output)

    // Blaze Recipes
    const blazeRecipeOmega4 = addWannaBeeRecipe('Blaze', 'minecraft:blaze', 'productivebees:upgrade_productivity_4');
    setCircuit(blazeRecipeOmega4, 1); // Still circuit 1
    blazeRecipeOmega4.chancedOutput('minecraft:blaze_rod', 8000, 4);     // 80% (4x output)
    blazeRecipeOmega4.chancedOutput('minecraft:glowstone_dust', 5000, 8); // 50% (4x output)

    // Elder Guardian Recipes

    const elderGuardianRecipeOmega4 = addWannaBeeRecipe('Elder Guardian', 'minecraft:elder_guardian', 'productivebees:upgrade_productivity_4');
    setCircuit(elderGuardianRecipeOmega4, 1); // Still circuit 1
    elderGuardianRecipeOmega4.chancedOutput('minecraft:prismarine_shard', 7000, 12);  // 70% (4x output)
    elderGuardianRecipeOmega4.chancedOutput('minecraft:prismarine_crystals', 6000, 8);  // 60% (4x output)
    elderGuardianRecipeOmega4.chancedOutput('minecraft:sponge', 2000, 4);            // 20% (4x output)
    elderGuardianRecipeOmega4.chancedOutput('minecraft:diamond_block', 100, 4);
    elderGuardianRecipeOmega4.chancedOutput('minecraft:heart_of_the_sea', 100, 4);

    // Evoker Recipes
    const evokerRecipeOmega4 = addWannaBeeRecipe('Evoker', 'minecraft:evoker', 'productivebees:upgrade_productivity_4');
    setCircuit(evokerRecipeOmega4, 1); // Still circuit 1
    evokerRecipeOmega4.chancedOutput('minecraft:totem_of_undying', 2500, 4); // 25% (4x output)
    evokerRecipeOmega4.chancedOutput('minecraft:emerald', 7000, 8);      // 70% (4x output)
    evokerRecipeOmega4.chancedOutput('minecraft:gold_ingot', 4000, 6);   // 40% (2x output - Adjusted for reasonable progression)

    // Magma Cube Recipes
    const magmaCubeRecipeOmega4 = addWannaBeeRecipe('Magma Cube', 'minecraft:magma_cube', 'productivebees:upgrade_productivity_4');
    setCircuit(magmaCubeRecipeOmega4, 1); // Still circuit 1
    magmaCubeRecipeOmega4.chancedOutput('minecraft:magma_cream', 9500, 8); // 95% (4x output)
    magmaCubeRecipeOmega4.chancedOutput('minecraft:coal', 6000, 8);       // 60% (4x output)

    // Warden Recipes
    const wardenRecipeOmega4 = addWannaBeeRecipe('Warden', 'minecraft:warden', 'productivebees:upgrade_productivity_4');
    setCircuit(wardenRecipeOmega4, 1); // Still circuit 1
    wardenRecipeOmega4.chancedOutput('minecraft:sculk_catalyst', 2000, 4); // 20% (4x output)
    wardenRecipeOmega4.chancedOutput('minecraft:echo_shard', 5000, 8);   // 50% (4x output)
    wardenRecipeOmega4.chancedOutput('minecraft:diamond', 750, 4);      // 7.5% (4x output)

    // Illager Recipes (using Pillager as a general illager)
    const illagerRecipeOmega4 = addWannaBeeRecipe('Illager', 'minecraft:pillager', 'productivebees:upgrade_productivity_4');
    setCircuit(illagerRecipeOmega4, 1); // Still circuit 1
    illagerRecipeOmega4.chancedOutput('minecraft:crossbow', 6000, 4); // 60% (4x output)
    illagerRecipeOmega4.chancedOutput('minecraft:emerald', 4000, 4);  // 40% (4x output)

    // Slime Recipes
    const slimeRecipeOmega4 = addWannaBeeRecipe('Slime', 'minecraft:slime', 'productivebees:upgrade_productivity_4');
    setCircuit(slimeRecipeOmega4, 1); // Still circuit 1
    slimeRecipeOmega4.chancedOutput('minecraft:slime_ball', 9500, 12); // 95% (4x output)
    slimeRecipeOmega4.chancedOutput('minecraft:sugar', 7000, 8);     // 70% (4x output)

    // Vindicator Recipes
    const vindicatorRecipeOmega4 = addWannaBeeRecipe('Vindicator', 'minecraft:vindicator', 'productivebees:upgrade_productivity_4');
    setCircuit(vindicatorRecipeOmega4, 1); // Still circuit 1
    vindicatorRecipeOmega4.chancedOutput('minecraft:emerald', 7500, 4);  // 75% (4x output)
    vindicatorRecipeOmega4.chancedOutput('minecraft:iron_axe', 6000, 4); // 60% (4x output)
    vindicatorRecipeOmega4.chancedOutput('minecraft:oak_log', 8000, 12); // 80% (4x output - Adjusted)

    // Witch Recipes
    const witchRecipeOmega4 = addWannaBeeRecipe('Witch', 'minecraft:witch', 'productivebees:upgrade_productivity_4');
    setCircuit(witchRecipeOmega4, 1); // Still circuit 1
    witchRecipeOmega4.chancedOutput('minecraft:glass_bottle', 7000, 4);      // 70% (4x output)
    witchRecipeOmega4.chancedOutput('minecraft:glowstone_dust', 5000, 4);  // 50% (4x output)
    witchRecipeOmega4.chancedOutput('minecraft:redstone', 5000, 4);        // 50% (4x output)
    witchRecipeOmega4.chancedOutput('minecraft:spider_eye', 5000, 4);      // 50% (4x output)
    witchRecipeOmega4.chancedOutput('minecraft:sugar', 5000, 4);         // 50% (4x output)
    witchRecipeOmega4.chancedOutput('minecraft:stick', 5000, 4);         // 50% (4x output)
    witchRecipeOmega4.chancedOutput('minecraft:gunpowder', 5000, 4);     // 50% (4x output)
    witchRecipeOmega4.chancedOutput('minecraft:fermented_spider_eye', 3000, 4); // 30% (4x output)

    // Wither Skeleton Recipes
    const witherSkeletonRecipeOmega4 = addWannaBeeRecipe('Wither Skeleton', 'minecraft:wither_skeleton','productivebees:upgrade_productivity_4');
    setCircuit(witherSkeletonRecipeOmega4, 1); // Still circuit 1
    witherSkeletonRecipeOmega4.chancedOutput('minecraft:coal', 8000, 4);                   // 80% (4x output)
    witherSkeletonRecipeOmega4.chancedOutput('minecraft:bone', 7000, 4);                   // 70% (4x output)
    witherSkeletonRecipeOmega4.chancedOutput('minecraft:wither_skeleton_skull', 1000, 2);  // 10% (2x output - Adjusted)
    witherSkeletonRecipeOmega4.chancedOutput('minecraft:nether_wart', 5000, 12);          // 50% (2x output - Adjusted)

    // Creeper Recipes
    const creeperRecipeOmega4 = addWannaBeeRecipe('Creeper', 'minecraft:creeper', 'productivebees:upgrade_productivity_4');
    setCircuit(creeperRecipeOmega4, 1); // Still circuit 1
    creeperRecipeOmega4.chancedOutput('minecraft:gunpowder', 9500, 8); // 95% (4x output)
    creeperRecipeOmega4.chancedOutput('minecraft:tnt', 1500, 4);       // 15% (4x output)

    // Zombie Recipes
    const zombieRecipeOmega4 = addWannaBeeRecipe('Zombie', 'minecraft:zombie', 'productivebees:upgrade_productivity_4');
    setCircuit(zombieRecipeOmega4, 1); // Still circuit 1
    zombieRecipeOmega4.chancedOutput('minecraft:rotten_flesh', 9800, 12); // 98% (4x output)
    zombieRecipeOmega4.chancedOutput('minecraft:iron_ingot', 1000, 4);   // 10% (4x output)
    zombieRecipeOmega4.chancedOutput('minecraft:carrot', 1000, 4);      // 10% (4x output)
    zombieRecipeOmega4.chancedOutput('minecraft:potato', 1000, 4);      // 10% (4x output)
    zombieRecipeOmega4.chancedOutput('minecraft:copper_ingot', 4000, 8); // 40% (4x output)

    // Skeleton Recipes
    const skeletonRecipeOmega4 = addWannaBeeRecipe('Skeleton', 'minecraft:skeleton', 'productivebees:upgrade_productivity_4');
    setCircuit(skeletonRecipeOmega4, 1); // Still circuit 1
    skeletonRecipeOmega4.chancedOutput('minecraft:bone', 9500, 8);    // 95% (4x output)
    skeletonRecipeOmega4.chancedOutput('minecraft:arrow', 1000, 4);   // 10% (4x output)
    skeletonRecipeOmega4.chancedOutput('minecraft:string', 5000, 4);   // 50% (2x output - Adjusted)

    // Spider Recipes
    const spiderRecipeOmega4 = addWannaBeeRecipe('Spider', 'minecraft:spider', 'productivebees:upgrade_productivity_4');
    setCircuit(spiderRecipeOmega4, 1); // Still circuit 1
    spiderRecipeOmega4.chancedOutput('minecraft:string', 9500, 16);            // 95% (4x output)
    spiderRecipeOmega4.chancedOutput('minecraft:spider_eye', 2000, 4);         // 20% (4x output)
    spiderRecipeOmega4.chancedOutput('minecraft:fermented_spider_eye', 3500, 4); // 35% (2x output - Adjusted)

    // Enderman Recipes
    const endermanRecipeOmega4 = addWannaBeeRecipe('Enderman', 'minecraft:enderman', 'productivebees:upgrade_productivity_4');
    setCircuit(endermanRecipeOmega4, 1); // Still circuit 1
    endermanRecipeOmega4.chancedOutput('minecraft:ender_pearl', 8000, 4); // 80% (4x output)
    endermanRecipeOmega4.chancedOutput('minecraft:end_eye', 4000, 4);   // 40% (2x output - Adjusted)

    // Ghast Recipes
    const ghastRecipeOmega4 = addWannaBeeRecipe('Ghast', 'minecraft:ghast', 'productivebees:upgrade_productivity_4');
    setCircuit(ghastRecipeOmega4, 1); // Still circuit 1
    ghastRecipeOmega4.chancedOutput('minecraft:ghast_tear', 9000, 4);   // 90% (4x output)
    ghastRecipeOmega4.chancedOutput('minecraft:gunpowder', 4000, 4);   // 40% (2x output - Adjusted)
    ghastRecipeOmega4.chancedOutput('minecraft:gold_nugget', 6000, 20); // 60% (4x output - Adjusted)
    });