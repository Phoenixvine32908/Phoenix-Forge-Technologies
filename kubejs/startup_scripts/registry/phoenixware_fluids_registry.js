/**
Registry for kubejs fluids and gt plasmas
**/

GTCEuStartupEvents.registry("gtceu:material", event => {

    const plasmas = [
        ["superheated_plasma", 0xFFA500, 0xA9423F],
        ["dormant_phoenix_based_plasma", 0xcd8c19, 0xA9423F],
        ["quantum_stable_plasma", 0xd8d6d6, 0xA9423F],
        ["true_phoenix_based_plasma", 0x8d00fc, 0x00FFFF],
        ["active_phoenix_based_plasma", 0xfc4f4f, 0xA9423F],
        ["singularity_reactive_plasma", 0x5500AA, 0xFF00FF],
        ["chrono_stabilized_plasma", 0xADD8E6, 0x4682B4]
    ];

    // Helper for creating GTCEu plasma materials
    function makeGTCEuPlasma(materialId, color, secondaryColor) {
        event.create(materialId)
            .plasma()
            .color(color)
            .secondaryColor(secondaryColor);
    }

    // Register GTCEu plasmas
    plasmas.forEach(plasma => {
        makeGTCEuPlasma(plasma[0], plasma[1], plasma[2]);
    });


});


