import { usePokemonLocations } from "@/hooks/usePokeApi.ts";
import organizePokemonEncounters from "@/features/pokemon/utils/organizePokemonEncounters.ts";
import { games } from "@/data/games.ts";

import Loader from "@/components/Loader.tsx";

const PokemonLocations = ({ id }: { id: number }) => {
  const { data: encounters } = usePokemonLocations(id);

  if (encounters === undefined)
    return (
      <div className="h-27">
        <Loader size={16} />
      </div>
    );

  if (encounters.length === 0)
    return (
      <div className="p-2 sm:px-4">
        There seems to be no location data for this Pokémon. Try checking
        another Pokemon from the same evolution line.
      </div>
    );

  // Group encounters based on the version
  const formattedEncounters = organizePokemonEncounters(encounters);

  return (
    <div className="space-y-4 p-2 sm:px-4">
      {Object.entries(games)
        .filter(([versionName]) => formattedEncounters[versionName])
        .map(([versionName, { label }]) => (
          <div key={versionName}>
            <h2 className="text-xl font-bold">{label}</h2>

            <ul>
              {formattedEncounters[versionName]!.map(({ location }) => (
                <li key={location} className="capitalize">
                  {location.split("-").join(" ")}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};
export default PokemonLocations;
