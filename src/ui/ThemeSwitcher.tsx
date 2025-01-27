import { cloneElement, MouseEvent, useState } from "react";
import { AnimatePresence } from "motion/react";

import useAppStore from "../store/useAppStore.ts";
import { themeOptions } from "../data/themeOptions.tsx";

import ThemeSwitcherMenu from "./ThemeSwitcherMenu.tsx";

const ThemeSwitcher = () => {
  const actualTheme = useAppStore((state) => state.actualTheme);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuIcon = themeOptions?.find(
    (item) => item.theme === actualTheme,
  )?.icon;

  const handleOpen = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen((open) => !open);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="cursor-pointer rounded-sm p-2 transition-all hover:bg-slate-700/10 dark:hover:bg-slate-300/10"
      >
        {menuIcon && cloneElement(menuIcon, { size: 24 })}
      </button>

      <AnimatePresence>
        {isOpen && (
          <ThemeSwitcherMenu
            actualTheme={actualTheme}
            onClose={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};
export default ThemeSwitcher;
