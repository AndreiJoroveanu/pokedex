import { pokemonTypes } from "@/data/pokemonTypes.ts";
import types from "/types.webp";

interface DisplayProps {
  type: string;
  className?: string;
}

const TypeDisplay = ({ type, className = "" }: DisplayProps) => (
  <div
    style={{ background: pokemonTypes[type]?.color }}
    className={`flex h-6 w-26 min-w-24 items-center rounded-full ${className}`.trimEnd()}
  >
    {/* CSS image sprite icon */}
    <div
      style={{
        backgroundImage: `url(${types})`,
        backgroundPosition: `${pokemonTypes[type].sprite.x}px ${pokemonTypes[type].sprite.y}px`,
      }}
      className="-ml-1 inline-block aspect-square size-10 scale-40"
    />

    <p className="-ml-4.5 flex w-full scale-x-90 justify-center font-semibold text-white uppercase">
      {type}
    </p>
  </div>
);
export default TypeDisplay;
