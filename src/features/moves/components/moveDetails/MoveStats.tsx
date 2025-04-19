import { Move } from "pokedex-promise-v2";

const MoveStats = ({ move }: { move: Move | undefined }) => (
  <div className="mt-2 h-20 w-34 rounded-lg bg-slate-200 py-1 pl-2 shadow transition-[background-color] dark:bg-slate-800 dark:shadow-none">
    {move ? (
      <>
        <p>
          <span className="font-bold text-slate-600 dark:text-slate-400">
            Power:{" "}
          </span>
          {move.power ?? "-"}
        </p>

        <p>
          <span className="font-bold text-slate-600 dark:text-slate-400">
            Accuracy:{" "}
          </span>
          {move.accuracy ? `${move.accuracy}%` : "-"}
        </p>

        <p>
          <span className="font-bold text-slate-600 dark:text-slate-400">
            PP:{" "}
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
