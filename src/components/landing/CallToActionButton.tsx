import React, { useState } from 'react';

interface CallToActionButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const CallToActionButton: React.FC<CallToActionButtonProps> = ({ 
  children, 
  onClick 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default action - could open a contact form or navigate
      window.open('mailto:contact@vontech.com', '_blank');
    }
  };

  return (
    <div className="flex justify-start w-full mt-10">
      <button
        className={`inline-flex justify-center items-center gap-2 text-xl text-[#181818] font-semibold bg-[#FFE21B] px-8 py-3 rounded-[20px] max-md:px-5 transition-all duration-200 ${
          isHovered ? 'transform scale-105 shadow-lg' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        type="button"
        aria-label="Contact Vontech"
      >
        <span className="text-[#181818] whitespace-nowrap">
          {children}
        </span>
      </button>
    </div>
  );
};
export default CallToActionButton;