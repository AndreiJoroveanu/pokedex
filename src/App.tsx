import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
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

const App = () => <RouterProvider router={router} />;
export default App;
