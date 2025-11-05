import React from 'react';
import tusentiImage from '@/assets/tusenti-banner.png';

export const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-start gap-10 w-full max-sm:gap-[30px]">
      <h1 className="w-full text-[#181818] text-5xl font-bold leading-[57.6px] text-left max-md:text-4xl max-sm:text-3xl">
        Powering Mobile Money Innovation: How Vontech Group is Building a Secure and Scalable AWS Infrastructure for Tusenti
      </h1>
      <img
        src={tusentiImage}
        alt="Tusenti AWS Infrastructure Banner"
        className="w-full h-auto rounded-[30px] object-contain"
      />
    </section>
  );
};

export default HeroSection;