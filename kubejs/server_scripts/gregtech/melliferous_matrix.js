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
        const outputItem = Item.of(`productivebees:configurable_comb`, `{EntityTag:{type:"productivebees:${beeName}"}}`);
        const output = [{ item: outputItem, chance: 10000 }];
        makeMatrixRecipes(`kubejs:gtceu/melferious_matrix/${beeName}`, input, flower, output);
    }

    function addOreBeeRecipe(oreName) {
    const beeName = oreName;
    const input = Item.of('productivebees:bee_cage', `{type:"productivebees:${beeName}", entity: "productivebees:configurable_bee"}`);
    const flower = Item.of(`gtceu:raw_${oreName}_block`);
    const outputItem = Item.of(`productivebees:configurable_comb`, `{EntityTag:{type:"productivebees:${beeName}"}}`);
    const output = [{ item: outputItem, chance: 10000 }];
    makeMatrixRecipes(`kubejs:gtceu/melferious_matrix/${beeName}`, input, flower, output);
}


    function addGenericBeeRecipe(beeName) {
        const input = Item.of('productivebees:bee_cage', `{type:"productivebees:${beeName}", entity: "productivebees:configurable_bee"}`);
        const flower = Item.of(`minecraft:${beeName}_block`); // Assuming block name is beeName + "_block"
        const outputItem = Item.of(`productivebees:configurable_comb`, `{EntityTag:{type:"productivebees:${beeName}"}}`);
        const output = [{ item: outputItem, chance: 10000 }];
        makeMatrixRecipes(`kubejs:gtceu/melferious_matrix/${beeName}`, input, flower, output);
    }

    // Recipes based on the previous list of .json files
    addGenericBeeRecipe('amethyst');
    makeMatrixRecipes(
        'kubejs:gtceu/melferious_matrix/crystalline',
        Item.of('productivebees:bee_cage', '{type:"productivebees:crystalline", entity: "productivebees:configurable_bee"}'),
        Item.of('minecraft:quartz_block'),
        [{ item: Item.of("productivebees:configurable_comb", '{EntityTag:{type:"productivebees:crystalline"}}'), chance: 10000 }]
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
        [{ item: Item.of("productivebees:configurable_comb", '{EntityTag:{type:"productivebees:neutronium"}}'), chance: 10000 }]
    );
makeMatrixRecipes(
    'kubejs:gtceu/melferious_matrix/slimy',
    Item.of('productivebees:bee_cage', '{type:"productivebees:slimy", entity: "productivebees:configurable_bee"}'),
    Item.of('minecraft:slime_block'),
    [{ item: Item.of("productivebees:configurable_comb", '{EntityTag:{type:"productivebees:slimy"}}'), chance: 10000 }]
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
        [{ item: Item.of("productivebees:configurable_comb", '{EntityTag:{type:"productivebees:sheldonite"}}'), chance: 10000 }]
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
    const recipeBuilder = phoenixvine.recipes.gtceu.melferious_matrix(`kubejs:gtceu/melferious_matrix/wanna_${beeName.toLowerCase().replace(':', '_')}`)
        .circuit(1)
        .EUt(1048)
        .duration(300)
        .notConsumable(IngredientHelper.weakNBT(Item.of('productivebees:bee_cage', `{type:"productivebees:wanna", entity: "productivebees:configurable_bee"}`)).withCount(1))
        .notConsumable(Item.of("productivebees:amber", `{BlockEntityTag:{EntityData:{entityType:"${mobEntityType}"}}}`).weakNBT())
        .notConsumable(Item.of('productivebees:upgrade_productivity_2', 1));
    return recipeBuilder; // Return the recipe builder to chain output definitions
}

const creeperRecipe = addWannaBeeRecipe('Creeper', 'minecraft:creeper');
creeperRecipe.chancedOutput('minecraft:gunpowder', 7500, 2); // 75%

const zombieRecipe = addWannaBeeRecipe('Zombie', 'minecraft:zombie');
zombieRecipe.chancedOutput('minecraft:rotten_flesh', 9000, 3); // 90%
zombieRecipe.chancedOutput('minecraft:iron_ingot', 500, 1);   // 5%
zombieRecipe.chancedOutput('minecraft:carrot', 500, 1);      // 5%
zombieRecipe.chancedOutput('minecraft:potato', 500, 1);      // 5%

const skeletonRecipe = addWannaBeeRecipe('Skeleton', 'minecraft:skeleton');
skeletonRecipe.chancedOutput('minecraft:bone', 8000, 2);    // 80%
skeletonRecipe.chancedOutput('minecraft:arrow', 500, 1);   // 5%

const spiderRecipe = addWannaBeeRecipe('Spider', 'minecraft:spider');
spiderRecipe.chancedOutput('minecraft:string', 8500, 4);    // 85%
spiderRecipe.chancedOutput('minecraft:spider_eye', 1000, 1); // 10%

const endermanRecipe = addWannaBeeRecipe('Enderman', 'minecraft:enderman');
endermanRecipe.chancedOutput('minecraft:ender_pearl', 6000, 1); // 60%

const ghastRecipe = addWannaBeeRecipe('Ghast', 'minecraft:ghast');
ghastRecipe.chancedOutput('minecraft:ghast_tear', 7000, 1); // 70%
ghastRecipe.chancedOutput('minecraft:gunpowder', 2000, 1);  // 20%

const witherRecipe = addWannaBeeRecipe('Wither', 'minecraft:wither');
witherRecipe.chancedOutput('minecraft:nether_star', 1000, 1); // 10%

const enderDragonRecipe = addWannaBeeRecipe('EnderDragon', 'minecraft:ender_dragon');
enderDragonRecipe.chancedOutput('minecraft:dragon_breath', 5000, 5); // 50%

const cowRecipe = addWannaBeeRecipe('Cow', 'minecraft:cow');
cowRecipe.chancedOutput('minecraft:leather', 9500, 2); // 95%
cowRecipe.chancedOutput('minecraft:beef', 9000, 2);   // 90%

const rabbitRecipe = addWannaBeeRecipe('Rabbit', 'minecraft:rabbit');
rabbitRecipe.chancedOutput('minecraft:rabbit_hide', 8000, 1);   // 80%
rabbitRecipe.chancedOutput('minecraft:rabbit_foot', 1000, 1);   // 10%
rabbitRecipe.chancedOutput('minecraft:cooked_rabbit', 7000, 1); // 70%

const pigRecipe = addWannaBeeRecipe('Pig', 'minecraft:pig');
pigRecipe.chancedOutput('minecraft:porkchop', 9200, 3); // 92%

const sheepRecipe = addWannaBeeRecipe('Sheep', 'minecraft:sheep');
sheepRecipe.chancedOutput('minecraft:mutton', 9000, 2); // 90%
sheepRecipe.chancedOutput('minecraft:wool', 8500, 1);   // 85%
    });