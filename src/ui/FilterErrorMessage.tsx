import { useNavigate } from "react-router";

import Button from "./Button.tsx";

const FilterErrorMessage = ({ type }: { type: string }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center lg:h-screen">
      <h2 className="text-3xl font-bold">No {type} Found</h2>

      <p className="mb-2 font-semibold text-slate-600 dark:text-slate-400">
        Try other filtering options or another search query
      </p>

      <Button
        onClick={() => void navigate("/pokedex/pokemon")}
        style="indigo"
        className="w-full"
      >
        Clear Filtering
      </Button>
    </div>
  );
};
export default FilterErrorMessage;
