import { memo } from "react";
import { useShallow } from "zustand/react/shallow";
import { NamedAPIResource } from "pokedex-promise-v2";

import useAppStore from "@/store/useAppStore.ts";
import { games } from "@/data/games.ts";
import { capitalize } from "@/utils/capitalize.ts";

import CollapsingPanel from "@/components/CollapsingPanel.tsx";
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

const FlavorTextEntries = memo(({ textEntries }: EntriesProps) => {
  const [isDexEntriesPanelOpen, toggleDexEntriesPanelOpen] = useAppStore(
    useShallow((state) => [
      state.isDexEntriesPanelOpen,
      state.toggleDexEntriesPanelOpen,
    ]),
  );

  const sortedEntries = textEntries
    // Filter to display only the english Dex Entries
    ?.filter((entry) => entry.language.name === "en")
    // Reverse the order to show Dex Entries from newest games first
    .reverse();

  return (
    <>
      <h2 className="mb-1 text-lg font-semibold">Dex Entries:</h2>

      <div className="rounded-xl bg-slate-200 transition-[background] dark:bg-slate-800">
        {sortedEntries?.length ? (
          <>
            <p
              className={`px-2 pt-2 sm:px-4 ${sortedEntries.length > 1 ? "-mb-2" : "pb-2"}`}
            >
              <span className="font-bold text-slate-600 transition-[color] dark:text-slate-400">
                {/*{"Dex Entry from Pokémon "}*/}
                {games[sortedEntries[0].version?.name ?? ""]?.label ??
                  capitalize(sortedEntries[0].version?.name ?? "")}
                {": "}
              </span>
              {sortedEntries[0].flavor_text}
            </p>

            {sortedEntries.length > 1 && (
              <CollapsingPanel
                label="More Dex Entries"
                initialIsOpen={isDexEntriesPanelOpen}
                toggleOpen={toggleDexEntriesPanelOpen}
              >
                <ul>
                  {sortedEntries.slice(1).map((entry) => (
                    <li
                      key={entry.version?.name}
                      className="p-2 even:bg-slate-500/15 sm:px-4"
                    >
                      <span className="font-bold text-slate-600 transition-[color] dark:text-slate-400">
                        {/* Display a hardcoded string for the version, with original one as a fallback */}
                        {games[entry.version?.name ?? ""]?.label ??
                          capitalize(entry.version?.name ?? "")}
                        {": "}
                      </span>
                      {entry.flavor_text}
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
