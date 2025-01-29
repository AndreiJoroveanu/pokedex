import { useState } from "react";
import { Link } from "react-router";

import { usePokemon } from "../../hooks/pokemon/useSpecificPokemon.ts";

import Loader from "../../ui/Loader.tsx";

interface CardProps {
  id: number;
  name: string;
}

const PokemonCard = ({ id, name }: CardProps) => {
  const { data: pokemon } = usePokemon(id);
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  return (
    <Link to={`/pokemon/${name}`} state={{ pokemon }}>
      <article className="relative rounded-sm border border-slate-400/40 bg-slate-100 shadow-lg transition-colors hover:bg-slate-200/75 hover:shadow-xl dark:bg-slate-800 dark:hover:bg-slate-700/75">
        {/* Gets the image from a raw link instead of waiting for */}
        {/* the Pokémon object to download because it is faster */}
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
          alt={name}
          onLoad={() => setIsLoadingImage(false)}
          className="aspect-square w-full object-contain text-transparent dark:brightness-90"
        />

        {/* Covers Pokémon image with the loader if the image hasn't loaded */}
        {isLoadingImage ? (
          <div className="absolute top-0 aspect-square w-full bg-slate-100 dark:bg-slate-800">
            <Loader size={8} />
          </div>
        ) : (
          ""
        )}

        <div className="p-4">
          <h1 className="text-xl font-bold text-nowrap capitalize">
            {id}. {name}
          </h1>
          <p className="font-semibold text-nowrap text-slate-500 dark:text-slate-400">
            {pokemon ? (
              <>
                {pokemon?.types.length === 1 ? "Type: " : "Types: "}
                {pokemon?.types.map((type) => (
                  <span key={type.type.name} className="capitalize">
                    {` ${type.type.name}`}
                  </span>
                ))}
              </>
            ) : (
              "Loading..."
            )}
          </p>
        </div>
      </article>
    </Link>
  );
};
export default PokemonCard;
