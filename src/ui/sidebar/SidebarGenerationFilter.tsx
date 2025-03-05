import useAppStore from "@/store/useAppStore.ts";
import { pokemonGens } from "@/data/pokemonGens.ts";

import SidebarFilter from "@/ui/sidebar/SidebarFilter.tsx";

const SidebarGenerationFilter = () => {
  const isGenFilterOpen = useAppStore((state) => state.isGenFilterOpen);
  const toggleGenFilterOpen = useAppStore((state) => state.toggleGenFilterOpen);

  return (
    <SidebarFilter
      name="generation"
      values={pokemonGens}
      isOpen={isGenFilterOpen}
      toggleOpen={toggleGenFilterOpen}
    />
  );
};
export default SidebarGenerationFilter;
