import { lazy } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";

import AppLayout from "./ui/AppLayout.tsx";

const AllPokemonPage = lazy(() => import("./pages/AllPokemon.tsx"));
const PokemonDetailsPage = lazy(() => import("./pages/PokemonDetails.tsx"));

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
        path: "/pokedex/pokemon/:name",
        element: <PokemonDetailsPage />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;
export default App;
