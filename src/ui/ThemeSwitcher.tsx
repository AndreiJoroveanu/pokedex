import {
  cloneElement,
  JSXElementConstructor,
  MouseEvent,
  ReactElement,
  useEffect,
  useState,
} from "react";

import {
  HiOutlineCog6Tooth,
  HiOutlineMoon,
  HiOutlineSun,
} from "react-icons/hi2";

import { useDarkMode } from "../hooks/useDarkMode.ts";

interface ThemeSwitcherMenuProps {
  onSelect: (theme: string) => void;
  onClose: () => void;
}

const themeOptions: {
  theme: string;
  icon: ReactElement<{ size: number }, JSXElementConstructor<string>>;
}[] = [
  { theme: "light", icon: <HiOutlineSun key="light-icon" /> },
  { theme: "dark", icon: <HiOutlineMoon key="dark-icon" /> },
  { theme: "system", icon: <HiOutlineCog6Tooth key="system-icon" /> },
];

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

      {isOpen && (
        <ThemeSwitcherMenu
          onSelect={changeTheme}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

const ThemeSwitcherMenu = ({ onSelect, onClose }: ThemeSwitcherMenuProps) => {
  useEffect(() => {
    const handleClick = () => onClose();

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [onClose]);

  return (
    <div className="absolute right-0 top-12 flex flex-col items-start rounded-lg border border-slate-400 bg-slate-100/80 shadow-lg backdrop-blur-md dark:border-slate-600 dark:bg-slate-800/80">
      {themeOptions.map(({ theme, icon }) => (
        <button
          key={theme}
          onClick={() => void onSelect(theme)}
          className="flex w-full items-center gap-2 px-6 py-3 font-semibold capitalize hover:bg-slate-700 hover:bg-opacity-10 dark:hover:bg-slate-300 dark:hover:bg-opacity-10"
        >
          {cloneElement(icon, { size: 20 })} {theme}
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
