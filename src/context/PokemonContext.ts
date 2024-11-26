import { createContext } from "react";
import { PokemonListType } from "../shared/PokemonProvider.tsx";

interface PokemonContextType {
  currentPage: number;
  changeCurrentPage: (page: number) => void;
  pokemonGens: PokemonListType[];
  pokemonTypes: PokemonListType[];
  currentGen: string;
  changeCurrentGen: (gen: string) => void;
  currentType: string;
  changeCurrentType: (type: string) => void;
  pokemonList: number[];
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export default PokemonContext;
