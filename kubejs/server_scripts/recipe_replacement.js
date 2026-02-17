/**
 * Replacing recipes for Phoenix Core materials
 */

ServerEvents.recipes((event) => {
    const tiers = [
        "steel",
        "aluminium",
        "stainless_steel",
        "titanium",
        "tungsten_steel",
        "rhodium_plated_palladium"
    ];

    const parts = [
        "gear", "rod", "plate", "bolt", "long_rod", 
        "ring", "round", "small_gear", "spring", 
        "phosphorescent", "screw", "frame", "dense", 
        "fine_wire", "foil", "rotor"
    ];

    // Map of tier replacements to phoenixcore
    const tierReplacements = {
        aluminium: "aluminfrost",
        titanium: "source_imbued_titanium",
        steel: "aurum_steel",
        tungsten_steel: "void_touched_tungsten_steel",
        rhodium_plated_palladium: "resonant_rhodium_alloy",
        stainless_steel: "frost_reinforced_stained_steel",
        naquadah_alloy: "advanced_quin_naquadian_alloy"
    };

    tiers.forEach(tier => {
        const replacementTier = tierReplacements[tier] || `source_imbued_${tier}`;
        
        parts.forEach(part => {
            // Updated namespace from gtceu to phoenixcore for the replacement items
            const oldItem = `gtceu:${tier}_${part}`;
            const newItem = `phoenixcore:${replacementTier}_${part}`;

            // Handle Electric components
            event.replaceInput({ id: /gtceu:(shaped\/|assembler\/)?electric_.*/ }, oldItem, newItem);
            
            // Handle Robot Arms
            event.replaceInput({ id: /gtceu:(shaped\/|assembler\/)?robot_arm_.*/ }, oldItem, newItem);
            
            // Handle Sensors
            event.replaceInput({ id: /gtceu:(shaped\/|assembler\/)?sensor_.*/ }, oldItem, newItem);
        });
    });

    // Consolidated Removals
    const toRemove = [
        { id: /advanced_[a-z_]+_beehive/ },
        { id: /advanced_[a-z_]+_canvas_hive/ },
        { id: /^productivebees:stonecutter\/.*canvas_hive$/ },
        { id: /^thermal:machines\/press\/press_[a-z_]+_gear$/ },
        { id: /^thermalexpansion:press\/[a-z_]+_gear$/ },
        { id: /^thermal:parts\/[a-z_]+_gear$/ },
        { id: /^productivebees:bee_breeding\// },
        { id: /^productivebees:cage_incubation/ },
        { id: /^productivebees.*incubation/ }
    ];

    toRemove.forEach(removal => event.remove(removal));
});