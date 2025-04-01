
const Tags = Java.loadClass('dev.latvian.mods.kubejs.util.Tags')
const $FluidStackJS = Java.loadClass('dev.latvian.mods.kubejs.fluid.FluidStackJS')

ServerEvents.recipes(allthemods => {


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
        let recipeBuilder = allthemods.recipes.gtceu.melferious_matrix(id)
            .circuit(1) // Set the circuit to 1
            .EUt(32768) // Changed EUt to 32,768
            .duration(600) // Changed duration to 600
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

    ////////////// machine controllers ////////////////
    allthemods.shaped('gtceu:melferious_matrix', ['CAC', 'ABA', 'WSW'],
        {
            A: '#gtceu:circuits/ev',
            W: 'gtceu:black_steel_single_cable',
            S: 'gtceu:stable_machine_casing',
            C: 'productivebees:upgrade_productivity_4',
            B: 'productivebees:upgrade_comb_block'
        }).id('gtceu:shaped/melferious_matrix')

    ////////////// melferious_matrix recipes - Iron Bee only ////////////////

    let iron_input = Item.of('productivebees:bee_cage', '{type:"productivebees:iron", entity: "productivebees:configurable_bee"}')
    let iron_flower = Item.of('minecraft:iron_block')
    let iron_output = [{ item: Item.of("productivebees:configurable_comb", '{EntityTag:{type:"productivebees:iron"}}'), chance: 10000 }]
    makeMatrixRecipes('kubejs:gtceu/melferious_matrix/iron', iron_input, iron_flower, iron_output)

    ////////////// melferious_matrix recipes - Diamond Bee ////////////////

    let diamond_input = Item.of('productivebees:bee_cage', '{type:"productivebees:diamond", entity: "productivebees:configurable_bee"}')
    let diamond_flower = Item.of('minecraft:diamond_block')
    let diamond_output = [{ item: Item.of("productivebees:configurable_comb", '{EntityTag:{type:"productivebees:diamond"}}'), chance: 10000 }]
    makeMatrixRecipes('kubejs:gtceu/melferious_matrix/diamond', diamond_input, diamond_flower, diamond_output)

    ////////////// melferious_matrix recipes - Redstone Bee ////////////////

    let redstone_input = Item.of('productivebees:bee_cage', '{type:"productivebees:redstone", entity: "productivebees:configurable_bee"}')
    let redstone_flower = Item.of('minecraft:redstone_block')
    let redstone_output = [{ item: Item.of("productivebees:configurable_comb", '{EntityTag:{type:"productivebees:redstone"}}'), chance: 10000 }]
    makeMatrixRecipes('kubejs:gtceu/melferious_matrix/redstone', redstone_input, redstone_flower, redstone_output)

    ////////////// melferious_matrix recipes - Emerald Bee ////////////////

    let emerald_input = Item.of('productivebees:bee_cage', '{type:"productivebees:emerald", entity: "productivebees:configurable_bee"}')
    let emerald_flower = Item.of('minecraft:emerald_block')
    let emerald_output = [{ item: Item.of("productivebees:configurable_comb", '{EntityTag:{type:"productivebees:emerald"}}'), chance: 10000 }]
    makeMatrixRecipes('kubejs:gtceu/melferious_matrix/emerald', emerald_input, emerald_flower, emerald_output)

    ////////////// melferious_matrix recipes - Slimy Bee ////////////////

    let slimy_input = Item.of('productivebees:bee_cage', '{type:"productivebees:slimy", entity: "productivebees:configurable_bee"}')
    let slimy_flower = Item.of('minecraft:slime_block')
    let slimy_output = [{ item: Item.of("productivebees:configurable_comb", '{EntityTag:{type:"productivebees:slimy"}}'), chance: 10000 }]
    makeMatrixRecipes('kubejs:gtceu/melferious_matrix/slimy', slimy_input, slimy_flower, slimy_output)

})