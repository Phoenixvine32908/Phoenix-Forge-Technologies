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
            'kubejs:blazing_drilling_fluid  8000'
        ])
        .itemOutputs(
            '35x gtceu:raw_chalcopyrite',
            '28x gtceu:raw_cassiterite',
            '23x gtceu:raw_galena',
            '42x gtceu:raw_magnetite',
            '12x minecraft:raw_gold',
            '12x gtceu:raw_silver',
            '12x gtceu:raw_pentlandite',
            '55x gtceu:raw_coal',
            '35x gtceu:raw_redstone',
            '35x gtceu:raw_lapis',
            '21x gtceu:raw_graphite',
            '35x gtceu:raw_sulfur',
            '12x gtceu:raw_diamond',
            '12x gtceu:raw_ruby',
            '12x gtceu:raw_sapphire',
            '12x gtceu:raw_topaz',
            '12x gtceu:raw_amethyst',
            '12x gtceu:raw_uraninite',
            '12x gtceu:raw_pyrolusite',
            '12x gtceu:raw_stibnite'
        )
        .duration(8500) // Increased from 5000
        .EUt(GTValues.VA[GTValues.EV] / 2)
        .dimension('minecraft:overworld');

    // Overworld Blazing Drill (Lesser) - Nerf Round 3
    event.recipes.gtceu.dimensional_anchoring12('overworld_blazing_drill_lesser')
        .notConsumable('kubejs:aurum_steel_drilling_kit')
        .inputFluids([
            'kubejs:blazing_drilling_fluid  8000'
        ])
        .itemOutputs(
            '23x gtceu:raw_chalcopyrite',
            '18x gtceu:raw_cassiterite',
            '14x gtceu:raw_galena',
            '14x gtceu:raw_sphalerite',
            '29x gtceu:raw_magnetite',
            '14x minecraft:raw_gold',
            '14x gtceu:raw_silver',
            '14x gtceu:raw_pentlandite',
            '39x gtceu:raw_coal',
            '23x gtceu:raw_redstone',
            '23x gtceu:raw_lapis',
            '14x gtceu:raw_graphite',
            '23x gtceu:raw_sulfur',
            '14x gtceu:raw_diamond'
        )
        .duration(9500) // Increased from 5500
        .EUt(GTValues.VA[GTValues.EV] / 2)
        .dimension('minecraft:overworld');

    // Nether Blazing Drill (Better) - Nerf Round 3
    event.recipes.gtceu.dimensional_anchoring12('nether_blazing_drill_better')
        .notConsumable('kubejs:aluminfrost_drilling_kit')
        .notConsumable('kubejs:earthbound_miner_module')
        .inputFluids([
            'kubejs:blazing_drilling_fluid  8000'
        ])
        .itemOutputs(
            '50x gtceu:raw_sulfur',
            '17x gtceu:raw_dormant_ember', // KEPT AS IS
            '38x gtceu:raw_pyrite',
            '46x gtceu:raw_nether_quartz',
            '38x gtceu:raw_magnetite',
            '12x gtceu:raw_cobaltite',
            '12x gtceu:raw_barite',
            '12x gtceu:raw_tetrahedrite',
            '32x minecraft:raw_copper',
            '12x gtceu:raw_stibnite',
            '12x gtceu:raw_bastnasite',
            '12x gtceu:raw_monazite',
            '32x gtceu:raw_redstone',
            '4x minecraft:ancient_debris',
            '12x gtceu:raw_ruby',
            '12x gtceu:raw_electrotine',
            '12x gtceu:raw_alunite',
            '12x gtceu:raw_saltpeter',
            '12x gtceu:raw_diatomite',
            '12x gtceu:raw_beryllium',
            '12x gtceu:raw_emerald',
            '12x gtceu:raw_pyrolusite',
            '12x gtceu:raw_tantalite',
            '12x gtceu:raw_certus_quartz',
            '24x gtceu:raw_chalcocite',
            '12x gtceu:raw_topaz',
            '12x gtceu:raw_bornite',
            '28x gtceu:raw_sphalerite',
            '28x gtceu:raw_cinnabar'
        )
        .chancedOutput('gtceu:raw_platinum', 2000, 200)
        .duration(9500) // Increased from 5500
        .EUt(GTValues.VA[GTValues.EV] / 2)
        .dimension('minecraft:the_nether');

    // Nether Blazing Drill (Lesser, No Module) - Nerf Round 3
    event.recipes.gtceu.dimensional_anchoring12('nether_blazing_drill_lesser_no_module')
        .notConsumable('kubejs:aluminfrost_drilling_kit')
        .inputFluids([
            'kubejs:blazing_drilling_fluid  8000'
        ])
        .itemOutputs(
            '29x gtceu:raw_sulfur',
            '23x gtceu:raw_pyrite',
            '20x gtceu:raw_dormant_ember', // KEPT AS IS
            '14x gtceu:raw_cinnabar',
            '29x gtceu:raw_nether_quartz',
            '23x gtceu:raw_magnetite',
            '14x gtceu:raw_barite',
            '14x gtceu:raw_tetrahedrite',
            '14x gtceu:raw_stibnite',
            '14x gtceu:raw_bastnasite',
            '14x gtceu:raw_redstone',
            '14x gtceu:raw_electrotine',
            '14x gtceu:raw_saltpeter',
            '14x minecraft:raw_gold',
            '14x gtceu:raw_chalcocite',
            '14x gtceu:raw_sphalerite'
        )
        .duration(10500) // Increased from 6500
        .EUt(GTValues.VA[GTValues.EV] / 2)
        .dimension('minecraft:the_nether');

    // End Blazing Drill (Better) - Nerf Round 3
    event.recipes.gtceu.dimensional_anchoring12('end_blazing_drill_better')
        .notConsumable('kubejs:frost_reinforced_stained_steel_drilling_kit')
        .notConsumable('kubejs:earthbound_miner_module')
        .inputFluids([
            'kubejs:blazing_drilling_fluid  8000'
        ])
        .itemOutputs(
            '12x gtceu:raw_naquadah',
            '17x gtceu:raw_crystallized_fluxstone', // KEPT AS IS
            '17x gtceu:raw_permafrost', // KEPT AS IS
            '12x gtceu:raw_palladium',
            '12x gtceu:raw_platinum',
            '12x gtceu:raw_molybdenite',
            '35x gtceu:raw_magnetite',
            '21x gtceu:raw_aluminium',
            '12x gtceu:raw_plutonium',
            '12x gtceu:raw_chromite',
            '12x gtceu:raw_vanadium_magnetite',
            '12x gtceu:raw_lithium',
            '35x gtceu:raw_scheelite',
            '46x gtceu:raw_tungstate',
            '12x gtceu:raw_cooperite',
            '12x gtceu:raw_bornite',
            '12x gtceu:raw_pitchblende',
            '12x gtceu:raw_uraninite'
        )
        .duration(9500) // Increased from 5600
        .EUt(GTValues.VA[GTValues.EV] / 2)
        .dimension('minecraft:the_end');

    // End Blazing Drill (Lesser) - Nerf Round 3
    event.recipes.gtceu.dimensional_anchoring12('end_blazing_drill_lesser')
        .notConsumable('kubejs:frost_reinforced_stained_steel_drilling_kit')
        .inputFluids([
            'kubejs:blazing_drilling_fluid  8000'
        ])
        .itemOutputs(
            '17x gtceu:raw_naquadah',
            '20x gtceu:raw_permafrost', // KEPT AS IS
            '17x gtceu:raw_palladium',
            '17x gtceu:raw_platinum',
            '17x gtceu:raw_molybdenite',
            '29x gtceu:raw_magnetite',
            '17x gtceu:raw_aluminium',
            '17x gtceu:raw_plutonium',
            '17x gtceu:raw_chromite',
            '17x gtceu:raw_vanadium_magnetite',
            '17x gtceu:raw_lithium',
            '17x gtceu:raw_scheelite',
            '17x gtceu:raw_cooperite',
            '17x gtceu:raw_bornite',
            '17x gtceu:raw_pitchblende',
            '17x gtceu:raw_uraninite'
        )
        .duration(10000) // Increased from 6300
        .EUt(GTValues.VA[GTValues.EV] / 2)
        .dimension('minecraft:the_end');


    // Moon Voidic Drill (Lesser) - Aetherial Fabrication - Nerf Round 3
    event.recipes.gtceu.aetherial_fabrication12('moon_voidic_drill_lesser')
        .notConsumable('kubejs:space_grade_steel_drilling_kit')
        .inputFluids([
            'kubejs:voidic_drilling_fluid  8000'
        ])
        .itemOutputs(
            '10x gtceu:raw_voidglass_shard',
            '28x gtceu:raw_ilmenite',
            '28x gtceu:raw_bauxite',
            '17x gtceu:raw_fluorite',
            '28x gtceu:raw_magnetite',
            '28x gtceu:raw_cooperite',
            '12x gtceu:raw_nevvonian_iron',
            '12x gtceu:raw_ignisium'
        )
        .duration(6750) // Increased from 4000
        .EUt(GTValues.VA[GTValues.EV] / 2)
        .dimension('ad_astra:moon');

        event.recipes.gtceu.aetherial_fabrication12('moon_voidic_drill_module')
        .notConsumable('kubejs:space_grade_steel_drilling_kit')
        .notConsumable('kubejs:space_miner_module')
        .inputFluids([
            'kubejs:voidic_drilling_fluid  8000'
        ])
        .itemOutputs(
            '10x gtceu:raw_voidglass_shard',
            '28x gtceu:raw_ilmenite',
            '28x gtceu:raw_bauxite',
            '17x gtceu:raw_fluorite',
            '28x gtceu:raw_magnetite',
            '28x gtceu:raw_cooperite',
            '12x gtceu:raw_nevvonian_iron',
            '12x gtceu:raw_ignisium',
            '12x gtceu:raw_crystallized_fluxstone',
            '3x gtceu:raw_polarity_flipped_bismuthite',
        )
        .duration(6250) 
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