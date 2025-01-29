import { useMemo } from "react";

import { useAllPokemonSpecies } from "../hooks/pokemon/useAllPokemon.ts";
import { useFilteredPokemon } from "../hooks/useFilteredPokemon.ts";
import { useUrl } from "../hooks/useUrl.ts";

import Sidebar from "../ui/Sidebar.tsx";
import ChangePageButtons from "../ui/ChangePageButtons.tsx";
import Loader from "../ui/Loader.tsx";
import FilterErrorMessage from "../ui/FilterErrorMessage.tsx";
import PokemonCard from "../features/pokemon/PokemonCard.tsx";
import Footer from "../ui/Footer.tsx";

interface PokemonListType {
  id: number;
  name: string;
}

const POKEMON_PER_PAGE = 20;

const AllPokemon = () => {
  // Fetch all Pokémon
  const { data: allPokemon, isLoading: isLoadingAP } = useAllPokemonSpecies();

  // Pokémon filtering
  const { pokemonList, isLoading, isFiltered } = useFilteredPokemon(allPokemon);

  // Calculate the no. of pages
  const noOfPokemon = pokemonList?.length ?? 0;
  const noOfPages = Math.ceil(noOfPokemon / POKEMON_PER_PAGE);

  // Get the current page
  const { getUrl } = useUrl();
  const currentPage = Number(getUrl("page")) || 1;

  // Get the Pokémon from the current page to display
  const paginatedPokemon = useMemo<PokemonListType[] | undefined>(() => {
    return pokemonList?.slice(
      (currentPage - 1) * POKEMON_PER_PAGE,
      currentPage * POKEMON_PER_PAGE,
    );
  }, [currentPage, pokemonList]);

  return (
    <div className="relative pt-24">
      <Sidebar />

      <section className="flex w-full flex-col items-center p-4 lg:absolute lg:right-0 lg:w-4/5">
        {!isLoadingAP && !isLoading ? (
          <>
            {/* Display buttons if there is more than one page */}
            {noOfPages > 1 && (
              <ChangePageButtons noOfPages={noOfPages} noOfSideButtons={3} />
            )}

            {paginatedPokemon?.length ? (
              <>
                <main className="mt-4 grid w-full grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-5">
                  {paginatedPokemon.map((pokemon) => (
                    <PokemonCard
                      key={pokemon.name}
                      id={pokemon.id}
                      name={pokemon.name}
                    />
                  ))}
                </main>

                <Footer />
              </>
            ) : null}
          </>
        ) : (
          <div className="fixed top-0 flex h-screen w-full items-center justify-center bg-slate-50 lg:-z-10 dark:bg-slate-900">
            <Loader size={24} displaysText={true} />
          </div>
        )}

        {!pokemonList?.length && isFiltered && (
          <div className="top-0 lg:fixed lg:h-screen">
            <FilterErrorMessage type="Pokémon" />
          </div>
        )}
      </section>
    </div>
  );
};
export default AllPokemon;
