function makePlasma(event, id, color, color2){
    event.create(id).plasma().color(color).secondaryColor(color2);
}

GTCEuStartupEvents.registry('gtceu:material', event => {

    const plasmas = [
        [
            "superheated_plasma",
            0xFFA500,
            0xA9423F
        ],
        [
            "dormant_phoenix_based_plasma",
            0xcd8c19,
            0xA9423F
        ],
        [
            "quantum_stable_plasma",
            0xd8d6d6,
            0xA9423F
        ],
        [
            "true_phoenix_based_plasma",
            0x8d00fc,
            0x00FFFF
        ],
        [
            "active_phoenix_based_plasma",
            0xfc4f4f,
            0xA9423F
        ],
        [
            "singularity_reactive_plasma",
            0x5500AA,
            0xFF00FF
        ],
        [
            "chrono_stabilized_plasma",
            0xADD8E6,
            0x4682B4
        ]
    ];

    event.create("trinaquadalloy")
        .ingot().fluid()
        .color(0x281832).iconSet(GTMaterialIconSet.BRIGHT)
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .components('6x trinium', '2x naquadah', '1x carbon')
        .blastTemp(8747, 'higher', GTValues.VA[GTValues.ZPM], 1200)

    plasmas.forEach(plasma => {
        makePlasma(event, plasma[0], plasma[1], plasma[2]);
    })
})

