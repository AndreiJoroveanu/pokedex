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

      <div className="mx-auto max-w-3xl pt-36 pb-6 sm:pt-42 lg:pt-28">
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

        <Footer />
      </div>
    </>
  );
};
export default MoveDetails;
