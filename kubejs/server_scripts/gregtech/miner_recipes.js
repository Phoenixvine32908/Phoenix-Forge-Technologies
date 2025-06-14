ServerEvents.recipes(event => { // Start of the main recipe event listener

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

    // --- Dimensional Anchoring Recipes (Nerfed) ---

    // Overworld Blazing Drill (Better) - Nerf Round 3
    event.recipes.gtceu.dimensional_anchoring12('overworld_blazing_drill_better')
        .notConsumable('kubejs:aurum_steel_drilling_kit')
        .notConsumable('kubejs:earthbound_miner_module')
        .inputFluids([
            'kubejs:blazing_drilling_fluid 1000'
        ])
        .itemOutputs(
            '35x gtceu:chalcopyrite_ore',
            '28x gtceu:cassiterite_ore',
            '23x gtceu:galena_ore',
            '42x gtceu:magnetite_ore',
            '12x gtceu:gold_ore',
            '12x gtceu:silver_ore',
            '12x gtceu:pentlandite_ore',
            '55x gtceu:coal_ore',
            '35x gtceu:redstone_ore',
            '35x gtceu:lapis_ore',
            '21x gtceu:graphite_ore',
            '35x gtceu:sulfur_ore',
            '12x gtceu:diamond_ore',
            '12x gtceu:ruby_ore',
            '12x gtceu:sapphire_ore',
            '12x gtceu:topaz_ore',
            '12x gtceu:amethyst_ore',
            '12x gtceu:uraninite_ore',
            '12x gtceu:pyrolusite_ore',
            '12x gtceu:stibnite_ore'
        )
        .duration(4100)
        .EUt(GTValues.VA[GTValues.EV] / 2)
        .dimension('minecraft:overworld');

    // Overworld Blazing Drill (Lesser) - Nerf Round 3
    event.recipes.gtceu.dimensional_anchoring12('overworld_blazing_drill_lesser')
        .notConsumable('kubejs:aurum_steel_drilling_kit')
        .inputFluids([
            'kubejs:blazing_drilling_fluid 1000'
        ])
        .itemOutputs(
            '23x gtceu:chalcopyrite_ore',
            '18x gtceu:cassiterite_ore',
            '14x gtceu:galena_ore',
            '14x gtceu:sphalerite_ore',
            '29x gtceu:magnetite_ore',
            '14x gtceu:gold_ore',
            '14x gtceu:silver_ore',
            '14x gtceu:pentlandite_ore',
            '39x gtceu:coal_ore',
            '23x gtceu:redstone_ore',
            '23x gtceu:lapis_ore',
            '14x gtceu:graphite_ore',
            '23x gtceu:sulfur_ore',
            '14x gtceu:diamond_ore'
        )
        .duration(3000)
        .EUt(GTValues.VA[GTValues.EV] / 2)
        .dimension('minecraft:overworld');

    // Nether Blazing Drill (Better) - Nerf Round 3
    event.recipes.gtceu.dimensional_anchoring12('nether_blazing_drill_better')
        .notConsumable('kubejs:aluminfrost_drilling_kit')
        .notConsumable('kubejs:earthbound_miner_module')
        .inputFluids([
            'kubejs:blazing_drilling_fluid 1000'
        ])
        .itemOutputs(
            '50x gtceu:sulfur_ore',
            '17x gtceu:dormant_ember_ore', // KEPT AS IS
            '38x gtceu:pyrite_ore',
            '46x gtceu:nether_quartz_ore',
            '38x gtceu:magnetite_ore',
            '12x gtceu:cobaltite_ore',
            '12x gtceu:barite_ore',
            '12x gtceu:tetrahedrite_ore',
            '32x gtceu:copper_ore',
            '12x gtceu:stibnite_ore',
            '12x gtceu:bastnasite_ore',
            '12x gtceu:monazite_ore',
            '32x gtceu:redstone_ore',
            '4x minecraft:ancient_debris',
            '12x gtceu:ruby_ore',
            '12x gtceu:electrotine_ore',
            '12x gtceu:alunite_ore',
            '12x gtceu:saltpeter_ore',
            '12x gtceu:diatomite_ore',
            '12x gtceu:beryllium_ore',
            '12x gtceu:emerald_ore',
            '12x gtceu:pyrolusite_ore',
            '12x gtceu:tantalite_ore',
            '12x gtceu:certus_quartz_ore',
            '24x gtceu:chalcocite_ore',
            '12x gtceu:topaz_ore',
            '12x gtceu:bornite_ore',
            '28x gtceu:sphalerite_ore',
            '28x gtceu:cinnabar_ore'
        )
        .chancedOutput('gtceu:platinum_ore', 2000, 200)
        .duration(6000)
        .EUt(GTValues.VA[GTValues.EV] / 2)
        .dimension('minecraft:the_nether');

    // Nether Blazing Drill (Lesser, No Module) - Nerf Round 3
    event.recipes.gtceu.dimensional_anchoring12('nether_blazing_drill_lesser_no_module')
        .notConsumable('kubejs:aluminfrost_drilling_kit')
        .inputFluids([
            'kubejs:blazing_drilling_fluid 1000'
        ])
        .itemOutputs(
            '29x gtceu:sulfur_ore',
            '23x gtceu:pyrite_ore',
            '20x gtceu:dormant_ember_ore', // KEPT AS IS
            '14x gtceu:cinnabar_ore',
            '29x gtceu:nether_quartz_ore',
            '23x gtceu:magnetite_ore',
            '14x gtceu:barite_ore',
            '14x gtceu:tetrahedrite_ore',
            '14x gtceu:stibnite_ore',
            '14x gtceu:bastnasite_ore',
            '14x gtceu:redstone_ore',
            '14x gtceu:electrotine_ore',
            '14x gtceu:saltpeter_ore',
            '14x gtceu:gold_ore',
            '14x gtceu:chalcocite_ore',
            '14x gtceu:sphalerite_ore'
        )
        .duration(2500)
        .EUt(GTValues.VA[GTValues.EV] / 2)
        .dimension('minecraft:the_nether');

    // End Blazing Drill (Better) - Nerf Round 3
    event.recipes.gtceu.dimensional_anchoring12('end_blazing_drill_better')
        .notConsumable('kubejs:frost_reinforced_stained_steel_drilling_kit')
        .notConsumable('kubejs:earthbound_miner_module')
        .inputFluids([
            'kubejs:blazing_drilling_fluid 1500'
        ])
        .itemOutputs(
            '12x gtceu:naquadah_ore',
            '17x gtceu:crystallized_fluxstone_ore', // KEPT AS IS
            '17x gtceu:permafrost_ore', // KEPT AS IS
            '12x gtceu:palladium_ore',
            '12x gtceu:platinum_ore',
            '12x gtceu:molybdenite_ore',
            '35x gtceu:magnetite_ore',
            '21x gtceu:aluminium_ore',
            '12x gtceu:plutonium_ore',
            '12x gtceu:chromite_ore',
            '12x gtceu:vanadium_magnetite_ore',
            '12x gtceu:lithium_ore',
            '35x gtceu:scheelite_ore',
            '46x gtceu:tungstate_ore',
            '12x gtceu:cooperite_ore',
            '12x gtceu:bornite_ore',
            '12x gtceu:pitchblende_ore',
            '12x gtceu:uraninite_ore'
        )
        .duration(4600)
        .EUt(GTValues.VA[GTValues.EV] / 2)
        .dimension('minecraft:the_end');

    // End Blazing Drill (Lesser) - Nerf Round 3
    event.recipes.gtceu.dimensional_anchoring12('end_blazing_drill_lessersa')
        .notConsumable('kubejs:frost_reinforced_stained_steel_drilling_kit')
        .inputFluids([
            'kubejs:blazing_drilling_fluid 1500'
        ])
        .itemOutputs(
            '17x gtceu:naquadah_ore',
            '20x gtceu:permafrost_ore', // KEPT AS IS
            '17x gtceu:palladium_ore',
            '17x gtceu:platinum_ore',
            '17x gtceu:molybdenite_ore',
            '29x gtceu:magnetite_ore',
            '17x gtceu:aluminium_ore',
            '17x gtceu:plutonium_ore',
            '17x gtceu:chromite_ore',
            '17x gtceu:vanadium_magnetite_ore',
            '17x gtceu:lithium_ore',
            '17x gtceu:scheelite_ore',
            '17x gtceu:cooperite_ore',
            '17x gtceu:bornite_ore',
            '17x gtceu:pitchblende_ore',
            '17x gtceu:uraninite_ore'
        )
        .duration(3000)
        .EUt(GTValues.VA[GTValues.EV] / 2)
        .dimension('minecraft:the_end');

    // Moon Voidic Drill (Better) - Aetherial Fabrication - Nerf Round 3
    event.recipes.gtceu.aetherial_fabrication12('moon_voidic_drill_bette')
        .notConsumable('kubejs:space_grade_steel_drilling_kit')
        .notConsumable('kubejs:space_miner_module')
        .inputFluids([
            'kubejs:voidic_drilling_fluid 2000'
        ])
        .itemOutputs(
            '58x gtceu:ilmenite_ore',
            '47x gtceu:bauxite_ore',
            '12x gtceu:fluorite_ore',
            '58x gtceu:magnetite_ore',
            '58x gtceu:cooperite_ore',
            '3x gtceu:nevvonian_iron_ore',
            '12x gtceu:crystallized_fluxstone_ore',
            '3x gtceu:polarity_flipped_bismuthite_ore',
            '6x gtceu:ignisium_ore'
        )
        .duration(4600)
        .EUt(GTValues.VA[GTValues.EV] / 2)
        .dimension('ad_astra:moon');

    // Moon Voidic Drill (Lesser) - Aetherial Fabrication - Nerf Round 3
    event.recipes.gtceu.aetherial_fabrication12('moon_voidic_drill_lesser')
        .notConsumable('kubejs:space_grade_steel_drilling_kit')
        .inputFluids([
            'kubejs:voidic_drilling_fluid 2000'
        ])
        .itemOutputs(
            '28x gtceu:ilmenite_ore',
            '28x gtceu:bauxite_ore',
            '17x gtceu:fluorite_ore',
            '28x gtceu:magnetite_ore',
            '28x gtceu:cooperite_ore',
            '12x gtceu:nevvonian_iron_ore',
            '12x gtceu:ignisium_ore'
        )
        .duration(3000)
        .EUt(GTValues.VA[GTValues.EV] / 2)
        .dimension('ad_astra:moon');

    // Calcite Generator (using chemical_reactor as discussed) - Nerf Round 3
    event.recipes.gtceu.chemical_reactor('calcite_generator')
        .notConsumable('minecraft:calcite')
        .inputFluids(['minecraft:water 1000', 'minecraft:lava 20'])
        .itemOutputs('10x minecraft:calcite')
        .duration(360)
        .EUt(GTValues.VA[GTValues.HV]/2);

}); 