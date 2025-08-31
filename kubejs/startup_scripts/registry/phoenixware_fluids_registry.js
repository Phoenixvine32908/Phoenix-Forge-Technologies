// GTCEu Material Registry
GTCEuStartupEvents.registry("gtceu:material", (event) => {
  const plasmas = [
    ["superheated_plasma", 0xffa500, 0xa9423f],
    ["dormant_phoenix_based_plasma", 0xcd8c19, 0xa9423f],
    ["quantum_stable_plasma", 0xd8d6d6, 0xa9423f],
    ["true_phoenix_based_plasma", 0x8d00fc, 0x00ffff],
    ["active_phoenix_based_plasma", 0xfc4f4f, 0xa9423f],
    ["singularity_reactive_plasma", 0x5500aa, 0xff00ff],
    ["chrono_stabilized_plasma", 0xadd8e6, 0x4682b4],
  ];

  // Helper for creating GTCEu plasma materials
  function makeGTCEuPlasma(materialId, color, secondaryColor) {
    event
      .create(materialId)
      .plasma()
      .color(color)
      .secondaryColor(secondaryColor);
  }

  // Register GTCEu plasmas
  plasmas.forEach((plasma) => {
    makeGTCEuPlasma(plasma[0], plasma[1], plasma[2]);
  });
});

