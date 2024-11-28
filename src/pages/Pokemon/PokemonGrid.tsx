import { usePokemon } from "../../hooks/usePokemon.ts";
import Sidebar from "../../components/Sidebar.tsx";
import ChangePageButtons from "../../components/ChangePageButtons.tsx";
import PokemonCard from "../../components/PokemonCard.tsx";

const PokemonGrid = () => {
  const { currentPage, changeCurrentPage, clearFiltering, pokemonList } =
    usePokemon();
  const noOfPokemon = pokemonList.length;
  const pokemonPerPage = 20;
  const noOfPages = Math.ceil(noOfPokemon / pokemonPerPage);

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
              changeCurrentPage,
              noOfPages,
              noOfSideButtons: 3,
            })}

          {pokemonList.length ? (
            <div className="w-full mt-4 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4">
              {getPokemonIndexes().map((i) => (
                <PokemonCard key={pokemonList[i].name} id={pokemonList[i].id} />
              ))}
            </div>
          ) : (
            // Display an error if there are no Pokémon found
            <div className="lg:h-screen lg:-m-28 flex flex-col gap-4 justify-center items-center text-center">
              <h2 className="text-3xl font-bold">No Pokémon Found</h2>

              <p className="text-gray-700 mb-2">
                Try other filtering options or another search query
              </p>

              <button
                onClick={clearFiltering}
                className="border w-full py-2 rounded-full shadow-md hover:shadow-lg transition-shadow bg-black text-white"
              >
                Clear Filtering
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
export default PokemonGrid;
