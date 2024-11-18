import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import PokemonGrid from "./components/PokemonGrid.tsx";
import Sidebar from "./components/Sidebar.tsx";
import Navigation from "./components/Navigation.tsx";

export default () => {
  return (
    <Router>
      <div className="h-screen">
        <div className="fixed z-10 top-0 w-full h-24 flex items-center bg-white/80 backdrop-blur-md border-b border-b-gray-400 shadow-lg">
          <Navigation />
        </div>

        <Routes>
          <Route path="/" element={<Navigate to="/pokemon" />} />

          <Route
            path="/pokemon"
            element={
              <div className="flex justify-between relative h-screen">
                <div className="fixed bottom-0 h-[calc(100vh-96px)] w-1/5 overflow-y-scroll border-r border-r-gray-200">
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
            element={<span className="fixed top-24">Test</span>}
          />
        </Routes>
      </div>
    </Router>
  );
};