// Fluid Registry
StartupEvents.registry("fluid", (event) => {
  // Helper for creating fluids
  function makeFluid(
    fluidId,
    textureType,
    mainColor,
    bucketColor,
    displayName,
  ) {
    const fluid = event.create(fluidId);
    if (textureType === "thin") {
      fluid.thinTexture(mainColor);
    } else {
      // default to thick
      fluid.thickTexture(mainColor);
    }
    fluid.bucketColor(bucketColor).displayName(displayName);
  }

  const customFluids = [
    // [fluidId, textureType, mainColor, bucketColor, displayName]
    ["grass_water", "thin", 0x00ff11, 0x00ff11, "Grass Water"],
    [
      "dimensional_flux_resin",
      "thick",
      0x8a2be2,
      0x9400d3,
      "Dimensional Flux Resin",
    ],
    [
      "plasma_stabilized_mercury",
      "thick",
      0xe0ffff,
      0x808080,
      "Plasma-Stabilized Mercury",
    ],
    [
      "aetheric_conductive_gel",
      "thick",
      0xffff00,
      0xf0e68c,
      "Aetheric Conductive Gel",
    ],
    [
      "void_reactive_coolant",
      "thick",
      0x000000,
      0x1e1e1e,
      "Void-Reactive Coolant",
    ],
    [
      "quantum_adhesive_solution",
      "thick",
      0x00ffff,
      0xafeeee,
      "Quantum Adhesive Solution",
    ],
    [
      "multi_phase_dimensional_gel",
      "thick",
      0xffa07a,
      0xff7f50,
      "Multi-Phase Dimensional Gel",
    ],
    [
      "neutrino_laced_superfluid",
      "thin",
      0x4682b4,
      0x6495ed,
      "Neutrino-Laced Superfluid",
    ],
    [
      "exo_temporal_stabilizer",
      "thick",
      0x3cb371,
      0x2e8b57,
      "Exo-Temporal Stabilizer",
    ],
    [
      "hypercharged_void_extract",
      "thick",
      0xffd700,
      0xffa500,
      "Hypercharged Void Extract",
    ],
    [
      "reality_woven_nanotubes",
      "thick",
      0x800080,
      0x9400d3,
      "Reality-Woven Nanotubes",
    ],
    ["cryo_ember_fluid", "thin", 0xff4500, 0xa020f0, "Cryo Ember Fluid"],
    [
      "phoenix_fire_solution",
      "thick",
      0xff4500,
      0xff8c00,
      "Phoenix Fire Solution",
    ],
    [
      "eldritch_catalytic_mist",
      "thin",
      0x483d8b,
      0x6a5acd,
      "Eldritch Catalytic Mist",
    ],
    [
      "quantum_locked_fluid",
      "thick",
      0x00bfff,
      0x1e90ff,
      "Quantum-Locked Fluid",
    ],
    [
      "void_charged_ionic_gel",
      "thick",
      0x40e0d0,
      0x00ced1,
      "Void-Charged Ionic Gel",
    ],
    [
      "glitched_anomalous_resin",
      "thick",
      0xff69b4,
      0xff1493,
      "Glitched Anomalous Resin",
    ],
    [
      "entropy_diffusion_mist",
      "thin",
      0x778899,
      0x696969,
      "Entropy-Diffusion Mist",
    ],
    [
      "dark_matter_suspension",
      "thick",
      0x4b0082,
      0x191970,
      "Dark Matter Suspension",
    ],
    [
      "reality_fractured_isotope",
      "thick",
      0xdc143c,
      0xff6347,
      "Reality-Fractured Isotope",
    ],
    ["cosmic_flux_liquid", "thick", 0x008080, 0x008b8b, "Cosmic Flux Liquid"],
    [
      "stellar_compression_dust",
      "thin",
      0xf5f5dc,
      0xffffe0,
      "Stellar Compression Dust",
    ],
    [
      "graviton_dense_slurry",
      "thick",
      0x2f4f4f,
      0x000080,
      "Graviton-Dense Slurry",
    ],
    [
      "event_horizon_condensate",
      "thick",
      0x000000,
      0x4f4f4f,
      "Event Horizon Condensate",
    ],
    [
      "quantum_star_infusion",
      "thick",
      0xffffe0,
      0xffdab9,
      "Quantum-Star Infusion",
    ],
    ["eon_fused_catalyst", "thick", 0xb8860b, 0xd2b48c, "Eon-Fused Catalyst"],
    [
      "singularity_condensed_matter",
      "thick",
      0x000000,
      0x1e1e1e,
      "Singularity-Condensed Matter",
    ],
    [
      "primordial_chaos_fluid",
      "thick",
      0x800000,
      0xa52a2a,
      "Primordial Chaos Fluid",
    ],
    [
      "multiversal_binding_agent",
      "thick",
      0xda70d6,
      0xff00ff,
      "Multiversal Binding Agent",
    ],
    [
      "absolute_zero_etherium",
      "thick",
      0xafeeee,
      0xe0ffff,
      "Absolute-Zero Etherium",
    ],
    // Corrupted Wetware Chemicals:
    [
      "cognitive_dissonance_compound",
      "thick",
      0x8b008b,
      0x4b0082,
      "Cognitive Dissonance Compound",
    ],
    [
      "memory_scrambler_toxin",
      "thin",
      0xff8c00,
      0xffa07a,
      "Memory Scrambler Toxin",
    ],
    [
      "emotional_override_agent",
      "thick",
      0xff0000,
      0x8b0000,
      "Emotional Override Agent",
    ],
    [
      "sensory_distortion_fluid",
      "thick",
      0x00ffff,
      0x8fbc8f,
      "Sensory Distortion Fluid",
    ],
    [
      "neural_decay_catalyst",
      "thin",
      0x696969,
      0x000000,
      "Neural Decay Catalyst",
    ],
    [
      "bio_electric_discharge_amplifier",
      "thick",
      0xffff00,
      0xf0e68c,
      "Bio-Electric Discharge Amplifier",
    ],
    [
      "synaptic_corrosion_agent",
      "thin",
      0xa0522d,
      0x8b4513,
      "Synaptic Corrosion Agent",
    ],
    [
      "wetware_integration_disruptor",
      "thick",
      0xdc143c,
      0xff6347,
      "Wetware Integration Disruptor",
    ],
    [
      "nanite_aggregation_catalyst",
      "thin",
      0x708090,
      0x4682b4,
      "Nanite Aggregation Catalyst",
    ],
    [
      "accelerated_cellular_degenerate",
      "thick",
      0x808000,
      0x556b2f,
      "Accelerated Cellular Degenerate",
    ],
    [
      "uncontrolled_growth_stimulant",
      "thick",
      0x00ff00,
      0x3cb371,
      "Uncontrolled Growth Stimulant",
    ],
    [
      "genetic_corruption_fluid",
      "thick",
      0xda70d6,
      0x9932cc,
      "Genetic Corruption Fluid",
    ],
    [
      "chimeric_integration_fluid_corrupted",
      "thick",
      0xffd700,
      0xb8860b,
      "Chimeric Integration Fluid (Corrupted)",
    ],
    [
      "neural_binding_compound",
      "thick",
      0x0000ff,
      0x4169e1,
      "Neural Binding Compound",
    ],
    [
      "behavioral_imprinting_solution",
      "thin",
      0xff69b4,
      0xff1493,
      "Behavioral Imprinting Solution",
    ],
    [
      "pain_amplification_serum",
      "thin",
      0xff4500,
      0x8b0000,
      "Pain Amplification Serum",
    ],
    [
      "bio_iridescent_decay",
      "thin",
      0x40e0d0,
      0x00ced1,
      "Bio-Iridescent Decay",
    ],
    [
      "crystalline_proliferation",
      "thin",
      0xe0ffff,
      0xafeeee,
      "Crystalline Proliferation",
    ],
    [
      "pulsating_organic_slime",
      "thick",
      0xfa8072,
      0xe9967a,
      "Pulsating Organic Slime",
    ],
    // Cognitech (Purely Technological) - ALL FLUIDS:
    [
      "entangled_state_conduit_fluid",
      "thin",
      0x00ffff,
      0xadd8e6,
      "Entangled State Conduit Fluid",
    ],
    [
      "cryogenic_processing_gel",
      "thick",
      0xadd8e6,
      0x87ceeb,
      "Cryogenic Processing Gel",
    ],
    [
      "adaptive_logic_matrix_fluid",
      "thin",
      0x90ee90,
      0x98fb98,
      "Adaptive Logic Matrix Fluid",
    ],
    [
      "resonant_frequency_amplifier_fluid",
      "thin",
      0xffa07a,
      0xffdab9,
      "Resonant Frequency Amplifier Fluid",
    ],
    [
      "cognitive_interface_alloy_fluid",
      "thin",
      0xd3d3d3,
      0xc0c0c0,
      "Cognitive Interface Alloy Fluid",
    ],
    ["magma", "thick", 0xa12424, 0x400b0b, "Magma"],
    // Ascended Phoenixware (Purely Technological) - ALL FLUIDS:
    [
      "akashic_resonance_stream",
      "thin",
      0xffd700,
      0xafeeee,
      "Akashic Resonance Stream",
    ],
    [
      "zeronium_temporal_essence",
      "thick",
      0xc0c0c0,
      0x808080,
      "Zeronium Temporal Essence",
    ],
    [
      "multiversal_singularity_catalyst",
      "thick",
      0x191970,
      0x4b0082,
      "Multiversal Singularity Catalyst",
    ],
    [
      "chronarium_infusion_fluid",
      "thin",
      0xadd8e6,
      0x87ceeb,
      "Chronarium Infusion Fluid",
    ],
    [
      "ethereal_knowledge_nexus",
      "thin",
      0xf0ffff,
      0xe0ffff,
      "Ethereal Knowledge Nexus",
    ],
    // Fallen Phoenixware (Purely Technological) - ALL FLUIDS:
    [
      "fading_ember_residue",
      "thick",
      0xff8c00,
      0x8b4513,
      "Fading Ember Residue",
    ],
    [
      "true_heat_conductor_unstable",
      "thin",
      0xffffff,
      0xffd700,
      "True Heat Conductor (Unstable)",
    ],
    ["frost", "thin", 0xa7d1eb, 0x778899, "Frost"],
    [
      "phoenix_ash_suspension",
      "thick",
      0x696969,
      0xff4500,
      "Phoenix Ash Suspension",
    ],
    [
      "infernal_overload_emulsion",
      "thick",
      0x8b0000,
      0xff6347,
      "Infernal Overload Emulsion",
    ],
    [
      "scorched_matrix_fluid",
      "thick",
      0x36454f,
      0xffa07a,
      "Scorched Matrix Fluid",
    ],
    [
      "phase_instability_fluid",
      "thin",
      0xcd5c5c,
      0xbc8f8f,
      "Phase Instability Fluid",
    ],
    [
      "echoes_of_the_past_resonance_fluid",
      "thin",
      0xc0c0c0,
      0xd3d3d3,
      "Echoes of the Past Resonance Fluid",
    ],
    // Panoptic Circuits (Purely Technological) - ALL FLUIDS:
    [
      "multi_spectral_sensor_array_fluid",
      "thin",
      0x228b22,
      0x3cb371,
      "Multi-Spectral Sensor Array Fluid",
    ],
    [
      "information_processor_fluid_sensory",
      "thin",
      0x00bfff,
      0x1e90ff,
      "Information Processor Fluid (Sensory)",
    ],
    [
      "adaptive_camouflage_coating_tech",
      "thin",
      0x8fbc8f,
      0xa9a9a9,
      "Adaptive Camouflage Coating (Tech)",
    ],
    [
      "directional_energy_receiver_fluid",
      "thin",
      0xf0e68c,
      0xffd700,
      "Directional Energy Receiver Fluid",
    ],
    [
      "neural_interface_emulator_digital_fluid",
      "thin",
      0x6a5acd,
      0x8a2be2,
      "Neural Interface Emulator (Digital Fluid)",
    ],
    [
      "blazing_drilling_fluid",
      "thin",
      0xff6600,
      0xee4400,
      "Blazing Drilling Fluid",
    ],
    [
      "voidic_drilling_fluid",
      "thin",
      0x400080,
      0x7b68ee,
      "Voidic Drilling Fluid",
    ],
  ];

  customFluids.forEach((fluid) => {
    makeFluid(fluid[0], fluid[1], fluid[2], fluid[3], fluid[4]);
  });
});
