import { useCanGoBack, useRouter } from "@tanstack/react-router";

export const useGoBack = () => {
  const router = useRouter();
  const canGoBack = useCanGoBack();

  return { goBack: () => void router.history.back(), canGoBack };
};
