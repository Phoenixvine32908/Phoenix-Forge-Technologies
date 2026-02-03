/**
 * phoenixware_materials.js
 * Cleaned up + typo-fixed version of phoenixware_materils.js
 *
 * Notes:
 * - Keeps your existing materials/elements/icon sets in KubeJS (no behavioral changes intended).
 * - Fixes obvious typos/syntax issues (missing semicolons, bad hex, iconSet typo, incomplete builders).
 * - Makes helpers safer (optional element param; flags spread; cable/rotor args spread).
 */

const $FluidProperty     = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty");
const $OreProperty       = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty");
const $FluidBuilder      = Java.loadClass("com.gregtechceu.gtceu.api.fluids.FluidBuilder");
const $FluidStorageKeys  = Java.loadClass("com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys");

const $PropertyKey       = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey");
const $RotorProperty     = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.RotorProperty");
const $IngotProperty     = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty");
const $ToolProperty      = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.ToolProperty");

Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.Material");

function regIconSet(event, id, parent) {
  event.create(id).parent(parent);
}

function regElement(event, id, protons, neutrons, symbol) {
  event.create(id).protons(protons).neutrons(neutrons).symbol(symbol);
}

function makeMaterial(event, id, color, color2, iconId, flagsArray, cableProps, rotorProps) {
  const mat = event.create(id)
    .ingot()
    .color(color)
    .secondaryColor(color2)
    .iconSet(iconId)
    .flags(...(flagsArray ?? []))
    .fluid();

  if (Array.isArray(cableProps) && cableProps.length === 4) {
    mat.cableProperties(...cableProps);
  }
  if (Array.isArray(rotorProps) && rotorProps.length === 4) {
    mat.rotorStats(...rotorProps);
  }
  return mat;
}

function makeLimitedMaterialWithCable(event, id, color, color2, iconId, cableProps, elementId) {
  const mat = event.create(id)
    .ingot()
    .color(color)
    .secondaryColor(color2)
    .iconSet(iconId)
    .cableProperties(...cableProps)
    .fluid();

  if (elementId) mat.element(GTElements.get(elementId));
  return mat;
}

function addFluid(mat, key) {
  const prop = new $FluidProperty();
  prop.getStorage().enqueueRegistration(key, new $FluidBuilder());
  mat.setProperty(PropertyKey.FLUID, prop);
}

