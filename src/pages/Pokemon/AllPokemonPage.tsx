import { useMemo } from "react";
import {
  useAllPokemonSpecies,
  useAllPokemonByGen,
  useAllPokemonByType,
} from "../../hooks/usePokemon.ts";
import usePokemonStore from "../../store/usePokemonStore.ts";
import ChangePageButtons from "../../components/ChangePageButtons.tsx";
import PokemonList from "../../components/PokemonList.tsx";
import Loader from "../../components/Loader.tsx";
import ErrorMessage from "../../components/ErrorMessage.tsx";

interface PokemonListType {
  id: number;
  name: string;
}

const AllPokemonPage = () => {
  const { currentPage, setCurrentPage, currentGen, currentType, searchQuery } =
    usePokemonStore();

  // All Pokémon
  const { data: allPokemon, isLoading: isLoadingP /*, errorP */ } =
    useAllPokemonSpecies();

  // Pokémon filtered by gen/type
  const { data: filteredByGen, isLoading: isLoadingPG /*, errorPG */ } =
    useAllPokemonByGen(currentGen);
  const { data: filteredByType, isLoading: isLoadingPT /*, errorPT */ } =
    useAllPokemonByType(currentType);

  const isLoading = isLoadingP || isLoadingPG || isLoadingPT;

  const pokemonPerPage = 20;

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
      <section className="lg:absolute right-0 w-full lg:w-4/5">
        <div className="p-4 flex flex-col items-center">
          {!isLoading ? (
            <>
              {noOfPages > 1 &&
                // Display buttons if there is more than one page
                ChangePageButtons({
                  currentPage,
                  setCurrentPage,
                  noOfPages,
                  noOfSideButtons: 3,
                })}

              {paginatedPokemon?.length ? (
                <PokemonList paginatedPokemon={paginatedPokemon} />
              ) : null}
            </>
          ) : (
            <div className="fixed top-0 lg:-z-10 h-screen flex justify-center items-center bg-white w-full">
              <Loader size={24}>
                <p className="text-2xl font-bold mt-4">Loading...</p>
              </Loader>
            </div>
          )}

          {!pokemonList?.length &&
            (currentGen || currentType || searchQuery) && (
              <div className="lg:fixed top-0 lg:h-screen">
                <ErrorMessage type="Pokémon" />
              </div>
            )}
        </div>
      </section>
    </div>
  );
};
export default AllPokemonPage;
