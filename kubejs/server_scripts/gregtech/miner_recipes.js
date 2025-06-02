ServerEvents.recipes(event => {

    // --- Chemical Reactor Recipes for Custom Fluids ---

    // Recipe for Blazing Drill Fluid (Base)
    event.recipes.gtceu.large_chemical_reactor('blazing_drilling_fluid_recipe_base') // Renamed ID
        .inputFluids([
            'gtceu:drilling_fluid 500',
            'minecraft:lava 150',
            'kubejs:cryo_ember_fluid 100'
        ])
        .itemInputs([
            '10x gtceu:dormant_ember_dust',
            '2x gtceu:sulfur_dust'
        ])
        .outputFluids('kubejs:blazing_drilling_fluid 750')
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV]/2);

    // Recipe for Blazing Drill Fluid (Ignisium version)
    event.recipes.gtceu.large_chemical_reactor('blazing_drilling_fluid_recipe_ignisium') // Renamed ID
        .inputFluids([
            'gtceu:drilling_fluid 500'
        ])
        .itemInputs([
            '2x gtceu:ignisium_dust' // Corrected quantity syntax
        ])
        .outputFluids('kubejs:blazing_drilling_fluid 900')
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV]/2);

    // Recipe for Voidic Drill Fluid (Base)
    event.recipes.gtceu.large_chemical_reactor('voidic_drilling_fluid_recipe_base') // Renamed ID
        .inputFluids([
            'gtceu:drilling_fluid 500',
            'kubejs:frost 250',
            'kubejs:cryo_ember_fluid 250',
            'gtceu:source_of_magic 100'
        ])
        .itemInputs([
            'gtceu:permafrost_dust',
            'gtceu:ender_eye_dust'
        ])
        .outputFluids('kubejs:voidic_drilling_fluid 1000')
        .duration(300)
        .EUt(GTValues.VA[GTValues.EV]/2);
        event.recipes.gtceu.large_chemical_reactor('voidic_drilling_fluid_recipe_better') // Renamed ID
        .inputFluids([
            'gtceu:drilling_fluid 500',
            'gtceu:source_of_magic 1000'
        ])
        .itemInputs([
            'gtceu:crystallized_fluxstone_dust'
        ])
        .outputFluids('kubejs:voidic_drilling_fluid 3000')
        .duration(300)
        .EUt(GTValues.VA[GTValues.EV]/2);

    // Removed the duplicate 'voidic_drilling_fluid_better' as it was identical.

    // --- Drilling Recipes ---
