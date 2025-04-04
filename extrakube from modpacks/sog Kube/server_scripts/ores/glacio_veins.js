GTCEuServerEvents.oreVeins(event => {

    event.add('kubejs:glacio_rutile', vein => vein
        .weight(30).clusterSize(30).density(0.2)
        .layer('ad_astra_glacio')
        .dimensions("ad_astra:glacio") // 
        .heightRangeUniform(8, 50)
        .layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Bauxite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Ilmenite).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Hematite).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Bauxite).size(2, 3))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Bauxite)
            .density(0.2)
            .radius(4)
        )
    )
    event.add('kubejs:glacio_chaos', vein => vein
        .weight(5).clusterSize(60).density(0.4)
        .layer('ad_astra_glacio')
        .dimensions("ad_astra:glacio") // 
        .heightRangeUniform(8, 50)
        .layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(9).mat(GTMaterials.Plutonium239).size(2, 4))
                .layer(l => l.weight(7).mat(GTMaterials.Naquadah).size(1, 3))
                .layer(l => l.weight(6).mat(GTMaterials.get('kaemite')).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.get('chaos')).size(1, 2))
            )
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get('chaos'))
            .density(0.2)
            .radius(4)
        )
    )
    event.add('kubejs:glacio_pitchblend', vein => vein
        .weight(50).clusterSize(60).density(0.5)
        .layer('ad_astra_glacio')
        .dimensions("ad_astra:glacio") // 
        .heightRangeUniform(8, 50)
        .veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Pitchblende, 4) 
            .oreBlock(GTMaterials.Pitchblende, 4) 
            .oreBlock(GTMaterials.Cobaltite, 2) 
            .rareBlock(GTMaterials.Uraninite, 2)
            .rareBlockChance(0.45)
            .veininessThreshold(0.1)
            .maxRichnessThreshold(0.7)
            .minRichness(0.7)
            .maxRichness(0.85)
            .edgeRoundoffBegin(5) 
            .maxEdgeRoundoff(0.2)
        )
        .surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Lithium)
            .density(0.2)
            .radius(4)
        )
    )
})