import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="justify-center items-stretch z-0 flex w-full flex-col overflow-hidden bg-[#FBFBFB] pt-[220px] pb-20 px-20 max-md:max-w-full max-md:pt-[100px] max-md:px-5">
      <div className="w-full text-5xl text-[#181818] font-bold leading-[58px] max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
        <h1 className="text-[#181818] max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
          Revolutionizing Roadside Assistance: CarAid's Cloud Transformation
          with Vontech Group & AWS
        </h1>
        <img
          src="car-aid.png"
          alt="CarAid cloud transformation visualization"
          className="aspect-[2.4] object-contain w-full mt-10 rounded-[30px] max-md:max-w-full"
        />
      </div>
      <p className="text-[#181818] text-xl font-medium leading-[30px] mt-10 max-md:max-w-full">
        CarAid is an innovative startup reshaping how car owners receive
        emergency support—offering on-the-spot battery replacements, tyre
        swaps, jumpstarts, and more, all through a responsive mobile platform.
        To scale its services and deliver smarter, faster support to users,
        CarAid partnered with Vontech Group to rearchitect its infrastructure
        using AWS.
      </p>
    </section>
  );
};

export default HeroSection;
