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

    function makeMatrixRecipes(id, input, flower, outputs) {
        let recipeBuilder = phoenixvine.recipes.gtceu.melferious_matrix(id)
            .circuit(1) // Set the circuit to 1
            .EUt(1048) // Changed EUt to 32,768
            .duration(300) // Changed duration to 600
            .notConsumable(IngredientHelper.weakNBT(Item.of(input)).withCount(1)) // Input count is 1
            .notConsumable(Item.of('productivebees:upgrade_productivity_2', 1)); // Productivity upgrade count for circuit 1
        outputs.forEach((output) => {
            if (output.chance == 10000) {
                if (10 * 1 > 127 && output.item.hasNBT()) {
                    addOutputs(recipeBuilder, Item.of(output.item), 10 * 1);
                } else {
                    recipeBuilder.itemOutputs(Item.of(output.item, 10 * 1));
                }
            } else {
                if (10 * 1 > 127 && output.item.hasNBT()) {
                    addChancedOutputs(recipeBuilder, Item.of(output.item), output.chance, 10 * 1);
                } else {
                    recipeBuilder.chancedOutput(Item.of(output.item, 10 * 1), output.chance, 0);
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
    phoenixvine.shaped('gtceu:melferious_matrix', ['CAC', 'ABA', 'WSW'],
        {
            A: '#gtceu:circuits/ev',
            W: 'gtceu:black_steel_single_cable',
            S: 'gtceu:stable_machine_casing',
            C: 'productivebees:upgrade_productivity_4',
            B: 'productivebees:upgrade_comb_block'
        }).id('gtceu:shaped/melferious_matrix');

    ////////////// melferious_matrix recipes - Based on filenames ////////////////

    function addGemBeeRecipe(gemName) {
        const beeName = gemName.replace('_gem', ''); // Handle cases like amber_gem.json
        const input = Item.of('productivebees:bee_cage', `{type:"productivebees:${beeName}", entity: "productivebees:configurable_bee"}`);
        const flower = Item.of(`minecraft:${gemName.replace('_gem', '')}_block`); // Assuming block name is gemName (without _gem) + "_block"
        const outputItem = Item.of(`productivebees:configurable_honeycomb`, `{EntityTag:{type:"productivebees:${beeName}"}}`);
        const output = [{ item: outputItem, chance: 10000 }];
        makeMatrixRecipes(`kubejs:gtceu/melferious_matrix/${beeName}`, input, flower, output);
    }

    function addOreBeeRecipe(oreName) {
    const beeName = oreName;
    const input = Item.of('productivebees:bee_cage', `{type:"productivebees:${beeName}", entity: "productivebees:configurable_bee"}`);
    const flower = Item.of(`gtceu:raw_${oreName}_block`);
    const outputItem = Item.of(`productivebees:configurable_honeycomb
`, `{EntityTag:{type:"productivebees:${beeName}"}}`);
    const output = [{ item: outputItem, chance: 10000 }];
    makeMatrixRecipes(`kubejs:gtceu/melferious_matrix/${beeName}`, input, flower, output);
}


    function addGenericBeeRecipe(beeName) {
        const input = Item.of('productivebees:bee_cage', `{type:"productivebees:${beeName}", entity: "productivebees:configurable_bee"}`);
        const flower = Item.of(`minecraft:${beeName}_block`); // Assuming block name is beeName + "_block"
        const outputItem = Item.of(`productivebees:configurable_honeycomb
`, `{EntityTag:{type:"productivebees:${beeName}"}}`);
        const output = [{ item: outputItem, chance: 10000 }];
        makeMatrixRecipes(`kubejs:gtceu/melferious_matrix/${beeName}`, input, flower, output);
    }

    // Recipes based on the previous list of .json files
    addGenericBeeRecipe('amethyst');
    makeMatrixRecipes(
        'kubejs:gtceu/melferious_matrix/crystalline',
        Item.of('productivebees:bee_cage', '{type:"productivebees:crystalline", entity: "productivebees:configurable_bee"}'),
        Item.of('minecraft:quartz_block'),
        [{ item: Item.of("productivebees:configurable_honeycomb", '{EntityTag:{type:"productivebees:crystalline"}}'), chance: 10000 }]
    );
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
    makeMatrixRecipes(
        'kubejs:gtceu/melferious_matrix/neutronium',
        Item.of('productivebees:bee_cage', '{type:"productivebees:neutronium", entity: "productivebees:configurable_bee"}'),
        Item.of('gtceu:neutronium_block'),
        [{ item: Item.of("productivebees:configurable_honeycomb", '{EntityTag:{type:"productivebees:neutronium"}}'), chance: 10000 }]
    );
makeMatrixRecipes(
    'kubejs:gtceu/melferious_matrix/slimy',
    Item.of('productivebees:bee_cage', '{type:"productivebees:slimy", entity: "productivebees:configurable_bee"}'),
    Item.of('minecraft:slime_block'),
    [{ item: Item.of("productivebees:configurable_honeycomb", '{EntityTag:{type:"productivebees:slimy"}}'), chance: 10000 }]
);
    addOreBeeRecipe('oilsands'); // Might not have a block form
    addOreBeeRecipe('palladium');
    addOreBeeRecipe('pyrochlore');
    addOreBeeRecipe('pyrolusite');
    addOreBeeRecipe('realgar');
    addOreBeeRecipe('scheelite');
    makeMatrixRecipes(
        'kubejs:gtceu/melferious_matrix/sheldonite',
        Item.of('productivebees:bee_cage', '{type:"productivebees:sheldonite", entity: "productivebees:configurable_bee"}'),
        Item.of('gtceu:raw_cooperite_block'),
        [{ item: Item.of("productivebees:configurable_honeycomb", '{EntityTag:{type:"productivebees:sheldonite"}}'), chance: 10000 }]
    );
    addOreBeeRecipe('sphalerite');
    addOreBeeRecipe('stibnite');
    addOreBeeRecipe('tantalite');
    addOreBeeRecipe('tetrahedrite');
    addOreBeeRecipe('tricalcium_phosphate'); // Might not have a block form
    addOreBeeRecipe('tungstate');
    addOreBeeRecipe('vanadium_magnetite');
//////////////////// Wanna Section ////////////////
function addWannaBeeRecipe(beeName, mobEntityType) {
    const recipeBuilder = phoenixvine.recipes.gtceu.melferious_matrix(`kubejs:gtceu/melferious_matrix/wanna_${beeName.toLowerCase().replace(' ', '_')}`)
        .circuit(1)
        .EUt(1048)
        .duration(300)
        .notConsumable(IngredientHelper.weakNBT(Item.of('productivebees:bee_cage', `{type:"productivebees:wanna", entity: "productivebees:configurable_bee"}`)).withCount(1))
        .notConsumable(Item.of("productivebees:amber", `{BlockEntityTag:{EntityData:{entityType:"${mobEntityType}"}}}`).weakNBT())
        .notConsumable(Item.of('productivebees:upgrade_productivity_2', 1));
    return recipeBuilder; // Return the recipe builder to chain output definitions
}

const piglinRecipe = addWannaBeeRecipe('Piglin', 'minecraft:piglin');
piglinRecipe.chancedOutput('minecraft:gold_ingot', 6000, 1); // 60%
piglinRecipe.chancedOutput('minecraft:rotten_flesh', 4000, 1); // 40%
piglinRecipe.chancedOutput('minecraft:porkchop', 3000, 1); // 30%

const hoglinRecipe = addWannaBeeRecipe('Hoglin', 'minecraft:hoglin');
hoglinRecipe.chancedOutput('minecraft:porkchop', 7000, 2); // 70%
hoglinRecipe.chancedOutput('minecraft:leather', 5000, 1); // 50%

const zombifiedPiglinRecipe = addWannaBeeRecipe('Zombified Piglin', 'minecraft:zombified_piglin');
zombifiedPiglinRecipe.chancedOutput('minecraft:gold_ingot', 5000, 1); // 50%
zombifiedPiglinRecipe.chancedOutput('minecraft:rotten_flesh', 6000, 2); // 60%

const zombifiedHoglinRecipe = addWannaBeeRecipe('Zombified Hoglin', 'minecraft:zombified_hoglin');
zombifiedHoglinRecipe.chancedOutput('minecraft:rotten_flesh', 7500, 2); // 75%
zombifiedHoglinRecipe.chancedOutput('minecraft:leather', 4000, 1); // 40%

const piglinBruteRecipe = addWannaBeeRecipe('Piglin Brute', 'minecraft:piglin_brute');
piglinBruteRecipe.chancedOutput('minecraft:gold_ingot', 8000, 2); // 80%
piglinBruteRecipe.chancedOutput('minecraft:rotten_flesh', 2000, 1); // 20%
piglinBruteRecipe.chancedOutput('minecraft:porkchop', 4000, 1); // 40%

const shulkerRecipe = addWannaBeeRecipe('Shulker', 'minecraft:shulker');
shulkerRecipe.chancedOutput('minecraft:shulker_shell', 6500, 1); // 65%

const phantomRecipe = addWannaBeeRecipe('Phantom', 'minecraft:phantom');
phantomRecipe.chancedOutput('minecraft:phantom_membrane', 7000, 1); // 70%

const blazeRecipe = addWannaBeeRecipe('Blaze', 'minecraft:blaze');
blazeRecipe.chancedOutput('minecraft:blaze_rod', 6000, 1); // 60%

const elderGuardianRecipe = addWannaBeeRecipe('Elder Guardian', 'minecraft:elder_guardian');
elderGuardianRecipe.chancedOutput('minecraft:prismarine_shard', 5000, 3); // 50%
elderGuardianRecipe.chancedOutput('minecraft:prismarine_crystals', 4000, 2); // 40%
elderGuardianRecipe.chancedOutput('minecraft:sponge', 1000, 1); // 10%

const evokerRecipe = addWannaBeeRecipe('Evoker', 'minecraft:evoker');
evokerRecipe.chancedOutput('minecraft:totem_of_undying', 1500, 1); // 15%
evokerRecipe.chancedOutput('minecraft:emerald', 5000, 2); // 50%

const magmaCubeRecipe = addWannaBeeRecipe('Magma Cube', 'minecraft:magma_cube');
magmaCubeRecipe.chancedOutput('minecraft:magma_cream', 7500, 2); // 75%

const wardenRecipe = addWannaBeeRecipe('Warden', 'minecraft:warden');
wardenRecipe.chancedOutput('minecraft:sculk_catalyst', 1000, 1); // 10%
wardenRecipe.chancedOutput('minecraft:echo_shard', 3000, 2); // 30%

const illagerRecipe = addWannaBeeRecipe('Illager', 'minecraft:pillager'); // Using pillager as a general illager
illagerRecipe.chancedOutput('minecraft:crossbow', 4000, 1); // 40%

const slimeRecipe = addWannaBeeRecipe('Slime', 'minecraft:slime');
slimeRecipe.chancedOutput('minecraft:slime_ball', 8000, 3); // 80%

const vindicatorRecipe = addWannaBeeRecipe('Vindicator', 'minecraft:vindicator');
vindicatorRecipe.chancedOutput('minecraft:emerald', 5500, 1); // 55%
vindicatorRecipe.chancedOutput('minecraft:iron_axe', 4000, 1); // 40%

const witchRecipe = addWannaBeeRecipe('Witch', 'minecraft:witch');
witchRecipe.chancedOutput('minecraft:glass_bottle', 5000, 1); // 50%
witchRecipe.chancedOutput('minecraft:glowstone_dust', 3000, 1); // 30%
witchRecipe.chancedOutput('minecraft:redstone', 3000, 1); // 30%
witchRecipe.chancedOutput('minecraft:spider_eye', 3000, 1); // 30%
witchRecipe.chancedOutput('minecraft:sugar', 3000, 1); // 30%
witchRecipe.chancedOutput('minecraft:stick', 3000, 1); // 30%
witchRecipe.chancedOutput('minecraft:gunpowder', 3000, 1); // 30%

const witherSkeletonRecipe = addWannaBeeRecipe('Wither Skeleton', 'minecraft:wither_skeleton');
witherSkeletonRecipe.chancedOutput('minecraft:coal', 6000, 1); // 60%
witherSkeletonRecipe.chancedOutput('minecraft:bone', 5000, 1); // 50%
witherSkeletonRecipe.chancedOutput('minecraft:wither_skeleton_skull', 500, 1); // 5%

const creeperRecipe = addWannaBeeRecipe('Creeper', 'minecraft:creeper');
creeperRecipe.chancedOutput('minecraft:gunpowder', 7500, 2); // 75%

const zombieRecipe = addWannaBeeRecipe('Zombie', 'minecraft:zombie');
zombieRecipe.chancedOutput('minecraft:rotten_flesh', 9000, 3); // 90%
zombieRecipe.chancedOutput('minecraft:iron_ingot', 500, 1);    // 5%
zombieRecipe.chancedOutput('minecraft:carrot', 500, 1);      // 5%
zombieRecipe.chancedOutput('minecraft:potato', 500, 1);      // 5%

const skeletonRecipe = addWannaBeeRecipe('Skeleton', 'minecraft:skeleton');
skeletonRecipe.chancedOutput('minecraft:bone', 8000, 2);      // 80%
skeletonRecipe.chancedOutput('minecraft:arrow', 500, 1);     // 5%

const spiderRecipe = addWannaBeeRecipe('Spider', 'minecraft:spider');
spiderRecipe.chancedOutput('minecraft:string', 8500, 4);      // 85%
spiderRecipe.chancedOutput('minecraft:spider_eye', 1000, 1); // 10%

const endermanRecipe = addWannaBeeRecipe('Enderman', 'minecraft:enderman');
endermanRecipe.chancedOutput('minecraft:ender_pearl', 6000, 1); // 60%

const ghastRecipe = addWannaBeeRecipe('Ghast', 'minecraft:ghast');
ghastRecipe.chancedOutput('minecraft:ghast_tear', 7000, 1); // 70%
ghastRecipe.chancedOutput('minecraft:gunpowder', 2000, 1);    // 20%

const witherRecipe = addWannaBeeRecipe('Wither', 'minecraft:wither');
witherRecipe.chancedOutput('minecraft:nether_star', 1000, 1); // 10%

const enderDragonRecipe = addWannaBeeRecipe('EnderDragon', 'minecraft:ender_dragon');
enderDragonRecipe.chancedOutput('minecraft:dragon_breath', 5000, 5); // 50%

const cowRecipe = addWannaBeeRecipe('Cow', 'minecraft:cow');
cowRecipe.chancedOutput('minecraft:leather', 9500, 2); // 95%
cowRecipe.chancedOutput('minecraft:beef', 9000, 2);    // 90%

const rabbitRecipe = addWannaBeeRecipe('Rabbit', 'minecraft:rabbit');
rabbitRecipe.chancedOutput('minecraft:rabbit_hide', 8000, 1);    // 80%
rabbitRecipe.chancedOutput('minecraft:rabbit_foot', 1000, 1);    // 10%
rabbitRecipe.chancedOutput('minecraft:cooked_rabbit', 7000, 1); // 70%

const pigRecipe = addWannaBeeRecipe('Pig', 'minecraft:pig');
pigRecipe.chancedOutput('minecraft:porkchop', 9200, 3); // 92%

const sheepRecipe = addWannaBeeRecipe('Sheep', 'minecraft:sheep');
sheepRecipe.chancedOutput('minecraft:mutton', 9000, 2); // 90%
sheepRecipe.chancedOutput('minecraft:wool', 8500, 1);    // 85%
    });