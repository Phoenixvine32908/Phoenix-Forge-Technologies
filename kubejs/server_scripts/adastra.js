ServerEvents.recipes(event => {
    // Replace all Steel plates & rods
    event.replaceInput({ id: /^ad_astra:.*/ }, "ad_astra:steel_rod", "gtceu:steel_rod")
    event.replaceInput({ id: /^ad_astra:.*/ }, "ad_astra:steel_plate", "gtceu:steel_plate")
event.remove({ id: /nasa_workbench/ })
    const rocket = [ // Plate mats currently just based on color of rocket for testing
        ["tier_1_rocket", "steel", "black_steel"],
        ["tier_2_rocket", "desh", "signalum"],
        ["tier_3_rocket", "ostrum", "hsss"],
        ["tier_4_rocket", "calorite", "cryolobus"],
    ]

    const spacesuit = ["pants", "boots"]

    // Space Suit
    event.remove({ id: "ad_astra:space_helmet" })
    event.recipes.gtceu.assembler("space_helmet")
        .itemInputs("kubejs:unprepared_space_helmet", "#forge:double_plates/steel", "2x kubejs:pressure_layer", "2x kubejs:radiation_layer", "#gtceu:circuits/lv", "#forge:glass")
        .itemOutputs("ad_astra:space_helmet")
        .duration(300)
        .EUt(GTValues.VA[GTValues.LV])

    event.remove({ id: "ad_astra:space_suit" })
    event.recipes.gtceu.assembler("space_suit")
        .itemInputs("kubejs:unprepared_space_suit", "#forge:double_plates/steel", "2x kubejs:pressure_layer", "2x kubejs:radiation_layer", "ad_astra:oxygen_gear", "2x ad_astra:gas_tank")
        .itemOutputs("ad_astra:space_suit")
        .duration(300)
        .EUt(GTValues.VA[GTValues.LV])

    spacesuit.forEach(part => {
        event.remove({ id: `ad_astra:space_${part}` })
        event.recipes.gtceu.assembler(`space_${part}`)
            .itemInputs(`kubejs:unprepared_space_${part}`, "#forge:double_plates/steel", "2x kubejs:pressure_layer", "2x kubejs:radiation_layer")
            .itemOutputs(`ad_astra:space_${part}`)
            .duration(300)
            .EUt(GTValues.VA[GTValues.LV])
    })

    // Netherite space suit
    event.remove({ id: "ad_astra:netherite_space_helmet" })
    event.recipes.gtceu.assembler("netherite_space_helmet")
        .itemInputs("kubejs:unprepared_space_helmet", "minecraft:netherite_ingot", "2x kubejs:pressure_layer", "2x kubejs:radiation_layer", "#gtceu:circuits/hv", "#forge:glass/tinted", "#forge:foils/gold")
        .itemOutputs("ad_astra:netherite_space_helmet")
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])

    event.remove({ id: "ad_astra:netherite_space_suit" })
    event.recipes.gtceu.assembler("netherite_space_suit")
        .itemInputs("kubejs:unprepared_space_suit", "minecraft:netherite_ingot", "2x kubejs:pressure_layer", "2x kubejs:radiation_layer", "ad_astra:oxygen_gear", "2x ad_astra:large_gas_tank")
        .itemOutputs("ad_astra:netherite_space_suit")
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])

    spacesuit.forEach(part => {
        event.remove({ id: `ad_astra:netherite_space_${part}` })
        event.recipes.gtceu.assembler(`netherite_space_${part}`)
            .itemInputs(`kubejs:unprepared_space_${part}`, "minecraft:netherite_ingot", "2x kubejs:pressure_layer", "2x kubejs:radiation_layer")
            .itemOutputs(`ad_astra:netherite_space_${part}`)
            .duration(400)
            .EUt(GTValues.VA[GTValues.MV])
    })

    // Jet Suit
    event.remove({ id: "ad_astra:jet_suit_helmet" })
    event.recipes.gtceu.assembler("jet_suit_helmet")
        .itemInputs("ad_astra:netherite_space_helmet", "4x gtceu:titanium_carbide_plate", "2x kubejs:pressure_layer", "2x kubejs:radiation_layer", "#gtceu:circuits/iv")
        .itemOutputs("ad_astra:jet_suit_helmet")
        .duration(400)
        .EUt(GTValues.VA[GTValues.EV])

    event.remove({ id: "ad_astra:jet_suit" })
    event.recipes.gtceu.assembler("jet_suit")
        .itemInputs("ad_astra:netherite_space_suit", "4x gtceu:titanium_carbide_plate", "2x kubejs:pressure_layer", "2x kubejs:radiation_layer", "ad_astra:oxygen_gear", "2x ad_astra:large_gas_tank", "2x kubejs:vibrant_thruster")
        .itemOutputs("ad_astra:jet_suit")
        .duration(400)
        .EUt(GTValues.VA[GTValues.EV])

    spacesuit.forEach(part => {
        event.remove({ id: `ad_astra:jet_suit_${part}` })
        event.recipes.gtceu.assembler(`jet_suit_${part}`)
            .itemInputs(`ad_astra:netherite_space_${part}`, "4x gtceu:titanium_carbide_plate", "2x kubejs:pressure_layer", "2x kubejs:radiation_layer")
            .itemOutputs(`ad_astra:jet_suit_${part}`)
            .duration(400)
            .EUt(GTValues.VA[GTValues.EV])
    })
    rocket.forEach(([rocket, tier, platematerial]) => {
        event.custom({
            "type": "ad_astra:nasa_workbench",
            "ingredients": [
                {
                    "item": "ad_astra:rocket_nose_cone"
                },
                {
                    "item": `gtceu:double_${platematerial}_plate`
                },
                {
                    "item": `gtceu:double_${platematerial}_plate`
                },
                {
                    "item": `gtceu:double_${platematerial}_plate`
                },
                {
                    "item": `gtceu:double_${platematerial}_plate`
                },
                {
                    "item": `gtceu:double_${platematerial}_plate`
                },
                {
                    "item": `gtceu:double_${platematerial}_plate`
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