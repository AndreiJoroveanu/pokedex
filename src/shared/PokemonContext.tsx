import { createContext, ReactNode, useContext, useState } from "react";

interface PokemonContextType {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const PokemonProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <PokemonContext.Provider value={{ currentPage, setCurrentPage }}>
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
