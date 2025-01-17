import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";

import Loader from "./ui/Loader.tsx";
import AppLayout from "./ui/AppLayout.tsx";
import DarkModeProvider from "./context/DarkModeProvider.tsx";

const AllPokemonPage = lazy(() => import("./pages/AllPokemon.tsx"));
const PokemonDetailsPage = lazy(() => import("./pages/PokemonDetails.tsx"));

const router = createBrowserRouter([
  {
    index: true,
    element: <Navigate replace to="/pokemon" />,
  },

  {
    element: (
      <Suspense
        fallback={
          <div className="h-screen bg-slate-100 dark:bg-slate-800">
            <Loader size={24} displaysText={true} />
          </div>
        }
      >
        <AppLayout />
      </Suspense>
    ),
    children: [
      {
        path: "/pokemon",
        element: <AllPokemonPage />,
      },

      {
        path: "/pokemon/:name",
        element: <PokemonDetailsPage />,
      },
    ],
  },
]);

const App = () => (
  <DarkModeProvider>
    <RouterProvider router={router} />
  </DarkModeProvider>
);
export default App;
