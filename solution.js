// your solution should go here
// for demo purposes use the console for any out you will need.
const recipe = {
    'title': 'Pineapple Chicken',
    'servings': 2,
    'ingredients': ['1 red bell pepper, cubed', '3 table spoon salt', '2 liters of water']
};

console.log(recipe.title);
console.log('Servings: ' + recipe.servings);
console.log('Ingredients:');
for (var i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
}

// books solution
const books = [
    {title: 'The javascript ninja',
     author: 'creato of Jquey',
     alreadyRead: false
    },
    {title: 'php data structure and algothrims',
    author: 'Aubrey Zulu',
    alreadyRead: true
    }];
 
  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    let bookInfo = book.title + '" by ' + book.author;
    if (book.alreadyRead) {
      console.log('You already read "' + bookInfo);
    } else {
      console.log('You still need to read "' + bookInfo);
    }
  }