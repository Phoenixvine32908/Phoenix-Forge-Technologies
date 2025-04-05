StartupEvents.registry("block", phoenixvine => {
    
    function MetalCasings(namespace, dspName) {
        phoenixvine.create(namespace)
        .displayName(dspName)
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .soundType('metal')
        .hardness(5)
        .requiresTool(true)
        .resistance(5)
        .defaultCutout();
    }

    const dispNames = {
        quantified_alloy_block: "§6Quantified Alloy Block",
        plasma_resistant: "§6Plasma Resistant Casing",
        unstable_logic: "§6Unstable Logic Capable Casings",
        stable_logic: "§6Stable Logic Capable Casings",
        advanced_logic: "§6Advanced Logic Capable Casings",
        perfected_logic: "§6Perfected Logic Capable Casings",
        phoenix_enriched_neutronium_casing: "§fGravi-Stable Casing",
        phoenix_enriched_naquad_casing: "§cSemi-Stable PW Casing",
        phoenix_enriched_tritanium_casing: "§6Extremely Heat-Stable Casing",
        akashic_zeronium_casing: "§6Zeronium Akashic Resonance Matrix Casings",
        glitched_entropy_casing: "§6Glitched Entropy Casing",
        supercooled_reactor_core: "§bSupercooled §6Reactor Core",
        quantum_stable_fusion_casing: "§cQuantum Stable fusion casing PW1",
        quasi_stable_fusion_casing: "§eQuasi Stable fusion casing PW2",
        super_stable_fusion_casing: "§eSuper Stable fusion casing PW3",
        volatile_plasma_chamber: "§6Volatile Plasma Chamber",
        quantum_stabilized_electrodes: "§bQuantum-Stabilized Electrodes",
        true_phoenix_infused_casing: "§6True Phoenix-Infused Casing",
        quantum_stabilization_core: "§6Quantum Stabilization Core",
        singularity_stabilized_coolant_system: "§6Singularity-Stabilized Coolant System",
        advanced_heat_regulator_modules: "§6Advanced Heat Regulator Modules",
        heat_dissipating_coils: "§6Heat-Dissipating Coils",
        high_pressure_quantum_forge_core: "§6High-Pressure Quantum Forge Core",
        strongest_rhodium_plated_machne_casing: "§eStrongest Rhodium Plated Casing",
        reliable_naquadah_alloy_machine_casing: "§eReliable Naquadah Alloy Casing",
        stronk_tritanium_machine_casing: "§cStronk Tritanium Casing",
        entropy_logic_casing: "§cEntropy Logic Casing",
        glitched_fusion_casing: "§cEntropy Fusion Casing"
      };

    for (const key in dispNames) {
        MetalCasings(key, dispNames[key]);
    }

    phoenixvine.create('true_heat_stable_coil_block', 'gtceu:coil')
    .temperature(20000)
    .level(30)
    .energyDiscount(30)
    .tier(12)
    .coilMaterial(() => GTMaterials.get('phoenix_enriched_tritanium'))
    .hardness(5)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
    .tagBlock("forge:mineable/wrench")
    .soundType('metal')
});