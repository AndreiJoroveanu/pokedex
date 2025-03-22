import { memo } from "react";

import { tmDiscs } from "@/data/tmDiscs.ts";
import tmDiscsImage from "/tm-discs.webp";

import Loader from "@/components/Loader.tsx";

const MoveDiscImage = memo(({ type }: { type: string | undefined }) =>
  type ? (
    <div
      className="my-2 inline-block h-34.25 min-w-33"
      style={{
        backgroundImage: `url(${tmDiscsImage})`,
        backgroundPosition: `${tmDiscs[type].sprite.x}px ${tmDiscs[type].sprite.y}px`,
      }}
    />
  ) : (
    // The loader has the same positioning classes as the image to ensure no layout shifts
    <div className="my-2 inline-block h-34.25 w-33">
      <Loader size={12} />
    </div>
  ),
);
MoveDiscImage.displayName = "MoveDiscImage";
export default MoveDiscImage;
