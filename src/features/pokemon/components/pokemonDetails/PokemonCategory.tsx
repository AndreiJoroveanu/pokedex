import type { Genus } from "pokedex-promise-v2";

const PokemonCategory = ({ category }: { category: Genus | undefined }) => (
  <h2 className="mx-2 text-lg font-semibold text-base-600 transition-[color] dark:text-base-400">
    {category?.genus ?? "Loading..."}
  </h2>
);
export default PokemonCategory;
