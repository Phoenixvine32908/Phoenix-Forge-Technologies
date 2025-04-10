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
        entropy_logic_casing: "§cEntropy Logic Casing PW3",
        glitched_fusion_casing: "§cEntropy Fusion Casing",

          // 🌌 Voidglass & Finality Constructs
          voidglass_cocoon_shell: "§5Voidglass Cocoon Shell",
          fractured_core_prism: "§dFractured Core Prism",
          entropy_containment_plating: "§5Entropy Containment Plating",
          dimensional_anchor_node: "§5Dimensional Anchor Node",
          final_seal_node: "§dFinal Seal Node",
  
          // 🧠 Panoptic Engine Blocks
          panoptic_frame: "§fPanoptic Frame",
          panoptic_lens_matrix: "§fLens Matrix Block",
          voidcore_actuator: "§dVoidcore Actuator",
          astral_projection_matrix: "§5Astral Projection Matrix",
          eidolon_stabilization_field: "§dEidolon Stabilization Field",
  
          // 🔥 Phoenix Infuser Components
          phoenix_heart_casing: "§cPhoenix Heart Casing",
          blazing_core_stabilizer: "§cBlazing Core Stabilizer",
          ashglass_viewing_panel: "§6Ashglass Viewing Panel",
          super_stable_fusion_casing: "§cPhoenix Infusion Casing",
          phoenix_gaze_panel: "§cPhoenix Gaze Panel",
          controlled_ruin_lens: "§cControlled Ruin Lens",
          phoenix_pyre_helix: "§cPhoenix Pyre Helix",
          phoenix_ignition_matrix: "§cPhoenix Ignition Matrix",
          entropy_well_coil: "§cEntropy Well Coil",

      };

    for (const key in dispNames) {
        MetalCasings(key, dispNames[key]);
    }

    phoenixvine.create('true_heat_stable_coil_block', 'gtceu:coil')
    .temperature(200000)
    .level(30)
    .energyDiscount(30)
    .tier(12)
    .coilMaterial(() => GTMaterials.get('phoenix_enriched_tritanium'))
    .hardness(5)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
    .tagBlock("forge:mineable/wrench")
    .soundType('metal')

    phoenixvine.create('infinity_coil_block', 'gtceu:coil')
    .temperature(20000)
    .level(30)
    .energyDiscount(30)
    .tier(12)
    .coilMaterial(() => GTMaterials.get('infinity'))
    .hardness(5)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
    .tagBlock("forge:mineable/wrench")
    .soundType('metal')
    
    phoenixvine.create('entropic_coil_block', 'gtceu:coil')
    .temperature(20000)
    .level(30)
    .energyDiscount(30)
    .tier(12)
    .coilMaterial(() => GTMaterials.get('corrupted_hyperalloy'))
    .hardness(5)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
    .tagBlock("forge:mineable/wrench")
    .soundType('metal')
    phoenixvine.create('true_gravi_stable_coil_block', 'gtceu:coil')
    .temperature(20000)
    .level(30)
    .energyDiscount(30)
    .tier(12)
    .coilMaterial(() => GTMaterials.get('phoenix_enriched_neutronium'))
    .hardness(5)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
    .tagBlock("forge:mineable/wrench")
    .soundType('metal')
    phoenixvine.create('akashic_coil_block', 'gtceu:coil')
    .temperature(20000)
    .level(30)
    .energyDiscount(30)
    .tier(12)
    .coilMaterial(() => GTMaterials.get('akashic_chrono_metal'))
    .hardness(5)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
    .tagBlock("forge:mineable/wrench")
    .soundType('metal')


});
const $ParallelHatchPartMachine = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.part.ParallelHatchPartMachine')

// Parallel Hatches
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create("uhv_parallel_hatch", "custom")
    .tiers(GTValues.UHV)
    .machine((holder, tier, t) => new $ParallelHatchPartMachine(holder, tier))
    .definition((tier, builder) => {
        builder.rotationState(RotationState.ALL)
                .abilities(PartAbility.PARALLEL_HATCH)
                .workableTieredHullRenderer(GTCEu.id("block/machines/parallel_hatch_uhv"))
    })
    event.create("uev_parallel_hatch", "custom")
    .tiers(GTValues.UEV)
    .machine((holder, tier, t) => new $ParallelHatchPartMachine(holder, tier))
    .definition((tier, builder) => {
        builder.rotationState(RotationState.ALL)
                .abilities(PartAbility.PARALLEL_HATCH)
                .workableTieredHullRenderer(GTCEu.id("block/machines/parallel_hatch_uev"))
    })
    event.create("uiv_parallel_hatch", "custom")
    .tiers(GTValues.UIV)
    .machine((holder, tier, t) => new $ParallelHatchPartMachine(holder, tier))
    .definition((tier, builder) => {
        builder.rotationState(RotationState.ALL)
                .abilities(PartAbility.PARALLEL_HATCH)
                .workableTieredHullRenderer(GTCEu.id("block/machines/parallel_hatch_uiv"))
    })
    event.create("uxv_parallel_hatch", "custom")
    .tiers(GTValues.UXV)
    .machine((holder, tier, t) => new $ParallelHatchPartMachine(holder, tier))
    .definition((tier, builder) => {
        builder.rotationState(RotationState.ALL)
                .abilities(PartAbility.PARALLEL_HATCH)
                .workableTieredHullRenderer(GTCEu.id("block/machines/parallel_hatch_uxv"))
    })
    event.create("opv_parallel_hatch", "custom")
    .tiers(GTValues.OpV)
    .machine((holder, tier, t) => new $ParallelHatchPartMachine(holder, tier))
    .definition((tier, builder) => {
        builder.rotationState(RotationState.ALL)
                .abilities(PartAbility.PARALLEL_HATCH)
                .workableTieredHullRenderer(GTCEu.id("block/machines/parallel_hatch_opv"))
    })
    event.create("max_parallel_hatch", "custom")
    .tiers(GTValues.MAX)
    .machine((holder, tier, t) => new $ParallelHatchPartMachine(holder, tier))
    .definition((tier, builder) => {
        builder.rotationState(RotationState.ALL)
                .abilities(PartAbility.PARALLEL_HATCH)
                .workableTieredHullRenderer(GTCEu.id("block/machines/parallel_hatch_opv"))
    })
})