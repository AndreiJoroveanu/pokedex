import { useAllItemsParam } from "@/hooks/useAllItemsParam.ts";

import Accordion from "@/components/Accordion.tsx";
import Button from "@/components/button/Button.tsx";

interface FilterProps {
  name: "generation" | "type";
  values?: { value: string; label: string }[];
  isOpen: boolean | undefined;
  toggleOpen: () => void;
}

const SidebarFilter = ({ name, values, isOpen, toggleOpen }: FilterProps) => {
  const [currentValue, setCurrentValue] = useAllItemsParam(name);

  return (
    <Accordion
      label={`${name} Filtering`}
      initialIsOpen={isOpen}
      toggleOpen={toggleOpen}
      className="grid grid-cols-3 gap-2 p-2 lg:grid-cols-2 xl:grid-cols-3"
    >
      {values?.map(({ value, label }) => (
        <Button
          key={value}
          onClick={() =>
            setCurrentValue(currentValue === value ? undefined : value)
          }
          variant={currentValue === value ? "indigo" : "normal"}
          className="capitalize"
        >
          {label}
        </Button>
      ))}
    </Accordion>
  );
};
export default SidebarFilter;
