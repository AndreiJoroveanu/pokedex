import { useNavigate } from "react-router";

import { usePokemonGens, usePokemonTypes } from "../hooks/usePokemon.ts";
import { useUrl } from "../hooks/useUrl.ts";

import SidebarSearch from "./SidebarSearch.tsx";
import SidebarFilter from "./SidebarFilter.tsx";
import Button from "./Button.tsx";

const Sidebar = () => {
  const navigate = useNavigate();

  const { data: pokemonGens } = usePokemonGens();
  const { data: pokemonTypes } = usePokemonTypes();
  const { getUrl } = useUrl();

  return (
    <aside className="mt-24 overflow-y-scroll border-gray-200 p-4 lg:fixed lg:h-[calc(100vh-96px)] lg:w-1/5 lg:border-r">
      <SidebarSearch />

      {pokemonGens && (
        <SidebarFilter
          name="generation"
          values={pokemonGens.map((gen) => gen.name.split("-")[1])}
          renderLabel={(item) => `Gen. ${item.toUpperCase()}`}
        />
      )}

      {pokemonTypes && (
        <SidebarFilter
          name="type"
          values={pokemonTypes.map((type) => type.name)}
          renderLabel={(item) => item}
        />
      )}

      <Button
        onClick={() => navigate("/pokemon")}
        disabled={!getUrl("generation") && !getUrl("type") && !getUrl("q")}
        isSelected={true}
        className="my-4 w-full disabled:cursor-not-allowed disabled:opacity-25"
      >
        Clear Filtering
      </Button>
    </aside>
  );
};
export default Sidebar;
