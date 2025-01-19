import { useState } from "react";
import { motion } from "motion/react";
import { spring } from "motion";
import { HiChevronDoubleDown } from "react-icons/hi2";
import useMeasure from "react-use-measure";

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

  // Using a custom hook to calculate the height of the content
  const [ref, { height }] = useMeasure();

  return (
    <div className="my-4 overflow-hidden rounded-xl border-2 border-slate-400/30 bg-slate-50 shadow transition-colors dark:bg-slate-900">
      <div
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="flex cursor-pointer items-center justify-between px-3 py-2 hover:bg-slate-400/10"
      >
        <h2 className="text-lg font-bold capitalize">{name} Filtering</h2>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: spring, bounce: 0, duration: 0.5 }}
        >
          <HiChevronDoubleDown />
        </motion.div>
      </div>

      <motion.div animate={{ height }} className="overflow-hidden">
        <div ref={ref}>
          {isOpen && (
            <div className="grid grid-cols-3 gap-2 border-t-2 border-t-slate-400/30 p-2 lg:grid-cols-2 xl:grid-cols-3">
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
          )}
        </div>
      </motion.div>
    </div>
  );
};
export default SidebarFilter;
