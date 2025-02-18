import { useLocalStorageState } from "./useLocalStorageState.ts";

export const useStarredPokemon = () => {
  const [starredPokemonIds, setStarredPokemonIds] = useLocalStorageState<
    number[]
  >([], "starredPokemonIds");

  const toggleStarredPokemonIds = (pokemonId: number) =>
    setStarredPokemonIds((prevPokemon) =>
      starredPokemonIds.includes(pokemonId)
        ? prevPokemon.filter((p) => p !== pokemonId)
        : [...prevPokemon, pokemonId],
    );

  const length = starredPokemonIds.length;

  return { starredPokemonIds, toggleStarredPokemonIds, length };
};
