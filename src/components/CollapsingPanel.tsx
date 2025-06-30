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
      className={`${
        !isOpen ? "hover:shadow-lg dark:hover:shadow-none" : ""
      } my-4 rounded-xl bg-base-200 shadow-md transition-[background-color_shadow] dark:bg-base-800 dark:shadow-none`.trim()}
    >
      <button
        onClick={handleClick}
        className="group relative flex w-full cursor-pointer rounded-xl px-3 py-2 transition-[background-color] hover:bg-base-300 dark:hover:bg-base-700"
      >
        <h2 className="text-lg font-bold capitalize">{label}</h2>

        <motion.div
          initial={{ rotate: isOpen ? 180 : 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: spring, bounce: 0, duration: 0.5 }}
          className="absolute right-2 rounded-full border-2 border-transparent p-1 transition-[border-color] group-hover:border-base-500/30"
        >
          <ChevronDoubleDownIcon className="size-4" />
        </motion.div>
      </button>

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
              className={className}
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
