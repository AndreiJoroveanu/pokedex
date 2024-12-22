import { Link } from "react-router";
import { usePokemon } from "../hooks/usePokemon.ts";

const PokemonCard = ({ id, name }: { id: number; name: string }) => {
  const { data: pokemon /* isLoading, error */ } = usePokemon(id);

  return (
    <Link to={`/pokemon/${name}`} state={{ pokemon }}>
      <article className="border border-gray-200 rounded hover:bg-gray-50 shadow-lg hover:shadow-xl transition-shadow">
        {pokemon ? (
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
            // src={pokemon.sprites.other.home.front_default?.toString()}
            alt={name}
            className="object-contain aspect-square w-full text-transparent"
          />
        ) : (
          <div className="aspect-square w-full flex justify-center items-center">
            <img
              src="/pokéball.svg"
              alt="Pokéball loading animation"
              className="w-8 h-8 animate-spin"
            />
          </div>
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
