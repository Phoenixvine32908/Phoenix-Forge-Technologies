const Map = Java.loadClass("java.util.Map")

GTCEuStartupEvents.craftingComponents(event => {
  
    event.modifyItem(CraftingComponent.PLATE, Map.of(
        GTValues.FALLBACK, Item.of('gtceu:steel_plate'),
        GTValues.LV, Item.of('gtceu:aurum_steel_plate'),
        GTValues.MV, Item.of('gtceu:aluminfrost_plate'),
        GTValues.HV, Item.of('gtceu:frost_reinforced_stained_steel_plate'),
        GTValues.EV, Item.of('gtceu:source_imbued_titanium_plate'),
        GTValues.IV, Item.of('gtceu:void_touched_tungsten_steel_plate'),
   
    )) // 
    event.modifyItem(CraftingComponent.MOTOR, Map.of(
        GTValues.FALLBACK, Item.of('gtceu:steel_rod'),
        GTValues.LV, Item.of('gtceu:aurum_steel_rod'),
        GTValues.MV, Item.of('gtceu:aluminfrost_rod'),
        GTValues.HV, Item.of('gtceu:frost_reinforced_stained_steel_rod'),
        GTValues.EV, Item.of('gtceu:source_imbued_titanium_rod'),
        GTValues.IV, Item.of('gtceu:void_touched_tungsten_steel_rod'),
   
    )) // 
    
    event.modifyUnificationEntry(CraftingComponent.PLATE, GTValues.UEV, new UnificationEntry('plate', 'gtceu:aurum_steel')) // 
})