import React from 'react';

const MissionVisionSection: React.FC = () => {
  return (
    <section className="justify-center items-stretch z-0 flex w-full flex-col overflow-hidden text-center bg-white pt-[60px] pb-[120px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <div className="flex w-full items-center gap-[40px_80px] justify-center flex-wrap max-md:max-w-full">
        <article className="self-stretch flex min-w-60 flex-col w-[350px] my-auto">
          <h2 className="text-4xl font-bold leading-none bg-clip-text">
            Vision
          </h2>
          <p className="text-[#393C3D] text-xl font-medium leading-[30px] mt-4">
            To be the premier cloud solutions provider, recognized for our
            expertise, and unwavering commitment to customer success.
          </p>
        </article>
        <div className="aspect-[0.01] object-contain w-px stroke-[1px] stroke-[#E0E0E0] self-stretch shrink-0 my-auto border-l border-[#E0E0E0]" />
        <article className="self-stretch flex min-w-60 flex-col w-[350px] my-auto">
          <h2 className="text-4xl font-bold leading-none bg-clip-text">
            Mission
          </h2>
          <p className="text-[#393C3D] text-xl font-medium leading-[30px] mt-4">
            To empower businesses with cutting-edge cloud solutions, enabling
            them to achieve greater agility, efficiency, and growth.
          </p>
        </article>
      </div>
    </section>
  );
};

export default MissionVisionSection;