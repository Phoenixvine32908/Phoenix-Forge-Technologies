function makeItem(event, id, texture, dispName, tag, glow){
  if (tag == null){
    event.create(id).texture(texture).displayName(dispName).glow(glow);
  } else {
    event.create(id).texture(texture).displayName(dispName).tag(tag).glow(glow);
  }
}

StartupEvents.registry('item', event => {
    const circuitsDir = "kubejs:item/phoenixware/circuits";

    const perfectedPhoenixWare = [
      [
        "perfected_phoenixware_processor_mainframe",
        `${circuitsDir}/perfected_phoenixware_processor_mainframe`,
        "§6Perfected PhoenixWare Mainframe - “Singularity-Convergent Mind”",
        "gtceu:circuits/max",
        true
      ],
      [
        "perfected_phoenixware_processing_unit",
        `${circuitsDir}/perfected_phoenixware_processing_unit`,
        "§6Perfected PhoenixWare processing_unit - “Singularity-Convergent Mind”",
        null,
        true
      ],
      [
        "perfected_phoenixware_processor_super_computer",
        `${circuitsDir}/perfected_phoenixware_processor_super_computer`,
        "§6Perfected PhoenixWare Supercomputer - “Hypercosmic Intelligence Engine”",
        "gtceu:circuits/uiv",
        true
      ],
      [
        "perfected_phoenixware_processor_assembly",
        `${circuitsDir}/perfected_phoenixware_processor_assembly`,
        "§6Perfected PhoenixWare Assembly - “Dimensional Computation Array”",
        "gtceu:circuits/uev",
        true
      ],
      [
        "perfected_phoenixware_processor",
        `${circuitsDir}/perfected_phoenixware_processor`,
        "§6Perfected PhoenixWare Processor - “Omniversal Logic Core”",
        "gtceu:circuits/uhv",
        true
      ],
      [
        "perfected_phoenixware_printed_board",
        `${circuitsDir}/perfected_phoenixware_printed_board`,
        "§6Perfected PhoenixWare Printed Circuit Board - “Aurum Phoenix”",
        null,
        true
      ],
      [
        "perfected_phoenixware_circuit_board",
        `${circuitsDir}/perfected_phoenixware_circuit_board`,
        "§6Perfected PhoenixWare Circuit Board - “Inferno Zenith”",
        null,
        true
      ]
    ];
    
    const phoenixware = [
      [
        "phoenixware_processor_mainframe",
        `${circuitsDir}/phoenixware_processor_mainframe`,
        "§6PhoenixWare Mainframe - “Chrono-Lattice Intelligence Core”",
        "gtceu:circuits/uiv",
        false
      ],
      [
        "phoenixware_processor_super_computer",
        `${circuitsDir}/phoenixware_processor_super_computer`,
        "§6PhoenixWare Supercomputer - “Astral Computation Matrix”",
        "gtceu:circuits/uev",
        false
      ],
      [
        "phoenixware_processor_assembly",
        `${circuitsDir}/phoenixware_processor_assembly`,
        "§6PhoenixWare Assembly - “Quantum Singularity Nexus”",
        "gtceu:circuits/uhv",
        false
      ],
      [
        "phoenixware_processor",
        `${circuitsDir}/phoenixware_processor`,
        "§6PhoenixWare Processor - “Omniversal Logic Core”",
        "gtceu:circuits/uv",
        false
      ],
      [
        "phoenixware_processing_unit",
        `${circuitsDir}/phoenixware_processing_unit`,
        "§6PhoenixWare Processing Unit - “Phoenix Core”",
        null,
        false
      ],
      [
        "phoenixware_printed_board",
        `${circuitsDir}/phoenixware_printed_board`,
        "§6PhoenixWare Printed Circuit Board - “Emberclad PCB”",
        null,
        false
      ],
      [
        "phoenixware_circuit_board",
        `${circuitsDir}/phoenixware_circuit_board`,
        "§6PhoenixWare Circuit Board - “Ignis Grid”",
        null,
        false
      ]
    ];
    
    const flawedPhoenixWare = [
      [
        "flawed_phoenixware_processor",
        `${circuitsDir}/flawed_phoenixware_processor`,
        "§6Flawed PhoenixWare Processor - “Prototype Entangled Node”",
        "gtceu:circuits/zpm",
        false
      ],
      [
        "flawed_phoenixware_processor_assembly",
        `${circuitsDir}/flawed_phoenixware_processor_assembly`,
        "§6Flawed PhoenixWare Assembly - “Inertial Quantum Array”",
        "gtceu:circuits/uv",
        false
      ],
      [
        "flawed_phoenixware_processor_super_computer",
        `${circuitsDir}/flawed_phoenixware_processor_super_computer`,
        "§6Flawed PhoenixWare Supercomputer - “Echo Resonance Grid”",
        "gtceu:circuits/uhv",
        false
      ],
      [
        "flawed_phoenixware_processor_mainframe",
        `${circuitsDir}/flawed_phoenixware_processor_mainframe`,
        "§6Flawed PhoenixWare Mainframe - “Asynchronous Singularity Core”",
        "gtceu:circuits/uev",
        false
      ],
      [
        "flawed_phoenixware_processing_unit",
        `${circuitsDir}/flawed_phoenixware_processing_unit`,
        "§6Flawed PhoenixWare Processing Unit - “Inferno Seed”",
        null,
        false
      ],
      [
        "flawed_phoenixware_circuit_board",
        `${circuitsDir}/flawed_phoenixware_circuit_board`,
        "§6Flawed PhoenixWare Circuit Board - “Flickerweave”",
        null,
        false
      ],
      [
        "flawed_phoenixware_printed_board",
        `${circuitsDir}/flawed_phoenixware_printed_board`,
        "§6Flawed PhoenixWare Printed Circuit Board - “Cracked Plume”",
        null,
        false
      ]
    ];
    
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
        .concat(flawedPhoenixWare)
        .concat(phoenixware)
        .concat(perfectedPhoenixWare);

    itemsCombined.forEach(item => {
        makeItem(event, item[0], item[1], item[2], item[3], item[4]);
    })

});

