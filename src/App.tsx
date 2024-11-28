import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import PokemonProvider from "./shared/PokemonProvider.tsx";
import Root from "./components/Root.tsx";
import PokemonGrid from "./pages/Pokemon/PokemonGrid.tsx";
import PokemonDetails from "./pages/Pokemon/PokemonDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/pokemon" />,
  },
  {
    path: "/pokemon",
    element: <Root />,
    children: [
      {
        path: "/pokemon",
        element: <PokemonGrid />,
      },
      {
        path: "/pokemon/:name",
        element: <PokemonDetails />,
      },
    ],
  },
]);

const App = () => (
  <PokemonProvider>
    <RouterProvider router={router} />
  </PokemonProvider>
);
export default App;
