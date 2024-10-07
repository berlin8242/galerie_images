'use client';
import Link from 'next/link'; // Importation de Link pour la navigation
import Pokemon from '@/types/pokemon';

interface PokemonListProps {
    pokemonList: Pokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemonList }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {pokemonList.map((pokemon) => (
                <Link key={pokemon.name} href={`/pokemon/${pokemon.id}`} passHref>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
                        <img
                            src={pokemon.sprites.front_default}
                            alt={pokemon.name}
                            className="w-20 h-20 object-cover mx-auto mb-2" // Réduction maximale de la taille de l'image
                        />
                        <div className="p-4 text-center">
                            <h2 className="font-bold text-sm">{pokemon.name}</h2>
                            <p className="text-gray-500 text-xs">
                                Types: {pokemon.types.map((type) => type.type.name).join(', ')}
                            </p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default PokemonList;
