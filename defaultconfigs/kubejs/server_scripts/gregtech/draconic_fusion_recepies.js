ServerEvents.recipes(allthemods => {



    allthemods.recipes.gtceu.assembly_line('compact_draconic_fusion_reactor_1')
        .itemInputs('4x #gtceu:circuits/zpm', 
            '64x gtceu:uhpic_chip',
            'gtceu:double_plutonium_241_plate',
                'gtceu:double_osmiridium_plate',
            '4x draconicevolution:awakened_draconium_block',
            '4x gtceu:luv_field_generator',
            '32x gtceu:indium_tin_barium_titanium_cuprate_single_wire',
            '8x draconicevolution:wyvern_core')
        .inputFluids('gtceu:soldering_alloy 1152','gtceu:niobium_titanium 1152')
        .itemOutputs('gtceu:compact_draconic_fusion_reactor_mk1')
        .duration(600)
        .EUt(29723)
        .stationResearch(b => b.researchStack(Item.of('draconicevolution:reactor_core')).EUt(30720).CWUt(16, 32000))
    
        allthemods.recipes.gtceu.assembly_line('compact_draconic_fusion_reactor_2')
        .itemInputs('4x #gtceu:circuits/uv',
                '96x gtceu:uhpic_chip',
                'gtceu:double_europium_plate',
                'gtceu:double_naquadria_plate',
                '8x draconicevolution:awakened_draconium_block',
                '4x gtceu:zpm_field_generator',
                '32x gtceu:uranium_rhodium_dinaquadide_single_wire',
                '8x draconicevolution:awakened_core')
        .inputFluids('gtceu:soldering_alloy 1500','gtceu:vanadium_gallium 1500')
        .itemOutputs('gtceu:compact_draconic_fusion_reactor_mk2')
        .duration(600)
        .EUt(120072)
        .stationResearch(b => b.researchStack(Item.of('gtceu:compact_draconic_fusion_reactor_mk1')).EUt(120720).CWUt(32, 64000))

        allthemods.recipes.gtceu.assembly_line('compact_draconic_fusion_reactor_3')
        .itemInputs('4x #gtceu:circuits/uhv',
                'gtceu:double_americium_plate',
                
                '128x gtceu:uhpic_chip', 
                '16x draconicevolution:awakened_draconium_block',
                '4x gtceu:uv_field_generator',
                '32x gtceu:enriched_naquadah_trinium_europium_duranide_single_wire',
                '8x draconicevolution:chaotic_core')
        .inputFluids('gtceu:soldering_alloy 1500','gtceu:yttrium_barium_cuprate 1500')
        .itemOutputs('gtceu:compact_draconic_fusion_reactor_mk3')
        .duration(800)
        .EUt(500288)
        .stationResearch(b => b.researchStack(Item.of('gtceu:compact_draconic_fusion_reactor_mk2')).EUt(340900).CWUt(64, 128000))
        //mk1
        allthemods.recipes.gtceu.draconic_mk1('draconic_conversion_mk1')
        .circuit(1)
        .itemInputs('4x draconicevolution:awakened_draconium_block')
        .itemOutputs('4x draconicevolution:large_chaos_frag')
        .duration(180000)
        .EUt(-524288)

        allthemods.recipes.gtceu.draconic_mk1('draconic_boosted_conversion_mk1')
        .circuit(2)
        .itemInputs('4x draconicevolution:awakened_draconium_block','4x draconicevolution:large_chaos_frag')
        .itemOutputs('6x draconicevolution:large_chaos_frag')
        .duration(90000)
        .EUt(-1572864)
        //mk2
        allthemods.recipes.gtceu.draconic_mk2('draconic_conversion_mk2')
        .circuit(1)
        .itemInputs('8x draconicevolution:awakened_draconium_block')
        .itemOutputs('8x draconicevolution:large_chaos_frag')
        .duration(180000)
        .EUt(-2097152)

        allthemods.recipes.gtceu.draconic_mk2('draconic_boosted_conversion_mk2')
        .circuit(2)
        .itemInputs('8x draconicevolution:awakened_draconium_block','8x draconicevolution:large_chaos_frag')
        .itemOutputs('12x draconicevolution:large_chaos_frag')
        .duration(90000)
        .EUt(-6291456)
        //mk3
        allthemods.recipes.gtceu.draconic_mk3('draconic_conversion_mk3')
        .circuit(1)
        .itemInputs('16x draconicevolution:awakened_draconium_block')
        .itemOutputs('16x draconicevolution:large_chaos_frag')
        .duration(180000)
        .EUt(-8388608)

        allthemods.recipes.gtceu.draconic_mk3('draconic_boosted_conversion_mk3')
        .circuit(2)
        .itemInputs('16x draconicevolution:awakened_draconium_block','16x draconicevolution:large_chaos_frag')
        .itemOutputs('24x draconicevolution:large_chaos_frag')
        .duration(90000)
        .EUt(-25165824)



})