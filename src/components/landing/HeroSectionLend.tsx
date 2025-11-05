import React from 'react';

interface HeroSectionProps {
  title: string;
  imageSrc: string;
}

export const HeroSectionLend: React.FC<HeroSectionProps> = ({ title, imageSrc }) => {
  return (
    <header className="w-full text-5xl text-[#181818] font-bold leading-[58px] max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
      <h1 className="text-[#181818] max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
        {title}
      </h1>
      <img
        src={imageSrc}
        alt="Case study illustration"
        className="aspect-[2.99] object-contain w-full mt-10 rounded-[30px] max-md:max-w-full"
      />
    </header>
  );
};
export default HeroSectionLend;