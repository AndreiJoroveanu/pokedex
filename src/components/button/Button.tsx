import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "normal" | "indigo" | "gold";
  className?: string;
  children: ReactNode;
}

const buttonStyles = {
  normal:
    "bg-base-200 dark:bg-base-800 enabled:hover:bg-base-300 dark:enabled:hover:bg-base-700",
  indigo:
    "bg-linear-to-br from-[#8BC6EC] to-[#9599E2] bg-origin-border text-base-700 enabled:hover:brightness-115",
  gold: "bg-linear-to-tr from-[#FBAB7E] to-[#F7CE68] bg-origin-border text-base-700 enabled:hover:brightness-115",
};

const Button = ({
  variant = "normal",
  className = "",
  children,
  ...props
}: ButtonProps) => (
  <button
    className={`cursor-pointer py-2 font-semibold shadow-sm transition-[background-color_shadow_filter] enabled:hover:shadow-md dark:shadow-none ${buttonStyles[variant]} ${className} ${!className?.includes("rounded-") ? "rounded-xl" : ""}`.trimEnd()}
    {...props}
  >
    {children}
  </button>
);
export default Button;
