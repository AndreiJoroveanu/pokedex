import { memo, useState } from "react";

import Loader from "@/components/Loader.tsx";

interface ImageProps {
  src: string | null | undefined;
  alt: string | undefined;
}

const PokemonImage = memo(({ src, alt }: ImageProps) => {
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  return (
    <div className="relative">
      <img
        src={src ?? undefined}
        alt={alt ?? ""}
        onLoad={() => setIsLoadingImage(false)}
        className="mx-auto aspect-square max-h-128 w-full object-contain text-transparent"
      />

      {/* Display a message if the selected Form doesn't have an image (the src is null) */}
      {src === null && (
        <div className="absolute top-0 flex aspect-square max-h-128 w-full flex-col items-center justify-center gap-4 bg-slate-100 transition-[background_color] dark:bg-slate-900">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            This Pokémon Form does not have an image
          </h2>

          <p className="text-center font-semibold text-slate-500 sm:text-lg dark:text-slate-400">
            Please try another Form by using one of the buttons above.
          </p>
        </div>
      )}

      {/* Covers the image with a loader if the image hasn't loaded */}
      {(isLoadingImage || src === undefined) && src !== null && (
        <div className="absolute top-0 aspect-square max-h-128 w-full bg-slate-100 dark:bg-slate-900">
          <Loader size={24} displaysText={true} />
        </div>
      )}
    </div>
  );
});
PokemonImage.displayName = "PokemonImage";
export default PokemonImage;
