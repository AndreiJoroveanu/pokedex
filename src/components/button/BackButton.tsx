import { memo } from "react";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";

import { useMoveBack } from "@/hooks/useMoveBack.ts";

import Button from "@/components/button/Button.tsx";

const BackButton = memo(() => {
  const moveBack = useMoveBack();

  return (
    <Button
      onClick={moveBack}
      style="indigo"
      className="pointer-events-auto flex items-center gap-2 px-4"
    >
      <ArrowUturnLeftIcon className="size-4" /> Back
    </Button>
  );
});
BackButton.displayName = "BackButton";
export default BackButton;
