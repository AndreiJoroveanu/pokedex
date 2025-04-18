import { useAllItemsParams } from "@/hooks/useUrlParams.ts";

import CollapsingPanel from "@/components/CollapsingPanel.tsx";
import Button from "@/components/button/Button.tsx";

interface FilterProps {
  name: "generation" | "type";
  values?: { value: string; label: string }[];
  isOpen: boolean;
  toggleOpen: () => void;
}

const SidebarFilter = ({ name, values, isOpen, toggleOpen }: FilterProps) => {
  const { getUrlParam, setUrlParam } = useAllItemsParams();
  const currentValue = getUrlParam(name);

  return (
    <CollapsingPanel
      label={`${name} Filtering`}
      initialIsOpen={isOpen}
      toggleOpen={toggleOpen}
      className="grid grid-cols-3 gap-2 p-2 lg:grid-cols-2 xl:grid-cols-3"
    >
      {values?.map(({ value, label }) => (
        <Button
          key={value}
          onClick={() => setUrlParam(name, value)}
          style={currentValue === value ? "indigo" : "normal"}
          className="capitalize"
        >
          {label}
        </Button>
      ))}
    </CollapsingPanel>
  );
};
export default SidebarFilter;
