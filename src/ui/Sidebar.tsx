import { useNavigate } from "react-router";

import useAppStore from "../store/useAppStore.ts";
import { useUrlParams } from "../hooks/useUrlParams.ts";
import { pokemonGens } from "../data/pokemonGens.ts";
import { pokemonTypes } from "../data/pokemonTypes.ts";
import { useStarredPokemon } from "../hooks/useStarredPokemon.ts";

import SidebarSearch from "./SidebarSearch.tsx";
import SidebarFilter from "./SidebarFilter.tsx";
import Button from "./Button.tsx";

const Sidebar = () => {
  const isGenFilterOpen = useAppStore((state) => state.isGenFilterOpen);
  const toggleGenFilterOpen = useAppStore((state) => state.toggleGenFilterOpen);
  const isTypeFilterOpen = useAppStore((state) => state.isTypeFilterOpen);
  const toggleTypeFilterOpen = useAppStore(
    (state) => state.toggleTypeFilterOpen,
  );

  const navigate = useNavigate();

  const { getUrlParam, setUrlParam } = useUrlParams();
  const isClearButtonDisabled =
    !getUrlParam("generation") &&
    !getUrlParam("type") &&
    !getUrlParam("onlyStarred") &&
    !getUrlParam("q");

  const { length } = useStarredPokemon();

  return (
    <aside className="p-4 max-lg:pb-0 lg:fixed lg:h-[calc(100vh-96px)] lg:w-1/5 lg:overflow-y-scroll lg:border-r lg:border-slate-400 dark:lg:border-slate-600">
      <SidebarSearch />

      <SidebarFilter
        name="generation"
        values={pokemonGens}
        isOpen={isGenFilterOpen}
        toggleOpen={toggleGenFilterOpen}
      />

      <SidebarFilter
        name="type"
        values={pokemonTypes}
        isOpen={isTypeFilterOpen}
        toggleOpen={toggleTypeFilterOpen}
      />

      <Button
        onClick={() => setUrlParam("onlyStarred", "true")}
        style={getUrlParam("onlyStarred") ? "gold" : "normal"}
        className="mb-4 w-full"
      >
        Show{getUrlParam("onlyStarred") ? `ing ${length}` : " only"} starred
        Pokémon
      </Button>

      <Button
        onClick={() => void navigate("/pokedex/pokemon")}
        disabled={isClearButtonDisabled}
        style={!isClearButtonDisabled ? "indigo" : "normal"}
        className="w-full disabled:cursor-not-allowed disabled:opacity-25 lg:mb-4"
      >
        Clear Filtering
      </Button>
    </aside>
  );
};
export default Sidebar;
