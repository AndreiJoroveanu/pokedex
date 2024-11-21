import { ReactNode, useEffect, useState } from "react";
import PokemonContext from "../context/PokemonContext";
import {
  fetchAllPokemonByType,
  fetchPokemonTypes,
} from "../services/apiService.ts";

export interface PokemonListType {
  name: string;
  url: string;
}

const PokemonProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentType, setCurrentType] = useState("");
  const [allPokemon, setAllPokemon] = useState<PokemonListType[]>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<PokemonListType[]>([]);
  const [pokemonList, setPokemonList] = useState<PokemonListType[]>([]);
  const [pokemonTypes, setPokemonTypes] = useState<PokemonListType[]>([]);

  useEffect(() => setCurrentPage(1), [currentType]);

  useEffect(() => {
    setPokemonList(currentType ? filteredPokemon : allPokemon);
  }, [allPokemon, currentType, filteredPokemon]);

  useEffect(() => {
    if (currentType)
      fetchAllPokemonByType(currentType)
        .then((data) => setFilteredPokemon(data))
        .catch((e) => console.error("Failed to fetch Pokémon by type", e));
  }, [currentType]);

  useEffect(() => {
    fetchPokemonTypes()
      .then((data) => setPokemonTypes(data))
      .catch((e) => console.error("Failed to fetch Pokémon types", e));
  }, []);

  const changeCurrentPage = (page: number) => setCurrentPage(page);
  const changeCurrentType = (type: string) => setCurrentType(type);
  const loadAllPokemon = (pokemon: PokemonListType[]) => setAllPokemon(pokemon);

  return (
    <PokemonContext.Provider
      value={{
        changeCurrentPage,
        changeCurrentType,
        currentPage,
        currentType,
        loadAllPokemon,
        pokemonList,
        pokemonTypes,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
export default PokemonProvider;
