import { Link } from "react-router";

import pokeballLogo from "/pokéball.svg";

const NavbarLogo = () => (
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
);
export default NavbarLogo;
