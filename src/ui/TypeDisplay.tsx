import { pokemonTypes } from "@/data/pokemonTypes.ts";
import types from "/types.png";

const TypeDisplay = ({ type }: { type: string }) => (
  <div
    key={type}
    style={{ background: pokemonTypes[type]?.color }}
    className="flex h-6 w-26 min-w-24 items-center overflow-hidden rounded-full"
  >
    {/* CSS image sprite icon */}
    <div
      className="-ml-1 inline-block aspect-square size-10 scale-40"
      style={{
        backgroundImage: `url(${types})`,
        backgroundPosition: `${pokemonTypes[type].sprite.x}px ${pokemonTypes[type].sprite.y}px`,
      }}
    />

    <div className="-ml-4 flex w-full justify-center">
      <p className="scale-x-90 font-semibold text-white">
        {type.toUpperCase()}
      </p>
    </div>
  </div>
);
export default TypeDisplay;
