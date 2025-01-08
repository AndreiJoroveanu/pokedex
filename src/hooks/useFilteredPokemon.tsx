import { useMemo } from "react";

import { useUrl } from "./useUrl.ts";
import {
  useAllPokemonByGen,
  useAllPokemonByType,
  useAllPokemonSpecies,
} from "./usePokemon.ts";

interface PokemonListType {
  id: number;
  name: string;
}

export const useFilteredPokemon = () => {
  // URL Params
  const { getUrl } = useUrl();

  const currentGen = getUrl("generation") ?? "";
  const currentType = getUrl("type") ?? "";
  const searchQuery = getUrl("q") ?? "";

  // All Pokémon
  const { data: allPokemon, isLoading: isLoadingAP } = useAllPokemonSpecies();

  // Pokémon filtered by gen/type
  const { data: filteredByGen, isLoading: isLoadingPG } =
    useAllPokemonByGen(currentGen);
  const { data: filteredByType, isLoading: isLoadingPT } =
    useAllPokemonByType(currentType);

  // Pokémon filtering
  const filteredPokemon = useMemo(() => {
    if (!allPokemon) return;

    // If there is a gen and a type selected
    if (filteredByGen?.length && filteredByType?.length)
      return [...filteredByGen].filter((pg) =>
        new Set(filteredByType.map((pt) => pt.id)).has(pg.id),
      );
    // If there is a gen selected
    else if (filteredByGen?.length) return [...filteredByGen];
    // If there is a type selected (still need to filter because
    // the filteredByType doesn't return Pokémon species)
    else if (filteredByType?.length)
      return allPokemon.filter((ap) =>
        new Set(filteredByType.map((pt) => pt.id)).has(ap.id),
      );
    // No filtering
    else return [...allPokemon];
  }, [allPokemon, filteredByGen, filteredByType]);

  // Displayed Pokémon (after search query filtering, if needed)
  const searchedPokemon = useMemo<PokemonListType[] | undefined>(() => {
    return searchQuery.trim().length
      ? filteredPokemon?.filter((p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase().trim()),
        )
      : filteredPokemon;
  }, [filteredPokemon, searchQuery]);

  return {
    pokemonList: searchedPokemon,
    isLoading: isLoadingAP || isLoadingPG || isLoadingPT,
    isFiltered: Boolean(currentGen || currentType || searchQuery),
  };
};
