import { memo } from "react";
import { NamedAPIResource } from "pokedex-promise-v2";

import { games } from "@/data/games.ts";

import Loader from "@/components/Loader.tsx";

interface EntriesProps {
  // Currently pokedex-promise-v2 has a typing bug, so a manual type is used instead
  // (Usually the correct type is FlavorText[])
  textEntries:
    | {
        flavor_text: string;
        language: NamedAPIResource;
        version?: NamedAPIResource;
      }[]
    | undefined;
}

const FlavorTextEntries = memo(({ textEntries }: EntriesProps) =>
  textEntries?.length ? (
    <ul>
      {textEntries.map((entry) => (
        <li
          key={entry.version?.name}
          className="p-2 even:bg-slate-500/15 sm:px-4"
        >
          <span className="font-bold capitalize">
            {/* Display a hardcoded string for the version, with original one as a fallback */}
            {games[entry.version?.name ?? ""]?.label ??
              entry.version?.name.split("-").join(" ")}
          </span>
          : {entry.flavor_text}
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
