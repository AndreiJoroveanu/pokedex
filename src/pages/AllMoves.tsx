import { VirtuosoGrid } from "react-virtuoso";

import { useAllMoves } from "@/hooks/pokemon/usePokemonMove.ts";
import { useScrollRestoration } from "@/hooks/useScrollRestoration.ts";

import Sidebar from "@/ui/sidebar/Sidebar.tsx";
import ScrollToTopButton from "@/ui/ScrollToTopButton.tsx";
import MoveCard from "@/features/moves/MoveCard.tsx";
import Footer from "@/ui/Footer.tsx";

const AllMoves = () => {
  const { data: allMoves } = useAllMoves();

  useScrollRestoration();

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
        {allMoves?.length && (
          <VirtuosoGrid
            totalCount={allMoves.length}
            itemContent={(index) => (
              <MoveCard key={allMoves[index].name} move={allMoves[index]} />
            )}
            useWindowScroll
            increaseViewportBy={{ top: 1000, bottom: 1000 }}
            components={{ Footer: () => <Footer className="pb-4" /> }}
            className="w-full"
            listClassName="grid grid-cols-1 gap-2 @[600px]/grid:gap-4 @[600px]/grid:grid-cols-2 @[800px]/grid:grid-cols-3 @[1000px]/grid:grid-cols-4 @[1200px]/grid:grid-cols-5"
          />
        )}
      </section>
    </div>
  );
};
export default AllMoves;
