import PokemonCard from "../components/PokemonCard.tsx";
import ChangePageButtons from "../components/ChangePageButtons.tsx";
import { usePokemon } from "../hooks/usePokemon.ts";
import { useEffect } from "react";
import { fetchAllPokemon } from "../services/apiService.ts";

const PokemonGrid = () => {
  const { currentPage, changeCurrentPage, loadAllPokemon, pokemonList } =
    usePokemon();
  const noOfPokemon = pokemonList.length;
  const pokemonPerPage = 20;
  const noOfPages = Math.ceil(noOfPokemon / pokemonPerPage);

  useEffect(() => {
    fetchAllPokemon()
      .then((data) => loadAllPokemon(data))
      .catch((error) => console.error("Failed to fetch all Pokémon", error));
  }, []);

  const getPokemonIds = () => {
    const pokemonIds: number[] = [];
    for (
      let id = (currentPage - 1) * pokemonPerPage;
      id < Math.min(currentPage * pokemonPerPage, noOfPokemon);
      id++
    ) {
      pokemonIds.push(id);
    }
    return pokemonIds;
  };

  return (
    <div className="p-4 flex flex-col items-center">
      {ChangePageButtons({
        currentPage,
        changeCurrentPage,
        noOfPages,
        noOfSideButtons: 3,
      })}

      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4">
        {getPokemonIds().map((id) => (
          <PokemonCard key={pokemonList[id].name} name={pokemonList[id].name} />
        ))}
      </div>
    </div>
  );
};
export default PokemonGrid;
