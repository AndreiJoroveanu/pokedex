import { Link } from "react-router";
import { Chain } from "pokedex-promise-v2";
import { Fragment } from "react";

interface ChainProps {
  chain: Chain | undefined;
  pokemonName: string | undefined;
}

// Reusable link to the respective Pokémon page
const pokemonLink = (name: string) => (
  <Link
    to={`/pokedex/pokemon/${name}`}
    className="capitalize underline underline-offset-4 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
  >
    {name}
  </Link>
);

// Format the list of evolution names
const formatEvolutions = (names: string[]) => {
  // If this Pokémon has one evolution branch after it
  if (names.length === 1) return pokemonLink(names[0]);

  // If this Pokémon has two evolution branches after it
  if (names.length === 2)
    return (
      <>
        {pokemonLink(names[0])} or {pokemonLink(names[1])}
      </>
    );

  // If this Pokémon has three or more evolution branches after it
  return (
    <>
      {names.slice(0, names.length - 1).map((name) => (
        <Fragment key={name}>{pokemonLink(name)}, </Fragment>
      ))}
      {" or "} {pokemonLink(names[names.length - 1])}
    </>
  );
};

const PokemonEvolutionChain = ({ chain, pokemonName }: ChainProps) => {
  if (!chain || !pokemonName) return <p>Loading...</p>;

  let previous: string | null = null; // Previous Pokémon in the evolution chain
  let next: string[] = []; // Next Pokémon(s) in the evolution chain

  // Recursively traverses the evolution chain to find relevant data
  const traverse = (node: Chain, parent: string | null = null) => {
    // If the current Pokémon is found in the evolution line
    if (node.species.name === pokemonName) {
      previous = parent; // Store its previous evolution
      next = node.evolves_to.map((pokemon) => pokemon.species.name); // Store its next evolutions
      return;
    }
    // Continue searching in the evolution tree for each possible next evolution
    node.evolves_to.forEach((child) => traverse(child, node.species.name));
  };

  // Start the recursive traversal from the root of the evolution chain
  traverse(chain);

  // If this Pokémon doesn't evolve at all
  if (!previous && next.length === 0)
    return <p>This Pokémon does not evolve.</p>;

  // If this Pokémon a base form
  if (!previous)
    return <p>This Pokémon evolves into {formatEvolutions(next)}.</p>;

  // If this Pokémon fully evolved
  if (next.length === 0)
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
