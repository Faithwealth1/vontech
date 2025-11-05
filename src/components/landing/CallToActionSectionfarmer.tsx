import React, { useState } from 'react';

interface CallToActionSectionProps {
  title: React.ReactNode;
  description: string;
  ctaTitle: React.ReactNode;
  ctaDescription: string;
  buttonText: string;
}

export const CallToActionSection: React.FC<CallToActionSectionProps> = ({
  title,
  description,
  ctaTitle,
  ctaDescription,
  buttonText
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleContactClick = () => {
    // Simple contact functionality - could be enhanced with a modal or form
    const email = 'contact@vontech.com';
    const subject = 'IoT and AWS Solutions Inquiry';
    const body = 'Hi, I would like to learn more about your IoT and AWS solutions.';
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="flex flex-col items-start gap-10 self-stretch">
      <div className="flex flex-col items-start gap-5 self-stretch">
        <h2 className="self-stretch text-4xl font-bold leading-[45px] max-md:text-[28px] max-sm:text-2xl">
          {typeof title === 'string' ? (
            <span className="bg-gradient-to-r from-[#294C3C] to-[#097484] bg-clip-text text-transparent">
              {title}
            </span>
          ) : (
            title
          )}
        </h2>
        <p className="self-stretch text-[#181818] text-xl font-normal leading-[30px] max-md:text-lg max-sm:text-base">
          {description}
        </p>
      </div>
      <div className="self-stretch text-[#181818] text-xl font-normal leading-[30px] max-md:text-lg max-sm:text-base">
        <div className="text-2xl font-bold max-md:text-xl max-sm:text-lg">
          {typeof ctaTitle === 'string' ? (
            <span className="bg-gradient-to-r from-[#294C3C] to-[#097484] bg-clip-text text-transparent">
              {ctaTitle}
            </span>
          ) : (
            ctaTitle
          )}
        </div>
        {ctaDescription}
      </div>
      <button
        onClick={handleContactClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`flex justify-center items-center gap-2 cursor-pointer transition-all duration-300 ease-in-out px-8 py-3 rounded-[20px] max-sm:w-fit max-sm:px-6 max-sm:py-2.5 ${
          isHovered 
            ? 'bg-[#F5D700] transform scale-105 shadow-lg' 
            : 'bg-[#FFE21B]'
        }`}
        aria-label="Contact us about IoT and AWS solutions"
      >
        <span className="text-[#181818] text-xl font-bold leading-[30px] max-md:text-lg max-sm:text-base">
          {buttonText}
        </span>
      </button>
    </section>
  );
};

export default CallToActionSection;