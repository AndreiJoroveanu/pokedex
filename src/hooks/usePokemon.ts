import { useContext } from "react";
import PokemonContext from "../context/PokemonContext.ts";

export const usePokemon = () => {
  const context = useContext(PokemonContext);
  if (!context)
    throw new Error("usePokemon must be used within a PokemonProvider");
  return context;
};
