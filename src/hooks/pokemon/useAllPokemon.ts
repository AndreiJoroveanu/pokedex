import { useCallback, useMemo } from "react";
import { NamedAPIResourceList } from "pokedex-promise-v2";

import { api, useData } from "./usePokemonShared.ts";
import { getIdFromUrl } from "@/utils/getIdFromUrl.ts";

// Currently unused, uncomment to use
// export const useAllPokemon = () => {
//   const fetcher = useCallback(() => api.getPokemonsList({ limit: 1025 }), []);
//   const { data, isLoading, error } = useData<APIResourceList>(fetcher);
//
//   const transformedData = useMemo(() => {
//     return data?.results.map((p) => ({
//       id: Number(getIdFromUrl(p.url)),
//       name: p.name,
//     }));
//   }, [data]);
//
//   return { data: transformedData, isLoading, error };
// };

export const useAllPokemonSpecies = () => {
  const fetcher = useCallback(() => api.getPokemonSpeciesList(), []);
  const { data, isLoading, error } = useData<NamedAPIResourceList>(fetcher);

  const transformedData = useMemo(() => {
    return data?.results.map((p) => ({
      id: Number(getIdFromUrl(p.url)),
      name: p.name,
    }));
  }, [data]);

  return { data: transformedData, isLoading, error };
};
