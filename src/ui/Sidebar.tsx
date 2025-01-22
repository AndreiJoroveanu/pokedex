import { useNavigate } from "react-router";

import useStore from "../store/useStore.ts";
import { useUrl } from "../hooks/useUrl.ts";
import { pokemonGens } from "../data/pokemonGens.ts";
import { pokemonTypes } from "../data/pokemonTypes.ts";

import SidebarSearch from "./SidebarSearch.tsx";
import SidebarFilter from "./SidebarFilter.tsx";
import Button from "./Button.tsx";

const Sidebar = () => {
  const isGenFilterOpen = useStore((state) => state.isGenFilterOpen);
  const toggleGenFilterOpen = useStore((state) => state.toggleGenFilterOpen);
  const isTypeFilterOpen = useStore((state) => state.isTypeFilterOpen);
  const toggleTypeFilterOpen = useStore((state) => state.toggleTypeFilterOpen);

  const navigate = useNavigate();
  const { getUrl } = useUrl();

  return (
    <aside className="p-4 lg:fixed lg:h-[calc(100vh-96px)] lg:w-1/5 lg:overflow-y-scroll lg:border-r lg:border-slate-400 dark:lg:border-slate-600">
      <SidebarSearch />

      <SidebarFilter
        name="generation"
        values={pokemonGens?.map((gen) => gen.name.split("-")[1])}
        renderLabel={(item) => `Gen. ${item.toUpperCase()}`}
        isOpen={isGenFilterOpen}
        toggleOpen={toggleGenFilterOpen}
      />

      <SidebarFilter
        name="type"
        values={pokemonTypes?.map((type) => type.name)}
        renderLabel={(item) => item}
        isOpen={isTypeFilterOpen}
        toggleOpen={toggleTypeFilterOpen}
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
