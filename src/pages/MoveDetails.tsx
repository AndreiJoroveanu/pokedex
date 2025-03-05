import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import axios from "axios";
import { Move } from "pokedex-promise-v2";

import { api } from "@/hooks/pokemon/usePokemonShared.ts";
import { capitalize } from "@/utils/helpers.ts";

import ErrorMessage from "@/ui/ErrorMessage.tsx";
import BackButton from "@/ui/BackButton.tsx";
import MoveDiscImage from "@/features/moves/moveDetails/MoveDiscImage.tsx";
import MoveInfoDisplay from "@/features/moves/MoveInfoDisplay.tsx";
import Footer from "@/ui/Footer.tsx";

const MoveDetails = () => {
  // Move ID using the URL Parameter
  const { id } = useParams() as { id: string };

  // Move passed as a state through React Router to avoid fetching it again
  // TS: state property from useLocation() hook doesn't have a specific type
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { initialMove }: { initialMove: Move } = useLocation().state ?? {};

  const [move, setMove] = useState<Move | undefined>(initialMove);
  const [errorM, setErrorM] = useState<string | null>(null);

  // Fetch the move if there isn't one initially
  useEffect(() => {
    let ignore = false;

    void (async () => {
      if (initialMove) return;

      try {
        if (!ignore && id) setMove(await api.getMoveByName(id));
      } catch (error) {
        let errorMessage = "An unknown error occurred.";

        if (axios.isAxiosError(error)) {
          switch (error.response?.status) {
            case 404:
              errorMessage =
                "The requested resource was not found. Please check the URL or try again.";
              break;
            case 500:
              errorMessage = "Internal server error. Try again later.";
              break;
            case 503:
              errorMessage = "Service unavailable. Check back later.";
              break;
            default:
              errorMessage = error.message;
          }
        } else if (error instanceof Error) errorMessage = error.message;

        setErrorM(errorMessage ?? "An unknown error occurred.");
        setMove(undefined);
      }
    })();

    return () => void (ignore = true);
  }, [id, initialMove]);

  // Display an error message if there is an error whole fetching data
  if (errorM) return <ErrorMessage errors={[errorM]} />;

  return (
    <>
      {/* In React 19, you can now render the <title> tag in JSX */}
      <title>{`Pokédex - ${capitalize(move?.name ?? "Loading")}`}</title>

      <BackButton />

      <div className="pt-0 md:pt-36 lg:pt-24">
        <div className="mx-auto max-w-3xl bg-slate-100 p-2 transition-colors max-md:pt-42 max-sm:pt-36 sm:p-4 md:my-4 md:rounded-lg md:border-2 md:border-slate-400/40 dark:bg-slate-800">
          <div className="flex gap-2">
            <MoveDiscImage type={move?.type.name} />

            <div>
              <h1 className="text-2xl font-bold capitalize">
                {move?.name.split("-").join(" ") ?? "Loading..."}
              </h1>

              <MoveInfoDisplay move={move ?? null} />
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
