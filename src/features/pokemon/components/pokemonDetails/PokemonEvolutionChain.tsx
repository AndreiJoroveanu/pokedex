import { Fragment, memo } from "react";
import { Link } from "react-router";
import { Chain } from "pokedex-promise-v2";

import getEvolutionData from "@/features/pokemon/utils/getEvolutionData.ts";
import useAppStore from "@/store/useAppStore.ts";
import { ItemResource } from "@/types/types.ts";

interface ChainProps {
  chain: Chain | undefined;
  pokemonName: string | undefined;
}

interface Evolution extends ItemResource {
  evolutionMethod: string;
}

// Link to the respective Pokémon page and the evolution description
const PokemonEvolutionText = ({ pokemon }: { pokemon: Evolution }) => {
  const resetPanels = useAppStore((state) => state.resetPokemonDetailsPanels);

  return (
    <>
      <Link
        to={`/pokedex/pokemon/${pokemon.id}`}
        onClick={resetPanels}
        draggable="false"
        className="capitalize underline underline-offset-4 transition-[color] hover:text-blue-600 focus:text-blue-600 dark:hover:text-blue-400 dark:focus:text-blue-400"
      >
        {pokemon.name}
      </Link>
      {` ${pokemon.evolutionMethod || "(no data available)"}`}
    </>
  );
};

// Format the list of evolutions
const formatEvolutions = (pokemonList: Evolution[]) => {
  // If this Pokémon has one evolution branch after it
  if (pokemonList.length === 1)
    return <PokemonEvolutionText pokemon={pokemonList[0]} />;

  // If this Pokémon has two evolution branches after it
  if (pokemonList.length === 2)
    return (
      <>
        <PokemonEvolutionText pokemon={pokemonList[0]} />, or{" "}
        <PokemonEvolutionText pokemon={pokemonList[1]} />
      </>
    );

  // If this Pokémon has three or more evolution branches after it
  return (
    <>
      {pokemonList.slice(0, pokemonList.length - 1).map((pokemon) => (
        <Fragment key={pokemon.name}>
          <PokemonEvolutionText pokemon={pokemon} />,{" "}
        </Fragment>
      ))}
      {" or "}
      <PokemonEvolutionText pokemon={pokemonList[pokemonList.length - 1]} />
    </>
  );
};

const PokemonEvolutionChain = memo(({ chain, pokemonName }: ChainProps) => {
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
    return (
      <p>
        This Pokémon evolves from <PokemonEvolutionText pokemon={previous} />.
      </p>
    );

  // If this Pokémon is a middle evolution
  return (
    <p>
      This Pokémon evolves from <PokemonEvolutionText pokemon={previous} />, and
      evolves into {formatEvolutions(next)}.
    </p>
  );
});
PokemonEvolutionChain.displayName = "PokemonEvolutionChain";
export default PokemonEvolutionChain;
