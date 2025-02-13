import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

const ButtonSecondary: React.FC<ButtonProps> = ({
  text,
  onClick,
  icon,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 px-4 py-2 text-black bg-white border border-gray-300 
        rounded-lg hover:bg-gray-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed 
        ${className}`}
    >
      <span>{text}</span>
      {icon && <span className="text-[#30BFAB]">{icon}</span>}
    </button>
  );
};

export default ButtonSecondary;
