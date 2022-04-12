// priority: 99
onEvent('recipes', event => {
    const recipes = [
        {
            input: {item: 'create:zinc_ore' },
            output: 'create:crushed_zinc_ore',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: false,
        },
        {
            input: {item: 'create:deepslate_zinc_ore' },
            output: 'create:crushed_zinc_ore',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: false,
        },
        {
            input: { item: 'create:raw_zinc' },
            output: 'create:crushed_zinc_ore',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: false,
        },
        {
            input: { item: 'create:zinc_ingot' },
            output: 'create:crushed_zinc_ore',
            count: 1,
            time: 100,
            ignore_crushing_multiplier: true,
        },
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'occultism:crushing',
                ingredient: recipe.input,
                result: {
                    item: recipe.output,
                    count: recipe.count
                },
                crushing_time: recipe.time,
                ignore_crushing_multiplier: recipe.ignore_crushing_multiplier
            })
    });
})

