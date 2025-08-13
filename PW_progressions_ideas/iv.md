Cryo Zirconium Binding Solution
Machine: Mixer

Item Inputs: 2x gtceu:crystallized_fluxstone_dust, 1x gtceu:zirconium_dust

Fluid Inputs: kubejs:frost 288, minecraft:water 2000

Fluid Outputs: gtceu:cryo_zirconium_binding_solution 2000

Duration: 150 ticks

EUt: GTValues.VA[GTValues.EV]

Cryo Graphite Binding Solution
Machine: Mixer

Item Inputs: 2x gtceu:crystallized_fluxstone_dust, 1x gtceu:graphite_dust

Fluid Inputs: kubejs:frost 288, minecraft:water 2000

Fluid Outputs: gtceu:cryo_graphite_binding_solution 3000

Duration: 175 ticks

EUt: GTValues.VA[GTValues.EV]

Thorium Fuel Pellet Crafting
Machine: Large Chemical Reactor

Item Inputs: 9x gtceu:thorium_nugget

Fluid Inputs: gtceu:cryo_graphite_binding_solution 1000

Item Outputs: 9x kubejs:thorium_fuel_pellet

Duration: 100 ticks

EUt: GTValues.VA[GTValues.MV]

Uranium-235 Fuel Pellet Crafting
Machine: Large Chemical Reactor

Item Inputs: 9x gtceu:uranium_235_nugget

Fluid Inputs: gtceu:cryo_zirconium_binding_solution 1000

Item Outputs: 9x kubejs:uranium_235_fuel_pellet

Duration: 100 ticks

EUt: GTValues.VA[GTValues.MV]

Uranium-233 Fuel Pellet Crafting
Machine: Large Chemical Reactor

Item Inputs: 9x gtceu:uranium_233_nugget

Fluid Inputs: gtceu:cryo_zirconium_binding_solution 1000

Item Outputs: 9x kubejs:u233_fuel_pellet

Duration: 100 ticks

EUt: GTValues.VA[GTValues.MV]

Plutonium-241 Fuel Pellet Crafting
Machine: Large Chemical Reactor

Item Inputs: 9x gtceu:plutonium_241_nugget

Fluid Inputs: gtceu:cryo_zirconium_binding_solution 1000

Item Outputs: 9x kubejs:plutonium_241_fuel_pellet

Duration: 100 ticks

EUt: GTValues.VA[GTValues.IV]

Uranium-236 Fuel Pellet Crafting
Machine: Large Chemical Reactor

Item Inputs: 9x gtceu:uranium_236_nugget

Fluid Inputs: gtceu:cryo_graphite_binding_solution 1000

Item Outputs: 9x kubejs:u236_fuel_pellet

Duration: 100 ticks

EUt: GTValues.VA[GTValues.IV]

Breeder Reactor Recipes
Plutonium/Uranium-236 Cycle
Machine: High Performance Breeder Reactor

Item Inputs: 4x kubejs:u236_fuel_pellet, 1x kubejs:plutonium_241_fuel_pellet

Fluid Inputs: gtceu:sodium_potassium 64000, minecraft:water 60000

Item Outputs: 4x gtceu:irradiated_uranium_236_nugget, 1x gtceu:depleted_plutonium_241_nugget

Fluid Outputs: gtceu:hot_sodium_potassium 64000, gtceu:critical_steam 120000

Duration: 360 ticks

EUt: -GTValues.VA[GTValues.UHV] * 2

Thorium/Uranium-233 Cycle with U-235 Driver
Machine: High Performance Breeder Reactor

Item Inputs: 4x kubejs:thorium_fuel_pellet, 1x kubejs:u235_fuel_pellet

Fluid Inputs: gtceu:sodium_potassium 500, minecraft:water 250

Item Outputs: 4x gtceu:irradiated_thorium_nugget, 1x gtceu:spent_uranium_235_nugget

Fluid Outputs: gtceu:hot_sodium_potassium 500, gtceu:critical_steam 1000

