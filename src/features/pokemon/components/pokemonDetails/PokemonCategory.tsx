import type { Genus } from "pokedex-promise-v2";

const PokemonCategory = ({ category }: { category: Genus | undefined }) => (
  <h2 className="text-lg font-semibold text-slate-600 transition-[color] dark:text-slate-400">
    {category?.genus ?? "Loading..."}
  </h2>
);
export default PokemonCategory;
