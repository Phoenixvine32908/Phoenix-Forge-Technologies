ServerEvents.recipes(event => {
    const modids = ["sophisticatedstorage", "sophisticatedbackpacks"]

    // Remove default backpack recipe (Loot it!)
    event.remove({ output: 'sophisticatedbackpacks:backpack' })

    // Remove XP pump upgrades
    event.remove({ id: "sophisticatedstorage:xp_pump_upgrade" })
    event.remove({ id: "sophisticatedbackpacks:xp_pump_upgrade" })

    // There is dupe glitch involving this.
    event.remove({ id: 'sophisticatedstorage:packing_tape' })

    // Remove Limited barrels
    event.remove({ id: /^sophisticatedstorage:.*limited.+barrel.+$/ })
    event.remove({ output: /^sophisticatedstorage:limited_barrel.+$/ })

    // Remove Copper tier storage (not used)
    event.remove({ output: 'sophisticatedstorage:copper_barrel' })
    event.remove({ output: 'sophisticatedstorage:copper_chest' })
    event.remove({ output: 'sophisticatedstorage:copper_shulker_box' })
    // Remove Copper tier upgrades
    event.remove({ output: /^sophisticatedstorage:.*copper.*tier_upgrade$/ })
    event.remove({ input: /^sophisticatedstorage:.*copper.*tier_upgrade$/ })

    // Remove iron (bronze) tier storage in NM
        event.remove({ output: 'sophisticatedstorage:iron_barrel' })
        event.remove({ output: 'sophisticatedstorage:iron_chest' })
        event.remove({ output: 'sophisticatedstorage:iron_shulker_box' })
        event.remove({ output: /^sophisticatedstorage:.*iron.*tier_upgrade$/ })
        event.remove({ input: /^sophisticatedstorage:.*iron.*tier_upgrade$/ })

    // Standard backpack recipe if you don't want to loot it
    event.shaped('sophisticatedbackpacks:backpack', [
        ' N ',
        'ICI',
        'N N'
    ], {
        "N": '#forge:leather',
        "I": 'minecraft:iron_ingot',
        "C": '#forge:chests/wooden'
    })





    // Barrel, Chest, Shulker Box upgrading
    const sophStorageMaterials = [
        ["", null, null],
        ['iron_', 'fiery_bronze', 'lead'],
        ['gold_', 'aurum_steel', 'tin'],
        ['diamond_', 'aluminfrost', 'copper'],
        ['netherite_', 'stainless_steel', 'gold'],
    ]
    const sophStorageTypes = [
        ['', 'barrel'],
        ['', 'chest'],
        ['', 'shulker_box']
    ]

    sophStorageMaterials.forEach((material, toIndex) => {
        if (toIndex == 0) return;

        // Tier upgrade items
        for (let fromIndex = 0; fromIndex < toIndex; fromIndex++) {
            let fromTierName = (fromIndex == 0 ? "basic_" : sophStorageMaterials[fromIndex][0]);
            let prevTierName = (toIndex - 1 == 0 ? "basic_" : sophStorageMaterials[toIndex - 1][0]);
            let toTierName = material[0];

            event.shaped(`sophisticatedstorage:${fromTierName}to_${toTierName}tier_upgrade`, [
                "IPI",
                "ICI",
                "IPI"
            ], {
                I: `#forge:ingots/${material[1]}`,
                P: `#forge:plates/${material[2]}`,
                C: (fromTierName == prevTierName ? 'minecraft:redstone_torch' : `sophisticatedstorage:${fromTierName}to_${prevTierName}tier_upgrade`)
            }).id(`sophisticatedstorage:${fromTierName}to_${toTierName}tier_upgrade`)
        }

        // Barrel-in-table upgrades
        sophStorageTypes.forEach(storageType => {
            // Works for upgrades as the recipe type implies, but doesn't work for making new barrels/chests/boxes from scratch
            let outputStorage = `sophisticatedstorage:${storageType[0]}${material[0]}${storageType[1]}`
            let inputStorage = `sophisticatedstorage:${storageType[0]}${sophStorageMaterials[toIndex - 1][0]}${storageType[1]}`
            event.remove({ mod: 'sophisticatedstorage', output: outputStorage })
            event.custom({
                "type": "sophisticatedstorage:storage_tier_upgrade",
                "conditions": [
                    {
                        "type": "sophisticatedcore:item_enabled",
                        "itemRegistryName": outputStorage
                    }
                ],
                "pattern": [
                    "IPI",
                    "ICI",
                    "IPI"
                ],
                "key": {
                    "I": {
                        "tag": (`forge:ingots/${material[1]}`)
                    },
                    "P": {
                        "tag": (`forge:plates/${material[2]}`)
                    },
                    "C": {
                        "item": inputStorage
                    }
                },
                "result": {
                    "item": outputStorage
                }
            });
        })
    })

    event.remove({ output: 'sophisticatedstorage:controller' })

    event.shaped('sophisticatedstorage:controller', [
        'III',
        'CDC',
        'IEI'
    ], {
        I: "#forge:plates/steel",
        C: "#gtceu:circuits/lv",
        D: "#sophisticatedstorage:base_tier_wooden_storage",
        E: "#forge:storage_blocks/diamond"
    })
    event.shaped('sophisticatedstorage:controller', [
        'III',
        'CDC',
        'IEI'
    ], {
        I: "#forge:plates/steel",
        C: "#gtceu:circuits/lv",
        D: "#sophisticatedstorage:base_tier_wooden_storage",
        E: "#forge:storage_blocks/emerald"
    })
    event.shaped('sophisticatedstorage:storage_input', [
        'III',
        'CDC',
        'IEI'
    ], {
        I: "#forge:plates/steel",
        C: "#gtceu:circuits/lv",
        D: "#sophisticatedstorage:base_tier_wooden_storage",
        E: "#forge:storage_blocks/gold"
    })
    event.shaped('sophisticatedstorage:storage_output', [
        'IEI',
        'CDC',
        'III'
    ], {
        I: "#forge:plates/steel",
        C: "#gtceu:circuits/lv",
        D: "#sophisticatedstorage:base_tier_wooden_storage",
        E: "#forge:storage_blocks/gold"
    })

    event.shaped('sophisticatedstorage:storage_io', [
        'III',
        'SDT',
        'III'
    ], {
        I: "#forge:plates/steel",
        S: "sophisticatedstorage:storage_input",
        T: "sophisticatedstorage:storage_output",
        D: "#sophisticatedstorage:base_tier_wooden_storage",
    })

    // Stack upgrades
    let stackupgrade = [
        ['stack_upgrade_tier_1', 'gtceu:aurum_steel', 'upgrade_base'],
        ['stack_upgrade_tier_2', 'gtceu:frost_reinforced_stained_steel', 'stack_upgrade_tier_1'],
        ['stack_upgrade_tier_3', 'gtceu:void_touched_tungsten_steel', 'stack_upgrade_tier_2'],
        ['stack_upgrade_tier_4', 'gtceu:osmiridium', 'stack_upgrade_tier_3']
    ]
    event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_starter_tier' })
    event.remove({ output: 'sophisticatedstorage:stack_upgrade_tier_1_plus' })

    stackupgrade.forEach(material => {
        modids.forEach(mod => {
            event.remove({ output: `${mod}:${material[0]}` })
            event.shaped(`${mod}:${material[0]}`, [
                'III',
                'IUI',
                'BIB'
            ], {
                I: `${material[1]}_plate`,
                B: `${material[1]}_gear`,
                U: `${mod}:${material[2]}`
            })
        })
    })

    event.remove({ output: 'sophisticatedstorage:stack_upgrade_tier_5' })
    event.shaped('sophisticatedstorage:stack_upgrade_tier_5', [
        'III',
        'IUI',
        'BIB'
    ], {
        I: 'gtceu:naquadah_alloy_plate',
        B: 'gtceu:naquadah_alloy_gear',
        U: 'sophisticatedstorage:stack_upgrade_tier_4'
    }),


    // Upgrades
    event.remove({ output: 'sophisticatedstorage:hopper_upgrade' })
    event.shaped('4x sophisticatedstorage:hopper_upgrade', [
        ' H ',
        'IUI',
        'RRR'
    ], {
        U: 'sophisticatedstorage:upgrade_base',
        I: 'minecraft:iron_ingot',
        H: 'minecraft:hopper',
        R: 'gtceu:red_alloy_plate'
    })

    event.remove({ output: 'sophisticatedstorage:advanced_hopper_upgrade' })
    event.shaped('sophisticatedstorage:advanced_hopper_upgrade', [
        ' R ',
        'IUI',
        'RRR'
    ], {
        U: 'sophisticatedstorage:upgrade_base',
        I: 'gtceu:lv_conveyor_module',
        R: 'gtceu:steel_plate'
    })


    // Magnet upgrades
})
