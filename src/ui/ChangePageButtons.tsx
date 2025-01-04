import { TfiControlSkipBackward, TfiControlSkipForward } from "react-icons/tfi";

import { useUrl } from "../hooks/useUrl.ts";

import Button from "./Button.tsx";

interface ChangePageButtonsProps {
  noOfPages: number;
  noOfSideButtons: number;
}

const ChangePageButtons = ({
  noOfPages,
  noOfSideButtons,
}: ChangePageButtonsProps) => {
  const { getUrl, setUrl } = useUrl();
  const currentPage = Number(getUrl("page")) || 1;
  const setCurrentPage = (page: number) => setUrl("page", page.toString());

  const getPaginationButtons = () => {
    const buttons: number[] = [];
    let negativeIndex = 0;

    for (
      let page = currentPage - noOfSideButtons;
      page <= currentPage + noOfSideButtons;
      page++
    ) {
      negativeIndex--;
      buttons.push(page > 0 && page <= noOfPages ? page : negativeIndex);
    }

    return buttons;
  };

  if (noOfPages > 1)
    return (
      <div className="flex gap-2 sm:gap-4">
        <Button
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
          className="flex h-8 w-8 items-center justify-center disabled:cursor-not-allowed disabled:opacity-25 sm:h-12 sm:w-12"
        >
          <TfiControlSkipBackward />
        </Button>

        {getPaginationButtons().map((page) =>
          page > 0 ? (
            <Button
              key={page}
              onClick={() => setCurrentPage(page)}
              isSelected={page === currentPage}
              className={`flex h-8 w-8 items-center justify-center sm:h-12 sm:w-12 ${page === currentPage && "cursor-default"}`}
            >
              {page}
            </Button>
          ) : (
            // Empty divs so that the rest of the buttons can remain centered
            <div key={page} className="h-8 w-8 sm:h-12 sm:w-12" />
          ),
        )}

        <Button
          onClick={() => setCurrentPage(noOfPages)}
          disabled={currentPage === noOfPages}
          className="flex h-8 w-8 items-center justify-center disabled:cursor-not-allowed disabled:opacity-25 sm:h-12 sm:w-12"
        >
          <TfiControlSkipForward />
        </Button>
      </div>
    );
};
export default ChangePageButtons;
