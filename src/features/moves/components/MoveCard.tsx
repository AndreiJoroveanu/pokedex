import { memo } from "react";
import { Link } from "@tanstack/react-router";

import { useMove } from "@/hooks/usePokeApi.ts";
import type { ItemResource } from "@/types/types.ts";
import { tmDiscs } from "@/data/tmDiscs.ts";
import tmDiscsImage from "/tm-discs.webp";

import Loader from "@/components/Loader.tsx";
import MoveInfoDisplay from "@/features/moves/components/MoveInfoDisplay.tsx";

interface CardProps {
  move: ItemResource;
}

const MoveCard = memo(({ move: { id, name } }: CardProps) => {
  const { data: move } = useMove(id);

  return (
    <Link to="/moves/$moveId" params={{ moveId: String(id) }}>
      <article className="@container/card relative rounded-xl bg-base-100 shadow-lg transition-[background-color_shadow] hover:bg-base-200 hover:shadow-xl dark:bg-base-900 dark:shadow-none dark:hover:bg-base-800 dark:hover:shadow-none">
        <div className="flex">
          {move ? (
            <div
              className="-m-7 inline-block h-34.25 w-33 scale-40"
              style={{
                backgroundImage: `url(${tmDiscsImage})`,
                backgroundPosition: `${tmDiscs[move.type.name].sprite.x}px ${tmDiscs[move.type.name].sprite.y}px`,
              }}
            />
          ) : (
            // The loader has the same positioning classes as the image to ensure no layout shifts
            <div className="-m-7 inline-block h-34.25 w-33 scale-40">
              <Loader size={20} />
            </div>
          )}

          <div className="w-[calc(100%-76px)]">
            <h1 className="my-1 overflow-scroll px-1 text-lg font-bold text-nowrap capitalize">
              {name.split("-").join(" ")}
            </h1>

            <MoveInfoDisplay
              move={move}
              className="-mx-6 -my-1 scale-75 @min-[275px]/card:-mx-2 @min-[275px]/card:scale-90 @min-[300px]/card:m-1 @min-[300px]/card:scale-100"
            />
          </div>
        </div>
      </article>
    </Link>
  );
});
MoveCard.displayName = "MoveCard";
export default MoveCard;
