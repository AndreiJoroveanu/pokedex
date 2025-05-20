import type { FlavorText } from "pokedex-promise-v2";

import { versionGroups } from "@/data/versionGroups.ts";
import formatFlavorTextEntries from "@/features/moves/utils/formatFlavorTextEntries.ts";
import { capitalize } from "@/utils/capitalize.ts";

import CollapsingPanel from "@/components/CollapsingPanel.tsx";
import Loader from "@/components/Loader.tsx";

interface EntriesProps {
  textEntries: FlavorText[] | undefined | null;
  moveName: string | undefined;
}

const FlavorTextEntries = ({ textEntries, moveName }: EntriesProps) => {
  const sortedEntries = formatFlavorTextEntries(textEntries, moveName);

  return (
    <>
      <h2 className="mx-2 mb-1 text-lg font-semibold sm:mx-4">Descriptions:</h2>

      <div className="rounded-xl bg-slate-200 transition-[background] dark:bg-slate-800">
        {sortedEntries?.length && moveName ? (
          <>
            <p
              className={`px-2 pt-2 sm:px-4 ${sortedEntries.length > 1 ? "-mb-2" : "pb-2"}`}
            >
              <span className="font-bold text-slate-600 transition-[color] dark:text-slate-400">
                {/* Display a hardcoded string for the version group, with original one as a fallback */}
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
                      {entry.flavor_text}
                    </li>
                  ))}
                </ul>
              </CollapsingPanel>
            )}
          </>
        ) : textEntries === undefined ? (
          <div className="h-27">
            <Loader size={16} />
          </div>
        ) : (
          <p className="p-2 sm:px-4">
            This move doesn&apos;t seem to have any descriptions.
          </p>
        )}
      </div>
    </>
  );
};
export default FlavorTextEntries;
