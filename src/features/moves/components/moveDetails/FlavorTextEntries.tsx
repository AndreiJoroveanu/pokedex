import { memo } from "react";
import { FlavorText } from "pokedex-promise-v2";

import { versionGroups } from "@/data/versionGroups.ts";
import { capitalize } from "@/utils/capitalize.ts";

import Loader from "@/components/Loader.tsx";

interface EntriesProps {
  textEntries: FlavorText[] | undefined;
  moveName: string | undefined;
}

// Removing line breaks is only needed for Gold and Silver & Crystal version groups
const versionGroupsWithWordBreaks = new Set(["gold-silver", "crystal"]);

// Moves that require removing line breaks in their Gold and Silver & Crystal
// descriptions because they contain the "\n" in the middle of words
const movesWithWordBreaks = new Set([
  "pound",
  "karate-chop",
  "vice-grip",
  "swords-dance",
  "hydro-pump",
  "surf",
  "drill-peck",
  "submission",
  "strength",
  "growth",
  "razor-leaf",
  "double-team",
  "minimize",
  "focus-energy",
  "crabhammer",
  "slash",
  "aeroblast",
  "encore",
  "cross-chop",
  "mirror-coat",
  "extreme-speed",
]);

// Remove the line breaks in the specific version groups and for the specific moves
const fixLineBreaksInFlavorText = (entry: FlavorText, moveName: string) =>
  versionGroupsWithWordBreaks.has(entry.version_group?.name ?? "") &&
  movesWithWordBreaks.has(moveName)
    ? entry.flavor_text.replace(/\n/g, "")
    : entry.flavor_text;

const FlavorTextEntries = memo(({ textEntries, moveName }: EntriesProps) =>
  textEntries?.length && moveName ? (
    <ul>
      {textEntries.map((entry) => (
        <li
          key={entry.version_group?.name}
          className="p-2 even:bg-slate-500/15 sm:px-4"
        >
          <span className="font-bold capitalize">
            {/* Display a hardcoded string for the version group, with original one as a fallback */}
            {versionGroups[entry.version_group?.name ?? ""]?.label ??
              capitalize(entry.version_group?.name ?? "")}
          </span>
          : {fixLineBreaksInFlavorText(entry, moveName)}
        </li>
      ))}
    </ul>
  ) : (
    <div className="h-60">
      <Loader size={24} displaysText={true} />
    </div>
  ),
);
FlavorTextEntries.displayName = "FlavorTextEntries";
export default FlavorTextEntries;
