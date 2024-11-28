import { Navigate, Route, BrowserRouter, Routes } from "react-router";
import PokemonProvider from "./shared/PokemonProvider.tsx";
import Navigation from "./components/Navigation.tsx";
import PokemonGrid from "./pages/Pokemon/PokemonGrid.tsx";
import PokemonDetails from "./pages/Pokemon/PokemonDetails.tsx";

const App = () => (
  <BrowserRouter>
    <PokemonProvider>
      <Navigation />

      <Routes>
        <Route path="/" element={<Navigate to="/pokemon" />} />
        <Route path="/pokemon" element={<PokemonGrid />} />
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
      </Routes>
    </PokemonProvider>
  </BrowserRouter>
);
export default App;
