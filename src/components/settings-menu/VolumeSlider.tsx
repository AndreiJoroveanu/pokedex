import type { MouseEvent } from "react";
import { useShallow } from "zustand/react/shallow";
import { motion } from "motion/react";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline";

import useSettingsStore from "@/store/useSettingsStore.ts";

import Slider from "@/components/Slider.tsx";

const sliderVariants = {
  hidden: {
    x: "var(--x-from-item, 0px)", // for sm-
    y: "var(--y-from-item, 0px)", // for sm+
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.5, duration: 0.3 },
  },
};

const VolumeSlider = () => {
  const [volume, setVolume] = useSettingsStore(
    useShallow((state) => [state.volume, state.changeVolume]),
  );

  const handleToggleMute = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setVolume(volume === 0 ? 5 : 0);
  };

  return (
    <>
      <motion.p
        variants={sliderVariants}
        className="mx-6 my-4 text-lg font-semibold"
      >
        Change the App Volume
      </motion.p>

      <motion.div
        variants={sliderVariants}
        className="mx-6 mb-4 flex flex-row gap-2"
      >
        <button
          onClick={handleToggleMute}
          className="cursor-pointer rounded-lg transition-[color] hover:text-blue-600 dark:hover:text-blue-400"
        >
          {volume > 0 ? (
            <SpeakerWaveIcon className="size-6" />
          ) : (
            <SpeakerXMarkIcon className="size-6" />
          )}
        </button>

        <Slider
          max={10}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
        />

        <p className="w-10 text-end">{volume * 10}%</p>
      </motion.div>
    </>
  );
};
export default VolumeSlider;
