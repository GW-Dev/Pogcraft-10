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

    event.custom({
      type: 'create:splashing',
      ingredients: [ Item.of('create:crushed_silver_ore')],
      results: [
        Item.of('9x #forge:nuggets/silver'),
        Item.of('#forge:nuggets/iesnium').withChance(0.12)
      ], 
    })

})