import { useState } from "react";
import PokemonCard from "./PokemonCard.tsx";
import {
  TfiControlBackward,
  TfiControlForward,
  TfiControlSkipBackward,
  TfiControlSkipForward,
} from "react-icons/tfi";

export default () => {
  const [currentPage, setCurrentPage] = useState(1);
  const noOfPokemon = 1025;
  const pokemonPerPage = 20;
  const noOfPages = Math.ceil(noOfPokemon / pokemonPerPage); // to change noOfPokemon to filtered Pokémon

  const getPaginationButtons = () => {
    const buttons: number[] = [];

    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(noOfPages, currentPage + 2);

    for (let page = startPage; page <= endPage; page++) buttons.push(page);
    return buttons;
  };

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
    <div className="p-4 py-28 flex flex-col items-center">
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
          className="border px-4 py-2 mx-1 rounded-full disabled:opacity-25 enabled:hover:bg-gray-100 shadow-md enabled:hover:shadow-lg transition-shadow"
        >
          <TfiControlSkipBackward />
        </button>

        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="border px-4 py-2 mx-1 rounded-full disabled:opacity-25 enabled:hover:bg-gray-100 shadow-md enabled:hover:shadow-lg transition-shadow"
        >
          <TfiControlBackward />
        </button>

        {getPaginationButtons().map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`border px-4 py-2 mx-1 rounded-full ${page === currentPage ? "bg-black text-white" : "enabled:hover:bg-gray-100"} shadow-md hover:shadow-lg transition-shadow`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === noOfPages}
          className="border px-4 py-2 mx-1 rounded-full disabled:opacity-25 enabled:hover:bg-gray-100 shadow-md enabled:hover:shadow-lg transition-shadow"
        >
          <TfiControlForward />
        </button>

        <button
          onClick={() => setCurrentPage(noOfPages)}
          disabled={currentPage === noOfPages}
          className="border px-4 py-2 mx-1 rounded-full disabled:opacity-25 enabled:hover:bg-gray-100 shadow-md enabled:hover:shadow-lg transition-shadow"
        >
          <TfiControlSkipForward />
        </button>
      </div>

      <div className="grid grid-cols-5 gap-4">{renderPokemon()}</div>
    </div>
  );
};
