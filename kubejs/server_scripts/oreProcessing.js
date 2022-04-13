onEvent('recipes', event => {
    event.custom({
      type: 'create:crushing',
      ingredients: [ Item.of('occultism:silver_ore')],
      results: [
        Item.of('create:crushed_silver_ore'),
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('create:crushed_silver_ore').withChance(0.75),
        Item.of('minecraft:cobblestone').withChance(0.12)
      ], 
    })

    event.custom({
      type: 'create:crushing',
      ingredients: [Item.of('occultism:silver_ore_deepslate')],
      results: [
        Item.of('2x create:crushed_silver_ore'),
        Item.of('create:experience_nugget').withChance(0.75),
        Item.of('create:crushed_silver_ore').withChance(0.75),
        Item.of('minecraft:cobbled_deepslate').withChance(0.12)
      ], 
    })    

      event.recipes.createSplashing(
      [Item.of('9x #forge:nuggets/silver'), Item.of('#forge:nuggets/iesnium')], [
        Item.of('create:crushed_silver_ore')
      ])

      event.recipes.createMixing([Item.of('create:crushed_zinc_ore'), Item.of('create:crushed_silver_ore'), Item.of('6x botania:manasteel_nugget')] , [
        '3x botania:manasteel_ingot'
      ])

      event.recipes.createMixing('occultism:otherstone', [
        'botania:livingrock',
        'create:crushed_silver_ore'
      ])

      event.recipes.createMixing('occultism:otherworld_log', [
        'botania:livingwood_log',
        'create:crushed_silver_ore'
      ])

      event.recipes.createMixing(Fluid.of('pneumaticcraft:oil', 250) , [
        Fluid.of('minecraft:water', 1000),
        '3x #minecraft:coals'
      ]).heated()

      event.recipes.createMixing('ae2:certus_quartz_crystal' , [
        Fluid.of('pneumaticcraft:oil', 250),
        'create:crushed_zinc_ore',
        'minecraft:quartz'
      ]).superheated()
})