import { type ReactNode, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import useMeasure from "react-use-measure";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";

interface PanelProps {
  children: ReactNode;
  label: string;
  initialIsOpen?: boolean;
  toggleOpen?: () => void;
  className?: string;
}

const Accordion = ({
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
      } my-4 rounded-xl bg-base-100 shadow-md transition-[background-color_shadow] dark:bg-base-900 dark:shadow-none`.trimStart()}
    >
      <button
        onClick={handleClick}
        className="group flex w-full cursor-pointer items-center justify-between rounded-xl bg-base-200 p-2 pl-3 transition-[background-color] hover:bg-base-300 dark:bg-base-800 dark:hover:bg-base-700"
      >
        <h2 className="text-lg font-bold capitalize">{label}</h2>

        <div className="rounded-full p-1 transition-[background-color] group-hover:bg-base-500/20 dark:group-hover:bg-base-400/20">
          <ChevronDoubleDownIcon
            className={`${
              isOpen ? "rotate-180" : ""
            } size-5 transition-[rotate] duration-400`.trimStart()}
          />
        </div>
      </button>

      <motion.div
        animate={{ height: isOpen ? height || "auto" : 0 }}
        className="overflow-hidden"
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={measureRef}
              // Trick Motion into displaying the content while the accordion is closing
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
export default Accordion;
