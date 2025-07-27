import { Fragment } from "react";
import { Link } from "@tanstack/react-router";

import { useEvolutionChain } from "@/hooks/usePokeApi.ts";
import getEvolutionData from "@/features/pokemon/utils/getEvolutionData.ts";
import type { ItemResource } from "@/types/types.ts";

interface ChainProps {
  id: number | undefined;
  pokemonName: string | undefined;
}

interface Evolution extends ItemResource {
  evolutionMethod: string;
}

// Link to the respective Pokémon page and the evolution description
const pokemonEvolutionText = (pokemon: Evolution) => (
  <>
    <Link
      to="/pokemon/$pokemonId"
      params={{ pokemonId: String(pokemon.id) }}
      draggable="false"
      className="capitalize underline underline-offset-4 transition-[color] hover:text-blue-600 focus:text-blue-600 dark:hover:text-blue-400 dark:focus:text-blue-400"
    >
      {pokemon.name}
    </Link>
    {` ${pokemon.evolutionMethod || "(no data available)"}`}
  </>
);

// Format the list of evolutions
const formatNextEvolutions = (pokemonList: Evolution[]) => {
  // If this Pokémon has one evolution branch after it
  if (pokemonList.length === 1) return pokemonEvolutionText(pokemonList[0]);

  // If this Pokémon has two evolution branches after it
  if (pokemonList.length === 2)
    return (
      <>
        {pokemonEvolutionText(pokemonList[0])}
        {", or "}
        {pokemonEvolutionText(pokemonList[1])}
      </>
    );

  // If this Pokémon has three or more evolution branches after it
  return (
    <>
      {pokemonList.slice(0, pokemonList.length - 1).map((pokemon) => (
        <Fragment key={pokemon.name}>
          {pokemonEvolutionText(pokemon)}
          {", "}
        </Fragment>
      ))}
      {" or "}
      {pokemonEvolutionText(pokemonList[pokemonList.length - 1])}
    </>
  );
};

const PokemonEvolutionChain = ({ id, pokemonName }: ChainProps) => {
  const { data: chain } = useEvolutionChain(id);

  // If the data hasn't arrived yet
  if (!chain || !pokemonName) return <p>Loading...</p>;

  // Calling the function to get the evolution data
  const { previous, next } = getEvolutionData(chain.chain, pokemonName);

  // If this Pokémon doesn't evolve at all
  if (!previous && !next.length)
    return <p className="mx-2">This Pokémon does not evolve.</p>;

  // If this Pokémon is a base form
  if (!previous)
    return (
      <p className="mx-2">
        This Pokémon evolves into {formatNextEvolutions(next)}.
      </p>
    );

  // If this Pokémon is fully evolved
  if (!next.length)
    return (
      <p className="mx-2">
        This Pokémon evolves from {pokemonEvolutionText(previous)}.
      </p>
    );

  // If this Pokémon is a middle evolution
  return (
    <p className="mx-2">
      This Pokémon evolves from {pokemonEvolutionText(previous)}, and evolves
      into {formatNextEvolutions(next)}.
    </p>
  );
};
export default PokemonEvolutionChain;
