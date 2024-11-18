import PokemonCard from "./PokemonCard.tsx";
import ChangePageButtons from "./ChangePageButtons.tsx";
import { usePokemon } from "../shared/PokemonContext.tsx";

export default () => {
  const { currentPage, setCurrentPage } = usePokemon();
  const noOfPokemon = 1025;
  const pokemonPerPage = 20;
  const noOfPages = Math.ceil(noOfPokemon / pokemonPerPage); // to change noOfPokemon to filtered Pokémon

  // For use with Pokémon names instead of IDs
  // useEffect(() => {
  //   const api = new PokemonClient();
  //   const fetchPokemon = async () => {
  //     await api
  //       .listPokemons(0, 1025)
  //       .then((response) => console.log(response.results))
  //       .catch((error) => console.error(error));
  //   };
  //   fetchPokemon().then();
  // }, []);

  const renderPokemon = () => {
    let items = [];
    for (
      let i = (currentPage - 1) * pokemonPerPage + 1;
      i <= Math.min(currentPage * pokemonPerPage, noOfPokemon);
      i++
    ) {
      items.push(<PokemonCard key={i} index={i} />);
    }
    return items;
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