GTCEuStartupEvents.registry("gtceu:element", event => {
  const elements = [
    ["phoenix_enriched_tritanium", 1, 32, "PET"],
    ["ember", 1, 2, "🔥"],
    ["phoenix_enriched_naquadah", 25, 32, "PENaq"],
    ["akashic_zeronium", 24, 12, "ASHK"],
    ["aetherium_steel", 26, 30, "AES"],
    ["void_touched_tungsten_steel", 74, 110, "VTT"],
    ["celestial_aurorium", -1, -1, "CAu"],
    ["primordial_flux_metal", -1, -1, "PFM"],
    ["eternal_starforged_steel", -1, -1, "ESS"],
    ["dimensional_reflection_alloy", -1, -1, "DRA"],
    ["timewoven_platinum", -1, -1, "TWPt"],
    ["soulbound_ethersteel", -1, -1, "SEth"],
    ["tachyon_infused_chromium", -1, -1, "TiCr"],
    ["echo_crystal_alloy", -1, -1, "ECA"],
    ["nebular_resonance_ingot", -1, -1, "NRI"],
    ["paradoxium", -1, -1, "Px"],
    ["subspace_cobalt", 27, 33, "QIC"],
    ["singularity_forged_titanium", 22, 26, "SFTi"],
    ["exotic_vanadium_composite", 23, 28, "EVC"],
    ["dark_matter_plated_iridium", 77, 116, "DMPIr"],
    ["corrupted_hyperalloy", -1, -1, "CHA"],
    ["reality_bound_osmium", 76, 114, "RBOs"],
    ["void_stitched_neodymium", 60, 84, "VSNd"],
    ["phoenix_tempered_mithril", -1, -1, "PTMi"],
    ["void_sung_adamantite", -1, -1, "VSA"],
    ["entangled_palladium", 46, 60, "QLPd"],
    ["entangled_neutron_alloy", -1, -1, "ENeA"],
    ["superposition_tungsten_matrix", -1, -1, "SWM"],
    ["exo_temporal_orichalcum", -1, -1, "ETO"],
    ["infinity", -1, -1, "∞"],
    ["galaxium_core_alloy", -1, -1, "GCA"],
    ["dark_nebula_infused_iridium", -1, -1, "DNIIr"],
    ["eldritch_voidsteel", -1, -1, "EVSt"],
    ["akashic_chrono_metal", -1, -1, "ACM"],
    ["absolute_zero_zeronium", -1, -1, "AZZr"],
    ["multiversal_hyperalloy", -1, -1, "MHA"],
    ["glitched_corruption_substrate", -1, -1, "GCS"],
    ["galactic_heart_matter", -1, -1, "GHM"],
    ["event_horizon_matter", -1, -1, "EHM"],
    ["antimatter", -1, -1, "aM"],
    ["uranium_233", 77, 118, "U²²³"],
    ["uranium_236", 77, 118, "U²³⁶"],
    ["zircalloy", 77, 125, "Zr⁷BiHf³"],
    ["source_imbued_titanium", 10, 118, "✨C✨Ti"],
    ["icy_steel_matrix", 8, 118, "❆Is<>"],
  ];
  elements.forEach(e => regElement(event, e[0], e[1], e[2], e[3]));
});

GTCEuStartupEvents.registry("gtceu:material_icon_set", event => {
  const shiny       = GTMaterialIconSet.SHINY;
  const dull        = GTMaterialIconSet.DULL;
  const radioactive = GTMaterialIconSet.RADIOACTIVE;
  const bright      = GTMaterialIconSet.BRIGHT;
  const metallic    = GTMaterialIconSet.METALLIC;

  const iconSets = {
    sculk_alloy: dull,
    chemical: bright,
    eltz: shiny,
    radio: radioactive,
    monium: shiny,
    phoenix_enriched_tritanium: shiny,
    phoenix_enriched_naquadah: shiny,
    akashic_zeronium: shiny,
    aetherium_steel: shiny,
    void_touched_tungsten_steel: dull,
    subspace_cobalt: shiny,
    singularity_forged_titanium: shiny,
    exotic_vanadium_composite: dull,
    dark_matter_plated_iridium: dull,
    corrupted_hyperalloy: dull,
    reality_bound_osmium: shiny,
    void_stitched_neodymium: dull,
    phoenix_tempered_mithril: shiny,
    void_sung_adamantite: dull,
    entangled_palladium: shiny,
    entangled_neutron_alloy: dull,
    superposition_tungsten_matrix: dull,
    exo_temporal_orichalcum: shiny,
    galaxium_core_alloy: shiny,
    dark_nebula_infused_iridium: dull,
    eldritch_voidsteel: dull,
    akashic_chrono_metal: shiny,
    absolute_zero_zeronium: shiny,
    multiversal_hyperalloy: shiny,
    glitched_corruption_substrate: dull,
    galactic_heart_matter: shiny,
    event_horizon_matter: shiny,
    antimatter: shiny,

    fiery_bronze: dull,
    honey: shiny,

    infinity: shiny,
    aurum_steel: metallic,
    aluminfrost: bright,

    cryo_aluminum_supercon: shiny,
    cryo_steel_supercon: shiny,
    source_titanium_supercon: shiny,
    magmatic_manganese_lead: shiny,
  };

  Object.entries(iconSets).forEach(([k, v]) => regIconSet(event, k, v));
});