Duration: 140 ticks

EUt: -GTValues.VA[GTValues.ZPM] * 2

Thorium/Uranium-233 Cycle with U-233 Driver
Machine: High Performance Breeder Reactor

Item Inputs: 4x kubejs:thorium_fuel_pellet, 1x kubejs:u233_fuel_pellet

Fluid Inputs: gtceu:sodium_potassium 500, minecraft:water 250

Item Outputs: 4x gtceu:irradiated_thorium_nugget, 1x gtceu:spent_uranium_233_nugget

Fluid Outputs: gtceu:hot_sodium_potassium 500, gtceu:critical_steam 1000

Duration: 240 ticks

EUt: -GTValues.VA[GTValues.UV] * 2

Reprocessing and Byproduct Recipes
Reprocessing Spent Uranium-235 Rods
Machine: Large Chemical Reactor

Item Inputs: 16x gtceu:spent_uranium_235_nugget

Fluid Inputs: gtceu:nitric_acid 200

Item Outputs: 10x gtceu:depleted_uranium_dust, 6x gtceu:uranium_235_dust

Fluid Outputs: gtceu:fission_products_fluid 100

Duration: 400 ticks

EUt: GTValues.VA[GTValues.HV]

Reprocessing Irradiated Uranium-236 Nuggets
Machine: Large Chemical Reactor

Item Inputs: 16x gtceu:irradiated_uranium_236_nugget

Fluid Inputs: gtceu:nitric_acid 1000

Item Outputs: 10x gtceu:spent_uranium_236_dust, 8x gtceu:plutonium_fission_ash_dust

Duration: 300 ticks

EUt: GTValues.VA[GTValues.IV]

Reprocessing Depleted Plutonium-241 Nuggets
Machine: Large Chemical Reactor

Item Inputs: 4x gtceu:depleted_plutonium_241_nugget

Fluid Inputs: gtceu:nitric_acid 500

Item Outputs: 2x gtceu:plutonium_241_dust, 1x gtceu:americium_241_dust, 4x gtceu:depleted_plutonium_dust, 7x gtceu:plutonium_fission_ash_dust

Duration: 200 ticks

EUt: GTValues.VA[GTValues.IV]

Reprocessing Irradiated Thorium Rods to Uranium-233
Machine: Large Chemical Reactor

Item Inputs: 16x gtceu:irradiated_thorium_nugget

Fluid Inputs: gtceu:nitric_acid 500

Item Outputs: 4x gtceu:uranium_233_dust, 12x gtceu:depleted_thorium_dust

Fluid Outputs: gtceu:fission_products_fluid 250

Duration: 600 ticks

EUt: GTValues.VA[GTValues.EV]

Reprocessing Spent Uranium-233 Rods
Machine: Large Chemical Reactor

Item Inputs: 16x gtceu:spent_uranium_233_nugget

Fluid Inputs: gtceu:nitric_acid 200

Item Outputs: 14x gtceu:uranium_233_dust, 4x gtceu:depleted_uranium_dust

Fluid Outputs: gtceu:fission_products_fluid 100

Duration: 400 ticks

EUt: GTValues.VA[GTValues.EV]

Spent Uranium Reprocessing
Machine: Large Chemical Reactor

Item Inputs: 4x gtceu:depleted_uranium_dust

Fluid Inputs: gtceu:nitric_acid 1500

Item Outputs: 2x gtceu:uranium_236_dust, 1x gtceu:strontium_dust, 1x gtceu:caesium_dust

Fluid Outputs: gtceu:fission_products_fluid 500, gtceu:radioactive_gas_mixture 100

Duration: 120 ticks

EUt: GTValues.VA[GTValues.IV]

Fission Products Fluid Processing
Machine: Distillation Tower

Fluid Inputs: gtceu:fission_products_fluid 1000

Item Outputs: 2x gtceu:fissile_ash_dust

