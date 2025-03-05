import { Link } from "react-router";
import ThemeSwitcher from "./ThemeSwitcher.tsx";

import pokeballLogo from "/pokéball.svg";

const Navbar = () => (
  <nav className="fixed top-0 z-50 flex h-18 w-full items-center justify-between border-b border-slate-400 bg-slate-100/80 px-2 shadow-lg backdrop-blur-md transition-colors sm:h-24 sm:px-24 dark:border-slate-600 dark:bg-slate-800/80 dark:shadow-none">
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
        <Link key={title} to={url}>
          <p className="inline rounded-sm px-4 py-2 font-semibold transition-all hover:border-b-4 hover:border-slate-700 hover:bg-slate-700/10 dark:hover:border-slate-300 dark:hover:bg-slate-300/10">
            {title}
          </p>
        </Link>
      ))}

      <ThemeSwitcher />
    </div>
  </nav>
);
export default Navbar;
