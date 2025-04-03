import { memo } from "react";
import { VerboseEffect } from "pokedex-promise-v2";

const MoveEffect = memo(
  ({ effect }: { effect: VerboseEffect[] | undefined }) => (
    <p className="mb-2">
      {/* Display loading text if the data is fetching, or display a message if there is no data from the API */}
      {effect === undefined
        ? "Loading..."
        : (effect[0]?.short_effect ??
          "There seems to be no additional information available about this move.")}
    </p>
  ),
);
MoveEffect.displayName = "MoveEffect";
export default MoveEffect;
