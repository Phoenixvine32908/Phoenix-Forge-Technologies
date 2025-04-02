const Tags = Java.loadClass('dev.latvian.mods.kubejs.util.Tags')
const $FluidStackJS = Java.loadClass('dev.latvian.mods.kubejs.fluid.FluidStackJS')

ServerEvents.recipes(phoenixvine => {


    function makeName(inputString) {
        let underscore = inputString.split('_')
        let returnString = ''
        if (inputString == 'bee') {
            returnString = 'Bee'
        } else if (underscore.length == 1) {
            returnString = inputString.charAt(0).toUpperCase() + inputString.slice(1) + ' Bee'
        } else {
            returnString = underscore[0].charAt(0).toUpperCase() + underscore[0].slice(1) + ' ' + underscore[1].charAt(0).toUpperCase() + underscore[1].slice(1) + ' Bee'
        }
        return returnString
    }

    function addOutputs(recipeBuilder, output, count) {
        let i = count
        while (i > 127) {
            recipeBuilder.itemOutputs(output.withCount(127))
            i = i - 127
        }
        recipeBuilder.itemOutputs(output.withCount(i))
    }

    function addChancedOutputs(recipeBuilder, output, chance, count) {
        let i = count
        while (i > 127) {
            recipeBuilder.chancedOutput(output.withCount(127), chance, 0)
            i = i - 127
        }
        recipeBuilder.chancedOutput(output.withCount(i), chance, 0)
    }

    function makeMatrixRecipes(id, input, flower, outputs) {
        let recipeBuilder = phoenixvine.recipes.gtceu.melferious_matrix(id)
            .circuit(1) // Set the circuit to 1
            .EUt(1048) // Changed EUt to 32,768
            .duration(300) // Changed duration to 600
            .notConsumable(IngredientHelper.weakNBT(Item.of(input)).withCount(1)) // Input count is 1
            .notConsumable(Item.of('productivebees:upgrade_productivity_2', 1)) // Productivity upgrade count for circuit 1
        outputs.forEach((output) => {
            if (output.chance == 10000) {
                if (40 * 1 > 127 && output.item.hasNBT()) {
                    addOutputs(recipeBuilder, Item.of(output.item), 40 * 1)
                } else {
                    recipeBuilder.itemOutputs(Item.of(output.item, 40 * 1))
                }
            } else {
                if (40 * 1 > 127 && output.item.hasNBT()) {
                    addChancedOutputs(recipeBuilder, Item.of(output.item), output.chance, 40 * 1)
                } else {
                    recipeBuilder.chancedOutput(Item.of(output.item, 40 * 1), output.chance, 0)
                }
            }
        })
        if (flower instanceof $FluidStackJS) {
            recipeBuilder.notConsumableFluid(flower)
        } else {
            recipeBuilder.notConsumable(flower)
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
        }).id('gtceu:shaped/melferious_matrix')

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

   makeMatrixRecipes(
    'kubejs:gtceu/melferious_matrix/creeper',
    Item.of("productivebees:bee_cage", '{type:"productivebees:wanna", entity: "productivebees:configurable_bee"}'),
    Item.of("productivebees:amber", '{BlockEntityTag:{EntityData:{entityType:"minecraft:creeper"}}}').strongNBT(),
    [{ item: 'minecraft:gunpowder', chance: 10000 }] // Creeper drop as an output object
);
})