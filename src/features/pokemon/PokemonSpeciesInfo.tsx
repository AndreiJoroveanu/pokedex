import { PokemonSpecies } from "pokedex-promise-v2";

import FlavorTextEntries from "./pokemonDetails/FlavorTextEntries.tsx";

interface InfoProps {
  pokemonSpecies: PokemonSpecies;
}

const PokemonSpeciesInfo = ({ pokemonSpecies }: InfoProps) => (
  <>
    {/* Generation */}
    <p>
      {`This Pokémon originates from Generation ${pokemonSpecies.generation.name.split("-")[1].toUpperCase()}`}
    </p>

    <FlavorTextEntries textEntries={pokemonSpecies.flavor_text_entries} />
  </>
);
export default PokemonSpeciesInfo;