event.recipes.gtceu.dimensional_anchoring12('overworld_blazing_drill_better')
        .notConsumable('kubejs:aurum_steel_drilling_kit') // Separate notConsumable
        .notConsumable('kubejs:earthbound_miner_module')  // Separate notConsumable
        .inputFluids([
            'kubejs:blazing_drilling_fluid 1000'
        ])
        .itemOutputs(
            '80x gtceu:chalcopyrite_ore',
            '64x gtceu:cassiterite_ore',
            '56x gtceu:galena_ore',
            '96x gtceu:magnetite_ore',
            '30x gtceu:gold_ore',
            '30x gtceu:silver_ore',
            '30x gtceu:pentlandite_ore',
            '128x gtceu:coal_ore',
            '80x gtceu:redstone_ore',
            '80x gtceu:lapis_ore',
            '48x gtceu:graphite_ore',
            '80x gtceu:sulfur_ore',
            '30x gtceu:diamond_ore',
            '30x gtceu:ruby_ore',
            '30x gtceu:sapphire_ore',
            '30x gtceu:topaz_ore',
            '30x gtceu:amethyst_ore',
            '30x gtceu:uraninite_ore',
            '30x gtceu:pyrolusite_ore',
            '30x gtceu:stibnite_ore'
        )
        .duration(2400)
        .EUt(GTValues.VA[GTValues.EV] / 2)
        .dimension('minecraft:overworld');

    // Overworld Blazing Drill (Lesser)
    event.recipes.gtceu.dimensional_anchoring12('overworld_blazing_drill_lesser')
        .notConsumable('kubejs:aurum_steel_drilling_kit') // Separate notConsumable
        .inputFluids([
            'kubejs:blazing_drilling_fluid 1000'
        ])
        .itemOutputs(
            '48x gtceu:chalcopyrite_ore',
            '40x gtceu:cassiterite_ore',
            '32x gtceu:galena_ore',
            '32x gtceu:sphalerite_ore',
            '64x gtceu:magnetite_ore',
            '30x gtceu:gold_ore',
            '30x gtceu:silver_ore',
            '30x gtceu:pentlandite_ore',
            '80x gtceu:coal_ore',
            '48x gtceu:redstone_ore',
            '48x gtceu:lapis_ore',
            '30x gtceu:graphite_ore',
            '48x gtceu:sulfur_ore',
            '30x gtceu:diamond_ore'
        )
        .duration(1800)
        .EUt(GTValues.VA[GTValues.EV] / 2)
        .dimension('minecraft:overworld');

    // Nether Blazing Drill (Better)
    event.recipes.gtceu.dimensional_anchoring12('nether_blazing_drill_better')
        .notConsumable('kubejs:aluminfrost_drilling_kit') // Separate notConsumable
        .notConsumable('kubejs:earthbound_miner_module')  // Separate notConsumable
        .inputFluids([
            'kubejs:blazing_drilling_fluid 1000'
        ])
        .itemOutputs(
            '100x gtceu:sulfur_ore',
            '30x gtceu:dormant_ember_ore',
            '80x gtceu:pyrite_ore',
            '96x gtceu:nether_quartz_ore',
            '80x gtceu:magnetite_ore',
            '30x gtceu:cobaltite_ore',
            '30x gtceu:barite_ore',
            '30x gtceu:tetrahedrite_ore',
            '64x gtceu:copper_ore',
            '30x gtceu:stibnite_ore',
            '30x gtceu:bastnasite_ore',
            '30x gtceu:monazite_ore',
            '64x gtceu:redstone_ore',
            '30x gtceu:ruby_ore',
            '30x gtceu:electrotine_ore',
            '30x gtceu:alunite_ore',
            '30x gtceu:saltpeter_ore',
            '30x gtceu:diatomite_ore',
            '30x gtceu:beryllium_ore',
            '30x gtceu:emerald_ore',
            '30x gtceu:pyrolusite_ore',
            '30x gtceu:tantalite_ore',
            '30x gtceu:certus_quartz_ore',
            '48x gtceu:chalcocite_ore',
            '30x gtceu:topaz_ore',
            '30x gtceu:bornite_ore',
            '64x gtceu:sphalerite_ore',
            '64x gtceu:cinnabar_ore'
        )
        .chancedOutput('gtceu:platinum_ore', 5000, 500) // Added tier for chanced output
        .duration(3600)
        .EUt(GTValues.VA[GTValues.EV] / 2)
        .dimension('minecraft:the_nether');

    // Nether Blazing Drill (Lesser, No Module)
    event.recipes.gtceu.dimensional_anchoring12('nether_blazing_drill_lesser_no_module')
        .notConsumable('kubejs:aluminfrost_drilling_kit') // Separate notConsumable
        .inputFluids([
            'kubejs:blazing_drilling_fluid 1000'
        ])
        .itemOutputs(
            '64x gtceu:sulfur_ore',
            '48x gtceu:pyrite_ore',
            '30x gtceu:dormant_ember_ore',
            '32x gtceu:cinnabar_ore',
            '64x gtceu:nether_quartz_ore',
            '48x gtceu:magnetite_ore',
            '30x gtceu:barite_ore',
            '30x gtceu:tetrahedrite_ore',
            '30x gtceu:stibnite_ore',
            '30x gtceu:bastnasite_ore',
            '32x gtceu:redstone_ore',
            '30x gtceu:electrotine_ore',
            '30x gtceu:saltpeter_ore',
            '30x gtceu:gold_ore',
            '30x gtceu:chalcocite_ore',
            '32x gtceu:sphalerite_ore'
        )
        .duration(1500)
        .EUt(GTValues.VA[GTValues.EV] / 2)
        .dimension('minecraft:the_nether');

    // End Blazing Drill (Better)
    event.recipes.gtceu.dimensional_anchoring12('end_blazing_drill_better')
        .notConsumable('kubejs:frost_reinforced_stained_steel_drilling_kit') // Separate notConsumable
        .notConsumable('kubejs:earthbound_miner_module')                    // Separate notConsumable
        .inputFluids([
            'kubejs:blazing_drilling_fluid 1500'
        ])
        .itemOutputs(
            '30x gtceu:naquadah_ore',
            '30x gtceu:crystallized_fluxstone_ore',
            '30x gtceu:permafrost_ore',
            '30x gtceu:palladium_ore',
            '30x gtceu:platinum_ore',
            '30x gtceu:molybdenite_ore',
            '80x gtceu:magnetite_ore',
            '48x gtceu:aluminium_ore',
            '30x gtceu:plutonium_ore',
            '30x gtceu:chromite_ore',
            '30x gtceu:vanadium_magnetite_ore',
            '30x gtceu:lithium_ore',
            '80x gtceu:scheelite_ore',
            '100x gtceu:tungstate_ore',
            '30x gtceu:cooperite_ore',
            '30x gtceu:bornite_ore',
            '30x gtceu:pitchblende_ore',
            '30x gtceu:uraninite_ore'
        )
        .duration(2700)
        .EUt(GTValues.VA[GTValues.EV] / 2)
        .dimension('minecraft:the_end');

    // End Blazing Drill (Lesser)
    event.recipes.gtceu.dimensional_anchoring12('end_blazing_drill_lessersa')
        .notConsumable('kubejs:frost_reinforced_stained_steel_drilling_kit') // Separate notConsumable
        .inputFluids([
            'kubejs:blazing_drilling_fluid 1500'
        ])
        .itemOutputs(
            '30x gtceu:naquadah_ore',
            '30x gtceu:permafrost_ore',
            '30x gtceu:palladium_ore',
            '30x gtceu:platinum_ore',
            '30x gtceu:molybdenite_ore',
            '64x gtceu:magnetite_ore',
            '32x gtceu:aluminium_ore',
            '30x gtceu:plutonium_ore',
            '30x gtceu:chromite_ore',
            '30x gtceu:vanadium_magnetite_ore',
            '30x gtceu:lithium_ore',
            '30x gtceu:scheelite_ore',
            '30x gtceu:cooperite_ore',
            '30x gtceu:bornite_ore',
            '30x gtceu:pitchblende_ore',
            '30x gtceu:uraninite_ore'
        )
        .duration(1800)
        .EUt(GTValues.VA[GTValues.EV] / 2)
        .dimension('minecraft:the_end');

    // Moon Voidic Drill (Better) - Aetherial Fabrication
    event.recipes.gtceu.aetherial_fabrication12('moon_voidic_drill_bette')
        .notConsumable('kubejs:space_grade_steel_drilling_kit') // Separate notConsumable
        .notConsumable('kubejs:space_miner_module')             // Separate notConsumable
        .inputFluids([
            'kubejs:voidic_drilling_fluid 2000'
        ])
        .itemOutputs(
            '128x gtceu:ilmenite_ore',
            '100x gtceu:bauxite_ore',
            '30x gtceu:fluorite_ore',
            '128x gtceu:magnetite_ore',
            '128x gtceu:cooperite_ore',
            '30x gtceu:nevvonian_iron_ore',
            '30x gtceu:crystallized_fluxstone_ore',
            '30x gtceu:polarity_flipped_bismuthite_ore',
            '32x gtceu:ignisium_ore'
        )
        .duration(2700)
        .EUt(GTValues.VA[GTValues.EV] / 2)
        .dimension('ad_astra:moon');

    // Moon Voidic Drill (Lesser) - Aetherial Fabrication
    event.recipes.gtceu.aetherial_fabrication12('moon_voidic_drill_lesser')
        .notConsumable('kubejs:space_grade_steel_drilling_kit') // Separate notConsumable
        .inputFluids([
            'kubejs:voidic_drilling_fluid 2000'
        ])
        .itemOutputs(
            '64x gtceu:ilmenite_ore',
            '64x gtceu:bauxite_ore',
            '30x gtceu:fluorite_ore',
            '64x gtceu:magnetite_ore',
            '64x gtceu:cooperite_ore',
            '30x gtceu:nevvonian_iron_ore',
            '30x gtceu:ignisium_ore'
        )
        .duration(1800)
        .EUt(GTValues.VA[GTValues.EV] / 2)
        .dimension('ad_astra:moon');

    // Calcite Generator (using chemical_reactor as discussed)
    event.recipes.gtceu.chemical_reactor('calcite_generator')
        .notConsumable('minecraft:calcite')
        .inputFluids(['minecraft:water 1000', 'minecraft:lava 1000'])
        .itemOutputs('minecraft:calcite')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV]/2);

   

});