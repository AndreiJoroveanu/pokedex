import { memo } from "react";

interface CatchRateProps {
  catchRate: number | undefined;
}

const PokemonCatchRate = memo(({ catchRate }: CatchRateProps) => {
  // Simplified (but still accurate) formula for catching the Pokémon
  // at full HP with a normal Pokéball based on its catch rate
  const probability = (Math.pow((catchRate ?? 0) / 765, 0.75) * 100).toFixed(2);

  return (
    <p className="my-2">
      Catch Rate: {catchRate ?? "Loading..."}
      {catchRate ? (
        <span className="relative">
          {" ("}
          <span className="peer border-b-3 border-dotted">{probability}%</span>
          {")"}
          <div className="absolute bottom-full left-1/2 mb-1 -translate-x-1/2 rounded bg-slate-800 px-3 py-1 text-center text-sm text-nowrap text-slate-200 opacity-0 shadow-md transition-opacity peer-[&:hover]:opacity-100 dark:bg-slate-200 dark:text-slate-800 dark:shadow-none">
            {probability}% chance to catch at
            <br />
            full HP with an ordinary
            <br />
            Poké Ball in Generation VI+
          </div>
        </span>
      ) : null}
    </p>
  );
});
PokemonCatchRate.displayName = "PokemonCatchRate";
export default PokemonCatchRate;
