function makeDust(event, id, color, cmp){
    event.create(id)
    .dust()
    .fluid()
    .color(color)
    .components(cmp)
    .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
}

StartupEvents.registry('item', event => {

    event.create('basic_fuel_rod')
    .displayName("§2Basic Fuel Rod")
    .texture("kubejs:item/basic_fuel_rod")

event.create('empty_hostile_mob_essence_canister')
    .displayName("§cEmpty Hostile Mob Essence Canister")
    .texture("kubejs:item/componets/empty_hostile_mob_essence_canister");
event.create('midway_hostile_mob_essence_canister')
    .displayName("§cMidway Hostile Mob Essence Canister")
    .texture("kubejs:item/componets/midway_hostile_mob_essence_canister");
event.create('full_hostile_mob_essence_canister')
    .displayName("§cFull Hostile Mob Essence Canister")
    .texture("kubejs:item/componets/full_hostile_mob_essence_canister");
    event.create('fully_charged_mob_essence_capsule')
    .displayName("§cFully Charged Mob Essence Capsule")
    .texture("kubejs:item/componets/fully_charged_mob_essence_capsule");

event.create('empty_passive_mob_essence_canister')
    .displayName("§aEmpty Passive Mob Essence Canister")
    .texture("kubejs:item/componets/empty_passive_mob_essence_canister");
event.create('midway_passive_mob_essence_canister')
    .displayName("§aMidway Passive Mob Essence Canister")
    .texture("kubejs:item/componets/midway_passive_mob_essence_canister");
event.create('full_passive_mob_essence_canister')
    .displayName("§aFull Passive Mob Essence Canister")
    .texture("kubejs:item/componets/full_passive_mob_essence_canister");

event.create('empty_neutral_mob_essence_canister')
    .displayName("§9Empty Neutral Mob Essence Canister")
    .texture("kubejs:item/componets/empty_neutral_mob_essence_canister");
event.create('midway_neutral_mob_essence_canister')
    .displayName("§9Midway Neutral Mob Essence Canister")
    .texture("kubejs:item/componets/midway_neutral_mob_essence_canister");
event.create('full_neutral_mob_essence_canister')
    .displayName("§9Full Neutral Mob Essence Canister")
    .texture("kubejs:item/componets/full_neutral_mob_essence_canister");

    event.create('zirconium_rod')
    .displayName("§2Zirconium Fission Rod")
    .texture("kubejs:item/zirconium_rod")


     event.create('space_grade_steel_drilling_kit')
    .displayName("§7Space Grade Steel Drilling Kit")
    .texture("kubejs:item/space_grade_steel_drilling_kit")
event.create('frost_reinforced_stained_steel_drilling_kit')
    .displayName("§3Frost Reinforced Stained Steel Drill Kit") 
    .texture("kubejs:item/frost_reinforced_stained_steel_drilling_kit")
    event.create('aluminfrost_drilling_kit')
    .displayName("§bAluminfrost Drill Kit") 
    .texture("kubejs:item/aluminfrost_drilling_kit")
       event.create('aurum_steel_drilling_kit')
    .displayName("§6Aurum Steel Drill Kit") 
    .texture("kubejs:item/aurum_steel_drilling_kit")
       event.create('space_miner_module')
    .displayName("§dSpace Miner Module") 
    .texture("kubejs:item/space_miner_module")
    event.create('earthbound_miner_module')
    .displayName("§eEarth Bound Miner Module") 
    .texture("kubejs:item/earthbound_miner_module")

        event.create('thorium_fuel_pellet')
    .displayName("§2Thorium Fuel Pellet") 
    .texture("kubejs:item/thorium_fuel_pellet")

        event.create('u235_fuel_pellet')
    .displayName("§aUranium-235 Fuel Pellet") 
    .texture("kubejs:item/u235_fuel_pellet")
      event.create('u236_fuel_pellet')
    .displayName("§aUranium-236 Fuel Pellet") 
    .texture("kubejs:item/u236_fuel_pellet")

      event.create('plutonium_241_fuel_pellet')
    .displayName("§cPlutonium-241 Fuel Pellet") 
    .texture("kubejs:item/plutonium_241_fuel_pellet")
        event.create('u233_fuel_pellet')
    .displayName("§aUranium-233 Fuel Pellet") 
    .texture("kubejs:item/u233_fuel_pellet")


     event.create('space_grade_steel_drill_head')
    .displayName("§7Space Grade Steel Drill Head")
    .texture("kubejs:item/space_grade_steel_drill_head")
  event.create('frost_reinforced_stained_steel_drill_head')
    .displayName("§3Frost Reinforced Stained Steel Drill Head")
    .texture("kubejs:item/frost_reinforced_stained_steel_drill_head")
  event.create('aluminfrost_drill_head')
    .displayName("§bAluminfrost Drill Head")
    .texture("kubejs:item/aluminfrost_drill_head")
  event.create('aurum_steel_drill_head')
    .displayName("§6Aurum Steel Drill Head")
    .texture("kubejs:item/aurum_steel_drill_head")
    event.create('source_imbued_titanium_drill_head')
    .displayName("§dSource-Imbued Titanium Drill Head")
    .texture("kubejs:item/source_imbued_titanium_drill_head")
    event.create('flaming_mesh')
    .displayName("§cFlaming Mesh")
    .texture("kubejs:item/flaming_mesh")
    event.create('flaming_dust')
    .displayName("§cFlaming Dust")
    .texture("kubejs:item/flaming_dust")
    event.create('phoenix_feather')
    .displayName("§cFeather §6Of §cRebirth")
    .texture("kubejs:item/phoenix_feather")
    event.create('honey_comb_base_mold')
    .displayName("§6Honeycomb Base Mold")
    .texture("kubejs:item/honey_comb_base_mold")
       event.create('honey_comb_base')
    .displayName("§6Honeycomb Base")
    .texture("kubejs:item/honey_comb_base")
    event.create('copper_vein_traces')
    .displayName("Copper Vein Traces")
    .texture("kubejs:item/veins/copper_traces")
    event.create('sapphire_vein_traces')
    .displayName("Sapphire Vein Traces")
    .texture("kubejs:item/veins/sapphire_traces")
    event.create('redstone_vein_traces')
    .displayName("Redstone Vein Traces")
    .texture("kubejs:item/veins/redstone_traces")
    event.create('olivine_vein_traces')
    .displayName("Olvine Vein Traces")
    .texture("kubejs:item/veins/olivine_traces")
    event.create('mica_vein_traces')
    .displayName("Mica Vein Traces")
    .texture("kubejs:item/veins/mica_traces")
    event.create('manganese_vein_traces')
    .displayName("Manganese Vein Traces")
    .texture("kubejs:item/veins/manganese_traces")
    event.create('lapis_vein_traces')
    .displayName("Lapis Vein Traces")
    .texture("kubejs:item/veins/lapis_traces")
    event.create('diamond_vein_traces')
    .displayName("Diamond Vein Traces")
    .texture("kubejs:item/veins/diamond_traces")
    event.create('oilsands_vein_traces')
    .displayName("Oilsands Traces")
    .texture("kubejs:item/veins/oilsands_traces")
    event.create('salts_vein_traces')
    .displayName("Salt Traces")
    .texture("kubejs:item/veins/salts_traces")
    event.create('nickel_vein_traces')
    .displayName("Nickel Vein Traces")
    .texture("kubejs:item/veins/nickel_traces")
    event.create('mineral_sand_vein_traces')
    .displayName("Mineral Sands Vein Traces")
    .texture("kubejs:item/veins/mineral_sand_traces")
    event.create('iron_vein_traces')
    .displayName("Iron Vein Traces")
    .texture("kubejs:item/veins/iron_traces")
    event.create('magnetite_vein_traces')
    .displayName("Magnetite Vein Traces")
    .texture("kubejs:item/veins/magnetite_traces")
    event.create('lubricant_vein_traces')
    .displayName("Lubricant Vein Traces")
    .texture("kubejs:item/veins/lubricant_traces")
    event.create('garnet_vein_traces')
    .displayName("Garnet Vein Traces")
    .texture("kubejs:item/veins/garnet_traces")
    event.create('casseterite_vein_traces')
    .displayName("Casseterite Vein Traces")
    .texture("kubejs:item/veins/casseterite_traces")
    event.create('garnet_tin_vein_traces')
    .displayName("Garnet Tin Vein Traces")
    .texture("kubejs:item/veins/garnet_tin_traces")
    event.create('galena_vein_traces')
    .displayName("Galena Vein Traces")
    .texture("kubejs:item/veins/galena_traces")
    
    event.create('copper_tin_vein_traces')
    .displayName("Copper Tin Vein Traces")
    .texture("kubejs:item/veins/copper_tin_traces")
    event.create('coal_vein_traces')
    .displayName("Coal Vein Traces")
    .texture("kubejs:item/veins/coal_traces")
    event.create('apatite_vein_traces')
    .displayName("Apatite Vein Traces")
    .texture("kubejs:item/veins/apatite_traces")
    event.create('topaz_vein_traces')
    .displayName("Topaz Vein Traces")
    .texture("kubejs:item/veins/topaz_traces")
    event.create('tetrahedrite_vein_traces')
    .displayName("Tetrahedrite Vein Traces")
    .texture("kubejs:item/veins/tetrahedrite_traces")
  
    function create(namespace, displayName) {
        event.create("phoenix_enriched_" + namespace)
        .displayName(displayName)
        .texture("kubejs:item/phoenixware/mats/phoenix_enriched_" + namespace);
    }
    function createAlt(namespace, displayName) {
        event.create(namespace)
        .displayName(displayName)
        .texture("kubejs:item/phoenixware/mats" + namespace);
    }
    // PhoenixWare Ingots/Boules/Dusts (Raw Usable materials)
    create("naquad_boule", "§6Brilliant Boule");

    // PhoenixWare Wafers And Chips (silicon,ram,cpu,and soc)
   // create("naquad_wafer", "§6Brilliant Wafer");
   

    // PhoenixWare Multiblock casings/custom blocks

    //createAlt("plasma_resistant_casing", "§6Plasma-Resistant Casing");

    // PhoenixWare Rods
   // create("naquad_rod", "§6Brilliant Rod");
   // create("naquad_long_rod", "§6Brilliant Long Rod");

    // PhoenixWare Gears
  //  create("naquad_gear", "§6Brilliant Gear");

    // PhoenixWare Quantum Binders
    //createAlt("crude_quantum_binder", "§8Crude Quantum Binder");


    
    //.secondaryColor(0xA9423F)
    // PhoenixWare Plates
   // create("naquad_plate", "§6Brilliant Plate");
    //create("naquad_dense_plate", "§6Brilliant Dense Plate");

    // PhoenixWare Bolts
   //create("naquad_bolt", "§6Brilliant Bolt");

    // PhoenixWare Springs
   // create("naquad_spring", "§6Brilliant Spring");

    // PhoenixWare Screws
   // create("naquad_screw", "§6Brilliant Screw");

    // PhoenixWare Rings
   // create("naquad_ring", "§6Brilliant Ring");

    // PhoenixWare Wires
   // create("naquad_1x_wire", "§6Brilliant Wire 1x");
});
GTCEuStartupEvents.registry('gtceu:material', event => {

    const dusts = [
        [
            "crude_quantum_binder_dust",
            0xe47815,
            ['1x calcium', '2x chlorine', '8x oxygen']
        ],
        [
            "advanced_quantum_binder_dust",
            0xFF0000,
            ['1x calcium', '2x chlorine']
        ],
        [
            "super_advanced_quantum_binder_dust",
            0x8F00FF,
            ['1x calcium']
        ]
    ]

    dusts.forEach(dust => {
        makeDust(event, dust[0], dust[1], dust[2]);
    });

});