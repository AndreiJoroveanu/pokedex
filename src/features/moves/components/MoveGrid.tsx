import { useState } from "react";
import { VirtuosoGrid } from "react-virtuoso";

import { useAllMoves } from "@/hooks/usePokeApi.ts";
import { useFilteredMoves } from "@/features/moves/hooks/useFilteredMoves.ts";
import { useScrollRestoration } from "@/hooks/useScrollRestoration.ts";

import MoveCard from "@/features/moves/components/MoveCard.tsx";
import Footer from "@/components/Footer.tsx";
import Loader from "@/components/Loader.tsx";
import FilterErrorMessage from "@/components/error/FilterErrorMessage.tsx";

const MoveGrid = () => {
  // Fetching data
  const { data: allMoves, isLoading: isLoadingAM } = useAllMoves();
  const { moveList, isLoading, isFiltered } = useFilteredMoves(allMoves);

  // Restore the scroll position when the grid loads
  const [gridLoaded, setGridLoaded] = useState<boolean>(false);
  useScrollRestoration(gridLoaded);

  return (
    <section className="@container/grid flex flex-col items-center p-4 max-sm:px-2 lg:absolute lg:right-0 lg:w-4/5 lg:max-w-[calc(100vw-248px)] lg:min-w-[calc(100vw-320px)] lg:pt-20 lg:pl-0">
      {!isLoadingAM && !isLoading && moveList?.length ? (
        <>
          <VirtuosoGrid
            totalCount={moveList.length}
            itemContent={(index) => (
              <MoveCard key={moveList[index].name} move={moveList[index]} />
            )}
            useWindowScroll
            increaseViewportBy={{ top: 1000, bottom: 1000 }}
            readyStateChanged={(ready) => setGridLoaded(ready)}
            className="w-full"
            listClassName="grid grid-cols-1 gap-2 @min-[500px]/grid:grid-cols-2 @min-[600px]/grid:gap-4 @min-[750px]/grid:grid-cols-3 @min-[750px]/grid:gap-2 @min-[875px]/grid:gap-4 @min-[1000px]/grid:grid-cols-4 @min-[1000px]/grid:gap-2 @min-[1150px]/grid:gap-4 @min-[1250px]/grid:grid-cols-5 @min-[1250px]/grid:gap-2 @min-[1400px]/grid:gap-4 @min-[1500px]/grid:grid-cols-6 @min-[1500px]/grid:gap-2 @min-[1700px]/grid:gap-4"
          />

          {gridLoaded && <Footer />}
        </>
      ) : null}

      {/* Cover with a loading screen while the data is fetching or the React Virtuoso grid is rendering */}
      {isLoadingAM || isLoading || (!gridLoaded && moveList?.length) ? (
        <div className="fixed top-0 flex h-screen w-full items-center justify-center bg-base-100 dark:bg-base-900">
          <Loader size={24} displaysText={true} />
        </div>
      ) : null}

      {!moveList?.length && isFiltered && (
        <div className="top-0 lg:fixed lg:h-screen">
          <FilterErrorMessage itemType="moves" />
        </div>
      )}
    </section>
  );
};
export default MoveGrid;
