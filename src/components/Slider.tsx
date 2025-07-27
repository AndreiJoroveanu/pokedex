import type { InputHTMLAttributes } from "react";
import { motion } from "motion/react";

const SLIDER_WIDTH = 192;
const SLIDER_HEIGHT = 24;

// Adjust width/left to compensate for thumb width and 2px padding
const THUMB_OFFSET = 28; // Thumb width (24px) + padding (2px each side)
const PADDING_OFFSET = 2;

const Slider = ({
  value,
  min = 0,
  max = 100,
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) => {
  // Calculate percentage progress between min and max
  const percent = (Number(value) - Number(min)) / (Number(max) - Number(min));

  return (
    <div className="relative h-6 w-48">
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        {...rest}
        className="absolute inset-0 cursor-grab appearance-none rounded-full bg-base-500/50 px-0.5 active:cursor-grabbing [&::-moz-range-thumb]:opacity-0 [&::-webkit-slider-thumb]:opacity-0"
      />

      {/* Filled track */}
      <motion.div
        layout
        style={{
          // Slider Height = Thumb Width
          width: (SLIDER_WIDTH - THUMB_OFFSET) * percent + SLIDER_HEIGHT,
          borderRadius: `${SLIDER_HEIGHT / 2 - PADDING_OFFSET}px`,
        }}
        transition={{ duration: 0.1 }}
        className="pointer-events-none absolute top-0.5 left-0.5 h-[calc(100%-4px)] bg-blue-500"
      />

      {/* Thumb */}
      <motion.div
        layout
        style={{
          left: (SLIDER_WIDTH - THUMB_OFFSET) * percent + PADDING_OFFSET,
        }}
        transition={{ duration: 0.1 }}
        className="pointer-events-none absolute top-0.5 z-10 h-[calc(100%-4px)] w-6 rounded-full bg-base-700 transition-[background-color] dark:bg-base-300"
      />
    </div>
  );
};
export default Slider;
