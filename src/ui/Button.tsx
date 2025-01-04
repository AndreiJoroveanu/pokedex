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
    ? "bg-black text-white"
    : "bg-white enabled:hover:bg-gray-100";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-full border py-2 shadow-md transition-shadow enabled:hover:shadow-lg ${selectedStyle} ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
