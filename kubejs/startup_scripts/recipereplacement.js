/**
Crafting componets recipe replacment
 */

const Map = Java.loadClass("java.util.Map")

GTCEuStartupEvents.craftingComponents(event => {
    event.setItems(GTCraftingComponents.PLATE, Map.of(
        GTValues.LV, Item.of("phoenixcore:aurum_steel_plate"),
        GTValues.MV, Item.of("phoenixcore:aluminfrost_plate"),
        GTValues.HV, Item.of("phoenixcore:frost_reinforced_stained_steel_plate"),
        GTValues.EV, Item.of("phoenixcore:source_imbued_titanium_plate"),
        GTValues.IV, Item.of("phoenixcore:void_touched_tungsten_steel_plate"),
        GTValues.LuV, Item.of("phoenixcore:resonant_rhodium_alloy_plate"),
        GTValues.ZPM, Item.of("phoenixcore:advanced_quin_naquadian_alloy_plate"),
    ))

    event.setItems(GTCraftingComponents.ROTOR, Map.of(
        GTValues.LV, Item.of("phoenixcore:aurum_steel_rotor"),
        GTValues.MV, Item.of("phoenixcore:aluminfrost_rotor"),
        GTValues.HV, Item.of("phoenixcore:frost_reinforced_stained_steel_rotor"),
        GTValues.EV, Item.of("phoenixcore:source_imbued_titanium_rotor"),
        GTValues.IV, Item.of("phoenixcore:void_touched_tungsten_steel_rotor"),
        GTValues.LuV, Item.of("phoenixcore:resonant_rhodium_alloy_rotor"),
        GTValues.ZPM, Item.of("phoenixcore:advanced_quin_naquadian_alloy_rotor"),
    ))


})
