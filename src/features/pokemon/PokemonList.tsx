import PokemonCard from "./PokemonCard.tsx";

interface PokemonListType {
  id: number;
  name: string;
}

interface PokemonListProps {
  pokemonList: PokemonListType[];
}

const PokemonList = ({ pokemonList }: PokemonListProps) => (
  <main className="mt-4 grid w-full grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-5">
    {pokemonList.map((pokemon) => (
      <PokemonCard key={pokemon.name} id={pokemon.id} name={pokemon.name} />
    ))}
  </main>
);
export default PokemonList;
