import { createFileRoute } from "@tanstack/react-router";

import { AllItemsParams } from "@/types/types.ts";

import Sidebar from "@/components/sidebar/Sidebar.tsx";
import ScrollToTopButton from "@/components/button/ScrollToTopButton.tsx";
import MoveGrid from "@/features/moves/components/MoveGrid.tsx";

const AllMoves = () => (
  <div className="relative sm:pt-24">
    <Sidebar>
      <Sidebar.Search itemType="move" />
      <Sidebar.GenerationFilter />
      <Sidebar.TypeFilter />
      <Sidebar.ClearFilter />
    </Sidebar>

    <ScrollToTopButton />

    <MoveGrid />
  </div>
);

export const Route = createFileRoute("/moves/")({
  component: AllMoves,
  validateSearch: (search) => ({ ...search }) as AllItemsParams,
  loader: ({ context: { queryClient, pokeApi } }) =>
    // Prefetch the list of all Moves
    void queryClient.ensureQueryData({
      queryFn: () => pokeApi.getMovesList(),
      queryKey: ["allMoves"],
    }),
});
