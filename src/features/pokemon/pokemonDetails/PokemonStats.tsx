import { Fragment } from "react";
import { StatElement } from "pokedex-promise-v2";

import useAppStore from "../../../store/useAppStore.ts";
import stats from "../../../data/stats.ts";

interface StatsProps {
  pokemonStats: StatElement[] | undefined;
}

const PokemonStats = ({ pokemonStats }: StatsProps) => {
  const { actualTheme } = useAppStore();

  const backgroundColor = (index: number) =>
    actualTheme === "dark"
      ? stats[index].backgroundColorDark
      : stats[index].backgroundColorLight;

  const color = (index: number) =>
    actualTheme === "dark" ? stats[index].colorDark : stats[index].colorLight;

  return (
    <>
      <h2 className="mb-1 text-lg font-semibold">Base Stats:</h2>

      <div className="mb-4 max-w-lg rounded-lg bg-slate-200 p-4 pb-2 shadow-lg transition-colors dark:bg-slate-700 dark:shadow-none">
        <div className="grid grid-cols-[auto_auto_1fr] gap-2">
          {stats?.map((stat, index) => (
            <Fragment key={stat.label}>
              {/* Stat name */}
              <h3 className="font-semibold capitalize">{stat.label}:</h3>

              {/* Stat number */}
              <p className="w-8 text-end">
                {pokemonStats?.[index]?.base_stat ?? 0}
              </p>

              {/* Stat bar */}
              <div
                style={{ backgroundColor: backgroundColor(index) }}
                className="my-auto h-3/4 w-full rounded-sm transition-colors dark:bg-green-700"
              >
                <div
                  style={{
                    width: `calc(100% * ${pokemonStats?.[index]?.base_stat ?? 0} / 255)`,
                    backgroundColor: color(index),
                  }}
                  className="h-full rounded-sm"
                />
              </div>
            </Fragment>
          ))}
        </div>

        <h3 className="pt-2 font-semibold">
          {`Base Stat Total: ${
            pokemonStats
              ?.map((stat) => stat.base_stat)
              .reduce((acc, cur) => acc + cur, 0) ?? 0
          }`}
        </h3>
      </div>
    </>
  );
};
export default PokemonStats;
