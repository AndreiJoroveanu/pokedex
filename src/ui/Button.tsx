import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  style?: "normal" | "indigo" | "gold";
  className?: string;
  children: ReactNode;
}

const Button = ({
  onClick,
  disabled = false,
  style = "normal",
  className = "",
  children,
}: ButtonProps) => {
  // Default styling (for "normal")
  let buttonStyle =
    "border-2 border-slate-400/30 bg-slate-100 enabled:hover:bg-slate-400/20 dark:bg-slate-800";

  // Override styling depending on the style prop
  switch (style) {
    case "indigo":
      buttonStyle =
        "bg-linear-to-br from-[#8BC6EC] to-[#9599E2] text-slate-700 enabled:hover:opacity-90";
      break;
    case "gold":
      buttonStyle =
        "bg-linear-to-tr from-[#FBAB7E] to-[#F7CE68] text-slate-700 enabled:hover:opacity-90";
      break;
  }

  // This allows component callers to override a default rounded value
  if (!className?.includes("rounded-")) className += " rounded-xl";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`cursor-pointer py-2 font-semibold shadow-md transition-[background-color] enabled:hover:shadow-lg ${buttonStyle} ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
