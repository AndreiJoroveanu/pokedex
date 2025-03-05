import useAppStore from "@/store/useAppStore.ts";
import { pokemonTypes } from "@/data/pokemonTypes.ts";

import SidebarFilter from "@/ui/sidebar/SidebarFilter.tsx";

const SidebarTypeFilter = () => {
  const isTypeFilterOpen = useAppStore((state) => state.isTypeFilterOpen);
  const toggleTypeFilterOpen = useAppStore(
    (state) => state.toggleTypeFilterOpen,
  );

  return (
    <SidebarFilter
      name="type"
      values={Object.entries(pokemonTypes).map(([value, { label }]) => ({
        value,
        label,
      }))}
      isOpen={isTypeFilterOpen}
      toggleOpen={toggleTypeFilterOpen}
    />
  );
};
export default SidebarTypeFilter;
