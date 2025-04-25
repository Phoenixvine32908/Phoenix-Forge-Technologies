/*ServerEvents.recipes(event => {
event.recipes.gtceu.assembler('industrial_steam_casing')
.circuit(6)
.itemInputs('6x gtceu:brass_plate', '1x gtceu:steel_frame')
.itemOutputs('1x gtceu:industrial_steam_casing')
.duration(100)
.EUt(32)

event.recipes.gtceu.compressor('rubber_sheet')
.itemInputs('2x gtceu:sticky_resin')
.itemOutputs('1x gtceu:rubber_plate')
.duration(200)
.EUt(16)
event.shaped("2x gtceu:industrial_steam_casing", ["PFP", "PZP", "PWP"], {
    P: "gtceu:brass_plate",
    W: "#forge:tools/wrenches",
    F: "#forge:tools/hammers",
    Z: "gtceu:steel_frame"
  });
  event.shaped("gtceu:rubber_plate", [" L ", " S ", " S "], {
    S: "gtceu:sticky_resin",
    L: "#forge:tools/hammers",
  });
  event.shaped("gtceu:large_steam_compressor", ["SPS", "PCP", "SLS"], {
    S: "gtceu:steam_machine_casing",
    L: "gtceu:bronze_gear",
    P: "gtceu:dense_steel_plate",
    C: "gtceu:hp_steam_compressor"
  });

})*/