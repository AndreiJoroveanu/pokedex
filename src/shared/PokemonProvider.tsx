import { ReactNode, useEffect, useState } from "react";
import PokemonContext from "../context/PokemonContext";
import {
  fetchPokemonGens,
  fetchPokemonTypes,
  fetchAllPokemon,
  fetchAllPokemonByGen,
  fetchAllPokemonByType,
} from "../services/apiService.ts";

interface ItemListType {
  name: string;
  url: string;
}

interface PokemonListType {
  id: number;
  name: string;
}

const PokemonProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [pokemonGens, setPokemonGens] = useState<ItemListType[]>([]);
  const [pokemonTypes, setPokemonTypes] = useState<ItemListType[]>([]);

  const [currentGen, setCurrentGen] = useState<string>("");
  const [currentType, setCurrentType] = useState<string>("");

  const [searchQuery, setSearchQuery] = useState<string>("");

  const [filteredByGen, setFilteredByGen] = useState<PokemonListType[]>([]);
  const [filteredByType, setFilteredByType] = useState<PokemonListType[]>([]);

  const [beforeQueryFilter, setBeforeQueryFilter] = useState<PokemonListType[]>(
    [],
  );
  const [pokemonList, setPokemonList] = useState<PokemonListType[]>([]);

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
      setBeforeQueryFilter(
        filteredByGen.flatMap((pg) =>
          filteredByType.find((pt) => pt.id === pg.id)
            ? { id: pg.id, name: pg.name }
            : [],
        ),
      );
    }
    // If there only is a gen selected
    else if (currentGen) setBeforeQueryFilter(filteredByGen);
    // If there only is a type selected
    else if (currentType) setBeforeQueryFilter(filteredByType);
    // If there is nothing selected (display all 1025 Pokémon)
    else {
      fetchAllPokemon()
        .then((data) => setBeforeQueryFilter(data))
        .catch((e) => console.error("Failed to fetch all Pokémon", e));
    }
  }, [currentGen, currentType, filteredByGen, filteredByType]);

  // Search query filtering
  useEffect(() => {
    if (searchQuery.trim().length) {
      setPokemonList(
        beforeQueryFilter.filter((p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
      );
    } else setPokemonList(beforeQueryFilter);
  }, [beforeQueryFilter, searchQuery]);

  // Setter methods
  const changeCurrentPage = (page: number) => setCurrentPage(page);
  const changeCurrentGen = (gen: string) => setCurrentGen(gen);
  const changeCurrentType = (type: string) => setCurrentType(type);
  const changeSearchQuery = (query: string) => setSearchQuery(query);

  // Clear filtering method
  const clearFiltering = () => {
    setCurrentGen("");
    setCurrentType("");
    setSearchQuery("");
  };

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
        searchQuery,
        changeSearchQuery,
        clearFiltering,
        pokemonList,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
export default PokemonProvider;
