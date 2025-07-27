import { useAllItemsParam } from "@/hooks/useAllItemsParam.ts";
import { pokemonGens } from "@/data/pokemonGens.ts";

import SidebarFilter from "@/components/sidebar/SidebarFilter.tsx";

const SidebarGenerationFilter = () => {
  const [isOpen, setIsOpen] = useAllItemsParam("isGenPanelOpen");

  return (
    <SidebarFilter
      name="generation"
      values={pokemonGens}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
  );
};
export default SidebarGenerationFilter;
