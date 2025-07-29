ServerEvents.recipes(phoenix => {

    const outputBeeCageDisplayNames = {
        "lumber": "Lumber Bee",
        "quarry": "Quarry Bee",
        "rancher_bee": "Rancher Bee",
        "lepidolite": "Lepidolite Bee",
        "blazing": "Blazing Bee",
        "sculk": "Sculk Bee",
        "zinc": "Zinc Bee",
        "menril": "Menril Bee",
        "lapis": "Lapis Bee",
        "redstone": "Redstone Bee",
        "silky": "Silky Bee",
        "coal": "Coal Bee",
        "silicon": "Silicon Bee",
        "obsidian": "Obsidian Bee",
        "nickel": "Nickel Bee",
        "lead": "Lead Bee",
        "sticky_resin": "Sticky Resin Bee"
    };

    // Helper function to safely get item inputs from a tag
    // If the tag is empty, it returns a fallback item or logs a warning.
    function safeTagItemInput(tagName, fallbackItem, quantity) {
        let tag = Ingredient.of(tagName);
        if (tag.isEmpty()) {
            console.warn(`[KubeJS Recipes] Warning: Tag ${tagName} is empty or not found. Using fallback item: ${quantity}x ${fallbackItem}`);
            return `${quantity}x ${fallbackItem}`;
        }
        return `${quantity}x ${tagName}`;
    }

    // lumber_from_yellow_carpenter
    phoenix.recipes.gtceu.apis_progenitor('kubejs:gtceu/apis_progenitor/lumber_from_yellow_carpenter')
        .EUt(GTValues.VA[GTValues.IV] / 2)
        .duration(360)
        .itemInputs(safeTagItemInput('#minecraft:logs', 'minecraft:oak_log', 128))
        // Input: Yellow Carpenter Bee (non-configurable)
                    .itemInputs(IngredientHelper.weakNBT(Item.of('productivebees:bee_cage', {entity: "productivebees:yellow_black_carpente_bee",name: "Yellow Carpenter Be"})))
        // Output: Configurable Lumber Bee
        .itemOutputs(IngredientHelper.weakNBT(Item.of('productivebees:bee_cage', {entity: "productivebees:lumber_bee",name: "Lumber Bee"})))

    // lumber_from_green_carpenter
    phoenix.recipes.gtceu.apis_progenitor('kubejs:gtceu/apis_progenitor/lumber_from_green_carpenter')
        .EUt(GTValues.VA[GTValues.IV] / 2)
        .duration(360)
        .itemInputs(safeTagItemInput('#minecraft:logs', 'minecraft:oak_log', 128)) // Using safeTagItemInput
        // Input: Green Carpenter Bee (non-configurable)
                .itemInputs(IngredientHelper.weakNBT(Item.of('productivebees:bee_cage', {entity: "productivebees:green_carpenter_bee",name: "Green Carpenter Bee"})))
        // Output: Configurable Lumber Bee
        .itemOutputs(Item.of('productivebees:bee_cage', { entity: "productivebees:configurable_bee", name: outputBeeCageDisplayNames['lumber'], type: "productivebees:lumber" }));

    // quarry_from_digger
    phoenix.recipes.gtceu.apis_progenitor('kubejs:gtceu/apis_progenitor/quarry_from_digger')
        .EUt(GTValues.VA[GTValues.IV] / 2)
        .duration(360)
        .itemInputs(safeTagItemInput('#forge:stone', 'minecraft:stone', 128)) // Using safeTagItemInput
        // Input: Digger Bee (non-configurable)
                .itemInputs(IngredientHelper.weakNBT(Item.of('productivebees:bee_cage', {entity: "productivebees:digger_bee",name: "Digger Bee"})))
        // Output: Configurable Quarry Bee
        .itemOutputs(Item.of('productivebees:bee_cage', { type: "productivebees:quarry", name: "Quarry Bee" }).weakNBT())
 phoenix.recipes.gtceu.apis_progenitor('kubejs:gtceu/apis_progenitor/ramcher')
        .EUt(GTValues.VA[GTValues.IV] / 2)
        .duration(360)
         .itemInputs('4x gtceu:skim_milk_bucket')
        // Input: Digger Bee (non-configurable)
                .itemInputs(IngredientHelper.weakNBT(Item.of('productivebees:bee_cage', {entity: "productivebees:lumber_bee",name: "Lumber Bee"})))
        // Output: Configurable Quarry Bee
        .itemOutputs(Item.of('productivebees:bee_cage', { type: "productivebees:rancher", name: "Rancher Bee" }).weakNBT())


    // lepidolite_from_mason
    phoenix.recipes.gtceu.apis_progenitor('kubejs:gtceu/apis_progenitor/lepidolite_from_mason')
        .EUt(GTValues.VA[GTValues.IV] / 2)
        .duration(360)
        .itemInputs('4x gtceu:raw_lepidolite_block')
        // Input: Mason Bee (non-configurable)
                .itemInputs(IngredientHelper.weakNBT(Item.of('productivebees:bee_cage', {entity: "productivebees:mason_bee",name: "Mason Bee"})))
        // Output: Configurable Lepidolite Bee
        .itemOutputs(Item.of('productivebees:bee_cage', { entity: "productivebees:configurable_bee", name: outputBeeCageDisplayNames['lepidolite'], type: "productivebees:lepidolite" }));

    // blazing_from_nomad
    phoenix.recipes.gtceu.apis_progenitor('kubejs:gtceu/apis_progenitor/blazing_from_nomad')
        .EUt(GTValues.VA[GTValues.IV] / 2)
        .duration(360)
        .itemInputs('16x minecraft:blaze_rod')
        // Input: Nomad Bee (non-configurable)
                .itemInputs(IngredientHelper.weakNBT(Item.of('productivebees:bee_cage', {entity: "productivebees:nomad_bee",name: "Nomad Bee"})))
        // Output: Configurable Blazing Bee
        .itemOutputs(Item.of('productivebees:bee_cage', { entity: "productivebees:configurable_bee", name: outputBeeCageDisplayNames['blazing'], type: "productivebees:blazing" }));

    // sculk_from_digger
    phoenix.recipes.gtceu.apis_progenitor('kubejs:gtceu/apis_progenitor/sculk_from_digger')
        .EUt(GTValues.VA[GTValues.IV] / 2)
        .duration(360)
        .itemInputs('64x minecraft:sculk')
        // Input: Digger Bee (non-configurable)
                .itemInputs(IngredientHelper.weakNBT(Item.of('productivebees:bee_cage', {entity: "productivebees:digger_bee",name: "Digger Bee"})))
        // Output: Configurable Sculk Bee
        .itemOutputs(Item.of('productivebees:bee_cage', { entity: "productivebees:configurable_bee", name: outputBeeCageDisplayNames['sculk'], type: "productivebees:sculk" }));

    // zinc_from_sweat
    phoenix.recipes.gtceu.apis_progenitor('kubejs:gtceu/apis_progenitor/zinc_from_sweat')
        .EUt(GTValues.VA[GTValues.IV] / 2)
        .duration(360)
        .itemInputs('4x minecraft:iron_block')
        // Input: Sweat Bee (non-configurable)
                .itemInputs(IngredientHelper.weakNBT(Item.of('productivebees:bee_cage', {entity: "productivebees:sweat_bee",name: "Sweat Bee"})))
        // Output: Configurable Zinc Bee
        .itemOutputs(Item.of('productivebees:bee_cage', { entity: "productivebees:configurable_bee", name: outputBeeCageDisplayNames['zinc'], type: "productivebees:zinc" }));

    // menril_from_neon_cuckoo
    phoenix.recipes.gtceu.apis_progenitor('kubejs:gtceu/apis_progenitor/menril_from_neon_cuckoo')
        .EUt(GTValues.VA[GTValues.IV] / 2)
        .duration(360)
        .itemInputs('4x integrateddynamics:menril_log')
        // Input: Neon Cuckoo Bee (non-configurable)

                        .itemInputs(IngredientHelper.weakNBT(Item.of('productivebees:bee_cage', {entity: "productivebees:neon_cuckoo_bee",name: "Neon Cuckoo Bee"})))
        // Output: Configurable Menril Bee
        .itemOutputs(Item.of('productivebees:bee_cage', { entity: "productivebees:configurable_bee", name: outputBeeCageDisplayNames['menril'], type: "productivebees:menril" }));
   phoenix.recipes.gtceu.apis_progenitor('kubejs:gtceu/apis_progenitor/niter')
        .EUt(GTValues.VA[GTValues.IV] / 2)
        .duration(360)
        .itemInputs('4x minecraft:coal_block')
        // Input: Neon Cuckoo Bee (non-configurable)

                        .itemInputs(IngredientHelper.weakNBT(Item.of('productivebees:bee_cage', {entity: "productivebees:creeper_bee",name: "CreeBee"})))
        // Output: Configurable Menril Bee
        .itemOutputs(Item.of('productivebees:bee_cage', { entity: "productivebees:configurable_bee", name: outputBeeCageDisplayNames['niter'], type: "productivebees:niter" }));

    

    // redstone_from_chocolate_mining
    phoenix.recipes.gtceu.apis_progenitor('kubejs:gtceu/apis_progenitor/redstone_from_chocolate_mining')
        .EUt(GTValues.VA[GTValues.IV] / 2)
        .duration(360)
        .itemInputs('4x minecraft:glowstone')
        // Input: Chocolate Mining Bee (non-configurable)
                .itemInputs(IngredientHelper.weakNBT(Item.of('productivebees:bee_cage', {entity: "productivebees:chocolate_mining_bee",name: "Chocolate Mining Bee"})))
        // Output: Configurable Redstone Bee
        .itemOutputs(Item.of('productivebees:bee_cage', { entity: "productivebees:configurable_bee", name: outputBeeCageDisplayNames['redstone'], type: "productivebees:redstone" }));

    // silky_from_reed
    phoenix.recipes.gtceu.apis_progenitor('kubejs:gtceu/apis_progenitor/silky_from_reed')
        .EUt(GTValues.VA[GTValues.IV] / 2)
        .duration(360)
        .itemInputs('64x minecraft:string')
        // Input: Reed Bee (non-configurable)
                .itemInputs(IngredientHelper.weakNBT(Item.of('productivebees:bee_cage', {entity: "productivebees:reed_bee",name: "Reed Bee"})))
        // Output: Configurable Silky Bee
        .itemOutputs(Item.of('productivebees:bee_cage', { entity: "productivebees:configurable_bee", name: outputBeeCageDisplayNames['silky'], type: "productivebees:silky" }));

    // coal_from_leaf_cutter
    phoenix.recipes.gtceu.apis_progenitor('kubejs:gtceu/apis_progenitor/coal_from_leaf_cutter')
        .EUt(GTValues.VA[GTValues.IV] / 2)
        .duration(360)
        .itemInputs('4x minecraft:lava_bucket')
        // Input: Leaf Cutter Bee (non-configurable)
                .itemInputs(IngredientHelper.weakNBT(Item.of('productivebees:bee_cage', {entity: "productivebees:leafcutter_bee",name: "Leafcutter Bee"})))
        // Output: Configurable Coal Bee
        .itemOutputs(Item.of('productivebees:bee_cage', { entity: "productivebees:configurable_bee", name: outputBeeCageDisplayNames['coal'], type: "productivebees:coal" }));

    // silicon_from_nomad
    phoenix.recipes.gtceu.apis_progenitor('kubejs:gtceu/apis_progenitor/silicon_from_nomad')
        .EUt(GTValues.VA[GTValues.IV] / 2)
        .duration(360)
        .itemInputs('16x gtceu:silicon_block')
        // Input: Nomad Bee (non-configurable)
                .itemInputs(IngredientHelper.weakNBT(Item.of('productivebees:bee_cage', {entity: "productivebees:nomad_bee",name: "Nomad Bee"})))
        // Output: Configurable Silicon Bee
        .itemOutputs(Item.of('productivebees:bee_cage', { entity: "productivebees:configurable_bee", name: outputBeeCageDisplayNames['silicon'], type: "productivebees:silicon" }));

    // obsidian_from_sweat
    phoenix.recipes.gtceu.apis_progenitor('kubejs:gtceu/apis_progenitor/obsidian_from_sweat')
        .EUt(GTValues.VA[GTValues.IV] / 2)
        .duration(360)
        .itemInputs('4x minecraft:magma_cream')
        // Input: Sweat Bee (non-configurable)
                       .itemInputs(IngredientHelper.weakNBT(Item.of('productivebees:bee_cage', {entity: "productivebees:sweat_bee",name: "Sweat Bee"})))
        // Output: Configurable Obsidian Bee
        .itemOutputs(Item.of('productivebees:bee_cage', { entity: "productivebees:configurable_bee", name: outputBeeCageDisplayNames['obsidian'], type: "productivebees:obsidian" }));
  phoenix.recipes.gtceu.apis_progenitor('kubejs:gtceu/apis_progenitor/amber_bee')
        .EUt(GTValues.VA[GTValues.IV] / 2)
        .duration(360)
        .itemInputs('168x gtceu:styrene_butadiene_rubber_dust')
        // Input: Sweat Bee (non-configurable)
                       .itemInputs(IngredientHelper.weakNBT(Item.of('productivebees:bee_cage', {entity: "productivebees:resin_bee",name: "Resin Bee"})))
        // Output: Configurable Obsidian Bee
        .itemOutputs(IngredientHelper.weakNBT(Item.of('productivebees:bee_cage', {entity: "productivebees:amber_bee",name: "Amber Bee"})))

    // nickel_from_sweat
    phoenix.recipes.gtceu.apis_progenitor('kubejs:gtceu/apis_progenitor/nickel_from_sweat')
        .EUt(GTValues.VA[GTValues.IV] / 2)
        .duration(360)
        .itemInputs('4x gtceu:nickel_block')
        // Input: Sweat Bee (non-configurable)
                .itemInputs(IngredientHelper.weakNBT(Item.of('productivebees:bee_cage', {entity: "productivebees:sweat_bee",name: "Sweat Bee"})))
        // Output: Configurable Nickel Bee
        .itemOutputs(Item.of('productivebees:bee_cage', { entity: "productivebees:configurable_bee", name: outputBeeCageDisplayNames['nickel'], type: "productivebees:nickel" }));

    // lead_from_blue_banded
    phoenix.recipes.gtceu.apis_progenitor('kubejs:gtceu/apis_progenitor/lead_from_blue_banded')
        .EUt(GTValues.VA[GTValues.IV] / 2)
        .duration(360)
        .itemInputs('4x minecraft:iron_block')
        // Input: Blue Banded Bee (non-configurable)
        .itemInputs(IngredientHelper.weakNBT(Item.of('productivebees:bee_cage', {entity: "productivebees:blue_banded_bee",name: "Blue Banded Bee"})))
        // Output: Configurable Lead Bee
        .itemOutputs(Item.of('productivebees:bee_cage', { entity: "productivebees:configurable_bee", name: outputBeeCageDisplayNames['lead'], type: "productivebees:lead" }));

        
    // sticky_resin_from_resin
    phoenix.recipes.gtceu.apis_progenitor('kubejs:gtceu/apis_progenitor/sticky_resin_from_resin')
        .EUt(GTValues.VA[GTValues.IV] / 2)
        .duration(360)
        .itemInputs('4x productivebees:honey_bucket')
        // Input: Resin Bee (non-configurable)
        .itemInputs(IngredientHelper.weakNBT(Item.of('productivebees:bee_cage', {entity: "productivebees:resin_bee",name: "Resin Bee"})))
        // Output: Configurable Sticky Resin Bee
        .itemOutputs(Item.of('productivebees:bee_cage', { entity: "productivebees:configurable_bee", name: outputBeeCageDisplayNames['sticky_resin'], type: "productivebees:sticky_resin" }));

    function addSwarmNurturingRecipes() {
    const MobTypes = [
       { mobDrops: Item.of('128x minecraft:gunpowder'), mobEntityType: 'minecraft:creeper', mobName: 'Creeper' },
        { mobDrops: Item.of('128x minecraft:bone'), mobEntityType: 'minecraft:skeleton', mobName: 'Skeleton' },
        { mobDrops: Item.of('128x minecraft:rotten_flesh'), mobEntityType: 'minecraft:zombie', mobName: 'Zombie' },
        { mobDrops: Item.of('128x minecraft:string'), mobEntityType: 'minecraft:spider', mobName: 'Spider' },
        { mobDrops: Item.of('32x minecraft:slime_ball'), mobEntityType: 'minecraft:slime', mobName: 'Slime' },
        { mobDrops: Item.of('32x minecraft:magma_cream'), mobEntityType: 'minecraft:magma_cube', mobName: 'Magma Cube' },
        { mobDrops: Item.of('32x minecraft:blaze_rod'), mobEntityType: 'minecraft:blaze', mobName: 'Blaze' },
        { mobDrops: Item.of('16x minecraft:ghast_tear'), mobEntityType: 'minecraft:ghast', mobName: 'Ghast' },
        { mobDrops: Item.of('32x minecraft:phantom_membrane'), mobEntityType: 'minecraft:phantom', mobName: 'Phantom' },
        { mobDrops: Item.of('64x minecraft:ender_pearl'), mobEntityType: 'minecraft:enderman', mobName: 'Enderman' },
        { mobDrops: Item.of('32x minecraft:prismarine_crystals'), mobEntityType: 'minecraft:guardian', mobName: 'Guardian' },
        { mobDrops: Item.of('16x minecraft:fermented_spider_eye'), mobEntityType: 'minecraft:witch', mobName: 'Witch' },
        { mobDrops: Item.of('4x minecraft:wither_skeleton_skull'), mobEntityType: 'minecraft:wither_skeleton', mobName: 'Wither Skeleton' },
      //  { mobDrops: Item.of('minecraft:shulker_shell'), mobEntityType: 'minecraft:shulker', mobName: 'Shulker' },
        { mobDrops: Item.of('64x minecraft:emerald'), mobEntityType: 'minecraft:evoker', mobName: 'Evoker' },
       // { mobDrops: Item.of('minecraft:echo_shard'), mobEntityType: 'minecraft:warden', mobName: 'Warden' },
      //  { mobDrops: Item.of('minecraft:nether_star'), mobEntityType: 'minecraft:wither', mobName: 'Wither' },
       // { mobDrops: Item.of('minecraft:dragon_egg'), mobEntityType: 'minecraft:ender_dragon', mobName: 'Ender Dragon' },

        { mobDrops: Item.of('64x minecraft:ink_sac'), mobEntityType: 'minecraft:squid', mobName: 'Squid' },
        { mobDrops: Item.of('128x minecraft:leather'), mobEntityType: 'minecraft:cow', mobName: 'Cow' },
        { mobDrops: Item.of('128x minecraft:wool'), mobEntityType: 'minecraft:sheep', mobName: 'Sheep' },
        { mobDrops: Item.of('32x minecraft:feather'), mobEntityType: 'minecraft:chicken', mobName: 'Chicken' },
        { mobDrops: Item.of('16x minecraft:porkchop'), mobEntityType: 'minecraft:pig', mobName: 'Pig' },
    ];

    MobTypes.forEach(type => {
        phoenix.recipes.gtceu.swarm_nurturing(`kubejs:gtceu/swarm_nuturing/${type.mobEntityType.replace(':', '_')}`)
            .EUt(GTValues.VA[GTValues.IV])
            .duration(1200)
            .notConsumable(IngredientHelper.weakNBT(Item.of('productivebees:bee_cage', {entity: "productivebees:amber_bee",name: "Amber Bee"})))
            .itemInputs(type.mobDrops)
            // The itemOutputs now uses the 'mobName' for the amber's display name
            .itemOutputs(Item.of("productivebees:amber", `{BlockEntityTag:{EntityData:{entityType:"${type.mobEntityType}",name:"${type.mobName}"}}}`).weakNBT())
    });
}

addSwarmNurturingRecipes();
   
});