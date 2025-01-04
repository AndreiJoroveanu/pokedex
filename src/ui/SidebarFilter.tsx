import { useUrl } from "../hooks/useUrl.ts";

import Button from "./Button.tsx";

interface SidebarFilterProps {
  name: string;
  values: string[];
  renderLabel: (name: string) => string;
}

const SidebarFilter = ({ name, values, renderLabel }: SidebarFilterProps) => {
  const { getUrl, setUrl } = useUrl();

  return (
    <>
      <h2 className="my-2 text-2xl font-bold capitalize">{name} Filtering:</h2>
      <div className="grid grid-cols-3 gap-2 lg:grid-cols-2 xl:grid-cols-3">
        {values?.map((item) => (
          <Button
            key={item}
            onClick={() => setUrl(name, item)}
            isSelected={getUrl(name) === item}
            className="capitalize"
          >
            {renderLabel(item)}
          </Button>
        ))}
      </div>
    </>
  );
};
export default SidebarFilter;
