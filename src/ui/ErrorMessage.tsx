import { useNavigate } from "react-router";
import {
  ArrowLeftStartOnRectangleIcon,
  ArrowPathIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

import Button from "@/ui/Button.tsx";

const ErrorMessage = ({ errors = [] }: { errors: string[] }) => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex min-h-screen w-full flex-col justify-between bg-slate-100 p-4 transition-colors md:min-h-60 md:max-w-2xl md:rounded-lg md:border-2 md:border-slate-400/40 dark:bg-slate-800">
        <div className="mt-26 sm:mt-32 md:mt-2">
          <div className="mb-2 flex items-center gap-2">
            <ExclamationCircleIcon className="size-8" />

            <h1 className="text-2xl font-semibold">Something went wrong</h1>
          </div>

          {[...new Set(errors)].map((error, index) => (
            <p
              key={index}
              className="text-lg font-semibold text-slate-500 dark:text-slate-400"
            >
              {error}
            </p>
          ))}
        </div>

        <div className="mt-6 flex justify-end space-x-2">
          <Button
            onClick={() => void navigate(0)}
            className="flex items-center gap-2 px-4"
          >
            <ArrowPathIcon className="size-4" />
            Try again
          </Button>

          <Button
            onClick={() => void navigate("/pokedex")}
            className="flex items-center gap-2 px-4"
          >
            <ArrowLeftStartOnRectangleIcon className="size-4" />
            Go home
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ErrorMessage;
