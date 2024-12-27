import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router";
import Navbar from "./components/Navbar.tsx";
import Loader from "./components/Loader.tsx";

const AllPokemonPage = lazy(() => import("./pages/Pokemon/AllPokemonPage.tsx"));
const Sidebar = lazy(() => import("./components/Sidebar.tsx"));
const PokemonDetailsPage = lazy(
  () => import("./pages/Pokemon/PokemonDetailsPage.tsx"),
);

const router = createBrowserRouter([
  {
    index: true,
    element: <Navigate replace to="/pokemon" />,
  },

  {
    element: (
      <div className="h-screen">
        <Suspense
          fallback={
            <Loader size={24}>
              <p className="mt-4 text-2xl font-bold">Loading...</p>
            </Loader>
          }
        >
          <Navbar />
          <Outlet />
          <ScrollRestoration />
        </Suspense>
      </div>
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
