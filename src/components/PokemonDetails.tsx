import { useState } from "react";
import PokemonCard from "./PokemonCard.tsx";

export default () => {
  const [currentPage, setCurrentPage] = useState(1);
  const noOfPokemon = 1025;
  const pokemonPerPage = 20;
  const noOfPages = Math.ceil(noOfPokemon / pokemonPerPage); // to change noOfPokemon to filtered Pokemon

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
    <div>
      <h1 className="text-2xl font-bold">Pokemon:</h1>

      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 mr-1 border border-gray-200 rounded"
      >
        Prev Page
      </button>

      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === noOfPages}
        className="px-4 py-2 ml-1 border border-gray-200 rounded"
      >
        Next Page
      </button>

      {renderPokemon()}
    </div>
  );
};
