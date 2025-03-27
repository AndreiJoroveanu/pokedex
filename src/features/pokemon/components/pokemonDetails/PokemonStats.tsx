import { Fragment, memo } from "react";
import { StatElement } from "pokedex-promise-v2";

import { stats } from "@/data/stats.ts";

interface StatsProps {
  pokemonStats: StatElement[] | undefined;
}

const PokemonStats = memo(({ pokemonStats }: StatsProps) => (
  <>
    <h2 className="mb-1 text-lg font-semibold">Base Stats:</h2>

    <div className="mb-4 max-w-lg rounded-lg bg-slate-200 p-4 pb-2 shadow-lg transition-[background-color] dark:bg-slate-800 dark:shadow-none">
      <div className="grid grid-cols-[auto_auto_1fr] gap-2">
        {stats?.map((stat, index) => (
          <Fragment key={stat.label}>
            {/* Stat name */}
            <h3 className="font-semibold capitalize">{stat.label}:</h3>

            {/* Stat number */}
            {pokemonStats ? (
              <p className="w-8 text-end">
                {pokemonStats[index].base_stat ?? 0}
              </p>
            ) : (
              <div className="my-auto -mr-2 h-5 w-8 animate-pulse rounded-l-sm bg-slate-500/50" />
            )}

            {/* Stat bar */}
            {pokemonStats ? (
              <div className="relative my-auto h-5">
                <div
                  style={{ backgroundColor: stats[index].color }}
                  className="absolute h-full w-full rounded-sm opacity-50 brightness-125 transition-[filter] dark:brightness-75"
                />

                <div
                  style={{
                    width: `${((pokemonStats[index].base_stat ?? 0) / 255) * 100}%`,
                    backgroundColor: stats[index].color,
                  }}
                  className="absolute h-full rounded-sm opacity-75 brightness-90 saturate-125 transition-[filter] dark:brightness-110"
                />
              </div>
            ) : (
              <div className="my-auto h-5 w-full animate-pulse rounded-r-sm bg-slate-500/50" />
            )}
          </Fragment>
        ))}
      </div>

      {pokemonStats ? (
        <h3 className="pt-2 font-semibold">
          {`Base Stat Total: ${
            pokemonStats
              .map((stat) => stat.base_stat)
              .reduce((acc, cur) => acc + cur, 0) ?? 0
          }`}
        </h3>
      ) : (
        <div className="mt-2 mb-1 h-5 w-36 animate-pulse rounded-sm bg-slate-500/50" />
      )}
    </div>
  </>
));
PokemonStats.displayName = "PokemonStats";
export default PokemonStats;
