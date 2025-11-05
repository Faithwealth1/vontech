import React from 'react';

const HeroSectionbamboo = () => {
  return (
    <section className="justify-center items-stretch self-center z-0 flex w-[1280px] max-w-full flex-col overflow-hidden bg-[#FBFBFB] pt-[135px] px-20 max-lg:pt-[130px] max-md:pt-[90px] max-md:px-5">
      <div className="w-full text-[#181818] max-md:max-w-full">
        <header className="w-full text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
          <h1 className="text-[#181818] max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
            Accelerating Fintech Innovation: How Vontech Group Leveraged AWS
            to Build Bamboo's Stock Recommender POC
          </h1>
          <img
            src="dream.png"
            alt="AWS Architecture Diagram for Bamboo's Stock Recommender"
            className="aspect-[2.99] object-contain w-full mt-10 rounded-[30px]"
          />
        </header>
        <p className="text-[#181818] text-xl font-medium leading-[30px] mt-10 max-md:max-w-full">
          Bamboo, a fintech company focused on providing access to investment
          opportunities, sought to develop a proof of concept (POC) for a
          stock recommender system. Vontech Group leveraged the scalability
          and flexibility of Amazon Web Services (AWS) to rapidly build and
          deploy this POC, enabling Bamboo to explore new avenues for customer
          engagement and product development. This case study details the
          architecture and implementation of that solution.
        </p>
      </div>
    </section>
  );
};

export default HeroSectionbamboo;
