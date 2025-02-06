import { useState } from "react";
import { Pokemon } from "pokedex-promise-v2";

import { usePokemon } from "../../hooks/pokemon/useSpecificPokemon.ts";

import Loader from "../../ui/Loader.tsx";
import PokemonStats from "./PokemonStats.tsx";

interface InfoProps {
  pokemon: Pokemon;
}

const PokemonInfo = ({ pokemon }: InfoProps) => {
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  return (
    <>
      <div className="relative">
        {/* Image (Pokémon HOME artwork) */}
        <img
          src={pokemon.sprites.other.home.front_default?.toString()}
          alt={pokemon.name}
          onLoad={() => setIsLoadingImage(false)}
          className="mx-auto aspect-square object-contain text-transparent dark:brightness-90"
        />

        {/* Covers Pokémon image with the loader if the image hasn't loaded */}
        {isLoadingImage && (
          <div className="absolute top-0 aspect-square max-h-[512px] w-full bg-slate-100 dark:bg-slate-800">
            <Loader size={24} displaysText={true} />
          </div>
        )}
      </div>

      {/* Name */}
      <h1 className="text-2xl font-bold capitalize">{pokemon.species.name}</h1>

      {/* Types */}
      <p>
        {pokemon.types.length === 1 ? "Type: " : "Types: "}
        {pokemon.types.map((type) => (
          <span key={type.type.name} className="capitalize">
            {` ${type.type.name}`}
          </span>
        ))}
      </p>

      {/* Abilities */}
      <p>
        {pokemon.abilities.length === 1 ? "Ability: " : "Abilities: "}
        {pokemon.abilities.map((ability) => (
          <span key={ability.ability.name} className="capitalize">
            {` ${ability.ability.name}`}
          </span>
        ))}
      </p>

      {/* Stats */}
      <PokemonStats pokemonStats={pokemon.stats} />
    </>
  );
};

const PokemonInfoFromLink = ({ name }: { name: string }) => {
  const { data: pokemon, isLoading } = usePokemon(name);

  return (
    <>
      {isLoading || !pokemon ? (
        <>
          <div className="aspect-square max-h-[512px] w-full">
            <Loader size={24} displaysText={true} />
          </div>

          <h1 className="text-2xl font-bold capitalize">{name}</h1>
        </>
      ) : (
        <PokemonInfo pokemon={pokemon} />
      )}
    </>
  );
};
export { PokemonInfo, PokemonInfoFromLink };
