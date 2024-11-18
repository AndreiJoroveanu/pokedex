import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="flex justify-between items-center w-full px-24">
      <Link to={"/pokemon"}>
        <span className="text-2xl font-bold px-4 py-2 rounded hover:bg-gray-200 hover:border-b-4 border-b-gray-700">
          Pokédex
        </span>
      </Link>

      <div className="flex gap-2">
        <Link to={"/pokemon"}>
          <span className="px-4 py-2 rounded hover:bg-gray-200 hover:border-b-4 border-b-gray-700">
            Pokémon
          </span>
        </Link>

        <Link to={"/"}>
          <span className="px-4 py-2 rounded hover:bg-gray-200 hover:border-b-4 border-b-gray-700">
            Moves
          </span>
        </Link>

        <Link to={"/"}>
          <span className="px-4 py-2 rounded hover:bg-gray-200 hover:border-b-4 border-b-gray-700">
            (T.B.D.)
          </span>
        </Link>
      </div>
    </div>
  );
};
