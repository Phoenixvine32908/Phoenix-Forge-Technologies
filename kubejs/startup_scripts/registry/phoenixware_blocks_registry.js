/**
Registy for custom blocks
 */

StartupEvents.registry("block", phoenixvine => {
    phoenixvine.create("dust")
        .displayName("Dust")
        .tagBlock("mineable/shovel")
        .tagBlock("forge:mineable/shovel")
        .soundType("sand")
        .hardness(1)
        .requiresTool(false)
        .resistance(1)
    function MetalCasings(namespace, dspName) {
        phoenixvine.create(namespace)
            .displayName(dspName)
            .tagBlock("mineable/pickaxe")
            .tagBlock("forge:mineable/wrench")
            .soundType("metal")
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
        //  quantum_stabilization_core: "§6Quantum Stabilization Core",
        // singularity_stabilized_coolant_system: "§6Singularity-Stabilized Coolant System",
        // advanced_heat_regulator_modules: "§6Advanced Heat Regulator Modules",
        heat_dissipating_coils: "§6Heat-Dissipating Coils",
        // high_pressure_quantum_forge_core: "§6High-Pressure Quantum Forge Core",
        strongest_rhodium_plated_machne_casing: "§eStrongest Rhodium Plated Casing",
        reliable_naquadah_alloy_machine_casing: "§eReliable Naquadah Alloy Casing",
        stronk_tritanium_machine_casing: "§cStronk Tritanium Casing",
        entropy_logic_casing: "§cEntropy Logic Casing PW3",
        glitched_fusion_casing: "§cEntropy Fusion Casing",

        // 🌌 Voidglass & Finality Constructs
        //   voidglass_cocoon_shell: "§5Voidglass Cocoon Shell",
        //   fractured_core_prism: "§dFractured Core Prism",
        //  entropy_containment_plating: "§5Entropy Containment Plating",
        //  dimensional_anchor_node: "§5Dimensional Anchor Node",
        //  final_seal_node: "§dFinal Seal Node",

        // 🧠 Panoptic Engine Blocks
        // panoptic_frame: "§fPanoptic Frame",
        //  panoptic_lens_matrix: "§fLens Matrix Block",
        // voidcore_actuator: "§dVoidcore Actuator",
        // astral_projection_matrix: "§5Astral Projection Matrix",
        // eidolon_stabilization_field: "§dEidolon Stabilization Field",
        // high_temperature_fission_casing: "High Temperature Fission Casing",

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
        green_fission_casing: "§cBerrylium Fission Rods"

    };

    for (const key in dispNames) {
        MetalCasings(key, dispNames[key]);
    }

    phoenixvine.create("true_heat_stable_coil_block", "gtceu:coil")
        .temperature(200000)
        .level(30)
        .energyDiscount(30)
        .tier(12)
        .coilMaterial(() => GTMaterials.get("phoenix_enriched_tritanium"))
        .hardness(5)
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .soundType("metal")

// --- Fission Moderators ---


// 2. Boron Carbide Moderator (Stability/Poison Control)
phoenixvine.create('boron_carbide_moderator', 'phoenixcore:fission_moderator')
    .displayName('Boron Carbide Moderator')
    .EUBoost(2) 
    .fuelDiscount(1) // Quirk: Lower fuel economy for enhanced stability
    .tier(1) // Low explosion risk
    .moderatorMaterial(() => GTMaterials.get('boron_carbide')) 
    .hardness(3.0)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
    .soundType("metal")
    .texture('kubejs:block/fission/boron_carbide_moderator');

// 3. Beryllium Moderator (High-Heat Performance)
phoenixvine.create('beryllium_moderator', 'phoenixcore:fission_moderator')
    .displayName('Beryllium Moderator')
    .EUBoost(2) 
    .fuelDiscount(1) // Mid explosion risk
    .moderatorMaterial(() => GTMaterials.get('beryllium')) 
    .hardness(5.0)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
    .soundType("metal")
    .texture('kubejs:block/fission/beryllium_moderator');

// 4. Niobium-Modified SiC Moderator (Max Output & Cooling Enhancer)
phoenixvine.create('niobium_modified_silicon_carbide_moderator', 'phoenixcore:fission_moderator')
    .displayName('Nb-SiC Moderator')
    .EUBoost(15) 
    .fuelDiscount(5) // Quirk: Highest power but higher risk/cost
    .tier(4) // High explosion risk
    .moderatorMaterial(() => GTMaterials.get('niobium_modified_silicon_carbide')) 
    .hardness(12.0)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
    .soundType("metal")
    .texture('kubejs:block/fission/niobium_sic_moderator');


// 2. Improved Cooler: Hydro-Kinetic Block (Salt Water)
phoenixvine.create('hydro_kinetic_cooler', 'phoenixcore:fission_cooler')
    .displayName('Hydro-Kinetic Cooler')
    .coolerTemperature(208) 
    .coolantUsagePerTick(20) 
    .tier(2) 
    .requiredCoolantMaterialId('gtceu:salt_water') 
    .coolerMaterial(() => GTMaterials.get('titanium')) 
    .hardness(12.0)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
    .soundType("metal")
    .texture('kubejs:block/fission/hydro_kinetic_cooler');

// 3. Advanced Cooler: Aether-Flow Engine (Frost Coolant)
phoenixvine.create('aether_flow_cooler', 'phoenixcore:fission_cooler')
    .displayName('Aether-Flow Cooler')
    .coolerTemperature(1025) 
    .coolantUsagePerTick(10) 
    .tier(3) 
    .requiredCoolantMaterialId('phoenixcore:frost') 
    .coolerMaterial(() => GTMaterials.get('tungsten_steel')) 
    .hardness(12.0)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
    .soundType("metal")
    .texture('kubejs:block/fission/aether_flow_cooler');
 

    phoenixvine.create("conductive_honey_coil", "gtceu:active")
        .bloom("gtceu:block/conductive_honey_coil_bloom")
    // The bloom texture should be 'gtceu:block/casings/fusion/superconducting_coil_bloom'
        .displayName("Conductive Honey Coil")
        .soundType("metal")
        .resistance(6).hardness(5)
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)


    phoenixvine.create("infinity_coil_block", "gtceu:coil")
        .temperature(20000)
        .level(30)
        .energyDiscount(30)
        .tier(12)
        .coilMaterial(() => GTMaterials.get("infinity"))
        .hardness(5)
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .soundType("metal")

    phoenixvine.create("entropic_coil_block", "gtceu:coil")
        .temperature(20000)
        .level(30)
        .energyDiscount(30)
        .tier(12)
        .coilMaterial(() => GTMaterials.get("corrupted_hyperalloy"))
        .hardness(5)
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .soundType("metal")
    phoenixvine.create("true_gravi_stable_coil_block", "gtceu:coil")
        .temperature(20000)
        .level(30)
        .energyDiscount(30)
        .tier(12)
        .coilMaterial(() => GTMaterials.get("phoenix_enriched_neutronium"))
        .hardness(5)
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .soundType("metal")
    phoenixvine.create("akashic_coil_block", "gtceu:coil")
        .temperature(20000)
        .level(200)
        .energyDiscount(30)
        .tier(12)
        .coilMaterial(() => GTMaterials.get("akashic_chrono_metal"))
        .hardness(5)
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .soundType("metal")
    phoenixvine.create("highly_conductive_fission_casing")
        .hardness(5)
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .soundType("metal")


});
const $ParallelHatchPartMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.part.ParallelHatchPartMachine")
const $LaserHatchPartMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.part.LaserHatchPartMachine")

