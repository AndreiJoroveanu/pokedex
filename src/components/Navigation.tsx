export default () => {
  return (
    <div className="flex justify-between items-center w-full px-24">
      <div>
        <a
          href=""
          className="text-2xl font-bold px-4 py-2 rounded hover:bg-gray-200 hover:border-b-4 border-b-gray-700"
        >
          Pokédex
        </a>
      </div>

      <ul className="flex gap-2">
        <li>
          <a
            href=""
            className="px-4 py-2 rounded hover:bg-gray-200 hover:border-b-4 border-b-gray-700"
          >
            Pokémon
          </a>
        </li>

        <li>
          <a
            href=""
            className="px-4 py-2 rounded hover:bg-gray-200 hover:border-b-4 border-b-gray-700"
          >
            Moves
          </a>
        </li>

        <li>
          <a
            href=""
            className="px-4 py-2 rounded hover:bg-gray-200 hover:border-b-4 border-b-gray-700"
          >
            etc.
          </a>
        </li>
      </ul>
    </div>
  );
};
