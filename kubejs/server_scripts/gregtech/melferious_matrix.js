const Tags = Java.loadClass('dev.latvian.mods.kubejs.util.Tags');
const $FluidStackJS = Java.loadClass('dev.latvian.mods.kubejs.fluid.FluidStackJS');

ServerEvents.recipes(phoenixvine => {

    function makeName(inputString) {
        let underscore = inputString.split('_');
        let returnString = '';
        if (inputString == 'bee') {
            returnString = 'Bee';
        } else if (underscore.length == 1) {
            returnString = inputString.charAt(0).toUpperCase() + inputString.slice(1) + ' Bee';
        } else {
            returnString = underscore[0].charAt(0).toUpperCase() + underscore[0].slice(1) + ' ' + underscore[1].charAt(0).toUpperCase() + underscore[1].slice(1) + ' Bee';
        }
        return returnString;
    }

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
            recipeBuilder.chancedOutput(output.withCount(127), chance, 0);
            i = i - 127;
        }
        recipeBuilder.chancedOutput(output.withCount(i), chance, 0);
    }

    function makeMatrixRecipes(id, input, flower, outputs, upgrade) {
        let recipeBuilder = phoenixvine.recipes.gtceu.melferious_matrix(id)
            .circuit(1)
            .EUt(1048)
            .duration(300)
            .notConsumable(IngredientHelper.weakNBT(Item.of(input)).withCount(1))
            .notConsumable(Item.of(upgrade, 1));

        outputs.forEach((output) => {
            if (output.chance == 10000) {
                if (output.item.hasNBT()) {
                    addOutputs(recipeBuilder, Item.of(output.item), output.count);
                } else {
                    recipeBuilder.itemOutputs(Item.of(output.item, output.count));
                }
            } else {
                if (output.item.hasNBT()) {
                    addChancedOutputs(recipeBuilder, Item.of(output.item), output.chance, output.count);
                } else {
                    recipeBuilder.chancedOutput(Item.of(output.item, output.count), output.chance / 10000, 0);
                }
            }
        });

        if (flower instanceof $FluidStackJS) {
            recipeBuilder.notConsumableFluid(flower);
        } else {
            recipeBuilder.notConsumable(flower);
        }
    }

    //////////// machine controllers ////////////////
    phoenixvine.shaped('gtceu:melferious_matrix', ['CAC', 'ABA', 'WSW'], {
        A: '#gtceu:circuits/ev',
        W: 'gtceu:black_steel_single_cable',
        S: 'gtceu:stable_machine_casing',
        C: 'productivebees:upgrade_productivity_4',
        B: 'productivebees:upgrade_comb_block'
    }).id('gtceu:shaped/melferious_matrix');

    // ////////////// melferious_matrix recipes - Based on filenames ////////////////

    function addBeeRecipes(beeName, flower, baseOutput) {
        const input = Item.of('productivebees:bee_cage', `{type:"productivebees:${beeName}", entity: "productivebees:configurable_bee"}`);

        const betaHoneycombCount = baseOutput.count + 10;
        const gammaHoneycombCount = betaHoneycombCount * 2;

        // Beta (Prog 1)
        makeMatrixRecipes(
            `kubejs:gtceu/melferious_matrix/${beeName}_beta1`,
            input,
            flower,
            [{
                item: Item.of('productivebees:configurable_honeycomb', baseOutput.nbt),
                chance: 10000,
                count: betaHoneycombCount
            }],
            'productivebees:upgrade_productivity_2' // Corrected Beta upgrade item
        );

        // Block (Prog 2)
        phoenixvine.recipes.gtceu.melferious_matrix(`kubejs:gtceu/melferious_matrix/${beeName}_block2`)
            .circuit(2)
            .EUt(1048)
            .duration(300)
            .notConsumable(IngredientHelper.weakNBT(Item.of(input)).withCount(1))
            .notConsumable(Item.of('productivebees:upgrade_comb_block', 1))
            .itemOutputs(Item.of('productivebees:configurable_comb', baseOutput.nbt).withCount(baseOutput.count))
            .notConsumable(flower);

        // Gamma (Prog 3)
        phoenixvine.recipes.gtceu.melferious_matrix(`kubejs:gtceu/melferious_matrix/${beeName}_gamma3`)
            .circuit(3)
            .EUt(1048)
            .duration(300)
            .notConsumable(IngredientHelper.weakNBT(Item.of(input)).withCount(1))
            .notConsumable(Item.of('productivebees:upgrade_productivity_3', 1))
            .itemOutputs(Item.of('productivebees:configurable_honeycomb', baseOutput.nbt).withCount(gammaHoneycombCount))
            .notConsumable(flower);

        // Omega (Prog 4)
        phoenixvine.recipes.gtceu.melferious_matrix(`kubejs:gtceu/melferious_matrix/${beeName}_omega4`)
            .circuit(4)
            .EUt(1048)
            .duration(300)
            .notConsumable(IngredientHelper.weakNBT(Item.of(input)).withCount(1))
            .notConsumable(Item.of('productivebees:upgrade_productivity_4', 1))
            .itemOutputs(Item.of('productivebees:configurable_comb', baseOutput.nbt).withCount(40))
            .notConsumable(flower);
    }

    function addGemBeeRecipe(gemName) {
        const beeName = gemName.replace('_gem', '');
        const flower = Item.of(`minecraft:${gemName.replace('_gem', '')}_block`);
        const baseOutputNbt = `{EntityTag:{type:"productivebees:${beeName}"}}`;
        addBeeRecipes(beeName, flower, {
            nbt: baseOutputNbt,
            count: 10
        });
    }

    function addOreBeeRecipe(oreName) {
        const beeName = oreName;
        const flower = Item.of(`gtceu:raw_${oreName}_block`);
        const baseOutputNbt = `{EntityTag:{type:"productivebees:${beeName}"}}`;
        addBeeRecipes(beeName, flower, {
            nbt: baseOutputNbt,
            count: 10
        });
    }

    function addGenericBeeRecipe(beeName) {
        const flower = Item.of(`minecraft:${beeName}_block`);
        const baseOutputNbt = `{EntityTag:{type:"productivebees:${beeName}"}}`;
        addBeeRecipes(beeName, flower, {
            nbt: baseOutputNbt,
            count: 10
        });
    }

    // Recipes based on the previous list of .json files
    addGenericBeeRecipe('amethyst');

    // Crystalline Bee
    const crystallineFlower = Item.of('minecraft:quartz_block');
    const crystallineOutputNbt = `{EntityTag:{type:"productivebees:crystalline"}}`;
    addBeeRecipes('crystalline', crystallineFlower, {
        nbt: crystallineOutputNbt,
        count: 10
    });

    addGenericBeeRecipe('diamond');
    addGenericBeeRecipe('emerald');
    addGemBeeRecipe('lapis');
    addGenericBeeRecipe('redstone');
    addGenericBeeRecipe('iron');
    addGenericBeeRecipe('gold');
    addOreBeeRecipe('barite');
    addOreBeeRecipe('bastnasite');
    addOreBeeRecipe('bauxite');
    addOreBeeRecipe('chromite');
    addOreBeeRecipe('cobaltite');
    addOreBeeRecipe('electrotine');
    addOreBeeRecipe('galena');
    addOreBeeRecipe('graphite');
    addOreBeeRecipe('ilmenite');
    addOreBeeRecipe('naquadah');
    addOreBeeRecipe('neodymium');
    addOreBeeRecipe('topaz');
    addOreBeeRecipe('pyrope');
    addOreBeeRecipe('ruby');
    addOreBeeRecipe('sapphire');
    addOreBeeRecipe('sodalite');
    addOreBeeRecipe('cinnabar');
    addOreBeeRecipe('apatite');

    // Neutronium Bee
    const neutroniumFlower = Item.of('gtceu:neutronium_block');
    const neutroniumOutputNbt = `{EntityTag:{type:"productivebees:neutronium"}}`;
    addBeeRecipes('neutronium', neutroniumFlower, {
        nbt: neutroniumOutputNbt,
        count: 10
    });

    // Slimy Bee
    const slimyFlower = Item.of('minecraft:slime_block');
    const slimyOutputNbt = `{EntityTag:{type:"productivebees:slimy"}}`;
    addBeeRecipes('slimy', slimyFlower, {
        nbt: slimyOutputNbt,
        count: 10
    });

    addOreBeeRecipe('oilsands');
    addOreBeeRecipe('palladium');
    addOreBeeRecipe('pyrochlore');
    addOreBeeRecipe('pyrolusite');
    addOreBeeRecipe('realgar');
    addOreBeeRecipe('scheelite');

    // Sheldonite Bee
    const sheldoniteFlower = Item.of('gtceu:raw_cooperite_block');
    const sheldoniteOutputNbt = `{EntityTag:{type:"productivebees:sheldonite"}}`;
    addBeeRecipes('sheldonite', sheldoniteFlower, {
        nbt: sheldoniteOutputNbt,
        count: 10
    });

    addOreBeeRecipe('sphalerite');
    addOreBeeRecipe('stibnite');
    addOreBeeRecipe('tantalite');
    addOreBeeRecipe('tetrahedrite');
    addOreBeeRecipe('tricalcium_phosphate');
    addOreBeeRecipe('tungstate');
    addOreBeeRecipe('vanadium_magnetite');

    // Draconic Bee
    const draconicFlower = Item.of('minecraft:dragon_egg');
    const draconicOutputNbt = `{EntityTag:{type:"productivebees:draconic"}}`;
    addBeeRecipes('draconic', draconicFlower, {
        nbt: draconicOutputNbt,
        count: 10
    });

    function addWannaBeeRecipe(beeName, mobEntityType) {
        const recipeBuilder = phoenixvine.recipes.gtceu.melferious_matrix(`kubejs:gtceu/melferious_matrix/wanna_${beeName.toLowerCase().replace(' ', '_')}_omega`)
            .EUt(1048)
            .duration(300)
            .notConsumable(IngredientHelper.weakNBT(Item.of('productivebees:bee_cage', `{type:"productivebees:wanna", entity: "productivebees:configurable_bee"}`)).withCount(1))
            .notConsumable(Item.of("productivebees:amber", `{BlockEntityTag:{EntityData:{entityType:"${mobEntityType}"}}}`).weakNBT())
            .notConsumable(Item.of('productivebees:upgrade_productivity_4', 1)); // Using productivity 4 for Omega
        return recipeBuilder; // Return the recipe builder to chain output definitions
    }

    function setCircuit(recipeBuilder, circuitLevel) {
        recipeBuilder.circuit(circuitLevel);
    }

    // Piglin Recipes
    const piglinRecipeOmega = addWannaBeeRecipe('Piglin', 'minecraft:piglin');
    setCircuit(piglinRecipeOmega, 4); // Assuming Omega tier needs a higher circuit
    piglinRecipeOmega.chancedOutput('minecraft:gold_ingot', 8000, 3);
    piglinRecipeOmega.chancedOutput('minecraft:rotten_flesh', 2000, 1);
    piglinRecipeOmega.chancedOutput('minecraft:porkchop', 5000, 2);

    // Hoglin Recipes
    const hoglinRecipeOmega = addWannaBeeRecipe('Hoglin', 'minecraft:hoglin');
    setCircuit(hoglinRecipeOmega, 4);
    hoglinRecipeOmega.chancedOutput('minecraft:porkchop', 9000, 4);
    hoglinRecipeOmega.chancedOutput('minecraft:leather', 7000, 2);

    // Zombified Piglin Recipes
    const zombifiedPiglinRecipeOmega = addWannaBeeRecipe('Zombified Piglin', 'minecraft:zombified_piglin');
    setCircuit(zombifiedPiglinRecipeOmega, 4);
    zombifiedPiglinRecipeOmega.chancedOutput('minecraft:gold_ingot', 7000, 2);
    zombifiedPiglinRecipeOmega.chancedOutput('minecraft:rotten_flesh', 8000, 4);

    // Zombified Hoglin Recipes
    const zombifiedHoglinRecipeOmega = addWannaBeeRecipe('Zombified Hoglin', 'minecraft:zombified_hoglin');
    setCircuit(zombifiedHoglinRecipeOmega, 4);
    zombifiedHoglinRecipeOmega.chancedOutput('minecraft:rotten_flesh', 9500, 4);
    zombifiedHoglinRecipeOmega.chancedOutput('minecraft:leather', 6000, 2);

    // Piglin Brute Recipes
    const piglinBruteRecipeOmega = addWannaBeeRecipe('Piglin Brute', 'minecraft:piglin_brute');
    setCircuit(piglinBruteRecipeOmega, 4);
    piglinBruteRecipeOmega.chancedOutput('minecraft:gold_ingot', 9000, 4);
    piglinBruteRecipeOmega.chancedOutput('minecraft:rotten_flesh', 1000, 1);
    piglinBruteRecipeOmega.chancedOutput('minecraft:porkchop', 6000, 2);

    // Shulker Recipes
    const shulkerRecipeOmega = addWannaBeeRecipe('Shulker', 'minecraft:shulker');
    setCircuit(shulkerRecipeOmega, 4);
    shulkerRecipeOmega.chancedOutput('minecraft:shulker_shell', 8500, 2);

    // Phantom Recipes
    const phantomRecipeOmega = addWannaBeeRecipe('Phantom', 'minecraft:phantom');
    setCircuit(phantomRecipeOmega, 4);
    phantomRecipeOmega.chancedOutput('minecraft:phantom_membrane', 9000, 2);

    // Blaze Recipes
    const blazeRecipeOmega = addWannaBeeRecipe('Blaze', 'minecraft:blaze');
    setCircuit(blazeRecipeOmega, 4);
    blazeRecipeOmega.chancedOutput('minecraft:blaze_rod', 8000, 2);

    // Elder Guardian Recipes
    const elderGuardianRecipeOmega = addWannaBeeRecipe('Elder Guardian', 'minecraft:elder_guardian');
    setCircuit(elderGuardianRecipeOmega, 4);
    elderGuardianRecipeOmega.chancedOutput('minecraft:prismarine_shard', 7000, 5);
    elderGuardianRecipeOmega.chancedOutput('minecraft:prismarine_crystals', 6000, 3);
    elderGuardianRecipeOmega.chancedOutput('minecraft:sponge', 2000, 1);

    // Evoker Recipes
    const evokerRecipeOmega = addWannaBeeRecipe('Evoker', 'minecraft:evoker');
    setCircuit(evokerRecipeOmega, 4);
    evokerRecipeOmega.chancedOutput('minecraft:totem_of_undying', 3000, 1);
    evokerRecipeOmega.chancedOutput('minecraft:emerald', 7000, 4);

    // Magma Cube Recipes
    const magmaCubeRecipeOmega = addWannaBeeRecipe('Magma Cube', 'minecraft:magma_cube');
    setCircuit(magmaCubeRecipeOmega, 4);
    magmaCubeRecipeOmega.chancedOutput('minecraft:magma_cream', 9500, 4);

    // Warden Recipes
    const wardenRecipeOmega = addWannaBeeRecipe('Warden', 'minecraft:warden');
    setCircuit(wardenRecipeOmega, 4);
    wardenRecipeOmega.chancedOutput('minecraft:sculk_catalyst', 2000, 1);
    wardenRecipeOmega.chancedOutput('minecraft:echo_shard', 5000, 4);

    // Illager Recipes (using Pillager as a general illager)
    const illagerRecipeOmega = addWannaBeeRecipe('Illager', 'minecraft:pillager');
    setCircuit(illagerRecipeOmega, 4);
    illagerRecipeOmega.chancedOutput('minecraft:crossbow', 6000, 2);

    // Slime Recipes
    const slimeRecipeOmega = addWannaBeeRecipe('Slime', 'minecraft:slime');
    setCircuit(slimeRecipeOmega, 4);
    slimeRecipeOmega.chancedOutput('minecraft:slime_ball', 9500, 5);

    // Vindicator Recipes
    const vindicatorRecipeOmega = addWannaBeeRecipe('Vindicator', 'minecraft:vindicator');
    setCircuit(vindicatorRecipeOmega, 4);
    vindicatorRecipeOmega.chancedOutput('minecraft:emerald', 7500, 2);
    vindicatorRecipeOmega.chancedOutput('minecraft:iron_axe', 6000, 2);

    // Witch Recipes
    const witchRecipeOmega = addWannaBeeRecipe('Witch', 'minecraft:witch');
    setCircuit(witchRecipeOmega, 4);
    witchRecipeOmega.chancedOutput('minecraft:glass_bottle', 7000, 2);
    witchRecipeOmega.chancedOutput('minecraft:glowstone_dust', 5000, 2);
    witchRecipeOmega.chancedOutput('minecraft:redstone', 5000, 2);
    witchRecipeOmega.chancedOutput('minecraft:spider_eye', 5000, 2);
    witchRecipeOmega.chancedOutput('minecraft:sugar', 5000, 2);
    witchRecipeOmega.chancedOutput('minecraft:stick', 5000, 2);
    witchRecipeOmega.chancedOutput('minecraft:gunpowder', 5000, 2);

    // Wither Skeleton Recipes
    const witherSkeletonRecipeOmega = addWannaBeeRecipe('Wither Skeleton', 'minecraft:wither_skeleton');
    setCircuit(witherSkeletonRecipeOmega, 4);
    witherSkeletonRecipeOmega.chancedOutput('minecraft:coal', 8000, 2);
    witherSkeletonRecipeOmega.chancedOutput('minecraft:bone', 7000, 2);
    witherSkeletonRecipeOmega.chancedOutput('minecraft:wither_skeleton_skull', 1000, 2);

    // Creeper Recipes
    const creeperRecipeOmega = addWannaBeeRecipe('Creeper', 'minecraft:creeper');
    setCircuit(creeperRecipeOmega, 4);
    creeperRecipeOmega.chancedOutput('minecraft:gunpowder', 9500, 4);

    // Zombie Recipes
    const zombieRecipeOmega = addWannaBeeRecipe('Zombie', 'minecraft:zombie');
    setCircuit(zombieRecipeOmega, 4);
    zombieRecipeOmega.chancedOutput('minecraft:rotten_flesh', 10000, 5);
    zombieRecipeOmega.chancedOutput('minecraft:iron_ingot', 1000, 2);
    zombieRecipeOmega.chancedOutput('minecraft:carrot', 1000, 2);
    zombieRecipeOmega.chancedOutput('minecraft:potato', 1000, 2);

    // Skeleton Recipes
    const skeletonRecipeOmega = addWannaBeeRecipe('Skeleton', 'minecraft:skeleton');
    setCircuit(skeletonRecipeOmega, 4);
    skeletonRecipeOmega.chancedOutput('minecraft:bone', 9000, 4);
    skeletonRecipeOmega.chancedOutput('minecraft:arrow', 1000, 2);

    // Spider Recipes
    const spiderRecipeOmega = addWannaBeeRecipe('Spider', 'minecraft:spider');
    setCircuit(spiderRecipeOmega, 4);
    spiderRecipeOmega.chancedOutput('minecraft:string', 9500, 6);
    spiderRecipeOmega.chancedOutput('minecraft:spider_eye', 2000, 2);

    // Enderman Recipes
    const endermanRecipeOmega = addWannaBeeRecipe('Enderman', 'minecraft:enderman');
    setCircuit(endermanRecipeOmega, 4);
    endermanRecipeOmega.chancedOutput('minecraft:ender_pearl', 8000, 2);

    // Ghast Recipes
    const ghastRecipeOmega = addWannaBeeRecipe('Ghast', 'minecraft:ghast');
    setCircuit(ghastRecipeOmega, 4);
    ghastRecipeOmega.chancedOutput('minecraft:ghast_tear', 9000, 2);
    ghastRecipeOmega.chancedOutput('minecraft:gunpowder', 4000, 2);

    // Wither Recipes
    const witherRecipeOmega = addWannaBeeRecipe('Wither', 'minecraft:wither');
    setCircuit(witherRecipeOmega, 4);
    witherRecipeOmega.chancedOutput('minecraft:nether_star', 2000, 1);

    // EnderDragon Recipes
    const enderDragonRecipeOmega = addWannaBeeRecipe('EnderDragon', 'minecraft:ender_dragon');
    setCircuit(enderDragonRecipeOmega, 4);
    enderDragonRecipeOmega.chancedOutput('minecraft:dragon_breath', 7000, 7);

    // Cow Recipes
    const cowRecipeOmega = addWannaBeeRecipe('Cow', 'minecraft:cow');
    setCircuit(cowRecipeOmega, 4);
    cowRecipeOmega.chancedOutput('minecraft:leather', 10000, 3);
    cowRecipeOmega.chancedOutput('minecraft:beef', 10000, 3);

    // Rabbit Recipes
    const rabbitRecipeOmega = addWannaBeeRecipe('Rabbit', 'minecraft:rabbit');
    setCircuit(rabbitRecipeOmega, 4);
    rabbitRecipeOmega.chancedOutput('minecraft:rabbit_hide', 9000, 2);
    rabbitRecipeOmega.chancedOutput('minecraft:rabbit_foot', 2000, 1);
    rabbitRecipeOmega.chancedOutput('minecraft:cooked_rabbit', 9000, 2);

    // Pig Recipes
    const pigRecipeOmega = addWannaBeeRecipe('Pig', 'minecraft:pig');
    setCircuit(pigRecipeOmega, 4);
    pigRecipeOmega.chancedOutput('minecraft:porkchop', 10000, 5);

    // Sheep Recipes
    const sheepRecipeOmega = addWannaBeeRecipe('Sheep', 'minecraft:sheep');
    setCircuit(sheepRecipeOmega, 4);
    sheepRecipeOmega.chancedOutput('minecraft:mutton', 10000, 3);
    sheepRecipeOmega.chancedOutput('minecraft:wool', 9500, 2);
});