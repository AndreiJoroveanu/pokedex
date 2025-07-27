import pokeballLogo from "/pokéball.svg";

interface LoaderProps {
  size: number;
  displaysText?: boolean;
}

const Loader = ({ size, displaysText = false }: LoaderProps) => (
  <div className="flex aspect-square size-full flex-col items-center justify-center">
    <img
      src={pokeballLogo}
      alt="Pokéball spinning as a loading animation"
      style={{ width: `${size * 4}px`, height: `${size * 4}px` }}
      className="animate-spin text-transparent"
    />

    {displaysText && <p className="mt-4 text-2xl font-bold">Loading...</p>}
  </div>
);
export default Loader;
