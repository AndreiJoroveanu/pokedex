import { useState } from "react";

import Loader from "../../../ui/Loader.tsx";

interface ImageProps {
  src: string | null | undefined;
  alt: string | undefined;
}

const PokemonImage = ({ src, alt }: ImageProps) => {
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  return (
    <div className="relative">
      {/* Pokémon HOME artwork */}
      <img
        src={src ?? undefined}
        alt={alt}
        onLoad={() => setIsLoadingImage(false)}
        className="mx-auto aspect-square max-h-128 w-full object-contain text-transparent dark:brightness-90"
      />

      {/* Covers the image with a loader if the image hasn't loaded */}
      {(isLoadingImage || !src) && (
        <div className="absolute top-0 aspect-square max-h-128 w-full bg-slate-100 dark:bg-slate-800">
          <Loader size={24} displaysText={true} />
        </div>
      )}
    </div>
  );
};
export default PokemonImage;
