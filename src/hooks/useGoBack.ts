import { useCanGoBack, useRouter } from "@tanstack/react-router";

export const useGoBack = () => {
  const router = useRouter();
  const goBack = () => void router.history.back();
  const canGoBack = useCanGoBack();

  return { goBack, canGoBack };
};
