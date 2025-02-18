import { useCallback } from "react";
import { Move } from "pokedex-promise-v2";

import { api, useData } from "./usePokemonShared.ts";

export const usePokemonMove = (name: string | undefined) => {
  const fetcher = useCallback(() => {
    if (name) return api.getMoveByName(name);
  }, [name]);
  const { data, isLoading, error } = useData<Move>(fetcher);

  return { data, isLoading, error };
};
