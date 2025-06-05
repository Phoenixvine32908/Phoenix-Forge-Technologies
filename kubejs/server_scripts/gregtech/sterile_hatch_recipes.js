ServerEvents.recipes(event => {
 event.recipes.gtceu.assembly_line('emberwake_alloy_hearth')
     .itemInputs('4x #gtceu:circuits/uhv',
      '8x gtceu:uv_field_gen',
      '16x gtceu:high_temperature_smelting_casing',
      '1x gtceu:auto_maintenance_hatch',
   '2x gtceu:ruthenium_trinium_americium_neutronate_quadruple_wire',
   '2x gtceu:neutronium_frame',
     )
     .inputFluids('gtceu:soldering_alloy 1152','gtceu:tritanium 1152', 'gtceu:naquadria 5000')
     .itemOutputs('gtceu:emberwake_alloy_hearth')
     .duration(600)
     .EUt(GTValues.VA[GTValues.UHV]/2)
     .stationResearch(b => b.researchStack(Item.of('gtceu:alloy_blast_smelter')).EUt(30720).CWUt(144, 32000))

     })