import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import PokemonGrid from "./pages/Pokemon/PokemonGrid.tsx";
import Navigation from "./components/Navigation.tsx";
import PokemonDetails from "./pages/Pokemon/PokemonDetails.tsx";
import PokemonProvider from "./shared/PokemonProvider.tsx";

const App = () => {
  return (
    <Router>
      <PokemonProvider>
        <Navigation />

        <Routes>
          <Route path="/" element={<Navigate to="/pokemon" />} />
          <Route path="/pokemon" element={<PokemonGrid />} />
          <Route path="/pokemon/:name" element={<PokemonDetails />} />
        </Routes>
      </PokemonProvider>
    </Router>
  );
};

export default App;
