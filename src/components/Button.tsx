import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'small';
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'default',
  onClick,
  className = ''
}) => {
  const baseClasses = "flex justify-center items-center gap-2 rounded-[20px] font-semibold transition-colors";
  const variantClasses = variant === 'primary' 
    ? "bg-[#FFE21B] text-[#181818] hover:bg-[#FFE21B]/90" 
    : "bg-transparent border border-current";
  const sizeClasses = size === 'default' 
    ? "px-8 py-3 text-xl leading-[30px] max-sm:px-5 max-sm:py-2 max-sm:text-base"
    : "px-5 py-2 text-base";

  return (
    <button 
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
