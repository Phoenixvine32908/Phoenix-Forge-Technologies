/**
 expanded ae recipes
 */

ServerEvents.recipes((event) => {
    const greg = event.recipes.gtceu;
    greg
        .assembler("expanded_pattern_provider")
        .itemInputs(
            "expatternprovider:ex_pattern_provider",
            "16x ae2:engineering_processor",
            "2x gtceu:soc",
            "#gtceu:circuits/iv"
        )
        .itemOutputs("expandedae:exp_pattern_provider")
        .duration(200)
        .EUt(50);

    greg
        .assembler("expanded_pattern_provider_upgrade")
        .itemInputs(
            "16x ae2:engineering_processor",
            "2x gtceu:soc",
            "#gtceu:circuits/iv"
        )
        .itemOutputs("expandedae:exp_pattern_provider_upgrade")
        .duration(180)
        .EUt(50);

    greg.assembler("gtceu:exp_io_port")
        .itemInputs("2x expatternprovider:ex_io_port", "8x ae2:capacity_card", "4x ae2:speed_card")
        .itemOutputs("expandedae:exp_io_port")
        .EUt(120).duration(200)

});
