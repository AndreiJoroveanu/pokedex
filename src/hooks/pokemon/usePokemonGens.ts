import { useCallback, useMemo } from "react";
import { Generation } from "pokedex-promise-v2";

import { api, useData } from "./usePokemonShared.ts";

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
            id: Number(
              p.url
                .split("https://pokeapi.co/api/v2/pokemon-species/")[1]
                .split("/")[0],
            ),
            name: p.name,
          }))
          .filter((p) => p.id < 10000)
          .sort((p1, p2) => p1.id - p2.id) ?? [])
      : [];
  }, [data?.pokemon_species, gen]);

  return { data: transformedData, isLoading, error };
};
