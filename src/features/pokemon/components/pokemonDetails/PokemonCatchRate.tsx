interface CatchRateProps {
  catchRate: number | undefined;
}

const PokemonCatchRate = ({ catchRate }: CatchRateProps) => {
  // Simplified (but still accurate) formula for catching the Pokémon
  // at full HP with a normal Pokéball based on its catch rate
  const probability = (Math.pow((catchRate ?? 0) / 765, 0.75) * 100).toFixed(2);

  return (
    <p className="m-2">
      {catchRate ? (
        <>
          <span className="font-bold text-base-700 transition-[color] dark:text-base-300">
            Catch Rate:
          </span>

          {` ${catchRate} (`}
          <span className="group relative border-b-3 border-dotted">
            {probability}%
            <span className="pointer-events-none absolute bottom-full left-1/2 mb-1 -translate-x-1/2 rounded bg-base-800 px-3 py-1 text-center text-sm text-nowrap text-base-200 opacity-0 shadow-md transition-opacity group-[&:hover]:opacity-100 dark:bg-base-200 dark:text-base-800 dark:shadow-none">
              {probability}% chance to catch at
              <br />
              full HP with an ordinary
              <br />
              Poké Ball in Generation VI+
            </span>
          </span>
          {")"}
        </>
      ) : (
        "Loading..."
      )}
    </p>
  );
};
export default PokemonCatchRate;
