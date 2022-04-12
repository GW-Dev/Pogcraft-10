// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('ftbquests.custom_reward.18A914D4583AA29F', event => {
	log.info('Custom reward!')
	event.player.tell('Hello!')
  })

onEvent('recipes', event => {
	// Change recipes here
	event.remove({output: 'rechiseled:chisel'}),

	event.shaped('rechiseled:chisel', [
		'III',
		' I ',
		' S '
		], {
		S: 'minecraft:stick',
		I: '#forge:ingots/iron'
	})

	event.custom({
		"type": "botania:mana_infusion",
		"input": {
		  "item": "farmersdelight:tree_bark",
		  
		},
		"output": {
		  "item": "farmersdelight:tree_bark",
		  "count": 2
		},
		"mana": 2000,
		"catalyst": {
		"type": "block",
		"block": "botania:conjuration_catalyst" }
	  })

	  event.custom({
		"type": "botania:mana_infusion",
		"input": {
		  "item": "botania:cell_block",
		  
		},
		"output": {
		  "item": "minecraft:kelp",
		  "count": 1
		},
		"mana": 1000,
		"catalyst": {
		"type": "block",
		"block": "botania:alchemy_catalyst" }
	  })

	  event.custom({
		"type": "botania:mana_infusion",
		"input": {
		  "item": "minecraft:kelp",
		  
		},
		"output": {
		  "item": "minecraft:bamboo",
		  "count": 1
		},
		"mana": 1000,
		"catalyst": {
		"type": "block",
		"block": "botania:alchemy_catalyst" }
	  })

	  event.custom({
		"type": "botania:mana_infusion",
		"input": {
		  "item": "minecraft:bamboo",
		  
		},
		"output": {
		  "item": "farmersdelight:wild_beetroots",
		  "count": 1
		},
		"mana": 1000,
		"catalyst": {
		"type": "block",
		"block": "botania:alchemy_catalyst" }
	  })

	  event.custom({
		"type": "botania:mana_infusion",
		"input": {
		  "item": "farmersdelight:wild_beetroots",
		  
		},
		"output": {
		  "item": "farmersdelight:wild_cabbages",
		  "count": 1
		},
		"mana": 1000,
		"catalyst": {
		"type": "block",
		"block": "botania:alchemy_catalyst" }
	  })

	  event.custom({
		"type": "botania:mana_infusion",
		"input": {
		  "item": "farmersdelight:wild_cabbages",
		  
		},
		"output": {
		  "item": "farmersdelight:wild_rice",
		  "count": 1
		},
		"mana": 1000,
		"catalyst": {
		"type": "block",
		"block": "botania:alchemy_catalyst" }
	  })

	  event.custom({
		"type": "botania:mana_infusion",
		"input": {
		  "item": "farmersdelight:wild_rice",
		  
		},
		"output": {
		  "item": "farmersdelight:wild_onions",
		  "count": 1
		},
		"mana": 1000,
		"catalyst": {
		"type": "block",
		"block": "botania:alchemy_catalyst" }
	  })

	  event.custom({
		"type": "botania:mana_infusion",
		"input": {
		  "item": "farmersdelight:wild_onions",
		  
		},
		"output": {
		  "item": "farmersdelight:wild_tomatoes",
		  "count": 1
		},
		"mana": 1000,
		"catalyst": {
		"type": "block",
		"block": "botania:alchemy_catalyst" }
	  })

	  event.custom({
		"type": "botania:mana_infusion",
		"input": {
		  "item": "farmersdelight:wild_tomatoes",
		  
		},
		"output": {
		  "item": "farmersdelight:wild_carrots",
		  "count": 1
		},
		"mana": 1000,
		"catalyst": {
		"type": "block",
		"block": "botania:alchemy_catalyst" }
	  })

	  event.custom({
		"type": "botania:mana_infusion",
		"input": {
		  "item": "farmersdelight:wild_carrots",
		  
		},
		"output": {
		  "item": "farmersdelight:wild_potatoes",
		  "count": 1
		},
		"mana": 1000,
		"catalyst": {
		"type": "block",
		"block": "botania:alchemy_catalyst" }
	  })

	  event.custom({
		"type": "botania:mana_infusion",
		"input": {
		  "item": "farmersdelight:wild_potatoes",
		  
		},
		"output": {
		  "item": "farmersdelight:wild_beetroots",
		  "count": 1
		},
		"mana": 1000,
		"catalyst": {
		"type": "block",
		"block": "botania:alchemy_catalyst" }
	  })

	  event.custom({
		"type": "botania:mana_infusion",
		"input": {
		  "item": "botania:gaia_ingot",
		  
		},
		"output": {
		  "item": "minecraft:budding_amethyst",
		  "count": 1
		},
		"mana": 50000,
		"catalyst": {
		"type": "block",
		"block": "botania:alchemy_catalyst" }
	  })

	event.recipes.createMixing('create:chromatic_compound', [
        '#forge:dusts/glowstone',
        '#forge:dusts/glowstone',
        '#forge:dusts/glowstone',
        'create:powdered_obsidian',
        'create:powdered_obsidian',
        'create:powdered_obsidian',
        'create:polished_rose_quartz'
      ]).superheated()



})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})
onEvent('block.loot_tables', event => {
	// all dirt blocks have a 50% chance to drop an enchanted diamond sword named "test"
	event.modifyBlock(/^minecraft:tall_grass/, table => {
	  table.addPool(pool => {
		pool.addItem('minecraft:pumpkin_seeds').randomChance(0.05)
		pool.addItem('minecraft:melon_seeds').randomChance(0.05)
	  })
	})
  })
