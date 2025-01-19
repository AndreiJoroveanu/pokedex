import { useState } from "react";
import { motion } from "motion/react";

import { useUrl } from "../hooks/useUrl.ts";

import Button from "./Button.tsx";

interface SidebarFilterProps {
  name: string;
  values?: string[];
  renderLabel: (name: string) => string;
}

const SidebarFilter = ({ name, values, renderLabel }: SidebarFilterProps) => {
  const { getUrl, setUrl } = useUrl();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        layout
        className="cursor-pointer overflow-hidden rounded-xl border-2 border-slate-400/30 p-2 shadow-md"
      >
        <motion.h2
          layout="position"
          className="mb-2 text-2xl font-bold capitalize"
        >
          {name} Filtering:
        </motion.h2>

        {isOpen && (
          <motion.div
            layout="position"
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            initial={{ opacity: 0 }}
            className="grid grid-cols-3 gap-2 lg:grid-cols-2 xl:grid-cols-3"
          >
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
          </motion.div>
        )}
      </motion.div>
    </>
  );
};
export default SidebarFilter;
