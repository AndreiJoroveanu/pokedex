import type { Move } from "pokedex-promise-v2";

const MoveStats = ({ move }: { move: Move | undefined }) => (
  <div className="mt-2 h-20 w-34 rounded-lg bg-base-100 py-1 pl-2 shadow-md transition-[background-color] dark:bg-base-900 dark:shadow-none">
    {move ? (
      <>
        <p>
          <span className="font-bold text-base-600 transition-[color] dark:text-base-400">
            {"Power: "}
          </span>
          {move.power ?? "-"}
        </p>

        <p>
          <span className="font-bold text-base-600 transition-[color] dark:text-base-400">
            {"Accuracy: "}
          </span>
          {move.accuracy ? `${move.accuracy}%` : "-"}
        </p>

        <p>
          <span className="font-bold text-base-600 transition-[color] dark:text-base-400">
            {"PP: "}
          </span>
          {move.pp}
        </p>
      </>
    ) : (
      <p>Loading...</p>
    )}
  </div>
);
export default MoveStats;
