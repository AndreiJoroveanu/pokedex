import TypeDisplay from "@/ui/TypeDisplay.tsx";
import MoveCategoryDisplay from "@/ui/MoveCategoryDisplay.tsx";
import { Move } from "pokedex-promise-v2";

interface InfoProps {
  move: Move | null;
  className?: string;
}

const MoveInfoDisplay = ({ move, className = "" }: InfoProps) =>
  move ? (
    <div className={`flex ${className}`.trim()}>
      <TypeDisplay type={move.type.name} className="rounded-r-none" />

      <MoveCategoryDisplay
        category={move.damage_class.name}
        className="rounded-l-none"
      />
    </div>
  ) : (
    <p>Loading...</p>
  );
export default MoveInfoDisplay;
