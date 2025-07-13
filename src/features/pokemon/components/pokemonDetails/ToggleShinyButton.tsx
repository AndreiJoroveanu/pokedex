import { SparklesIcon as SparklesIconSolid } from "@heroicons/react/24/solid";
import { SparklesIcon as SparklesIconOutline } from "@heroicons/react/24/outline";

import Button from "@/components/button/Button.tsx";

interface ButtonProps {
  displayShiny: boolean;
  setDisplayShiny: () => void;
}

const ToggleShinyButton = ({ displayShiny, setDisplayShiny }: ButtonProps) => (
  <Button
    onClick={setDisplayShiny}
    variant={displayShiny ? "gold" : "normal"}
    className="flex items-center gap-2 px-4 text-nowrap"
  >
    {displayShiny ? (
      <SparklesIconSolid className="size-4" />
    ) : (
      <SparklesIconOutline className="size-4" />
    )}
    Shiny Art
  </Button>
);
export default ToggleShinyButton;
