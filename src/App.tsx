import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import PokemonGrid from "./components/PokemonGrid.tsx";
import Sidebar from "./components/Sidebar.tsx";
import Navigation from "./components/Navigation.tsx";
import PokemonDetails from "./components/PokemonDetails.tsx";
import PokemonProvider from "./shared/PokemonProvider.tsx";

const App = () => {
  return (
    <Router>
      <PokemonProvider>
        <div className="h-screen">
          <div className="fixed z-10 top-0 w-full h-24 flex items-center bg-white/80 backdrop-blur-md border-b border-b-gray-400 shadow-lg">
            <Navigation />
          </div>

          <Routes>
            <Route path="/" element={<Navigate to="/pokemon" />} />

            <Route
              path="/pokemon"
              element={
                <div className="flex justify-between relative h-screen py-24">
                  <div className="fixed h-[calc(100vh-96px)] w-1/5 overflow-y-scroll border-r border-r-gray-200">
                    <Sidebar />
                  </div>
                  <div className="absolute right-0 w-4/5 overflow-y-scroll">
                    <PokemonGrid />
                  </div>
                </div>
              }
            />

            <Route
              path="/pokemon/:id"
              element={
                <div className="py-24">
                  <PokemonDetails />
                </div>
              }
            />
          </Routes>
        </div>
      </PokemonProvider>
    </Router>
  );
};

export default App;
