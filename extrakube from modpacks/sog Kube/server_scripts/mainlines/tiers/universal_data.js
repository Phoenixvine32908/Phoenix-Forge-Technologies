ServerEvents.recipes(sog => {

    sog.recipes.gtceu.quantum_entanglement_decrypter('singularity_data')
    .itemInputs('kubejs:quantum_anomaly', 'gtceu:data_module')
    .itemOutputs('kubejs:singularity_data')
    .duration(20*240)
    .EUt(GTValues.VA[GTValues.UXV]);
    sog.recipes.gtceu.quantum_entanglement_encrypter('elementary_data')
    .itemInputs(['kubejs:graviton', 'kubejs:quarks', 'kubejs:photon', 'kubejs:strange_quarks', 'kubejs:tau_neutrino'])
    .itemInputs('gtceu:data_module')
    .itemOutputs('kubejs:elementary_data')
    .duration(20*240)
    .EUt(GTValues.VA[GTValues.UXV]);
    sog.recipes.gtceu.quantum_entanglement_encrypter('plasma_data')
    .inputFluids('gtceu:hypercharged_nihonium_plasma 1000', 'gtceu:hypercharged_oganesson_plasma 1000', 'gtceu:hypercharged_nebular_plasma 1000')
    .itemInputs('gtceu:data_module')
    .itemOutputs('kubejs:plasma_data')
    .duration(20*240)
    .EUt(GTValues.VA[GTValues.UXV]);

    
})