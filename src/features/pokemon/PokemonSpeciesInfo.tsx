import { PokemonSpecies } from "pokedex-promise-v2";

interface InfoProps {
  pokemonSpecies: PokemonSpecies;
}

const PokemonSpeciesInfo = ({ pokemonSpecies }: InfoProps) => (
  <>
    {/* Generation */}
    <p>
      {`This Pokémon originates from Generation ${pokemonSpecies.generation.name.split("-")[1].toUpperCase()}`}
    </p>

    <p className="my-2">Dex entries:</p>

    {/* All english Dex descriptions */}
    <ul className="divide-y-2 divide-slate-400/40">
      {pokemonSpecies.flavor_text_entries
        .filter((entry) => entry.language.name === "en")
        .map((entry) => (
          // TS: Currently pokedex-promise-v2 has a bug with their typing interface
          <li key={entry.version.name} className="py-2">
            <span className="font-bold capitalize">
              {`${entry.version.name.split("-").join(" ")}: `}
            </span>

            {entry.flavor_text}
          </li>
        ))}
    </ul>
  </>
);
export default PokemonSpeciesInfo;
