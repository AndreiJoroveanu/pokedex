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
  searchQuery: string;
  changeSearchQuery: (query: string) => void;
  clearFiltering: () => void;
  pokemonList: { id: number; name: string }[];
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);
export default PokemonContext;
