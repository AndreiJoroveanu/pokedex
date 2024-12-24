import { TfiControlSkipBackward, TfiControlSkipForward } from "react-icons/tfi";
import Button from "./Button.tsx";

interface ChangePageButtonsProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  noOfPages: number;
  noOfSideButtons: number;
}

const ChangePageButtons = ({
  currentPage,
  setCurrentPage,
  noOfPages,
  noOfSideButtons,
}: ChangePageButtonsProps) => {
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

  return (
    <div className="flex gap-2 sm:gap-4">
      <Button
        onClick={() => setCurrentPage(1)}
        disabled={currentPage === 1}
        className="w-8 h-8 sm:w-12 sm:h-12 flex justify-center items-center disabled:opacity-25 disabled:cursor-not-allowed"
      >
        <TfiControlSkipBackward />
      </Button>

      {getPaginationButtons().map((page) =>
        page > 0 ? (
          <Button
            key={page}
            onClick={() => setCurrentPage(page)}
            isSelected={page === currentPage}
            className={`w-8 h-8 sm:w-12 sm:h-12 flex justify-center items-center ${page === currentPage && "cursor-default"}`}
          >
            {page}
          </Button>
        ) : (
          // Empty divs so that the rest of the buttons can remain centered
          <div key={page} className="w-8 h-8 sm:w-12 sm:h-12" />
        ),
      )}

      <Button
        onClick={() => setCurrentPage(noOfPages)}
        disabled={currentPage === noOfPages}
        className="w-8 h-8 sm:w-12 sm:h-12 flex justify-center items-center disabled:opacity-25 disabled:cursor-not-allowed"
      >
        <TfiControlSkipForward />
      </Button>
    </div>
  );
};
export default ChangePageButtons;
