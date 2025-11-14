import React from "react";

const HeroSectionAboutUs: React.FC = () => {
  return (
    <section className="flex flex-col justify-center overflow-hidden relative z-0 min-h-[731px] w-full text-white px-20 py-[268px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <img
        src="/Heroservice.png"
        alt="Hero background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="relative flex w-[690px] max-w-full flex-col items-stretch justify-center">
        {/* Overlay text removed per request (image contains the hero text) */}
      </div>
    </section>
  );
};

export default HeroSectionAboutUs;
