import getTypeEffectivenessData from "@/features/pokemon/utils/getTypeEffectivenessData.ts";

import Loader from "@/components/Loader.tsx";
import TypeDisplay from "@/components/TypeDisplay.tsx";

interface TypesProps {
  types: string[] | undefined;
}

interface CategoryProps {
  title: string;
  types: string[];
  multipliers: Record<string, number>;
}

const EffectivenessCategory = ({ title, types, multipliers }: CategoryProps) =>
  types.length ? (
    <>
      <p>{title}:</p>

      {/* List of types from the specific category */}
      <div className="flex flex-wrap gap-1 pt-1 pb-2">
        {types.map((type) => (
          <div key={type} className="flex w-34 items-center gap-1 pr-2">
            <TypeDisplay type={type} />

            {multipliers[type] === 0.25 ? (
              // Reduce the X scale when the multiplier is 0.25 because otherwise it would take too much space
              <span className="-ml-0.5 scale-x-90">{`${multipliers[type]}x`}</span>
            ) : (
              <span>{`${multipliers[type]}x`}</span>
            )}
          </div>
        ))}
      </div>
    </>
  ) : null;

const PokemonTypeEffectiveness = ({ types }: TypesProps) => {
  if (!types)
    return (
      <>
        <h2 className="mb-1 text-lg font-semibold">Type effectiveness:</h2>

        <div className="h-80 w-full rounded-lg bg-base-200 shadow-lg transition-[background-color] dark:bg-base-800 dark:shadow-none">
          <Loader size={24} displaysText={true} />
        </div>
      </>
    );

  const { categories, multipliers } = getTypeEffectivenessData(types);

  return (
    <>
      <h2 className="mx-4 mb-1 text-lg font-semibold">Type effectiveness:</h2>

      <div className="mb-4 w-full rounded-xl bg-base-200 px-4 pt-2 pb-1 shadow-lg transition-[background-color] dark:bg-base-800 dark:shadow-none">
        <p>This Pokémon is:</p>

        {Object.values(categories).map(({ types, label }) => (
          <EffectivenessCategory
            key={label}
            title={label}
            types={types}
            multipliers={multipliers}
          />
        ))}
      </div>
    </>
  );
};
export default PokemonTypeEffectiveness;
