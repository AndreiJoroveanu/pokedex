import { usePokemon } from "../hooks/usePokemon.ts";

const Sidebar = () => {
  const {
    pokemonGens,
    pokemonTypes,
    currentGen,
    changeCurrentGen,
    currentType,
    changeCurrentType,
    searchQuery,
    changeSearchQuery,
    clearFiltering,
  } = usePokemon();

  return (
    <aside className="lg:fixed lg:h-[calc(100vh-96px)] lg:w-1/5 overflow-y-scroll p-4 lg:border-r border-gray-200">
      <input
        type="text"
        placeholder="Search by Pokémon name"
        value={searchQuery}
        onChange={(e) => changeSearchQuery(e.target.value)}
        className="w-full border py-2 rounded-full text-center shadow-md hover:shadow-lg focus:shadow-lg transition-shadow"
      />

      <p className="text-2xl font-bold my-2">Generation Filtering:</p>
      <div className="grid grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2">
        {pokemonGens.map((gen) => (
          <button
            key={gen.name}
            onClick={() =>
              changeCurrentGen(currentGen === gen.name ? "" : gen.name)
            }
            className={`capitalize border py-2 rounded-full shadow-md hover:shadow-lg transition-shadow ${currentGen === gen.name ? "bg-black text-white" : "hover:bg-gray-100"}`}
          >
            {/* Convert the label from "generation-iv" to "Gen. IV" */}
            {`${gen.name.split("-")[0].slice(0, 3)}. ${gen.name.split("-")[1].toUpperCase()}`}
          </button>
        ))}
      </div>

      <p className="text-2xl font-bold my-2">Type Filtering:</p>
      <div className="grid grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2">
        {pokemonTypes.map((type) => (
          <button
            key={type.name}
            onClick={() =>
              changeCurrentType(currentType === type.name ? "" : type.name)
            }
            className={`capitalize border py-2 rounded-full shadow-md hover:shadow-lg transition-shadow ${currentType === type.name ? "bg-black text-white" : "hover:bg-gray-100"}`}
          >
            {type.name}
          </button>
        ))}
      </div>

      <button
        onClick={clearFiltering}
        disabled={!currentGen && !currentType && !searchQuery}
        className="border w-full my-4 py-2 rounded-full shadow-md enabled:hover:shadow-lg transition-shadow bg-black text-white disabled:opacity-25 disabled:cursor-not-allowed"
      >
        Clear Filtering
      </button>
    </aside>
  );
};
export default Sidebar;
