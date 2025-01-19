import { useNavigate } from "react-router";

import { usePokemonGens } from "../hooks/pokemon/usePokemonGens.ts";
import { usePokemonTypes } from "../hooks/pokemon/usePokemonTypes.ts";
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
    <aside className="p-4 lg:fixed lg:h-[calc(100vh-96px)] lg:w-1/5 lg:overflow-y-scroll lg:border-r lg:border-slate-400 dark:lg:border-slate-600">
      <SidebarSearch />

      <SidebarFilter
        name="generation"
        values={pokemonGens?.map((gen) => gen.name.split("-")[1])}
        renderLabel={(item) => `Gen. ${item.toUpperCase()}`}
      />

      <SidebarFilter
        name="type"
        values={pokemonTypes?.map((type) => type.name)}
        renderLabel={(item) => item}
      />

      <Button
        onClick={() => void navigate("/pokemon")}
        disabled={!getUrl("generation") && !getUrl("type") && !getUrl("q")}
        isSelected={Boolean(
          getUrl("generation") ?? getUrl("type") ?? getUrl("q"),
        )}
        className="mb-4 w-full enabled:py-[9.5px] disabled:cursor-not-allowed disabled:opacity-25"
      >
        Clear Filtering
      </Button>
    </aside>
  );
};
export default Sidebar;
