interface GenerationProps {
  generation: string | undefined;
  itemType: string;
}

const GenerationText = ({ generation, itemType }: GenerationProps) => (
  <p className="my-2">
    {generation
      ? `This ${itemType} originates from Generation ${generation.split("-")[1].toUpperCase()}.`
      : "Loading..."}
  </p>
);
export default GenerationText;
