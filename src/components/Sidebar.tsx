import { usePokemon } from "../hooks/usePokemon.ts";

const Sidebar = () => {
  const { currentType, setCurrentType, pokemonTypes } = usePokemon();

  return (
    // (h-screen is just to force overscroll, isn't needed)
    <div className="p-4 h-screen">
      <p>Sidebar (T.B.D.)</p>
      <div className="grid grid-cols-3 gap-2">
        {pokemonTypes.map((type) => (
          <button
            key={type.name}
            onClick={() =>
              setCurrentType(currentType === type.name ? "" : type.name)
            }
            className={`capitalize border px-4 py-2 rounded-full shadow-md hover:shadow-lg ${type.name === currentType ? "bg-black text-white" : "hover:bg-gray-100"} hover:shadow-lg transition-shadow`}
          >
            {type.name}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
