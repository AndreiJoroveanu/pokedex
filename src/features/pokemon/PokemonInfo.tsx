import { Fragment } from "react";
import { Pokemon } from "pokedex-promise-v2";

import { usePokemon } from "../../hooks/usePokemon.ts";

import Loader from "../../ui/Loader.tsx";

interface PokemonInfoProps {
  pokemon: Pokemon;
}

const PokemonInfo = ({ pokemon }: PokemonInfoProps) => (
  <>
    {/* Image (Pokémon HOME artwork) */}
    <img
      src={pokemon.sprites.other.home.front_default?.toString()}
      alt={pokemon.name}
      className="mx-auto aspect-square object-contain text-transparent dark:brightness-90"
    />

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

    <div className="grid max-w-lg grid-cols-[auto_auto_1fr] gap-2 rounded-lg bg-slate-200 p-4 pb-2 shadow-lg dark:bg-slate-700">
      {pokemon.stats.map((stat) => (
        <Fragment key={stat.stat.name}>
          <h3 className="font-semibold capitalize">
            {stat.stat.name.split("-").join(" ")}:
          </h3>

          <p className="text-end">{stat.base_stat}</p>

          <div className="my-auto h-3/4 w-full rounded bg-green-200">
            <div
              style={{ width: `calc(100% * ${stat.base_stat} / 255)` }}
              className="h-full rounded bg-green-400"
            />
          </div>
        </Fragment>
      ))}

      <h3 className="font-semibold">
        {`Base Stat Total: ${pokemon.stats
          .map((stat) => stat.base_stat)
          .reduce((acc, cur) => acc + cur, 0)}`}
      </h3>
    </div>
  </>
);

const PokemonInfoFromLink = ({ name }: { name: string }) => {
  const { data: pokemon, isLoading } = usePokemon(name);

  if (isLoading || !pokemon)
    return (
      <>
        <div className="mx-auto h-[512px] w-[512px]">
          <Loader size={24} displaysText={true} />
        </div>

        <h1 className="text-2xl font-bold capitalize">{name}</h1>
      </>
    );

  return <PokemonInfo pokemon={pokemon} />;
};
export { PokemonInfo, PokemonInfoFromLink };
