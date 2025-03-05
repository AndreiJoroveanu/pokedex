import { useCallback, useMemo } from "react";
import { Move, NamedAPIResourceList } from "pokedex-promise-v2";

import { api, useData } from "./usePokemonShared.ts";
import { getIdFromUrl } from "@/utils/getIdFromUrl.ts";

export const useAllMoves = () => {
  const fetcher = useCallback(() => api.getMovesList(), []);
  const { data, isLoading, error } = useData<NamedAPIResourceList>(fetcher);

  const transformedData = useMemo(() => {
    return (
      data?.results
        .map((m) => ({
          // Extract the move ID from the URL
          id: Number(getIdFromUrl(m.url)),
          name: m.name,
        }))
        // Filtering as to not show "Shadow" moves, which have IDs over 10000
        .filter((m) => m.id < 10000)
    );
  }, [data]);

  return { data: transformedData, isLoading, error };
};

export const usePokemonMove = (name: string | number) => {
  const fetcher = useCallback(() => {
    if (name) return api.getMoveByName(name);
  }, [name]);
  const { data, isLoading, error } = useData<Move>(fetcher);

  return { data, isLoading, error };
};
