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

const FlavorTextEntries = ({ textEntries }: EntriesProps) => (
  <>
    <p className="my-2">Dex entries:</p>

    {/* All english Dex descriptions */}
    {textEntries?.length ? (
      <ul className="divide-y-2 divide-slate-400/40">
        {textEntries
          .filter((entry) => entry.language.name === "en")
          .map((entry) => (
            <li key={entry.version?.name} className="py-2">
              <span className="font-bold capitalize">
                {`${entry.version?.name.split("-").join(" ")}: `}
              </span>

              {entry.flavor_text}
            </li>
          ))}
      </ul>
    ) : (
      <p>Loading...</p>
    )}
  </>
);
export default FlavorTextEntries;
