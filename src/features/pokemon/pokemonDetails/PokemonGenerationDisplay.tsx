import { memo } from "react";

interface GenerationProps {
  generation: string | undefined;
}

const PokemonGenerationDisplay = memo(({ generation }: GenerationProps) => (
  <p className="my-2">
    {generation
      ? `This Pokémon originates from Generation ${generation.split("-")[1].toUpperCase()}`
      : "Loading..."}
  </p>
));
PokemonGenerationDisplay.displayName = "PokemonGenerationDisplay";
export default PokemonGenerationDisplay;
