import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";

import { useUrlParams } from "../hooks/useUrlParams.ts";

import Button from "./Button.tsx";

interface ButtonProps {
  noOfPages: number;
  noOfSideButtons: number;
}

const ChangePageButtons = ({ noOfPages, noOfSideButtons }: ButtonProps) => {
  const { getUrlParam, setUrlParam } = useUrlParams();
  const currentPage = Number(getUrlParam("page")) || 1;

  const setCurrentPage = (page: number) => setUrlParam("page", page.toString());

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
        className="xs:size-12 flex size-8 items-center justify-center rounded-full disabled:cursor-not-allowed disabled:opacity-25"
      >
        <ChevronDoubleLeftIcon className="size-4" />
      </Button>

      {/* Page buttons */}
      {getPaginationButtons().map((page, index) =>
        // If the page exists (has a positive number)
        page > 0 ? (
          <Button
            key={page}
            onClick={() => setCurrentPage(page)}
            disabled={page === currentPage}
            style={page === currentPage ? "indigo" : "normal"}
            className={`xs:size-12 ${index === 0 || index === noOfSideButtons * 2 ? "max-sm:hidden" : ""} flex size-8 items-center justify-center rounded-full disabled:cursor-default`}
          >
            {page}
          </Button>
        ) : (
          // Empty divs so the rest of the buttons can stay in place
          <div
            key={page}
            className={`xs:size-12 ${index === 0 || index === noOfSideButtons * 2 ? "max-sm:hidden" : ""} size-8`}
          />
        ),
      )}

      {/* Skip to the last page */}
      <Button
        onClick={() => setCurrentPage(noOfPages)}
        disabled={currentPage === noOfPages}
        className="xs:size-12 flex size-8 items-center justify-center rounded-full disabled:cursor-not-allowed disabled:opacity-25"
      >
        <ChevronDoubleRightIcon className="size-4" />
      </Button>
    </div>
  );
};
export default ChangePageButtons;
