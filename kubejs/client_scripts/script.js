// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.add.items', event => {
	event.add(Item.of('create:chromatic_compound'))
	event.add(Item.of('create:refined_radiance'))
	event.add(Item.of('create:refined_radiance_casing'))
	event.add(Item.of('create:shadow_steel'))
	event.add(Item.of('create:shadow_steel_casing'))
  })

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
})