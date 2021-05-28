fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(user => console.log(user))
  .catch(err => console.error(err));

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(response => response.json())
  .then(pokemon => console.log(pokemon))
  .catch(err => console.error(err));
