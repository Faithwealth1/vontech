import React from 'react';

interface HeroSectionProps {
  title: string;
  imageUrl: string;
  imageAlt?: string;
}

export const HeroSectionfarmer: React.FC<HeroSectionProps> = ({ 
  title, 
  imageUrl, 
  imageAlt = "" 
}) => {
  return (
    <header className="flex flex-col items-start gap-10 self-stretch">
      <h1 className="self-stretch text-[#181818] text-5xl font-bold leading-[57.6px] max-md:text-4xl max-sm:text-[28px] max-sm:leading-[30.8px]">
        {title}
      </h1>
      <img
        src={imageUrl}
        alt={imageAlt}
        className="w-full h-auto max-w-screen-xl aspect-[1280/533] rounded-[30px]"
      />
    </header>
  );
};

export default HeroSectionfarmer;