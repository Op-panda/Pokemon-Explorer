import React from 'react';
import PokemonCard from './PokemonCard';
import SkeletonCard from './SkeletonCard';

const PokemonList = ({ pokemons, loading }) => {
  if (loading) {
    return (
      <div className="pokemon-list">
        {[...Array(12)].map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  if (!pokemons.length) {
    return (
      <div className="no-results">
        <p>No Pokémon found matching your search criteria.</p>
        <p className="no-results-subtitle">
          Try adjusting your search or filters.
        </p>
      </div>
    );
  }

  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
