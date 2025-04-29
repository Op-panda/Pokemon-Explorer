import { useState, useEffect } from 'react';

const usePokemon = (limit = 150) => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPokemons = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            const pokemonDetails = await Promise.all(
                data.results.map(async (pokemon) => {
                    const res = await fetch(pokemon.url);
                    if (!res.ok) {
                        throw new Error(`HTTP error! status: ${res.status}`);
                    }
                    const details = await res.json();
                    return {
                        id: details.id,
                        name: details.name,
                        image: details.sprites.front_default,
                        types: details.types.map((t) => t.type.name),
                    };
                })
            );

            setPokemons(pokemonDetails);
        } catch (error) {
            setError(error.message || 'Failed to fetch Pokémon. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPokemons();
    }, [limit]);

    return { pokemons, loading, error, refetch: fetchPokemons };
};

export default usePokemon; 