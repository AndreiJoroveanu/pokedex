import { useShallow } from "zustand/react/shallow";

import useAppStore from "@/store/useAppStore.ts";
import { pokemonTypes } from "@/data/pokemonTypes.ts";

import SidebarFilter from "@/ui/sidebar/SidebarFilter.tsx";

const SidebarTypeFilter = () => {
  const [isTypePanelOpen, toggleTypePanelOpen] = useAppStore(
    useShallow((state) => [state.isTypePanelOpen, state.toggleTypePanelOpen]),
  );

  return (
    <SidebarFilter
      name="type"
      values={Object.entries(pokemonTypes).map(([value, { label }]) => ({
        value,
        label,
      }))}
      isOpen={isTypePanelOpen}
      toggleOpen={toggleTypePanelOpen}
    />
  );
};
export default SidebarTypeFilter;
