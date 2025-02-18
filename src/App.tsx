import { ComponentType, lazy, LazyExoticComponent } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useParams,
} from "react-router";

import AppLayout from "@/ui/AppLayout.tsx";

const AllPokemonPage = lazy(() => import("@/pages/AllPokemon.tsx"));
const PokemonDetailsPage = lazy(() => import("@/pages/PokemonDetails.tsx"));

// This is needed to reset the key when the user clicks on
// a different Pokémon link from the Pokémon details page
const PokemonDetailsPageWrapper = ({
  component: Component,
}: {
  component: LazyExoticComponent<ComponentType>;
}) => {
  const { id } = useParams();
  return <Component key={id} />;
};

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
        element: <PokemonDetailsPageWrapper component={PokemonDetailsPage} />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;
export default App;
