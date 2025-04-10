ItemEvents.tooltip((event) => {
  // Disabled Items
  event.add(
    [
      "sophisticatedbackpacks:inception_upgrade",
      "sophisticatedbackpacks:battery_upgrade",
      "storagedrawers:redstone_upgrade",
      "storagedrawers:min_redstone_upgrade",
      "storagedrawers:max_redstone_upgrade",
      "storagedrawers:compacting_drawers_3",
      "storagedrawers:fill_level_upgrade",
      "storagedrawers:illumination_upgrade",

      "expatternprovider:caner",
      "ae2:inscriber",
      "expatternprovider:ex_inscriber",
      "expatternprovider:ingredient_buffer"
    ],
    Text.red("Disabled in this modpack!").bold(true)
  );

  event.add("gtceu:greenhouse", Text.gray("Two green thumbs up!"));
  event.add(
    "gtceu:construction_core",
    Text.gray("Offers cheaper recipes for building blocks!")
  );
  event.add(
    "gtceu:construction_core",
    Text.darkGray("Requires Construction Foam to operate.")
  );

  event.add("ae2:controller", Text.gray("Channels are §cdisabled§7."));

  event.add("expatternprovider:fishbig", Text.gray("Congratulations! You won Minecraft."));
});
