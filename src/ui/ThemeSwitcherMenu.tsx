import { cloneElement, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";
import { easeOut } from "motion";

import { themeOptions } from "../utils/themeOptions.tsx";

interface ThemeSwitcherMenuProps {
  onSelect: (theme: string) => void;
  onClose: () => void;
}

const menuVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const ThemeSwitcherMenu = ({ onSelect, onClose }: ThemeSwitcherMenuProps) => {
  useEffect(() => {
    const handleClick = () => onClose();

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [onClose]);

  return createPortal(
    <motion.div
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.2, ease: easeOut }}
      className="fixed right-0 top-24 rounded-b-lg border-x border-b border-slate-400 bg-slate-100/80 shadow-lg backdrop-blur-md sm:right-24 dark:border-slate-600 dark:bg-slate-800/80"
    >
      {themeOptions.map(({ theme, icon }) => (
        <button
          key={theme}
          onClick={() => void onSelect(theme)}
          className="flex w-full items-center gap-2 px-6 py-3 font-semibold capitalize hover:bg-slate-700 hover:bg-opacity-10 dark:hover:bg-slate-300 dark:hover:bg-opacity-10"
        >
          {cloneElement(icon, { size: 20 })} {theme}
        </button>
      ))}
    </motion.div>,
    document.getElementById("app-layout")!,
  );
};
export default ThemeSwitcherMenu;
