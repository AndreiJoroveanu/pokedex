import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import "@/index.css";

import { routeTree } from "@/routeTree.gen.ts";
import { queryClient } from "@/lib/reactQuery.ts";

import ErrorMessage from "@/components/error/ErrorMessage.tsx";
import Loader from "@/components/Loader.tsx";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const router = createRouter({
  routeTree,
  scrollRestoration: true,
  basepath: "/pokedex",
  defaultErrorComponent: ({ error }) => (
    <ErrorMessage errors={[error.message]} />
  ),
  defaultNotFoundComponent: () => <ErrorMessage errors={["Page not found"]} />,
  defaultPendingComponent: () => (
    <div className="h-screen w-full bg-slate-100 transition-[background_color] max-sm:-mt-18 dark:bg-slate-900">
      <Loader size={24} displaysText={true} />
    </div>
  ),
  // These make the pending component show instantly when navigating to a new route
  defaultPendingMinMs: 0,
  defaultPendingMs: 0,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
