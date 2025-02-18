import { useMemo } from "react";

import { useUrlParams } from "./useUrlParams.ts";
import { useAllPokemonByGen } from "./pokemon/usePokemonGens.ts";
import { useAllPokemonByType } from "./pokemon/usePokemonTypes.ts";
import { useStarredPokemon } from "./useStarredPokemon.ts";

interface PokemonListType {
  id: number;
  name: string;
}

export const useFilteredPokemon = (
  allPokemon: PokemonListType[] | undefined,
) => {
  // Get the URL Params
  const { getUrlParam } = useUrlParams();
  const currentGen = getUrlParam("generation") ?? "";
  const currentType = getUrlParam("type") ?? "";
  const onlyStarred = Boolean(getUrlParam("onlyStarred"));
  const searchQuery = getUrlParam("q") ?? "";

  // Fetch Pokémon filtered by gen/type
  const { data: filteredByGen, isLoading: isLoadingFG } =
    useAllPokemonByGen(currentGen);
  const { data: filteredByType, isLoading: isLoadingFT } =
    useAllPokemonByType(currentType);

  // Get starred Pokémon
  const { starredPokemonIds } = useStarredPokemon();

  // Pokémon filtering
  const filteredPokemon = useMemo(() => {
    // Abort if the all Pokémon list hasn't fetched yet
    if (!allPokemon) return;

    // If there is a gen and a type selected
    if (filteredByGen?.length && filteredByType?.length)
      return filteredByGen.filter((pg) =>
        new Set(filteredByType.map((pt) => pt.id)).has(pg.id),
      );
    // If there is a gen selected
    else if (filteredByGen?.length) return filteredByGen;
    // If there is a type selected (still need to filter because
    // the filteredByType doesn't return Pokémon species)
    else if (filteredByType?.length)
      return allPokemon.filter((ap) =>
        new Set(filteredByType.map((pt) => pt.id)).has(ap.id),
      );
    // No filtering
    else return allPokemon;
  }, [allPokemon, filteredByGen, filteredByType]);

  // Starred Pokémon (if needed)
  const filteredStarredPokemon = useMemo<PokemonListType[] | undefined>(() => {
    if (filteredPokemon)
      return onlyStarred
        ? filteredPokemon?.filter((p) => starredPokemonIds.includes(p.id))
        : filteredPokemon;
  }, [filteredPokemon, onlyStarred, starredPokemonIds]);

  // Displayed Pokémon (after search query filtering, if needed)
  const searchedPokemon = useMemo<PokemonListType[] | undefined>(() => {
    if (filteredStarredPokemon)
      return searchQuery.trim().length
        ? filteredStarredPokemon?.filter((p) =>
            p.name.includes(searchQuery.toLowerCase().trim()),
          )
        : filteredStarredPokemon;
  }, [filteredStarredPokemon, searchQuery]);

  return {
    pokemonList: searchedPokemon,
    isLoading: isLoadingFG || isLoadingFT,
    isFiltered: Boolean(
      currentGen || currentType || onlyStarred || searchQuery,
    ),
  };
};
