import { type ReactNode, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { spring } from "motion";
import useMeasure from "react-use-measure";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";

interface PanelProps {
  children: ReactNode;
  label: string;
  initialIsOpen?: boolean;
  toggleOpen?: () => void;
  className?: string;
}

const containerVariants = {
  height: ({ isOpen, height }: { isOpen: boolean; height: number }) => ({
    height: isOpen ? height || "auto" : 0,
  }),
};

const CollapsingPanel = ({
  children,
  label,
  initialIsOpen,
  toggleOpen,
  className = "",
}: PanelProps) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen ?? false);
  const [measureRef, { height }] = useMeasure();

  const handleClick = () => {
    setIsOpen((prev) => !prev);
    if (toggleOpen) toggleOpen();
  };

  return (
    <div
      className={`my-4 overflow-hidden rounded-xl bg-slate-200 shadow-md transition-[background-color_shadow] dark:bg-slate-800 dark:shadow-none ${isOpen ? "" : "hover:shadow-lg dark:hover:shadow-none"}`.trim()}
    >
      <div
        onClick={handleClick}
        className="group relative flex cursor-pointer px-3 py-2 transition-[background-color] hover:bg-slate-300 dark:hover:bg-slate-700"
      >
        <h2 className="text-lg font-bold capitalize">{label}</h2>

        <motion.div
          initial={{ rotate: isOpen ? 180 : 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: spring, bounce: 0, duration: 0.5 }}
          className="absolute right-2 rounded-full border-2 border-transparent p-1 transition-[border-color] group-hover:border-slate-500/30"
        >
          <ChevronDoubleDownIcon className="size-4" />
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
              className={`border-t-2 border-t-slate-300 transition-[border-color] dark:border-t-slate-700 ${className}`.trim()}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
export default CollapsingPanel;
