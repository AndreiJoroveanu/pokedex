import { useUrlParams } from "../hooks/useUrlParams.ts";

import CollapsingPanel from "./CollapsingPanel.tsx";
import Button from "./Button.tsx";

interface FilterProps {
  name: string;
  values?: { value: string; label: string }[];
  isOpen: boolean;
  toggleOpen: () => void;
}

const SidebarFilter = ({ name, values, isOpen, toggleOpen }: FilterProps) => {
  const { getUrlParam, setUrlParam } = useUrlParams();

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
          style={getUrlParam(name) === value ? "indigo" : "normal"}
          className="capitalize"
        >
          {label}
        </Button>
      ))}
    </CollapsingPanel>
  );
};
export default SidebarFilter;
