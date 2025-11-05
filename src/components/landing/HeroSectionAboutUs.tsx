import React from "react";

const HeroSectionAboutUs: React.FC = () => {
  return (
    <section className="flex flex-col justify-center overflow-hidden relative z-0 min-h-[731px] w-full text-white px-20 py-[268px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <img
        src="about us bg.png"
        alt="Hero background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="relative flex w-[690px] max-w-full flex-col items-stretch justify-center">
        <h1 className="text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
          We Empower Businesses Through Innovation
        </h1>
        <p className="text-xl font-medium leading-[30px] mt-5 max-md:max-w-full">
          At Vontech Group, we are redefining how organizations leverage
          technology to achieve their goals
        </p>
      </div>
    </section>
  );
};

export default HeroSectionAboutUs;
