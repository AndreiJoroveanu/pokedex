import { ElementType, lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useParams,
} from "react-router";

import Loader from "@/ui/Loader.tsx";
import AppLayout from "@/ui/AppLayout.tsx";

const AllPokemonPage = lazy(() => import("@/pages/AllPokemon.tsx"));
const PokemonDetailsPage = lazy(() => import("@/pages/PokemonDetails.tsx"));

// This is needed to reset the key when the user clicks on
// a different Pokémon link from the Pokémon details page
const PokemonDetailsPageWrapper = () => {
  const { id } = useParams();
  return <PokemonDetailsPage key={id} />;
};

// Suspense wrapper with a loading fallback
const withSuspense = (Component: ElementType) => (
  <Suspense
    fallback={
      <div className="h-screen bg-slate-100 transition-colors dark:bg-slate-800">
        <Loader size={24} displaysText={true} />
      </div>
    }
  >
    <Component />
  </Suspense>
);

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
        element: withSuspense(AllPokemonPage),
      },

      {
        path: "/pokedex/pokemon/:id",
        element: withSuspense(PokemonDetailsPageWrapper),
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;
export default App;
