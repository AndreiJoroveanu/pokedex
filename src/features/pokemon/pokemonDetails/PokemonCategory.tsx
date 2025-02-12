import { Genus } from "pokedex-promise-v2";

const PokemonCategory = ({ category }: { category: Genus | undefined }) => (
  <h3 className="text-lg font-semibold text-slate-500 dark:text-slate-400">
    {category?.genus ?? "Loading..."}
  </h3>
);
export default PokemonCategory;
