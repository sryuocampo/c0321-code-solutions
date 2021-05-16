import React from 'react';
import ReactDOM from 'react-dom';
function PokemonList(props) {
  const list = (
    <ul>
      {props.pokedex.map(pokemon =>
        <li key={pokemon.number}>
          {pokemon.name}
        </li>
      )}
    </ul>
  );

  return (
    <div>
      {list}
    </div>
  );
}

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];
ReactDOM.render(
  <PokemonList pokedex={pokedex} />,
  document.getElementById('root')
);