StartupEvents.registry('fluid', event => {

    event.create("grass_water")
        .thinTexture(0x00ff11)
        .bucketColor(0x00ff11)
        .displayName("Grass Water")

    event.create("dimensional_flux_resin")
        .thickTexture(0x8A2BE2)
        .bucketColor(0x9400D3)
        .displayName("Dimensional Flux Resin")

    event.create("plasma_stabilized_mercury")
        .thickTexture(0xE0FFFF)
        .bucketColor(0x808080)
        .displayName("Plasma-Stabilized Mercury")

    event.create("aetheric_conductive_gel")
        .thickTexture(0xFFFF00)
        .bucketColor(0xF0E68C)
        .displayName("Aetheric Conductive Gel")

    event.create("void_reactive_coolant")
        .thickTexture(0x000000)
        .bucketColor(0x1E1E1E)
        .displayName("Void-Reactive Coolant")

    event.create("quantum_adhesive_solution")
        .thickTexture(0x00FFFF)
        .bucketColor(0xAFEEEE)
        .displayName("Quantum Adhesive Solution")

    event.create("multi_phase_dimensional_gel")
        .thickTexture(0xFFA07A)
        .bucketColor(0xFF7F50)
        .displayName("Multi-Phase Dimensional Gel")

    event.create("neutrino_laced_superfluid")
        .thinTexture(0x4682B4)
        .bucketColor(0x6495ED)
        .displayName("Neutrino-Laced Superfluid")

    event.create("exo_temporal_stabilizer")
        .thickTexture(0x3CB371)
        .bucketColor(0x2E8B57)
        .displayName("Exo-Temporal Stabilizer")

    event.create("hypercharged_void_extract")
        .thickTexture(0xFFD700)
        .bucketColor(0xFFA500)
        .displayName("Hypercharged Void Extract")

    event.create("reality_woven_nanotubes")
        .color(0x800080) // Using color here as it's also defined as an ingot
        .bucketColor(0x9400D3)
        .displayName("Reality-Woven Nanotubes")

    event.create("phoenix_fire_solution")
        .thickTexture(0xFF4500)
        .bucketColor(0xFF8C00)
        .displayName("Phoenix Fire Solution")

    event.create("eldritch_catalytic_mist")
        .thinTexture(0x483D8B)
        .bucketColor(0x6A5ACD)
        .displayName("Eldritch Catalytic Mist")

    event.create("quantum_locked_fluid")
        .thickTexture(0x00BFFF)
        .bucketColor(0x1E90FF)
        .displayName("Quantum-Locked Fluid")

    event.create("void_charged_ionic_gel")
        .thickTexture(0x40E0D0)
        .bucketColor(0x00CED1)
        .displayName("Void-Charged Ionic Gel")

    event.create("glitched_anomalous_resin")
        .thickTexture(0xFF69B4)
        .bucketColor(0xFF1493)
        .displayName("Glitched Anomalous Resin")

    event.create("entropy_diffusion_mist")
        .thinTexture(0x778899)
        .bucketColor(0x696969)
        .displayName("Entropy-Diffusion Mist")

    event.create("dark_matter_suspension")
        .thickTexture(0x4B0082)
        .bucketColor(0x191970)
        .displayName("Dark Matter Suspension")

    event.create("reality_fractured_isotope")
        .color(0xDC143C) // Using color here as it's also defined as an ingot
        .bucketColor(0xFF6347)
        .displayName("Reality-Fractured Isotope")

    event.create("cosmic_flux_liquid")
        .thickTexture(0x008080)
        .bucketColor(0x008B8B)
        .displayName("Cosmic Flux Liquid")

    event.create("stellar_compression_dust")
        .thinTexture(0xF5F5DC) // Assuming a fine dust-like appearance as a fluid
        .bucketColor(0xFFFFE0)
        .displayName("Stellar Compression Dust")

    event.create("graviton_dense_slurry")
        .thickTexture(0x2F4F4F)
        .bucketColor(0x000080)
        .displayName("Graviton-Dense Slurry")

    event.create("event_horizon_condensate")
        .thickTexture(0x000000)
        .bucketColor(0x4F4F4F)
        .displayName("Event Horizon Condensate")

    event.create("quantum_star_infusion")
        .thickTexture(0xFFFFE0)
        .bucketColor(0xFFDAB9)
        .displayName("Quantum-Star Infusion")

    event.create("eon_fused_catalyst")
        .color(0xB8860B) // Using color here as it's also defined as an ingot
        .bucketColor(0xD2B48C)
        .displayName("Eon-Fused Catalyst")

    event.create("singularity_condensed_matter")
        .color(0x000000) // Using color here as it's also defined as an ingot
        .bucketColor(0x1E1E1E)
        .displayName("Singularity-Condensed Matter")

    event.create("primordial_chaos_fluid")
        .thickTexture(0x800000)
        .bucketColor(0xA52A2A)
        .displayName("Primordial Chaos Fluid")

    event.create("multiversal_binding_agent")
        .thickTexture(0xDA70D6)
        .bucketColor(0xFF00FF)
        .displayName("Multiversal Binding Agent")

    event.create("absolute_zero_etherium")
        .thickTexture(0xAFEEEE)
        .bucketColor(0xE0FFFF)
        .displayName("Absolute-Zero Etherium")

    // Corrupted Wetware Chemicals:
    event.create("cognitive_dissonance_compound")
        .thickTexture(0x8B008B)
        .bucketColor(0x4B0082)
        .displayName("Cognitive Dissonance Compound")

    event.create("memory_scrambler_toxin")
        .thinTexture(0xFF8C00)
        .bucketColor(0xFFA07A)
        .displayName("Memory Scrambler Toxin")

    event.create("emotional_override_agent")
        .thickTexture(0xFF0000)
        .bucketColor(0x8B0000)
        .displayName("Emotional Override Agent")

    event.create("sensory_distortion_fluid")
        .thickTexture(0x00FFFF)
        .bucketColor(0x8FBC8F)
        .displayName("Sensory Distortion Fluid")

    event.create("neural_decay_catalyst")
        .thinTexture(0x696969)
        .bucketColor(0x000000)
        .displayName("Neural Decay Catalyst")

    event.create("bio_electric_discharge_amplifier")
        .thickTexture(0xFFFF00)
        .bucketColor(0xF0E68C)
        .displayName("Bio-Electric Discharge Amplifier")

    event.create("synaptic_corrosion_agent")
        .thinTexture(0xA0522D)
        .bucketColor(0x8B4513)
        .displayName("Synaptic Corrosion Agent")

    event.create("wetware_integration_disruptor")
        .thickTexture(0xDC143C)
        .bucketColor(0xFF6347)
        .displayName("Wetware Integration Disruptor")

    event.create("nanite_aggregation_catalyst")
        .thinTexture(0x708090)
        .bucketColor(0x4682B4)
        .displayName("Nanite Aggregation Catalyst")

    event.create("accelerated_cellular_degenerate")
        .thickTexture(0x808000)
        .bucketColor(0x556B2F)
        .displayName("Accelerated Cellular Degenerate")

    event.create("uncontrolled_growth_stimulant")
        .thickTexture(0x00FF00)
        .bucketColor(0x3CB371)
        .displayName("Uncontrolled Growth Stimulant")

    event.create("genetic_corruption_fluid")
        .thickTexture(0xDA70D6)
        .bucketColor(0x9932CC)
        .displayName("Genetic Corruption Fluid")

    event.create("chimeric_integration_fluid_corrupted")
        .thickTexture(0xFFD700)
        .bucketColor(0xB8860B)
        .displayName("Chimeric Integration Fluid (Corrupted)")

    event.create("neural_binding_compound")
        .thickTexture(0x0000FF)
        .bucketColor(0x4169E1)
        .displayName("Neural Binding Compound")

    event.create("behavioral_imprinting_solution")
        .thinTexture(0xFF69B4)
        .bucketColor(0xFF1493)
        .displayName("Behavioral Imprinting Solution")

    event.create("pain_amplification_serum")
        .thinTexture(0xFF4500)
        .bucketColor(0x8B0000)
        .displayName("Pain Amplification Serum")

    event.create("bio_iridescent_decay")
        .thinTexture(0x40E0D0)
        .bucketColor(0x00CED1)
        .displayName("Bio-Iridescent Decay")

    event.create("crystalline_proliferation")
        .thinTexture(0xE0FFFF)
        .bucketColor(0xAFEEEE)
        .displayName("Crystalline Proliferation")

    event.create("pulsating_organic_slime")
        .thickTexture(0xFA8072)
        .bucketColor(0xE9967A)
        .displayName("Pulsating Organic Slime")

    // Cognitech (Purely Technological) - ALL FLUIDS:
    event.create("entangled_state_conduit_fluid")
        .thinTexture(0x00FFFF)
        .bucketColor(0xADD8E6)
        .displayName("Entangled State Conduit Fluid")

    event.create("cryogenic_processing_gel")
        .thickTexture(0xADD8E6)
        .bucketColor(0x87CEEB)
        .displayName("Cryogenic Processing Gel")

    event.create("adaptive_logic_matrix_fluid")
        .thinTexture(0x90EE90)
        .bucketColor(0x98FB98)
        .displayName("Adaptive Logic Matrix Fluid")

    event.create("resonant_frequency_amplifier_fluid")
        .thinTexture(0xFFA07A)
        .bucketColor(0xFFDAB9)
        .displayName("Resonant Frequency Amplifier Fluid")

    event.create("cognitive_interface_alloy_fluid")
        .thinTexture(0xD3D3D3)
        .bucketColor(0xC0C0C0)
        .displayName("Cognitive Interface Alloy Fluid")

    // Ascended Phoenixware (Purely Technological) - ALL FLUIDS:
    event.create("akashic_resonance_stream")
        .thinTexture(0xFFD700) // Gold for knowledge, with a hint of flow
        .bucketColor(0xAFEEEE) // Pale Turquoise for a subtle ethereal quality
        .displayName("Akashic Resonance Stream")

    event.create("zeronium_temporal_essence")
        .thickTexture(0xC0C0C0) // Silver for Zeronium
        .bucketColor(0x808080) // Gray to emphasize density and temporal distortion
        .displayName("Zeronium Temporal Essence")

    event.create("multiversal_singularity_catalyst")
        .thickTexture(0x191970) // Midnight Blue for depth and singularity
        .bucketColor(0x4B0082) // Indigo for multiversal aspects
        .displayName("Multiversal Singularity Catalyst")

    event.create("chronarium_infusion_fluid")
        .thinTexture(0xADD8E6) // Light Blue for temporal association
        .bucketColor(0x87CEEB) // Sky Blue for a sense of warping
        .displayName("Chronarium Infusion Fluid")

    event.create("ethereal_knowledge_nexus")
        .thinTexture(0xF0FFFF) // Light Cyan for clarity and crystal-like
        .bucketColor(0xE0FFFF) // Light Cyan, slightly different shade for refraction
        .displayName("Ethereal Knowledge Nexus")

    // Fallen Phoenixware (Purely Technological) - ALL FLUIDS:
  event.create("fading_ember_residue")
        .thickTexture(0xFF8C00) // Dark Orange for embers
        .bucketColor(0x8B4513) // Saddle Brown for residue
        .displayName("Fading Ember Residue")

    event.create("true_heat_conductor_unstable")
        .thinTexture(0xFFFFFF) // White-hot
        .bucketColor(0xFFD700) // Gold to show intensity
        .displayName("True Heat Conductor (Unstable)")

    event.create("phoenix_ash_suspension")
        .thickTexture(0x696969) // Dim Gray for ash
        .bucketColor(0xFF4500) // Orange Red for residual energy
        .displayName("Phoenix Ash Suspension")

    event.create("infernal_overload_emulsion")
        .thickTexture(0x8B0000) // Dark Red for infernal
        .bucketColor(0xFF6347) // Tomato for pulsing light
        .displayName("Infernal Overload Emulsion")

    event.create("scorched_matrix_fluid")
        .thickTexture(0x36454F) // Slate Gray for metallic, scorched look
        .bucketColor(0xFFA07A) // Light Salmon for faint orange trails
        .displayName("Scorched Matrix Fluid")

    event.create("phase_instability_fluid")
        .thinTexture(0xCD5C5C)
        .bucketColor(0xBC8F8F)
        .displayName("Phase Instability Fluid")

    event.create("echoes_of_the_past_resonance_fluid")
        .thinTexture(0xC0C0C0)
        .bucketColor(0xD3D3D3)
        .displayName("Echoes of the Past Resonance Fluid")

    // Panoptic Circuits (Purely Technological) - ALL FLUIDS:
    event.create("multi_spectral_sensor_array_fluid")
        .thinTexture(0x228B22)
        .bucketColor(0x3CB371)
        .displayName("Multi-Spectral Sensor Array Fluid")

    event.create("information_processor_fluid_sensory")
        .thinTexture(0x00BFFF)
        .bucketColor(0x1E90FF)
        .displayName("Information Processor Fluid (Sensory)")

    event.create("adaptive_camouflage_coating_tech")
        .thinTexture(0x8FBC8F)
        .bucketColor(0xA9A9A9)
        .displayName("Adaptive Camouflage Coating (Tech)")

    event.create("directional_energy_receiver_fluid")
        .thinTexture(0xF0E68C)
        .bucketColor(0xFFD700)
        .displayName("Directional Energy Receiver Fluid")

    event.create("neural_interface_emulator_digital_fluid")
        .thinTexture(0x6A5ACD)
        .bucketColor(0x8A2BE2)
        .displayName("Neural Interface Emulator (Digital Fluid)")
})