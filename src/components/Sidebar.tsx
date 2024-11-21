import { usePokemon } from "../hooks/usePokemon.ts";

const Sidebar = () => {
  const { currentType, changeCurrentType, pokemonTypes } = usePokemon();

  return (
    <div className="p-4">
      <p className="text-2xl font-bold mb-2">Type Filtering:</p>
      <div className="grid grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2">
        {pokemonTypes.map((type) => (
          <button
            key={type.name}
            onClick={() =>
              changeCurrentType(currentType === type.name ? "" : type.name)
            }
            className={`capitalize border px-4 py-2 rounded-full shadow-md hover:shadow-lg ${currentType === type.name ? "bg-black text-white" : "hover:bg-gray-100"} transition-shadow`}
          >
            {type.name}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
