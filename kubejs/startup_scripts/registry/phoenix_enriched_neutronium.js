GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('phoenix_enriched_neutronium')
        .protons(29)
        .neutrons(32)
        .symbol('PENEU')
    })
    GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
        event.create('phoenix_enriched_neutronium').parent(GTMaterialIconSet.SHINY)
    })
    GTCEuStartupEvents.registry('gtceu:material', event => {
        event.create("phoenix_enriched_neutronium")
            .ingot().fluid()
            .element(GTElements.get("phoenix_enriched_neutronium"))
            .color(0x66ffff)
            .blastTemp(6800, 'highest')
            .iconSet('phoenix_enriched_neutronium')
            .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE);
        })
    