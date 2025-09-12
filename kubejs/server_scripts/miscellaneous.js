/**
Misc recipes
 */

ServerEvents.recipes((event) => {

    // Travel Anchors
    event.remove({ id: "travelanchors:travel_anchor" });
    event.shaped("travelanchors:travel_anchor", ["SGS", "GPG", "SGS"], {
        S: "#forge:plates/black_steel",
        G: "#forge:plates/green_sapphire",
        P: "ender_pearl",
    });

    event.remove({ id: "travelanchors:travel_staff" });
    event.shaped("travelanchors:travel_staff", ["  P", " R ", "R  "], {
        R: "#forge:rods/black_steel",
        P: "gtceu:green_sapphire_gem",
    });

    // Crafting Station
    event.remove({ id: "craftingstation:crafting_station" });
    event.shapeless("craftingstation:crafting_station", [
        "minecraft:crafting_table",
        "#forge:tools/saws",
    ]);
    event.remove({ id: "craftingstation:crafting_station_slab" });
    event.shapeless("craftingstation:crafting_station_slab", [
        "craftingstation:crafting_station",
        "#forge:tools/saws",
    ]);

    // Tool Belt
    event.remove({ id: "toolbelt:belt" });
    event.shaped("toolbelt:belt", ["SLS", "C C", "LIL"], {
        S: "minecraft:string",
        L: "minecraft:leather",
        I: "#forge:plates/steel",
        C: "#forge:screws/steel",
    });
    event.remove({ id: "toolbelt:pouch" });
    event.shaped("toolbelt:pouch", [" G ", "LSL", "   "], {
        G: "#forge:rings/gold",
        L: "minecraft:leather",
        S: "#forge:plates/steel",
    });
});

ServerEvents.recipes((event) => {
    const createUniversalCircuitRecipe = (outputId, inputTag) => {
        event.recipes.gtceu.forming_press(outputId)
            .itemInputs(`#${inputTag}`)
            .itemOutputs(`kubejs:${outputId}`) // Assuming you want to output your universal circuit
            .duration(600) // Example duration
            .EUt(GTValues.VA[GTValues.LV] / 2);    // Example energy per tick
    };

    createUniversalCircuitRecipe("zpm_universal_circuit", "gtceu:circuits/zpm");
    createUniversalCircuitRecipe("uv_universal_circuit", "gtceu:circuits/uv");
    createUniversalCircuitRecipe("uhv_universal_circuit", "gtceu:circuits/uhv");
    createUniversalCircuitRecipe("uev_universal_circuit", "gtceu:circuits/uev");
    createUniversalCircuitRecipe("uiv_universal_circuit", "gtceu:circuits/uiv");
    createUniversalCircuitRecipe("iv_universal_circuit", "gtceu:circuits/iv");
    createUniversalCircuitRecipe("uxv_universal_circuit", "gtceu:circuits/uxv");
    createUniversalCircuitRecipe("max_universal_circuit", "gtceu:circuits/max");
    createUniversalCircuitRecipe("luv_universal_circuit", "gtceu:circuits/luv");
    createUniversalCircuitRecipe("ev_universal_circuit", "gtceu:circuits/ev");
    createUniversalCircuitRecipe("hv_universal_circuit", "gtceu:circuits/hv");
    createUniversalCircuitRecipe("mv_universal_circuit", "gtceu:circuits/mv");
    createUniversalCircuitRecipe("lv_universal_circuit", "gtceu:circuits/lv");
});
