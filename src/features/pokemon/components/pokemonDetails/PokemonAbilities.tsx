import type { PokemonAbility } from "pokedex-promise-v2";

import PokemonAbilityDisplay from "@/features/pokemon/components/pokemonDetails/PokemonAbilityDisplay.tsx";
import Loader from "@/components/Loader.tsx";

interface AbilitiesProps {
  abilities: PokemonAbility[] | undefined;
}

const PokemonAbilities = ({ abilities }: AbilitiesProps) => (
  <>
    <h2 className="mb-1 ml-4 text-lg font-semibold">
      {abilities?.length === 1 ? "Ability:" : "Abilities:"}
    </h2>

    <div className="mb-4 flex max-w-lg flex-col gap-4 rounded-xl bg-base-200 px-4 py-2 shadow-lg transition-[background-color] dark:bg-base-800 dark:shadow-none">
      {abilities ? (
        // Deduplicates abilities by ability name
        Array.from(
          new Map(
            abilities
              // Reverse to preserve only the first occurrence in case of duplicates
              .slice()
              .reverse()
              .map((a) => [a.ability.name, a]),
          ).values(),
        )
          // Reverse back to preserve the original ability order
          .reverse()
          .map((ability) => (
            <PokemonAbilityDisplay
              key={ability.ability.name}
              ability={ability}
            />
          ))
      ) : (
        <div className="h-24">
          <Loader size={16} />
        </div>
      )}
    </div>
  </>
);
export default PokemonAbilities;
