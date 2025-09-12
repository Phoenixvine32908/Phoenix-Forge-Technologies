/**
Registry for divine materials
 */


function makeIconSet(event, id, parent) {
    event.create(id).parent(parent);
}

function makeElement(event, id, prot, neut, sym) {
    event.create(id)
        .protons(prot)
        .neutrons(neut)
        .symbol(sym);
}

function makeMaterial(event, id, color, color2, icon, flgs, cableProps, rotorProps) {
    const mat = event.create(id)
        .ingot()
        .element(GTElements.get(id))
        .color(color)
        .secondaryColor(color2)
        .iconSet(icon)
        .flags(flgs)
        .fluid();
    if (cableProps && Array.isArray(cableProps)) {
        mat.cableProperties.apply(mat, cableProps);
    }
    if (rotorProps && rotorProps.length === 4) {
        mat.rotorStats(rotorProps[0], rotorProps[1], rotorProps[2], rotorProps[3]);
    }
}

GTCEuStartupEvents.registry("gtceu:element", event => {
    const elements = [

        ["stabilized_antimatter", -1, -1, "sM"] // Placeholder protons/neutrons for alloy
    ];

    elements.forEach(elem => {
        makeElement(event, elem[0], elem[1], elem[2], elem[3]);
    });
});

GTCEuStartupEvents.registry("gtceu:material_icon_set", event => {
    const shiny = GTMaterialIconSet.SHINY;
    const dull = GTMaterialIconSet.DULL;

    const iconSets = {
        stabilized_antimatter: shiny,
    };

    for (const key in iconSets) {
        if (iconSets.hasOwnProperty(key)) {
            makeIconSet(event, key, iconSets[key]);
        }
    }
});

GTCEuStartupEvents.registry("gtceu:material", event => {
    const materialFlags = [
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_LONG_ROD,
        GTMaterialFlags.GENERATE_RING,
        GTMaterialFlags.GENERATE_ROUND,
        GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_SMALL_GEAR,
        GTMaterialFlags.GENERATE_SPRING,
        GTMaterialFlags.PHOSPHORESCENT,
        GTMaterialFlags.GENERATE_ROD,
        GTMaterialFlags.GENERATE_BOLT_SCREW,
        GTMaterialFlags.GENERATE_FRAME,
        GTMaterialFlags.GENERATE_DENSE,
        GTMaterialFlags.GENERATE_FINE_WIRE,
        GTMaterialFlags.GENERATE_FOIL,
        GTMaterialFlags.GENERATE_ROTOR
    ];
    const limitedFlags = [
        GTMaterialFlags.GENERATE_PLATE,
        GTMaterialFlags.GENERATE_GEAR,
        GTMaterialFlags.GENERATE_SMALL_GEAR,
        GTMaterialFlags.GENERATE_DENSE,
        GTMaterialFlags.GENERATE_FINE_WIRE,
    ];
    const materials = [
        [
            "stabilized_antimatter",
            0x000000,
            0xFFFFFF,
            [GTValues.V[GTValues.MAX], 8192, 1024, true], // cableProps
            [2800, 700, 30.0, 2500000] // rotorProps
        ]
    ];
    let addFluid = (mat, key, temp) => {
        let prop = new $FluidProperty()
        prop.getStorage().enqueueRegistration(key, new $FluidBuilder().temperature(temp))
        mat.setProperty(PropertyKey.FLUID, prop)
    }


    GTMaterials.RutheniumTriniumAmericiumNeutronate.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.Neutronium.addFlags(GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_ROUND, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_DENSE)


    materials.forEach(mat => {
        makeMaterial(event, mat[0], mat[1], mat[2], mat[0], materialFlags, mat[3], mat[4]);
    });
});
