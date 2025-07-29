// Removing of tooltips containing "gtceu"

const translationKeysToRemove = [
    "gtceu.multiblock.parallelizable.tooltip",
    "gtceu.machine.large_chemical_reactor.tooltip",
    "gtceu.machine.vacuum_freezer.tooltip",
    "gtceu.machine.implosion_compressor.tooltip",
    "gtceu.machine.cracker.tooltip",
    "gtceu.machine.cracker.tooltip.1",
    "gtceu.machine.pyrolyse_oven.tooltip",
    "gtceu.machine.pyrolyse_oven.tooltip.1",
    "gtceu.machine.electric_blast_furnace.tooltip.0",
    "gtceu.machine.electric_blast_furnace.tooltip.1",
    "gtceu.machine.electric_blast_furnace.tooltip.2",
    "gtceu.machine.distillation_tower.tooltip",
    "gtceu.machine.electric_blast_furnace.tooltip",
    "gtceu.machine.steam_oven.tooltip",
    "gtceu.machine.steam_grinder.tooltip",
    "gtceu.machine.coke_oven.tooltip",
    "gtceu.multiblock.exact_hatch_1.tooltip",
    "gtceu.machine.assembly_line.tooltip"
]
Array.from(Array(4).keys()).forEach(i => {
    const template = "gtceu.machine.available_recipe_map_INDEX.tooltip"
    translationKeysToRemove.push(template.replace("INDEX", `${i + 1}`))
})
ItemEvents.tooltip(event=>{
    const gtceuItems = Ingredient.of("@gtceu").itemIds.toArray().map(id  => `${id}`)
    event.addAdvanced(gtceuItems, (item, advanced, text)=>{
        text.removeIf(component => {
            const translate = JSON.parse(component.toJson().toString()).translate
            if(!translate) return false
            return translationKeysToRemove.indexOf(`${translate}`) != -1
        })
    })
    event.addAdvanced('gtceu:multi_smelter', (item, advanced, text)=>{
        text.removeIf(component => {
            const translate = JSON.parse(component.toJson().toString()).translate
            if(!translate) return false
            return translate.includes("gtceu.machine.available_recipe_map_")
        })
    })
})

// Const for general Tooltips

