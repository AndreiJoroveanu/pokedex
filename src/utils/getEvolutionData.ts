import { Chain } from "pokedex-promise-v2";

interface PokemonListType {
  id: number;
  name: string;
}

interface ReturnTypes {
  previous: PokemonListType | null;
  next: PokemonListType[];
}

// Extract the Pokémon name and the ID from the URL
const extractData = (node: Chain) => ({
  name: node.species.name,
  id: Number(
    node.species.url
      .split("https://pokeapi.co/api/v2/pokemon-species/")[1]
      .split("/")[0],
  ),
});

const getEvolutionData = (chain: Chain, pokemonName: string): ReturnTypes => {
  let previous: PokemonListType | null = null; // Previous Pokémon in the evolution chain
  let next: PokemonListType[] = []; // Next Pokémon(s) in the evolution chain

  // Recursively traverses the evolution chain to find relevant data
  const traverse = (node: Chain, parent: PokemonListType | null = null) => {
    // If the current Pokémon is found in the evolution line
    if (node.species.name === pokemonName) {
      previous = parent; // Store its previous evolution
      next = node.evolves_to.map((pokemon) => extractData(pokemon)); // Store its next evolutions
      return;
    }
    // Continue searching in the evolution tree for each possible next evolution
    node.evolves_to.forEach((child) => traverse(child, extractData(node)));
  };

  // Start the recursive traversal from the root of the evolution chain
  traverse(chain);

  return { previous, next };
};
export default getEvolutionData;
