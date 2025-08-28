ServerEvents.recipes(event => {
    // Replace all Steel plates & rods
    event.replaceInput({ id: /^ad_astra:.*/ }, "ad_astra:steel_rod", "gtceu:steel_rod")
    event.replaceInput({ id: /^ad_astra:.*/ }, "ad_astra:steel_plate", "gtceu:steel_plate")
    event.replaceInput({ id: /^gtceu:.*/ }, "gtceu:europium_frame", "gtceu:uranium_236_frame")
    event.replaceInput({ id: "gtceu:shaped/electric_motor_lv_iron" }, "gtceu:iron_rod", "gtceu:aurum_steel_rod")
 event.replaceInput({ id: "gtceu:assembler/casing_zpm" }, "gtceu:naquadah_alloy_plate", "gtceu:advanced_quin_naquadian_alloy_plate")
  event.replaceInput({ id: "gtceu:shaped/casing_zpm" }, "gtceu:naquadah_alloy_plate", "gtceu:advanced_quin_naquadian_alloy_plate")
event.remove({ id: /nasa_workbench/ })
const rocket = [ // Plate mats currently just based on color of rocket for testing
        ['tier_1_rocket', "steel", 'space_grade_steel'],
        ['tier_2_rocket', "desh", 'signalum'],
        ['tier_3_rocket', "ostrum", 'hsss'],
        ['tier_4_rocket', "calorite", 'cryolobus'],
    ] 
    rocket.forEach(([rocket, tier, rocketmaterial]) => {
        event.custom({
            "type": "ad_astra:nasa_workbench",
            "ingredients": [
                {
                    "item": "ad_astra:rocket_nose_cone"
                },
                {
                    "item": `gtceu:${rocketmaterial}_block`
                },
                {
                    "item": `gtceu:${rocketmaterial}_block`
                },
                {
                    "item": `gtceu:${rocketmaterial}_block`
                },
                {
                    "item": `gtceu:${rocketmaterial}_block`
                },
                {
                    "item": `gtceu:${rocketmaterial}_block`
                },
                {
                    "item": `gtceu:${rocketmaterial}_block`
                },
                {
                    "item": "ad_astra:rocket_fin"
                },
                {
                    "item": `ad_astra:${tier}_tank`
                },
                {
                    "item": `ad_astra:${tier}_tank`
                },
                {
                    "item": "ad_astra:rocket_fin"
                },
                {
                    "item": "ad_astra:rocket_fin"
                },
                {
                    "item": `ad_astra:${tier}_engine`
                },
                {
                    "item": "ad_astra:rocket_fin"
                }
            ],
            "result": {
                "count": 1,
                "id": `ad_astra:${rocket}`
            }
        })
    })
})
ServerEvents.tags("fluid", event => {
    // Fuel
    event.add("ad_astra:fuel", "gtceu:rocket_fuel")
    event.add("ad_astra:efficient_fuel", "gtceu:high_octane_gasoline")
})
ServerEvents.recipes(event => {

    // --- Casing Plate Replacements (HV to ZPM) ---
    // This targets ALL recipes with an ID starting with "gtceu:"
    // that use the old plates, replacing them with your custom ones.
    
    const casingReplacements = {
        ZPM: {
            oldPlate: "gtceu:naquadah_alloy_plate",
            newPlate: "gtceu:advanced_quin_naquadian_alloy_plate"
        }
    };

    // The regular expression /^gtceu:.*/ matches any recipe ID that starts with "gtceu:"
    for (const tier in casingReplacements) {
        const replacement = casingReplacements[tier];
        event.replaceInput({ id: /^gtceu:.*/ }, replacement.oldPlate, replacement.newPlate);
    }
    
    // --- Rotor Replacements (LV to ZPM) ---
    // This targets ALL recipes with an ID starting with "gtceu:"
    // that use the old rotors, replacing them with your custom ones.
    
    const rotorReplacements = {
        ZPM: {
            oldRotor: "gtceu:naquadah_alloy_rotor",
            newRotor: "gtceu:advanced_quin_naquadian_alloy_rotor"
        }
    };

    // The regular expression /^gtceu:.*/ matches any recipe ID that starts with "gtceu:"
    for (const tier in rotorReplacements) {
        const replacement = rotorReplacements[tier];
        event.replaceInput({ id: /^gtceu:.*/ }, replacement.oldRotor, replacement.newRotor);
    }
})