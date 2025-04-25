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

  createFluxRejoinerRecipe('zpm_universal_circuit', 'gtceu:circuits/zpm');
  createFluxRejoinerRecipe('uv_universal_circuit', 'gtceu:circuits/uv');
  createFluxRejoinerRecipe('uhv_universal_circuit', 'gtceu:circuits/uhv');
  createFluxRejoinerRecipe('uev_universal_circuit', 'gtceu:circuits/uev');
  createFluxRejoinerRecipe('uiv_universal_circuit', 'gtceu:circuits/uiv');
  createFluxRejoinerRecipe('iv_universal_circuit', 'gtceu:circuits/iv');
  createFluxRejoinerRecipe('uxv_universal_circuit', 'gtceu:circuits/uxv');
  createFluxRejoinerRecipe('max_universal_circuit', 'gtceu:circuits/max');
  createFluxRejoinerRecipe('luv_universal_circuit', 'gtceu:circuits/luv');
  createFluxRejoinerRecipe('ev_universal_circuit', 'gtceu:circuits/ev');
  createFluxRejoinerRecipe('hv_universal_circuit', 'gtceu:circuits/hv');
  createFluxRejoinerRecipe('mv_universal_circuit', 'gtceu:circuits/mv');
  createFluxRejoinerRecipe('lv_universal_circuit', 'gtceu:circuits/lv');
});