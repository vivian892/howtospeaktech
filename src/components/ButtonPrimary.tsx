import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

const ButtonPrimary: React.FC<ButtonProps> = ({
  text,
  onClick,
  icon,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 px-4 py-2 text-white bg-[#30BFAB] rounded-lg 
        hover:bg-[#28a394] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed 
        ${className}`}
    >
      <span>{text}</span>
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default ButtonPrimary;
