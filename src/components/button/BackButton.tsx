import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";

import { useGoBack } from "@/hooks/useGoBack.ts";

import Button from "@/components/button/Button.tsx";

const BackButton = () => {
  const { goBack, canGoBack } = useGoBack();

  return (
    canGoBack && (
      <Button
        onClick={goBack}
        variant="indigo"
        className="pointer-events-auto flex items-center gap-2 px-4"
      >
        <ArrowUturnLeftIcon className="size-4" /> Back
      </Button>
    )
  );
};
export default BackButton;
