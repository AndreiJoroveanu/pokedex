import { PokemonSpecies } from "pokedex-promise-v2";

interface PokemonSpeciesInfoProps {
  pokemonSpecies: PokemonSpecies;
}

const PokemonSpeciesInfo = ({ pokemonSpecies }: PokemonSpeciesInfoProps) => {
  return (
    <>
      {/* Generation */}
      <p>
        {"This Pokémon originates from "}
        <span className="capitalize">
          {pokemonSpecies.generation.name.split("-")[0]}{" "}
          {pokemonSpecies.generation.name.split("-")[1].toUpperCase()}
        </span>
      </p>

      <p className="my-2">Dex entries:</p>

      {/* All english Dex descriptions */}
      <ul className="border-y">
        {pokemonSpecies.flavor_text_entries
          .filter((entry) => entry.language.name === "en")
          .map((entry) => (
            <li key={entry.version.name} className="border-y py-2">
              <span className="font-bold capitalize">
                {entry.version.name.split("-").join(" ")}:
              </span>{" "}
              {entry.flavor_text}
            </li>
          ))}
      </ul>
    </>
  );
};
export default PokemonSpeciesInfo;
