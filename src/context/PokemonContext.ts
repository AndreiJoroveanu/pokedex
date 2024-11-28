import { createContext } from "react";

interface PokemonContextType {
  currentPage: number;
  changeCurrentPage: (page: number) => void;
  pokemonGens: { name: string; url: string }[];
  pokemonTypes: { name: string; url: string }[];
  currentGen: string;
  changeCurrentGen: (gen: string) => void;
  currentType: string;
  changeCurrentType: (type: string) => void;
  pokemonList: { id: number; name: string }[];
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);
export default PokemonContext;
