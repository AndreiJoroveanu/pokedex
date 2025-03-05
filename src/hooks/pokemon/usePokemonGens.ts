import { useCallback, useMemo } from "react";
import { Generation } from "pokedex-promise-v2";

import { api, useData } from "./usePokemonShared.ts";
import { getIdFromUrl } from "@/utils/getIdFromUrl.ts";

// Currently unused, uncomment to use
// export const usePokemonGens = () => {
//   const fetcher = useCallback(() => api.getGenerationsList(), []);
//   const { data, isLoading, error } = useData<NamedAPIResourceList>(fetcher);
//
//   return { data: data?.results, isLoading, error };
// };

export const useAllPokemonByGen = (gen: string | undefined) => {
  const fetcher = useCallback(() => {
    if (gen) return api.getGenerationByName(`generation-${gen}`);
  }, [gen]);
  const { data, isLoading, error } = useData<Generation>(fetcher);

  const transformedData = useMemo(() => {
    return gen
      ? (data?.pokemon_species
          .map((p) => ({
            // Extract the Pokémon Species ID from the URL
            id: Number(getIdFromUrl(p.url)),
            name: p.name,
          }))
          // Sort all Pokémon by ID
          .sort((p1, p2) => p1.id - p2.id) ?? [])
      : [];
  }, [data?.pokemon_species, gen]);

  return { data: transformedData, isLoading, error };
};

export const useAllMovesByGen = (gen: string | undefined) => {
  const fetcher = useCallback(() => {
    if (gen) return api.getGenerationByName(`generation-${gen}`);
  }, [gen]);
  const { data, isLoading, error } = useData<Generation>(fetcher);

  const transformedData = useMemo(() => {
    return gen
      ? (data?.moves
          .map((m) => ({
            // Extract the move ID from the URL
            id: Number(getIdFromUrl(m.url)),
            name: m.name,
          }))
          // Filtering as to not show "Shadow" moves, which have IDs over 10000
          .filter((m) => m.id < 10000) ?? [])
      : [];
  }, [data?.moves, gen]);

  return { data: transformedData, isLoading, error };
};
