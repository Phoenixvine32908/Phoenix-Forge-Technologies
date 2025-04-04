ServerEvents.recipes(sog => {





sog.recipes.gtceu.cutter('draconium_lens')
.inputFluids('gtceu:lubricant 1000')
.itemInputs('gtceu:draconium_plate')
.itemOutputs('gtceu:draconium_lens')
.EUt((GTValues.VA[GTValues.UIV]))
.duration(20*120)
sog.recipes.gtceu.cutter('antimatter_wafer')
.inputFluids('gtceu:lubricant 1000')
.itemInputs('kubejs:antimatter_boule')
.itemOutputs('64x kubejs:antimatter_wafer')
.itemOutputs('64x kubejs:antimatter_wafer')
.EUt((GTValues.VA[GTValues.UV]))
.duration(3000)
sog.recipes.gtceu.laser_engraver('easoc_wafer')
.notConsumable('gtceu:nether_star_lens')
.itemInputs('kubejs:antimatter_wafer')
.itemOutputs('kubejs:extremely_advanced_soc_wafer')
.EUt((GTValues.VA[GTValues.UIV]))
.duration(20*45)
sog.recipes.gtceu.cutter('easoc_chip')
.inputFluids('gtceu:lubricant 1000')
.itemInputs('kubejs:extremely_advanced_soc_wafer')
.itemOutputs('5x kubejs:extremely_advanced_soc')
.EUt((GTValues.VA[GTValues.UHV]))
.duration(20*45)
sog.recipes.gtceu.laser_engraver('hdelcc')
.itemInputs('gtceu:max_battery')
.notConsumable('gtceu:draconium_lens')
.itemOutputs('kubejs:highly_draconized_engraved_lapotron_crystal_chip')
.EUt((GTValues.VA[GTValues.UIV]))
.duration(256)
sog.recipes.gtceu.circuit_assembler('d_inpu')
.itemInputs('kubejs:draconic_printed_circuit_board', '8x gtceu:neuro_processing_unit', '16x gtceu:crystal_matrix_small_fluid_pipe', '64x gtceu:stem_cells', '2x kubejs:highly_draconized_engraved_lapotron_crystal_chip', '16x gtceu:neutronium_foil')
.inputFluids('gtceu:stropharic_hypoxylon 250')
.itemOutputs('2x kubejs:dragon_infused_neuro_processing_unit')
.duration(40)
.EUt((GTValues.VA[GTValues.UEV]))
sog.recipes.gtceu.large_chemical_reactor('draconic_circuit_board')
.inputFluids('gtceu:hypoxylon 1000')
.itemInputs('2x kubejs:highly_resonative_circuit_board', 'kubejs:extremely_advanced_soc', '64x gtceu:draconium_foil')
.itemOutputs('kubejs:draconic_circuit_board')
.EUt((GTValues.VA[GTValues.UIV]))
.duration(20*45)
sog.recipes.gtceu.large_chemical_reactor('draconic_printed_circuit_board')
.inputFluids('gtceu:hypoxylon 1000', 'gtceu:californite 10000')
.itemInputs('kubejs:draconic_circuit_board', '64x gtceu:fine_draconium_wire')
.itemOutputs('kubejs:draconic_printed_circuit_board')
.EUt((GTValues.VA[GTValues.UV]))
.duration(20*90)
sog.shaped(
    'gtceu:uiv_machine_casing',
    ['AAA', 'ABA', 'AAA'],
    {
        A: 'gtceu:draconium_plate',
        B: 'kubejs:draconium_heavy_plating'
})


})