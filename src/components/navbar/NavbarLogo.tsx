import { Link } from "@tanstack/react-router";

import useSettingsStore from "@/store/useSettingsStore.ts";
import pokeballLightLogo from "@/assets/pokéball.svg";
import pokeballDarkLogo from "@/assets/pokéball-dark.svg";

const NavbarLogo = () => {
  const theme = useSettingsStore((state) => state.effectiveTheme);

  return (
    <div className="pointer-events-auto z-20 rounded-full sm:bg-base-50/80 sm:backdrop-blur-md sm:transition-[background-color] dark:sm:bg-base-950/80">
      <Link
        to="/pokemon"
        className="flex items-end rounded-full px-4 py-2.5 text-3xl font-bold transition-[background-color] hover:bg-base-500/25 dark:hover:bg-base-400/25"
      >
        P
        <img
          src={theme === "dark" ? pokeballDarkLogo : pokeballLightLogo}
          alt={`Pokéball icon to replace the "o" letter in the logo`}
          className="mb-1.5 size-5 text-transparent"
        />
        kédex
      </Link>
    </div>
  );
};
export default NavbarLogo;
