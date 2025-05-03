import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";

import { useOutsideClick } from "@/hooks/useOutsideClick.ts";
import ThemeSwitcher from "@/components/settings-menu/ThemeSwitcher.tsx";
import VolumeSlider from "@/components/settings-menu/VolumeSlider.tsx";

const menuVariants = {
  hidden: {
    x: "var(--x-from-container, 0px)", // for sm-
    y: "var(--y-from-container, 0px)", // for sm+
    opacity: 0,
    transition: { type: "spring", bounce: 0, duration: 0.3 },
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};

const SettingsMenu = ({ onClose }: { onClose: () => void }) => {
  // A custom hook to detect clicks outside the menu
  const ref = useOutsideClick(onClose);

  // Close the menu when the user is scrolling
  useEffect(() => {
    window.addEventListener("scroll", onClose);
    return () => window.removeEventListener("scroll", onClose);
  }, [onClose]);

  return createPortal(
    <motion.div
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      ref={ref}
      className="fixed top-0 right-0 z-20 flex touch-none flex-col justify-end border-l border-slate-400 bg-slate-100/80 py-2 backdrop-blur-md max-sm:bottom-16 max-sm:pb-8 max-sm:[--x-from-container:50px] max-sm:[--x-from-item:20px] sm:top-24 sm:right-12 sm:rounded-b-xl sm:border-r sm:border-b sm:shadow-lg sm:[--y-from-container:-50px] sm:[--y-from-item:-20px] md:right-24 dark:border-slate-600 dark:bg-slate-900/80 dark:shadow-none"
    >
      <ThemeSwitcher onClose={onClose} />

      <VolumeSlider />
    </motion.div>,
    document.getElementById("app-layout")!,
  );
};
export default SettingsMenu;
