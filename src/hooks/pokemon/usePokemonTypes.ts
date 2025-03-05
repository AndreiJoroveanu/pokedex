import { useCallback, useMemo } from "react";
import { Type } from "pokedex-promise-v2";

import { api, useData } from "./usePokemonShared.ts";
import { getIdFromUrl } from "@/utils/getIdFromUrl.ts";

// Currently unused, uncomment to use
// export const usePokemonTypes = () => {
//   const fetcher = useCallback(() => api.getTypesList({ limit: 18 }), []);
//   const { data, isLoading, error } = useData<NamedAPIResourceList>(fetcher);
//
//   return { data: data?.results, isLoading, error };
// };

export const useAllPokemonByType = (type: string | undefined) => {
  const fetcher = useCallback(() => {
    if (type) return api.getTypeByName(type);
  }, [type]);
  const { data, isLoading, error } = useData<Type>(fetcher);

  const transformedData = useMemo(() => {
    return type
      ? (data?.pokemon
          .map((p) => ({
            // Extract the Pokémon ID from the URL
            id: Number(getIdFromUrl(p.pokemon.url)),
            name: p.pokemon.name,
          }))
          // Filtering as to not show alternate forms, which have IDs over 10000
          .filter((p) => p.id < 10000) ?? [])
      : [];
  }, [data?.pokemon, type]);

  return { data: transformedData, isLoading, error };
};

export const useAllMovesByType = (type: string | undefined) => {
  const fetcher = useCallback(() => {
    if (type) return api.getTypeByName(type);
  }, [type]);
  const { data, isLoading, error } = useData<Type>(fetcher);

  const transformedData = useMemo(() => {
    return type
      ? (data?.moves.map((m) => ({
          // Extract the move ID from the URL
          id: Number(getIdFromUrl(m.url)),
          name: m.name,
        })) ?? [])
      : [];
  }, [data?.moves, type]);

  return { data: transformedData, isLoading, error };
};
