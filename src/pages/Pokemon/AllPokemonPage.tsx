import { useEffect, useMemo, useState } from "react";
import {
  useAllPokemonSpecies,
  useAllPokemonByGen,
  useAllPokemonByType,
} from "../../hooks/usePokemon.ts";
import usePokemonStore from "../../store/usePokemonStore.ts";
import ChangePageButtons from "../../components/ChangePageButtons.tsx";
import ErrorMessage from "../../components/ErrorMessage.tsx";
import PokemonList from "../../components/PokemonList.tsx";

interface PokemonListType {
  id: number;
  name: string;
}

const AllPokemonPage = () => {
  const { currentPage, setCurrentPage, currentGen, currentType, searchQuery } =
    usePokemonStore();

  const { data: allPokemon, isLoading: isLoadingP /*, errorP */ } =
    useAllPokemonSpecies();
  const [pokemonList, setPokemonList] = useState<PokemonListType[]>([]);

  const { data: filteredByGen, isLoading: isLoadingPG /*, errorPG */ } =
    useAllPokemonByGen(currentGen);
  const { data: filteredByType, isLoading: isLoadingPT /*, errorPT */ } =
    useAllPokemonByType(currentType);

  const noOfPokemon = pokemonList.length;
  const pokemonPerPage = 20;
  const noOfPages = Math.ceil(noOfPokemon / pokemonPerPage);

  // Filtering
  const filteredPokemon = useMemo(() => {
    if (!allPokemon) return;

    // If there is a gen and a type selected
    if (filteredByGen?.length && filteredByType?.length)
      return [...filteredByGen].filter((fp) =>
        new Set(filteredByType.map((pg) => pg.id)).has(fp.id),
      );
    // If there is a gen selected
    else if (filteredByGen?.length) return [...filteredByGen];
    // If there is a type selected
    else if (filteredByType?.length) return [...filteredByType];
    // No filtering
    else return [...allPokemon];
  }, [allPokemon, filteredByGen, filteredByType]);

  // Set Pokémon list
  useEffect(() => {
    if (filteredPokemon) {
      // Search query filtering
      setPokemonList(
        searchQuery.trim().length
          ? filteredPokemon.filter((p) =>
              p.name.toLowerCase().includes(searchQuery.toLowerCase().trim()),
            )
          : filteredPokemon,
      );
    }
  }, [filteredPokemon, searchQuery]);

  // Get the Pokémon from the current page to display
  const paginatedPokemon = useMemo(() => {
    return pokemonList.slice(
      (currentPage - 1) * pokemonPerPage,
      currentPage * pokemonPerPage,
    );
  }, [currentPage, pokemonList]);

  return (
    <div className="relative pt-24">
      <section className="lg:absolute right-0 w-full lg:w-4/5">
        <div className="p-4 flex flex-col items-center">
          {noOfPages > 1 &&
            // Display buttons if there are more than one page
            ChangePageButtons({
              currentPage,
              setCurrentPage,
              noOfPages,
              noOfSideButtons: 3,
            })}

          {pokemonList.length && !isLoadingP && !isLoadingPG && !isLoadingPT ? (
            <PokemonList paginatedPokemon={paginatedPokemon} />
          ) : null}

          {(isLoadingP || isLoadingPG || isLoadingPT) && (
            <div className="h-screen w-full flex justify-center items-center">
              <p className="text-2xl font-bold">Loading...</p>
            </div>
          )}

          {!pokemonList.length && <ErrorMessage type="Pokémon" />}
        </div>
      </section>
    </div>
  );
};
export default AllPokemonPage;
