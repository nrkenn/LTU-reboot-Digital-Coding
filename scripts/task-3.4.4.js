var favouriteRecipe = {
    recipeTitle: 'Paella',
    servings: 8,
    ingredients: [
        {name: 'chorizo'}, 
        {name: 'chicken'}, 
        {name: 'prawns'}, 
        {name: 'peppers'}, 
        {name: 'onion'},
        {name: 'stock'}, 
        {name: 'wine'}, 
        {name: 'rice'}
    ],

    directions: 'Combine all ingredients together.',
}

function describeUser(user) {
    document.write('To make ' + user.servings + ' servings of ' + user.recipeTitle);

    for (var i = 0; i < users.length; i++) {​
        var user = users[i];​
        document.write('Ingredients ' + user.name);

}

describeUser(favouriteRecipe)
