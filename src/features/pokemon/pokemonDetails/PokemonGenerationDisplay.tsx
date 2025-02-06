interface GenerationProps {
  generation: string | undefined;
}

const PokemonGenerationDisplay = ({ generation }: GenerationProps) => (
  <p>
    {generation
      ? `This Pokémon originates from Generation ${generation.split("-")[1].toUpperCase()}`
      : "Loading..."}
  </p>
);
export default PokemonGenerationDisplay;
