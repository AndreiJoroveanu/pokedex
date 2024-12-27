import { Link } from "react-router";

const Navbar = () => (
  <nav className="fixed top-0 z-10 flex h-24 w-full items-center justify-between border-b border-gray-400 bg-white/80 px-2 shadow-lg backdrop-blur-md sm:px-24">
    <Link to={"/pokemon"}>
      <h1 className="flex items-end rounded px-4 py-2 text-3xl font-bold transition-all hover:bg-gray-700 hover:bg-opacity-10">
        P
        <img src="/pokéball.svg" alt="p" className="mb-1 h-5 w-5" />
        kédex
      </h1>
    </Link>

    <div className="flex sm:gap-2">
      {[
        // Add the title and the url to add a new link in the navbar
        ["Pokémon", "/pokemon"],
        ["Moves", "/"],
        ["(T.B.D.)", "/"],
      ].map(([title, url]) => (
        <Link key={title} to={url}>
          <span className="rounded border-gray-700 px-4 py-2 transition-all hover:border-b-4 hover:bg-gray-700 hover:bg-opacity-10">
            {title}
          </span>
        </Link>
      ))}
    </div>
  </nav>
);
export default Navbar;
