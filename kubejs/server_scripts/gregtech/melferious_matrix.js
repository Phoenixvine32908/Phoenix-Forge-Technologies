/**
melferious matrix recipes
 */

const Tags = Java.loadClass("dev.latvian.mods.kubejs.util.Tags");
const $FluidStackJS = Java.loadClass("dev.latvian.mods.kubejs.fluid.FluidStackJS");

ServerEvents.recipes(phoenixvine => {

    function addWannaBeeRecipe(beeName, mobEntityType, upgrade) {
        const recipeBuilder = phoenixvine.recipes.gtceu.melferious_matrix(`kubejs:gtceu/melferious_matrix/wanna_${beeName.toLowerCase().replace(" ", "_")}_${upgrade.split("_").pop()}`)
            .EUt(GTValues.VA[GTValues.LuV] / 2)
            .duration(450)
            .notConsumable(IngredientHelper.weakNBT(Item.of("productivebees:bee_cage", "{type:\"productivebees:wanna\", entity: \"productivebees:configurable_bee\"}")).withCount(1))
            .notConsumable(Item.of("productivebees:amber", `{BlockEntityTag:{EntityData:{entityType:"${mobEntityType}"}}}`).weakNBT())
            .notConsumable(Item.of(upgrade, 1));
        return recipeBuilder; // Return the recipe builder to chain output definitions
    }

    function setCircuit(recipeBuilder, circuitLevel) {
        recipeBuilder.circuit(circuitLevel);
    }

    // Only one recipe per mob type, using upgrade 2

    // Piglin
    const piglinRecipe = addWannaBeeRecipe("Piglin", "minecraft:piglin", "productivebees:upgrade_productivity_2");
    setCircuit(piglinRecipe, 1);
    piglinRecipe.itemOutputsRanged("minecraft:gold_ingot", 4, 16);
    piglinRecipe.itemOutputsRanged("minecraft:rotten_flesh", 32, 128);
    piglinRecipe.itemOutputsRanged("minecraft:porkchop", 32, 128);
    piglinRecipe.itemOutputsRanged("minecraft:emerald", 4, 16);

    // Hoglin
    const hoglinRecipe = addWannaBeeRecipe("Hoglin", "minecraft:hoglin", "productivebees:upgrade_productivity_2");
    setCircuit(hoglinRecipe, 1);
    hoglinRecipe.itemOutputsRanged("minecraft:porkchop", 32, 128);
    hoglinRecipe.itemOutputsRanged("minecraft:leather", 32, 128);

    // Zombified Piglin
    const zombifiedPiglinRecipe = addWannaBeeRecipe("Zombified Piglin", "minecraft:zombified_piglin", "productivebees:upgrade_productivity_2");
    setCircuit(zombifiedPiglinRecipe, 1);
    zombifiedPiglinRecipe.itemOutputsRanged("minecraft:gold_ingot", 4, 16);
    zombifiedPiglinRecipe.itemOutputsRanged("minecraft:rotten_flesh", 32, 128);
    zombifiedPiglinRecipe.itemOutputsRanged("minecraft:gold_nugget", 32, 128);

    // Zombified Hoglin
    const zombifiedHoglinRecipe = addWannaBeeRecipe("Zombified Hoglin", "minecraft:zombified_hoglin", "productivebees:upgrade_productivity_2");
    setCircuit(zombifiedHoglinRecipe, 1);
    zombifiedHoglinRecipe.itemOutputsRanged("minecraft:rotten_flesh", 32, 128);
    zombifiedHoglinRecipe.itemOutputsRanged("minecraft:leather", 32, 128);
    zombifiedHoglinRecipe.itemOutputsRanged("minecraft:slime_ball", 32, 128);

    // Piglin Brute
    const piglinBruteRecipe = addWannaBeeRecipe("Piglin Brute", "minecraft:piglin_brute", "productivebees:upgrade_productivity_2");
    setCircuit(piglinBruteRecipe, 1);
    piglinBruteRecipe.itemOutputsRanged("minecraft:gold_ingot", 4, 16);
    piglinBruteRecipe.itemOutputsRanged("minecraft:rotten_flesh", 32, 128);
    piglinBruteRecipe.itemOutputsRanged("minecraft:porkchop", 32, 128);
    piglinBruteRecipe.itemOutputsRanged("minecraft:netherite_scrap", 1, 4);

    // Shulker
    const shulkerRecipe = addWannaBeeRecipe("Shulker", "minecraft:shulker", "productivebees:upgrade_productivity_2");
    setCircuit(shulkerRecipe, 1);
    shulkerRecipe.itemOutputsRanged("minecraft:shulker_shell", 1, 4);
    shulkerRecipe.itemOutputsRanged("minecraft:ender_pearl", 4, 16);

    // Phantom
    const phantomRecipe = addWannaBeeRecipe("Phantom", "minecraft:phantom", "productivebees:upgrade_productivity_2");
    setCircuit(phantomRecipe, 1);
    phantomRecipe.itemOutputsRanged("minecraft:phantom_membrane", 4, 16);
    phantomRecipe.itemOutputsRanged("minecraft:leather", 32, 128);

    // Blaze
    const blazeRecipe = addWannaBeeRecipe("Blaze", "minecraft:blaze", "productivebees:upgrade_productivity_2");
    setCircuit(blazeRecipe, 1);
    blazeRecipe.itemOutputsRanged("minecraft:blaze_rod", 32, 128);
    blazeRecipe.itemOutputsRanged("minecraft:glowstone_dust", 32, 128);

    // Elder Guardian
    const elderGuardianRecipe = addWannaBeeRecipe("Elder Guardian", "minecraft:elder_guardian", "productivebees:upgrade_productivity_2");
    setCircuit(elderGuardianRecipe, 1);
    elderGuardianRecipe.itemOutputsRanged("minecraft:prismarine_shard", 4, 16);
    elderGuardianRecipe.itemOutputsRanged("minecraft:prismarine_crystals", 4, 16);
    elderGuardianRecipe.itemOutputsRanged("minecraft:sponge", 4, 16);
    elderGuardianRecipe.itemOutputsRanged("minecraft:diamond_block", 1, 4);
    elderGuardianRecipe.itemOutputsRanged("minecraft:heart_of_the_sea", 1, 4);

    // Evoker
    const evokerRecipe = addWannaBeeRecipe("Evoker", "minecraft:evoker", "productivebees:upgrade_productivity_2");
    setCircuit(evokerRecipe, 1);
    evokerRecipe.itemOutputsRanged("minecraft:totem_of_undying", 1, 4);
    evokerRecipe.itemOutputsRanged("minecraft:emerald", 4, 16);
    evokerRecipe.itemOutputsRanged("minecraft:gold_ingot", 4, 16);

    // Magma Cube
    const magmaCubeRecipe = addWannaBeeRecipe("Magma Cube", "minecraft:magma_cube", "productivebees:upgrade_productivity_2");
    setCircuit(magmaCubeRecipe, 1);
    magmaCubeRecipe.itemOutputsRanged("minecraft:magma_cream", 32, 128);
    magmaCubeRecipe.itemOutputsRanged("minecraft:coal", 32, 128);

    // Warden
    const wardenRecipe = addWannaBeeRecipe("Warden", "minecraft:warden", "productivebees:upgrade_productivity_2");
    setCircuit(wardenRecipe, 1);
    wardenRecipe.itemOutputsRanged("minecraft:sculk_catalyst", 4, 16);
    wardenRecipe.itemOutputsRanged("minecraft:echo_shard", 4, 16);
    wardenRecipe.itemOutputsRanged("minecraft:diamond", 8, 32);

    // Illager (Pillager)
    const illagerRecipe = addWannaBeeRecipe("Illager", "minecraft:pillager", "productivebees:upgrade_productivity_2");
    setCircuit(illagerRecipe, 1);
    illagerRecipe.itemOutputsRanged("minecraft:emerald", 4, 16);

    // Slime
    const slimeRecipe = addWannaBeeRecipe("Slime", "minecraft:slime", "productivebees:upgrade_productivity_2");
    setCircuit(slimeRecipe, 1);
    slimeRecipe.itemOutputsRanged("minecraft:slime_ball", 32, 128);
    slimeRecipe.itemOutputsRanged("minecraft:sugar", 32, 128);

    // Vindicator
    const vindicatorRecipe = addWannaBeeRecipe("Vindicator", "minecraft:vindicator", "productivebees:upgrade_productivity_2");
    setCircuit(vindicatorRecipe, 1);
    vindicatorRecipe.itemOutputsRanged("minecraft:emerald", 4, 16);
    vindicatorRecipe.itemOutputsRanged("minecraft:oak_log", 32, 128);

    // Witch
    const witchRecipe = addWannaBeeRecipe("Witch", "minecraft:witch", "productivebees:upgrade_productivity_2");
    setCircuit(witchRecipe, 1);
    witchRecipe.itemOutputsRanged("minecraft:glass_bottle", 32, 128);
    witchRecipe.itemOutputsRanged("minecraft:glowstone_dust", 32, 128);
    witchRecipe.itemOutputsRanged("minecraft:redstone", 32, 128);
    witchRecipe.itemOutputsRanged("minecraft:spider_eye", 32, 128);
    witchRecipe.itemOutputsRanged("minecraft:sugar", 32, 128);
    witchRecipe.itemOutputsRanged("minecraft:stick", 32, 128);
    witchRecipe.itemOutputsRanged("minecraft:gunpowder", 32, 128);
    witchRecipe.itemOutputsRanged("minecraft:fermented_spider_eye", 32, 128);

    // Wither Skeleton
    const witherSkeletonRecipe = addWannaBeeRecipe("Wither Skeleton", "minecraft:wither_skeleton","productivebees:upgrade_productivity_2");
    setCircuit(witherSkeletonRecipe, 1);
    witherSkeletonRecipe.itemOutputsRanged("minecraft:coal", 32, 128);
    witherSkeletonRecipe.itemOutputsRanged("minecraft:bone", 32, 128);
    witherSkeletonRecipe.itemOutputsRanged("minecraft:wither_skeleton_skull", 2, 24);
    witherSkeletonRecipe.itemOutputsRanged("minecraft:nether_wart", 32, 128);

    // Creeper
    const creeperRecipe = addWannaBeeRecipe("Creeper", "minecraft:creeper", "productivebees:upgrade_productivity_2");
    setCircuit(creeperRecipe, 1);
    creeperRecipe.itemOutputsRanged("minecraft:gunpowder", 32, 128);
    creeperRecipe.itemOutputsRanged("minecraft:tnt", 4, 16);

    // Zombie
    const zombieRecipe = addWannaBeeRecipe("Zombie", "minecraft:zombie", "productivebees:upgrade_productivity_2");
    setCircuit(zombieRecipe, 1);
    zombieRecipe.itemOutputsRanged("minecraft:rotten_flesh", 32, 128);
    zombieRecipe.itemOutputsRanged("minecraft:iron_ingot", 32, 128);
    zombieRecipe.itemOutputsRanged("minecraft:carrot", 32, 128);
    zombieRecipe.itemOutputsRanged("minecraft:potato", 32, 128);
    zombieRecipe.itemOutputsRanged("minecraft:copper_ingot", 32, 128);

    // Skeleton
    const skeletonRecipe = addWannaBeeRecipe("Skeleton", "minecraft:skeleton", "productivebees:upgrade_productivity_2");
    setCircuit(skeletonRecipe, 1);
    skeletonRecipe.itemOutputsRanged("minecraft:bone", 32, 128);
    skeletonRecipe.itemOutputsRanged("minecraft:arrow", 32, 128);
    skeletonRecipe.itemOutputsRanged("minecraft:string", 32, 128);

    // Spider
    const spiderRecipe = addWannaBeeRecipe("Spider", "minecraft:spider", "productivebees:upgrade_productivity_2");
    setCircuit(spiderRecipe, 1);
    spiderRecipe.itemOutputsRanged("minecraft:string", 32, 128);
    spiderRecipe.itemOutputsRanged("minecraft:spider_eye", 32, 128);
    spiderRecipe.itemOutputsRanged("minecraft:fermented_spider_eye", 32, 128);

    // Enderman
    const endermanRecipe = addWannaBeeRecipe("Enderman", "minecraft:enderman", "productivebees:upgrade_productivity_2");
    setCircuit(endermanRecipe, 1);
    endermanRecipe.itemOutputsRanged("minecraft:ender_pearl", 32, 128);
    endermanRecipe.itemOutputsRanged("minecraft:ender_eye", 1, 4);

    // Ghast
    const ghastRecipe = addWannaBeeRecipe("Ghast", "minecraft:ghast", "productivebees:upgrade_productivity_2");
    setCircuit(ghastRecipe, 1);
    ghastRecipe.itemOutputsRanged("minecraft:ghast_tear", 4, 16);
    ghastRecipe.itemOutputsRanged("minecraft:gunpowder", 32, 128);
    ghastRecipe.itemOutputsRanged("minecraft:gold_nugget", 32, 128);
})
