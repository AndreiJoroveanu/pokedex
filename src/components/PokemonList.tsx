import PokemonCard from "./PokemonCard.tsx";

interface PokemonListType {
  id: number;
  name: string;
}

const PokemonList = ({
  paginatedPokemon,
}: {
  paginatedPokemon: PokemonListType[];
}) => {
  return (
    <main className="w-full mt-4 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4">
      {paginatedPokemon.map((pokemon) => (
        <PokemonCard key={pokemon.name} id={pokemon.id} />
      ))}
    </main>
  );
};

export default PokemonList;
