import { TfiControlSkipBackward, TfiControlSkipForward } from "react-icons/tfi";

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
    <div className="flex gap-4">
      <button
        onClick={() => setCurrentPage(1)}
        disabled={currentPage === 1}
        className="border w-12 h-12 flex justify-center items-center rounded-full disabled:opacity-25 enabled:hover:bg-gray-100 shadow-md enabled:hover:shadow-lg transition-shadow"
      >
        <TfiControlSkipBackward />
      </button>

      {getPaginationButtons().map((page, index) =>
        page ? (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={`border w-12 h-12 flex justify-center items-center rounded-full shadow-md ${page === currentPage ? "bg-black text-white cursor-default" : "hover:bg-gray-100 hover:shadow-lg"} transition-shadow`}
          >
            {page}
          </button>
        ) : (
          <div key={index} className="w-12 h-12"></div>
        ),
      )}

      <button
        onClick={() => setCurrentPage(noOfPages)}
        disabled={currentPage === noOfPages}
        className="border w-12 h-12 flex justify-center items-center rounded-full disabled:opacity-25 enabled:hover:bg-gray-100 shadow-md enabled:hover:shadow-lg transition-shadow"
      >
        <TfiControlSkipForward />
      </button>
    </div>
  );
};
export default ChangePageButtons;
