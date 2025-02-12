import { useCallback } from "react";
import { EvolutionChain } from "pokedex-promise-v2";

import { api, useData } from "./usePokemonShared.ts";

export const usePokemonEvolutionChain = (url: string | undefined) => {
  const id = Number(
    url?.split("https://pokeapi.co/api/v2/evolution-chain/")[1].split("/")[0],
  );

  const fetcher = useCallback(() => {
    if (id) return api.getEvolutionChainById(id);
  }, [id]);
  const { data, isLoading, error } = useData<EvolutionChain>(fetcher);

  return { data, isLoading, error };
};