GTCEuStartupEvents.registry("gtceu:material", event => {
  const materialFlags = [
    GTMaterialFlags.GENERATE_PLATE,
    GTMaterialFlags.GENERATE_LONG_ROD,
    GTMaterialFlags.GENERATE_RING,
    GTMaterialFlags.GENERATE_ROUND,
    GTMaterialFlags.GENERATE_GEAR,
    GTMaterialFlags.GENERATE_SMALL_GEAR,
    GTMaterialFlags.GENERATE_SPRING,
    GTMaterialFlags.PHOSPHORESCENT,
    GTMaterialFlags.GENERATE_ROD,
    GTMaterialFlags.GENERATE_BOLT_SCREW,
    GTMaterialFlags.GENERATE_FRAME,
    GTMaterialFlags.GENERATE_DENSE,
    GTMaterialFlags.GENERATE_FINE_WIRE,
    GTMaterialFlags.GENERATE_FOIL,
    GTMaterialFlags.GENERATE_ROTOR,
  ];

  makeLimitedMaterialWithCable(event, "magmatic_manganese_lead", 0x8B4513, 0xFF4500, "magmatic_manganese_lead",
    [GTValues.V[GTValues.LV], 2, 2, true]);

  makeLimitedMaterialWithCable(event, "cryogenic_aluminum_strand", 0xADD8E6, 0x87CEFA, "cryo_aluminum_supercon",
    [GTValues.V[GTValues.MV], 4, 0, true]);

  makeLimitedMaterialWithCable(event, "icy_steel_matrix", 0xE0FFFF, 0x696969, "cryo_steel_supercon",
    [GTValues.V[GTValues.HV], 8, 0, true], "icy_steel_matrix");

  makeLimitedMaterialWithCable(event, "source_titanium_filament", 0x8B008B, 0x454545, "source_titanium_supercon",
    [GTValues.V[GTValues.EV], 16, 0, true]);

  const big = [
    ["akashic_zeronium", 0x8F00FF, 0x000000, [GTValues.V[GTValues.MAX], 400000, 400000, true], [200000, 50000, 105.5, 100000000]],
    ["phoenix_enriched_naquadah", 0xFFA500, 0x000000, [GTValues.V[GTValues.ZPM], 64, 8, true], [1500, 400, 12.0, 750000]],
    ["phoenix_enriched_tritanium", 0xFF0000, 0x000000, [GTValues.V[GTValues.ZPM], 64, 8, true], [1800, 450, 14.0, 900000]],
    ["aetherium_steel", 0xADD8E6, 0x808080, [GTValues.V[GTValues.ZPM], 32, 4, true], [1300, 350, 11.0, 600000]],
    ["subspace_cobalt", 0x00FFFF, 0x008B8B, [GTValues.V[GTValues.UV], 32, 4, true], [1600, 420, 13.5, 700000]],
    ["singularity_forged_titanium", 0x808080, 0x696969, [GTValues.V[GTValues.UV], 64, 8, true], [1700, 430, 14.5, 850000]],
    ["exotic_vanadium_composite", 0xFFA07A, 0xCD5C5C, [GTValues.V[GTValues.UV], 32, 4, true], [1400, 380, 16.0, 780000]],
    ["dark_matter_plated_iridium", 0x191970, 0x000000, [GTValues.V[GTValues.UV], 128, 16, true], [1900, 480, 17.0, 950000]],
    ["corrupted_hyperalloy", 0xFF00FF, 0x8B008B, [GTValues.V[GTValues.UEV], 64, 8, true], [1650, 410, 15.0, 820000]],
    ["reality_bound_osmium", 0x00FF00, 0x32CD32, [GTValues.V[GTValues.UEV], 128, 16, true], [2000, 520, 19.0, 1050000]],
    ["void_stitched_neodymium", 0x9400D3, 0x4B0082, [GTValues.V[GTValues.UEV], 64, 8, true], [1550, 390, 17.5, 900000]],
    ["celestial_aurorium", 0xFFD700, 0xFFFACD, [GTValues.V[GTValues.MAX], 4096, 512, true], [2650, 670, 27.5, 2100000]],
    ["primordial_flux_metal", 0x8A2BE2, 0x4B0082, [GTValues.V[GTValues.OpV], 2048, 256, true], [2500, 630, 24.0, 1950000]],
    ["eternal_starforged_steel", 0x708090, 0xF5F5F5, [GTValues.V[GTValues.UIV], 512, 64, true], [2150, 520, 21.0, 1600000]],
    ["dimensional_reflection_alloy", 0x00CED1, 0xE6E6FA, [GTValues.V[GTValues.UEV], 1024, 128, true], [2400, 580, 25.5, 1850000]],
    ["timewoven_platinum", 0xE5E4E2, 0xC0C0C0, [GTValues.V[GTValues.UXV], 2048, 256, true], [2550, 610, 26.5, 2000000]],
    ["soulbound_ethersteel", 0x87CEEB, 0x00008B, [GTValues.V[GTValues.UIV], 512, 64, true], [2000, 490, 22.0, 1500000]],
    ["tachyon_infused_chromium", 0xB0C4DE, 0x5F9EA0, [GTValues.V[GTValues.OpV], 1024, 128, true], [2450, 600, 24.5, 1750000]],
    ["echo_crystal_alloy", 0xDA70D6, 0x8B008B, [GTValues.V[GTValues.OpV], 4096, 512, true], [2750, 690, 28.0, 2250000]],
    ["nebular_resonance_ingot", 0x4682B4, 0xD8BFD8, [GTValues.V[GTValues.MAX], 8192, 1024, true], [2850, 710, 29.5, 2400000]],
    ["paradoxium", 0x000000, 0xFF1493, [GTValues.V[GTValues.MAX], 16384, 2048, true], [3000, 750, 32.0, 3000000]],
    ["phoenix_tempered_mithril", 0xE0FFFF, 0xAFEEEE, [GTValues.V[GTValues.UIV], 128, 16, true], [2100, 530, 16.0, 1150000]],
    ["void_sung_adamantite", 0x2F4F4F, 0x000000, [GTValues.V[GTValues.UIV], 256, 32, true], [1850, 460, 20.0, 1200000]],
    ["entangled_palladium", 0xF0E68C, 0xBDB76B, [GTValues.V[GTValues.UIV], 128, 16, true], [1950, 490, 18.5, 1000000]],
    ["entangled_neutron_alloy", 0x778899, 0x2F4F4F, [GTValues.V[GTValues.UXV], 256, 32, true], [2300, 580, 21.0, 1300000]],
    ["superposition_tungsten_matrix", 0xD3D3D3, 0xA9A9A9, [GTValues.V[GTValues.UXV], 512, 64, true], [2050, 510, 22.0, 1400000]],
    ["exo_temporal_orichalcum", 0xFFD700, 0xB8860B, [GTValues.V[GTValues.UXV], 256, 32, true], [2250, 560, 19.5, 1250000]],
    ["galactic_heart_matter", 0xF08080, 0xDC143C, [GTValues.V[GTValues.OpV], 256, 32, true], [2200, 550, 23.5, 1550000]],
    ["dark_nebula_infused_iridium", 0x483D8B, 0x191970, [GTValues.V[GTValues.OpV], 1024, 128, true], [2150, 540, 24.0, 1600000]],
    ["eldritch_voidsteel", 0x000000, 0x800080, [GTValues.V[GTValues.OpV], 512, 64, true], [2350, 590, 25.0, 1700000]],
    ["akashic_chrono_metal", 0xF5F5DC, 0xFFE4C4, [GTValues.V[GTValues.MAX], 1024, 128, true], [2500, 620, 26.0, 1800000]],
    ["absolute_zero_zeronium", 0x00FFFF, 0x8FBC8F, [GTValues.V[GTValues.MAX], 2048, 256, true], [2200, 550, 27.0, 1900000]],
    ["multiversal_hyperalloy", 0xFFFAFA, 0xF0FFF0, [GTValues.V[GTValues.MAX], 1024, 128, true], [2600, 650, 28.0, 2000000]],
    ["glitched_corruption_substrate", 0x800080, 0xFF00FF, [GTValues.V[GTValues.UEV], 32, 4, true], [1450, 370, 16.5, 880000]],
    ["event_horizon_matter", 0x000000, 0xFFFFFF, [GTValues.V[GTValues.MAX], 4096, 512, true], [2700, 680, 29.0, 2200000]],
    ["antimatter", 0x000000, 0xFFFFFF, [GTValues.V[GTValues.MAX], 8192, 1024, true], [2800, 700, 30.0, 2500000]],
  ];

  big.forEach(m => makeMaterial(event, m[0], m[1], m[2], m[0], materialFlags, m[3], m[4]));

  event.create("infinity")
    .ingot()
    .element(GTElements.get("infinity"))
    .iconSet("infinity")
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_SMALL_GEAR);

  event.create("zircalloy")
    .ingot()
    .color(0x002327)
    .secondaryColor(0x000000)
    .element(GTElements.get("zircalloy"))
    .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_SPRING, GTMaterialFlags.GENERATE_FRAME)
    .iconSet("dull");

  event.create("fiery_bronze")
    .ingot()
    .fluid()
    .color(0xff6d00)
    .secondaryColor(0xa0522d)
    .iconSet("fiery_bronze")
    .fluidPipeProperties(2000, 40, true, false, false, false)
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_RING,
      GTMaterialFlags.GENERATE_ROUND,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.PHOSPHORESCENT,
      GTMaterialFlags.GENERATE_ROD,
      GTMaterialFlags.GENERATE_BOLT_SCREW,
      GTMaterialFlags.GENERATE_FRAME,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.GENERATE_ROTOR
    );

  event.create("aurum_steel")
    .ingot()
    .fluid()
    .color(0xd0a860)
    .secondaryColor(0xc0c0c0)
    .iconSet("aurum_steel")
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_RING,
      GTMaterialFlags.GENERATE_ROUND,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.PHOSPHORESCENT,
      GTMaterialFlags.GENERATE_ROD,
      GTMaterialFlags.GENERATE_BOLT_SCREW,
      GTMaterialFlags.GENERATE_FRAME,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.GENERATE_ROTOR
    );

  event.create("aluminfrost")
    .ingot()
    .fluid()
    .color(0xadd8e6)
    .secondaryColor(0xc0c0c0)
    .fluidPipeProperties(1200, 110, true, true, false, false)
    .toolStats(
      $ToolProperty.Builder.of(1.8, 1.7, 700, 3, [
        GTToolType.SWORD, GTToolType.PICKAXE, GTToolType.SHOVEL, GTToolType.AXE, GTToolType.HOE,
        GTToolType.MINING_HAMMER, GTToolType.SPADE, GTToolType.SCYTHE, GTToolType.SAW, GTToolType.HARD_HAMMER,
        GTToolType.WRENCH, GTToolType.FILE, GTToolType.CROWBAR, GTToolType.SCREWDRIVER, GTToolType.MORTAR,
        GTToolType.WIRE_CUTTER, GTToolType.KNIFE, GTToolType.DRILL_LV, GTToolType.DRILL_MV, GTToolType.DRILL_HV,
        GTToolType.DRILL_EV, GTToolType.DRILL_IV, GTToolType.CHAINSAW_LV, GTToolType.WRENCH_LV, GTToolType.WRENCH_HV,
        GTToolType.WRENCH_IV, GTToolType.WIRE_CUTTER_LV, GTToolType.WIRE_CUTTER_HV, GTToolType.WIRE_CUTTER_IV,
      ])
      .unbreakable()
      .build()
    )
    .iconSet("aluminfrost")
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_RING,
      GTMaterialFlags.GENERATE_ROUND,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.PHOSPHORESCENT,
      GTMaterialFlags.GENERATE_LONG_ROD,
      GTMaterialFlags.GENERATE_ROD,
      GTMaterialFlags.GENERATE_BOLT_SCREW,
      GTMaterialFlags.GENERATE_FRAME,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.GENERATE_ROTOR
    );

  event.create("85_percent_pure_nevonian_steel")
    .ingot()
    .color(0xFFFFE0)
    .secondaryColor(0xFFD700)
    .iconSet("almost_pure_nevonian_steel")
    .blastTemp(3800, "mid", GTValues.VA[GTValues.EV], 1200)
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_SMALL_GEAR,
      GTMaterialFlags.GENERATE_SPRING,
      GTMaterialFlags.PHOSPHORESCENT,
      GTMaterialFlags.GENERATE_ROD,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.GENERATE_BOLT_SCREW,
      GTMaterialFlags.GENERATE_FRAME
    );

  event.create("permafrost")
    .ore().ingot()
    .color(0xA7D1EB)
    .iconSet("diamond")
    .addOreByproducts([GTMaterials.get("aluminfrost"), GTMaterials.get("aluminfrost"), GTMaterials.CertusQuartz]);

  event.create("void_touched_tungsten_steel")
    .ingot()
    .liquid(new $FluidBuilder().block().temperature(3100))
    .fluidPipeProperties(3800, 250, true, true, true, true)
    .color(0x4B0082)
    .secondaryColor(0x000000)
    .iconSet("metallic")
    .components("4x tungsten", "4x voidglass_shard", "2x molybdenum")
    .blastTemp(4200, "mid", GTValues.VA[GTValues.EV], 1000)
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_RING,
      GTMaterialFlags.PHOSPHORESCENT,
      GTMaterialFlags.GENERATE_ROD,
      GTMaterialFlags.GENERATE_LONG_ROD,
      GTMaterialFlags.GENERATE_BOLT_SCREW,
      GTMaterialFlags.GENERATE_FRAME,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_SMALL_GEAR,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.GENERATE_ROTOR
    );

  event.create("resonant_rhodium_alloy")
    .ingot()
    .liquid(4100)
    .color(0xe245f8)
    .secondaryColor(0xA345B0)
    .iconSet("metallic")
    .fluidPipeProperties(2000, 600, true, true, false, false)
    .components("3x rhodium", "4x palladium", "polarity_flipped_bismuthite", "4x cerium")
    .blastTemp(4200, "high", GTValues.VA[GTValues.IV], 2400)
    .flags(
      GTMaterialFlags.GENERATE_PLATE,
      GTMaterialFlags.GENERATE_RING,
      GTMaterialFlags.PHOSPHORESCENT,
      GTMaterialFlags.GENERATE_ROD,
      GTMaterialFlags.GENERATE_LONG_ROD,
      GTMaterialFlags.GENERATE_GEAR,
      GTMaterialFlags.GENERATE_SMALL_GEAR,
      GTMaterialFlags.GENERATE_BOLT_SCREW,
      GTMaterialFlags.GENERATE_FRAME,
      GTMaterialFlags.GENERATE_DENSE,
      GTMaterialFlags.GENERATE_ROTOR
    );

  event.create("uranium_233")
    .ingot()
    .fluid()
    .color(0x33FF33)
    .secondaryColor(0x00CC00)
    .element(GTElements.get("uranium_233"))
    .iconSet("radioactive");

  event.create("uranium_236")
    .ingot()
    .fluid()
    .color(0x33CCFF)
    .element(GTElements.get("uranium_236"))
    .flags(GTMaterialFlags.GENERATE_FRAME)
    .secondaryColor(0x0099EE)
    .iconSet("radioactive");

  event.create("inert_gas_waste")
    .gas()
    .color(0xC0C0C0)
    .secondaryColor(0xD0D0D0)
    .iconSet("dull")
    .components("1x calcium");

  event.create("irradiated_thorium")
    .ingot()
    .fluid()
    .dust()
    .color(0x90A090)
    .secondaryColor(0x708070)
    .element(GTElements.get("thorium"))
    .iconSet("radioactive");

  event.create("spent_uranium_233")
    .dust().ingot()
    .color(0x503040)
    .secondaryColor(0x705060)
    .element(GTElements.get("uranium"))
    .iconSet("radioactive");

  event.create("supercritical_carbon_dioxide")
    .fluid()
    .color(0x70A070)
    .secondaryColor(0x90C090)
    .iconSet("dull");

  event.create("critical_steam")
    .gas()
    .color(0xF0F8FF)
    .secondaryColor(0xADD8E6)
    .iconSet("dull");

  event.create("spent_uranium_235")
    .ingot()
    .color(0x603030)
    .secondaryColor(0x402020)
    .element(GTElements.get("uranium_235"))
    .iconSet("radioactive");

  event.create("aurum_wood")
    .dust()
    .color(0x291306)
    .secondaryColor(0xfccd31)
    .iconSet("fiery_bronze");

  event.create("depleted_uranium")
    .ingot()
    .color(0x555030)
    .secondaryColor(0x333010)
    .iconSet("radioactive");

  event.create("hot_sodium_potassium")
    .liquid(3800)
    .color(0xFF4500)
    .secondaryColor(0xFFD700)
    .iconSet("dull");

  event.create("americium_241")
    .ingot()
    .color(0xCDC9C9)
    .secondaryColor(0x8B8B7A)
    .iconSet("radioactive");

  event.create("americium_hexafluoride")
    .gas()
    .color(0xFFFFFF)
    .secondaryColor(0xADD8E6)
    .iconSet("dull");

  event.create("uranium_oxide").fluid().color(0x00FF00).secondaryColor(0x000000).iconSet("dull");
  event.create("sucrose").fluid().color(0xF8F8F8).iconSet("dull");
  event.create("fructose").fluid().color(0xF0F0F0).iconSet("dull");
  event.create("glucose").fluid().color(0xFFFAF0).iconSet("dull");
  event.create("peanut_butter").fluid().color(0xD8BC9D).iconSet("dull");
  event.create("cream").fluid().color(0xFFFBE6).iconSet("dull");
  event.create("ammonium_bisulfate").dust().color(0xF0F0F0).iconSet("dull");
  event.create("protein_solution").fluid().color(0xFFE0C0).iconSet("dull");
  event.create("cryo_zirconium_binding_solution").fluid().color(0x80B0CC).secondaryColor(0xA0D0E0).iconSet("dull");
  event.create("honey_catalyst").fluid().color(0xFFF9E3).iconSet("dull");
  event.create("ammonium_persulfate").fluid().color(0xF0FFFF).iconSet("dull");
  event.create("molasses").fluid().color(0x82574C).iconSet("dull");

  event.create("peanut").dust().color(0xE0C8A0).iconSet("dull");

  event.create("skim_milk").fluid().color(0xF8F8FF).iconSet("dull");
  event.create("acetone_cyanohydrin").fluid().color(0xFFF8DC).iconSet("dull");
  event.create("invert_sugar_solution").fluid().color(0xFFFCDE).iconSet("dull");
  event.create("ammonium_bisulfate_solution").fluid().color(0xF0F0F0).iconSet("dull");
  event.create("honey_comb_base_mixture").fluid().color(0xFFF0F5).iconSet("dull");

  event.create("amino_acids").fluid().color(0xFFFFFF).iconSet("dull");

  event.create("pollen_concentrate_fluid").fluid().color(0xFFC200).iconSet("dull");

  event.create("polymethyl_methacrylate")
    .ingot()
    .polymer()
    .fluid()
    .color(0xF0F8FF)
    .secondaryColor(0xF5FFFF)
    .flags(GTMaterialFlags.GENERATE_PLATE)
    .iconSet("dull");

  event.create("methyl_methacrylate").fluid().color(0xE8F8F8).secondaryColor(0xF5FFFF).iconSet("dull");
  event.create("concentrated_sulfuric_acid").fluid().color(0xFF8C00).iconSet("dull");
  event.create("oleum").fluid().color(0xDA6600).iconSet("dull");

  GTMaterials.Silver.setProperty($PropertyKey.ROTOR, new $RotorProperty(200, 1000, 2.0, 50));
  GTMaterials.Francium.setProperty($PropertyKey.INGOT, new $IngotProperty());
  GTMaterials.Technetium.setProperty($PropertyKey.INGOT, new $IngotProperty());
  GTMaterials.Radium.setProperty($PropertyKey.INGOT, new $IngotProperty());
  GTMaterials.Actinium.setProperty($PropertyKey.INGOT, new $IngotProperty());
  GTMaterials.Polonium.setProperty($PropertyKey.INGOT, new $IngotProperty());
  GTMaterials.Protactinium.setProperty($PropertyKey.INGOT, new $IngotProperty());
  GTMaterials.Neptunium.setProperty($PropertyKey.INGOT, new $IngotProperty());
  GTMaterials.Curium.setProperty($PropertyKey.INGOT, new $IngotProperty());
  GTMaterials.Berkelium.setProperty($PropertyKey.INGOT, new $IngotProperty());
  GTMaterials.Californium.setProperty($PropertyKey.INGOT, new $IngotProperty());
  GTMaterials.Einsteinium.setProperty($PropertyKey.INGOT, new $IngotProperty());
  GTMaterials.Fermium.setProperty($PropertyKey.INGOT, new $IngotProperty());
  GTMaterials.Mendelevium.setProperty($PropertyKey.INGOT, new $IngotProperty());
  GTMaterials.Nobelium.setProperty($PropertyKey.INGOT, new $IngotProperty());
  GTMaterials.Lawrencium.setProperty($PropertyKey.INGOT, new $IngotProperty());
  GTMaterials.Strontium.setProperty($PropertyKey.INGOT, new $IngotProperty());

  addFluid(GTMaterials.Iodine, $FluidStorageKeys.GAS);
  addFluid(GTMaterials.Oganesson, $FluidStorageKeys.GAS);
});

