GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('4_4_oxydianiline_pyromellitimide')
        .liquid()
        .ingot()
        .formula('C22H12N2O6')
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_FOIL,
            GTMaterialFlags.NO_SMELTING,
            GTMaterialFlags.GENERATE_FINE_WIRE
        )
        .color(0xF0B272)
    event.create('poly_amic_acid')
        .liquid()
        .formula('C22H14N2o7')
        .color(0xF0C772)
    event.create('pyromellitic_dianhydride')
        .dust()
        .formula('C6H2(C2O3)2')
        .color(0x986AA2)
    event.create('oxydianiline')
        .liquid()
        .formula('C12H12N2O')
        .color(0xC6D600)
    event.create('aniline')
        .liquid()
        .formula('C6H5NH2')
        .color(0x2E9918)
    event.create('durene')
        .dust()
        .formula('C6H2(CH3)4')
        .color(0x42A390)
    event.create('ortho_xylene')
        .gas()
        .formula('C6H4(CH3)2')
        .color(0x8F42A3)
    event.create('fluorinated_ethylene_propylene')
        .gas()
        .formula('C5F10')
        .color(0x8F42A3)
    event.create('hexafluoropropylene')
        .gas()
        .formula('C3F6')
        .color(0x8F42A3)
})