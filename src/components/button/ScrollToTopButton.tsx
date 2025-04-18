import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline";

import Button from "@/components/button/Button.tsx";

const SCROLL_THRESHOLD = 500;

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const ScrollToTopButton = () => {
  const [hasScrolledEnough, setHasScrolledEnough] = useState(false);
  const throttleTimeout = useRef<number | null>(null);

  useEffect(() => {
    const updateScroll = () => {
      // Refresh a timeout every 200ms to set the state depending on the page scroll
      throttleTimeout.current ??= window.setTimeout(() => {
        // Set the state to true if the page scroll exceeds the specified threshold
        setHasScrolledEnough(window.scrollY > SCROLL_THRESHOLD);
        // Remove the timeout so that it can be created again
        throttleTimeout.current = null;
      }, 200);
    };

    // Add the scroll tracking event listener
    window.addEventListener("scroll", updateScroll);

    return () => {
      // Remove the scroll tracking event listener
      window.removeEventListener("scroll", updateScroll);

      // Clear throttle timer before unmounting
      if (throttleTimeout.current) clearTimeout(throttleTimeout.current);
    };
  }, []);

  return (
    <AnimatePresence>
      {hasScrolledEnough && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ type: "spring", bounce: 0, duration: 0.3 }}
          className="fixed bottom-20 left-4 z-10 sm:bottom-4 lg:left-[calc(20vw+16px)]"
        >
          <Button
            onClick={() => {
              window.scrollTo({ top: 0 });
              setHasScrolledEnough(false);
            }}
            style="gold"
            className="flex items-center gap-2 rounded-full px-4 py-4 sm:rounded-xl sm:px-3 sm:py-2"
          >
            <ChevronDoubleUpIcon className="size-5" />
            <span className="max-sm:hidden">Scroll to top</span>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default ScrollToTopButton;
