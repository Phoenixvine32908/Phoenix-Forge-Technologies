ServerEvents.recipes(event => {
    // Replace all Steel plates & rods
    event.replaceInput({ id: /^ad_astra:.*/ }, "ad_astra:steel_rod", "gtceu:steel_rod")
    event.replaceInput({ id: /^ad_astra:.*/ }, "ad_astra:steel_plate", "gtceu:steel_plate")
    event.replaceInput({ id: /^gtceu:.*/ }, "gtceu:europium_frame", "gtceu:uranium_236_frame")

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