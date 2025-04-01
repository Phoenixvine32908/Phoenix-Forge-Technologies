### pattern modifier
it would add a few options to modify how the ME system would behave while using the selected pattern
#### set the programmed circuit for a gtceu machine attached to the given pattern provider 
it would work only if the pattern provider is not the base pattern provider, the player would need to use a modified GregProvider or sth like that
#### redstone output mode
the player would be able to enter any string, and all level emitters with their name matching the string, would get activated when the pattern is used
- option to set the mode as a pulse (only short pulse when the crafting operation begins)
- set the mode as continuous (output redstone while the item is crafted (signal starts with the craft, ends when the requested item is placed inside ME system)
- set the activate mode for a craftig tree (it would give the pulse/output, when the system starts crafting the first item in the given crafting tree)
- set the activate mode for the item (it would give the pulse/output only when the system starts crafting the item encoded in the pattern)
#### NBT ignore option
already implemented in crazy AE2 addons 
### block reader 
a cable part that would read some data from any attached machine, and the player would be able to select which data is interesting to him, and set a variable name for that value. The value the will be accessible from the whole ME system, and could be for example displayed on a display. Usefull to for example dispaly power output of a machine or how far the machine is in doing something.
### ampere meeter 
block that would transfer FE/EU/AE from its one side to another, and would allow the player to set a variable that would hold the amount of power transfered  
### energy accessor 
a cable part that would allow the player to extract AE as FE/EU from an ME system, the max extract defined by the amount of accel cards inside and and for EU, the player will have to input a power thingy of a given tier to extract EU in that selected voltage, extract limited by the thingys amps. However the player should not be able to insert EU into ME system in any way to avoid using it as a convinient power station/transformer
### mob storage 
import export bus for mobs, the player would have to craft a special mob storage cell (sth like the mekanisms gases) to store the mobs inside ME system, and would need to have a special item inside the system to extract them to theirs inventory (some kind of entity holder, something like when you need a bucket to extract water), it would also add a few other features
- spawner controller, the player would be able to place a spawner inside this block, and it would generate given entities depositing them straight into ME system, possible accel cards 
- mob grinder, multiblock 5x5x5, consisting of for example a looting block (each would increase the amount of mob drops) or an XP block (each would increase the amount of xp) etc, that would take the selected mob(s) from the system and generate fluid XP (new fluid the mod will add, and use in for example auto enchanter) and mob drops, possible accel cards
- damage plane, something like annihilation plane, but instead of breaking block, it would damage entities, possible enchantments and accel cards
### generator
multiblock 7x7x7 consisting of for example crafting storage units, a burn chamber (s), stabilizers, insulation, based on the blocks used and speed upgrades installed it would generate AE starting from 128AE/t up to 16M AE/t, it would take the selected resource (quartz/flux crystals/fluix crystals) from ME system, and burn them for some time determined by the amount of efficiency blocks and burn chambers inside and the accel cards installed, minimal speed should be equivalent to the basic furnace, max speed is a stack of items per burn chamber per tick