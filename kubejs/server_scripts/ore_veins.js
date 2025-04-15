const WorldGenLayers = Java.loadClass("com.gregtechceu.gtceu.api.data.worldgen.WorldGenLayers")

GTCEuServerEvents.oreVeins(event => {
    // 🌍 Overworld: Fluorite
    event.add("overworld/fluorite", vein => {
        vein.weight(60).clusterSize(30).density(0.2).discardChanceOnAirExposure(0.05)
        vein.layer("deepslate").dimensions("minecraft:overworld").biomes("#minecraft:is_overworld")
        vein.heightRangeUniform(-50, 30)
        vein.layeredVeinGenerator(generator => generator.buildLayerPattern(pattern =>
            pattern.layer(l => l.weight(10).mat(GTMaterials.get('fluorite')).size(2, 4))
        ))
    })

    // 🌍 Overworld: Dormant Ember
    event.add("overworld/dormant_ember", vein => {
        // Basic vein generation properties
        vein.weight(60)
        vein.clusterSize(40)
        vein.density(0.5)
        vein.discardChanceOnAirExposure(0)

        // Define where the vein can generate
        vein.layer("deepslate")
        vein.dimensions("minecraft:overworld")
        vein.biomes("#minecraft:is_overworld")

        // Define a height range:
        vein.heightRangeUniform(-60, 40)

        // Define the vein's generator using layeredVeinGenerator as an example
        vein.layeredVeinGenerator(generator => generator.buildLayerPattern(pattern =>
            pattern
                .layer(l => l.weight(1).block(() => Block.getBlock('minecraft:magma_block')).size(3, 5)) // Example layer 3
                .layer(l => l.weight(5).mat(GTMaterials.get('dormant_ember')).size(2, 4)) // Add your Dormant Ember layer
        ))
    })
})