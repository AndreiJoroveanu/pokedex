import { Link } from "react-router";
import { usePokemon } from "../hooks/usePokemon.ts";
import Loader from "./Loader.tsx";

interface PokemonCardProps {
  id: number;
  name: string;
}

const PokemonCard = ({ id, name }: PokemonCardProps) => {
  const { data: pokemon /* isLoading, error */ } = usePokemon(id);

  return (
    <Link to={`/pokemon/${name}`} state={{ pokemon }}>
      <article className="relative rounded border border-gray-200 shadow-lg transition-shadow hover:bg-gray-50 hover:shadow-xl">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
          alt={name}
          className="aspect-square w-full object-contain text-transparent"
        />
        {!pokemon ? (
          <div className="absolute top-0 aspect-square w-full bg-white">
            <Loader size={8} />
          </div>
        ) : (
          ""
        )}

        <div className="p-4">
          <h1 className="text-nowrap text-xl font-bold capitalize">
            {id}. {name}
          </h1>
          <p className="text-nowrap">
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
