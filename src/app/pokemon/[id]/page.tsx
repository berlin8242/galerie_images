'use client';
import { useEffect, useState } from 'react';

const PokemonDetails = ({ params }: { params: { id: string } }) => {
    const [pokemon, setPokemon] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPokemon = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
            const data = await response.json();
            setPokemon(data);
            setIsLoading(false);
        };

        fetchPokemon();
    }, [params.id]);

    if (isLoading) {
        return <div className="flex justify-center items-center h-screen text-2xl">Loading...</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-4">{pokemon.name}</h1>
            <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="w-40 h-40 object-cover mx-auto mb-4" // Réduction de la taille de l'image ici aussi
            />
            <p className="text-lg">Height: {pokemon.height}</p>
            <p className="text-lg">Weight: {pokemon.weight}</p>
            <p className="text-lg">Types: {pokemon.types.map((type: { type: { name: string } }) => type.type.name).join(', ')}</p>
            {/* Ajoutez d'autres informations sur le Pokémon ici */}
        </div>
    );
};

export default PokemonDetails;
