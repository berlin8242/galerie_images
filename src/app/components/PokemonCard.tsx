// src/components/PokemonCard.tsx
'use client';
import React from 'react';
import Pokemon from '@/types/pokemon'; // Chemin d'importation corrigé

interface PokemonCardProps {
    pokemon: Pokemon; // Utilisation du type Pokemon importé
}

function PokemonCard({ pokemon }: PokemonCardProps) {
    return (
        <div className="bg-white rounded shadow-md p-4">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h2 className="text-lg font-bold">{pokemon.name}</h2>
            <p>Types: {pokemon.types.map((type) => type.type.name).join(', ')}</p>
        </div>
    );
}

export default PokemonCard;
