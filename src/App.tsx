import { ElementType, lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useParams,
} from "react-router";
import { ErrorBoundary } from "react-error-boundary";

import ErrorMessage from "@/ui/ErrorMessage.tsx";
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

// Wrapper for Suspense and ErrorBoundary
const wrapper = (Component: ElementType) => (
  <ErrorBoundary
    FallbackComponent={({ error }: { error: Error }) => (
      <ErrorMessage errors={[error.message]} />
    )}
  >
    <Suspense
      fallback={
        <div className="h-screen bg-slate-100 transition-colors dark:bg-slate-800">
          <Loader size={24} displaysText={true} />
        </div>
      }
    >
      <Component />
    </Suspense>
  </ErrorBoundary>
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
        element: wrapper(AllPokemonPage),
      },

      {
        path: "/pokedex/pokemon/:id",
        element: wrapper(PokemonDetailsPageWrapper),
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;
export default App;
