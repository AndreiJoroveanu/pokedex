import { useCallback } from "react";
import { EvolutionChain } from "pokedex-promise-v2";

import { getIdFromUrl } from "../../utils/getIdFromUrl.ts";
import { api, useData } from "./usePokemonShared.ts";

export const usePokemonEvolutionChain = (url: string | undefined) => {
  const id = Number(getIdFromUrl(url));

  const fetcher = useCallback(() => {
    if (id) return api.getEvolutionChainById(id);
  }, [id]);
  const { data, isLoading, error } = useData<EvolutionChain>(fetcher);

  return { data, isLoading, error };
};
