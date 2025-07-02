import { useNavigate, useRouter } from "@tanstack/react-router";
import {
  ArrowLeftStartOnRectangleIcon,
  ArrowPathIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

import Button from "@/components/button/Button.tsx";

const ErrorMessage = ({ errors = [] }: { errors: string[] }) => {
  const router = useRouter();
  const navigate = useNavigate();

  return (
    <div className="fixed flex h-screen w-full items-center justify-center">
      <div className="flex min-h-screen w-full flex-col justify-between p-4 pb-16 transition-[background-color] md:relative md:min-h-60 md:max-w-2xl md:rounded-xl md:bg-base-200 md:shadow-md dark:shadow-none dark:md:bg-base-800">
        <div className="mt-4 sm:mt-22 md:mt-2">
          <div className="mb-2 flex items-center gap-2">
            <ExclamationCircleIcon className="size-8" />

            <h1 className="text-2xl font-semibold">Something went wrong</h1>
          </div>

          {[...new Set(errors)].map((error, index) => (
            <p
              key={index}
              className="text-lg font-semibold text-base-600 dark:text-base-400"
            >
              {error}
            </p>
          ))}
        </div>

        <div className="fixed right-4 bottom-18 mt-6 flex space-x-2 sm:bottom-4 md:absolute">
          <Button
            onClick={() => void router.invalidate()}
            className="flex items-center gap-2 px-4"
          >
            <ArrowPathIcon className="size-4" />
            Try again
          </Button>

          <Button
            onClick={() => void navigate({ to: "/" })}
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
