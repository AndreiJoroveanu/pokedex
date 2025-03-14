import { memo } from "react";
import { Link } from "react-router";

import { useMove } from "@/hooks/usePokeApi.ts";
import tmDiscsImage from "/tm-discs.png";
import { tmDiscs } from "@/data/tmDiscs.ts";

import Loader from "@/ui/Loader.tsx";
import MoveInfoDisplay from "@/features/moves/MoveInfoDisplay.tsx";

interface CardProps {
  move: { id: number; name: string };
}

const MoveCard = memo(({ move: { id, name } }: CardProps) => {
  const { data: move } = useMove(id);

  return (
    <Link to={`/pokedex/moves/${id}`}>
      <article className="@container/card relative rounded-xl bg-slate-200 shadow-lg transition-[background-color_shadow] hover:bg-slate-300 hover:shadow-xl dark:bg-slate-800 dark:shadow-none dark:hover:bg-slate-700 dark:hover:shadow-none">
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
            <div className="-m-7 inline-block h-34.25 w-33">
              <Loader size={8} />
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
