import { Link } from "react-router";
import { usePokemon } from "../hooks/usePokemon.ts";

const PokemonCard = ({ id }: { id: number }) => {
  const { data: pokemon /* isLoading, error */ } = usePokemon(id);

  return (
    <>
      {pokemon ? (
        <Link to={`/pokemon/${pokemon.species.name}`} state={{ pokemon }}>
          <article className="border border-gray-200 rounded hover:bg-gray-50 shadow-lg hover:shadow-xl transition-shadow">
            <img
              src={pokemon.sprites.other?.home.front_default?.toString()}
              alt={pokemon.name}
              className="object-contain aspect-square w-full"
            />

            <div className="p-4">
              <h1 className="capitalize text-xl font-bold">
                {pokemon.id}. {pokemon.species.name}
              </h1>
              <p>
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
        <article className="w-full h-full" />
      )}
    </>
  );
};
export default PokemonCard;
