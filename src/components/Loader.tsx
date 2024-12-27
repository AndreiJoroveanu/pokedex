import { JSX } from "react";

interface LoaderProps {
  size: number;
  children?: JSX.Element;
}

const Loader = ({ size, children }: LoaderProps) => (
  <div className="flex aspect-square h-full w-full flex-col items-center justify-center">
    <img
      src="/pokéball.svg"
      alt="Pokéball loading animation"
      className={`w-${size} h-${size} animate-spin`}
    />
    {children}
  </div>
);
export default Loader;
