import { useAllItemsParam } from "@/hooks/useAllItemsParam.ts";
import { pokemonTypes } from "@/data/pokemonTypes.ts";

import SidebarFilter from "@/components/sidebar/SidebarFilter.tsx";

const SidebarTypeFilter = () => {
  const [isOpen, setIsOpen] = useAllItemsParam("isTypePanelOpen");

  return (
    <SidebarFilter
      name="type"
      values={Object.entries(pokemonTypes).map(([value, { label }]) => ({
        value,
        label,
      }))}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
  );
};
export default SidebarTypeFilter;
