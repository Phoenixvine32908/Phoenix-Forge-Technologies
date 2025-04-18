ServerEvents.recipes( e => {
    let v_materials = [
        'iron',
        'gold',
        'diamond',
    ]
    let bn_materials = [
        'cincinnasite',
        'nether_ruby'
    ]
    //weapons with materials from other dimensions will be fixed once we get to them
    let weapons = [
        'longsword',  
        'twinblade',  
        'rapier',  
        'katana',  
        'sai',  
        'spear',  
        'glaive',  
        'warglaive',  
        'cutlass',  
        'warglaive',  
        'cutlass',  
        'claymore',  
        'greathammer',  
        'greataxe', 
        'chakram'
    ]
    

    
e.remove({ output: /(.*)longsword/ })
e.remove({ output: /(.*)twinblade/ })
e.remove({ output: /(.*)rapier/ })
e.remove({ output: /(.*)katana/ })
e.remove({ output: /(.*)sai/ })
e.remove({ output: /(.*)spear/ })
e.remove({ output: /(.*)glaive/ })
e.remove({ output: /(.*)warglaive/ })
e.remove({ output: /(.*)cutlass/ })
e.remove({ output: /(.*)claymore/ })
e.remove({ output: /(.*)greathammer/ })
e.remove({ output: /(.*)greataxe/ })
e.remove({ output: /(.*)chakram/ })
// e.remove({ output: /(.*)scythe/ })
e.remove({ output: /(.*)halberd/ })

v_materials.forEach(item => {
    e.shaped(`simplyswords:${item}_longsword`, [ 
        ' DB', 
        ' BC', 
        'A  '  
      ], {
        A: '#forge:rods/wooden',
        B: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files'
      }
    )
    e.shaped(`simplyswords:${item}_twinblade`, [ 
        '  B', 
        'DAC', 
        'B  '  
      ], {
        A: '#forge:rods/wooden',
        B: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files'
      }
    )
    e.shaped(`simplyswords:${item}_rapier`, [ 
        '  B', 
        'DB ', 
        'AC '  
      ], {
        A: '#forge:rods/wooden',
        B: `gtceu:${item}_rod`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files'
      }
    )
    e.shaped(`simplyswords:${item}_katana`, [ 
        '  D', 
        'ABB', 
        '  C'  
      ], {
        A: '#forge:rods/wooden',
        B: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files'
      }
    )
    e.shaped(`simplyswords:${item}_sai`, [ 
        'DB ', 
        'AC ', 
        '   '  
      ], {
        A: '#forge:rods/wooden',
        B: `gtceu:${item}_rod`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files'
      }
    )
    e.shaped(`simplyswords:${item}_spear`, [ 
        ' DB', 
        ' AC', 
        'A  '  
      ], {
        A: '#forge:rods/wooden',
        B: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files'
      }
    )
    e.shaped(`simplyswords:${item}_glaive`, [ 
        ' DB', 
        ' AB', 
        'A C'  
      ], {
        A: '#forge:rods/wooden',
        B: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files'
      }
    )
    e.shaped(`simplyswords:${item}_warglaive`, [ 
        ' ED', 
        'BAB', 
        'C  '  
      ], {
        A: '#forge:rods/wooden',
        B: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files',
        E: 'gtceu:wrought_iron_nugget'
      }
    )
    e.shaped(`simplyswords:${item}_cutlass`, [ 
        'CED', 
        'AA ', 
        'B  '  
      ], {
        B: '#forge:rods/wooden',
        A: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files',
        E: 'gtceu:wrought_iron_nugget'
      }
    )
    e.shaped(`simplyswords:${item}_claymore`, [ 
        'CEB', 
        'EBE', 
        'AED'  
      ], {
        A: '#forge:rods/wooden',
        B: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files',
        E: 'gtceu:wrought_iron_nugget'
      }
    )
    e.shaped(`simplyswords:${item}_greathammer`, [ 
        'AAA', 
        'EEE', 
        'DBC'  
      ], {
        B: '#forge:rods/wooden',
        A: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files',
        E: 'gtceu:steel_nugget'
      }
    )
    e.shaped(`simplyswords:${item}_greataxe`, [ 
        'AAA', 
        'EBE', 
        'DBC'  
      ], {
        B: '#forge:rods/wooden',
        A: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files',
        E: 'gtceu:steel_nugget'
      }
    )
    e.shaped(`simplyswords:${item}_chakram`, [ 
        'DBC', 
        'B B', 
        'EAE'  
      ], {
        A: '#forge:rods/wooden',
        B: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files',
        E: 'minecraft:iron_nugget'
      }
    )
    e.shaped(`simplyswords:${item}_scythe`, [ 
        'BBE', 
        'BAC', 
        'AD '  
      ], {
        A: '#forge:rods/wooden',
        B: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files',
        E: 'gtceu:steel_nugget'
      }
    )
    e.shaped(`simplyswords:${item}_halberd`, [ 
        ' BE', 
        'BAB', 
        'ADC'  
      ], {
        A: '#forge:rods/wooden',
        B: `gtceu:${item}_plate`,
        C: '#forge:tools/hammers',
        D: '#forge:tools/files',
        E: 'gtceu:steel_nugget'
      }
    )

})

    //smithing stuff
    weapons.forEach(item => {
        // e.smithing(
        //     `knavesneeds:betternether/cincinnasite_diamond/${item}`,  
        //     'betternether:cincinnasite_diamond_upgrade_smithing_template',
        //     `knavesneeds:betternether/cincinnasite/${item}`, 
        //     'minecraft:diamond' 
        //   )
          e.smithing(
            `simplyswords:netherite_${item}`,  
            'minecraft:netherite_upgrade_smithing_template',
            `simplyswords:diamond_${item}`, 
            'minecraft:netherite_ingot' 
          )
          e.smithing(
            `simplyswords:runic_${item}`,  
            'simplyswords:runic_tablet',
            `simplyswords:netherite_${item}`, 
            'minecraft:diamond' 
          )
          e.smithing(
            `simplyswords:runic_${item}`,  
            'simplyswords:runic_tablet',
            `simplyswords:runic_${item}`, 
            'minecraft:diamond' 
          )
    })
})
