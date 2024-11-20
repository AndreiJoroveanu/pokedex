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
        <div className="fixed z-10 w-full h-24 flex bg-white/80 backdrop-blur-md border-b border-gray-400 shadow-lg">
          <Navigation />
        </div>

        <Routes>
          <Route path="/" element={<Navigate to="/pokemon" />} />

          <Route
            path="/pokemon"
            element={
              <div className="relative py-24">
                <div className="lg:fixed lg:h-[calc(100vh-96px)] lg:w-1/5 overflow-y-scroll lg:border-r border-gray-200">
                  <Sidebar />
                </div>
                <div className="lg:absolute right-0 w-full lg:w-4/5">
                  <PokemonGrid />
                </div>
              </div>
            }
          />

          <Route
            path="/pokemon/:name"
            element={
              <div className="py-24">
                <PokemonDetails />
              </div>
            }
          />
        </Routes>
      </PokemonProvider>
    </Router>
  );
};

export default App;
