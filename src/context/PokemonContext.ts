import { createContext } from "react";
import { PokemonListType } from "../shared/PokemonProvider.tsx";

interface PokemonContextType {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  currentType: string;
  setCurrentType: (type: string) => void;
  setAllPokemon: (pokemon: PokemonListType[]) => void;
  pokemonList: PokemonListType[];
  pokemonTypes: PokemonListType[];
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export default PokemonContext;
