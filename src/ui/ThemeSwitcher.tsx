import {
  cloneElement,
  JSXElementConstructor,
  ReactElement,
  useEffect,
  useState,
} from "react";

import {
  HiOutlineCog6Tooth,
  HiOutlineMoon,
  HiOutlineSun,
} from "react-icons/hi2";

import { useLocalStorageState } from "../hooks/useLocalStorageState.ts";

const themeOptions: {
  theme: string;
  icon: ReactElement<{ size: number }, JSXElementConstructor<string>>;
}[] = [
  { theme: "light", icon: <HiOutlineSun key="light-icon" /> },
  { theme: "dark", icon: <HiOutlineMoon key="dark-icon" /> },
  { theme: "system", icon: <HiOutlineCog6Tooth key="system-icon" /> },
];

const ThemeSwitcher = () => {
  const [theme, setTheme] = useLocalStorageState<string>("system", "theme");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.className = "";
    document.documentElement.classList.add(theme.toString());
  }, [theme]);

  const menuIcon = themeOptions?.find((item) => item.theme === theme)?.icon;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((open) => !open)}
        className="cursor-pointer rounded p-2 transition-all hover:bg-slate-700 hover:bg-opacity-10 dark:hover:bg-slate-300 dark:hover:bg-opacity-10"
      >
        {menuIcon && cloneElement(menuIcon, { size: 24 })}
        {/* <HiBars3 size={24} /> */}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 flex flex-col items-start rounded-lg border border-slate-400 bg-slate-100/80 shadow-lg backdrop-blur-md dark:border-slate-600 dark:bg-slate-800/80">
          {themeOptions.map(({ theme, icon }) => (
            <button
              key={theme}
              onClick={() => void setTheme(theme)}
              className="flex w-full items-center gap-2 px-6 py-3 font-semibold capitalize hover:bg-slate-700 hover:bg-opacity-10 dark:hover:bg-slate-300 dark:hover:bg-opacity-10"
            >
              {cloneElement(icon, { size: 20 })} {theme}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
export default ThemeSwitcher;
