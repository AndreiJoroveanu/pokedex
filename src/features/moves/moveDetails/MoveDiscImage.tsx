import { memo } from "react";

import tmDiscsImage from "/tm-discs.png";
import { tmDiscs } from "@/data/tmDiscs.ts";

import Loader from "@/ui/Loader.tsx";

const MoveDiscImage = memo(({ type }: { type: string | undefined }) =>
  type ? (
    <div
      className="inline-block h-34.25 w-33"
      style={{
        backgroundImage: `url(${tmDiscsImage})`,
        backgroundPosition: `${tmDiscs[type].sprite.x}px ${tmDiscs[type].sprite.y}px`,
      }}
    />
  ) : (
    // The loader has the same positioning classes as the image to ensure no layout shifts
    <div className="inline-block h-34.25 w-33">
      <Loader size={12} />
    </div>
  ),
);
MoveDiscImage.displayName = "MoveDiscImage";
export default MoveDiscImage;
