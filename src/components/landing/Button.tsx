import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseClasses = 'flex justify-center items-center gap-2 cursor-pointer rounded-[20px] font-bold transition-all duration-200 hover:scale-105';
  
  const variantClasses = {
    primary: 'bg-[#FFE21B] text-[#181818] hover:bg-[#E6CB18]',
    secondary: 'bg-transparent border border-white text-white hover:bg-white hover:text-[#181818]'
  };
  
  const sizeClasses = {
    sm: 'px-5 py-2 text-base',
    md: 'px-6 py-2.5 text-lg',
    lg: 'px-8 py-3 text-xl'
  };

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