// Parallel Hatches
GTCEuStartupEvents.registry("gtceu:machine", event => {
    event.create("uhv_parallel_hatch", "custom")
        .machine((holder, tier) => {
            return new $ParallelHatchPartMachine(holder, tier);
        })
        .tiers(GTValues.UHV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.ALL)
                .abilities(PartAbility.PARALLEL_HATCH)
                .workableTieredHullModel(GTCEu.id("block/machines/parallel_hatch_mk9"))
        )
    event.create("uev_parallel_hatch", "custom")
        .machine((holder, tier) => {
            return new $ParallelHatchPartMachine(holder, tier);
        })
        .tiers(GTValues.UEV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.ALL)
                .abilities(PartAbility.PARALLEL_HATCH)
                .workableTieredHullModel(GTCEu.id("block/machines/parallel_hatch_mk12"))
        )
    event.create("uiv_parallel_hatch", "custom")
        .machine((holder, tier) => {
            return new $ParallelHatchPartMachine(holder, tier);
        })
        .tiers(GTValues.UIV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.ALL)
                .abilities(PartAbility.PARALLEL_HATCH)
                .workableTieredHullModel(GTCEu.id("block/machines/parallel_hatch_mk13"))
        )
    event.create("uxv_parallel_hatch", "custom")
        .machine((holder, tier) => {
            return new $ParallelHatchPartMachine(holder, tier);
        })
        .tiers(GTValues.UXV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.ALL)
                .abilities(PartAbility.PARALLEL_HATCH)
                .workableTieredHullModel(GTCEu.id("block/machines/parallel_hatch_mk14"))
        )
    event.create("opv_parallel_hatch", "custom")
        .machine((holder, tier) => {
            return new $ParallelHatchPartMachine(holder, tier);
        })
        .tiers(GTValues.OpV)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.ALL)
                .abilities(PartAbility.PARALLEL_HATCH)
                .workableTieredHullModel(GTCEu.id("block/machines/parallel_hatch_mk15"))
        )
    event.create("max_parallel_hatch", "custom")
        .machine((holder, tier) => {
            return new $ParallelHatchPartMachine(holder, tier);
        })
        .tiers(GTValues.MAX)
        .definition((tier, builder) =>
            builder
                .rotationState(RotationState.ALL)
                .abilities(PartAbility.PARALLEL_HATCH)
                .workableTieredHullModel(GTCEu.id("block/machines/parallel_hatch_mk16"))
        )
})
