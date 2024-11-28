import { usePokemon } from "../../hooks/usePokemon.ts";
import Sidebar from "../../components/Sidebar.tsx";
import ChangePageButtons from "../../components/ChangePageButtons.tsx";
import PokemonCard from "../../components/PokemonCard.tsx";

const PokemonGrid = () => {
  const { currentPage, changeCurrentPage, pokemonList } = usePokemon();
  const noOfPokemon = pokemonList.length;
  const pokemonPerPage = 20;
  const noOfPages = Math.ceil(noOfPokemon / pokemonPerPage);

  // Get the IDs from the page to display
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
    <div className="relative py-24">
      <Sidebar />

      <section className="lg:absolute right-0 w-full lg:w-4/5">
        <div className="p-4 flex flex-col items-center">
          {noOfPages > 1 &&
            ChangePageButtons({
              currentPage,
              changeCurrentPage,
              noOfPages,
              noOfSideButtons: 3,
            })}

          <div className="w-full mt-4 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4">
            {getPokemonIds().map((id) => (
              <PokemonCard key={pokemonList[id].name} id={pokemonList[id].id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default PokemonGrid;
