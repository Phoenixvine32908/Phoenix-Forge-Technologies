function makeItem(event, id, texture, dispName, tag, glow){
  if (tag == null){
    event.create(id).texture(texture).displayName(dispName).glow(glow);
  } else {
    event.create(id).texture(texture).displayName(dispName).tag(tag).glow(glow);
  }
}

StartupEvents.registry('item', event => {
  const circuitsDir = "kubejs:item/phoenixware/circuits";
  const universalCircuitsDir = "kubejs:item/universal_circuits";

 // const AscendedPhoenixWare = [ // Better name for perfected phoenixware
 //   [
    //  "ascended_phoenixware_processor_mainframe",
    //  `${circuitsDir}/perfected_phoenixware_processor_mainframe`,
    //  "§aAscended PhoenixWare Mainframe - “Singularity-Convergent Mind”",
   //   "gtceu:circuits/max",
   //   true
   // ],
   // [
     // "ascended_phoenixware_processing_unit",
     // `${circuitsDir}/perfected_phoenixware_processing_unit`,
     // "§aAscended PhoenixWare Processing Unit - “Singularity-Convergent Mind”",
    //  null,
    //  true
    //],
    //[
    //  "ascended_phoenixware_processor_super_computer",
     // `${circuitsDir}/perfected_phoenixware_processor_super_computer`,
    //  "§aAscended PhoenixWare Supercomputer - “Hypercosmic Intelligence Engine”",
    //  "gtceu:circuits/uiv",
    //  true
   // ],
   // [
   //   "ascended_phoenixware_processor_assembly",
     // `${circuitsDir}/perfected_phoenixware_processor_assembly`,
    //  "§aAscended PhoenixWare Assembly - “Dimensional Computation Array”",
    //  "gtceu:circuits/uev",
    //  true
    //],
    //[
    //  "ascended_phoenixware_processor",
    //  `${circuitsDir}/perfected_phoenixware_processor`,
    //  "§aAscended PhoenixWare Processor - “Omniversal Logic Core”",
     // "gtceu:circuits/uhv",
     // true
    //],
   // [
    //  "ascended_phoenixware_printed_board",
     // `${circuitsDir}/perfected_phoenixware_printed_board`,
    //  "§aAscended PhoenixWare Printed Circuit Board - “Aurum Phoenix”",
    //  null,
    //  true
    //],
    //[
    //  "ascended_phoenixware_circuit_board",
    //  `${circuitsDir}/perfected_phoenixware_circuit_board`,
    //  "§aAscended PhoenixWare Circuit Board - “Inferno Zenith”",
    //  null,
    //  true
    //]
  //];

  /*const CogniTech = [ // Better name for normal phoenixware
    [
      "cognitech_processor_mainframe",
      `${circuitsDir}/phoenixware_processor_mainframe`,
      "§5CogniTech Mainframe - “Chrono-Lattice Intelligence Core”",
      "gtceu:circuits/uiv",
      false
    ],
    [
      "cognitech_processor_super_computer",
      `${circuitsDir}/phoenixware_processor_super_computer`,
      "§5CogniTech Supercomputer - “Astral Computation Matrix”",
      "gtceu:circuits/uev",
      false
    ],
    [
      "cognitech_processor_assembly",
      `${circuitsDir}/phoenixware_processor_assembly`,
      "§5CogniTech Assembly - “Quantum Singularity Nexus”",
      "gtceu:circuits/uhv",
      false
    ],
    [
      "cognitech_processor",
      `${circuitsDir}/phoenixware_processor`,
      "§5CogniTech Processor - “Omniversal Logic Core”",
      "gtceu:circuits/uv",
      false
    ],
    [
      "cognitech_processing_unit",
      `${circuitsDir}/phoenixware_processing_unit`,
      "§5CogniTech Processing Unit - “Phoenix Core”",
      null,
      false
    ],
    [
      "cognitech_printed_board",
      `${circuitsDir}/phoenixware_printed_board`,
      "§5CogniTech Printed Circuit Board - “Emberclad PCB”",
      null,
      false
    ],
    [
      "cognitech_circuit_board",
      `${circuitsDir}/phoenixware_circuit_board`,
      "§5CogniTech Circuit Board - “Ignis Grid”",
      null,
      false
    ]
  ];*/

  /*const FallenPhoenixWare = [ // Better name for flawed phoenixware
    [
      "fallen_phoenixware_processor",
      `${circuitsDir}/flawed_phoenixware_processor`,
      "§cFallen PhoenixWare Processor - “Prototype Entangled Node”",
      "gtceu:circuits/zpm",
      false
    ],
    [
      "fallen_phoenixware_processor_assembly",
      `${circuitsDir}/flawed_phoenixware_processor_assembly`,
      "§cFallen PhoenixWare Assembly - “Inertial Quantum Array”",
      "gtceu:circuits/uv",
      false
    ],
    [
      "fallen_phoenixware_processor_super_computer",
      `${circuitsDir}/flawed_phoenixware_processor_super_computer`,
      "§cFallen PhoenixWare Supercomputer - “Echo Resonance Grid”",
      "gtceu:circuits/uhv",
      false
    ],
    [
      "fallen_phoenixware_processor_mainframe",
      `${circuitsDir}/flawed_phoenixware_processor_mainframe`,
      "§cFallen PhoenixWare Mainframe - “Asynchronous Singularity Core”",
      "gtceu:circuits/uev",
      false
    ],
    [
      "fallen_phoenixware_processing_unit",
      `${circuitsDir}/flawed_phoenixware_processing_unit`,
      "§cFallen PhoenixWare Processing Unit - “Inferno Seed”",
      null,
      false
    ],
    [
      "fallen_phoenixware_circuit_board",
      `${circuitsDir}/flawed_phoenixware_circuit_board`,
      "§cFallen PhoenixWare Circuit Board - “Flickerweave”",
      null,
      false
    ],
    [
      "fallen_phoenixware_printed_board",
      `${circuitsDir}/flawed_phoenixware_printed_board`,
      "§cFallen PhoenixWare Printed Circuit Board - “Cracked Plume”",
      null,
      false
    ]
  ];`*/

  /*const entropic_wetware = [ // Corrupted wetware line of circuits
    [
      "entropic_wetware_processor",
      `${circuitsDir}/entropic_wetware_processor`,
      "§cEntropic Wetware Processor - “Fractured Neural Network”",
      "gtceu:circuits/zpm",
      false
    ],
    [
      "entropic_wetware_processor_assembly",
      `${circuitsDir}/entropic_wetware_processor_assembly`,
      "§cEntropic Wetware Assembly - “Degenerative Logic Array”",
      "gtceu:circuits/uv",
      false
    ],
    [
      "entropic_wetware_processor_super_computer",
      `${circuitsDir}/entropic_wetware_processor_super_computer`,
      "§cEntropic Wetware Supercomputer - “Chaotic Resonance Engine”",
      "gtceu:circuits/uhv",
      false
    ],
    [
      "entropic_wetware_processor_mainframe",
      `${circuitsDir}/entropic_wetware_processor_mainframe`,
      "§cEntropic Wetware Mainframe - “Unstable Singularity Cradle”",
      "gtceu:circuits/uev",
      false
    ],
    [
      "entropic_wetware_processing_unit",
      `${circuitsDir}/entropic_wetware_processing_unit`,
      "§cEntropic Wetware Processing Unit - “Decayed Seed”",
      null,
      false
    ],
    [
      "entropic_wetware_circuit_board",
      `${circuitsDir}/entropic_wetware_circuit_board`,
      "§cEntropic Wetware Circuit Board - “Warped Lattice”",
      null,
      false
    ],
    [
      "entropic_wetware_printed_board",
      `${circuitsDir}/entropic_wetware_printed_board`,
      "§cEntropic Wetware Printed Circuit Board - “Frayed Filament”",
      null,
      false
    ]
  ];

  /*const panoptic_circuits = [ // Omniscient circuits - Fits Panoptic Engine
    [
      "panoptic_processor_mainframe",
      `${circuitsDir}/panoptic_processor_mainframe`,
      "§bPanoptic Mainframe - “All-Seeing Computation Nexus”",
      "gtceu:circuits/max",
      true
    ],
    [
      "panoptic_processing_unit",
      `${circuitsDir}/panoptic_processing_unit`,
      "§bPanoptic Processing Unit - “Observer Core”",
      null,
      true
    ],
    [
      "panoptic_processor_super_computer",
      `${circuitsDir}/panoptic_processor_super_computer`,
      "§bPanoptic Supercomputer - “Cognitive Surveillance Array”",
      "gtceu:circuits/uiv",
      true
    ],
    [
      "panoptic_processor_assembly",
      `${circuitsDir}/panoptic_processor_assembly`,
      "§bPanoptic Assembly - “Sensory Integration Matrix”",
      "gtceu:circuits/uev",
      true
    ],
    [
      "panoptic_processor",
      `${circuitsDir}/panoptic_processor`,
      "§bPanoptic Processor - “Omni-Sensory Logic Engine”",
      "gtceu:circuits/uhv",
      true
    ],
    [
      "panoptic_printed_board",
      `${circuitsDir}/panoptic_printed_board`,
      "§bPanoptic Printed Circuit Board - “Vigilant Weave”",
      null,
      true
    ],
    [
      "panoptic_circuit_board",
      `${circuitsDir}/panoptic_circuit_board`,
      "§bPanoptic Circuit Board - “Clairvoyant Grid”",
      null,
      true
    ]
  ];*/

  const other = [
    [
      "unstable_processing_unit",
      `${circuitsDir}/unstable_processing_unit`,
      "§6Unstable Processing Unit - “Chaotic Computational Core ”",
      "gtceu:circuits/zpm",
      false
    ]
  ];

  const itemsCombined = []
    .concat(other)
    //.concat(entropic_wetware)
    //.concat(FallenPhoenixWare)
   // .concat(CogniTech)
    //.concat(AscendedPhoenixWare)
    //.concat(panoptic_circuits);

  itemsCombined.forEach(item => {
    makeItem(event, item[0], item[1], item[2], item[3], item[4]);
  });

  // --- Universal Circuits (One per Tier) ---
  const universalTiers = [
    { name: "zpm_universal_circuit", displayName: "§dUniversal ZPM Circuit", texture: `${universalCircuitsDir}/zpm_universal_circuit`, tag: "gtceu:circuits/zpm", glow: true },
    { name: "uv_universal_circuit", displayName: "§dUniversal UV Circuit", texture: `${universalCircuitsDir}/uv_universal_circuit`, tag: "gtceu:circuits/uv", glow: true },
    { name: "uhv_universal_circuit", displayName: "§dUniversal UHV Circuit", texture: `${universalCircuitsDir}/uhv_universal_circuit`, tag: "gtceu:circuits/uhv", glow: true },
    { name: "uev_universal_circuit", displayName: "§dUniversal UEV Circuit", texture: `${universalCircuitsDir}/uev_universal_circuit`, tag: "gtceu:circuits/uev", glow: true },
    { name: "uiv_universal_circuit", displayName: "§dUniversal UIV Circuit", texture: `${universalCircuitsDir}/uiv_universal_circuit`, tag: "gtceu:circuits/uiv", glow: true },
    { name: "iv_universal_circuit", displayName: "§dUniversal IV Circuit", texture: `${universalCircuitsDir}/iv_universal_circuit`, tag: "gtceu:circuits/iv", glow: true },
    { name: "uxv_universal_circuit", displayName: "§dUniversal UXV Circuit", texture: `${universalCircuitsDir}/uev_universal_circuit`, tag: "gtceu:circuits/uxv", glow: true },
    { name: "max_universal_circuit", displayName: "§dUniversal MAX Circuit", texture: `${universalCircuitsDir}/max_universal_circuit`, tag: "gtceu:circuits/max", glow: true },
    { name: "luv_universal_circuit", displayName: "§dUniversal LUV Circuit", texture: `${universalCircuitsDir}/luv_universal_circuit`, tag: "gtceu:circuits/luv", glow: true },
    { name: "ev_universal_circuit", displayName: "§dUniversal EV Circuit", texture: `${universalCircuitsDir}/ev_universal_circuit`, tag: "gtceu:circuits/ev", glow: true },
    { name: "hv_universal_circuit", displayName: "§dUniversal HV Circuit", texture: `${universalCircuitsDir}/hv_universal_circuit`, tag: "gtceu:circuits/hv", glow: true },
    { name: "mv_universal_circuit", displayName: "§dUniversal MV Circuit", texture: `${universalCircuitsDir}/mv_universal_circuit`, tag: "gtceu:circuits/mv", glow: true },
    { name: "lv_universal_circuit", displayName: "§dUniversal LV Circuit", texture: `${universalCircuitsDir}/lv_universal_circuit`, tag: "gtceu:circuits/lv", glow: true },
  ];

  universalTiers.forEach(tier => {
    makeItem(event, tier.name, tier.texture, tier.displayName, tier.tag, tier.glow);
  });
});

// --- Recipes for Universal Circuits (Crafting from any circuit of the same tier) ---
