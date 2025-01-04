import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";

import Loader from "./components/Loader.tsx";
import AppLayout from "./ui/AppLayout.tsx";

const AllPokemonPage = lazy(() => import("./pages/AllPokemon.tsx"));
const Sidebar = lazy(() => import("./components/Sidebar.tsx"));
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
          <div className="h-screen">
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
        element: (
          <>
            <Sidebar />
            <AllPokemonPage />
          </>
        ),
      },

      {
        path: "/pokemon/:name",
        element: <PokemonDetailsPage />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;
export default App;
