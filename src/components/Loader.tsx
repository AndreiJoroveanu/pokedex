interface LoaderProps {
  size: number;
  displaysText?: boolean;
}

const Loader = ({ size, displaysText = false }: LoaderProps) => (
  <div className="flex aspect-square h-full w-full flex-col items-center justify-center">
    <img
      src="/pokéball.svg"
      alt="Pokéball loading animation"
      className={`w-${size} h-${size} animate-spin`}
    />
    {displaysText && <p className="mt-4 text-2xl font-bold">Loading...</p>}
  </div>
);
export default Loader;
