import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useShallow } from "zustand/react/shallow";
import { motion } from "motion/react";

import useAppStore from "@/store/useAppStore.ts";
import { useOutsideClick } from "@/hooks/useOutsideClick.ts";
import { themeOptions } from "@/data/themeOptions.tsx";
import { Theme } from "@/utils/themeUtils.ts";

interface MenuProps {
  actualTheme: "light" | "dark";
  onClose: () => void;
}

const menuVariants = {
  hidden: {
    x: "var(--x-from-container, 0px)", // sm-
    y: "var(--y-from-container, 0px)", // sm+
    opacity: 0,
    transition: { type: "spring", bounce: 0, duration: 0.3 },
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};

const optionVariants = {
  hidden: {
    x: "var(--x-from-item, 0px)", // sm-
    y: "var(--y-from-item, 0px)", // sm+
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { type: "spring", bounce: 0.5, duration: 0.3 },
  },
};

const ThemeSwitcherMenu = ({ actualTheme, onClose }: MenuProps) => {
  const [theme, changeTheme] = useAppStore(
    useShallow((state) => [state.theme, state.changeTheme]),
  );

  // A custom hook to detect clicks outside the menu
  const ref = useOutsideClick(onClose);

  // Close the menu when the user is scrolling
  useEffect(() => {
    window.addEventListener("scroll", onClose);
    return () => window.removeEventListener("scroll", onClose);
  }, [onClose]);

  const handleClick = (theme: Theme) => {
    changeTheme(theme);
    onClose();
  };

  return createPortal(
    <motion.div
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      ref={ref}
      className="fixed top-0 right-0 z-20 border-l border-slate-400 bg-slate-100/80 py-2 backdrop-blur-md max-sm:bottom-16 max-sm:[--x-from-container:50px] max-sm:[--x-from-item:20px] sm:top-24 sm:right-24 sm:rounded-b-lg sm:border-r sm:border-b sm:shadow-lg sm:[--y-from-container:-50px] sm:[--y-from-item:-20px] dark:border-slate-600 dark:bg-slate-900/80 dark:shadow-none"
    >
      <motion.div variants={optionVariants} className="mx-6 my-2 space-y-1">
        <h2 className="mr-6 text-lg font-semibold">Select an App Theme</h2>

        <p className="text-sm text-slate-600 capitalize dark:text-slate-400">
          Current Theme: {theme}
          {theme === "system" && ` (${actualTheme})`}
        </p>
      </motion.div>

      {themeOptions.map(({ theme, icon: Icon }) => (
        <motion.button
          key={theme}
          onClick={() => handleClick(theme)}
          variants={optionVariants}
          className="flex w-full cursor-pointer items-center gap-2 px-6 py-3 font-semibold capitalize hover:bg-slate-700/10 dark:hover:bg-slate-300/10"
        >
          <Icon className="size-5" /> {theme}
        </motion.button>
      ))}
    </motion.div>,
    document.getElementById("app-layout")!,
  );
};
export default ThemeSwitcherMenu;
