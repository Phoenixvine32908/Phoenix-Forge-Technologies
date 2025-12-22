/**
bee related recipes, 2
 */

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
        "sticky_resin": "Sticky Resin Bee",
        "tantalite": "Tantalite Bee",
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

    phoenix.recipes.gtceu.apis_progenitor("kubejs:gtceu/apis_progenitor/wanna")
        .EUt(GTValues.VA[GTValues.ZPM] / 2)
        .duration(2000)
        .itemInputs("kubejs:fully_charged_mob_essence_capsule", "16x productivebees:bee_cage")
        .itemOutputs(IngredientHelper.weakNBT(Item.of("productivebees:bee_cage", {entity: "productivebees:wanna_bee",name: "WannaBee"})))

});
