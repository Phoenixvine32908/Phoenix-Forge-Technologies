/**
emi hide
 */

JEIEvents.hideItems(event => {

    event.hide(["/advanced_[a-z_]+_canvas_hive/"])
    event.hide(["/exspansion_box_[a-z_]+_canvas/"])
    event.hide(["/exspansion_box_[a-z_]/"])
    event.hide(["/advanced_[a-z_]+_beehive/"])
    event.hide(["/volcanic_sourcelink/"])
    event.hide(["/alchemical_sourcelink/"])
    event.hide(["/agronomic_sourcelink/"])
    event.hide(["/mycelial_sourcelink/"])
    event.hide({ mod: "productivebees", output: /exspansion/ })
    event.hide({ mod: "productivebees", output: /breeding_chamber/ })
    event.hide({ mod: "productivebees", output: /incubater/ })
    event.hide({ mod: "productivebees", output: /gene_indexer/ })


})