// Fluid Registry
StartupEvents.registry("fluid", event => {

    // Helper for creating fluids
    function makeFluid(fluidId, textureType, mainColor, bucketColor, displayName) {
        let fluid = event.create(fluidId);
        if (textureType === "thin") {
            fluid.thinTexture(mainColor);
        } else { // default to thick
            fluid.thickTexture(mainColor);
        }
        fluid.bucketColor(bucketColor).displayName(displayName);
    }

    const customFluids = [
        // [fluidId, textureType, mainColor, bucketColor, displayName]
        ["grass_water", "thin", 0x00ff11, 0x00ff11, "Grass Water"],
        ["dimensional_flux_resin", "thick", 0x8A2BE2, 0x9400D3, "Dimensional Flux Resin"],
        ["plasma_stabilized_mercury", "thick", 0xE0FFFF, 0x808080, "Plasma-Stabilized Mercury"],
        ["aetheric_conductive_gel", "thick", 0xFFFF00, 0xF0E68C, "Aetheric Conductive Gel"],
        ["void_reactive_coolant", "thick", 0x000000, 0x1E1E1E, "Void-Reactive Coolant"],
        ["quantum_adhesive_solution", "thick", 0x00FFFF, 0xAFEEEE, "Quantum Adhesive Solution"],
        ["multi_phase_dimensional_gel", "thick", 0xFFA07A, 0xFF7F50, "Multi-Phase Dimensional Gel"],
        ["neutrino_laced_superfluid", "thin", 0x4682B4, 0x6495ED, "Neutrino-Laced Superfluid"],
        ["exo_temporal_stabilizer", "thick", 0x3CB371, 0x2E8B57, "Exo-Temporal Stabilizer"],
        ["hypercharged_void_extract", "thick", 0xFFD700, 0xFFA500, "Hypercharged Void Extract"],
        ["reality_woven_nanotubes", "thick", 0x800080, 0x9400D3, "Reality-Woven Nanotubes"]
        ["phoenix_fire_solution", "thick", 0xFF4500, 0xFF8C00, "Phoenix Fire Solution"],
        ["eldritch_catalytic_mist", "thin", 0x483D8B, 0x6A5ACD, "Eldritch Catalytic Mist"],
        ["quantum_locked_fluid", "thick", 0x00BFFF, 0x1E90FF, "Quantum-Locked Fluid"],
        ["void_charged_ionic_gel", "thick", 0x40E0D0, 0x00CED1, "Void-Charged Ionic Gel"],
        ["glitched_anomalous_resin", "thick", 0xFF69B4, 0xFF1493, "Glitched Anomalous Resin"],
        ["entropy_diffusion_mist", "thin", 0x778899, 0x696969, "Entropy-Diffusion Mist"],
        ["dark_matter_suspension", "thick", 0x4B0082, 0x191970, "Dark Matter Suspension"],
        ["reality_fractured_isotope", "thick", 0xDC143C, 0xFF6347, "Reality-Fractured Isotope"],
        ["cosmic_flux_liquid", "thick", 0x008080, 0x008B8B, "Cosmic Flux Liquid"],
        ["stellar_compression_dust", "thin", 0xF5F5DC, 0xFFFFE0, "Stellar Compression Dust"],
        ["graviton_dense_slurry", "thick", 0x2F4F4F, 0x000080, "Graviton-Dense Slurry"],
        ["event_horizon_condensate", "thick", 0x000000, 0x4F4F4F, "Event Horizon Condensate"],
        ["quantum_star_infusion", "thick", 0xFFFFE0, 0xFFDAB9, "Quantum-Star Infusion"],
        ["eon_fused_catalyst", "thick", 0xB8860B, 0xD2B48C, "Eon-Fused Catalyst"],
        ["singularity_condensed_matter", "thick", 0x000000, 0x1E1E1E, "Singularity-Condensed Matter"],
        ["primordial_chaos_fluid", "thick", 0x800000, 0xA52A2A, "Primordial Chaos Fluid"],
        ["multiversal_binding_agent", "thick", 0xDA70D6, 0xFF00FF, "Multiversal Binding Agent"],
        ["absolute_zero_etherium", "thick", 0xAFEEEE, 0xE0FFFF, "Absolute-Zero Etherium"],
        // Corrupted Wetware Chemicals:
        ["cognitive_dissonance_compound", "thick", 0x8B008B, 0x4B0082, "Cognitive Dissonance Compound"],
        ["memory_scrambler_toxin", "thin", 0xFF8C00, 0xFFA07A, "Memory Scrambler Toxin"],
        ["emotional_override_agent", "thick", 0xFF0000, 0x8B0000, "Emotional Override Agent"],
        ["sensory_distortion_fluid", "thick", 0x00FFFF, 0x8FBC8F, "Sensory Distortion Fluid"],
        ["neural_decay_catalyst", "thin", 0x696969, 0x000000, "Neural Decay Catalyst"],
        ["bio_electric_discharge_amplifier", "thick", 0xFFFF00, 0xF0E68C, "Bio-Electric Discharge Amplifier"],
        ["synaptic_corrosion_agent", "thin", 0xA0522D, 0x8B4513, "Synaptic Corrosion Agent"],
        ["wetware_integration_disruptor", "thick", 0xDC143C, 0xFF6347, "Wetware Integration Disruptor"],
        ["nanite_aggregation_catalyst", "thin", 0x708090, 0x4682B4, "Nanite Aggregation Catalyst"],
        ["accelerated_cellular_degenerate", "thick", 0x808000, 0x556B2F, "Accelerated Cellular Degenerate"],
        ["uncontrolled_growth_stimulant", "thick", 0x00FF00, 0x3CB371, "Uncontrolled Growth Stimulant"],
        ["genetic_corruption_fluid", "thick", 0xDA70D6, 0x9932CC, "Genetic Corruption Fluid"],
        ["chimeric_integration_fluid_corrupted", "thick", 0xFFD700, 0xB8860B, "Chimeric Integration Fluid (Corrupted)"],
        ["neural_binding_compound", "thick", 0x0000FF, 0x4169E1, "Neural Binding Compound"],
        ["behavioral_imprinting_solution", "thin", 0xFF69B4, 0xFF1493, "Behavioral Imprinting Solution"],
        ["pain_amplification_serum", "thin", 0xFF4500, 0x8B0000, "Pain Amplification Serum"],
        ["bio_iridescent_decay", "thin", 0x40E0D0, 0x00CED1, "Bio-Iridescent Decay"],
        ["crystalline_proliferation", "thin", 0xE0FFFF, 0xAFEEEE, "Crystalline Proliferation"],
        ["pulsating_organic_slime", "thick", 0xFA8072, 0xE9967A, "Pulsating Organic Slime"],
        // Cognitech (Purely Technological) - ALL FLUIDS:
        ["entangled_state_conduit_fluid", "thin", 0x00FFFF, 0xADD8E6, "Entangled State Conduit Fluid"],
        ["cryogenic_processing_gel", "thick", 0xADD8E6, 0x87CEEB, "Cryogenic Processing Gel"],
        ["adaptive_logic_matrix_fluid", "thin", 0x90EE90, 0x98FB98, "Adaptive Logic Matrix Fluid"],
        ["resonant_frequency_amplifier_fluid", "thin", 0xFFA07A, 0xFFDAB9, "Resonant Frequency Amplifier Fluid"],
        ["cognitive_interface_alloy_fluid", "thin", 0xD3D3D3, 0xC0C0C0, "Cognitive Interface Alloy Fluid"],
        ["magma", "thick", 0xa12424, 0x400b0b, "Magma"],
        // Ascended Phoenixware (Purely Technological) - ALL FLUIDS:
        ["akashic_resonance_stream", "thin", 0xFFD700, 0xAFEEEE, "Akashic Resonance Stream"],
        ["zeronium_temporal_essence", "thick", 0xC0C0C0, 0x808080, "Zeronium Temporal Essence"],
        ["multiversal_singularity_catalyst", "thick", 0x191970, 0x4B0082, "Multiversal Singularity Catalyst"],
        ["chronarium_infusion_fluid", "thin", 0xADD8E6, 0x87CEEB, "Chronarium Infusion Fluid"],
        ["ethereal_knowledge_nexus", "thin", 0xF0FFFF, 0xE0FFFF, "Ethereal Knowledge Nexus"],
        // Fallen Phoenixware (Purely Technological) - ALL FLUIDS:
        ["fading_ember_residue", "thick", 0xFF8C00, 0x8B4513, "Fading Ember Residue"],
        ["true_heat_conductor_unstable", "thin", 0xFFFFFF, 0xFFD700, "True Heat Conductor (Unstable)"],
        ["phoenix_ash_suspension", "thick", 0x696969, 0xFF4500, "Phoenix Ash Suspension"],
        ["infernal_overload_emulsion", "thick", 0x8B0000, 0xFF6347, "Infernal Overload Emulsion"],
        ["scorched_matrix_fluid", "thick", 0x36454F, 0xFFA07A, "Scorched Matrix Fluid"],
        ["phase_instability_fluid", "thin", 0xCD5C5C, 0xBC8F8F, "Phase Instability Fluid"],
        ["echoes_of_the_past_resonance_fluid", "thin", 0xC0C0C0, 0xD3D3D3, "Echoes of the Past Resonance Fluid"],
        // Panoptic Circuits (Purely Technological) - ALL FLUIDS:
        ["multi_spectral_sensor_array_fluid", "thin", 0x228B22, 0x3CB371, "Multi-Spectral Sensor Array Fluid"],
        ["information_processor_fluid_sensory", "thin", 0x00BFFF, 0x1E90FF, "Information Processor Fluid (Sensory)"],
        ["adaptive_camouflage_coating_tech", "thin", 0x8FBC8F, 0xA9A9A9, "Adaptive Camouflage Coating (Tech)"],
        ["directional_energy_receiver_fluid", "thin", 0xF0E68C, 0xFFD700, "Directional Energy Receiver Fluid"],
        ["neural_interface_emulator_digital_fluid", "thin", 0x6A5ACD, 0x8A2BE2, "Neural Interface Emulator (Digital Fluid)"],
    ];

    customFluids.forEach(fluid => {
        makeFluid(fluid[0], fluid[1], fluid[2], fluid[3], fluid[4]);
    });
});
