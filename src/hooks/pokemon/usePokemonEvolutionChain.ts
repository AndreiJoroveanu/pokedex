import { useCallback } from "react";
import { EvolutionChain } from "pokedex-promise-v2";

import { api, useData } from "./usePokemonShared.ts";

export const usePokemonEvolutionChain = (id: number | undefined) => {
  const fetcher = useCallback(() => {
    if (id) return api.getEvolutionChainById(id);
  }, [id]);
  const { data, isLoading, error } = useData<EvolutionChain>(fetcher);

  return { data, isLoading, error };
};
