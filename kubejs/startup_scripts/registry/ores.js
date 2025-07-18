GTCEuStartupEvents.registry('gtceu:material', event => {

    // Existing Material
    event.create('fluorite')
        .gem().ore()
        .color(0x0c9949).iconSet('diamond')

    // ⚡ ZPM–UV Tier
    event.create('quantariumite')
        .ore().dust()
        .color(0x7e00ff).iconSet('diamond')
        .components('1x calcium'); // Changed
        event.create('nevvonian_iron')
        .ore().ingot()
        .color(0x7A687F).iconSet('diamond')
        .components('1x calcium'); // Changed

    event.create('phoenixite')
        .ore().dust()
        .color(0xff4500).iconSet('diamond')
        .components('1x calcium'); // Changed

    event.create('akashic_bismuthite')
        .ore().dust()
        .color(0xfbf8ff).iconSet('diamond')
        .components('1x calcium'); // Changed

    event.create('starnite')
        .ore().gem()
        .color(0xffccff).iconSet('diamond')
        .components('1x calcium'); // Changed

    event.create('entropy_rich_ore')
        .ore().dust()
        .color(0xde00e0).iconSet('diamond')
        .components('1x calcium'); // Changed

    event.create('fractaline_core')
        .ore().gem()
        .color(0xff0080).iconSet('diamond')
        .components('1x calcium'); // Changed

    

    event.create('voltanite_ore')
        .ore().dust()
        .color(0x00cfff).iconSet('diamond')
        .components('1x calcium'); // Changed

    event.create('crystallized_fluxstone')
        .ore().dust()
        .color(0xd4bfff).iconSet('diamond')
        .components('1x calcium'); // Changed

    event.create('quantum_entropite')
        .ore().dust()
        .color(0xc710ff).iconSet('diamond')
        .components('1x calcium'); // Changed

    
       

    // 🍄 Overworld Addition
    event.create('mycelial_netherite_ore')
        .ore().dust() // Assuming it can be processed into dust
        .color(0x643A3A).iconSet('diamond') // Dark brown color
        .components('1x calcium'); // Changed

    // 🧊 Overworld Addition
    event.create('glacial_cryonite_ore')
        .ore().gem() // Could be a crystal-like ore
        .color(0xADD8E6).iconSet('diamond') // Light blue color
        .components('1x calcium'); // Changed

    // 🔮 UHV Tier
    event.create('chronoton_ore')
        .ore().dust()
        .color(0x77e3ff).iconSet('diamond')
        .components('1x calcium'); // Changed

    // 🔥 Nether Addition
    event.create('ignisium')
        .ore().dust() // Could be a fiery dust
        .color(0xFF4500).iconSet('diamond') // Orange-red color
        .components('1x calcium'); // Changed

    // 🌀 UEV Tier
    event.create('singulium_cluster')
        .ore().gem()
        .color(0xbfffff).iconSet('diamond')
        .components('1x calcium'); // Changed

    event.create('irreality_shard')
        .ore().dust()
        .color(0x8888ff).iconSet('diamond')
        .components('1x calcium'); // Changed

    // 🔻 UIV Tier
    event.create('dimensium_crystal_lattice')
        .ore().gem()
        .color(0xffeedd).iconSet('diamond')
        .components('1x calcium'); // Changed

    event.create('exotic_hadronite')
        .ore().dust()
        .color(0xff55cc).iconSet('diamond')
        .components('1x calcium'); // Changed

    // 🔆 MAX Tier
    event.create('akashic_resonance_crystal')
        .ore().gem()
        .color(0xffffff).iconSet('diamond')
        .components('1x calcium'); // Changed

    event.create('finality_shard')
        .ore().gem()
        .color(0xf6f6f6).iconSet('diamond')
        .components('1x calcium'); // Changed

    event.create('oblivium_cluster')
        .ore().gem()
        .color(0x111111).iconSet('diamond')
        .components('1x calcium'); // Changed
        event.create('dormant_ember')
        .ore().ingot()
        .color(0x704214).iconSet('shiny')
        .addOreByproducts('iron')
        .components('1x calcium'); // Changed
        event.create('osmiridium_80_20')
        .ore().dust()
        .color(0xD3D3D3).iconSet('shiny')
        .components('4x osmium', '1x iridium'); // Changed
        event.create('ismiridium_80_20')
        .ore().dust()
        .color(0xE0E0E0).iconSet('shiny')
        .components('4x iridium', '1x osmium'); // Changed

});