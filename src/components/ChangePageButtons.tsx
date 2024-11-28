import { TfiControlSkipBackward, TfiControlSkipForward } from "react-icons/tfi";

interface ChangePageButtonsProps {
  currentPage: number;
  changeCurrentPage: (page: number) => void;
  noOfPages: number;
  noOfSideButtons: number;
}

const ChangePageButtons = ({
  currentPage,
  changeCurrentPage,
  noOfPages,
  noOfSideButtons,
}: ChangePageButtonsProps) => {
  const getPaginationButtons = () => {
    const buttons: number[] = [];
    for (
      let page = currentPage - noOfSideButtons;
      page <= currentPage + noOfSideButtons;
      page++
    ) {
      if (page > 0 && page <= noOfPages) buttons.push(page);
      else buttons.push(0);
    }
    return buttons;
  };

  return (
    <div className="flex gap-2 sm:gap-4">
      <button
        onClick={() => changeCurrentPage(1)}
        disabled={currentPage === 1}
        className="border w-8 h-8 sm:w-12 sm:h-12 flex justify-center items-center rounded-full disabled:opacity-25 disabled:cursor-not-allowed enabled:hover:bg-gray-100 shadow-md enabled:hover:shadow-lg transition-shadow"
      >
        <TfiControlSkipBackward />
      </button>

      {getPaginationButtons().map((page, index) =>
        page ? (
          <button
            key={index}
            onClick={() => changeCurrentPage(page)}
            className={`border w-8 h-8 sm:w-12 sm:h-12 flex justify-center items-center rounded-full shadow-md ${page === currentPage ? "bg-black text-white cursor-default" : "hover:bg-gray-100 hover:shadow-lg"} transition-shadow`}
          >
            {page}
          </button>
        ) : (
          // Empty divs so that the rest of the buttons can remain centered
          <div key={index} className="w-8 h-8 sm:w-12 sm:h-12" />
        ),
      )}

      <button
        onClick={() => changeCurrentPage(noOfPages)}
        disabled={currentPage === noOfPages}
        className="border w-8 h-8 sm:w-12 sm:h-12 flex justify-center items-center rounded-full disabled:opacity-25 disabled:cursor-not-allowed enabled:hover:bg-gray-100 shadow-md enabled:hover:shadow-lg transition-shadow"
      >
        <TfiControlSkipForward />
      </button>
    </div>
  );
};
export default ChangePageButtons;
