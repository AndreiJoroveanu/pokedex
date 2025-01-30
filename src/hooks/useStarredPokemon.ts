import { useLocalStorageState } from "./useLocalStorageState.ts";

export const useStarredPokemon = () => {
  const [starredPokemon, setStarredPokemon] = useLocalStorageState<string[]>(
    [],
    "starredPokemon",
  );

  const toggleStarredPokemon = (pokemon: string) =>
    setStarredPokemon((prevPokemon) =>
      starredPokemon.includes(pokemon)
        ? prevPokemon.filter((p) => p !== pokemon)
        : [...prevPokemon, pokemon],
    );

  const length = starredPokemon.length;

  return { starredPokemon, toggleStarredPokemon, length };
};
