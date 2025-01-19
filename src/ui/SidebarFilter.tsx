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
        layout
        className="my-2 bg-slate-400/30 p-[2px] shadow-md"
        style={{ borderRadius: 12 }}
      >
        <motion.div
          layout
          className="overflow-hidden bg-slate-50 dark:bg-slate-900"
          style={{ borderRadius: 10 }}
        >
          <motion.h2
            onClick={() => setIsOpen((isOpen) => !isOpen)}
            layout="position"
            className="cursor-pointer border-b-2 border-b-slate-400/30 p-2 text-xl font-bold capitalize"
          >
            {name} Filtering
          </motion.h2>

          {isOpen && (
            <motion.div
              layout="size"
              // animate={{ opacity: 1 }}
              // transition={{ delay: 0.3 }}
              // initial={{ opacity: 0 }}
              className="m-2 grid grid-cols-3 gap-2 lg:grid-cols-2 xl:grid-cols-3"
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
      </motion.div>
    </>
  );
};
export default SidebarFilter;
