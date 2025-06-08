import type { MoveElement } from "pokedex-promise-v2";

import { usePokemonDetailsParam } from "@/features/pokemon/hooks/usePokemonDetailsParam.ts";

import CollapsingPanel from "@/components/CollapsingPanel.tsx";
import PokemonMoves from "@/features/pokemon/components/pokemonDetails/learnset/PokemonMoves.tsx";

const PokemonLearnset = ({ moves }: { moves: MoveElement[] | undefined }) => {
  const [isOpen, setIsOpen] = usePokemonDetailsParam("isLearnsetPanelOpen");

  return (
    <CollapsingPanel
      label="Learnset"
      initialIsOpen={isOpen}
      toggleOpen={() => setIsOpen(isOpen ? undefined : true)}
    >
      <PokemonMoves moves={moves} />
    </CollapsingPanel>
  );
};
export default PokemonLearnset;
