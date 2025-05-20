import { useState } from "react";
import { Link } from "@tanstack/react-router";

import { usePokemon } from "@/hooks/usePokeApi.ts";
import type { ItemResource } from "@/types/types.ts";

import Loader from "@/components/Loader.tsx";
import PokemonTypesDisplay from "@/features/pokemon/components/PokemonTypesDisplay.tsx";

interface CardProps {
  pokemon: ItemResource;
}

const PokemonCard = ({ pokemon: { id, name } }: CardProps) => {
  const { data: pokemon } = usePokemon(id);
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  return (
    <Link to="/pokemon/$pokemonId" params={{ pokemonId: String(id) }}>
      <article className="group @container/card relative rounded-xl bg-slate-200 shadow-lg transition-[background-color_shadow] hover:bg-slate-300 hover:shadow-xl dark:bg-slate-800 dark:shadow-none dark:hover:bg-slate-700 dark:hover:shadow-none">
        {/* Gets the image from a raw link instead of waiting for */}
        {/* the Pokémon object to download because it is faster */}
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
          alt={name}
          decoding="async"
          onLoad={() => setIsLoadingImage(false)}
          className="aspect-square w-full object-contain text-transparent"
        />

        {/* Covers Pokémon image with the loader if the image hasn't loaded */}
        {isLoadingImage ? (
          <div className="absolute top-0 aspect-square w-full rounded-xl bg-slate-200 transition-[background-color] group-hover:bg-slate-300 dark:bg-slate-800 dark:group-hover:bg-slate-700">
            <Loader size={8} />
          </div>
        ) : null}

        <div className="p-2 md:p-4">
          <h1 className="mb-1 text-xl font-bold text-nowrap capitalize max-md:px-1">
            {name.replace("-", " ")}
          </h1>

          <PokemonTypesDisplay
            types={pokemon?.types}
            className="-mx-6 scale-75 gap-1 @min-[180px]/card:-mx-7 @min-[200px]/card:-mx-3 @min-[200px]/card:scale-90 @min-[200px]/card:gap-2 @min-[235px]/card:mx-0 @min-[235px]/card:scale-100"
          />
        </div>
      </article>
    </Link>
  );
};
export default PokemonCard;
