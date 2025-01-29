import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";

import Loader from "./ui/Loader.tsx";
import AppLayout from "./ui/AppLayout.tsx";

const AllPokemonPage = lazy(() => import("./pages/AllPokemon.tsx"));
const PokemonDetailsPage = lazy(() => import("./pages/PokemonDetails.tsx"));

const router = createBrowserRouter([
  {
    path: "/pokedex",
    element: <Navigate replace to="/pokedex/pokemon" />,
  },

  {
    element: (
      <Suspense
        fallback={
          <div className="h-screen bg-slate-100 text-slate-800 transition-colors dark:bg-slate-800 dark:text-slate-200">
            <Loader size={24} displaysText={true} />
          </div>
        }
      >
        <AppLayout />
      </Suspense>
    ),
    children: [
      {
        path: "/pokedex/pokemon",
        element: <AllPokemonPage />,
      },

      {
        path: "/pokedex/pokemon/:name",
        element: <PokemonDetailsPage />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;
export default App;
