import type { PokemonAbility } from "pokedex-promise-v2";

import PokemonAbilityDisplay from "@/features/pokemon/components/pokemonDetails/PokemonAbilityDisplay.tsx";
import Loader from "@/components/Loader.tsx";

interface AbilitiesProps {
  abilities: PokemonAbility[] | undefined;
}

const PokemonAbilities = ({ abilities }: AbilitiesProps) => (
  <>
    <h2 className="mb-1 ml-2 text-lg font-semibold sm:ml-4">
      {abilities?.length === 1 ? "Ability:" : "Abilities:"}
    </h2>

    <div className="mb-2 max-w-lg space-y-4 rounded-xl bg-base-100 p-2 pb-3 shadow-md transition-[background-color] sm:px-4 dark:bg-base-900 dark:shadow-none">
      {abilities
        // Deduplicates abilities based on their names
        ?.filter(
          ({ ability: { name } }, i) =>
            abilities.map(({ ability: { name } }) => name).indexOf(name) === i,
        )
        .map((ability) => (
          <PokemonAbilityDisplay key={ability.ability.name} ability={ability} />
        )) ?? (
        <div className="h-24">
          <Loader size={16} />
        </div>
      )}
    </div>
  </>
);
export default PokemonAbilities;
