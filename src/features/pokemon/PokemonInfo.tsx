import { Fragment, useState } from "react";
import { Pokemon } from "pokedex-promise-v2";

import { usePokemon } from "../../hooks/pokemon/useSpecificPokemon.ts";

import Loader from "../../ui/Loader.tsx";

interface PokemonInfoProps {
  pokemon: Pokemon;
}

const PokemonInfo = ({ pokemon }: PokemonInfoProps) => {
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
      <h2 className="mb-1 text-lg font-semibold">Base Stats:</h2>

      <div className="max-w-lg rounded-lg bg-slate-200 p-4 pb-2 shadow-lg transition-colors dark:bg-slate-700">
        <div className="grid grid-cols-[auto_auto_1fr] gap-2">
          {pokemon.stats.map((stat) => (
            <Fragment key={stat.stat.name}>
              {/* Stat name */}
              <h3 className="font-semibold capitalize">
                {stat.stat.name.split("-").join(" ")}:
              </h3>

              {/* Stat number */}
              <p className="text-end">{stat.base_stat}</p>

              {/* Stat bar */}
              <div className="my-auto h-3/4 w-full rounded-sm bg-green-200 transition-colors dark:bg-green-700">
                <div
                  style={{ width: `calc(100% * ${stat.base_stat} / 255)` }}
                  className="h-full rounded-sm bg-green-500/75"
                />
              </div>
            </Fragment>
          ))}
        </div>

        <h3 className="pt-2 font-semibold">
          {`Base Stat Total: ${pokemon.stats
            .map((stat) => stat.base_stat)
            .reduce((acc, cur) => acc + cur, 0)}`}
        </h3>
      </div>
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
