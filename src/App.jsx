import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PokemonList from './components/PokemonList';
import Loading from './components/Loading';
import Error from './components/Error';
import usePokemon from './hooks/usePokemon';
import './App.css';

const App = () => {
  const { pokemons, loading, error, refetch } = usePokemon();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const types = Array.from(new Set(pokemons.flatMap((p) => p.types)));

  const filteredPokemons = pokemons.filter((pokemon) => {
    const matchesName = pokemon.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesType = selectedType
      ? pokemon.types.includes(selectedType)
      : true;
    return matchesName && matchesType;
  });

  if (error) return <Error message={error} onRetry={refetch} />;

  return (
    <div className="app">
      <Header />
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
        types={types}
      />
      <div className="pokemon-container">
        <PokemonList pokemons={filteredPokemons} loading={loading} />
      </div>
    </div>
  );
};

export default App;
