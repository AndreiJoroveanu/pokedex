import PokemonCard from "./PokemonCard.tsx";
import ChangePageButtons from "./ChangePageButtons.tsx";
import { usePokemon } from "../shared/PokemonContext.tsx";

export default () => {
  const { currentPage, setCurrentPage, pokemonList } = usePokemon();
  const noOfPokemon = 1025;
  const pokemonPerPage = 20;
  const noOfPages = Math.ceil(noOfPokemon / pokemonPerPage); // to change noOfPokemon to filtered Pokémon

  const renderPokemon = () => {
    let items = [];
    if (pokemonList.length) {
      for (
        let i = (currentPage - 1) * pokemonPerPage;
        i < Math.min(currentPage * pokemonPerPage, noOfPokemon);
        i++
      ) {
        items.push(<PokemonCard key={i} name={pokemonList[i].name} />);
      }
      return items;
    }
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

      <div className="grid grid-cols-5 gap-4">{renderPokemon()}</div>
    </div>
  );
};
