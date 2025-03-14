import { Link, NavLink } from "react-router";

import useAppStore from "@/store/useAppStore.ts";
import { resetScroll } from "@/hooks/useScrollRestoration.ts";
import pokeballLogo from "/pokéball.svg";

import ThemeSwitcher from "@/ui/ThemeSwitcher.tsx";

const Navbar = () => {
  const resetSidebarPanels = useAppStore((state) => state.resetSidebarPanels);

  return (
    <nav className="fixed top-0 z-50 flex h-18 w-full items-center justify-between border-b border-slate-400 bg-slate-100/80 px-2 shadow-lg backdrop-blur-md transition-colors sm:h-24 sm:px-24 dark:border-slate-600 dark:bg-slate-900/80 dark:shadow-none">
      <Link to={"/pokedex/pokemon"}>
        <h1 className="flex items-end rounded-sm px-4 py-2 text-3xl font-bold transition-all hover:bg-slate-700/10 dark:hover:bg-slate-300/10">
          P
          <img
            src={pokeballLogo}
            alt={`Pokéball icon to replace the "o" letter in the logo`}
            className="mb-1.5 h-5 w-5 text-transparent dark:rotate-180 dark:opacity-80 dark:grayscale dark:invert"
          />
          kédex
        </h1>
      </Link>

      <div className="flex items-center sm:gap-2">
        {[
          // Add the title and the url to add a new link in the navbar
          ["Pokémon", "/pokedex/pokemon"],
          ["Moves", "/pokedex/moves"],
        ].map(([title, url]) => (
          <NavLink
            key={title}
            to={url}
            onClick={() => {
              resetSidebarPanels();
              resetScroll();
            }}
            className={({ isActive }) =>
              `xs:px-4 ${isActive ? "text-slate-800 after:bg-slate-800 dark:text-slate-200 dark:after:bg-slate-200" : "text-slate-500 after:bg-transparent"} relative mt-1 px-2 py-2 font-semibold transition-all after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-6 after:-translate-x-1/2 after:rounded-full after:transition-colors hover:text-blue-600 hover:after:bg-blue-600 dark:hover:text-blue-400 dark:hover:after:bg-blue-400`
            }
          >
            {title}
          </NavLink>
        ))}

        <ThemeSwitcher />
      </div>
    </nav>
  );
};
export default Navbar;
