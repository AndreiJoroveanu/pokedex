import type { MoveElement } from "pokedex-promise-v2";

import { getIdFromUrl } from "@/utils/getIdFromUrl.ts";
import type { ItemResource } from "@/types/types.ts";

interface Moves {
  label: string;
  moves: (ItemResource & { level: number })[];
}

type Learnset = Record<string, Moves>;

const filterLearnsetData = (
  moves: MoveElement[],
  currentVersionGroup: string,
) => {
  const learnset: Learnset = {
    levelUpMoves: { label: "Level-Up Moves", moves: [] },
    machineMoves: { label: "TM Moves", moves: [] },
    eggMoves: { label: "Egg Moves", moves: [] },
    tutorMoves: { label: "Tutor Moves", moves: [] },
  };

  moves.forEach((move) => {
    move.version_group_details.forEach((vg) => {
      if (vg.version_group.name === currentVersionGroup) {
        const moveData = {
          id: Number(getIdFromUrl(move.move.url)),
          name: move.move.name,
          level: vg.level_learned_at,
        };

        // Add the move to its respective categories, if applicable
        switch (vg.move_learn_method.name) {
          case "level-up":
            learnset.levelUpMoves.moves.push(moveData);
            break;
          case "machine":
            learnset.machineMoves.moves.push(moveData);
            break;
          case "egg":
            learnset.eggMoves.moves.push(moveData);
            break;
          case "tutor":
            learnset.tutorMoves.moves.push(moveData);
            break;
        }
      }
    });
  });

  // Sort level-up moves by level
  learnset.levelUpMoves.moves.sort((a, b) => a.level - b.level);

  return learnset;
};
export default filterLearnsetData;
