import { Chain, EvolutionDetail } from "pokedex-promise-v2";

import { getIdFromUrl } from "@/utils/getIdFromUrl.ts";
import formatEvolutionMethod from "@/utils/formatEvolutionMethod.ts";

interface PokemonListType {
  id: number;
  name: string;
  evolutionMethod: string;
}

interface ReturnTypes {
  previous: PokemonListType | null;
  next: PokemonListType[];
}

// Extract the Pokémon name and the ID from the URL
const extractData = (node: Chain, evolutionDetails: EvolutionDetail[]) => ({
  name: node.species.name,
  id: Number(getIdFromUrl(node.species.url)),
  // A string detailing how another Pokémon evolves/evolved into this Pokémon
  evolutionMethod: formatEvolutionMethod(evolutionDetails),
});

const getEvolutionData = (chain: Chain, pokemonName: string): ReturnTypes => {
  let previous: PokemonListType | null = null; // Previous Pokémon in the evolution chain
  let next: PokemonListType[] = []; // Next Pokémon(s) in the evolution chain

  // Recursively traverses the evolution chain to find relevant data
  const traverse = (node: Chain, parent: PokemonListType | null = null) => {
    // If the current Pokémon is found in the evolution line
    if (node.species.name === pokemonName) {
      previous = parent; // Store its previous evolution
      // Store its next evolutions
      next = node.evolves_to.map((pokemon) =>
        extractData(pokemon, pokemon.evolution_details),
      );
      return;
    }
    // Continue searching in the evolution tree for each possible next evolution
    node.evolves_to.forEach((child) =>
      traverse(child, extractData(node, child.evolution_details)),
    );
  };

  // Start the recursive traversal from the root of the evolution chain
  traverse(chain);

  return { previous, next };
};
export default getEvolutionData;
