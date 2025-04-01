/**
 * Item Registry - defines ID, name, texture
 * and certain other properties of custom items.
 */
StartupEvents.registry('item', event => {

    function flawed(namespace, displayName) {
        event.create("flawed" + namespace)
        .displayName(displayName)
        .texture("kubejs:item/phoenixware/flawed_ " + namespace);
    }


    // Perfected PhoenixWare
    event.create('perfected_phoenixware_processor_mainframe')
    .texture('kubejs:item/phoenixware/circuits/perfected_phoenixware_processor_mainframe')
    .displayName("§6Perfected PhoenixWare Mainframe – “Singularity-Convergent Mind”")
    .tag("gtceu:circuits/max")
    .glow(true)
    event.create('perfected_phoenixware_processing_unit')
    .texture('kubejs:item/phoenixware/circuits/perfected_phoenixware_processing_unit')
    .displayName("§6Perfected PhoenixWare processing_unit – “Singularity-Convergent Mind”")
    .glow(true)
    event.create('perfected_phoenixware_processor_super_computer')
    .texture('kubejs:item/phoenixware/circuits/perfected_phoenixware_processor_super_computer')
    .displayName("§6Perfected PhoenixWare Supercomputer – “Hypercosmic Intelligence Engine”")
    .tag("gtceu:circuits/uiv")
    .glow(true)
    event.create('perfected_phoenixware_processor_assembly')
    .texture('kubejs:item/phoenixware/circuits/perfected_phoenixware_processor_assembly')
    .displayName("§6Perfected PhoenixWare Assembly – “Dimensional Computation Array”")
    .tag("gtceu:circuits/uev")
    .glow(true)
    event.create('perfected_phoenixware_processor')
    .texture('kubejs:item/phoenixware/circuits/perfected_phoenixware_processor')
    .displayName("§6Perfected PhoenixWare Processor – “Omniversal Logic Core”")
    .tag("gtceu:circuits/uhv")
    .glow(true)
    event.create('perfected_phoenixware_printed_board')
    .texture('kubejs:item/phoenixware/circuits/perfected_phoenixware_printed_board')
    .displayName("§6Perfected PhoenixWare Printed Circuit Board – “Aurum Phoenix”")
    .glow(true)
    event.create('perfected_phoenixware_circuit_board')
    .texture('kubejs:item/phoenixware/circuits/perfected_phoenixware_circuit_board')
    .displayName("§6Perfected PhoenixWare Circuit Board – “Inferno Zenith”")
    .glow(true)

    // Normal PhoenixWare
    event.create('phoenixware_processor_mainframe')
    .texture('kubejs:item/phoenixware/circuits/phoenixware_processor_mainframe')
    .displayName("§6PhoenixWare Mainframe – “Chrono-Lattice Intelligence Core”")
    .tag("gtceu:circuits/uiv")
    event.create('phoenixware_processor_super_computer')
    .texture('kubejs:item/phoenixware/circuits/phoenixware_processor_super_computer')
    .displayName("§6PhoenixWare Supercomputer – “Astral Computation Matrix”")
    .tag("gtceu:circuits/uev")
    event.create('phoenixware_processor_assembly')
    .texture('kubejs:item/phoenixware/circuits/phoenixware_processor_assembly')
    .displayName("§6PhoenixWare Assembly – “Quantum Singularity Nexus”")
    .tag("gtceu:circuits/uhv")
    event.create('phoenixware_processor')
    .texture('kubejs:item/phoenixware/circuits/phoenixware_processor')
    .displayName("§6PhoenixWare Processor – “Omniversal Logic Core”")
    .tag("gtceu:circuits/uv")
    event.create('phoenixware_processing_unit')
    .texture('kubejs:item/phoenixware/circuits/phoenixware_processing_unit')
    .displayName("§6PhoenixWare Processing Unit – “Phoenix Core”")
    event.create('phoenixware_printed_board')
    .texture('kubejs:item/phoenixware/circuits/phoenixware_printed_board')
    .displayName("§6PhoenixWare Printed Circuit Board – “Emberclad PCB”")
    event.create('phoenixware_circuit_board')
    .texture('kubejs:item/phoenixware/circuits/phoenixware_circuit_board')
    .displayName("§6PhoenixWare Circuit Board – “Ignis Grid”")

    // Flawed PhoenixWare
    event.create('flawed_phoenixware_processor')
    .texture('kubejs:item/phoenixware/circuits/flawed_phoenixware_processor')
    .displayName("§6Flawed PhoenixWare Processor – “Prototype Entangled Node”")
    .tag("gtceu:circuits/zpm")
    event.create('flawed_phoenixware_processor_assembly')
    .texture('kubejs:item/phoenixware/circuits/flawed_phoenixware_processor_assembly')
    .displayName("§6Flawed PhoenixWare Assembly – “Inertial Quantum Array”")
    .tag("gtceu:circuits/uv")
    event.create('flawed_phoenixware_processor_super_computer')
    .texture('kubejs:item/phoenixware/circuits/flawed_phoenixware_processor_super_computer')
    .displayName("§6Flawed PhoenixWare Supercomputer – “Echo Resonance Grid”")
    .tag("gtceu:circuits/uhv")
    event.create('flawed_phoenixware_processor_mainframe')
    .texture('kubejs:item/phoenixware/circuits/flawed_phoenixware_processor_mainframe')
    .displayName("§6Flawed PhoenixWare Mainframe – “Asynchronous Singularity Core”")
    .tag("gtceu:circuits/uev")
    event.create('flawed_phoenixware_processing_unit')
    .texture('kubejs:item/phoenixware/circuits/flawed_phoenixware_processing_unit')
    .displayName("§6Flawed PhoenixWare Processing Unit – “Inferno Seed”")
    event.create('flawed_phoenixware_circuit_board')
    .texture('kubejs:item/phoenixware/circuits/flawed_phoenixware_circuit_board')
    .displayName("§6Flawed PhoenixWare Circuit Board – “Flickerweave”")
    event.create('flawed_phoenixware_printed_board')
    .texture('kubejs:item/phoenixware/circuits/flawed_phoenixware_printed_board')
    .displayName("§6Flawed PhoenixWare Printed Circuit Board – “Cracked Plume”")



    // Unstable Processing Unit
    event.create('unstable_processing_unit')
    .texture('kubejs:item/phoenixware/circuits/unstable_processing_unit')
    .displayName("§6Unstable Processing Unit - “Chaotic Computational Core ”")
    .tag("gtceu:circuits/zpm")


}); // <- Removed the extra closing brace

