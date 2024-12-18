import { PokemonSpecies } from "pokedex-promise-v2";

const PokemonSpeciesInfo = ({
  pokemonSpecies,
}: {
  pokemonSpecies: PokemonSpecies;
}) => {
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

      {/* Dex Description */}
      <ul>
        {pokemonSpecies.flavor_text_entries
          .filter((entry) => entry.language.name === "en")
          .map((entry) => (
            <li key={entry.version.name}>
              <span className="capitalize font-bold">
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
