import { useMemo } from "react";

import { useUrl } from "../hooks/useUrl.ts";
import {
  useAllPokemonSpecies,
  useAllPokemonByGen,
  useAllPokemonByType,
} from "../hooks/usePokemon.ts";

import ChangePageButtons from "../ui/ChangePageButtons.tsx";
import PokemonList from "../features/pokemon/PokemonList.tsx";
import Loader from "../ui/Loader.tsx";
import ErrorMessage from "../ui/ErrorMessage.tsx";

interface PokemonListType {
  id: number;
  name: string;
}

const pokemonPerPage = 20;

const AllPokemon = () => {
  // URL Params
  const { getUrl } = useUrl();

  const currentPage = Number(getUrl("page")) || 1;
  const currentGen = getUrl("generation") ?? "";
  const currentType = getUrl("type") ?? "";
  const searchQuery = getUrl("q") ?? "";

  // All Pokémon
  const { data: allPokemon, isLoading: isLoadingP /*, errorP */ } =
    useAllPokemonSpecies();

  // Pokémon filtered by gen/type
  const { data: filteredByGen, isLoading: isLoadingPG /*, errorPG */ } =
    useAllPokemonByGen(currentGen);
  const { data: filteredByType, isLoading: isLoadingPT /*, errorPT */ } =
    useAllPokemonByType(currentType);

  const isLoading = isLoadingP || isLoadingPG || isLoadingPT;

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
  const pokemonList = useMemo<PokemonListType[] | undefined>(() => {
    return searchQuery.trim().length
      ? filteredPokemon?.filter((p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase().trim()),
        )
      : filteredPokemon;
  }, [filteredPokemon, searchQuery]);

  const noOfPokemon = pokemonList?.length || 0;
  const noOfPages = Math.ceil(noOfPokemon / pokemonPerPage);

  // Get the Pokémon from the current page to display
  const paginatedPokemon = useMemo<PokemonListType[] | undefined>(() => {
    return pokemonList?.slice(
      (currentPage - 1) * pokemonPerPage,
      currentPage * pokemonPerPage,
    );
  }, [currentPage, pokemonList]);

  return (
    <div className="relative lg:pt-24">
      <section className="right-0 w-full lg:absolute lg:w-4/5">
        <div className="flex flex-col items-center p-4">
          {!isLoading ? (
            <>
              {/* Display buttons if there is more than one page */}
              <ChangePageButtons noOfPages={noOfPages} noOfSideButtons={3} />

              {paginatedPokemon?.length ? (
                <PokemonList paginatedPokemon={paginatedPokemon} />
              ) : null}
            </>
          ) : (
            <div className="fixed top-0 flex h-screen w-full items-center justify-center bg-white lg:-z-10">
              <Loader size={24} displaysText={true} />
            </div>
          )}

          {!pokemonList?.length &&
            (currentGen || currentType || searchQuery) && (
              <div className="top-0 lg:fixed lg:h-screen">
                <ErrorMessage type="Pokémon" />
              </div>
            )}
        </div>
      </section>
    </div>
  );
};
export default AllPokemon;
