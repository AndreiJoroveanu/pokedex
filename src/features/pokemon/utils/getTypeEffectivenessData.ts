import { typeEffectiveness } from "@/data/typeEffectiveness.ts";

const getTypeEffectivenessData = (types: string[]) => {
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

  return { categories, multipliers };
};
export default getTypeEffectivenessData;
