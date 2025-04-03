import { memo } from "react";
import { FlavorText } from "pokedex-promise-v2";

import { versionGroups } from "@/data/versionGroups.ts";
import { getIdFromUrl } from "@/utils/getIdFromUrl.ts";
import { capitalize } from "@/utils/capitalize.ts";

import CollapsingPanel from "@/components/CollapsingPanel.tsx";
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

const FlavorTextEntries = memo(({ textEntries, moveName }: EntriesProps) => {
  const sortedEntries = textEntries
    // Filter to display only the english Move Descriptions
    ?.filter((entry) => entry.language.name === "en")
    // Removes entries that don't actually have the move and just recommend to forget the move
    .filter(
      (entry) =>
        entry.flavor_text !==
        "This move can’t be used.\nIt’s recommended that this move is forgotten.\nOnce forgotten, this move can’t be remembered.",
    )
    // Manually sort based on the version group ID in reverse order (newer first)
    .sort(
      (a, b) =>
        (getIdFromUrl(b.version_group?.url) ?? 0) -
        (getIdFromUrl(a.version_group?.url) ?? 0),
    );

  return (
    <>
      <h2 className="mb-1 text-lg font-semibold">Descriptions:</h2>

      <div className="rounded-xl bg-slate-200 transition-[background] dark:bg-slate-800">
        {sortedEntries?.length && moveName ? (
          <>
            <p className="-mb-2 px-2 pt-2 sm:px-4">
              <span className="font-bold text-slate-600 transition-[color] dark:text-slate-400">
                {versionGroups[sortedEntries[0].version_group?.name ?? ""]
                  ?.label ??
                  capitalize(sortedEntries[0].version_group?.name ?? "")}
                {": "}
              </span>
              {sortedEntries[0].flavor_text}
            </p>

            {sortedEntries.length > 1 && (
              <CollapsingPanel label="More Descriptions">
                <ul>
                  {sortedEntries.slice(1).map((entry) => (
                    <li
                      key={entry.version_group?.name}
                      className="p-2 even:bg-slate-500/15 sm:px-4"
                    >
                      <span className="font-bold text-slate-600 transition-[color] dark:text-slate-400">
                        {/* Display a hardcoded string for the version group, with original one as a fallback */}
                        {versionGroups[entry.version_group?.name ?? ""]
                          ?.label ??
                          capitalize(entry.version_group?.name ?? "")}
                        {": "}
                      </span>
                      {fixLineBreaksInFlavorText(entry, moveName)}
                    </li>
                  ))}
                </ul>
              </CollapsingPanel>
            )}
          </>
        ) : (
          <div className="h-27">
            <Loader size={16} />
          </div>
        )}
      </div>
    </>
  );
});
FlavorTextEntries.displayName = "FlavorTextEntries";
export default FlavorTextEntries;
