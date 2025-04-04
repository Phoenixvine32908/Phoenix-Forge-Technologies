ServerEvents.recipes(sog => {


sog.recipes.gtceu.large_chemical_reactor('cosmic_circuit_board')
.inputFluids('gtceu:cosmic_matter 10')
.itemInputs('2x kubejs:draconic_circuit_board', 'kubejs:extremely_advanced_soc', '64x gtceu:awakened_draconium_foil')
.itemOutputs('kubejs:cosmic_circuit_board')
.EUt((GTValues.VA[GTValues.UXV]))
.duration(20*45)
sog.recipes.gtceu.large_chemical_reactor('cosmic_printed_circuit_board')
.inputFluids('gtceu:cosmic_matter 20', 'gtceu:eternity 20')
.itemInputs('kubejs:cosmic_circuit_board', '64x gtceu:fine_awakened_draconium_wire')
.itemOutputs('kubejs:cosmic_printed_circuit_board')
.EUt((GTValues.VA[GTValues.UXV]))
.duration(20*90)

sog.recipes.gtceu.assembler('complexinductor')
.itemInputs('4x gtceu:pure_cosmic_matter_ring', '64x gtceu:fine_awakened_draconium_wire')
.inputFluids('gtceu:astral_flux_plasma 144')
.itemOutputs('128x kubejs:complex_smd_inductor')
.duration(20*8)
.EUt(GTValues.VA[GTValues.UIV]);
sog.recipes.gtceu.assembler('complexdiode')
.itemInputs('4x gtceu:pure_cosmic_matter_foil', '64x gtceu:fine_awakened_draconium_wire')
.inputFluids('gtceu:astral_flux_plasma 144')
.itemOutputs('128x kubejs:complex_smd_diode')
.duration(20*8)
.EUt(GTValues.VA[GTValues.UIV]);
sog.recipes.gtceu.assembler('complextransistor')
.itemInputs('8x gtceu:pure_cosmic_matter_bolt', '64x gtceu:fine_awakened_draconium_wire')
.inputFluids('gtceu:astral_flux_plasma 144')
.itemOutputs('128x kubejs:complex_smd_transistor')
.duration(20*8)
.EUt(GTValues.VA[GTValues.UIV]);
sog.recipes.gtceu.assembler('complexcapacitor')
.itemInputs('2x gtceu:pure_cosmic_matter_rod', '64x gtceu:fine_awakened_draconium_wire')
.inputFluids('gtceu:astral_flux_plasma 144')
.itemOutputs('128x kubejs:complex_smd_capacitor')
.duration(20*8)
.EUt(GTValues.VA[GTValues.UIV]);
sog.recipes.gtceu.assembler('complexresistor')
.itemInputs('gtceu:pure_cosmic_matter_plate', '64x gtceu:fine_awakened_draconium_wire')
.inputFluids('gtceu:astral_flux_plasma 144')
.itemOutputs('128x kubejs:complex_smd_resistor')
.duration(20*8)
.EUt(GTValues.VA[GTValues.UIV]);

})