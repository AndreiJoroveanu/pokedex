import { useUrl } from "../hooks/useUrl.ts";

import CollapsingPanel from "./CollapsingPanel.tsx";
import Button from "./Button.tsx";

interface FilterProps {
  name: string;
  values?: string[];
  renderLabel: (name: string) => string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const SidebarFilter = ({
  name,
  values,
  renderLabel,
  isOpen,
  toggleOpen,
}: FilterProps) => {
  const { getUrl, setUrl } = useUrl();

  return (
    <CollapsingPanel
      label={`${name} Filtering`}
      initialIsOpen={isOpen}
      toggleOpen={toggleOpen}
      className="grid grid-cols-3 gap-2 p-2 lg:grid-cols-2 xl:grid-cols-3"
    >
      {values?.map((item) => (
        <Button
          key={item}
          onClick={() => setUrl(name, item)}
          style={getUrl(name) === item ? "indigo" : "normal"}
          className="capitalize"
        >
          {renderLabel(item)}
        </Button>
      ))}
    </CollapsingPanel>
  );
};
export default SidebarFilter;
