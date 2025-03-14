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
    "bg-slate-300 dark:bg-slate-700 enabled:hover:brightness-95 dark:enabled:hover:brightness-115",
  indigo:
    "bg-linear-to-br from-[#8BC6EC] to-[#9599E2] bg-origin-border text-slate-700 enabled:hover:brightness-115",
  gold: "bg-linear-to-tr from-[#FBAB7E] to-[#F7CE68] bg-origin-border text-slate-700 enabled:hover:brightness-115",
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
    className={`cursor-pointer py-2 font-semibold shadow-md transition-[background-color_shadow] enabled:hover:shadow-lg dark:shadow-none ${buttonStyles[style]} ${className} ${!className?.includes("rounded-") ? "rounded-xl" : ""}`.trim()}
  >
    {children}
  </button>
);
export default Button;
