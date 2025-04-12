ServerEvents.recipes((event) => {

  // Travel Anchors
  event.remove({ id: "travelanchors:travel_anchor" });
  event.shaped(`travelanchors:travel_anchor`, ["SGS", "GPG", "SGS"], {
    S: "#forge:plates/black_steel",
    G: "#forge:plates/green_sapphire",
    P: "ender_pearl",
  });

  event.remove({ id: "travelanchors:travel_staff" });
  event.shaped(`travelanchors:travel_staff`, ["  P", " R ", "R  "], {
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
  const createFluxRejoinerRecipe = (outputId, inputTag) => {
    event.recipes.gtceu.flux_rejoiner(outputId)
      .itemInputs(`#${inputTag}`)
      // You'll likely need to add other inputs, outputs, duration, and EUt
      // based on what the flux_rejoiner recipe should actually do.
      // For example:
      .itemOutputs(`kubejs:${outputId}`) // Assuming you want to output your universal circuit
      .duration(200) // Example duration
      .EUt(120);    // Example energy per tick
  };

  createFluxRejoinerRecipe('universal_circuit_zpm', 'gtceu:circuits/zpm');
  createFluxRejoinerRecipe('universal_circuit_uv', 'gtceu:circuits/uv');
  createFluxRejoinerRecipe('universal_circuit_uhv', 'gtceu:circuits/uhv');
  createFluxRejoinerRecipe('universal_circuit_uev', 'gtceu:circuits/uev');
  createFluxRejoinerRecipe('universal_circuit_uiv', 'gtceu:circuits/uiv');
  createFluxRejoinerRecipe('universal_circuit_iv', 'gtceu:circuits/iv');
  createFluxRejoinerRecipe('universal_circuit_uxv', 'gtceu:circuits/uxv');
  createFluxRejoinerRecipe('universal_circuit_max', 'gtceu:circuits/max');
  createFluxRejoinerRecipe('universal_circuit_luv', 'gtceu:circuits/luv');
  createFluxRejoinerRecipe('universal_circuit_ev', 'gtceu:circuits/ev');
  createFluxRejoinerRecipe('universal_circuit_hv', 'gtceu:circuits/hv');
  createFluxRejoinerRecipe('universal_circuit_mv', 'gtceu:circuits/mv');
  createFluxRejoinerRecipe('universal_circuit_lv', 'gtceu:circuits/lv');
});