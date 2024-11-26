import { ReactNode, useEffect, useState } from "react";
import PokemonContext from "../context/PokemonContext";
import {
  fetchPokemonGens,
  fetchPokemonTypes,
  fetchAllPokemonByGen,
  fetchAllPokemonByType,
} from "../services/apiService.ts";

export interface PokemonListType {
  name: string;
  url: string;
}

const PokemonProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [pokemonGens, setPokemonGens] = useState<PokemonListType[]>([]);
  const [pokemonTypes, setPokemonTypes] = useState<PokemonListType[]>([]);

  const [currentGen, setCurrentGen] = useState<string>("");
  const [currentType, setCurrentType] = useState<string>("");

  const [filteredByGen, setFilteredByGen] = useState<number[]>([]);
  const [filteredByType, setFilteredByType] = useState<number[]>([]);

  const [pokemonList, setPokemonList] = useState<number[]>([]);

  // Reset selected page if the filtering changes
  useEffect(() => setCurrentPage(1), [currentGen, currentType]);

  // Fetch Pokémon gens & types
  useEffect(() => {
    fetchPokemonGens()
      .then((data) => setPokemonGens(data))
      .catch((e) => console.error("Failed to fetch Pokémon gens", e));

    fetchPokemonTypes()
      .then((data) => setPokemonTypes(data))
      .catch((e) => console.error("Failed to fetch Pokémon types", e));
  }, []);

  // Filter by Pokémon generation
  useEffect(() => {
    if (currentGen)
      fetchAllPokemonByGen(currentGen)
        .then((data) => setFilteredByGen(data))
        .catch((e) => console.error("Failed to fetch Pokémon by gen", e));
  }, [currentGen]);

  // Filter by Pokémon type
  useEffect(() => {
    if (currentType)
      fetchAllPokemonByType(currentType)
        .then((data) => setFilteredByType(data))
        .catch((e) => console.error("Failed to fetch Pokémon by type", e));
  }, [currentType]);

  // Combine filtering
  useEffect(() => {
    // If there is both a gen and a type selected
    if (currentGen && currentType) {
      const setA = new Set(filteredByGen);
      const setB = new Set(filteredByType);
      const intersection = new Set([...setA].filter((x) => setB.has(x)));
      setPokemonList(Array.from(intersection));
    }
    // If there only is a gen selected
    else if (currentGen) setPokemonList(filteredByGen);
    // If there only is a type selected
    else if (currentType) setPokemonList(filteredByType);
    // If there is nothing selected (display all 1025 Pokémon)
    else setPokemonList([...Array(1025)].map((_, i) => i + 1));
  }, [currentGen, currentType, filteredByGen, filteredByType]);

  // Setter methods
  const changeCurrentPage = (page: number) => setCurrentPage(page);
  const changeCurrentGen = (type: string) => setCurrentGen(type);
  const changeCurrentType = (type: string) => setCurrentType(type);

  return (
    <PokemonContext.Provider
      value={{
        currentPage,
        changeCurrentPage,
        pokemonGens,
        pokemonTypes,
        currentGen,
        changeCurrentGen,
        currentType,
        changeCurrentType,
        pokemonList,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
export default PokemonProvider;
