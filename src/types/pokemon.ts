// src/types/pokemon.ts

export default interface Pokemon {
    name: string;
    id: number;
    types: { type: { name: string } }[];
    height: number;
    weight: number;
    sprites: {
        front_default: string;
    };
}
