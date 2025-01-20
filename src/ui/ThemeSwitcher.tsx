import { cloneElement, MouseEvent, useState } from "react";
import { AnimatePresence } from "motion/react";

import { useDarkMode } from "../hooks/useDarkMode.ts";
import { themeOptions } from "../data/themeOptions.tsx";

import ThemeSwitcherMenu from "./ThemeSwitcherMenu.tsx";

const ThemeSwitcher = () => {
  const { actualTheme, changeTheme } = useDarkMode();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuIcon = themeOptions?.find(
    (item) => item.theme === actualTheme,
  )?.icon;

  const handleOpen = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen((open) => !open);
  };

  return (
    <div className="relative">
      <button
        onClick={handleOpen}
        className="cursor-pointer rounded p-2 transition-all hover:bg-slate-700 hover:bg-opacity-10 dark:hover:bg-slate-300 dark:hover:bg-opacity-10"
      >
        {menuIcon && cloneElement(menuIcon, { size: 24 })}
      </button>

      <AnimatePresence>
        {isOpen && (
          <ThemeSwitcherMenu
            onSelect={changeTheme}
            onClose={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
export default ThemeSwitcher;
