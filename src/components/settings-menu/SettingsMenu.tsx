import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, type Variants } from "motion/react";

import { useOutsideClick } from "@/hooks/useOutsideClick.ts";

import ThemeSwitcher from "@/components/settings-menu/ThemeSwitcher.tsx";
import VolumeSlider from "@/components/settings-menu/VolumeSlider.tsx";

const menuVariants: Variants = {
  hidden: {
    y: "var(--y-from-container, 0px)",
    opacity: 0,
    transition: { type: "spring", bounce: 0, duration: 0.3 },
  },
  visible: {
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
      className="fixed right-2 z-20 flex touch-none flex-col rounded-xl bg-base-200/80 py-2 shadow-lg backdrop-blur-md max-sm:bottom-18 max-sm:[--y-from-container:50px] max-sm:[--y-from-item:20px] sm:top-20 sm:right-12 sm:[--y-from-container:-50px] sm:[--y-from-item:-20px] dark:bg-base-800/80 dark:shadow-none"
    >
      <ThemeSwitcher onClose={onClose} />

      <VolumeSlider />
    </motion.div>,
    document.getElementById("app-layout")!,
  );
};
export default SettingsMenu;
