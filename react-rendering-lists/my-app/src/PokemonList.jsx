import React from 'react';

const PokemonList = ({ pokedex }) => {
  return (
    <ul>
      {pokedex.map((pokemon) => (
        <li key={pokemon.number}>{pokemon.name}</li>
      ))}
    </ul>
  );
};

export default PokemonList;
