import { useMemo } from "react";

import { useAllItemsParams } from "@/hooks/useUrlParams.ts";
import { useAllMovesByGen, useAllMovesByType } from "@/hooks/usePokeApi.ts";

interface MovesListType {
  id: number;
  name: string;
}

export const useFilteredMoves = (allMoves: MovesListType[] | undefined) => {
  // Get the URL Params
  const { getUrlParam } = useAllItemsParams();
  const currentGen = getUrlParam("generation") ?? "";
  const currentType = getUrlParam("type") ?? "";
  const searchQuery = getUrlParam("q") ?? "";

  // Fetch moves filtered by gen/type
  const { data: filteredByGen, isLoading: isLoadingFG } =
    useAllMovesByGen(currentGen);
  const { data: filteredByType, isLoading: isLoadingFT } =
    useAllMovesByType(currentType);

  // Move filtering
  const filteredMoves = useMemo(() => {
    // Abort if the all move list hasn't fetched yet
    if (!allMoves) return;

    // If there is a gen and a type selected
    if (filteredByGen?.length && filteredByType?.length)
      return filteredByGen.filter((pg) =>
        new Set(filteredByType.map((pt) => pt.id)).has(pg.id),
      );
    // If there is a gen selected
    else if (filteredByGen?.length) return filteredByGen;
    // If there is a type selected
    else if (filteredByType?.length) return filteredByType;
    // No filtering
    else return allMoves;
  }, [allMoves, filteredByGen, filteredByType]);

  // Displayed moves (after search query filtering, if needed)
  const searchedMoves = useMemo<MovesListType[] | undefined>(() => {
    if (filteredMoves)
      return searchQuery.trim().length
        ? filteredMoves?.filter((p) =>
            p.name.includes(searchQuery.toLowerCase().trim()),
          )
        : filteredMoves;
  }, [filteredMoves, searchQuery]);

  return {
    moveList: searchedMoves,
    isLoading: isLoadingFG || isLoadingFT,
    isFiltered: Boolean(currentGen || currentType || searchQuery),
  };
};
