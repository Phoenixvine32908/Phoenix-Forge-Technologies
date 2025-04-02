function makeDust(event, id, color, cmp){
    event.create(id)
    .dust()
    .fluid()
    .color(color)
    .components(cmp)
    .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
}

StartupEvents.registry('item', event => {
    function create(namespace, displayName) {
        event.create("phoenix_enriched_" + namespace)
        .displayName(displayName)
        .texture("kubejs:item/phoenixware/mats/phoenix_enriched_" + namespace);
    }
    function createAlt(namespace, displayName) {
        event.create(namespace)
        .displayName(displayName)
        .texture("kubejs:item/phoenixware/mats" + namespace);
    }
    // PhoenixWare Ingots/Boules/Dusts (Raw Usable materials)
    create("naquad_boule", "§6Brilliant Boule");

    // PhoenixWare Wafers And Chips (silicon,ram,cpu,and soc)
    create("naquad_wafer", "§6Brilliant Wafer");

    // PhoenixWare Multiblock casings/custom blocks

    //createAlt("plasma_resistant_casing", "§6Plasma-Resistant Casing");

    // PhoenixWare Rods
   // create("naquad_rod", "§6Brilliant Rod");
   // create("naquad_long_rod", "§6Brilliant Long Rod");

    // PhoenixWare Gears
  //  create("naquad_gear", "§6Brilliant Gear");

    // PhoenixWare Quantum Binders
    //createAlt("crude_quantum_binder", "§8Crude Quantum Binder");


    
    //.secondaryColor(0xA9423F)
    // PhoenixWare Plates
   // create("naquad_plate", "§6Brilliant Plate");
    //create("naquad_dense_plate", "§6Brilliant Dense Plate");

    // PhoenixWare Bolts
   //create("naquad_bolt", "§6Brilliant Bolt");

    // PhoenixWare Springs
   // create("naquad_spring", "§6Brilliant Spring");

    // PhoenixWare Screws
   // create("naquad_screw", "§6Brilliant Screw");

    // PhoenixWare Rings
   // create("naquad_ring", "§6Brilliant Ring");

    // PhoenixWare Wires
   // create("naquad_1x_wire", "§6Brilliant Wire 1x");
});
GTCEuStartupEvents.registry('gtceu:material', event => {

    const dusts = [
        [
            "crude_quantum_binder_dust",
            0xe47815,
            ['1x calcium', '2x chlorine', '8x oxygen']
        ],
        [
            "advanced_quantum_binder_dust",
            0xFF0000,
            ['1x calcium', '2x chlorine']
        ],
        [
            "super_advanced_quantum_binder_dust",
            0x8F00FF,
            ['1x calcium']
        ]
    ]

    dusts.forEach(dust => {
        makeDust(event, dust[0], dust[1], dust[2]);
    });

});