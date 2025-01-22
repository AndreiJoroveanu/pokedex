import {
  HiMiniChevronDoubleLeft,
  HiMiniChevronDoubleRight,
} from "react-icons/hi2";

import { useUrl } from "../hooks/useUrl.ts";

import Button from "./Button.tsx";

interface ButtonProps {
  noOfPages: number;
  noOfSideButtons: number;
}

const ChangePageButtons = ({ noOfPages, noOfSideButtons }: ButtonProps) => {
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
      // If the page no. is outside the limits, return a negative
      // value instead, which will become a placeholder div
      buttons.push(page > 0 && page <= noOfPages ? page : negativeIndex);
    }

    return buttons;
  };

  return (
    <div className="flex gap-2 sm:gap-4">
      {/* Skip to the beginning page */}
      <Button
        onClick={() => setCurrentPage(1)}
        disabled={currentPage === 1}
        className="flex h-8 w-8 items-center justify-center rounded-full disabled:cursor-not-allowed disabled:opacity-25 sm:h-12 sm:w-12"
      >
        <HiMiniChevronDoubleLeft size={20} />
      </Button>

      {/* Page buttons */}
      {getPaginationButtons().map((page) =>
        // If the page exists (has a positive number)
        page > 0 ? (
          <Button
            key={page}
            onClick={() => setCurrentPage(page)}
            disabled={page === currentPage}
            isSelected={page === currentPage}
            className="flex h-8 w-8 items-center justify-center rounded-full disabled:cursor-default sm:h-12 sm:w-12"
          >
            {page}
          </Button>
        ) : (
          // Empty divs so the rest of the buttons can stay in place
          <div key={page} className="h-8 w-8 sm:h-12 sm:w-12" />
        ),
      )}

      {/* Skip to the last page */}
      <Button
        onClick={() => setCurrentPage(noOfPages)}
        disabled={currentPage === noOfPages}
        className="flex h-8 w-8 items-center justify-center rounded-full disabled:cursor-not-allowed disabled:opacity-25 sm:h-12 sm:w-12"
      >
        <HiMiniChevronDoubleRight size={20} />
      </Button>
    </div>
  );
};
export default ChangePageButtons;
