import { Link, Outlet, ScrollRestoration } from "react-router";

const Root = () => (
  <>
    <nav className="fixed z-10 w-full h-24 bg-white/80 backdrop-blur-md border-b border-gray-400 shadow-lg flex justify-between items-center px-2 sm:px-24">
      <Link to={"/pokemon"}>
        <title className="flex items-end text-3xl font-bold px-4 py-2 rounded hover:bg-gray-200 transition-all">
          P
          <img src="/pokéball.svg" alt="p" className="w-5 h-5 mb-1" />
          kédex
        </title>
      </Link>

      <div className="flex sm:gap-2">
        {[
          // Add the title and the url to add a new link in the navbar
          ["Pokémon", "/pokemon"],
          ["Moves", "/"],
          ["(T.B.D.)", "/"],
        ].map(([title, url]) => (
          <Link key={title} to={url}>
            <span className="px-4 py-2 rounded hover:bg-gray-200 hover:border-b-4 border-gray-700 transition-all">
              {title}
            </span>
          </Link>
        ))}
      </div>
    </nav>

    <Outlet />
    <ScrollRestoration />
  </>
);
export default Root;
