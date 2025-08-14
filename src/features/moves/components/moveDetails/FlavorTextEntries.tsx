import type { FlavorText } from "pokedex-promise-v2";

import { useMoveDetailsParam } from "@/features/moves/hooks/useMoveDetailsParam.ts";
import { versionGroups } from "@/data/versionGroups.ts";
import formatFlavorTextEntries from "@/features/moves/utils/formatFlavorTextEntries.ts";
import { capitalize } from "@/utils/capitalize.ts";

import Accordion from "@/components/Accordion.tsx";
import Loader from "@/components/Loader.tsx";

interface EntriesProps {
  textEntries: FlavorText[] | undefined | null;
  moveName: string | undefined;
}

const flavorTextEntry = (entry: FlavorText) => (
  <>
    <span className="font-bold text-base-600 transition-[color] dark:text-base-400">
      {/* Display a hardcoded string for the version group, with original one as a fallback */}
      {versionGroups[entry.version_group?.name ?? ""]?.label ??
        capitalize(entry.version_group?.name ?? "")}
      {": "}
    </span>
    {entry.flavor_text}
  </>
);

const FlavorTextEntries = ({ textEntries, moveName }: EntriesProps) => {
  const [isOpen, setIsOpen] = useMoveDetailsParam("isDescriptionsPanelOpen");

  const sortedEntries = formatFlavorTextEntries(textEntries, moveName);

  return (
    <>
      <h2 className="mb-1 ml-2 text-lg font-semibold sm:ml-4">Descriptions:</h2>

      <div className="rounded-xl bg-base-100 transition-[background] dark:bg-base-900">
        {sortedEntries?.length ? (
          <>
            <p
              className={`${
                sortedEntries.length > 1 ? "-mb-2" : "pb-2"
              } px-2 pt-2 sm:px-4`}
            >
              {flavorTextEntry(sortedEntries[0])}
            </p>

            {sortedEntries.length > 1 && (
              <Accordion
                label="More Descriptions"
                initialIsOpen={isOpen}
                toggleOpen={() => setIsOpen(isOpen ? undefined : true)}
              >
                <ul>
                  {sortedEntries.slice(1).map((entry) => (
                    <li
                      key={entry.version_group?.name}
                      className="p-2 even:bg-base-500/15 sm:px-4"
                    >
                      {flavorTextEntry(entry)}
                    </li>
                  ))}
                </ul>
              </Accordion>
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
