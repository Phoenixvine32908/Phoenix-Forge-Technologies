ServerEvents.recipes(event => {

    function chemicalReactorRecipe(event, id, inputs, fluidInputs, outputs, dur, power) {
        const rec = event.recipes.gtceu.chemical_reactor(id)
            .duration(dur)
            .EUt(power);
        inputs.forEach(input => rec.itemInputs(input)); // Use forEach for clarity
        fluidInputs.forEach(fluid => {
            const [fluidId, amount] = fluid.split(' ');
            rec.inputFluids(Fluid.of(fluidId, parseInt(amount)));
        });
        outputs.forEach(output => rec.itemOutputs(output)); // Use forEach for clarity
    }

    const chemicalReactorRecipes = [
        ["blaze_crystal1", ["4x minecraft:blaze_powder"], ["kubejs:magma 750"], ["2x gtceu:blazing_crystal"], 600, 64],
        ["energy_steel", ["2x gtceu:gold_iron_alloy_ingot", "1x kubejs:flaming_dust"], ["gtceu:redstone 100"], ["5x gtceu:energy_steel"], 1200, 16],
        ["crystal_niotic", ["1x minecraft:diamond"], ["gtceu:redstone 100"], ["1x gtceu:niotic_crystal"], 1200, 384],
        ["crystal_spirited", ["1x minecraft:emerald"], ["gtceu:redstone 100"], ["1x gtceu:spirited_crystal"], 400, 1024],
        ["crystal_nitro", ["2x minecraft:nether_star", "2x minecraft:redstone_block", "1x gtceu:titanium_block"], ["gtceu:redstone 100"], ["16x powah:crystal_nitro"], 400, 4096]
        ]

        chemicalReactorRecipes.forEach(([id, inputs, FluidInputs, outputs, dur, power]) => {
        chemicalReactorRecipe(event, id, inputs, FluidInputs, outputs, dur, power);
    });
})