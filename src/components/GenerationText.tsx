import { memo } from "react";

interface GenerationProps {
  generation: string | undefined;
  itemType: string;
}

const GenerationText = memo(({ generation, itemType }: GenerationProps) => (
  <p className="my-2">
    {generation
      ? `This ${itemType} originates from Generation ${generation.split("-")[1].toUpperCase()}.`
      : "Loading..."}
  </p>
));
GenerationText.displayName = "GenerationText";
export default GenerationText;
