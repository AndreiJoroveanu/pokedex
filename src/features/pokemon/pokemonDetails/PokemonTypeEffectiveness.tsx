import { typeEffectiveness } from "@/data/typeEffectiveness.ts";

import TypeDisplay from "@/ui/TypeDisplay.tsx";

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
            <TypeDisplay type={type} /> {`${multipliers[type]}x`}
          </div>
        ))}
      </div>
    </>
  ) : null;

const PokemonTypeEffectiveness = ({ types }: TypesProps) => {
  if (!types) return <>Loading...</>;

  // An object which will contain all 18 types and the multiplier to which they deal damage to the Pokémon
  const multipliers: Record<string, number> = {};

  // An object to categorize the types depending on their damage multiplier against the Pokémon
  const categories: Record<string, { types: string[]; label: string }> = {
    normal: { types: [], label: "Damaged normally by" },
    weak: { types: [], label: "Weak to" },
    resistant: { types: [], label: "Resistant to" },
    immune: { types: [], label: "Immune to" },
  };

  // Determine the effectiveness and category of each type
  for (const attackingType of Object.keys(typeEffectiveness)) {
    // Base multiplier of 1
    let multiplier = 1;

    // Multiply effectiveness across all the Pokémon's defending types
    for (const defendingType of types)
      multiplier *= typeEffectiveness[defendingType]?.[attackingType] ?? 1;

    multipliers[attackingType] = multiplier;

    // Categorize the type based on its effectiveness
    if (multiplier === 0) categories.immune.types.push(attackingType);
    else if (multiplier < 1) categories.resistant.types.push(attackingType);
    else if (multiplier > 1) categories.weak.types.push(attackingType);
    else categories.normal.types.push(attackingType);
  }

  return (
    <>
      <h2 className="mb-1 text-lg font-semibold">Type effectiveness:</h2>

      <div className="mb-4 w-full rounded-lg bg-slate-200 px-4 pt-2 pb-1 shadow-lg transition-colors dark:bg-slate-700 dark:shadow-none">
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
