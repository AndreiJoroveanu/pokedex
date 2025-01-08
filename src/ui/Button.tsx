import { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  isSelected?: boolean;
  children: ReactNode;
}

const Button = ({
  onClick,
  disabled = false,
  isSelected = false,
  className = "",
  children,
}: ButtonProps) => {
  const selectedStyle = isSelected
    ? "bg-slate-800 text-slate-200 dark:bg-slate-100 dark:text-slate-800"
    : "bg-slate-100 enabled:hover:bg-slate-400/20 dark:bg-slate-800";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-full border border-slate-400/70 py-2 shadow-md transition-shadow enabled:hover:shadow-lg dark:bg-slate-800 ${selectedStyle} ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
