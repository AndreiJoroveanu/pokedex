import type { Encounter, PokemonEncounter } from "pokedex-promise-v2";

import { games } from "@/data/games.ts";

interface EncounterList {
  location: string;
  details: Encounter[];
}

// Groups Pokémon encounter data by version name
const organizePokemonEncounters = (encounters: PokemonEncounter[]) => {
  const groupedByVersion: Partial<Record<string, EncounterList[]>> = {};

  // Iterate through all encounter locations
  for (const encounter of encounters) {
    // Each location has a list of versions with encounter methods and details
    for (const versionDetail of encounter.version_details) {
      const versionName = versionDetail.version.name;

      // Skip versions not defined in the games list
      if (!(versionName in games)) continue;

      // Create the entry for this version if it doesn't exist yet
      groupedByVersion[versionName] ??= [];

      // Add this location to the correct version group
      groupedByVersion[versionName].push({
        location: encounter.location_area.name,
        details: versionDetail.encounter_details,
      });
    }
  }

  return groupedByVersion;
};
export default organizePokemonEncounters;
