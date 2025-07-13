const Map = Java.loadClass("java.util.Map")

GTCEuStartupEvents.craftingComponents(event => {
  
    event.modifyItem(CraftingComponent.PLATE, Map.of(
        GTValues.FALLBACK, Item.of('gtceu:steel_plate'),
        GTValues.LV, Item.of('gtceu:aurum_steel_plate'),
        GTValues.MV, Item.of('gtceu:aluminfrost_plate'),
        GTValues.HV, Item.of('gtceu:frost_reinforced_stained_steel_plate'),
        GTValues.EV, Item.of('gtceu:source_imbued_titanium_plate'),
        GTValues.IV, Item.of('gtceu:void_touched_tungsten_steel_plate'),
        GTValues.LuV, Item.of('gtceu:resonant_rhodium_alloy_plate'),
   
    )) // 
 
      event.modifyItem(CraftingComponent.ROTOR, Map.of(
        GTValues.FALLBACK, Item.of('gtceu:steel_rotor'),
        GTValues.LV, Item.of('gtceu:aurum_steel_rotor'),
        GTValues.MV, Item.of('gtceu:aluminfrost_rotor'),
        GTValues.HV, Item.of('gtceu:frost_reinforced_stained_steel_rotor'),
        GTValues.EV, Item.of('gtceu:source_imbued_titanium_rotor'),
        GTValues.IV, Item.of('gtceu:void_touched_tungsten_steel_rotor'),
        GTValues.LuV, Item.of('gtceu:resonant_rhodium_alloy_rotor'),
   
    )) // 
   

    
    event.modifyUnificationEntry(CraftingComponent.PLATE, GTValues.UEV, new UnificationEntry('plate', 'gtceu:aurum_steel')) // 
})