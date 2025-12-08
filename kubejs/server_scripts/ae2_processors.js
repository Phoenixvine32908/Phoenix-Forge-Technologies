/**
ae2 circuit recipes
 */

ServerEvents.recipes(event => {

    function CircuitAssemblerRecipe(event, id, inputs, fluidInputs, outputs, dur, power) {
        const rec = event.recipes.gtceu.circuit_assembler(id)
            .duration(dur)
            .EUt(power);
        inputs.forEach(input => rec.itemInputs(input)); // Use forEach for clarity
        fluidInputs.forEach(fluid => {
            const [fluidId, amount] = fluid.split(" ");
            rec.inputFluids(Fluid.of(fluidId, parseInt(amount)));
        });
        outputs.forEach(output => rec.itemOutputs(output)); // Use forEach for clarity
    }

    const circuitassemblerRecipes = [
        ["processor_logicmv", ["1x ae2:printed_logic_processor", "1x ae2:printed_silicon", "1x #gtceu:circuits/mv", "#gtceu:resistors", "2x gtceu:fine_aluminium_wire" ], ["gtceu:soldering_alloy 74"], ["6x ae2:logic_processor"], 600, 64],
        ["processor_logichv", ["1x ae2:printed_logic_processor", "1x ae2:printed_silicon", "1x #gtceu:circuits/hv", "4x #gtceu:resistors", "2x gtceu:fine_electrum_wire" ], ["gtceu:soldering_alloy 74"], ["8x ae2:logic_processor"], 600, 256], // Added empty FluidInputs array
        ["processor_logicev", ["1x ae2:printed_logic_processor", "1x ae2:printed_silicon", "1x #gtceu:circuits/ev", "1x gtceu:smd_resistor", "2x gtceu:fine_niobium_titanium_wire" ], ["gtceu:soldering_alloy 74"], ["10x ae2:logic_processor"], 600, 512],
        ["processor_logiciv", ["1x ae2:printed_logic_processor", "1x ae2:printed_silicon", "1x #gtceu:circuits/iv", "1x gtceu:advanced_smd_resistor", "2x gtceu:fine_hssg_wire" ], ["gtceu:soldering_alloy 74"], ["12x ae2:logic_processor"], 600, 1028],
        ["processor_calculation2", ["1x ae2:printed_calculation_processor", "1x ae2:printed_silicon", "1x #gtceu:circuits/mv", "gtceu:capacitor", "2x gtceu:fine_aluminium_wire" ], ["gtceu:soldering_alloy 74"], ["6x ae2:calculation_processor"], 600, 64],
        ["processor_calculation3", ["1x ae2:printed_calculation_processor", "1x ae2:printed_silicon", "1x #gtceu:circuits/hv", "4x gtceu:smd_capacitor", "2x gtceu:fine_electrum_wire" ], ["gtceu:soldering_alloy 74"], ["8x ae2:calculation_processor"], 600, 256],
        ["processor_calculation4", ["1x ae2:printed_calculation_processor", "1x ae2:printed_silicon", "1x #gtceu:circuits/ev", "1x gtceu:smd_capacitor", "2x gtceu:fine_niobium_titanium_wire" ], ["gtceu:soldering_alloy 74"], ["10x ae2:calculation_processor"], 600, 512],
        ["processor_calculation5", ["1x ae2:printed_calculation_processor", "1x ae2:printed_silicon", "1x #gtceu:circuits/iv", "1x gtceu:advanced_smd_capacitor", "2x gtceu:fine_hssg_wire" ], ["gtceu:soldering_alloy 74"], ["12x ae2:calculation_processor"], 600, 1048],
        ["processor_engineering2", ["1x ae2:printed_engineering_processor", "1x ae2:printed_silicon", "1x #gtceu:circuits/mv", "#gtceu:inductors", "2x gtceu:fine_aluminium_wire" ], ["gtceu:soldering_alloy 74"], ["6x ae2:engineering_processor"], 600, 64],
        ["processor_engineering3", ["1x ae2:printed_engineering_processor", "1x ae2:printed_silicon", "1x #gtceu:circuits/hv", "4x gtceu:smd_inductor", "2x gtceu:fine_electrum_wire" ], ["gtceu:soldering_alloy 74"], ["8x ae2:engineering_processor"], 600, 256],
        ["processor_engineering4", ["1x ae2:printed_engineering_processor", "1x ae2:printed_silicon", "1x #gtceu:circuits/ev", "1x gtceu:smd_inductor", "2x gtceu:fine_niobium_titanium_wire" ], ["gtceu:soldering_alloy 74"], ["10x ae2:engineering_processor"], 600, 512],
        ["processor_engineering5", ["1x ae2:printed_engineering_processor", "1x ae2:printed_silicon", "1x #gtceu:circuits/iv", "1x gtceu:advanced_smd_inductor", "2x gtceu:fine_hssg_wire" ], ["gtceu:soldering_alloy 74"], ["12x ae2:engineering_processor"], 600, 1048],
    ];

    circuitassemblerRecipes.forEach(([id, inputs, FluidInputs, outputs, dur, power]) => {
        CircuitAssemblerRecipe(event, id, inputs, FluidInputs, outputs, dur, power);
    });
})
