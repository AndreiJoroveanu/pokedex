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
      className={`border py-2 rounded-full shadow-md enabled:hover:shadow-lg transition-shadow ${selectedStyle} ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
