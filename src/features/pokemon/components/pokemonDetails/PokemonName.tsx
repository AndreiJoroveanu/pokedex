const PokemonName = ({ name }: { name: string | undefined }) => (
  <h1 className="text-2xl font-bold capitalize">
    {name?.split("-").join(" ") ?? "Loading..."}
  </h1>
);
export default PokemonName;
