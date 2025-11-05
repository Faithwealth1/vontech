import React from 'react';

const FinalThoughtsSection: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-stretch mt-10 mb-20 max-md:max-w-full max-md:mb-10">
      <div className="w-full max-md:max-w-full">
        <h2 className="text-4xl font-bold leading-none bg-clip-text bg-gradient-to-r from-[#294C3C] to-[#097484] text-transparent max-md:max-w-full">
          Final Thoughts
        </h2>
        <p className="text-[#181818] text-xl font-medium leading-[30px] mt-5 max-md:max-w-full">
          By migrating to AWS and leveraging a serverless, modular design,
          CarAid is now primed for the future. The architecture supports
          both current service delivery and planned AI enhancements, all
          while improving performance, reducing costs, and enhancing user
          experience.
        </p>
      </div>
      <div className="text-[#181818] text-xl font-medium mt-10 max-md:max-w-full">
        Looking to modernize your business like CarAid?{" "}
        <span className="font-bold">
          Partner with Vontech Group today to unleash the power of AWS.
        </span>
      </div>
      <button className="justify-center items-center flex gap-2 text-xl text-[#181818] font-semibold bg-[#FFE21B] mt-6 px-8 py-3 rounded-[20px] max-md:px-5 hover:bg-[#FFD700] transition-colors w-fit">
        Get In Touch
      </button>
    </section>
  );
};

export default FinalThoughtsSection;
