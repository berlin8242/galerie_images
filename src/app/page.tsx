'use client';
import { useEffect, useState } from 'react';
import PokemonList from './components/PokemonList';
import TypeFilter from './components/TypeFilter';
import Pokemon from '@/types/pokemon';

const HomePage = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const data = await response.json();
      const pokemonData: Pokemon[] = await Promise.all(data.results.map(async (pokemon: { url: string }) => {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        return { ...data, name: data.name, url: pokemon.url };
      }));
      setPokemonList(pokemonData);
      setFilteredPokemonList(pokemonData);
      setIsLoading(false);
    };

    fetchPokemon();
  }, []);

  const handleFilter = (type: string) => {
    if (type === '') {
      setFilteredPokemonList(pokemonList);
    } else {
      const filteredList = pokemonList.filter(pokemon => pokemon.types.some(t => t.type.name === type));
      setFilteredPokemonList(filteredList);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">Pokédex</h1>
      <TypeFilter onFilter={handleFilter} />
      <PokemonList pokemonList={filteredPokemonList} />
    </div>
  );
};

export default HomePage;
