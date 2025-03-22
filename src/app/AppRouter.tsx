import { lazy } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";

import AppLayout from "@/app/AppLayout.tsx";
import ErrorMessage from "@/components/error/ErrorMessage.tsx";

const AllPokemon = lazy(() => import("@/app/routes/AllPokemon.tsx"));
const PokemonDetails = lazy(() => import("@/app/routes/PokemonDetails.tsx"));
const AllMoves = lazy(() => import("@/app/routes/AllMoves.tsx"));
const MoveDetails = lazy(() => import("@/app/routes/MoveDetails.tsx"));

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
        element: <AllPokemon />,
      },
      {
        path: "/pokedex/pokemon/:id",
        element: <PokemonDetails />,
      },
      {
        path: "/pokedex/moves",
        element: <AllMoves />,
      },
      {
        path: "/pokedex/moves/:id",
        element: <MoveDetails />,
      },
      {
        path: "*",
        element: <ErrorMessage errors={["Page not found"]} />,
      },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;
export default AppRouter;
