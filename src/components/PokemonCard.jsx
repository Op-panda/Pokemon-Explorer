import React from 'react';
import TypeIcon from './TypeIcon';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <div className="pokemon-id">{pokemon.id}</div>
      <img src={pokemon.image} alt={pokemon.name} />
      <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
      <div className="types">
        {pokemon.types.map((type) => (
          <span key={type} className="type">
            <TypeIcon type={type} />
            <span className="type-text">
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
