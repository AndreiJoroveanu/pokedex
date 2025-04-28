import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";

import useAppStore from "@/store/useAppStore.ts";
import { AllItemsParams } from "@/types/types.ts";

import Sidebar from "@/components/sidebar/Sidebar.tsx";
import ScrollToTopButton from "@/components/button/ScrollToTopButton.tsx";
import PokemonGrid from "@/features/pokemon/components/PokemonGrid.tsx";

const AllPokemon = () => {
  // Reset the Collapsable Panels' states in the Pokémon Details page
  const resetPokemonDetailsPanels = useAppStore(
    (state) => state.resetPokemonDetailsPanels,
  );
  useEffect(resetPokemonDetailsPanels, [resetPokemonDetailsPanels]);

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

      <PokemonGrid />
    </div>
  );
};

export const Route = createFileRoute("/pokemon/")({
  component: AllPokemon,
  validateSearch: (search) => ({ ...search }) as AllItemsParams,
  loader: ({ context: { queryClient, pokeApi } }) =>
    // Prefetch the list of all Pokémon Species
    void queryClient.ensureQueryData({
      queryFn: () => pokeApi.getPokemonSpeciesList(),
      queryKey: ["allPokemonSpecies"],
    }),
});
