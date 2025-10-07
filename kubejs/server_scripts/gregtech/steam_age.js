/**
steam age recipes
 */

ServerEvents.recipes(event => {
    event.recipes.gtceu.ember_igniter("flaming_dust")
        .itemInputs("8x gtceu:dormant_ember_dust", "4x gtceu:magma_dust")
        .inputFluids("minecraft:lava 144")
        .itemOutputs("1x kubejs:flaming_dust")
        .duration(150)
        .EUt(20)
    event.recipes.gtceu.alloy_smelter("flamingmatrix")
        .itemInputs("1x kubejs:flaming_dust", "1x minecraft:clay_ball")
        .itemOutputs("4x hostilenetworks:prediction_matrix")
        .duration(100)
        .EUt(32)
    event.recipes.gtceu.alloy_smelter("tin_alloy")
        .itemInputs("3x minecraft:iron_ingot", "1x gtceu:tin_ingot")
        .itemOutputs("4x gtceu:tin_alloy_ingot")
        .duration(100)
        .EUt(32)
    event.recipes.gtceu.assembler("lv_machine_casing")
        .circuit(8)
        .itemInputs("8x gtceu:aurum_steel_plate")
        .itemOutputs("1x gtceu:lv_machine_casing")
        .duration(70)
        .EUt(32)
    event.recipes.gtceu.assembler("luv_machine_casing")
        .circuit(8)
        .itemInputs("8x gtceu:resonant_rhodium_alloy_plate")
        .itemOutputs("1x gtceu:luv_machine_casing")
        .duration(70)
        .EUt(32)
    event.recipes.gtceu.assembler("iv_machine_casing")
        .circuit(8)
        .itemInputs("8x gtceu:void_touched_tungsten_steel_plate")
        .itemOutputs("1x gtceu:iv_machine_casing")
        .duration(70)
        .EUt(32)
    event.recipes.gtceu.assembler("ev_machine_casing")
        .circuit(8)
        .itemInputs("8x gtceu:source_imbued_titanium_plate")
        .itemOutputs("1x gtceu:ev_machine_casing")
        .duration(70)
        .EUt(32)
    event.recipes.gtceu.macerator("magma_dust")
        .itemInputs("1x minecraft:magma_block")
        .itemOutputs("4x gtceu:magma_dust")
        .duration(50)
        .EUt(32)
    event.recipes.gtceu.forge_hammer("dust")
        .itemInputs("1x minecraft:sand")
        .itemOutputs("1x kubejs:dust")
        .duration(40)
        .EUt(32)
    event.shapeless("minecraft:clay", ["kubejs:dust", "minecraft:water_bucket"])
    event.recipes.gtceu.chemical_reactor("dirttty")
        .itemInputs("1x kubejs:dust")
        .inputFluids("minecraft:water 100")
        .itemOutputs("1x minecraft:dirt")
        .duration(40)
        .EUt(32)
    event.recipes.gtceu.extractor("frost")
        .itemInputs("1x gtceu:permafrost_dust")
        .outputFluids("kubejs:frost 144")
        .duration(80)
        .EUt(32)
    event.recipes.gtceu.extractor("frost_from_ingot")
        .itemInputs("1x gtceu:permafrost_ingot")
        .outputFluids("kubejs:frost 144")
        .duration(80)
        .EUt(32)
    event.recipes.gtceu.extractor("magma")
        .itemInputs("1x gtceu:magma_dust")
        .outputFluids("kubejs:magma 500")
        .duration(150)
        .EUt(32)
    event.recipes.gtceu.assembler("steam_machine_casing")
        .circuit(6)
        .itemInputs("6x gtceu:fiery_bronze_plate", "1x minecraft:bricks")
        .itemOutputs("2x gtceu:steam_machine_casing")
        .duration(50)
        .EUt(32)
    event.recipes.gtceu.forming_press("gold_iron_alloy")
        .itemInputs("2x minecraft:gold_ingot", "2x minecraft:iron_ingot")
        .itemOutputs("4x gtceu:gold_iron_alloy")
        .duration(50)
        .EUt(32)
    event.recipes.gtceu.forge_hammer("sophisticatedstorage:packing_tap")
        .itemInputs("3x minecraft:paper")
        .itemOutputs("1x sophisticatedstorage:packing_tape")
        .duration(1000)
        .EUt(32)
    event.recipes.gtceu.mixer("gold_iron_alloy_dust")
        .circuit(6)
        .itemInputs("2x gtceu:gold_dust", "2x gtceu:iron_dust")
        .itemOutputs("4x gtceu:gold_iron_alloy_dust")
        .duration(50)
        .EUt(32)
    event.recipes.gtceu.assembler("mv_machine_casig")
        .circuit(6)
        .itemInputs("8x gtceu:aluminfrost_plate")
        .itemOutputs("1x gtceu:mv_machine_casing")
        .duration(100)
        .EUt(32)
    event.recipes.gtceu.assembler("hv_machine_casig")
        .circuit(6)
        .itemInputs("8x gtceu:frost_reinforced_stained_steel_plate")
        .itemOutputs("1x gtceu:hv_machine_casing")
        .duration(100)
        .EUt(32)
    event.recipes.gtceu.assembler("industrial_steam_casing")
        .circuit(6)
        .itemInputs("6x gtceu:fiery_bronze_plate", "1x gtceu:steel_frame")
        .itemOutputs("2x gtceu:industrial_steam_casing")
        .duration(100)
        .EUt(32)
    event.recipes.gtceu.electric_blast_furnace("aluminfrost")
        .circuit(2)
        .itemInputs("32x gtceu:unrefined_aluminfrost_dust", "1x gtceu:cobalt_dust")
        .inputFluids("kubejs:frost 6000")
        .blastFurnaceTemp(1700)
        .itemOutputs("32x gtceu:aluminfrost_ingot")
        .duration(4200)
        .EUt(100)
    event.recipes.gtceu.compressor("dense_steel_plate")
        .itemInputs("14x gtceu:steel_plate")
        .itemOutputs("1x gtceu:dense_steel_plate")
        .duration(100)
        .EUt(8)

    event.recipes.gtceu.electric_blast_furnace("frost_reinforced_stained_steelv2")
        .circuit(2)
        .itemInputs("1x gtceu:frost_reinforced_stained_steel_dust")
        .inputFluids("kubejs:cryo_ember_fluid 150")
        .itemOutputs("1x gtceu:frost_reinforced_stained_steel_ingot")
        .blastFurnaceTemp(1700)
        .duration(740)
        .EUt(GTValues.VA[GTValues.HV] / 2.5)
        .blastFurnaceTemp(1700)
    event.recipes.gtceu.electric_blast_furnace("frost_reinforced_stained_steelv1")
        .circuit(1)
        .itemInputs("1x gtceu:frost_reinforced_stained_steel_dust")
        .itemOutputs("1x gtceu:frost_reinforced_stained_steel_ingot")
        .blastFurnaceTemp(1700)
        .duration(1100)
        .EUt(GTValues.VA[GTValues.HV] / 2)
    event.recipes.gtceu.electric_blast_furnace("aluminfrost2")
        .circuit(1)
        .itemInputs("32x gtceu:unrefined_aluminfrost_dust", "1x gtceu:cobalt_dust")
        .itemOutputs("32x gtceu:aluminfrost_ingot")
        .blastFurnaceTemp(1700)
        .duration(5000)
        .EUt(100)
    event.recipes.gtceu.electric_blast_furnace("aluminfrost_return")
        .circuit(2)
        .itemInputs("1x gtceu:aluminfrost_dust")
        .inputFluids("gtceu:nitrogen 100")
        .itemOutputs("1x gtceu:aluminfrost_ingot")
        .blastFurnaceTemp(1700)
        .duration(240)
        .EUt(100)
    event.recipes.gtceu.electric_blast_furnace("aluminfrost_return2")
        .circuit(1)
        .itemInputs("1x gtceu:aluminfrost_dust")
        .itemOutputs("1x gtceu:aluminfrost_ingot")
        .blastFurnaceTemp(1700)
        .duration(360)
        .EUt(100)
    event.recipes.gtceu.mixer("cryo_ember_fluid")
        .circuit(1)
        .itemInputs("12x gtceu:dormant_ember_dust", "3x gtceu:permafrost_dust")
        .inputFluids("minecraft:water 8000")
        .outputFluids("kubejs:cryo_ember_fluid 4000")
        .duration(882)
        .EUt(16)
    event.recipes.gtceu.alloy_smelter("copper_alloy")
        .itemInputs("2x minecraft:iron_ingot", "1x minecraft:copper_ingot")
        .itemOutputs("enderio:copper_alloy_ingot")
        .duration(160)
        .EUt(16)

    event.recipes.gtceu.alloy_smelter("copper_alloy_dust_ingot")
        .itemInputs("2x gtceu:iron_dust", "1x minecraft:copper_ingot")
        .itemOutputs("enderio:copper_alloy_ingot")
        .duration(160)
        .EUt(16)

    event.recipes.gtceu.alloy_smelter("copper_alloy_ingot_dust")
        .itemInputs("2x minecraft:iron_ingot", "1x gtceu:copper_dust")
        .itemOutputs("enderio:copper_alloy_ingot")
        .duration(160)
        .EUt(16)

    event.recipes.gtceu.alloy_smelter("copper_alloy_dust_dust")
        .itemInputs("2x gtceu:iron_dust", "1x gtceu:copper_dust")
        .itemOutputs("enderio:copper_alloy_ingot")
        .duration(160)
        .EUt(16)
    event.recipes.gtceu.mixer("frost_reinforced_stained_steel_dust")
        .circuit(6)
        .itemInputs("6x gtceu:iron_dust","1x gtceu:nickel_dust", "1x gtceu:manganese_dust", "gtceu:chromium_dust", "1x gtceu:carbon_dust")
        .inputFluids("kubejs:frost 100")
        .itemOutputs("11x gtceu:frost_reinforced_stained_steel_dust")
        .EUt(GTValues.VA[GTValues.MV] / 2)
        .EUt(16)
    event.shaped("gtceu:lv_earth_sieve", ["OFO", "DWD", "CFC"], {
        O: "gtceu:aurum_steel_plate",
        W: "gtceu:lv_machine_hull", // Corrected to MV Casing
        E: "gtceu:aurum_steel_small_fluid_pipe",
        D: "gtceu:lv_electric_piston",
        F: "gtceu:item_filter",
        C: "#gtceu:circuits/lv"
    });
    event.shaped("gtceu:large_steam_sieve", ["WFW", "WCW", "WFW"], {
        W: "gtceu:steam_machine_casing", // Corrected to MV Casing
        F: "gtceu:item_filter",
        C: "gtceu:lv_earth_sieve"
    });
    event.shaped("kubejs:aurum_steel_drill_head", ["FWF", "FWF", "WCW"], {
        W: "gtceu:dense_steel_plate",
        F: "gtceu:dense_aurum_steel_plate",
        C: "#forge:tools/hammers"
    });

    // Recipe for Frost Reinforced Stained Steel Drill Head
    event.shaped("kubejs:frost_reinforced_stained_steel_drill_head", ["FWF", "FWF", "WCW"], {
        W: "gtceu:dense_steel_plate",
        F: "gtceu:dense_frost_reinforced_stained_steel_plate", // Assuming this item ID exists
        C: "#forge:tools/hammers"
    });
    event.shaped("kubejs:source_imbued_titanium_drill_head", ["FWF", "FWF", "WCW"], {
        W: "gtceu:dense_source_imbued_titanium_plate",
        F: "gtceu:dense_frost_reinforced_stained_steel_plate", // Assuming this item ID exists
        C: "#forge:tools/hammers"
    });


    // Recipe for Aluminfrost Drill Head
    event.shaped("kubejs:aluminfrost_drill_head", ["FWF", "FWF", "WCW"], {
        W: "gtceu:dense_steel_plate",
        F: "gtceu:dense_aluminfrost_plate", // Assuming this item ID exists
        C: "#forge:tools/hammers"
    });

    // Recipe for Space Grade Steel Drill Head
    event.shaped("kubejs:space_grade_steel_drill_head", ["FWF", "FWF", "WCW"], {
        W: "gtceu:dense_steel_plate",
        F: "gtceu:dense_space_grade_steel_plate", // Assuming this item ID exists
        C: "#forge:tools/hammers"
    });
    // MV Earth Sieve Example (Corrected Casing)
    event.shaped("gtceu:mv_earth_sieve", ["OFO", "DWD", "CFC"], {
        O: "gtceu:aluminfrost_plate",
        W: "gtceu:mv_machine_hull", // Corrected to MV Casing
        D: "gtceu:mv_electric_piston",
        F: "gtceu:item_filter",
        C: "#gtceu:circuits/mv"
    });

    event.shaped("gtceu:hv_earth_sieve", ["OFO", "DWD", "CFC"], {
        O: "gtceu:stainless_steel_plate",
        W: "gtceu:hv_machine_hull", // Corrected to MV Casing
        D: "gtceu:hv_electric_piston",
        F: "gtceu:item_filter",
        C: "#gtceu:circuits/hv"
    });

    // LV Ember Igniter (your example)
    event.shaped("gtceu:lv_ember_igniter", ["FPF", "WZW", "PFP"], {
        P: "minecraft:lava_bucket",
        W: "gtceu:tin_double_wire",
        F: "gtceu:aurum_steel_plate",
        Z: "gtceu:lv_machine_hull",
    });

    // MV Ember Igniter Example (Corrected Casing)
    event.shaped("gtceu:mv_ember_igniter", ["FPF", "WZW", "PFP"], {
        P: "minecraft:lava_bucket",
        W: "gtceu:cupronickel_double_wire",
        F: "gtceu:aluminfrost_plate",
        Z: "gtceu:mv_machine_hull",
    });

    event.shaped("gtceu:hv_ember_igniter", ["FPF", "WZW", "PFP"], {
        P: "minecraft:lava_bucket",
        W: "gtceu:kanthal_double_wire",
        F: "gtceu:stainless_steel_plate",
        Z: "gtceu:hv_machine_hull",
    });
})
