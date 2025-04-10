import { useParams } from "react-router";

import { useMove } from "@/hooks/usePokeApi.ts";
import { capitalize } from "@/utils/capitalize.ts";

import ErrorMessage from "@/components/error/ErrorMessage.tsx";
import BackButton from "@/components/button/BackButton.tsx";
import MoveDiscImage from "@/features/moves/components/moveDetails/MoveDiscImage.tsx";
import MoveInfoDisplay from "@/features/moves/components/MoveInfoDisplay.tsx";
import MoveStats from "@/features/moves/components/moveDetails/MoveStats.tsx";
import MoveEffect from "@/features/moves/components/moveDetails/MoveEffect.tsx";
import MoveTarget from "@/features/moves/components/moveDetails/MoveTarget.tsx";
import GenerationText from "@/components/GenerationText.tsx";
import FlavorTextEntries from "@/features/moves/components/moveDetails/FlavorTextEntries.tsx";
import Footer from "@/components/Footer.tsx";

const MoveDetails = () => {
  // Fetching data
  // Move ID using the URL Parameter
  const { id } = useParams() as { id: string };
  const { data: move, error: errorM } = useMove(Number(id));

  // Display an error message if there is an error whole fetching data
  if (errorM) return <ErrorMessage errors={[errorM.message]} />;

  return (
    <>
      {/* In React 19, you can now render the <title> tag in JSX */}
      <title>{`Pokédex - ${capitalize(move?.name ?? "Loading")}`}</title>

      <div className="pointer-events-none sticky top-4 z-20 px-2 sm:fixed sm:top-28 sm:px-4">
        <BackButton />
      </div>

      <div className="mx-auto max-w-3xl p-4 max-sm:px-2 sm:pt-42 md:px-0 lg:pt-28">
        {/* To remove when the page is more complete */}
        <p className="mb-4 text-center text-xl font-semibold">
          This page is currently under construction
        </p>

        <div className="mb-4 flex gap-2">
          <MoveDiscImage type={move?.type.name} />

          <div className="max-w-[calc(100vw-148px)]">
            <h1 className="overflow-scroll pb-1 text-2xl font-bold text-nowrap">
              {capitalize(move?.name ?? "Loading...")}
            </h1>

            <MoveInfoDisplay move={move} />

            <MoveStats move={move} />
          </div>
        </div>

        <MoveEffect effect={move?.effect_entries} />

        <MoveTarget target={move?.target.name} />

        <GenerationText generation={move?.generation.name} itemType="move" />

        {/* All english move descriptions */}
        <FlavorTextEntries
          textEntries={move?.flavor_text_entries}
          moveName={move?.name}
        />

        <Footer />
      </div>
    </>
  );
};
export default MoveDetails;
