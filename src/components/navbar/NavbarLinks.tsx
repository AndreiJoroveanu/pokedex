import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import { motion } from "motion/react";

import useAppStore from "@/store/useAppStore.ts";
import { resetScroll } from "@/hooks/useScrollRestoration.ts";

const NAV_LINKS = [
  { title: "Pokémon", path: "/pokedex/pokemon" },
  { title: "Moves", path: "/pokedex/moves" },
];

const NavbarLinks = () => {
  const resetSidebarPanels = useAppStore((state) => state.resetSidebarPanels);
  const location = useLocation();

  // Track the hovered link if there is one
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);

  // Track the active route with a delayed effect
  const [activeLink, setActiveLink] = useState<string>(location.pathname);
  useEffect(() => setActiveLink(() => location.pathname), [location.pathname]);

  return NAV_LINKS.map(({ title, path }, index) => (
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
  ));
};
export default NavbarLinks;
