import { useState } from "react";

import Loader from "../../../ui/Loader.tsx";

interface ImageProps {
  src: string | null;
  alt: string;
}

const PokemonImage = ({ src, alt }: ImageProps) => {
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  return (
    <div className="relative">
      {/* Image (Pokémon HOME artwork) */}
      <img
        src={src?.toString()}
        alt={alt}
        onLoad={() => setIsLoadingImage(false)}
        className="mx-auto aspect-square h-128 object-contain text-transparent dark:brightness-90"
      />

      {/* Covers Pokémon image with the loader if the image hasn't loaded */}
      {isLoadingImage && (
        <div className="absolute top-0 aspect-square max-h-[512px] w-full bg-slate-100 dark:bg-slate-800">
          <Loader size={24} displaysText={true} />
        </div>
      )}
    </div>
  );
};
export default PokemonImage;
