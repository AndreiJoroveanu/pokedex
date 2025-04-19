import { Genus } from "pokedex-promise-v2";

interface CategoryProps {
  category: Genus | undefined;
}

const PokemonCategory = ({ category }: CategoryProps) => (
  <h2 className="text-lg font-semibold text-slate-600 transition-[color] dark:text-slate-400">
    {category?.genus ?? "Loading..."}
  </h2>
);
export default PokemonCategory;
