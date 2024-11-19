import { ReactNode, useEffect, useMemo, useState } from "react";
import { PokemonClient } from "pokenode-ts";
import PokemonContext from "../context/PokemonContext";

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

  useEffect(() => {
    const fetchPokemon = async () => {
      if (currentType) {
        const api = new PokemonClient();
        await api
          .getTypeByName(currentType)
          .then((response) =>
            setFilteredPokemon(
              response.pokemon.map((pokemon) => pokemon.pokemon),
            ),
          )
          .catch((error) =>
            console.error("Failed to fetch Pokémon list", error),
          );
        setPokemonList(filteredPokemon);
      } else {
        setPokemonList(allPokemon);
      }
    };
    fetchPokemon().then();
  }, [allPokemon, currentType, filteredPokemon]);

  useEffect(() => {
    const api = new PokemonClient();
    const fetchTypes = async () => {
      await api
        .listTypes(0, 18)
        .then((response) => setPokemonTypes(response.results))
        .catch((error) =>
          console.error("Failed to fetch Pokémon types", error),
        );
    };
    fetchTypes().then();
  }, []);

  const contextValues = useMemo(
    () => ({
      currentPage,
      setCurrentPage,
      currentType,
      setCurrentType,
      setAllPokemon,
      pokemonList,
      pokemonTypes,
    }),
    [currentPage, currentType, pokemonList, pokemonTypes],
  );

  return (
    <PokemonContext.Provider value={contextValues}>
      {children}
    </PokemonContext.Provider>
  );
};
export default PokemonProvider;
