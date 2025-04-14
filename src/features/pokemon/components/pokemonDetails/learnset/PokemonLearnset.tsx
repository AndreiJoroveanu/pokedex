import { useShallow } from "zustand/react/shallow";
import { MoveElement } from "pokedex-promise-v2";

import useAppStore from "@/store/useAppStore.ts";

import CollapsingPanel from "@/components/CollapsingPanel.tsx";
import PokemonMoves from "@/features/pokemon/components/pokemonDetails/learnset/PokemonMoves.tsx";

const PokemonLearnset = ({ moves }: { moves: MoveElement[] | undefined }) => {
  const [isLearnsetPanelOpen, toggleLearnsetPanelOpen] = useAppStore(
    useShallow((state) => [
      state.isLearnsetPanelOpen,
      state.toggleLearnsetPanelOpen,
    ]),
  );

  return (
    <CollapsingPanel
      label="Learnset"
      initialIsOpen={isLearnsetPanelOpen}
      toggleOpen={toggleLearnsetPanelOpen}
    >
      <PokemonMoves moves={moves} />
    </CollapsingPanel>
  );
};
export default PokemonLearnset;
