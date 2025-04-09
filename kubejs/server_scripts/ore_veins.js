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

})