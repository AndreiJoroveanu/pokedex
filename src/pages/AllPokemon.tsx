import { VirtuosoGrid } from "react-virtuoso";

import { useAllPokemonSpecies } from "@/hooks/pokemon/useAllPokemon.ts";
import { useFilteredPokemon } from "@/hooks/useFilteredPokemon.ts";
import { useScrollRestoration } from "@/hooks/useScrollRestoration.ts";

import Sidebar from "@/ui/Sidebar.tsx";
import ScrollToTopButton from "@/ui/ScrollToTopButton.tsx";
import PokemonCard from "@/features/pokemon/PokemonCard.tsx";
import Footer from "@/ui/Footer.tsx";
import Loader from "@/ui/Loader.tsx";
import FilterErrorMessage from "@/ui/FilterErrorMessage.tsx";

const AllPokemon = () => {
  const { data: allPokemon, isLoading: isLoadingAP } = useAllPokemonSpecies();
  const { pokemonList, isLoading, isFiltered } = useFilteredPokemon(allPokemon);

  useScrollRestoration();

  return (
    <div className="relative pt-18 sm:pt-24">
      <Sidebar />

      <ScrollToTopButton />

      <section className="@container/grid flex flex-col items-center p-4 max-sm:px-2 lg:absolute lg:right-0 lg:w-4/5 lg:max-w-[calc(100vw-248px)]">
        {!isLoadingAP && !isLoading ? (
          pokemonList?.length ? (
            <VirtuosoGrid
              totalCount={pokemonList.length}
              itemContent={(index) => (
                <PokemonCard
                  key={pokemonList[index].name}
                  pokemon={pokemonList[index]}
                />
              )}
              useWindowScroll
              increaseViewportBy={{ top: 1000, bottom: 1000 }}
              components={{ Footer: () => <Footer className="pb-4" /> }}
              className="w-full"
              listClassName="grid grid-cols-2 gap-2 @[500px]/grid:gap-4 @[600px]/grid:grid-cols-3 @[800px]/grid:grid-cols-4 @[1000px]/grid:grid-cols-5 @[1200px]/grid:grid-cols-6"
            />
          ) : null
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
