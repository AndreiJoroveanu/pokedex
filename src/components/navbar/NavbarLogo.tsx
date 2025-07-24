import { Link } from "@tanstack/react-router";

import pokeballLogo from "/pokéball.svg";

const NavbarLogo = () => (
  <div className="pointer-events-auto z-20 rounded-full sm:bg-base-50/80 sm:backdrop-blur-md sm:transition-[background-color] dark:sm:bg-base-950/80">
    <Link
      to="/pokemon"
      className="flex items-end rounded-full px-4 py-2.5 text-3xl font-bold transition-[background-color] hover:bg-base-500/25 dark:hover:bg-base-400/25"
    >
      P
      <img
        src={pokeballLogo}
        alt={`Pokéball icon to replace the "o" letter in the logo`}
        className="mb-1.5 h-5 w-5 text-transparent dark:rotate-180 dark:opacity-80 dark:grayscale dark:invert"
      />
      kédex
    </Link>
  </div>
);
export default NavbarLogo;