const WATERTIGHT_CASING_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any Watertight Casing",
    fluidinput: "§7Any Watertight Casing",
    itemoutput: "§7Any Watertight Casing",
    fluidoutput: "§7Any Watertight Casing",
    energy: "§7Any Watertight Casing",
    maintenance: "§7Any Watertight Casing",
    muffler: "§7Any Watertight Casing",
    pch: "§7Any Watertight Casing"
};
const WATERTIGHT_CASING_DT_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any first two layer (Watertight Casing)",
    fluidinput: "§7Any first two layer (Watertight Casing)",
    itemoutput: "§7Any first two layer (Watertight Casing)",
    fluidoutput: "§7Any layer except first two (Watertight Casing - one per layer)",
    energy: "§7Any first two layer (Watertight Casing)",
    maintenance: "§7Any first two layer (Watertight Casing)",
    muffler: "§7Top Center",
    pch: "§7Any first two layer (Watertight Casing)"
};
const LARGE_SCALE_ASSEMBLER_CASING_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any Large-Scale Assembler Casing",
    fluidinput: "§7Any Large-Scale Assembler Casing",
    itemoutput: "§7Any Large-Scale Assembler Casing",
    fluidoutput: "§7Any Large-Scale Assembler Casing",
    energy: "§7Any Large-Scale Assembler Casing",
    maintenance: "§7Any Large-Scale Assembler Casing",
    pch: "§7Any Large-Scale Assembler Casing"
};
const STRESS_PROOF_CASING_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any Stress Proof Casing",
    fluidinput: "§7Any Stress Proof Casing",
    itemoutput: "§7Any Stress Proof Casing",
    fluidoutput: "§7Any Stress Proof Casing",
    energy: "§7Any Stress Proof Casing",
    maintenance: "§7Any Stress Proof Casing",
    pch: "§7Any Stress Proof Casing"
};
const NONCONDUCTING_CASING_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any Nonconducting Casing",
    fluidinput: "§7Any Nonconducting Casing",
    itemoutput: "§7Any Nonconducting Casing",
    fluidoutput: "§7Any Nonconducting Casing",
    energy: "§7Any Nonconducting Casing",
    maintenance: "§7Any Nonconducting Casing",
    pch: "§7Any Nonconducting Casing"
};
const VIBRATION_SAFE_CASING_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any Vibration-Safe Casing",
    fluidinput: "§7Any Vibration-Safe Casing",
    itemoutput: "§7Any Vibration-Safe Casing",
    fluidoutput: "§7Any Vibration-Safe Casing",
    energy: "§7Any Vibration-Safe Casing",
    maintenance: "§7Any Vibration-Safe Casing",
    pch: "§7Any Vibration-Safe Casing"
};
const HIGH_TEMPERATURE_SMELTING_CASING_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any High Temperature Smelting Casing",
    fluidinput: "§7Any High Temperature Smelting Casing",
    itemoutput: "§7Any High Temperature Smelting Casing",
    fluidoutput: "§7Any High Temperature Smelting Casing",
    energy: "§7Any High Temperature Smelting Casing",
    maintenance: "§7Any High Temperature Smelting Casing",
    muffler: "§7Top Center",
    pch: "§7Any High Temperature Smelting Casing"
};
const HIGH_TEMPERATURE_SMELTING_CASING_RHF_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any High Temperature Smelting Casing at the bottom",
    fluidinput: "§7Any High Temperature Smelting Casing at the bottom",
    itemoutput: "§7Any High Temperature Smelting Casing at the bottom",
    fluidoutput: "§7Any High Temperature Smelting Casing at the bottom",
    energy: "§7Any High Temperature Smelting Casing at the bottom",
    maintenance: "§7Any High Temperature Smelting Casing at the bottom",
    muffler: "§7Top Center",
    pch: "§7Any High Temperature Smelting Casing at the bottom"
};
const CORROSION_PROOF_CASING_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any Corrosion Proof Casing",
    fluidinput: "§7Any Corrosion Proof Casing",
    itemoutput: "§7Any Corrosion Proof Casing",
    fluidoutput: "§7Any Corrosion Proof Casing",
    energy: "§7Any Corrosion Proof Casing",
    maintenance: "§7Any Corrosion Proof Casing",
    muffler: "§7Top Center",
    pch: "§7Any Corrosion Proof Casing"
};
const SHOCK_PROOF_CUTTING_CASING_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any Shock Proof Cutting Casing",
    fluidinput: "§7Any Shock Proof Cutting Casing",
    itemoutput: "§7Any Shock Proof Cutting Casing",
    fluidoutput: "§7Any Shock Proof Cutting Casing",
    energy: "§7Any Shock Proof Cutting Casing",
    maintenance: "§7Any Shock Proof Cutting Casing",
    muffler: "§7Top Center",
    pch: "§7Any Shock Proof Cutting Casing"
};
const LASER_SAFE_ENGRAVING_CASING_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any Laser-Safe Engraving Casing",
    fluidinput: "§7Any Laser-Safe Engraving Casing",
    itemoutput: "§7Any Laser-Safe Engraving Casing",
    fluidoutput: "§7Any Laser-Safe Engraving Casing",
    energy: "§7Any Laser-Safe Engraving Casing",
    maintenance: "§7Any Laser-Safe Engraving Casing",
    muffler: "§7Top Center",
    pch: "§7Any Laser-Safe Engraving Casing"
};
const SECURE_MACERATION_CASING_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any Secure Maceration Casing",
    fluidinput: "§7Any Secure Maceration Casing",
    itemoutput: "§7Any Secure Maceration Casing",
    fluidoutput: "§7Any Secure Maceration Casing",
    energy: "§7Any Secure Maceration Casing",
    maintenance: "§7Any Secure Maceration Casing",
    muffler: "§7Top Center",
    pch: "§7Any Secure Maceration Casing"
};
const REACTION_SAFE_MIXING_CASING_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any Reaction-Safe Mixing Casing",
    fluidinput: "§7Any Reaction-Safe Mixing Casing",
    itemoutput: "§7Any Reaction-Safe Mixing Casing",
    fluidoutput: "§7Any Reaction-Safe Mixing Casing",
    energy: "§7Any Reaction-Safe Mixing Casing",
    maintenance: "§7Any Reaction-Safe Mixing Casing",
    muffler: "§7Top Center",
    pch: "§7Any Reaction-Safe Mixing Casing"
};
const ROBUST_TUNGSTENSTEEL_MACHINE_CASING_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any Robust Tungstensteel Machine Casing",
    fluidinput: "§7Any Robust Tungstensteel Machine Casing",
    itemoutput: "§7Any Robust Tungstensteel Machine Casing",
    fluidoutput: "§7Any Robust Tungstensteel Machine Casing",
    energy: "§7Any Robust Tungstensteel Machine Casing",
    maintenance: "§7Any Robust Tungstensteel Machine Casing",
    muffler: "§7Top Center",
    pch: "§7Any Robust Tungstensteel Machine Casing"
};
const FROST_PROOF_ALUMINIUM_MACHINE_CASING_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any Frost Proof Aluminium Machine Casing",
    fluidinput: "§7Any Frost Proof Aluminium Machine Casing",
    itemoutput: "§7Any Frost Proof Aluminium Machine Casing",
    fluidoutput: "§7Any Frost Proof Aluminium Machine Casing",
    energy: "§7Any Frost Proof Aluminium Machine Casing",
    maintenance: "§7Any Frost Proof Aluminium Machine Casing",
    muffler: "§7Top Center",
    pch: "§7Any Frost Proof Aluminium Machine Casing"
};
const CHEMICALLY_INERT_PTFE_MACHINE_CASING_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any Chemically Inert PTFE Machine Casing",
    fluidinput: "§7Any Chemically Inert PTFE Machine Casing",
    itemoutput: "§7Any Chemically Inert PTFE Machine Casing",
    fluidoutput: "§7Any Chemically Inert PTFE Machine Casing",
    energy: "§7Any Chemically Inert PTFE Machine Casing",
    maintenance: "§7Any Chemically Inert PTFE Machine Casing",
    muffler: "§7Top Center",
    pch: "§7Any Chemically Inert PTFE Machine Casing"
};
const SOLID_MACHINE_CASING_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any Solid Machine Casing",
    fluidinput: "§7Any Solid Machine Casing",
    itemoutput: "§7Any Solid Machine Casing",
    fluidoutput: "§7Any Solid Machine Casing",
    energy: "§7Any Solid Machine Casing",
    maintenance: "§7Any Solid Machine Casing",
    muffler: "§7Top Center",
    pch: "§7Any Solid Machine Casing"
};
const SOLID_MACHINE_CASING_ASSEMBLY_LINE_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Middle Solid Machine Casing every slice except last",
    fluidinput: "§7Any Solid Machine Casing at the bottom except middle ones",
    itemoutput: "§7Middle Solid Machine Casing last slice",
    fluidoutput: "§7Any Solid Machine Casing",
    energy: "§7Any Solid Machine Casing on top",
    maintenance: "§7Any Solid Machine Casing",
    muffler: "§7Top Center",
    pch: "§7Any Solid Machine Casing",
    datahatch: "§7Any Assembly Line Grating on controller side"
};
const CLEAN_STAINLESS_STEEL_CASING_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any Clean Stainless Steel Casing",
    fluidinput: "§7Any Clean Stainless Steel Casing",
    itemoutput: "§7Any Clean Stainless Steel Casing",
    fluidoutput: "§7Any Clean Stainless Steel Casing",
    energy: "§7Any Clean Stainless Steel Casing",
    maintenance: "§7Any Clean Stainless Steel Casing",
    muffler: "§7Any Clean Stainless Steel Casing",
    pch: "§7Any Clean Stainless Steel Casing"
};
const CLEAN_STAINLESS_STEEL_CASING_DT_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any Bottom Clean Stainless Steel Casing",
    fluidinput: "§7Any Bottom Clean Stainless Steel Casing",
    itemoutput: "§7Any Bottom Clean Stainless Steel Casing",
    fluidoutput: "§7Every Layer one output hatch",
    energy: "§7Any Bottom Clean Stainless Steel Casing",
    maintenance: "§7Any first two layers Clean Stainless Steel Casing",
    muffler: "§7Any Clean Stainless Steel Casing",
    pch: "§7Any Clean Stainless Steel Casing"
};
const ULV_MACHINE_CASING_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any ULV Machine Casing",
    fluidinput: "§7Any ULV Machine Casing",
    itemoutput: "§7Any ULV Machine Casing",
    fluidoutput: "§7Any ULV Machine Casing",
    energy: "§7Any ULV Machine Casing",
    maintenance: "§7Any ULV Machine Casing",
    muffler: "§7Any ULV Machine Casing",
    pch: "§7Any ULV Machine Casing"
};
const HEAT_PROOF_INVAR_MACHINE_CASING_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Any Heat Proof Invar Machine Casing",
    fluidinput: "§7Any Heat Proof Invar Machine Casing",
    itemoutput: "§7Any Heat Proof Invar Machine Casing",
    fluidoutput: "§7Any Heat Proof Invar Machine Casing",
    energy: "§7Any Heat Proof Invar Machine Casing",
    maintenance: "§7Any Heat Proof Invar Machine Casing",
    muffler: "§7Top Center",
    pch: "§7Any Heat Proof Invar Machine Casing"
};
const LOOK_AT_THE_MULTIBLOCK_PREVIEW = {
    controller: "§7Front"
};
const COKE_OVEN_BRICKS_TOOLTIP = {
    controller: "§7Front",
    iteminput: "§7Controller or Coke Oven Hatch",
    itemoutput: "§7Controller or Coke Oven Hatch",
    fluidoutput: "§7Controller or Coke Oven Hatch",
    cokeovenhatch: "§7Any Coke Oven Bricks"
};
const STEAM_MACHINE_CASING = {
    controller: "§7Front",
    steamiteminput: "§7Any Steam Machine Casing",
    steamitemoutput: "§7Any Steam Machine Casing",
    steamenergy: "§7Any Steam Machine Casing"
};
const STEAM_MACHINE_CASING_OVEN = {
    controller: "§7Front",
    steamiteminput: "§7Any Steam Machine Casing",
    steamitemoutput: "§7Any Steam Machine Casing",
    steamenergy: "§7Any Bronze Firebox Casing"
};

