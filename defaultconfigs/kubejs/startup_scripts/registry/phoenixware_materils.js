GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('phoenix_enriched_neutronium')
    .protons(29)
    .neutrons(32)
    .symbol('PENEU');

    event.create('phoenix_enriched_tritanium')
    .protons(1)
    .neutrons(32)
    .symbol('PET');

    event.create('phoenix_enriched_naquad')
    .protons(25)
    .neutrons(32)
    .symbol('PENaq');

    event.create('akashic_zeronium')
    .protons(24)
    .neutrons(12)
    .symbol('ASHK');
});

// Omnium, Infinity, and Monium have animations and thus custom material icon sets.
GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
    event.create('omnium').parent(GTMaterialIconSet.SHINY);
    event.create('sculk_alloy').parent(GTMaterialIconSet.DULL);
    event.create('infinity').parent(GTMaterialIconSet.SHINY);
    event.create('eltz').parent(GTMaterialIconSet.SHINY);
    event.create('monium').parent(GTMaterialIconSet.SHINY);
    event.create('phoenix_enriched_neutronium').parent(GTMaterialIconSet.SHINY);
    event.create('phoenix_enriched_tritanium').parent(GTMaterialIconSet.SHINY);
    event.create('phoenix_enriched_naquad').parent(GTMaterialIconSet.SHINY);
    event.create('akashic_zeronium').parent(GTMaterialIconSet.SHINY);
});

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("akashic_zeronium")
    .ingot()
    .element(GTElements.get("akashic_zeronium"))
    .color(0x8F00FF)
    .secondaryColor(0x000000)
    .iconSet('shiny')
    .flags(
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
    )
    .cableProperties(GTValues.V[GTValues.MAX], 400000, 400000, true)
   .fluid();

    event.create("phoenix_enriched_naquad")
    .ingot()
    .element(GTElements.get("phoenix_enriched_naquad"))
    .color(0xFFA500)
    .secondaryColor(0x000000)
    .iconSet('shiny')
    .flags(
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
    )
    .cableProperties(GTValues.V[GTValues.ZPM], 64, 8, true)
    .fluid();

    event.create("phoenix_enriched_tritanium")
    .ingot()
    .element(GTElements.get("phoenix_enriched_tritanium"))
    .color(0xFF0000)
    .secondaryColor(0x000000)
    .iconSet('shiny')
    .flags(
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
    )
    .cableProperties(GTValues.V[GTValues.ZPM], 64, 8, true)
    .fluid();

    event.create("phoenix_enriched_neutronium")
    .ingot()
    .element(GTElements.get("phoenix_enriched_neutronium"))
    .color(0xFFFFFF)
    .secondaryColor(0xCBC3E3)
    .iconSet('shiny')
    .flags(
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
    )
    .cableProperties(GTValues.V[GTValues.ZPM], 64, 8, true)
    .fluid();
});
