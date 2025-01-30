import { AnimatePresence, motion } from "motion/react";
import { spring } from "motion";
import { HiChevronDoubleDown } from "react-icons/hi2";
import useMeasure from "react-use-measure";

import { useUrl } from "../hooks/useUrl.ts";

import Button from "./Button.tsx";

interface FilterProps {
  name: string;
  values?: string[];
  renderLabel: (name: string) => string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const containerVariants = {
  height: ({ isOpen, height }: { isOpen: boolean; height: number }) => ({
    height: isOpen ? height || "auto" : 0,
  }),
};

const SidebarFilter = ({
  name,
  values,
  renderLabel,
  isOpen,
  toggleOpen,
}: FilterProps) => {
  const { getUrl, setUrl } = useUrl();
  const [measureRef, { height }] = useMeasure();

  return (
    <div className="my-4 overflow-hidden rounded-xl border-2 border-slate-400/30 bg-slate-50 shadow-sm transition-colors dark:bg-slate-900">
      <div
        onClick={toggleOpen}
        className="flex cursor-pointer items-center justify-between px-3 py-2 hover:bg-slate-400/10"
      >
        <h2 className="text-lg font-bold capitalize">{name} Filtering</h2>

        <motion.div
          initial={{ rotate: isOpen ? 180 : 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: spring, bounce: 0, duration: 0.5 }}
        >
          <HiChevronDoubleDown />
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        custom={{ isOpen, height }}
        initial="height"
        animate="height"
        className="overflow-hidden"
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={measureRef}
              // This tricks Motion to still display this element while the container is closing
              exit={{ opacity: 2 }}
              className="grid grid-cols-3 gap-2 border-t-2 border-t-slate-400/30 p-2 lg:grid-cols-2 xl:grid-cols-3"
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
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
export default SidebarFilter;
