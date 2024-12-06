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

  const [allPokemon, setAllPokemon] = useState<PokemonListType[]>([]);
  const [pokemonList, setPokemonList] = useState<PokemonListType[]>([]);

  const noOfPokemon = pokemonList.length;
  const pokemonPerPage = 20;
  const noOfPages = Math.ceil(noOfPokemon / pokemonPerPage);

  // Fetch all Pokémon
  useEffect(() => {
    fetchAllPokemon()
      .then((data) => setAllPokemon(data))
      .catch((e) => console.error("Failed to fetch all Pokémon", e));
  }, []);

  // Filtering
  useEffect(() => {
    if (!allPokemon) return;

    const fetchFilteredPokemon = async () => {
      let filteredPokemon: PokemonListType[] = [...allPokemon];

      // If there is a gen selected
      if (currentGen) {
        await fetchAllPokemonByGen(currentGen)
          .then((data: PokemonListType[]) => {
            filteredPokemon = filteredPokemon.filter((fp) =>
              data.some((pg) => fp.id === pg.id),
            );
          })
          .catch((e) => console.error("Failed to fetch Pokémon by gen", e));
      }

      // If there is a type selected
      if (currentType) {
        await fetchAllPokemonByType(currentType)
          .then((data: PokemonListType[]) => {
            filteredPokemon = filteredPokemon.filter((fp) =>
              data.some((pt) => fp.id === pt.id),
            );
          })
          .catch((e) => console.error("Failed to fetch Pokémon by type", e));
      }

      // Search query filtering
      if (searchQuery.trim().length) {
        setPokemonList(
          filteredPokemon.filter((p) =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
        );
      } else setPokemonList(filteredPokemon);
    };

    void fetchFilteredPokemon();
  }, [allPokemon, currentGen, currentType, searchQuery]);

  // Get the Pokémon from the current page to display
  const getPokemon = () =>
    pokemonList.slice(
      (currentPage - 1) * pokemonPerPage,
      // Math.min not necessary, but probably more correct
      Math.min(currentPage * pokemonPerPage, noOfPokemon),
    );

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
              {getPokemon().map((pokemon) => (
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
