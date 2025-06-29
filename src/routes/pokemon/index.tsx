import { useEffect } from "react";
import { createFileRoute, useRouter } from "@tanstack/react-router";

import type { AllItemsParams } from "@/types/types.ts";

import Sidebar from "@/components/sidebar/Sidebar.tsx";
import ScrollToTopButton from "@/components/button/ScrollToTopButton.tsx";
import PokemonGrid from "@/features/pokemon/components/PokemonGrid.tsx";

const AllPokemon = () => {
  // Preload the individual Pokémon page
  const router = useRouter();
  useEffect(() => {
    void router.loadRouteChunk(router.routesByPath["/pokemon/$pokemonId"]);
  }, [router]);

  return (
    <>
      <Sidebar>
        <Sidebar.Search itemType="Pokémon" />
        <Sidebar.GenerationFilter />
        <Sidebar.TypeFilter />
        <Sidebar.OnlyStarredToggle />
        <Sidebar.ClearFilter />
      </Sidebar>

      <ScrollToTopButton />

      <PokemonGrid />
    </>
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
