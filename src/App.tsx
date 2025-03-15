import { lazy } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";

import AppLayout from "@/ui/AppLayout.tsx";

const AllPokemonPage = lazy(() => import("@/pages/AllPokemon.tsx"));
const PokemonDetailsPage = lazy(() => import("@/pages/PokemonDetails.tsx"));
const AllMovesPage = lazy(() => import("@/pages/AllMoves.tsx"));
const MoveDetailsPage = lazy(() => import("@/pages/MoveDetails.tsx"));

const router = createBrowserRouter([
  {
    path: "/pokedex",
    element: <Navigate replace to="/pokedex/pokemon" />,
  },

  {
    element: <AppLayout />,
    children: [
      {
        path: "/pokedex/pokemon",
        element: <AllPokemonPage />,
      },
      {
        path: "/pokedex/pokemon/:id",
        element: <PokemonDetailsPage />,
      },
      {
        path: "/pokedex/moves",
        element: <AllMovesPage />,
      },
      {
        path: "/pokedex/moves/:id",
        element: <MoveDetailsPage />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;
export default App;
