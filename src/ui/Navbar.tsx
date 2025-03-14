import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { motion } from "motion/react";

import useAppStore from "@/store/useAppStore.ts";
import { resetScroll } from "@/hooks/useScrollRestoration.ts";
import pokeballLogo from "/pokéball.svg";

import ThemeSwitcher from "@/ui/ThemeSwitcher.tsx";

const NAV_LINKS = [
  { title: "Pokémon", path: "/pokedex/pokemon" },
  { title: "Moves", path: "/pokedex/moves" },
];

const Navbar = () => {
  const resetSidebarPanels = useAppStore((state) => state.resetSidebarPanels);
  const location = useLocation();

  // Track the hovered link if there is one
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);

  // Track the active route with a delayed effect
  const [activeLink, setActiveLink] = useState<string>(location.pathname);
  useEffect(() => setActiveLink(() => location.pathname), [location.pathname]);

  return (
    <nav className="fixed top-0 z-50 flex h-18 w-full items-center justify-between border-b border-slate-400 bg-slate-100/80 px-2 shadow-lg backdrop-blur-md transition-colors sm:h-24 sm:px-24 dark:border-slate-600 dark:bg-slate-900/80 dark:shadow-none">
      {/* Logo linking to the home page */}
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

      {/* Navigation links */}
      <div className="flex items-center sm:gap-2">
        {NAV_LINKS.map(({ title, path }, index) => (
          <NavLink
            key={title}
            to={path}
            onClick={() => {
              resetSidebarPanels();
              resetScroll();
            }}
            onMouseEnter={() => setHoveredLink(index)}
            onMouseLeave={() => setHoveredLink(null)}
            className={({ isActive }) =>
              `xs:px-4 group/link relative px-2 py-2 font-semibold ${isActive ? "text-slate-800 dark:text-slate-200" : "text-slate-500"} transition-all hover:text-blue-600 dark:hover:text-blue-400`
            }
          >
            {/* Highlight the hovered link, if there is none then highlight the active route */}
            {(hoveredLink !== null
              ? hoveredLink === index
              : activeLink.includes(path)) && (
              <motion.div
                layoutId="link"
                className="link:bg-slate-200 absolute top-full left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-slate-800 transition-[background-color] group-hover/link:bg-blue-600 dark:bg-slate-200 dark:group-hover/link:text-blue-400"
              />
            )}

            {title}
          </NavLink>
        ))}

        <ThemeSwitcher />
      </div>
    </nav>
  );
};
export default Navbar;
