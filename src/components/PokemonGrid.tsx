import PokemonCard from "./PokemonCard.tsx";
import ChangePageButtons from "./ChangePageButtons.tsx";
import { usePokemon } from "../hooks/usePokemon.ts";
import { useEffect } from "react";
import { PokemonClient } from "pokenode-ts";

const PokemonGrid = () => {
  const { currentPage, setCurrentPage, setAllPokemon, pokemonList } =
    usePokemon();
  const noOfPokemon = pokemonList.length;
  const pokemonPerPage = 20;
  const noOfPages = Math.ceil(noOfPokemon / pokemonPerPage); // to change noOfPokemon to filtered Pokémon

  useEffect(() => {
    const api = new PokemonClient();
    const fetchPokemon = async () => {
      await api
        .listPokemons(0, 1025)
        .then((response) => setAllPokemon(response.results))
        .catch((error) => console.error("Failed to fetch Pokémon list", error));
    };
    fetchPokemon().then();
  }, [setAllPokemon]);

  const getPokemonIds = () => {
    const pokemonCards = [];
    for (
      let i = (currentPage - 1) * pokemonPerPage;
      i < Math.min(currentPage * pokemonPerPage, noOfPokemon);
      i++
    ) {
      pokemonCards.push(i);
    }
    return pokemonCards;
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <div className="mb-4">
        {ChangePageButtons({
          currentPage,
          setCurrentPage,
          noOfPages,
          noOfSideButtons: 3,
        })}
      </div>

      <div className="grid grid-cols-5 gap-4">
        {pokemonList.length &&
          getPokemonIds().map((index) => (
            <PokemonCard key={index} name={pokemonList[index].name} />
          ))}
      </div>
    </div>
  );
};
export default PokemonGrid;
