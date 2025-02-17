interface MovesProps {
  moves: { name: string; level: number }[];
  label: string;
}

const PokemonMovesTable = ({ moves, label }: MovesProps) => (
  <>
    <h3 className="mt-2 mb-1 text-2xl font-bold capitalize">{label}</h3>

    <table>
      {/* Table displaying the learnset from the selected version group */}
      <thead className="border-b border-slate-500">
        <tr>
          {label === "Level-Up Moves" && (
            <th className="pr-4 pb-1 text-start">Level</th>
          )}
          <th className="pr-4 pb-1 text-start">Move</th>
        </tr>
      </thead>

      <tbody>
        {moves.map(({ name, level }) => (
          <tr key={name}>
            {label === "Level-Up Moves" && (
              <td className="pr-4">{level || "Evo."}</td>
            )}

            <td className="pr-4 capitalize">{name.split("-").join(" ")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);
export default PokemonMovesTable;
