import { createContext } from "react";
import { PokemonListType } from "../shared/PokemonProvider.tsx";

interface PokemonContextType {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  pokemonList: PokemonListType[];
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export default PokemonContext;
