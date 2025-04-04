/// M O N I F A C T O R Y   C O D E /// M O N I F A C T O R Y   C O D E ///
/// M O N I F A C T O R Y   C O D E /// M O N I F A C T O R Y   C O D E ///
/// M O N I F A C T O R Y   C O D E /// M O N I F A C T O R Y   C O D E ///


ServerEvents.recipes(event => {
    const converter = [
        ['uev', 'cosmic_neutronium', 'draconium', '33554432'],
        ['uiv', 'awakened_draconium', 'chaos', '134217728'],
    ]
    const transformer = [
        ['uhv', 'ruthenium_trinium_americium_neutronate', 'crystal_matrix'],
        ['uev', 'cosmic_neutronium', 'draconium'],
        ['uiv', 'awakened_draconium', 'chaos'],
    ]
    // no MAX tier laserhatch :1984:
    const laserhatch = [
        ['uev', 'draconium', '1966080'],
        ['uiv', 'awakened_draconium', '3932160'],
    ]

        converter.forEach(([tier, mat1, mat2, eut]) => {
            event.remove({ output:[`gtceu:${tier}_1a_energy_converter`, `gtceu:${tier}_4a_energy_converter`, `gtceu:${tier}_8a_energy_converter`, `gtceu:${tier}_16a_energy_converter` ] })
            event.shaped(Item.of(`gtceu:${tier}_1a_energy_converter`), [
                ' BB',
                'AHC',
                ' BB'
            ], {
                A: `gtceu:red_alloy_single_wire`,
                B: `gtceu:${mat2}_single_wire`,
                H: `gtceu:${tier}_machine_hull`,
                C: `#gtceu:circuits/${tier}`
            })


            event.shaped(Item.of(`gtceu:${tier}_4a_energy_converter`), [
                ' BB',
                'AHC',
                ' BB'
            ], {
                A: `gtceu:red_alloy_quadruple_wire`,
                B: `gtceu:${mat2}_quadruple_wire`,
                H: `gtceu:${tier}_machine_hull`,
                C: `#gtceu:circuits/${tier}`
            })

            event.shaped(Item.of(`gtceu:${tier}_8a_energy_converter`), [
                ' BB',
                'AHC',
                ' BB'
            ], {
                A: `gtceu:red_alloy_octal_wire`,
                B: `gtceu:${mat2}_octal_wire`,
                H: `gtceu:${tier}_machine_hull`,
                C: `#gtceu:circuits/${tier}`
            })

            event.shaped(Item.of(`gtceu:${tier}_16a_energy_converter`), [
                ' BB',
                'AHC',
                ' BB'
            ], {
                A: `gtceu:red_alloy_hex_wire`,
                B: `gtceu:${mat2}_hex_wire`,
                H: `gtceu:${tier}_machine_hull`,
                C: `#gtceu:circuits/${tier}`
            })
        })

        transformer.forEach(([tier, mat1, mat2]) => {
            event.shaped(Item.of(`gtceu:${tier}_transformer_1a`), [
                'WBB',
                'AH ',
                'WBB'
            ], {
                A: `gtceu:${mat1}_single_wire`,
                B: `gtceu:${mat2}_single_wire`,
                H: `gtceu:${tier}_machine_hull`,
                W: 'kubejs:highly_resonative_soc'
            })

            event.shaped(Item.of(`gtceu:${tier}_transformer_2a`), [
                'WBB',
                'AH ',
                'WBB'
            ], {
                A: `gtceu:${mat1}_double_wire`,
                B: `gtceu:${mat2}_double_wire`,
                H: `gtceu:${tier}_machine_hull`,
                W: 'kubejs:highly_resonative_soc'
            })

            event.shaped(Item.of(`gtceu:${tier}_transformer_4a`), [
                'WBB',
                'AH ',
                'WBB'
            ], {
                A: `gtceu:${mat1}_quadruple_wire`,
                B: `gtceu:${mat2}_quadruple_wire`,
                H: `gtceu:${tier}_machine_hull`,
                W: 'kubejs:highly_resonative_soc'
            })

            event.shaped(Item.of(`gtceu:${tier}_transformer_16a`), [
                'WBB',
                'AH ',
                'WBB'
            ], {
                A: `gtceu:${mat1}_hex_wire`,
                B: `gtceu:${mat2}_hex_wire`,
                H: `gtceu:${tier}_machine_hull`,
                W: 'kubejs:highly_resonative_soc'
            })
        })


    laserhatch.forEach(([tier, mat1, eut]) => {
        event.recipes.gtceu.assembler(`${tier}_256a_laser_target_hatch`)
            .itemInputs(`gtceu:${tier}_machine_hull`, 'gtceu:diamond_lens', `gtceu:${tier}_emitter`, `gtceu:${tier}_electric_pump`, `4x gtceu:${mat1}_single_wire`)
            .itemOutputs(`gtceu:${tier}_256a_laser_target_hatch`)
            .circuit(1)
            .duration(400)
            .EUt(eut)

        event.recipes.gtceu.assembler(`${tier}_256a_laser_source_hatch`)
            .itemInputs(`gtceu:${tier}_machine_hull`, 'gtceu:diamond_lens', `gtceu:${tier}_sensor`, `gtceu:${tier}_electric_pump`, `4x gtceu:${mat1}_single_wire`)
            .itemOutputs(`gtceu:${tier}_256a_laser_source_hatch`)
            .circuit(1)
            .duration(400)
            .EUt(eut)

        event.recipes.gtceu.assembler(`${tier}_1024a_laser_target_hatch`)
            .itemInputs(`gtceu:${tier}_machine_hull`, '2x gtceu:diamond_lens', `2x gtceu:${tier}_emitter`, `2x gtceu:${tier}_electric_pump`, `4x gtceu:${mat1}_single_wire`)
            .itemOutputs(`gtceu:${tier}_1024a_laser_target_hatch`)
            .circuit(2)
            .duration(400)
            .EUt(eut)

        event.recipes.gtceu.assembler(`${tier}_1024a_laser_source_hatch`)
            .itemInputs(`gtceu:${tier}_machine_hull`, '2x gtceu:diamond_lens', `2x gtceu:${tier}_sensor`, `2x gtceu:${tier}_electric_pump`, `4x gtceu:${mat1}_double_wire`)
            .itemOutputs(`gtceu:${tier}_1024a_laser_source_hatch`)
            .circuit(2)
            .duration(400)
            .EUt(eut)

        event.recipes.gtceu.assembler(`${tier}_4096a_laser_target_hatch`)
            .itemInputs(`gtceu:${tier}_machine_hull`, '4x gtceu:diamond_lens', `4x gtceu:${tier}_emitter`, `4x gtceu:${tier}_electric_pump`, `4x gtceu:${mat1}_quadruple_wire`)
            .itemOutputs(`gtceu:${tier}_4096a_laser_target_hatch`)
            .circuit(3)
            .duration(400)
            .EUt(eut)

        event.recipes.gtceu.assembler(`${tier}_4096a_laser_source_hatch`)
            .itemInputs(`gtceu:${tier}_machine_hull`, '4x gtceu:diamond_lens', `4x gtceu:${tier}_sensor`, `4x gtceu:${tier}_electric_pump`, `4x gtceu:${mat1}_quadruple_wire`)
            .itemOutputs(`gtceu:${tier}_4096a_laser_source_hatch`)
            .circuit(3)
            .duration(400)
            .EUt(eut)
    })

})
//
ServerEvents.recipes(sog => {


    sog.recipes.gtceu.quantum_station('qdm')
            .inputFluids('gtceu:oganesson 32', 'gtceu:nihonium 32')
            .itemInputs('gtceu:data_module')
            .itemOutputs('kubejs:quantum_data_module')
            .EUt((GTValues.VA[GTValues.UEV]))
            .totalCWU(256*500)
            .CWUt(256)

                sog.recipes.gtceu.hgim("kubejs:space_time_heavy_plating")
                .notConsumable('kubejs:gravitational_containment_cell')
                .itemInputs('7x gtceu:dense_hypoxylon_plate', 'kubejs:quantum_energy_capsule')
                .itemInputs("31x gtceu:double_space_time_plate")
                .inputFluids("gtceu:nihonium 144*16", "gtceu:oganesson 144*16")
                .itemOutputs("kubejs:space_time_heavy_plating")
                .EUt(GTValues.VA[GTValues.UIV])
                .duration(20*60)

            const plating = ["neutronium", "chaos", "infinity", "cosmic_neutronium", "draconium", "awakened_draconium", "californite"]
            plating.forEach((plate) => {
            sog.recipes.gtceu.hgim("kubejs:" + plate + "_heavy_plating")
                .notConsumable('kubejs:gravitational_containment_cell')
                .itemInputs('7x gtceu:dense_hypoxylon_plate', 'kubejs:quantum_energy_capsule')
                .itemInputs("7x gtceu:dense_" + plate + "_plate")
                .inputFluids("gtceu:nihonium 144*16", "gtceu:oganesson 144*16")
                .itemOutputs("kubejs:" + plate + "_heavy_plating")
                .EUt(GTValues.VA[GTValues.UEV])
                .duration(20*60)




        })










})