/**
machine recipes
 */

ServerEvents.recipes((event) => {
    event.shaped("gtceu:construction_core", ["PRP", "CHC", "MCM"], {
        M: "gtceu:lv_electric_motor",
        C: "#gtceu:circuits/lv",
        H: "gtceu:lv_machine_hull",
        P: "gtceu:manganese_phosphide_single_wire",
        R: "gtceu:lv_robot_arm",
    });

    event.shaped("gtceu:greenhouse", ["GGG", "CHC", "PUP"], {
        G: "gtceu:tempered_glass",
        C: "#gtceu:circuits/lv",
        H: "gtceu:lv_machine_hull",
        P: "gtceu:lv_electric_piston",
        U: "gtceu:lv_electric_pump",
    });
});
