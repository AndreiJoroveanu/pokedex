import { Link } from "react-router";
import { usePokemon } from "../hooks/usePokemon.ts";

const PokemonCard = ({ id, name }: { id: number; name: string }) => {
  const { data: pokemon /* isLoading, error */ } = usePokemon(id);

  return (
    <>
      {pokemon ? (
        <Link to={`/pokemon/${pokemon.species.name}`} state={{ pokemon }}>
          <article className="border border-gray-200 rounded hover:bg-gray-50 shadow-lg hover:shadow-xl transition-shadow">
            <img
              src={pokemon.sprites.other?.home.front_default?.toString()}
              alt={pokemon.name}
              className="object-contain aspect-square w-full text-transparent"
            />

            <div className="p-4">
              <h1 className="capitalize text-xl font-bold text-nowrap">
                {pokemon.id}. {pokemon.species.name}
              </h1>
              <p className="text-nowrap">
                {pokemon.types.length === 1 ? "Type: " : "Types: "}
                {pokemon.types.map((type) => (
                  <span key={type.type.name} className="capitalize">
                    {` ${type.type.name}`}
                  </span>
                ))}
              </p>
            </div>
          </article>
        </Link>
      ) : (
        <article className="w-full h-full border border-gray-200 rounded hover:bg-gray-50 shadow-lg hover:shadow-xl transition-shadow">
          <div className="aspect-square w-full" />
          <div className="p-4">
            <h1 className="capitalize text-xl font-bold">
              {id}. {name}
            </h1>
            <p>Loading...</p>
          </div>
        </article>
      )}
    </>
  );
};
export default PokemonCard;
