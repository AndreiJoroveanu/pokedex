import { useParams } from "react-router";

import { useMove } from "@/hooks/usePokeApi.ts";
import { capitalize } from "@/utils/capitalize.ts";

import ErrorMessage from "@/components/error/ErrorMessage.tsx";
import BackButton from "@/components/button/BackButton.tsx";
import MoveDiscImage from "@/features/moves/components/moveDetails/MoveDiscImage.tsx";
import MoveInfoDisplay from "@/features/moves/components/MoveInfoDisplay.tsx";
import MoveStats from "@/features/moves/components/moveDetails/MoveStats.tsx";
import MoveEffect from "@/features/moves/components/moveDetails/MoveEffect.tsx";
import CollapsingPanel from "@/components/CollapsingPanel.tsx";
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

      <BackButton />

      <div className="mx-auto max-w-3xl px-2 pt-36 pb-6 sm:px-4 sm:pt-42 md:px-0 lg:pt-28">
        {/* To remove when the page is more complete */}
        <h3 className="mb-4 text-center text-xl font-semibold">
          This page is currently under construction
        </h3>

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

        <CollapsingPanel label="Descriptions" className="px-2">
          {/* All english move descriptions */}
          <FlavorTextEntries
            textEntries={move?.flavor_text_entries.filter(
              (entry) => entry.language.name === "en",
            )}
            moveName={move?.name}
          />
        </CollapsingPanel>

        <Footer />
      </div>
    </>
  );
};
export default MoveDetails;
