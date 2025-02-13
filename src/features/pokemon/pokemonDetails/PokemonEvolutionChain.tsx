import { Fragment } from "react";
import { Link } from "react-router";
import { Chain } from "pokedex-promise-v2";

import getEvolutionData from "../../../utils/getEvolutionData.ts";

interface ChainProps {
  chain: Chain | undefined;
  pokemonName: string | undefined;
}

// Reusable link to the respective Pokémon page
const pokemonLink = (pokemon: { name: string; id: number }) => (
  <Link
    to={`/pokedex/pokemon/${pokemon.id}`}
    className="capitalize underline underline-offset-4 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
  >
    {pokemon.name}
  </Link>
);

// Format the list of evolutions
const formatEvolutions = (pokemonList: { name: string; id: number }[]) => {
  // If this Pokémon has one evolution branch after it
  if (pokemonList.length === 1) return pokemonLink(pokemonList[0]);

  // If this Pokémon has two evolution branches after it
  if (pokemonList.length === 2)
    return (
      <>
        {pokemonLink(pokemonList[0])} or {pokemonLink(pokemonList[1])}
      </>
    );

  // If this Pokémon has three or more evolution branches after it
  return (
    <>
      {pokemonList.slice(0, pokemonList.length - 1).map((pokemon) => (
        <Fragment key={pokemon.name}>{pokemonLink(pokemon)}, </Fragment>
      ))}
      {" or "} {pokemonLink(pokemonList[pokemonList.length - 1])}
    </>
  );
};

const PokemonEvolutionChain = ({ chain, pokemonName }: ChainProps) => {
  // If the data hasn't arrived yet
  if (!chain || !pokemonName) return <p>Loading...</p>;

  // Calling the function to get the evolution data
  const { previous, next } = getEvolutionData(chain, pokemonName);

  // If this Pokémon doesn't evolve at all
  if (!previous && !next.length) return <p>This Pokémon does not evolve.</p>;

  // If this Pokémon is a base form
  if (!previous)
    return <p>This Pokémon evolves into {formatEvolutions(next)}.</p>;

  // If this Pokémon is fully evolved
  if (!next.length)
    return <p>This Pokémon evolves from {pokemonLink(previous)}.</p>;

  // If this Pokémon is a middle evolution
  return (
    <p>
      This Pokémon evolves from {pokemonLink(previous)}, and evolves into{" "}
      {formatEvolutions(next)}.
    </p>
  );
};
export default PokemonEvolutionChain;