GTCEuStartupEvents.materialModification(event => {
  GTMaterials.get("akashic_zeronium").setProperty(
    $PropertyKey.TOOL,
    new $ToolProperty.Builder.of(180, 5.9, 2147483647, 6, [
      GTToolType.SWORD,
      GTToolType.DRILL_LV, GTToolType.DRILL_MV, GTToolType.DRILL_HV, GTToolType.DRILL_EV, GTToolType.DRILL_IV,
      GTToolType.PICKAXE, GTToolType.SHOVEL, GTToolType.AXE, GTToolType.HOE,
      GTToolType.WRENCH, GTToolType.HARD_HAMMER, GTToolType.SAW, GTToolType.FILE,
      GTToolType.SCREWDRIVER, GTToolType.WIRE_CUTTER, GTToolType.KNIFE, GTToolType.SOFT_MALLET
    ]).build()
  );
});

ItemEvents.modification(event => {
  event.modify("minecraft:ender_pearl", item => {
    item.maxStackSize = 64;
    item.fireResistant = true;
    item.rarity = "UNCOMMON";
  });

  event.modify("minecraft:sugar_cane", item => {
    item.burnTime = 300;
  });

  event.modify("gtceu:honey_ingot", item => {
    item.foodProperties = food => {
      food.hunger(2);
      food.saturation(50);
    };
  });

  event.modify("productivebees:honey_treat", item => {
    item.foodProperties = food => {
      food.hunger(4);
      food.saturation(200);
      food.fastToEat();
    };
  });
});
