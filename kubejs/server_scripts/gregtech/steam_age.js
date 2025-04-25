ServerEvents.recipes(event => {


        event.recipes.gtceu.ember_igniter('flaming_dust')
        .itemInputs('2x gtceu:dormant_ember_dust', '1x gtceu:magma_dust')
        .inputFluids('minecraft:lava 1')
        .itemOutputs('1x kubejs:flaming_dust')
        .duration(150)
        .EUt(20)
        event.recipes.gtceu.alloy_smelter('flamingmatrix')
        .itemInputs('1x kubejs:flaming_dust', '1x minecraft:clay_ball')
        .itemOutputs('4x hostilenetworks:prediction_matrix')
        .duration(100)
        .EUt(32)
        event.recipes.gtceu.assembler('lv_machine_casing')
        .circuit(8)
        .itemInputs('8x gtceu:aurum_steel_plate')
        .itemOutputs('1x gtceu:lv_machine_casing')
        .duration(70)
        .EUt(32)
        event.recipes.gtceu.assembler('mv_machine_casing')
        .circuit(8)
        .itemInputs('8x gtceu:aluminfrost_plate')
        .itemOutputs('1x gtceu:mv_machine_casing')
        .duration(50)
        .EUt(32)
        event.recipes.gtceu.macerator('magma_dust')
        .itemInputs('1x minecraft:magma_block')
        .itemOutputs('1x gtceu:magma_dust')
        .duration(50)
        .EUt(32)
        event.recipes.gtceu.forge_hammer('dust')
        .itemInputs('1x minecraft:sand')
        .itemOutputs('1x kubejs:dust')
        .duration(40)
        .EUt(32)
        event.shapeless("minecraft:clay", ["kubejs:dust", "minecraft:water_bucket"])
        event.recipes.gtceu.forge_hammer('dirttty')
        .itemInputs('1x kubejs:dust')
        .itemOutputs('1x minecraft:dirt')
        .duration(40)
        .EUt(32)
        event.recipes.gtceu.extractor('frost')
        .itemInputs('1x gtceu:permafrost_dust')
        .outputFluids('kubejs:frost 500')
        .duration(150)
        .EUt(64)
        event.recipes.gtceu.extractor('magma')
        .itemInputs('1x gtceu:magma_dust')
        .outputFluids('kubejs:magma 500')
        .duration(150)
        .EUt(64)
        event.recipes.gtceu.assembler('steam_machine_casing')
        .circuit(6)
        .itemInputs('6x gtceu:fiery_bronze_plate', '1x minecraft:bricks')
        .itemOutputs('1x gtceu:steam_machine_casing')
        .duration(50)
        .EUt(32)
        event.recipes.gtceu.forming_press('gold_iron_alloy')
        .itemInputs('2x minecraft:gold_ingot', '2x minecraft:iron_ingot')
        .itemOutputs('4x gtceu:gold_iron_alloy')
        .duration(50)
        .EUt(32)
        event.recipes.gtceu.mixer('gold_iron_alloy_dust')
        .circuit(6)
        .itemInputs('2x gtceu:gold_dust', '2x gtceu:iron_dust')
        .itemOutputs('4x gtceu:gold_iron_alloy_dust')
        .duration(50)
        .EUt(32)
        event.recipes.gtceu.assembler('mv_machine_casig')
        .circuit(6)
        .itemInputs('6x gtceu:aluminfrost_plate')
        .itemOutputs('1x gtceu:mv_machine_casing')
        .duration(100)
        .EUt(32)
        event.recipes.gtceu.assembler('industrial_steam_casing')
        .circuit(6)
        .itemInputs('6x gtceu:fiery_bronze_plate', '1x gtceu:steel_frame')
        .itemOutputs('1x gtceu:industrial_steam_casing')
        .duration(100)
        .EUt(32)
        event.recipes.gtceu.electric_blast_furnace('aluminfrost')
        .circuit(2)
        .itemInputs('1x gtceu:unrefined_aluminfrost_dust', '1x gtceu:cobalt_dust')
        .inputFluids('kubejs:frost 1000')
        .itemOutputs('1x gtceu:aluminfrost_ingot')
        .duration(600)
        .EUt(100)
        .blastFurnaceTemp(1700)
        event.recipes.gtceu.electric_blast_furnace('aluminfrost2')
        .circuit(1)
        .itemInputs('1x gtceu:unrefined_aluminfrost_dust', '1x gtceu:cobalt_dust')
        .itemOutputs('1x gtceu:aluminfrost_ingot')
        .duration(882)
        .EUt(100)
        event.recipes.gtceu.mixer('cryo_ember_fluid')
        .circuit(1)
        .itemInputs('2x gtceu:dormant_ember_dust', '1x gtceu:permafrost_dust')
        .inputFluids('minecraft:water 1000')
        .outputFluids('kubejs:cryo_ember_fluid 500')
        .duration(882)
        .EUt(16)
        .blastFurnaceTemp(1700)
        event.recipes.gtceu.thermo_generator('cryo_ember_fluid_power')
        .inputFluids('kubejs:cryo_ember_fluid 1000')
        .outputFluids('minecraft:lava 250')
        .duration(40000)
        .EUt(-128)
        event.shaped("gtceu:lv_earth_sieve", ["OFO", "DWD", "CFC"], {
                O: "gtceu:aurum_steel_plate",
                W: "gtceu:lv_machine_hull", // Corrected to MV Casing
                E: "gtceu:aurum_steel_small_fluid_pipe",
                D: "gtceu:lv_electric_piston",
                F: "gtceu:item_filter",
                C: "#gtceu:circuits/lv"
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
