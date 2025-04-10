import { memo } from "react";

import { capitalize } from "@/utils/capitalize.ts";

const MoveTarget = memo(({ target }: { target: string | undefined }) => (
  <p className="my-2">
    {target ? (
      <>
        <span className="font-bold text-slate-700 transition-[color] dark:text-slate-300">
          Target:
        </span>
        {/* Capitalize and add the é accent if the string contains the word "pokemon" */}
        {` ${capitalize(target.replace("pokemon", "pokémon"))}`}
      </>
    ) : (
      "Loading..."
    )}
  </p>
));
MoveTarget.displayName = "MoveTarget";
export default MoveTarget;
