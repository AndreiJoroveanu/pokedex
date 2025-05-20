import type { FlavorText } from "pokedex-promise-v2";

import { getIdFromUrl } from "@/utils/getIdFromUrl.ts";

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

const formatFlavorTextEntries = (
  textEntries: FlavorText[] | undefined | null,
  moveName: string | undefined,
) =>
  textEntries
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
    )
    // Remove erroneous line breaks in the specific version groups and for the specific moves
    .map((entry) => ({
      ...entry,
      flavor_text:
        versionGroupsWithWordBreaks.has(entry.version_group?.name ?? "") &&
        moveName &&
        movesWithWordBreaks.has(moveName)
          ? entry.flavor_text.replace(/\n/g, "")
          : entry.flavor_text,
    }));
export default formatFlavorTextEntries;
