import { memo } from "react";
import { NamedAPIResource } from "pokedex-promise-v2";

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

const FlavorTextEntries = memo(({ textEntries }: EntriesProps) => (
  <>
    {textEntries?.length ? (
      <ul className="divide-y-2 divide-slate-400/40">
        {textEntries.map((entry) => (
          <li key={entry.version?.name} className="p-1 sm:p-2">
            <span className="font-bold capitalize">
              {entry.version?.name.split("-").join(" ")}
            </span>
            : {entry.flavor_text}
          </li>
        ))}
      </ul>
    ) : (
      <p>Loading...</p>
    )}
  </>
));
FlavorTextEntries.displayName = "FlavorTextEntries";
export default FlavorTextEntries;
