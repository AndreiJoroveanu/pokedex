import { useEffect, useMemo, useState } from "react";
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

  const [allPokemon, setAllPokemon] = useState<PokemonListType[]>([]);
  const [pokemonList, setPokemonList] = useState<PokemonListType[]>([]);

  const [filteredByGen, setFilteredByGen] = useState<PokemonListType[]>([]);
  const [filteredByType, setFilteredByType] = useState<PokemonListType[]>([]);

  const noOfPokemon = pokemonList.length;
  const pokemonPerPage = 20;
  const noOfPages = Math.ceil(noOfPokemon / pokemonPerPage);

  // Fetch all Pokémon
  useEffect(() => {
    fetchAllPokemon()
      .then((data) => setAllPokemon(data))
      .catch((e) => console.error("Failed to fetch all Pokémon", e));
  }, []);

  // Fetch Pokémon by gen
  useEffect(() => {
    if (currentGen)
      fetchAllPokemonByGen(currentGen)
        .then((data: PokemonListType[]) => setFilteredByGen(data))
        .catch((e) => console.error("Failed to fetch Pokémon by gen", e));
    else setFilteredByGen([]);
  }, [currentGen]);

  // Fetch Pokémon by type
  useEffect(() => {
    if (currentType)
      fetchAllPokemonByType(currentType)
        .then((data: PokemonListType[]) => setFilteredByType(data))
        .catch((e) => console.error("Failed to fetch Pokémon by type", e));
    else setFilteredByType([]);
  }, [currentType]);

  // Filtering
  const filteredPokemon = useMemo(() => {
    if (!allPokemon) return;

    let result: PokemonListType[] = [...allPokemon];

    // If there is a gen selected
    if (filteredByGen.length)
      result = result.filter((fp) =>
        new Set(filteredByGen.map((pg) => pg.id)).has(fp.id),
      );

    // If there is a type selected
    if (filteredByType.length)
      result = result.filter((fp) =>
        new Set(filteredByType.map((pt) => pt.id)).has(fp.id),
      );

    // Search query filtering
    if (searchQuery.trim().length)
      result = result.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase().trim()),
      );

    return result;
  }, [allPokemon, filteredByGen, filteredByType, searchQuery]);

  useEffect(() => {
    if (filteredPokemon) setPokemonList(filteredPokemon);
  }, [filteredPokemon]);

  // Get the Pokémon from the current page to display
  const paginatedPokemon = useMemo(() => {
    return pokemonList.slice(
      (currentPage - 1) * pokemonPerPage,
      currentPage * pokemonPerPage,
    );
  }, [currentPage, pokemonList]);

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
              {paginatedPokemon.map((pokemon) => (
                <PokemonCard key={pokemon.name} id={pokemon.id} />
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