// Const for Tooltip Groups

const NON_SHIFT_TOOLTIP_GROUPS = {
    'PCH_SUBTICK_MULTIBLOCKS': {
        multiblockIds: [
            "gtceu:large_arc_smelter",
            "gtceu:large_assembler",
            "gtceu:large_autoclave",
            "gtceu:large_brewer",
            "gtceu:large_centrifuge",
            "gtceu:large_chemical_bath",
            "gtceu:large_circuit_assembler",
            "gtceu:large_cutter",
            "gtceu:large_electrolyzer",
            "gtceu:large_electromagnet",
            "gtceu:large_engraving_laser",
            "gtceu:large_maceration_tower",
            "gtceu:large_material_press",
            "gtceu:large_mixer",
            "gtceu:large_packer",
            "gtceu:large_sifting_funnel",
            "gtceu:large_solidifier",
            "gtceu:large_wiremill",
            "gtceu:large_distillery",
            "gtceu:large_extruder",
            "gtceu:large_extractor",
            "gtceu:mega_vacuum_freezer",
            "gtceu:mega_blast_furnace"
        ],
        tooltipKeys: [
            "multiblock.pchaccess1",
            "multiblock.pchaccess2",
            "multiblock.subtickaccess1",
            "multiblock.subtickaccess2"
        ]
    },
    'SUBTICK_AND_PERF_OC_GROUP': {
        multiblockIds: [
            "gtceu:large_chemical_reactor"
        ],
        tooltipKeys: [
            'multiblock.subtickaccess1',
            'multiblock.subtickaccess2',
            'multiblock.perfocaccess1',
            'multiblock.perfocaccess2'
        ]
    },
    'SUBTICK_ONLY': {
        multiblockIds: [
            "gtceu:vacuum_freezer",
            "gtceu:implosion_compressor",
            "gtceu:cracker",
            "gtceu:pyrolyse_oven",
            "gtceu:alloy_blast_smelter",
            "gtceu:distillation_tower",
            "gtceu:electric_blast_furnace"
        ],
        tooltipKeys: [
            'multiblock.subtickaccess1',
            'multiblock.subtickaccess2'
        ]
    },
};
const MULTIBLOCK_DESCRIPTION_TOOLTIPS = {
    "gtceu:large_arc_smelter": [
        "gtultimate.custom.tooltip_large_arc_smelter"
    ],
    "gtceu:large_assembler": [
        "gtultimate.custom.tooltip_large_assembler",
        "gtultimate.custom.tooltip_one_energy_hatch"
    ],
    "gtceu:assembly_line": [
        "gtultimate.custom.tooltip_assembly_line"
    ],
    "gtceu:large_autoclave": [
        "gtultimate.custom.tooltip_large_autoclave"
    ],
    "gtceu:large_brewer": [
        "gtultimate.custom.tooltip_large_brewer"
    ],
    "gtceu:large_centrifuge": [
        "gtultimate.custom.tooltip_large_centrifuge"
    ],
    "gtceu:large_chemical_bath": [
        "gtultimate.custom.tooltip_large_chemical_bath"
    ],
    "gtceu:large_circuit_assembler": [
        "gtultimate.custom.tooltip_large_circuit_assembler"
    ],
    "gtceu:large_cutter": [
        "gtultimate.custom.tooltip_large_cutter"
    ],
    "gtceu:large_electrolyzer": [
        "gtultimate.custom.tooltip_large_electrolyzer"
    ],
    "gtceu:large_electromagnet": [
        "gtultimate.custom.tooltip_large_electromagnet"
    ],
    "gtceu:large_engraving_laser": [
        "gtultimate.custom.tooltip_large_engraving_laser"
    ],
    "gtceu:large_maceration_tower": [
        "gtultimate.custom.tooltip_large_maceration_tower"
    ],
    "gtceu:large_material_press": [
        "gtultimate.custom.tooltip_large_material_press"
    ],
    "gtceu:large_mixer": [
        "gtultimate.custom.tooltip_large_mixer"
    ],
    "gtceu:large_packer": [
        "gtultimate.custom.tooltip_large_packer"
    ],
    "gtceu:large_sifting_funnel": [
        "gtultimate.custom.tooltip_large_sifting_funnel"
    ],
    "gtceu:large_solidifier": [
        "gtultimate.custom.tooltip_large_solidifier"
    ],
    "gtceu:large_wiremill": [
        "gtultimate.custom.tooltip_large_wiremill"
    ],
    "gtceu:large_distillery": [
        "gtultimate.custom.tooltip_distillation_tower",
        "gtultimate.custom.tooltip_distillation_tower_2",
        "gtultimate.custom.tooltip_large_distillery"
    ],
    "gtceu:large_extruder": [
        "gtultimate.custom.tooltip_large_extruder"
    ],
    "gtceu:large_extractor": [
        "gtultimate.custom.tooltip_large_extractor"
    ],
    "gtceu:large_chemical_reactor": [
        "gtultimate.custom.tooltip_large_chemical_reactor"
    ],
    "gtceu:vacuum_freezer": [
        "gtultimate.custom.tooltip_vacuum_freezer"
    ],
    "gtceu:implosion_compressor": [
        "gtultimate.custom.tooltip_implosion_compressor",
        "gtultimate.custom.tooltip_implosion_compressor_2"
    ],
    "gtceu:cracker": [
        "gtultimate.custom.tooltip_cracker",
        "gtultimate.custom.tooltip_cracker_2"
    ],
    "gtceu:pyrolyse_oven": [
        "gtultimate.custom.tooltip_pyrolyse_oven",
        "gtultimate.custom.tooltip_pyrolyse_oven_2"
    ],
    "gtceu:mega_vacuum_freezer": [
        "gtultimate.custom.tooltip_mega_vacuum_freezer"
    ],
    "gtceu:mega_blast_furnace": [
        "gtultimate.custom.tooltip_mega_blast_furnace",
        "gtultimate.custom.tooltip_ebf_coils"
    ],
    "gtceu:multi_smelter": [
        "gtultimate.custom.tooltip_multi_smelter",
        "gtultimate.custom.tooltip_multi_smelter_2"
    ],
    "gtceu:alloy_blast_smelter": [
        "gtultimate.custom.tooltip_alloy_blast_smelter",
        "gtultimate.custom.tooltip_ebf_coils"
    ],
    "gtceu:distillation_tower": [
        "gtultimate.custom.tooltip_distillation_tower",
        "gtultimate.custom.tooltip_distillation_tower_2"
    ],
    "gtceu:electric_blast_furnace": [
        "gtultimate.custom.tooltip_electric_blast_furnace",
        "gtultimate.custom.tooltip_ebf_coils"
    ],
    "gtceu:steam_oven": [
        "gtultimate.custom.tooltip_steam_oven"
    ],
    "gtceu:steam_grinder": [
        "gtultimate.custom.tooltip_steam_grinder"
    ],
    "gtceu:primitive_pump": [
        "gtultimate.custom.tooltip_primitive_pump"
    ],
    "gtceu:primitive_blast_furnace": [
        "gtultimate.custom.tooltip_primitive_blast_furnace"
    ],
    "gtceu:coke_oven": [
        "gtultimate.custom.tooltip_coke_oven"
    ]
};
const MACHINE_TYPE_NAMES = {
    "gtceu:large_arc_smelter": "§eArc Furnace",
    "gtceu:large_assembler": "§eAssembling Machine",
    "gtceu:large_autoclave": "§eAutoclave",
    "gtceu:large_brewer": "§eBrewery | Fermenter | Fluid Heater",
    "gtceu:large_centrifuge": "§eCentrifuge | Thermal Centrifuge",
    "gtceu:large_chemical_bath": "§eChemical Bath | Ore Washer",
    "gtceu:large_circuit_assembler": "§eCircuit Assembler",
    "gtceu:large_cutter": "§eCutter | Lathe",
    "gtceu:large_electrolyzer": "§eElectrolyzer",
    "gtceu:large_electromagnet": "§eElectromagnetic Separator | Polarizer",
    "gtceu:large_engraving_laser": "§eLaser Engraver",
    "gtceu:large_maceration_tower": "§eMacerator",
    "gtceu:large_material_press": "§eBending | Compressor | Forge Hammer | Forming Press",
    "gtceu:large_mixer": "§eMixer",
    "gtceu:large_packer": "§ePacker",
    "gtceu:large_sifting_funnel": "§eSifter",
    "gtceu:large_solidifier": "§eFluid Solidifier",
    "gtceu:large_wiremill": "§eWiremill",
    "gtceu:large_chemical_reactor": "§eChemical Reactor",
    "gtceu:vacuum_freezer": "§eVacuum Freezer",
    "gtceu:implosion_compressor": "§eImplosion Compressor",
    "gtceu:cracker": "§eCracker",
    "gtceu:pyrolyse_oven": "§ePyrolyse Oven",
    "gtceu:mega_vacuum_freezer": "§eVacuum Freezer",
    "gtceu:mega_blast_furnace": "§eElectric Blast Furnace",
    "gtceu:multi_smelter": "§eSmelting | Alloy Smelter",
    "gtceu:alloy_blast_smelter": "§eAlloy Blast Smelter",
    "gtceu:distillation_tower": "§eDistillation Tower",
    "gtceu:electric_blast_furnace": "§eElectric Blast Furnace",
    "gtceu:steam_grinder": "§eMacerator",
    "gtceu:steam_oven": "§eSmelting",
    "gtceu:primitive_pump": "§eWaterpump",
    "gtceu:primitive_blast_furnace": "§ePrimitive Blast Furnace",
    "gtceu:coke_oven": "§eCoke Oven",
    "gtceu:assembly_line": "§eAssembly Line",
    'gtceu:steam_grinder': '§eMacerating',
    'gtceu:steam_oven': '§eSmelting',
};
const SHIFT_PLACEHOLDER_VALUES = {
    // WATERTIGHT_CASING_TOOLTIP
    "gtceu:large_autoclave": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler", "pch"],
        values:
            WATERTIGHT_CASING_TOOLTIP
    },
    "gtceu:large_chemical_bath": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler", "pch"],
        values:
            WATERTIGHT_CASING_TOOLTIP
    },
    "gtceu:large_solidifier": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler", "pch"],
        values:
            WATERTIGHT_CASING_TOOLTIP
    },
    "gtceu:large_extractor": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler", "pch"],
        values:
            WATERTIGHT_CASING_TOOLTIP
    },
    // WATERTIGHT_CASING_DT_TOOLTIP
    "gtceu:large_distillery": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler", "pch"],
        values:
            WATERTIGHT_CASING_DT_TOOLTIP
    },
    // LARGE_SCALE_ASSEMBLER_CASING_TOOLTIP
    "gtceu:large_assembler": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            LARGE_SCALE_ASSEMBLER_CASING_TOOLTIP
    },
    "gtceu:large_circuit_assembler": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            LARGE_SCALE_ASSEMBLER_CASING_TOOLTIP
    },
    // STRESS_PROOF_CASING_TOOLTIP
    "gtceu:large_material_press": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler", "pch"],
        values:
            STRESS_PROOF_CASING_TOOLTIP
    },
    "gtceu:large_wiremill": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler", "pch"],
        values:
            STRESS_PROOF_CASING_TOOLTIP
    },
    "gtceu:large_extruder": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler", "pch"],
        values:
            STRESS_PROOF_CASING_TOOLTIP
    },
    // NONCONDUCTING_CASING_TOOLTIP
    "gtceu:large_electrolyzer": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler", "pch"],
        values:
            NONCONDUCTING_CASING_TOOLTIP
    },
    "gtceu:large_electromagnet": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler", "pch"],
        values:
            NONCONDUCTING_CASING_TOOLTIP
    },
    // VIBRATION_SAFE_CASING_TOOLTIP
    "gtceu:large_centrifuge": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler", "pch"],
        values:
            VIBRATION_SAFE_CASING_TOOLTIP
    },
    "gtceu:large_sifting_funnel": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler", "pch"],
        values:
            VIBRATION_SAFE_CASING_TOOLTIP
    },
    // HIGH_TEMPERATURE_SMELTING_CASING_TOOLTIP
    "gtceu:large_arc_smelter": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler", "pch"],
        values:
            HIGH_TEMPERATURE_SMELTING_CASING_TOOLTIP
    },
    "gtceu:alloy_blast_smelter": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler"],
        values:
            HIGH_TEMPERATURE_SMELTING_CASING_TOOLTIP
    },
    // HIGH_TEMPERATURE_SMELTING_CASING_RHF_TOOLTIP
    "gtceu:mega_blast_furnace": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler", "pch"],
        values:
            HIGH_TEMPERATURE_SMELTING_CASING_RHF_TOOLTIP
    },
    // CORROSION_PROOF_CASING_TOOLTIP
    "gtceu:large_brewer": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            CORROSION_PROOF_CASING_TOOLTIP
    },
    // SHOCK_PROOF_CUTTING_CASING_TOOLTIP
    "gtceu:large_cutter": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            SHOCK_PROOF_CUTTING_CASING_TOOLTIP
    },
    // LASER_SAFE_ENGRAVING_CASING_TOOLTIP
    "gtceu:large_engraving_laser": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            LASER_SAFE_ENGRAVING_CASING_TOOLTIP
    },
    // SECURE_MACERATION_CASING_TOOLTIP
    "gtceu:large_maceration_tower": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            SECURE_MACERATION_CASING_TOOLTIP
    },
    // REACTION_SAFE_MIXING_CASING_TOOLTIP
    "gtceu:large_mixer": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            REACTION_SAFE_MIXING_CASING_TOOLTIP
    },
    // ROBUST_TUNGSTENSTEEL_MACHINE_CASING_TOOLTIP
    "gtceu:large_packer": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            ROBUST_TUNGSTENSTEEL_MACHINE_CASING_TOOLTIP
    },
    // FROST_PROOF_ALUMINIUM_MACHINE_CASING_TOOLTIP
    "gtceu:vacuum_freezer": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance"],
        values:
            FROST_PROOF_ALUMINIUM_MACHINE_CASING_TOOLTIP
    },
    "gtceu:mega_vacuum_freezer": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "pch"],
        values:
            FROST_PROOF_ALUMINIUM_MACHINE_CASING_TOOLTIP
    },
    // CHEMICALLY_INERT_PTFE_MACHINE_CASING_TOOLTIP
    "gtceu:large_chemical_reactor": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance"],
        values:
            CHEMICALLY_INERT_PTFE_MACHINE_CASING_TOOLTIP
    },
    // SOLID_MACHINE_CASING_TOOLTIP
    "gtceu:implosion_compressor": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance"],
        values:
            SOLID_MACHINE_CASING_TOOLTIP
    },
    // SOLID_MACHINE_CASING_ASSEMBLY_LINE_TOOLTIP
    "gtceu:assembly_line": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "energy", "datahatch"],
        values:
            SOLID_MACHINE_CASING_ASSEMBLY_LINE_TOOLTIP
    },
    // CLEAN_STAINLESS_STEEL_CASING_TOOLTIP
    "gtceu:cracker": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler"],
        values:
            CLEAN_STAINLESS_STEEL_CASING_TOOLTIP
    },
    // CLEAN_STAINLESS_STEEL_CASING_DT_TOOLTIP
    "gtceu:distillation_tower": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance"],
        values:
            CLEAN_STAINLESS_STEEL_CASING_DT_TOOLTIP
    },
    // ULV_MACHINE_CASING_TOOLTIP
    "gtceu:pyrolyse_oven": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler"],
        values:
            ULV_MACHINE_CASING_TOOLTIP
    },
    //HEAT_PROOF_INVAR_MACHINE_CASING_TOOLTIP
    "gtceu:electric_blast_furnace": {
        tooltipOrder: ["controller", "iteminput", "fluidinput", "itemoutput", "fluidoutput", "energy", "maintenance", "muffler"],
        values:
            HEAT_PROOF_INVAR_MACHINE_CASING_TOOLTIP
    },
    "gtceu:multi_smelter": {
        tooltipOrder: ["controller", "iteminput", "itemoutput", "energy", "maintenance", "muffler"],
        values:
            HEAT_PROOF_INVAR_MACHINE_CASING_TOOLTIP
    },
    // LOOK_AT_THE_MULTIBLOCK_PREVIEW
    "gtceu:primitive_pump": {
        tooltipOrder: ["controller"],
        values:
            LOOK_AT_THE_MULTIBLOCK_PREVIEW
    },
    "gtceu:primitive_blast_furnace": {
        tooltipOrder: ["controller"],
        values:
            LOOK_AT_THE_MULTIBLOCK_PREVIEW
    },
    // COKE_OVEN_BRICKS_TOOLTIP
    "gtceu:coke_oven": {
        tooltipOrder: ["controller", "iteminput", "itemoutput", "fluidoutput", "cokeovenhatch"],
        values:
            COKE_OVEN_BRICKS_TOOLTIP
    },
    // STEAM_MACHINE_CASING
    "gtceu:steam_grinder": {
        tooltipOrder: ["controller", "steamiteminput", "steamitemoutput", "steamenergy"],
        values:
            STEAM_MACHINE_CASING
    },
    // STEAM_MACHINE_CASING_OVEN
    "gtceu:steam_oven": {
        tooltipOrder: ["controller", "steamiteminput", "steamitemoutput", "steamenergy"],
        values:
            STEAM_MACHINE_CASING_OVEN
    },
};


