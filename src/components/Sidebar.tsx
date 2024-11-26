import { usePokemon } from "../hooks/usePokemon.ts";

const Sidebar = () => {
  const {
    pokemonGens,
    pokemonTypes,
    currentGen,
    changeCurrentGen,
    currentType,
    changeCurrentType,
  } = usePokemon();

  return (
    <aside className="lg:fixed lg:h-[calc(100vh-96px)] lg:w-1/5 overflow-y-scroll p-4 lg:border-r border-gray-200">
      <p className="text-2xl font-bold my-2">Generation Filtering:</p>
      <div className="grid grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2">
        {pokemonGens.map((gen) => (
          <button
            key={gen.name}
            onClick={() =>
              changeCurrentGen(currentGen === gen.name ? "" : gen.name)
            }
            className={`capitalize border py-2 rounded-full shadow-md hover:shadow-lg ${currentGen === gen.name ? "bg-black text-white" : "hover:bg-gray-100"} transition-shadow`}
          >
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
            className={`capitalize border py-2 rounded-full shadow-md hover:shadow-lg ${currentType === type.name ? "bg-black text-white" : "hover:bg-gray-100"} transition-shadow`}
          >
            {type.name}
          </button>
        ))}
      </div>
    </aside>
  );
};
export default Sidebar;
