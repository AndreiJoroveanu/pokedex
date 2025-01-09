import { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  isSelected?: boolean;
  className?: string;
  children: ReactNode;
}

const Button = ({
  onClick,
  disabled = false,
  isSelected = false,
  className = "",
  children,
}: ButtonProps) => {
  // Depending on if a button is selected, display different styling
  const selectedStyle = isSelected
    ? "bg-gradient-to-br from-[#8BC6EC] to-[#9599E2] text-slate-700 enabled:hover:opacity-90"
    : "border-2 border-slate-400/30 bg-slate-100 enabled:hover:bg-slate-400/20 dark:bg-slate-800";

  // This allows component callers to override a default rounded value
  if (!className?.includes("rounded-")) className += " rounded-xl";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`py-2 font-semibold shadow-md transition-shadow enabled:hover:shadow-lg ${selectedStyle} ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
