import { useEffect, useState } from "react";
import { VirtuosoGrid } from "react-virtuoso";

import { useAllPokemonSpecies } from "@/hooks/usePokeApi.ts";
import { useFilteredPokemon } from "@/features/pokemon/hooks/useFilteredPokemon.ts";
import useAppStore from "@/store/useAppStore.ts";
import { useScrollRestoration } from "@/hooks/useScrollRestoration.ts";

import Sidebar from "@/components/sidebar/Sidebar.tsx";
import ScrollToTopButton from "@/components/button/ScrollToTopButton.tsx";
import PokemonCard from "@/features/pokemon/components/PokemonCard.tsx";
import Footer from "@/components/Footer.tsx";
import Loader from "@/components/Loader.tsx";
import FilterErrorMessage from "@/components/error/FilterErrorMessage.tsx";

const AllPokemon = () => {
  // Fetching data
  const { data: allPokemon, isLoading: isLoadingAP } = useAllPokemonSpecies();
  const {
    pokemonList,
    isLoading: isLoadingFP,
    isFiltered,
  } = useFilteredPokemon(allPokemon);

  // Reset the Collapsable Panels' states in the Pokémon Details page
  const resetPokemonDetailsPanels = useAppStore(
    (state) => state.resetPokemonDetailsPanels,
  );
  useEffect(() => resetPokemonDetailsPanels(), [resetPokemonDetailsPanels]);

  // Restore the scroll position when the grid loads
  const [gridLoaded, setGridLoaded] = useState<boolean>(false);
  useScrollRestoration(gridLoaded);

  return (
    <div className="relative sm:pt-24">
      <Sidebar>
        <Sidebar.Search itemType="Pokémon" />
        <Sidebar.GenerationFilter />
        <Sidebar.TypeFilter />
        <Sidebar.OnlyStarredToggle />
        <Sidebar.ClearFilter />
      </Sidebar>

      <ScrollToTopButton />

      <section className="@container/grid flex flex-col items-center p-4 max-sm:px-2 lg:absolute lg:right-0 lg:w-4/5 lg:max-w-[calc(100vw-248px)] lg:pl-0">
        {!isLoadingAP && !isLoadingFP && pokemonList?.length ? (
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
            components={{ Footer: () => <Footer className="pb-20 sm:pb-4" /> }}
            readyStateChanged={(ready) => setGridLoaded(ready)}
            className="w-full"
            listClassName="grid grid-cols-2 gap-2 @min-[500px]/grid:gap-4 @min-[600px]/grid:grid-cols-3 @min-[800px]/grid:grid-cols-4 @min-[1000px]/grid:grid-cols-5 @min-[1200px]/grid:grid-cols-6"
          />
        ) : null}

        {/* Cover with a loading screen while the data is fetching or the React Virtuoso grid is rendering */}
        {isLoadingAP || isLoadingFP || (!gridLoaded && pokemonList?.length) ? (
          <div className="fixed top-0 flex h-screen w-full items-center justify-center bg-slate-100 dark:bg-slate-900">
            <Loader size={24} displaysText={true} />
          </div>
        ) : null}

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
