import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router";
import AllPokemonPage from "./pages/Pokemon/AllPokemonPage.tsx";
import PokemonDetailsPage from "./pages/Pokemon/PokemonDetailsPage.tsx";
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
        element: <AllPokemonPage />,
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
