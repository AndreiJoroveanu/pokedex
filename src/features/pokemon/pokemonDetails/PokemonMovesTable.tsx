import PokemonMoveTableRow from "./PokemonMoveTableRow.tsx";

interface MovesProps {
  moves: { name: string; level: number }[];
  label: string;
}

const PokemonMovesTable = ({ moves, label }: MovesProps) => (
  <>
    <h3 className="mb-1 text-2xl font-bold capitalize max-sm:pl-2">{label}</h3>

    <div className="-mx-2 overflow-x-scroll px-2 pb-2">
      {/* Table displaying the learnset from the selected version group */}
      <table className="min-w-full text-nowrap">
        <thead className="border-b border-slate-500">
          <tr>
            {label === "Level-Up Moves" && (
              <th className="min-w-14 pb-1 text-start">Level</th>
            )}
            <th className="min-w-36 pb-1 text-start">Move</th>

            <th className="w-26 pr-2 pb-1 text-start">Type</th>
            <th className="w-26 pr-2 pb-1 text-start">Category</th>
            <th className="min-w-16 pb-1 text-start">Power</th>
            <th className="min-w-22 pb-1 text-start">Accuracy</th>
            <th className="min-w-6 pb-1 text-start">PP</th>
          </tr>
        </thead>

        <tbody>
          {moves.map(({ name, level }, index) => (
            <PokemonMoveTableRow
              key={`${level}-${name}`}
              name={name}
              level={level}
              index={index}
              displayLevel={label === "Level-Up Moves"}
            />
          ))}
        </tbody>
      </table>
    </div>
  </>
);
export default PokemonMovesTable;
