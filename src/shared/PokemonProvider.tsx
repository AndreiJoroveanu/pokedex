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

  // Reset current page when changing type filter
  useEffect(() => setCurrentPage(1), [currentType]);

  // Set visible Pokémon based on if there is a type filter
  useEffect(() => {
    setPokemonList(currentType ? filteredPokemon : allPokemon);
  }, [allPokemon, currentType, filteredPokemon]);

  // Fetch Pokémon of a specific type if needed
  useEffect(() => {
    if (currentType) {
      const fetchPokemon = async () => {
        // Need to somehow decouple the API calls from here
        const api = new PokemonClient();
        await api
          .getTypeByName(currentType)
          .then((response) =>
            setFilteredPokemon(
              response.pokemon
                .map((pokemon) => pokemon.pokemon)
                // This is to filter alternate Pokémon forms which have >10000 IDs
                .filter(
                  (pokemon) =>
                    Number(
                      pokemon.url
                        .split("https://pokeapi.co/api/v2/pokemon/")[1]
                        .split("/")[0],
                    ) < 10000,
                ),
            ),
          )
          .catch((error) =>
            console.error("Failed to fetch Pokémon list", error),
          );
      };
      fetchPokemon().then();
    }
  }, [currentType]);

  // Fetch all types
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
