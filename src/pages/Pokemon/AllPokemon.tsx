import { useEffect, useState } from "react";
import usePokemonStore from "../../store/usePokemonStore.ts";
import {
  fetchAllPokemon,
  fetchAllPokemonByGen,
  fetchAllPokemonByType,
} from "../../services/apiService.ts";
import Sidebar from "../../components/Sidebar.tsx";
import ChangePageButtons from "../../components/ChangePageButtons.tsx";
import PokemonCard from "../../components/PokemonCard.tsx";
import ErrorMessage from "../../components/ErrorMessage.tsx";

interface PokemonListType {
  id: number;
  name: string;
}

const AllPokemon = () => {
  const { currentPage, setCurrentPage, currentGen, currentType, searchQuery } =
    usePokemonStore();

  const [filteredByGen, setFilteredByGen] = useState<PokemonListType[]>([]);
  const [filteredByType, setFilteredByType] = useState<PokemonListType[]>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<PokemonListType[]>([]);

  const [pokemonList, setPokemonList] = useState<PokemonListType[]>([]);

  const noOfPokemon = pokemonList.length;
  const pokemonPerPage = 20;
  const noOfPages = Math.ceil(noOfPokemon / pokemonPerPage);

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
      setFilteredPokemon(
        filteredByGen.flatMap((pg) =>
          filteredByType.find((pt) => pt.id === pg.id)
            ? { id: pg.id, name: pg.name }
            : [],
        ),
      );
    }
    // If there only is a gen selected
    else if (currentGen) setFilteredPokemon(filteredByGen);
    // If there only is a type selected
    else if (currentType) setFilteredPokemon(filteredByType);
    // If there is nothing selected (display all 1025 Pokémon)
    else {
      fetchAllPokemon()
        .then((data) => setFilteredPokemon(data))
        .catch((e) => console.error("Failed to fetch all Pokémon", e));
    }
  }, [currentGen, currentType, filteredByGen, filteredByType]);

  // Search query filtering
  useEffect(() => {
    if (searchQuery.trim().length) {
      setPokemonList(
        filteredPokemon.filter((p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
      );
    } else setPokemonList(filteredPokemon);
  }, [filteredPokemon, searchQuery]);

  // Get the indexes from the Pokémon list to display
  const getPokemonIndexes = () => {
    const pokemonIndexes: number[] = [];
    for (
      let i = (currentPage - 1) * pokemonPerPage;
      i < Math.min(currentPage * pokemonPerPage, noOfPokemon);
      i++
    ) {
      pokemonIndexes.push(i);
    }
    return pokemonIndexes;
  };

  return (
    <div className="relative py-24">
      <Sidebar />

      <section className="lg:absolute right-0 w-full lg:w-4/5">
        <div className="p-4 flex flex-col items-center">
          {noOfPages > 1 &&
            // Display buttons if there are more than one page
            ChangePageButtons({
              currentPage,
              setCurrentPage,
              noOfPages,
              noOfSideButtons: 3,
            })}

          {pokemonList.length ? (
            <main className="w-full mt-4 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4">
              {getPokemonIndexes().map((i) => (
                <PokemonCard key={pokemonList[i].name} id={pokemonList[i].id} />
              ))}
            </main>
          ) : (
            <ErrorMessage type="Pokémon" />
          )}
        </div>
      </section>
    </div>
  );
};
export default AllPokemon;
