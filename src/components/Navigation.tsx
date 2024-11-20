import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex justify-between items-center w-full px-2 sm:px-24">
      <Link to={"/pokemon"}>
        <span className="flex items-end text-3xl font-bold px-4 py-2 rounded hover:bg-gray-200 transition-all">
          P
          <img
            src="/pokéball.svg"
            alt="Pokéball logo"
            className="w-5 h-5 mb-1"
          />
          kédex
        </span>
      </Link>

      <div className="flex sm:gap-2">
        <Link to={"/pokemon"}>
          <span className="px-4 py-2 rounded hover:bg-gray-200 hover:border-b-4 border-gray-700 transition-all">
            Pokémon
          </span>
        </Link>

        <Link to={"/"}>
          <span className="px-4 py-2 rounded hover:bg-gray-200 hover:border-b-4 border-gray-700 transition-all">
            Moves
          </span>
        </Link>

        <Link to={"/"}>
          <span className="px-4 py-2 rounded hover:bg-gray-200 hover:border-b-4 border-gray-700 transition-all">
            (T.B.D.)
          </span>
        </Link>
      </div>
    </div>
  );
};
export default Navigation;
