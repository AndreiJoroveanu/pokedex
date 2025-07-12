import { Link } from "@tanstack/react-router";

import pokeballLogo from "/pokéball.svg";

interface LogoProps {
  isSettingsMenuOpen: boolean;
}

const NavbarLogo = ({ isSettingsMenuOpen }: LogoProps) => (
  <div
    // Background is displayed only when the settings menu isn't open
    className={`${
      !isSettingsMenuOpen
        ? "sm:bg-base-100/80 sm:backdrop-blur-md dark:sm:bg-base-900/80"
        : ""
    } pointer-events-auto z-20 rounded-full sm:transition-[background-color]`}
  >
    <Link to="/pokemon">
      <h1 className="flex items-end rounded-full px-4 py-2.5 text-3xl font-bold transition-[background-color] hover:bg-base-700/10 dark:hover:bg-base-300/10">
        P
        <img
          src={pokeballLogo}
          alt={`Pokéball icon to replace the "o" letter in the logo`}
          className="mb-1.5 h-5 w-5 text-transparent dark:rotate-180 dark:opacity-80 dark:grayscale dark:invert"
        />
        kédex
      </h1>
    </Link>
  </div>
);
export default NavbarLogo;
