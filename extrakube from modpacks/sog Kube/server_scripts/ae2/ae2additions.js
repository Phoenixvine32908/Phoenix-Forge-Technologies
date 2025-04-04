ServerEvents.recipes(event => {
	event.shaped('ae2additions:super_cell_housing', [
    'ABA', 
    'B B', 
    'CDC'  
  ], {
    A: 'ae2:quartz_glass', 
    B: 'advanced_ae:quantum_infused_dust',  
    C: 'ae2:chest',
	D: 'advanced_ae:shattered_singularity',
  }
)
	
	let cellcomp = (input1, input2, output) => {	
		event.shaped(output, [
		'ABA', 
		'DCD', 
		'AEA'  
	], {
			A: 'gtceu:nether_star_dust', 
		B: input1,  
		C: input2,
		D: 'advanced_ae:quantum_processor',
		E: 'megacells:accumulation_processor'
	}
)
}
	
cellcomp('ae2:spatial_cell_component_2', 'megacells:cell_component_1m', 'ae2additions:cell_component_1024')
cellcomp('ae2:spatial_cell_component_2', 'megacells:cell_component_4m', 'ae2additions:cell_component_4096')
cellcomp('ae2:spatial_cell_component_16', 'megacells:cell_component_16m', 'ae2additions:cell_component_16384')
cellcomp('ae2:spatial_cell_component_128', 'megacells:cell_component_64m', 'ae2additions:cell_component_65536')

	let supercellcomp = (input1, input2, input3, output) => {
		event.shaped(output, [
		'ABA', 
		'CDC', 
		'AEA'  
	], {
		A: input1, 
		B: 'ae2:engineering_processor',  
		C: input2,
		D: input3,
		E: 'advanced_ae:quantum_processor'
	}
)
}

supercellcomp('#gtceu:circuits/lv','ae2:cell_component_1k','ae2:spatial_cell_component_2','ae2additions:super_cell_component_1k')
supercellcomp('#gtceu:circuits/mv','ae2:cell_component_4k','ae2:spatial_cell_component_2','ae2additions:super_cell_component_4k')
supercellcomp('#gtceu:circuits/hv','ae2:cell_component_16k','ae2:spatial_cell_component_2','ae2additions:super_cell_component_16k')
supercellcomp('#gtceu:circuits/ev','ae2:cell_component_64k','ae2:spatial_cell_component_16','ae2additions:super_cell_component_64k')
supercellcomp('#gtceu:circuits/iv','ae2:cell_component_256k','ae2:spatial_cell_component_16','ae2additions:super_cell_component_256k')
supercellcomp('#gtceu:circuits/luv','megacells:cell_component_1m','ae2:spatial_cell_component_16','ae2additions:super_cell_component_1024k')
supercellcomp('#gtceu:circuits/zpm','megacells:cell_component_4m','ae2:spatial_cell_component_128','ae2additions:super_cell_component_4096k')
supercellcomp('#gtceu:circuits/uv','megacells:cell_component_16m','ae2:spatial_cell_component_128','ae2additions:super_cell_component_16m')
supercellcomp('#gtceu:circuits/uhv','megacells:cell_component_64m','ae2:spatial_cell_component_128','ae2additions:super_cell_component_65m')

	 let Super_cells = (output, input_comp) => {
    	event.shaped(output, [
    'ABA', 
    'BEB', 
    'CDC'  
  ], {
    A: 'ae2:quartz_glass', 
    B: 'advanced_ae:quantum_infused_dust',  
    C: 'ae2:chest',
	D: 'advanced_ae:shattered_singularity',
	E: input_comp
  })
		event.shapeless(output, [ 
  input_comp,
  'ae2additions:super_cell_housing'
  ])
}
	Super_cells( 'ae2additions:super_cell_1k', 'ae2additions:super_cell_component_1k')
	Super_cells( 'ae2additions:super_cell_4k', 'ae2additions:super_cell_component_4k')
	Super_cells( 'ae2additions:super_cell_16k', 'ae2additions:super_cell_component_16k')
	Super_cells( 'ae2additions:super_cell_64k', 'ae2additions:super_cell_component_64k')
	Super_cells( 'ae2additions:super_cell_256k', 'ae2additions:super_cell_component_256k')
	Super_cells( 'ae2additions:super_cell_1024k', 'ae2additions:super_cell_component_1024k')
	Super_cells( 'ae2additions:super_cell_4096k', 'ae2additions:super_cell_component_4096k')
	Super_cells( 'ae2additions:super_cell_16m', 'ae2additions:super_cell_component_16m')
	Super_cells( 'ae2additions:super_cell_65m', 'ae2additions:super_cell_component_65m')
	
})
