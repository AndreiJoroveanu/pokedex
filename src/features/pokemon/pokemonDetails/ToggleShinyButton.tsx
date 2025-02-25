import { Dispatch, memo, SetStateAction } from "react";
import { SparklesIcon as SparklesIconSolid } from "@heroicons/react/24/solid";
import { SparklesIcon as SparklesIconOutline } from "@heroicons/react/24/outline";

import Button from "@/ui/Button.tsx";

interface ButtonProps {
  displayShiny: boolean;
  setDisplayShiny: Dispatch<SetStateAction<boolean>>;
}

const ToggleShinyButton = memo(
  ({ displayShiny, setDisplayShiny }: ButtonProps) => (
    <Button
      onClick={() => setDisplayShiny((prev: boolean) => !prev)}
      style={displayShiny ? "gold" : "normal"}
      className="flex items-center gap-2 px-4 text-nowrap"
    >
      {displayShiny ? (
        <SparklesIconSolid className="size-4" />
      ) : (
        <SparklesIconOutline className="size-4" />
      )}
      Shiny Art
    </Button>
  ),
);
ToggleShinyButton.displayName = "ToggleShinyButton";
export default ToggleShinyButton;
