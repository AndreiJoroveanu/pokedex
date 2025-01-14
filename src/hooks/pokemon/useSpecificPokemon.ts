import { useCallback } from "react";
import { Pokemon, PokemonSpecies } from "pokedex-promise-v2";

import { api, useData } from "./usePokemonShared.ts";

export const usePokemon = (identifier: string | number) => {
  const fetcher = useCallback(
    () => api.getPokemonByName(identifier),
    [identifier],
  );
  const { data, isLoading, error } = useData<Pokemon>(fetcher);

  return { data, isLoading, error };
};

export const usePokemonSpecies = (identifier: string | number) => {
  const fetcher = useCallback(
    () => api.getPokemonSpeciesByName(identifier),
    [identifier],
  );
  const { data, isLoading, error } = useData<PokemonSpecies>(fetcher);

  return { data, isLoading, error };
};
