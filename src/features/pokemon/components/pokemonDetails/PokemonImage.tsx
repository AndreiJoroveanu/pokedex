import { useState } from "react";

import Loader from "@/components/Loader.tsx";

interface ImageProps {
  src: string | null | undefined;
  alt: string | undefined;
}

const PokemonImage = ({ src, alt }: ImageProps) => {
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  return (
    <div className="relative aspect-square max-h-128 w-full">
      <img
        src={src ?? undefined}
        alt={alt ?? ""}
        decoding="async"
        fetchPriority="high"
        onLoad={() => setIsLoadingImage(false)}
        className="mx-auto object-contain text-transparent"
      />

      {/* Display a message if the selected Form doesn't have an image (the src is null) */}
      {src === null && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            This Pokémon form doesn&apos;t have an image
          </h2>

          <p className="text-center font-semibold text-base-500 transition-[color] sm:text-lg dark:text-base-400">
            Please try another form by using one of the buttons above.
          </p>
        </div>
      )}

      {/* Covers the image with a loader if the image hasn't loaded */}
      {(isLoadingImage || src === undefined) && src !== null && (
        <div className="absolute inset-0 bg-base-50 transition-[background-color] dark:bg-base-950">
          <Loader size={24} displaysText={true} />
        </div>
      )}
    </div>
  );
};
export default PokemonImage;