Fluid Outputs: gtceu:radioactive_gas_mixture 500

Duration: 400 ticks

EUt: GTValues.VA[GTValues.EV]

Radioactive Gas Mixture Separation
Machine: Centrifuge

Fluid Inputs: gtceu:radioactive_gas_mixture 500, gtceu:nitrogen 100

Fluid Outputs: gtceu:xenon 100, gtceu:iodine 150, gtceu:krypton 50, gtceu:inert_gas_waste 250

Duration: 150 ticks

EUt: GTValues.VA[GTValues.IV]

Plutonium Fission Ash Dissolution
Machine: Large Chemical Reactor

Item Inputs: 4x gtceu:plutonium_fission_ash_dust

Fluid Inputs: gtceu:aqua_regia 500, gtceu:hydrofluoric_acid 200

Fluid Outputs: gtceu:rhodium_palladium_solution 250, gtceu:technetium_strontium_solution 250, gtceu:radioactive_sludge 100, gtceu:gaseous_fission_byproducts 100

Duration: 600 ticks

EUt: GTValues.VA[GTValues.LuV]

Rhodium and Palladium Extraction from Solution
Machine: Chemical Reactor

Fluid Inputs: gtceu:rhodium_palladium_solution 250, gtceu:chlorine 100

Item Outputs: 1x gtceu:rhodium_dust, 1x gtceu:palladium_dust

Fluid Outputs: gtceu:acidic_waste 50

Duration: 200 ticks

EUt: GTValues.VA[GTValues.IV]

Technetium and Strontium Separation
Machine: Centrifuge

Fluid Inputs: gtceu:technetium_strontium_solution 250

Item Outputs: 1x gtceu:technetium_dust, 1x gtceu:strontium_dust

Fluid Outputs: gtceu:radioactive_sludge 25

Duration: 150 ticks

EUt: GTValues.VA[GTValues.IV]

Gaseous Fission Byproducts Separation
Machine: Distillation Tower

Fluid Inputs: gtceu:gaseous_fission_byproducts 1000

Fluid Outputs: gtceu:krypton 100, gtceu:xenon 150, gtceu:iodine 50, gtceu:trace_fission_gases 700

Duration: 250 ticks

EUt: GTValues.VA[GTValues.IV]

Radioactive Sludge Processing
Machine: Centrifuge

Fluid Inputs: gtceu:radioactive_sludge 1000, minecraft:water 500

Item Outputs: 1x gtceu:rare_earth_dust, 1x gtceu:trace_actinide_dust

Fluid Outputs: gtceu:purified_radioactive_waste_fluid 250

Duration: 400 ticks

EUt: GTValues.VA[GTValues.LuV]

Depleted Plutonium Recycling
Machine: Large Chemical Reactor

Item Inputs: 8x gtceu:depleted_plutonium

Fluid Inputs: gtceu:nitric_acid 500, gtceu:fluorine 100

Item Outputs: 2x gtceu:plutonium_dust

Fluid Outputs: gtceu:radioactive_waste_fluid 100

Duration: 500 ticks

EUt: GTValues.VA[GTValues.LuV]

Fissile Ash Processing
Machine: Centrifuge

Item Inputs: 2x gtceu:fissile_ash_dust

Fluid Inputs: gtceu:aqua_regia 100

Item Outputs: 1x gtceu:technetium_dust, 4x gtceu:rare_earth_dust

Fluid Outputs: gtceu:radioactive_sludge 50

Duration: 300 ticks

EUt: GTValues.VA[GTValues.IV]

Depleted Thorium Recycling
Machine: Electric Blast Furnace

Item Inputs: 4x gtceu:depleted_thorium_ingot

Fluid Inputs: gtceu:fluorine 250

Item Outputs: 3x gtceu:thorium_dust

Fluid Outputs: gtceu:radioactive_sludge 250

Duration: 300 ticks

EUt: GTValues.VA[GTValues.EV]

Blast Furnace Temp: 1200