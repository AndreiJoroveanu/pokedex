import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

const NAV_LINKS = [
  { title: "Pokémon", path: "/pokemon" },
  { title: "Moves", path: "/moves" },
] as const;

const NavbarLinks = () => {
  // Track the hovered link if there is one
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);

  return NAV_LINKS.map(({ title, path }, index) => (
    <Link
      key={title}
      to={path}
      onMouseEnter={() => setHoveredLink(index)}
      onMouseLeave={() => setHoveredLink(null)}
      className="group/link relative -mt-1 rounded-full px-2 py-2 font-semibold transition-[color] hover:text-blue-600 xs:px-4 dark:hover:text-blue-400"
      inactiveProps={{ className: "text-base-600 dark:text-base-400" }}
      activeProps={{ className: "text-base-800 dark:text-base-200" }}
    >
      {({ isActive }) => (
        <>
          {/* Underline the hovered link, if there is none then underline the active route */}
          {(hoveredLink !== null ? hoveredLink === index : isActive) && (
            <motion.div
              layoutId="link-underline"
              style={{ originY: "0px" }}
              className="absolute top-full left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-base-800 transition-[background-color] group-hover/link:bg-blue-600 dark:bg-base-200 dark:group-hover/link:bg-blue-400"
            />
          )}

          {title}
        </>
      )}
    </Link>
  ));
};
export default NavbarLinks;
