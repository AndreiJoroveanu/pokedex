import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  style?: "normal" | "indigo" | "gold";
  className?: string;
  children: ReactNode;
}

const buttonStyles = {
  normal:
    "border-slate-400/30 enabled:hover:bg-slate-200 dark:enabled:hover:bg-slate-700",
  indigo:
    "border-transparent bg-linear-to-br from-[#8BC6EC] to-[#9599E2] bg-origin-border text-slate-700 enabled:hover:brightness-115",
  gold: "border-transparent bg-linear-to-tr from-[#FBAB7E] to-[#F7CE68] bg-origin-border text-slate-700 enabled:hover:brightness-115",
};

const Button = ({
  onClick,
  disabled = false,
  style = "normal",
  className = "",
  children,
}: ButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`cursor-pointer border-2 bg-slate-100 py-2 font-semibold shadow-md transition-[background-color_brightness] enabled:hover:shadow-lg dark:bg-slate-800 dark:shadow-none ${buttonStyles[style]} ${className} ${!className?.includes("rounded-") ? "rounded-xl" : ""}`}
  >
    {children}
  </button>
);
export default Button;
