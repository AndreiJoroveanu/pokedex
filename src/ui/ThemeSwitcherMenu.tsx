import { cloneElement, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";
import { spring } from "motion";

import { themeOptions } from "../data/themeOptions.tsx";
import useStore from "../store/useStore.ts";
import { capitalize } from "../utils/helpers.ts";

interface ThemeSwitcherMenuProps {
  actualTheme: "light" | "dark";
  onClose: () => void;
}

const menuVariants = {
  hidden: {
    y: -50,
    opacity: 0,
    transition: { type: spring, bounce: 0, duration: 0.3 },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      type: spring,
      bounce: 0,
      duration: 0.3,
    },
  },
};

const optionVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: spring, bounce: 0.5, duration: 0.3 },
  },
};

const ThemeSwitcherMenu = ({
  actualTheme,
  onClose,
}: ThemeSwitcherMenuProps) => {
  const theme = useStore((state) => state.theme);
  const changeTheme = useStore((state) => state.changeTheme);

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
      className="fixed right-0 top-24 rounded-b-lg border-x border-b border-slate-400 bg-slate-100/80 py-2 shadow-lg backdrop-blur-md sm:right-24 dark:border-slate-600 dark:bg-slate-800/80"
    >
      <motion.div variants={optionVariants} className="mx-6 my-2 space-y-1">
        <h2 className="mr-6 text-lg font-semibold">Select an App Theme</h2>

        <p className="text-sm text-slate-600 dark:text-slate-400">
          Current theme: {capitalize(theme)}
          {theme === "system" && ` (${capitalize(actualTheme)})`}
        </p>
      </motion.div>

      {themeOptions.map(({ theme, icon }) => (
        <motion.button
          key={theme}
          onClick={() => void changeTheme(theme)}
          variants={optionVariants}
          className="flex w-full items-center gap-2 px-6 py-3 font-semibold capitalize hover:bg-slate-700 hover:bg-opacity-10 dark:hover:bg-slate-300 dark:hover:bg-opacity-10"
        >
          {cloneElement(icon, { size: 20 })} {theme}
        </motion.button>
      ))}
    </motion.div>,
    document.getElementById("app-layout")!,
  );
};
export default ThemeSwitcherMenu;
