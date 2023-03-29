const recipes = JSON.parse(recipe);

const gallery = document.querySelector('.gallery');

function recipeEngineTemplate(recipes) {
    return {
        tag: 'article',
        cls: 'recipes',
        content: [
            {
                tag: 'div',
                cls: 'recipes_bear',
                attrs: {
                    style: `background-image: url(${recipes.image_url})`,
                },
            },
            {
                tag: 'footer',
                cls: 'info_bear',
                content: [
                    {
                        tag: 'div',
                        cls: 'bear_name',
                        content: [
                        {
                            tag: 'h2',
                            cls: 'tagline',
                            content: recipes.tagline, 
                        },
                        {
                            tag: 'h3',
                            cls: 'name',
                            content: recipes.name,
                        },
                        {
                            tag: 'div',
                            cls: 'description',
                            content: recipes.description,
                        },
                        ]
                    },
                    {
                        tag: 'div',
                        cls: 'bear_info',
                        content: [
                            {
                                tag: 'div',
                                cls: 'abv',
                                content: 'abv: ' + recipes.abv, 
                            },
                            {
                                tag: 'div',
                                cls: 'first_brewed',
                                content: 'Date of first brewered: ' + recipes.first_brewed,
                            },
                        ]
                    }
                ]
            }
        ]
    }};

    gallery.appendChild(
        templateEngine(recipes.map(recipeEngineTemplate))
    );
