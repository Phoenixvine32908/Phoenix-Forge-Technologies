ServerEvents.recipes(event => {
 

  
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
    event.recipes.gtceu.alloy_blast_smelter('loquid_void_touched_tungsten_steel')
        .itemInputs('4x gtceu:tungsten_dust', '4x gtceu:voidglass_shard_dust', '2x gtceu:molybdenum_dust')
        .circuit(5)
        .inputFluids('gtceu:liquid_ender_air 100')
        .outputFluids('gtceu:molten_void_touched_tungsten_steel 1152')
        .duration(6000)
        .blastFurnaceTemp(3600)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.alloy_blast_smelter('loquid_void_touched_tungsten_steel_boosted')
        .itemInputs('4x gtceu:tungsten_dust', '4x gtceu:voidglass_shard_dust', '2x gtceu:molybdenum_dust')
        .circuit(15)
        .inputFluids('gtceu:liquid_ender_air 100', 'gtceu:helium 50')
        .outputFluids('gtceu:molten_void_touched_tungsten_steel 1152')
        .blastFurnaceTemp(3600)
        .duration(4200)
        .EUt(GTValues.VA[GTValues.EV]);

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
        .duration(120)
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
   .itemInputs('5x gtceu:dough', '2x minecraft:honeycomb')
   .inputFluids('productivebees:honey 5000', 'gtceu:molasses 1000', 'gtceu:cream 500', "gtceu:pollen_concentrate_fluid 2500", "gtceu:peanut_butter 2250")
    .itemOutputs('32x productivebees:honey_treat')
    .duration(150)
    .EUt(GTValues.VA[GTValues.IV]);

    event.recipes.gtceu.macerator('peanut_dust')
    .itemInputs('pamhc2crops:roastedpeanutitem') 
    .itemOutputs('gtceu:peanut_dust')
    .duration(400)
    .EUt(GTValues.VA[GTValues.LV]); 

    event.recipes.gtceu.mixer('nut_butter_from_dust')
    .itemInputs('8x gtceu:peanut_dust', '2x minecraft:sugar')  
    .inputFluids('minecraft:water 500', 'gtceu:seed_oil 250')     
    .outputFluids('gtceu:peanut_butter 500')
    .duration(200) 
    .EUt(GTValues.VA[GTValues.EV]); 
   event.recipes.gtceu.large_chemical_reactor('superconductive_honey_creation')
        .itemInputs('8x gtceu:honey_dust', '4x gtceu:niobium_titanium_dust', '2x gtceu:iridium_dust')
        .inputFluids('gtceu:helium 500', 'kubejs:cryo_ember_fluid 100') 
        .itemOutputs('12x gtceu:superconductive_honey_dust')  
        .duration(300) 
        .EUt(GTValues.VA[GTValues.EV]); 
  event.recipes.gtceu.implosion_compressor('superconductive_honey_ingot_normal')
        .itemInputs('1x gtceu:superconductive_honey_dust', '16x minecraft:tnt')
        .itemOutputs('1x gtceu:superconductive_honey_ingot')  
        .duration(450) 
        .EUt(GTValues.VA[GTValues.EV]); 
          event.recipes.gtceu.implosion_compressor('superconductive_honey_ingot_itnt')
        .itemInputs('1x gtceu:superconductive_honey_dust', '4x gtceu:industrial_tnt')
        .itemOutputs('1x gtceu:superconductive_honey_ingot')  
        .duration(350) 
        .EUt(GTValues.VA[GTValues.EV]); 

    event.recipes.gtceu.assembler('superconductive_honey_coil_block')
        .itemInputs('8x gtceu:superconductive_honey_double_wire', '8x gtceu:hsss_foil') 
        .inputFluids('gtceu:void_touched_tungsten_steel 144') 
        .itemOutputs('kubejs:conductive_honey_coil')
        .duration(750) 
        .EUt(GTValues.VA[GTValues.IV]);
    event.recipes.gtceu.fluid_solidifier('soldified_honey')
        .inputFluids('productivebees:honey 144')
        .notConsumable('gtceu:ingot_casting_mold')
        .itemOutputs('gtceu:honey_ingot')
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV]);

        event.recipes.gtceu.mixer('cryo_zirconium_binding_solution') 
        .inputFluids('kubejs:frost 288', 'minecraft:water 2000')
        .itemInputs('2x gtceu:small_crystallized_fluxstone_dust', '1x gtceu:zirconium_dust')
        .outputFluids('gtceu:cryo_zirconium_binding_solution 2000')
        .duration(150)
        .EUt(GTValues.VA[GTValues.EV]);
        event.recipes.gtceu.mixer('cryo_graphite_binding_solution') 
        .inputFluids('kubejs:frost 288', 'minecraft:water 2000')
        .itemInputs('2x gtceu:small_crystallized_fluxstone_dust', '1x gtceu:graphite_dust')
        .outputFluids('gtceu:cryo_graphite_binding_solution 3000')
        .duration(175)
        .EUt(GTValues.VA[GTValues.EV]);
   event.recipes.gtceu.large_chemical_reactor('thorium_fuel_pellet_crafting')
        .itemInputs('9x gtceu:thorium_nugget') 
        .inputFluids('gtceu:cryo_graphite_binding_solution 1000') 
        .itemOutputs('9x kubejs:thorium_fuel_pellet ')
        .duration(100) 
        .EUt(GTValues.VA[GTValues.MV]); 

    event.recipes.gtceu.large_chemical_reactor('uranium_235_fuel_pellet_crafting')
        .itemInputs('9x gtceu:uranium_235_nugget') 
        .inputFluids('gtceu:cryo_zirconium_binding_solution 1000') 
        .itemOutputs('9x kubejs:uranium_235_fuel_pellet')
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV])
            event.recipes.gtceu.large_chemical_reactor('uranium_233_fuel_pellet_crafting')
        .itemInputs('9x gtceu:uranium_233_nugget') 
        .inputFluids('gtceu:cryo_zirconium_binding_solution 1000') 
        .itemOutputs('9x kubejs:u233_fuel_pellet')
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV])
        


     event.recipes.gtceu.large_chemical_reactor('spent_uranium_reprocessing')
        .itemInputs(['1x gtceu:depleted_uranium_dust'])
        .inputFluids([
            'gtceu:nitric_acid 1500', 
        ])
        .itemOutputs([      
            '1x gtceu:strontium_dust',       
            '1x gtceu:caesium_dust'          
        ])
        .outputFluids([
            'gtceu:fission_products_fluid 500', 
            'gtceu:radioactive_gas_mixture 100' 
        ])
        .duration(120) 
        .EUt(GTValues.VA[GTValues.IV]); 

        event.recipes.gtceu.high_performace_breeder_reactor('breeder_reactor/thorium_uranium_233_cycle_u235_driver')
        .itemInputs(['4x kubejs:thorium_fuel_pellet', '1x kubejs:u235_fuel_pellet']) 
        .inputFluids(['gtceu:sodium_potassium 500', 'minecraft:water 250',])
        .itemOutputs([
            '4x gtceu:irradiated_thorium_nugget',
            '1x gtceu:spent_uranium_235_nugget'
        ])
        .outputFluids(['gtceu:hot_sodium_potassium 500', 'gtceu:critical_steam 1000'])
        .duration(1600)
        .EUt(-GTValues.VA[GTValues.IV]);

 
    event.recipes.gtceu.high_performace_breeder_reactor('breeder_reactor/thorium_uranium_233_cycle_u233_driver')
        .itemInputs(['4x kubejs:thorium_fuel_pellet', '1x kubejs:u233_fuel_pellet']) 
        .inputFluids(['gtceu:sodium_potassium 500', 'minecraft:water 250',])
        .itemOutputs([
            '4x gtceu:irradiated_thorium_nugget',
            '1x gtceu:spent_uranium_233_nugget'
        ])
        .outputFluids(['gtceu:hot_sodium_potassium 500', 'gtceu:critical_steam 1000'])
        .duration(267)
        .EUt(-GTValues.VA[GTValues.IV]);


          
    event.recipes.gtceu.large_chemical_reactor('reprocessing/thorium_rods_to_uranium_233')
        .itemInputs(['16x gtceu:irradiated_thorium_nugget'])
        .inputFluids(['gtceu:nitric_acid 500'])
        .itemOutputs([
            '4x gtceu:uranium_233_dust',
            '12x gtceu:depleted_thorium_dust'
        ])
        .outputFluids(['gtceu:fission_products_fluid 250'])
        .duration(600)
        .EUt(GTValues.VA[GTValues.EV]);

    // Reprocessing Spent Uranium-235 Rods (Yields Reactor Depleted Uranium for U-242 line)
    event.recipes.gtceu.large_chemical_reactor('reprocessing/spent_uranium_235_rods')
        .itemInputs(['16x gtceu:spent_uranium_235_nugget'])
        .inputFluids(['gtceu:nitric_acid 200'])
        .itemOutputs([
            '6x gtceu:depleted_uranium_dust',
            '12x gtceu:uranium_235_dust'
        ])
        .outputFluids(['gtceu:fission_products_fluid 100'])
        .duration(400)
        .EUt(GTValues.VA[GTValues.HV]);

    // Reprocessing Spent Uranium-233 Rods (Yields recycled U-233 from the driver)
    event.recipes.gtceu.large_chemical_reactor('reprocessing/spent_uranium_233_rods')
        .itemInputs(['16x gtceu:spent_uranium_233_nugget'])
        .inputFluids(['gtceu:nitric_acid 200'])
        .itemOutputs([
            '14x gtceu:uranium_233_dust',
            '4x gtceu:depleted_uranium_dust'
        ])
        .outputFluids(['gtceu:fission_products_fluid 100'])
        .duration(400)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.distillation_tower('fission_products_fluid_processing')
        .inputFluids(['gtceu:fission_products_fluid 1000'])
        .itemOutputs(['1x gtceu:fissile_ash_dust'])
        .outputFluids(['gtceu:radioactive_gas_mixture 500'])
        .duration(400)
        .EUt(GTValues.VA[GTValues.EV]);

    event.recipes.gtceu.chemical_reactor('reprocessing/thorium_rods_to_uranium_233')
        .itemInputs(['16x gtceu:irradiated_thorium_nugget'])
        .inputFluids(['gtceu:nitric_acid 500'])
        .itemOutputs([
            '2x gtceu:uranium_233_dust',
            '14x gtceu:depleted_thorium_dust'
        ])
        .outputFluids(['gtceu:fission_products_fluid 250'])
        .duration(600)
        .EUt(GTValues.VA[GTValues.EV]);

    

    event.recipes.gtceu.centrifuge('radioactive_gas_mixture_separatio')
        .inputFluids(['gtceu:radioactive_gas_mixture 500','gtceu:nitrogen 100'])
        .outputFluids([
            'gtceu:xenon 100',
            'gtceu:iodine 150',
            'gtceu:krypton 50',
            'gtceu:inert_gas_waste 250'
        ])
        .duration(300)
       .EUt(GTValues.VA[GTValues.IV]);
       
           event.recipes.gtceu.distillation_tower('inert_gas_waste_recycling')
        .inputFluids(['gtceu:inert_gas_waste 1000'])
        .outputFluids(
            'gtceu:nitrogen 300',   
            'gtceu:oxygen 100',      
            'gtceu:chlorine 500',    
            'gtceu:argon 50',        
        )
        .duration(400) 
        .EUt(GTValues.VA[GTValues.EV]);
        event.recipes.gtceu.centrifuge('fissile_ash_processing')
        .itemInputs('gtceu:fissile_ash_dust')
        .inputFluids('gtceu:aqua_regia 100')
        .itemOutputs('1x gtceu:technetium_dust', '4x gtceu:rare_earth')
        .outputFluids('gtceu:radioactive_sludge 50') 
        .duration(300)
       .EUt(GTValues.VA[GTValues.IV]);

        event.recipes.gtceu.assembler('active_transformer')
        .itemInputs('gtceu:iv_transformer_16a', '8x #gtceu:circuits/iv', '8x gtceu:superconductive_honey_double_wire', '10x gtceu:hpic_chip')
        .inputFluids('gtceu:pcb_coolant 1000')
        .itemOutputs('gtceu:active_transformer')
        .duration(450)
        .EUt(GTValues.VA[GTValues.IV]);

         event.recipes.gtceu.electric_blast_furnace('depleted_thorium_recycling')
        .itemInputs('4x gtceu:depleted_thorium_nugget') 
        .circuit(2)
        .inputFluids('gtceu:fluorine 250') 
        .itemOutputs('2x gtceu:thorium_dust')
        .outputFluids(
            'gtceu:radioactive_sludge 250', 
        )
        .blastFurnaceTemp(3000)
        .duration(300)
       .EUt(GTValues.VA[GTValues.EV]);
})