import { createRouter } from "@tanstack/react-router";

import { routeTree } from "@/routeTree.gen.ts";
import { queryClient } from "@/lib/reactQuery.ts";
import { pokeApi } from "@/lib/pokeApi.ts";

import ErrorMessage from "@/components/error/ErrorMessage.tsx";
import Loader from "@/components/Loader.tsx";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const router = createRouter({
  routeTree,
  basepath: "/pokedex",
  scrollRestoration: true,
  context: { queryClient, pokeApi },
  defaultErrorComponent: ({ error }) => (
    <ErrorMessage errors={[error.message]} />
  ),
  defaultNotFoundComponent: () => <ErrorMessage errors={["Page not found"]} />,
  defaultPendingComponent: () => (
    <div className="h-screen w-full bg-slate-100 transition-[background_color] max-sm:-mt-18 dark:bg-slate-900">
      <Loader size={24} displaysText={true} />
    </div>
  ),
  defaultViewTransition: true,
  // These make the pending component show instantly when navigating to a new route
  defaultPendingMinMs: 0,
  defaultPendingMs: 0,
});
