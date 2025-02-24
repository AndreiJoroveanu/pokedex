import { useCallback, useEffect, useRef } from "react";

const SCROLL_KEY = "scroll-position";

export const useScrollRestoration = () => {
  const debounceTimeout = useRef<number | null>(null);

  useEffect(() => {
    const updateScroll = () => {
      // Refresh a timeout to set the current scroll in sessionStorage
      // with a small delay after the user stops scrolling (debounced)
      if (window.scrollY > 0) {
        if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

        debounceTimeout.current = window.setTimeout(() => {
          sessionStorage.setItem(SCROLL_KEY, window.scrollY.toString());
          debounceTimeout.current = null;
        }, 100);
      }
    };

    // Add the scroll tracking event listener
    window.addEventListener("scroll", updateScroll);

    // Restore the scroll from sessionStorage after a small delay to let React Virtuoso render
    const storedScroll = sessionStorage.getItem(SCROLL_KEY);
    if (storedScroll)
      setTimeout(() => window.scrollTo(0, parseInt(storedScroll, 10)), 100);

    return () => {
      // Remove the scroll tracking event listener
      window.removeEventListener("scroll", updateScroll);

      // Clear debounce timer before unmounting
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    };
  }, []);

  // Function to reset scroll position (used when the filters change)
  return useCallback(() => sessionStorage.setItem(SCROLL_KEY, "0"), []);
};
