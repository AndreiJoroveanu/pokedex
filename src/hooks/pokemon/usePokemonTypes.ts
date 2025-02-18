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
            id: Number(getIdFromUrl(p.pokemon.url)),
            name: p.pokemon.name,
          }))
          .filter((p) => p.id < 10000) ?? [])
      : [];
  }, [data?.pokemon, type]);

  return { data: transformedData, isLoading, error };
};
