ServerEvents.recipes((event) => {
const tiers = [
  "steel",
  "aluminium",
  "stainless_steel",
  "titanium",
  "tungsten_steel",
];
const parts = [
  "gear",
  "rod",
  "plate",
  "bolt",
  "long_rod",
  "ring",
  "round",
  "small_gear",
  "spring",
  "phosphorescent",
  "screw",
  "frame",
  "dense",
  "fine_wire",
  "foil",
  "rotor"
];


// Map of tier replacements
const tierReplacements = {
  aluminium: "aluminfrost",
  titanium: "source_imbued_titanium",
  steel: "aurum_steel",
  tungsten_steel: "void_touched_tungsten_steel",
  stainless_steel: "frost_reinforced_stained_steel",
  // Add more replacements as needed
};

tiers.forEach(tier => {
  const replacementTier = tierReplacements[tier] || `source_imbued_${tier}`;
  parts.forEach(part => {
    event.replaceInput(
      { id: /^gtceu:(shaped\/)?electric_.*/ },
      `gtceu:${tier}_${part}`,
      `gtceu:${replacementTier}_${part}`
    );
    event.replaceInput(
      { id: /^gtceu:(assembler\/)?electric_.*/ },
      `gtceu:${tier}_${part}`,
      `gtceu:${replacementTier}_${part}`
    );
 event.replaceInput(
      { id: /^gtceu:(shaped\/)?robot_arm_.*/ },
      `gtceu:${tier}_${part}`,
      `gtceu:${replacementTier}_${part}`
    );
    event.replaceInput(
      { id: /^gtceu:(assembler\/)?robot_arm_.*/ },
      `gtceu:${tier}_${part}`,
      `gtceu:${replacementTier}_${part}`
    );
     event.replaceInput(
      { id: /^gtceu:(shaped\/)?sensor_.*/ },
      `gtceu:${tier}_${part}`,
      `gtceu:${replacementTier}_${part}`
    );
    event.replaceInput(
      { id: /^gtceu:(assembler\/)?sensor_.*/ },
      `gtceu:${tier}_${part}`,
      `gtceu:${replacementTier}_${part}`
    );
   



event.remove({ id: '/advanced_[a-z_]+_beehive/' })
     event.remove({ id: '/advanced_[a-z_]+_canvas_hive/' })
    event.remove({ id: /^productivebees:stonecutter\/.*canvas_hive$/ })
    event.remove({ id: /^thermal:machines\/press\/press_[a-z_]+_gear$/ })
     event.remove({ id: /^thermalexpansion:press\/[a-z_]+_gear$/ })
     event.remove({ id: /^thermal:parts\/[a-z_]+_gear$/ });
     event.remove({ id: /^productivebees:bee_breeding\// });
    event.remove({ id: /^productivebees:cage_incubation/ });
    event.remove({ id: /^productivebees.*incubation/ });



  });
});
})





