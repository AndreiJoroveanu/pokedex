import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router";
import AllPokemon from "./pages/Pokemon/AllPokemon.tsx";
import PokemonDetails from "./pages/Pokemon/PokemonDetails.tsx";
import Navbar from "./components/Navbar.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/pokemon" />,
  },
  {
    path: "/pokemon",
    element: (
      <>
        <Navbar />
        <Outlet />
        <ScrollRestoration />
      </>
    ),
    children: [
      {
        path: "/pokemon",
        element: <AllPokemon />,
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
