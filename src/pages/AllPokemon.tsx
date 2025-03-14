import { useState } from "react";
import { VirtuosoGrid } from "react-virtuoso";

import { useAllPokemonSpecies } from "@/hooks/usePokeApi.ts";
import { useFilteredPokemon } from "@/hooks/useFilteredPokemon.ts";
import useAppStore from "@/store/useAppStore.ts";
import { useScrollRestoration } from "@/hooks/useScrollRestoration.ts";

import Sidebar from "@/ui/sidebar/Sidebar.tsx";
import ScrollToTopButton from "@/ui/ScrollToTopButton.tsx";
import PokemonCard from "@/features/pokemon/PokemonCard.tsx";
import Footer from "@/ui/Footer.tsx";
import Loader from "@/ui/Loader.tsx";
import FilterErrorMessage from "@/ui/FilterErrorMessage.tsx";

const AllPokemon = () => {
  // Fetching data
  const { data: allPokemon, isLoading: isLoadingAP } = useAllPokemonSpecies();
  const { pokemonList, isLoading, isFiltered } = useFilteredPokemon(allPokemon);

  // Reset the Collapsable Panels' states in the Pokémon Details page
  useAppStore((state) => state.resetPokemonDetailsPanels)();

  // Restore the scroll position when the grid loads
  const [gridLoaded, setGridLoaded] = useState<boolean>(false);
  useScrollRestoration(gridLoaded);

  return (
    <div className="relative pt-18 sm:pt-24">
      <Sidebar>
        <Sidebar.Search itemType="Pokémon" />
        <Sidebar.GenerationFilter />
        <Sidebar.TypeFilter />
        <Sidebar.OnlyStarredToggle />
        <Sidebar.ClearFilter />
      </Sidebar>

      <ScrollToTopButton />

      <section className="@container/grid flex flex-col items-center p-4 max-sm:px-2 lg:absolute lg:right-0 lg:w-4/5 lg:max-w-[calc(100vw-248px)] lg:pl-0">
        {!isLoadingAP && !isLoading && pokemonList?.length ? (
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
            readyStateChanged={(ready) => setGridLoaded(ready)}
            className="w-full"
            listClassName="grid grid-cols-2 gap-2 @min-[500px]/grid:gap-4 @min-[600px]/grid:grid-cols-3 @min-[800px]/grid:grid-cols-4 @min-[1000px]/grid:grid-cols-5 @min-[1200px]/grid:grid-cols-6"
          />
        ) : null}

        {/* Cover with a loading screen while the data is fetching or the React Virtuoso grid is rendering */}
        {(isLoadingAP || isLoading || !gridLoaded) && (
          <div className="fixed top-0 flex h-screen w-full items-center justify-center bg-slate-100 dark:bg-slate-900">
            <Loader size={24} displaysText={true} />
          </div>
        )}

        {!pokemonList?.length && isFiltered && (
          <div className="top-0 lg:fixed lg:h-screen">
            <FilterErrorMessage itemType="Pokémon" />
          </div>
        )}
      </section>
    </div>
  );
};
export default AllPokemon;
