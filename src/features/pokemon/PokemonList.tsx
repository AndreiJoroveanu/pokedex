import { useMemo } from "react";

import { useFilteredPokemon } from "../../hooks/useFilteredPokemon.tsx";
import { useUrl } from "../../hooks/useUrl.ts";

import ChangePageButtons from "../../ui/ChangePageButtons.tsx";
import Loader from "../../ui/Loader.tsx";
import ErrorMessage from "../../ui/ErrorMessage.tsx";
import PokemonCard from "./PokemonCard.tsx";

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
    <section className="right-0 w-full lg:absolute lg:w-4/5">
      <div className="flex flex-col items-center p-4">
        {!isLoading ? (
          <>
            {/* Display buttons if there is more than one page */}
            <ChangePageButtons noOfPages={noOfPages} noOfSideButtons={3} />

            {paginatedPokemon?.length ? (
              <main className="mt-4 grid w-full grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-5">
                {paginatedPokemon.map((pokemon) => (
                  <PokemonCard
                    key={pokemon.name}
                    id={pokemon.id}
                    name={pokemon.name}
                  />
                ))}
              </main>
            ) : null}
          </>
        ) : (
          <div className="fixed top-0 flex h-screen w-full items-center justify-center bg-slate-100 lg:-z-10 dark:bg-slate-800">
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
  );
};
export default AllPokemon;
