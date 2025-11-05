import React from 'react';
import ctaBg from '@/assets/cta_bg.png';

interface CTASectionProps {
  title: React.ReactNode;
  buttonText: string;
  onButtonClick?: () => void;
  className?: string;
}

const CTASection: React.FC<CTASectionProps> = ({ 
  title, 
  buttonText, 
  onButtonClick,
  className = ""
}) => {
  return (
    <section 
      className={`flex flex-col justify-center items-center gap-2.5 w-full px-20 py-10 max-md:p-10 max-sm:px-5 max-sm:py-[30px] bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url(${ctaBg})` }}
    >
      <div className="flex flex-col justify-center items-center gap-10 w-full">
        <div className="w-[868px] text-center text-4xl font-bold leading-[45px] max-md:w-full max-md:text-[28px] max-sm:text-2xl max-sm:w-full text-white">
          {title}
        </div>
        <button 
          className="flex justify-center items-center gap-2 cursor-pointer bg-[#FFE21B] px-8 py-3 rounded-[20px] max-sm:px-6 max-sm:py-2.5 hover:bg-[#FFD700] transition-colors"
          onClick={onButtonClick}
        >
          <span className="text-[#181818] text-xl font-bold leading-[30px] max-sm:text-lg">
            {buttonText}
          </span>
        </button>
      </div>
    </section>
  );
};

export default CTASection;
