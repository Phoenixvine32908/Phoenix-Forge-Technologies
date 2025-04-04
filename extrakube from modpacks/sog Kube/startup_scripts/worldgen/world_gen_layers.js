GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    event.create('glacio_deepslate_layer')
        .targets('minecraft:deepslate') // [*] 
        .dimensions('ad_astra:glacio') // [*]
})