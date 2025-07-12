import type { MouseEvent } from "react";
import { useShallow } from "zustand/react/shallow";
import { motion, type Variants } from "motion/react";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline";

import useSettingsStore from "@/store/useSettingsStore.ts";

import Slider from "@/components/Slider.tsx";

const sliderVariants: Variants = {
  hidden: {
    y: "var(--y-from-item, 0px)",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.5, duration: 0.3 },
  },
};

const VolumeSlider = () => {
  const [volume, setVolume, isMuted, toggleMuted] = useSettingsStore(
    useShallow((state) => [
      state.volume,
      state.changeVolume,
      state.isMuted,
      state.toggleMuted,
    ]),
  );

  const displayVolume = isMuted ? 0 : volume;

  const handleToggleMute = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    toggleMuted();
  };

  return (
    <>
      <motion.div variants={sliderVariants} className="mx-6 my-4">
        <h2 className="mb-1 text-lg font-semibold">Change the App Volume</h2>

        <p className="text-sm text-base-600 transition-[color] dark:text-base-400">
          Affects the volume of Pokémon cries
        </p>
      </motion.div>

      <motion.div
        variants={sliderVariants}
        className="mx-6 mb-4 flex flex-row gap-2"
      >
        <button
          onClick={handleToggleMute}
          className="cursor-pointer rounded-lg transition-[color] hover:text-blue-600 dark:hover:text-blue-400"
        >
          {isMuted ? (
            <SpeakerXMarkIcon className="size-6" />
          ) : (
            <SpeakerWaveIcon className="size-6" />
          )}
        </button>

        <Slider
          max={10}
          value={displayVolume}
          onChange={(e) => setVolume(Number(e.target.value))}
        />

        <p className="w-10 text-end">{displayVolume * 10}%</p>
      </motion.div>
    </>
  );
};
export default VolumeSlider;
