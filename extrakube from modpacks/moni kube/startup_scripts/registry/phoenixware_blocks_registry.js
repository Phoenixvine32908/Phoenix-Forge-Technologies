StartupEvents.registry("block", event => {

    // Compressed Blocks
    event.create('plasma_resistant_casing')
    .displayName("§6Plasma Resistant Casing")
    .soundType('metal')
    .resistance(5)
    .hardness(5)
    .tagBlock("mineable/pickaxe")
    .tagBlock("forge:mineable/wrench")
    .requiresTool(true)
    .defaultCutout();

    function MetalCasings(namespace, displayName) {
        event.create(namespace)
        .displayName(displayName)
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .soundType('metal')
        .hardness(5)
        .requiresTool(true)
        .resistance(5)
        .defaultCutout();
    }

    MetalCasings("plasma_resistant", "§6Plasma Resistant Casing");
    MetalCasings("unstable_logic", "§6Unstable Logic Capable Casings");
    MetalCasings("stable_logic", "§6Stable Logic Capable Casings");
    MetalCasings("advanced_logic", "§6Advanced Logic Capable Casings");
    MetalCasings("perfected_logic", "§6Perfected Logic Capable Casings");
    MetalCasings("phoenix_enriched_neutronium_casing", "§fGravi-Stable Casing");
    MetalCasings("phoenix_enriched_naquad_casing", "§cSemi-Stable PW Casing");
    MetalCasings("phoenix_enriched_tritanium_casing", "§6Extremely Heat-Stable Casing");
    MetalCasings("heat_dissipating_coil", "§6Heat-Dissipating §cCoils");
    MetalCasings("supercooled_reactor_core", "§bSupercooled §6Reactor Core");
    MetalCasings("quantum_stable_fusion_casing", "§cQuantum Stable fusion casing PW1");
    MetalCasings("quasi_stable_fusion_casing", "§eQuasi Stable fusion casing PW2");
    MetalCasings("multiversal_stable_fusion_casing", "§dMultiVersal Stable fusion casing PW2");
    MetalCasings("volatile_plasma_chamber", "§6Volatile Plasma Chamber");
    MetalCasings("quantum_stabilized_electrodes", "§Quantum-Stabilized Electrodes");
    MetalCasings("phoenix_infused_casing", "§6Phoenix-Infused Casing");
    MetalCasings("quantum_stabilization_core", "§6Quantum Stabilization Core");
    MetalCasings("singularity_stabilized_coolant_system", "§6Singularity-Stabilized Coolant System");
    MetalCasings("advanced_heat_regulator_modules", "§6Advanced Heat Regulator Modules");
    MetalCasings("heat_dissipating_coils", "§6Heat-Dissipating Coils");
    MetalCasings("high_pressure_quantum_forge_core", "§6High-Pressure Quantum Forge Core");



    event.create('true_heat_stable_coil_block', 'gtceu:coil')
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
