import { MouseEvent, useState } from "react";
import { AnimatePresence } from "motion/react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

import useAppStore from "@/store/useAppStore.ts";
import { themeOptions } from "@/data/themeOptions.tsx";

import ThemeSwitcherMenu from "@/components/theme-switcher/ThemeSwitcherMenu.tsx";

const ThemeSwitcherButton = () => {
  const actualTheme = useAppStore((state) => state.actualTheme);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const MenuIcon = themeOptions.find(
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
        className="cursor-pointer rounded-sm p-2 transition-[background-color] hover:bg-slate-700/10 max-sm:absolute max-sm:right-4 dark:hover:bg-slate-300/10"
      >
        {MenuIcon ? (
          <MenuIcon className="size-6" />
        ) : (
          <QuestionMarkCircleIcon className="size-6" />
        )}
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
export default ThemeSwitcherButton;
