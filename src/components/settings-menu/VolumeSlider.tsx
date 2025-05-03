import { MouseEvent } from "react";
import { useShallow } from "zustand/react/shallow";
import { motion } from "motion/react";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline";

import useAppStore from "@/store/useAppStore.ts";

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
  const [volume, setVolume] = useAppStore(
    useShallow((state) => [state.volume, state.changeVolume]),
  );

  const handleToggleMute = (e: MouseEvent<HTMLDivElement>) => {
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
        <div
          onClick={handleToggleMute}
          className="cursor-pointer transition-[color] hover:text-blue-600 dark:hover:text-blue-400"
        >
          {volume > 0 ? (
            <SpeakerWaveIcon className="size-6" />
          ) : (
            <SpeakerXMarkIcon className="size-6" />
          )}
        </div>

        <input
          type="range"
          max="10"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="h-6 w-48 cursor-grab appearance-none rounded-full bg-slate-500/50 px-0.5 active:cursor-grabbing [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:bg-slate-700 dark:[&::-moz-range-thumb]:bg-slate-300 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-none [&::-webkit-slider-thumb]:bg-slate-700 dark:[&::-webkit-slider-thumb]:bg-slate-300"
        />

        <p className="w-10 text-end">{volume * 10}%</p>
      </motion.div>
    </>
  );
};
export default VolumeSlider;
