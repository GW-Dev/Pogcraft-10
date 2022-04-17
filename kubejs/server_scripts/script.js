// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

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

	event.remove({output: 'ae2:storage_cell_1k'}),
	event.remove({output: 'ae2:storage_cell_4k'}),
	event.remove({output: 'ae2:storage_cell_16k'}),
	event.remove({output: 'ae2:storage_cell_64k'}),
	event.remove({output: 'ae2:fluid_storage_cell_1k'}),
	event.remove({output: 'ae2:fluid_storage_cell_4k'}),
	event.remove({output: 'ae2:fluid_storage_cell_16k'}),
	event.remove({output: 'ae2:fluid_storage_cell_64k'}),


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

	  event.custom({
		  "type": "occultism:miner",
		  "ingredient": "#occultism:miners/ores",
		  "result": "#forge:ores/fluorite",
		  "weight": 400
	  })

})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})
