import { useState } from "react";
import { VirtuosoGrid } from "react-virtuoso";

import { useAllMoves } from "@/hooks/usePokeApi.ts";
import { useFilteredMoves } from "@/hooks/useFilteredMoves.ts";
import { useScrollRestoration } from "@/hooks/useScrollRestoration.ts";

import Sidebar from "@/ui/sidebar/Sidebar.tsx";
import ScrollToTopButton from "@/ui/ScrollToTopButton.tsx";
import MoveCard from "@/features/moves/MoveCard.tsx";
import Footer from "@/ui/Footer.tsx";
import Loader from "@/ui/Loader.tsx";
import FilterErrorMessage from "@/ui/FilterErrorMessage.tsx";

const AllMoves = () => {
  // Fetching data
  const { data: allMoves, isLoading: isLoadingAM } = useAllMoves();
  const { moveList, isLoading, isFiltered } = useFilteredMoves(allMoves);

  // Restore the scroll position when the grid loads
  const [gridLoaded, setGridLoaded] = useState<boolean>(false);
  useScrollRestoration(gridLoaded);

  return (
    <div className="relative pt-18 sm:pt-24">
      <Sidebar>
        <Sidebar.Search itemType="move" />
        <Sidebar.GenerationFilter />
        <Sidebar.TypeFilter />
        <Sidebar.ClearFilter />
      </Sidebar>

      <ScrollToTopButton />

      <section className="@container/grid flex flex-col items-center p-4 max-sm:px-2 lg:absolute lg:right-0 lg:w-4/5 lg:max-w-[calc(100vw-248px)]">
        {!isLoadingAM && !isLoading && moveList?.length ? (
          <VirtuosoGrid
            totalCount={moveList.length}
            itemContent={(index) => (
              <MoveCard key={moveList[index].name} move={moveList[index]} />
            )}
            useWindowScroll
            increaseViewportBy={{ top: 1000, bottom: 1000 }}
            components={{ Footer: () => <Footer className="pb-4" /> }}
            readyStateChanged={(ready) => setGridLoaded(ready)}
            className="w-full"
            listClassName="grid grid-cols-1 gap-2 @min-[600px]/grid:gap-4 @min-[600px]/grid:grid-cols-2 @min-[800px]/grid:grid-cols-3 @min-[1000px]/grid:grid-cols-4 @min-[1200px]/grid:grid-cols-5"
          />
        ) : null}

        {/* Cover with a loading screen while the data is fetching or the React Virtuoso grid is rendering */}
        {(isLoadingAM || isLoading || !gridLoaded) && (
          <div className="fixed top-0 flex h-screen w-full items-center justify-center bg-slate-50 dark:bg-slate-900">
            <Loader size={24} displaysText={true} />
          </div>
        )}

        {!moveList?.length && isFiltered && (
          <div className="top-0 lg:fixed lg:h-screen">
            <FilterErrorMessage itemType="moves" />
          </div>
        )}
      </section>
    </div>
  );
};
export default AllMoves;
