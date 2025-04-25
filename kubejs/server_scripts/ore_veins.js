const WorldGenLayers = Java.loadClass("com.gregtechceu.gtceu.api.data.worldgen.WorldGenLayers")

 GTCEuServerEvents.oreVeins(event => {
    event.add("overworld/heat_frost", vein => {
        vein.weight(50)
        vein.density(0.4)
        vein.clusterSize(38)
        vein.layer("stone")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(1, 50)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).block(() => Block.getBlock('gtceu:dormant_ember_ore')).size(2, 2))
                .layer(l => l.weight(1).state(() => Block.getBlock('gtceu:permafrost_ore').defaultBlockState()).size(1, 2))
                .layer(l => l.weight(1).state(() => Block.getBlock('minecraft:magma_block').defaultBlockState()).size(3, 4))
            )
        )
    })
    event.add("overworld/deepslate/heat_frost", vein => {
        vein.weight(45)
        vein.density(0.4)
        vein.clusterSize(35)
        vein.layer("deepslate")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(-50, -1)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).block(() => Block.getBlock('gtceu:deepslate_dormant_ember_ore')).size(2, 2))
                .layer(l => l.weight(1).state(() => Block.getBlock('gtceu:deepslate_permafrost_ore').defaultBlockState()).size(1, 2))
                .layer(l => l.weight(1).state(() => Block.getBlock('minecraft:magma_block').defaultBlockState()).size(3, 4))
            )
        )
    })
})