/**
Ore veins setup
 */

const WorldGenLayers = Java.loadClass("com.gregtechceu.gtceu.api.data.worldgen.WorldGenLayers")

GTCEuServerEvents.oreVeins(event => {

    event.add("overworld/heat_frost", vein => {
        vein.weight(42)
        vein.density(0.25)
        vein.clusterSize(35)
        vein.layer("stone")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(30, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.get("permafrost")).size(2, 2))
                .layer(l => l.weight(2).mat(GTMaterials.get("dormant_ember")).size(1, 2))
                .layer(l => l.weight(1).state(() => Block.getBlock("minecraft:magma_block").defaultBlockState()).size(2, 3))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("dormant_ember"))
            .placement("above")
        )
    })
    event.add("overworld/deepslate/heat_frost", vein => {
        vein.weight(42)
        vein.density(0.25)
        vein.clusterSize(35)
        vein.layer("deepslate")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(-30, 30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.get("permafrost")).size(2, 2))
                .layer(l => l.weight(2).mat(GTMaterials.get("dormant_ember")).size(1, 2))
                .layer(l => l.weight(1).state(() => Block.getBlock("minecraft:magma_block").defaultBlockState()).size(2, 3))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("dormant_ember"))
            .placement("above")
        )
    })

    event.add("moon/fluorite", vein => {
        vein.weight(35)
        vein.clusterSize(20)
        vein.density(0.3)
        vein.discardChanceOnAirExposure(1)
        vein.layer("ad_astra_moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(-40, 80)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(35).mat(GTMaterials.Diamond).size(1, 2))
                .layer(l => l.weight(35).mat(PhoenixOres.FLUORITE).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(PhoenixOres.FLUORITE)
            .placement("above")
        )


        event.add("moon/bauxite", vein => {
            vein.weight(40)
            vein.density(0.25)
            vein.clusterSize(30)
            vein.layer("ad_astra_moon")
            vein.dimensions("ad_astra:moon")
            vein.heightRangeUniform(10, 80)
            vein.layeredVeinGenerator(generator => generator
                .buildLayerPattern(pattern => pattern
                    .layer(l => l.weight(2).mat(GTMaterials.Bauxite).size(1, 4))
                    .layer(l => l.weight(1).mat(GTMaterials.Ilmenite).size(1, 2))
                    .layer(l => l.weight(1).mat(GTMaterials.Aluminium).size(1, 1))
                )
            )
            vein.surfaceIndicatorGenerator(indicator => indicator
                .surfaceRock(GTMaterials.Bauxite)
                .placement("above")
            )
        })
        event.add("moon/tungsten", vein => {
            vein.weight(45)
            vein.density(0.25)
            vein.clusterSize(15)
            vein.layer("ad_astra_moon")
            vein.dimensions("ad_astra:moon")
            vein.heightRangeUniform(-40, 20)
            vein.layeredVeinGenerator(generator => generator
                .buildLayerPattern(pattern => pattern
                    .layer(l => l.weight(6).mat(GTMaterials.Scheelite).size(1, 4))
                    .layer(l => l.weight(4).mat(GTMaterials.Tungstate).size(1, 4))
                )
            )
            vein.surfaceIndicatorGenerator(indicator => indicator
                .surfaceRock(GTMaterials.Scheelite)
                .placement("above")
            )
        })
    })
    event.add("moon/magical_ores", vein => {
        vein.weight(10)
        vein.clusterSize(15)
        vein.density(0.10)
        vein.discardChanceOnAirExposure(1)
        vein.layer("ad_astra_moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(-40, 80)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(35).mat(PhoenixOres.NEVVONIAN_IRON).size(1, 2))
                .layer(l => l.weight(20).mat(PhoenixOres.POLARITY_FLIPPED_BISMUTHITE).size(1, 2))
                .layer(l => l.weight(25).mat(PhoenixOres.VOIDGLASS_SHARD).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(PhoenixOres.NEVVONIAN_IRON)
            .placement("above")
        )


    })


})
