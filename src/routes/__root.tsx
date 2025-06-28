import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";
import type PokeAPI from "pokedex-promise-v2";

import Navbar from "@/components/navbar/Navbar.tsx";

const RootComponent = () => (
  <div
    id="app-layout"
    className="font-medium text-base-800 transition-[color] dark:text-base-200"
  >
    {/* App background */}
    <div className="fixed inset-0 -z-50 h-screen bg-base-100 transition-[background-color] dark:bg-base-900" />

    <Navbar />

    <Outlet />
  </div>
);

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
  pokeApi: PokeAPI;
}>()({ component: RootComponent });
