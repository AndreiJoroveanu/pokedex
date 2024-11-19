import { ReactNode, useEffect, useState } from "react";
import { PokemonClient } from "pokenode-ts";
import PokemonContext from "../context/PokemonContext";

export interface PokemonListType {
  name: string;
  url: string;
}

const PokemonProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonList, setPokemonList] = useState<PokemonListType[]>([]);

  useEffect(() => {
    const api = new PokemonClient();
    const fetchPokemon = async () => {
      await api
        .listPokemons(0, 10000)
        .then((response) => setPokemonList(response.results))
        .catch((error) => console.error("Failed to fetch Pokémon list", error));
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
export default PokemonProvider;
