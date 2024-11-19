import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex justify-between items-center w-full px-24">
      <Link to={"/pokemon"}>
        <span className="text-2xl font-bold px-4 py-2 rounded hover:bg-gray-200 hover:border-b-4 border-b-gray-700 transition-all">
          Pokédex
        </span>
      </Link>

      <div className="flex gap-2">
        <Link to={"/pokemon"}>
          <span className="px-4 py-2 rounded hover:bg-gray-200 hover:border-b-4 border-b-gray-700 transition-all">
            Pokémon
          </span>
        </Link>

        <Link to={"/"}>
          <span className="px-4 py-2 rounded hover:bg-gray-200 hover:border-b-4 border-b-gray-700 transition-all">
            Moves
          </span>
        </Link>

        <Link to={"/"}>
          <span className="px-4 py-2 rounded hover:bg-gray-200 hover:border-b-4 border-b-gray-700 transition-all">
            (T.B.D.)
          </span>
        </Link>
      </div>
    </div>
  );
};
export default Navigation;
