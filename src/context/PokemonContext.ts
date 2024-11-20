import { createContext } from "react";
import { PokemonListType } from "../shared/PokemonProvider.tsx";

interface PokemonContextType {
  changeCurrentPage: (page: number) => void;
  changeCurrentType: (type: string) => void;
  currentPage: number;
  currentType: string;
  loadAllPokemon: (pokemon: PokemonListType[]) => void;
  pokemonList: PokemonListType[];
  pokemonTypes: PokemonListType[];
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export default PokemonContext;
