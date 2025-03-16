import { useShallow } from "zustand/react/shallow";

import useAppStore from "@/store/useAppStore.ts";
import { pokemonGens } from "@/data/pokemonGens.ts";

import SidebarFilter from "@/components/sidebar/SidebarFilter.tsx";

const SidebarGenerationFilter = () => {
  const [isGenPanelOpen, toggleGenPanelOpen] = useAppStore(
    useShallow((state) => [state.isGenPanelOpen, state.toggleGenPanelOpen]),
  );

  return (
    <SidebarFilter
      name="generation"
      values={pokemonGens}
      isOpen={isGenPanelOpen}
      toggleOpen={toggleGenPanelOpen}
    />
  );
};
export default SidebarGenerationFilter;
