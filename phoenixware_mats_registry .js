// * Item Registry - defines ID, name, texture
// * and certain other properties of custom items.
//
StartupEvents.registry('item', event => {
function create(namespace, displayName) {
        event.create("phoenix_enriched_" + namespace)
            .displayName(displayName)
            .texture("kubejs:item/phoenixware/phoenix_enriched_" + namespace);
    }
    function createAlt(namespace, displayName) {
        event.create(namespace)
        .displayName(displayName)
        .texture("kubejs:item/phoenixware/" + namespace);
    }

    // PhoenixWare Ingots/Boules/Dusts (Raw Usable materials)
  //  create("naquad_boule", "§6Brilliant Boule");
   // create("akashic_zeronium", "§6Phoenix-Enriched §3Akashic Zeronium");
   // create("naquad_ingot", "§6Brilliant Ingot");
   // create("tritanium_ingot", "§6True Heat Stable Ingot");
   // create("neutronium_ingot", "§fTrue Gravi-Stable Ingot");

    // PhoenixWare Wafers And Chips (silicon,ram,cpu,and soc)
    create("naquad_wafer", "§6Brilliant Wafer");

    // PhoenixWare Multiblock casings/custom blocks

    createAlt("plasma_resistant_casing", "§6Plasma-Resistant Casing");

    // PhoenixWare Rods
    create("naquad_rod", "§6Brilliant Rod");
    create("naquad_long_rod", "§6Brilliant Long Rod");

    // PhoenixWare Gears
    create("naquad_gear", "§6Brilliant Gear");

    // PhoenixWare Quantum Binders
    createAlt("crude_quantum_binder", "§8Crude Quantum Binder");
    createAlt("advanced_quantum_binder", "§8advanced Quantum Binder");
    createAlt("super_advanced_quantum_binder", "§8Quantum Singularity §4Stabilizer");

    // PhoenixWare Plates
    create("naquad_plate", "§6Brilliant Plate");
    create("naquad_dense_plate", "§6Brilliant Dense Plate");

    // PhoenixWare Bolts
    create("naquad_bolt", "§6Brilliant Bolt");

    // PhoenixWare Springs
    create("naquad_spring", "§6Brilliant Spring");

    // PhoenixWare Screws
    create("naquad_screw", "§6Brilliant Screw");

    // PhoenixWare Rings
    create("naquad_ring", "§6Brilliant Ring");

    // PhoenixWare Wires
    create("naquad_1x_wire", "§6Brilliant Wire 1x");
});
