GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('superheated_plasma')
        .plasma()
        .color(0xFFA500)
        .secondaryColor(0xA9423F)

        event.create('dormant_phoenix_based_plasma')
        .plasma()
        .color(0xcd8c19)
        .secondaryColor(0xA9423F)

        event.create('quantum_stable_plasma')
        .plasma()
        .color(0xd8d6d6)
        .secondaryColor(0xA9423F)
        
        event.create('true_phoenix_based_plasma')
        .plasma()
        .color(0x8d00fc)
        .secondaryColor(0x00FFFF)

        event.create('active_phoenix_based_plasma')
        .plasma()
        .color(0xfc4f4f)
        .secondaryColor(0xA9423F)
})