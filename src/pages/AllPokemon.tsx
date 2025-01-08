import { useMemo } from "react";

import { useFilteredPokemon } from "../hooks/useFilteredPokemon.tsx";
import { useUrl } from "../hooks/useUrl.ts";

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
  const { getUrl } = useUrl();
  const { pokemonList, isLoading, isFiltered } = useFilteredPokemon();

  // URL Params
  const currentPage = Number(getUrl("page")) || 1;

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
                <PokemonList pokemonList={paginatedPokemon} />
              ) : null}
            </>
          ) : (
            <div className="fixed top-0 flex h-screen w-full items-center justify-center bg-white lg:-z-10">
              <Loader size={24} displaysText={true} />
            </div>
          )}

          {!pokemonList?.length && isFiltered && (
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
