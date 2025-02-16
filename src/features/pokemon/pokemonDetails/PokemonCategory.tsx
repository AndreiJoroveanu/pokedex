import { memo } from "react";
import { Genus } from "pokedex-promise-v2";

interface CategoryProps {
  category: Genus | undefined;
}

const PokemonCategory = memo(({ category }: CategoryProps) => (
  <h3 className="text-lg font-semibold text-slate-500 dark:text-slate-400">
    {category?.genus ?? "Loading..."}
  </h3>
));
PokemonCategory.displayName = "PokemonCategory";
export default PokemonCategory;
