import { pokemonTypes } from "@/data/pokemonTypes.ts";

const TypeDisplay = ({ type }: { type: string }) => {
  const typeInfo = pokemonTypes.find((t) => t.value === type);

  return (
    <div
      key={typeInfo?.value}
      style={{ background: typeInfo?.color }}
      className="flex h-6 w-26 min-w-24 items-center rounded-full saturate-150 dark:saturate-125"
    >
      <img src={typeInfo?.icon} alt={typeInfo?.value} className="ml-1 h-full" />

      <div className="-ml-3 flex w-full justify-center">
        <p className="scale-x-90 font-semibold text-white">
          {typeInfo?.value.toUpperCase()}
        </p>
      </div>
    </div>
  );
};
export default TypeDisplay;
