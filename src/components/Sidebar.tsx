import usePokemonStore from "../store/usePokemonStore.ts";
import { usePokemonGens, usePokemonTypes } from "../hooks/usePokemon.ts";
import Button from "./Button.tsx";

const Sidebar = () => {
  const {
    currentGen,
    setCurrentGen,
    currentType,
    setCurrentType,
    searchQuery,
    setSearchQuery,
    clearFilters,
  } = usePokemonStore();

  const { data: pokemonGens /* isLoading, error */ } = usePokemonGens();
  const { data: pokemonTypes /* isLoading, error */ } = usePokemonTypes();

  return (
    <aside className="lg:fixed lg:h-[calc(100vh-96px)] lg:w-1/5 overflow-y-scroll p-4 lg:border-r border-gray-200">
      <input
        type="text"
        placeholder="Search by Pokémon name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full border py-2 rounded-full text-center shadow-md hover:shadow-lg focus:shadow-lg transition-shadow"
      />

      <h2 className="text-2xl font-bold my-2">Generation Filtering:</h2>
      <div className="grid grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2">
        {pokemonGens?.map((gen) => (
          <Button
            key={gen.name}
            onClick={() =>
              setCurrentGen(currentGen === gen.name ? "" : gen.name)
            }
            isSelected={currentGen === gen.name}
            className="capitalize"
          >
            {/* Convert the label from "generation-iv" to "Gen. IV" */}
            {`${gen.name.split("-")[0].slice(0, 3)}. ${gen.name.split("-")[1].toUpperCase()}`}
          </Button>
        ))}
      </div>

      <h2 className="text-2xl font-bold my-2">Type Filtering:</h2>
      <div className="grid grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2">
        {pokemonTypes?.map((type) => (
          <Button
            key={type.name}
            onClick={() =>
              setCurrentType(currentType === type.name ? "" : type.name)
            }
            isSelected={currentType === type.name}
            className="capitalize"
          >
            {type.name}
          </Button>
        ))}
      </div>

      <Button
        onClick={clearFilters}
        disabled={!currentGen && !currentType && !searchQuery}
        isSelected={true}
        className="w-full my-4 disabled:opacity-25 disabled:cursor-not-allowed"
      >
        Clear Filtering
      </Button>
    </aside>
  );
};
export default Sidebar;
