import PokemonCard from "./PokemonCard.tsx";
import ChangePageButtons from "./ChangePageButtons.tsx";
import { usePokemon } from "../hooks/usePokemon.ts";
import { useEffect } from "react";
import { PokemonClient } from "pokenode-ts";

const PokemonGrid = () => {
  const { currentPage, changeCurrentPage, loadAllPokemon, pokemonList } =
    usePokemon();
  const noOfPokemon = pokemonList.length;
  const pokemonPerPage = 20;
  const noOfPages = Math.ceil(noOfPokemon / pokemonPerPage);

  // TODO: Make this a hook?
  useEffect(() => {
    const api = new PokemonClient();
    const fetchPokemon = async () => {
      await api
        .listPokemons(0, 1025)
        .then((response) => loadAllPokemon(response.results))
        .catch((error) => console.error("Failed to fetch Pokémon list", error));
    };
    fetchPokemon().then();
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
