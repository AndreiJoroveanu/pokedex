import { useEffect } from "react";
import { createFileRoute, useRouter } from "@tanstack/react-router";

import type { AllItemsParams } from "@/types/types.ts";

import Sidebar from "@/components/sidebar/Sidebar.tsx";
import ScrollToTopButton from "@/components/button/ScrollToTopButton.tsx";
import MoveGrid from "@/features/moves/components/MoveGrid.tsx";

const AllMoves = () => {
  // Preload the individual move page
  const router = useRouter();
  useEffect(() => {
    void router.loadRouteChunk(router.routesByPath["/moves/$moveId"]);
  }, [router]);

  return (
    <div className="relative sm:pt-20">
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
};

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
