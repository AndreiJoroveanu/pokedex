import { useCallback, useEffect, useRef } from "react";

const SCROLL_KEY = "scroll-position";

export const useScrollRestoration = (isLoaded: boolean) => {
  const debounceTimeout = useRef<number | null>(null);

  // Refresh a timeout to set the current scroll in sessionStorage
  // with a small delay after the user stops scrolling (debounced)
  const updateScroll = useCallback(() => {
    if (window.scrollY > 0) {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

      debounceTimeout.current = window.setTimeout(() => {
        sessionStorage.setItem(SCROLL_KEY, window.scrollY.toString());
        debounceTimeout.current = null;
      }, 100);
    }
  }, []);

  // Restore the scroll from sessionStorage once the React Virtuoso grid rendered
  const restoreScroll = useCallback(() => {
    const storedScroll = sessionStorage.getItem(SCROLL_KEY);
    if (storedScroll && isLoaded)
      window.scrollTo(0, parseInt(storedScroll, 10));
  }, [isLoaded]);

  useEffect(() => {
    restoreScroll();

    // Add the scroll tracking event listener
    window.addEventListener("scroll", updateScroll);

    return () => {
      // Remove the scroll tracking event listener
      window.removeEventListener("scroll", updateScroll);

      // Clear debounce timer before unmounting
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    };
  }, [restoreScroll, updateScroll]);
};

// Function to reset scroll position
export const resetScroll = () => sessionStorage.setItem(SCROLL_KEY, "0");
