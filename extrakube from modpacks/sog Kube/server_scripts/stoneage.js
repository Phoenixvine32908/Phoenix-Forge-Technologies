ServerEvents.recipes(event => {

    event.remove({ output: 'gtceu:doge_coin' })
    exdeorum.removeDefaultSieveRecipes(event)
    event.smelting('3x gtceu:wrought_iron_nugget', 'minecraft:iron_nugget')

    
  })  
