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
      <article className="relative border border-gray-200 rounded hover:bg-gray-50 shadow-lg hover:shadow-xl transition-shadow">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
          alt={name}
          className="object-contain aspect-square w-full text-transparent"
        />
        {!pokemon ? (
          <div className="absolute bg-white top-0 w-full aspect-square">
            <Loader size={8} />
          </div>
        ) : (
          ""
        )}

        <div className="p-4">
          <h1 className="capitalize text-xl font-bold text-nowrap">
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