function addTooltipsFromGroups(text, itemId, tooltipGroups, startIndex) {
    for (var groupName in tooltipGroups) {
        var group = tooltipGroups[groupName];
        if (group.multiblockIds.includes(itemId)) {
            group.tooltipKeys.forEach(key => {
                text.add(startIndex++, Text.translatable(key));
            });
            return startIndex;
        }
    }
    return startIndex;
}

ItemEvents.tooltip(event => {
    const allMultiblockIds = new Set();
    for (const groupName in NON_SHIFT_TOOLTIP_GROUPS) {
        NON_SHIFT_TOOLTIP_GROUPS[groupName].multiblockIds.forEach(id => allMultiblockIds.add(id));
    }
    for (const itemId in MULTIBLOCK_DESCRIPTION_TOOLTIPS) {
        allMultiblockIds.add(itemId);
    }
    for (const itemId in MACHINE_TYPE_NAMES) {
        allMultiblockIds.add(itemId);
    }
    for (const itemId in SHIFT_PLACEHOLDER_VALUES) {
        allMultiblockIds.add(itemId);
    }

    allMultiblockIds.forEach(multiblockId => {
        event.addAdvanced(multiblockId, (item, adv, text) => {
            let startIndex = 1; 
            
            let multiblockInfo; 

            if (!event.shift) {
                if (MACHINE_TYPE_NAMES[item.id]) {
                    text.add(startIndex++, Text.translatable('multiblock.tooltip.machinetype', Text.of(MACHINE_TYPE_NAMES[item.id])));
                }
                if (MULTIBLOCK_DESCRIPTION_TOOLTIPS[item.id]) {
                    MULTIBLOCK_DESCRIPTION_TOOLTIPS[item.id].forEach(tooltipKey => {
                        text.add(startIndex++, Text.translatable(tooltipKey));
                    });
                }                
                startIndex = addTooltipsFromGroups(text, item.id, NON_SHIFT_TOOLTIP_GROUPS, startIndex);

                text.add(startIndex++, Text.translatable('multiblock.yellowline'));
                text.add(startIndex++, Text.translatable('multiblock.underyellowline'));
            } else { 
                multiblockInfo = SHIFT_PLACEHOLDER_VALUES[item.id]; 

                text.add(startIndex++, Text.translatable('multiblock.structureadvtooltip'));

                if (multiblockInfo && multiblockInfo.tooltipOrder && multiblockInfo.values) {
                    multiblockInfo.tooltipOrder.forEach(keySuffix => {
                        const tooltipKey = `multiblock.tooltip.${keySuffix}`;
                        const value = multiblockInfo.values[keySuffix]; 

                        if (value !== undefined) {
                            text.add(startIndex++, Text.translatable(tooltipKey, Text.of(value)));
                        }
                    });
                } else {
                    console.log(`Debug: No Shift-Informations (tooltipOrder or values) for Item-ID: ${item.id}`);
                }
            }
        });
    });
});