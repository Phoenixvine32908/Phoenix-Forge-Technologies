ServerEvents.recipes(event => {
    function replaceBaseMaterials(event, replacements) {
        replacements.forEach(([original, custom]) => {
            event.replaceInput(
                { input: original },
                original,
                custom
            )
        });
    }

    // Define your replacements as [original, custom] pairs
    replaceBaseMaterials(event, [
        ['gtceu:titanium_gear', 'gtceu:source_imbued_titanium_gear'],

        // Add more replacements here:
        // ['gtceu:steel_plate', 'kubejs:custom_steel_plate'],
        // ['gtceu:copper_wire', 'kubejs:custom_copper_wire'],
    ]);
    event.recipes.gtceu.large_chemical_reactor('oleum')
    .inputFluids('gtceu:sulfur_trioxide 244', 'gtceu:sulfuric_acid 1000')
    .outputFluids('gtceu:oleum 1000')
    .duration(134)
    .EUt(GTValues.VA[GTValues.IV]/2)
event.recipes.gtceu.large_chemical_reactor('concentrated_sulfuric_acid')
    .inputFluids('gtceu:oleum 300', 'minecraft:water 700')
    .outputFluids('gtceu:concentrated_sulfuric_acid 800')
    .duration(80)
    .EUt(GTValues.VA[GTValues.EV]/2)
event.recipes.gtceu.electrolyzer('concentrated_sulfuric_acid_to_hydrogen_peroxide')
    .inputFluids('gtceu:concentrated_sulfuric_acid 1000')
    .outputFluids('gtceu:hydrogen_peroxide 100', 'minecraft:water 300', 'gtceu:sulfuric_acid 500')
    .duration(550)
    .EUt(GTValues.VA[GTValues.IV]/2)
event.recipes.gtceu.large_chemical_reactor('acetone_cyanohydrin')
    .inputFluids('gtceu:acetone 1000', 'gtceu:hydrogen_cyanide 1000')
    .outputFluids('gtceu:acetone_cyanohydrin 1000')
    .duration(200)
    .EUt(GTValues.VA[GTValues.EV]/2)
event.recipes.gtceu.large_chemical_reactor('methyl_methacrylate')
    .inputFluids('gtceu:acetone_cyanohydrin 1000', 'gtceu:sulfuric_acid 1000', 'gtceu:methanol 750')
    .outputFluids('gtceu:methyl_methacrylate 1000', 'gtceu:ammonium_bisulfate_solution 1000')
    .duration(300)
    .EUt(GTValues.VA[GTValues.IV]/2)
event.recipes.gtceu.distillation_tower('ammonium_bisulfate_solution_to_dust')
    .inputFluids('gtceu:ammonium_bisulfate_solution 1000')
    .outputFluids('gtceu:sulfuric_acid 500', 'minecraft:water 600', 'gtceu:ammonia 120')
    .itemOutputs('12x gtceu:ammonium_bisulfate_dust')
    .duration(240)
    .EUt(GTValues.VA[GTValues.EV]/2)
    event.recipes.gtceu.electrolyzer('ammonium_bisulfate_dust_to_ammonium_persulfate')
    .itemInputs('7x gtceu:ammonium_bisulfate_dust')
    .outputFluids('gtceu:hydrogen 1000', 'gtceu:ammonium_persulfate 250')
    .duration(130)
    .EUt(GTValues.VA[GTValues.IV]/2)
    event.recipes.gtceu.large_chemical_reactor('advanced_pmma_polymerization') 
    .inputFluids([
        'gtceu:methyl_methacrylate 144',    
        'gtceu:ammonium_persulfate 750',     
        'gtceu:hydrogen_peroxide 250'         
    ])
    .outputFluids('gtceu:polymethyl_methacrylate 216')
    .duration(800) 
     .EUt(GTValues.VA[GTValues.IV]/2)
     event.recipes.gtceu.large_chemical_reactor('ammonium_bisulfate_solution') 
    .inputFluids([
        'gtceu:sulfuric_acid 200',    
        'gtceu:ammonia 750',              
    ])
    .outputFluids("gtceu:ammonium_bisulfate_solution 250")
    .duration(60) 
     .EUt(GTValues.VA[GTValues.IV]/2)
       event.recipes.gtceu.mixer('honey_comb_base_mixture') 
    .inputFluids([
        'productivebees:honey 500',    
        'gtceu:polymethyl_methacrylate 244',              
    ])
    .itemInputs("gtceu:source_imbued_titanium_dust", "gtceu:niobium_dust")
    .outputFluids("gtceu:honey_comb_base_mixture 250")
    .duration(60) 
     .EUt(GTValues.VA[GTValues.IV]/2)
      event.recipes.gtceu.fluid_solidifier('honey_comb_base') 
    .inputFluids([
        'gtceu:honey_comb_base_mixture 1008',                  
    ])
    .notConsumable("kubejs:honey_comb_base_mold")
    .itemOutputs("kubejs:honey_comb_base")
    .duration(2000) 
     .EUt(GTValues.VA[GTValues.HV]/2)
 event.recipes.gtceu.compressor('honey_comb_bases_solid') 
    .itemInputs("12x gtceu:dense_void_touched_tungsten_steel_plate")
    .itemOutputs("kubejs:honey_comb_base_mold")
    .duration(2000) 
     .EUt(GTValues.VA[GTValues.IV]/2)
    event.recipes.gtceu.large_chemical_reactor('sugar_to_sucrose_enhanced')
        .itemInputs("12x minecraft:sugar", "2x minecraft:glowstone_dust") 
        .circuit(1)
        .inputFluids("minecraft:water 500") 
        .outputFluids("gtceu:sucrose 1200")
        .chancedOutput("minecraft:glowstone_dust", 8500, 1) 
        .duration(300) 
        .EUt(GTValues.VA[GTValues.EV]/2)

    event.recipes.gtceu.large_chemical_reactor('sucrose_inversion')
        .inputFluids("gtceu:sucrose")
        .circuit(4)
        .inputFluids('gtceu:distilled_water 500', 'gtceu:sulfuric_acid 10') 
        .outputFluids('gtceu:invert_sugar_solution 1000')
        .duration(400)
        .EUt(GTValues.VA[GTValues.IV]/2)
event.recipes.gtceu.large_chemical_reactor('protein_solution_from_mince_meat')
    .itemInputs('10x gtceu:meat_dust') 
    .circuit(12)
    .inputFluids('gtceu:acetic_acid 100')
    .outputFluids('gtceu:protein_solution 1000')
    .duration(250)
    .EUt(GTValues.VA[GTValues.IV]/2)
    
    event.recipes.gtceu.large_chemical_reactor('amino_acids_from_protein_solution')
    .inputFluids('gtceu:protein_solution 1000', 'gtceu:hydrofluoric_acid 250')
    .circuit(2)
    .itemInputs('gtceu:activated_carbon_dust') 
    .outputFluids('gtceu:amino_acids 900') 
    .duration(350) 
    .EUt(GTValues.VA[GTValues.IV]/2) 

    event.recipes.gtceu.large_chemical_reactor('pollen_concentrate_fluid_from_flowers')
    .inputFluids('gtceu:ethanol 1000')
    .circuit(4)
    .itemInputs('4x #minecraft:flowers') 
    .outputFluids('gtceu:pollen_concentrate_fluid 500') 
    .duration(275) 
    .EUt(GTValues.VA[GTValues.IV])
    event.recipes.gtceu.large_chemical_reactor('pollen_concentrate_fluid_from_plant_balls')
    .inputFluids('gtceu:ethanol 1000')
    .circuit(4)
    .itemInputs('1x gtceu:plant_ball') 
    .outputFluids('gtceu:pollen_concentrate_fluid 500') 
    .duration(225) 
    .EUt(GTValues.VA[GTValues.IV]/2)
     event.recipes.gtceu.large_chemical_reactor('honey_catalyst')
    .inputFluids('gtceu:amino_acids 1500', 'minecraft:water 32000', "gtceu:sodium_potassium 1200")
    .circuit(24)
    .itemInputs('6x gtceu:magnesium_dust', '12x gtceu:calcium_dust') 
    .outputFluids('gtceu:honey_catalyst 500') 
    .duration(150) 
    .EUt(GTValues.VA[GTValues.IV])
    event.recipes.gtceu.large_chemical_reactor('honey')
    .inputFluids('gtceu:honey_catalyst 1500', 'gtceu:invert_sugar_solution 4000', "gtceu:pollen_concentrate_fluid 3500")
    .circuit(24)
    .outputFluids('productivebees:honey 500') 
    .duration(2000) 
    .EUt(GTValues.VA[GTValues.IV])
    event.recipes.gtceu.assembler('honeycomb_assembly')
        .inputFluids('productivebees:honey 144', 'gtceu:invert_sugar_solution 144')
        .notConsumable('kubejs:honey_comb_base')
        .itemOutputs('minecraft:honeycomb')
        .duration(400)
        .EUt(GTValues.VA[GTValues.IV]/2)

           event.recipes.gtceu.distillation_tower('invert_sugar_solution_separation')
        .inputFluids('gtceu:invert_sugar_solution 1000')
        .outputFluids('gtceu:glucose 500', 'gtceu:fructose 500')
        .duration(300)
        .EUt(GTValues.VA[GTValues.IV]/2)

        event.recipes.gtceu.mixer('sugar_water')
        .inputFluids('gtceu:glucose 250', 'gtceu:fructose 250', 'gtceu:distilled_water 1000')
        .outputFluids('gtceu:sugar_water 1500')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV]/2)
        event.recipes.gtceu.chemical_reactor('sugar_and_molasses_production')
    .inputFluids('gtceu:sugar_water 1000') 
    .itemOutputs('4x minecraft:sugar')    
    .outputFluids('gtceu:molasses 200')  
    .duration(180) 
    .EUt(GTValues.VA[GTValues.HV]); 

    event.recipes.gtceu.centrifuge('cream_from_milk')
    .inputFluids('minecraft:milk 1000') 
    .outputFluids('gtceu:cream 250', 'gtceu:skim_milk 750')
    .duration(600) 
    .EUt(GTValues.VA[GTValues.LV]); 

    event.recipes.gtceu.mixer('dough')
    .inputFluids('gtceu:skim_milk 250', 'minecraft:water 500') 
    .itemInputs('12x gtceu:wheat_dust', 'gtceu:salt_dust')
    .itemOutputs("10x gtceu:dough")
    .duration(300) 
    .EUt(GTValues.VA[GTValues.LV]); 

    event.recipes.gtceu.confectionery_fabricator('honeytreat')
   .itemInputs('5x gtceu:dough')
   .notConsumable('kubejs:honey_comb_base')
   .inputFluids('productivebees:honey 1000', 'gtceu:molasses 500', 'gtceu:cream 250', "gtceu:pollen_concentrate_fluid 250", "gtceu:peanut_butter 250")
    .itemOutputs('productivebees:honey_treat')
    .duration(300)
    .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.macerator('peanut_dust')
    .itemInputs('pamhc2crops:roastedpeanutitem') 
    .itemOutputs('gtceu:peanut_dust')
    .duration(300)
    .EUt(GTValues.VA[GTValues.LV]); 

    event.recipes.gtceu.mixer('nut_butter_from_dust')
    .itemInputs('8x gtceu:peanut_dust', '2x minecraft:sugar')  
    .inputFluids('minecraft:water 500', 'gtceu:seed_oil 250')     
    .outputFluids('gtceu:nut_butter 1000')
    .duration(200) 
    .EUt(GTValues.VA[GTValues.EV]); 

})