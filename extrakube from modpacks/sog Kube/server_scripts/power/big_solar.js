
ServerEvents.recipes(event => {

////// Machine Recipe //////

event.shaped(
    'gtceu:large_solar_panel',
    ['AWA', 'WZW', 'AWA'],
    {
        A: 'solarflux:photovoltaic_cell_1',
        W: '#gtceu:circuits/hv',
        Z: 'gtceu:clean_machine_casing'
    }
).id('gtceu:shaped/large_solar_panel')


////// SOLAR Recipes //////

function Solar(id, input, EU, circuit) {{
          {
        event.recipes.gtceu.large_solar_panel(id)
            .circuit(circuit)
            .notConsumable(InputItem.of(input))
            .duration(200)
            .EUt(-EU)
          }
}}



// T1
Solar('solar_t1_1', '4x solarflux:sp_1', 4*GTValues.V[GTValues.ULV], 1)
Solar('solar_t1_4', '16x solarflux:sp_1', 16*GTValues.V[GTValues.ULV], 4)
Solar('solar_t1_16', '64x solarflux:sp_1', 64*GTValues.V[GTValues.ULV], 16)
// T2
Solar('solar_t2_1', '4x solarflux:sp_2', 4*GTValues.V[GTValues.LV], 1)
Solar('solar_t2_4', '16x solarflux:sp_2', 16*GTValues.V[GTValues.LV], 4)
Solar('solar_t2_16', '64x solarflux:sp_2', 64*GTValues.V[GTValues.LV], 16)
// T3
Solar('solar_t3_1', '4x solarflux:sp_3', 4*GTValues.V[GTValues.MV], 1)
Solar('solar_t3_4', '16x solarflux:sp_3', 16*GTValues.V[GTValues.MV], 4)
Solar('solar_t3_16', '64x solarflux:sp_3', 64*GTValues.V[GTValues.MV], 16)
// T4
Solar('solar_t4_1', '4x solarflux:sp_4', 4*GTValues.V[GTValues.HV], 1)
Solar('solar_t4_4', '16x solarflux:sp_4', 16*GTValues.V[GTValues.HV], 4)
Solar('solar_t4_16', '64x solarflux:sp_4', 64*GTValues.V[GTValues.HV], 16)
// T5
Solar('solar_t5_1', '4x solarflux:sp_5', 4*GTValues.V[GTValues.EV], 1)
Solar('solar_t5_4', '16x solarflux:sp_5', 16*GTValues.V[GTValues.EV], 4)
Solar('solar_t5_16', '64x solarflux:sp_5', 64*GTValues.V[GTValues.EV], 16)
// T6
Solar('solar_t6_1', '4x solarflux:sp_6', 4*GTValues.V[GTValues.IV], 1)
Solar('solar_t6_4', '16x solarflux:sp_6', 16*GTValues.V[GTValues.IV], 4)
Solar('solar_t6_16', '64x solarflux:sp_6', 64*GTValues.V[GTValues.IV], 16)
// T7
Solar('solar_t7_1', '4x solarflux:sp_7', 4*GTValues.V[GTValues.LuV], 1)
Solar('solar_t7_4', '16x solarflux:sp_7', 16*GTValues.V[GTValues.LuV], 4)
Solar('solar_t7_16', '64x solarflux:sp_7', 64*GTValues.V[GTValues.LuV], 16)
// T8
Solar('solar_t8_1', '4x solarflux:sp_8', 4*GTValues.V[GTValues.ZPM], 1)
Solar('solar_t8_4', '16x solarflux:sp_8', 16*GTValues.V[GTValues.ZPM], 4)
Solar('solar_t8_16', '64x solarflux:sp_8', 64*GTValues.V[GTValues.ZPM], 16)

})