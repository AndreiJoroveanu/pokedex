import { useLocalStorageState } from "./useLocalStorageState.ts";

export const useStarredPokemon = () => {
  const [starredPokemonIds, setStarredPokemonIds] = useLocalStorageState<
    number[]
  >([], "starredPokemonIds");

  const toggleStarredPokemonIds = (pokemonId: number) =>
    setStarredPokemonIds((prevPokemon) =>
      starredPokemonIds.includes(pokemonId)
        ? // Filter the Pokémon out if it already exists
          prevPokemon.filter((p) => p !== pokemonId)
        : // Otherwise add it in the array
          [...prevPokemon, pokemonId],
    );

  const length = starredPokemonIds.length;

  return { starredPokemonIds, toggleStarredPokemonIds, length };
};
