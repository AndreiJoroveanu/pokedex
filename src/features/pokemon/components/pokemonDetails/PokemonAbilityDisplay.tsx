import type { PokemonAbility } from "pokedex-promise-v2";

import { usePokemonAbility } from "@/hooks/usePokeApi.ts";
import { getIdFromUrl } from "@/utils/getIdFromUrl.ts";
import { capitalize } from "@/utils/capitalize.ts";

const PokemonAbilityDisplay = ({ ability }: { ability: PokemonAbility }) => {
  const { data: abilityData } = usePokemonAbility(
    getIdFromUrl(ability.ability.url)!,
  );

  return (
    <div>
      <h3 className="font-bold text-base-600 transition-[color] dark:text-base-400">
        {`${capitalize(ability.ability.name)}${ability.is_hidden ? " (Hidden)" : ""}`}
      </h3>

      <p>
        {abilityData
          ? (abilityData?.flavor_text_entries
              .slice()
              .reverse()
              .find((entry) => entry.language.name === "en")?.flavor_text ??
            "No description available")
          : "Loading..."}
      </p>
    </div>
  );
};
export default PokemonAbilityDisplay;
