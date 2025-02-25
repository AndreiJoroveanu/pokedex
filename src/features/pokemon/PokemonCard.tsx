import { memo, useState } from "react";
import { Link } from "react-router";

import { usePokemon } from "@/hooks/pokemon/useSpecificPokemon.ts";

import Loader from "@/ui/Loader.tsx";
import PokemonTypesDisplay from "./PokemonTypesDisplay.tsx";

interface CardProps {
  id: number;
  name: string;
}

const PokemonCard = memo(({ id, name }: CardProps) => {
  const { data: pokemon } = usePokemon(id);
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  return (
    <Link to={`/pokedex/pokemon/${id}`} state={{ initialPokemon: pokemon }}>
      <article className="relative rounded-sm border border-slate-400/40 bg-slate-100 shadow-lg transition-colors hover:bg-slate-200/75 hover:shadow-xl dark:bg-slate-800 dark:shadow-none dark:hover:bg-slate-700/75 dark:hover:shadow-none">
        {/* Gets the image from a raw link instead of waiting for */}
        {/* the Pokémon object to download because it is faster */}
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
          alt={name}
          onLoad={() => setIsLoadingImage(false)}
          className="aspect-square w-full object-contain text-transparent"
        />

        {/* Covers Pokémon image with the loader if the image hasn't loaded */}
        {isLoadingImage ? (
          <div className="absolute top-0 aspect-square w-full rounded-sm bg-slate-100 dark:bg-slate-800">
            <Loader size={8} />
          </div>
        ) : (
          ""
        )}

        <div className="p-2 md:p-4">
          <h1 className="mb-1 text-xl font-bold text-nowrap capitalize max-md:px-1">
            {name}
          </h1>

          <PokemonTypesDisplay
            types={pokemon?.types}
            className="max-[410px]:small-types min-[410px]:max-lg:normal-types min-lg:max-[1144px]:small-types min-[1144px]:max-xl:normal-types min-xl:max-[1366px]:small-types min-[1366px]:normal-types"
          />
        </div>
      </article>
    </Link>
  );
});
PokemonCard.displayName = "PokemonCard";
export default PokemonCard;
