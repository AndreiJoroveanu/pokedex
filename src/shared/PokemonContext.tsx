import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { PokemonClient } from "pokenode-ts";

interface PokemonListType {
  name: string;
  url: string;
}

interface PokemonContextType {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  pokemonList: PokemonListType[];
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const PokemonProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonList, setPokemonList] = useState<PokemonListType[]>([]);

  useEffect(() => {
    const api = new PokemonClient();
    const fetchPokemon = async () => {
      await api
        .listPokemons(0, 10000)
        .then((response) => setPokemonList(response.results))
        .catch((error) => console.error(error));
    };
    fetchPokemon().then();
  }, []);

  return (
    <PokemonContext.Provider
      value={{ currentPage, setCurrentPage, pokemonList }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => {
  const context = useContext(PokemonContext);
  if (!context)
    throw new Error("usePokemon must be used within a _Pokemonrovider");
  return context;
};
