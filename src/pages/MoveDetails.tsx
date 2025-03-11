import { useParams } from "react-router";

import { useMove } from "@/hooks/usePokeApi.ts";
import { capitalize } from "@/utils/capitalize.ts";

import ErrorMessage from "@/ui/ErrorMessage.tsx";
import BackButton from "@/ui/BackButton.tsx";
import MoveDiscImage from "@/features/moves/moveDetails/MoveDiscImage.tsx";
import MoveInfoDisplay from "@/features/moves/MoveInfoDisplay.tsx";
import Footer from "@/ui/Footer.tsx";

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

      <div className="pt-0 md:pt-36 lg:pt-24">
        <div className="mx-auto max-w-3xl bg-slate-100 p-2 pt-36 transition-colors sm:p-4 sm:pt-42 md:my-4 md:rounded-lg md:border-2 md:border-slate-400/40 md:pt-4 dark:bg-slate-800">
          {/* To remove when the page is more complete */}
          <h3 className="mb-4 text-center text-xl font-semibold">
            This page is currently under construction
          </h3>

          <div className="flex gap-2">
            <MoveDiscImage type={move?.type.name} />

            <div>
              <h1 className="mb-2 text-2xl font-bold capitalize">
                {move?.name.split("-").join(" ") ?? "Loading..."}
              </h1>

              <MoveInfoDisplay move={move} />
            </div>
          </div>

          <Footer className="md:hidden" />
        </div>

        <Footer className="mb-4 max-md:hidden" />
      </div>
    </>
  );
};
export default MoveDetails;
