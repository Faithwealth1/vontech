import React from 'react';

const CallToActionSection: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-stretch overflow-hidden relative z-0 min-h-[309px] w-full px-20 py-10 max-md:max-w-full max-md:px-5">
      <img
        src="image bg.png"
        alt="Call to action background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="relative flex w-full flex-col items-center justify-center max-md:max-w-full">
        <h2 className="text-white text-center text-4xl font-bold leading-[45px] w-[868px] max-md:max-w-full">
          No matter your industry, our team is here to help you leverage the
          power of technology for{" "}
          <span style={{color: "rgba(9,116,132,1)"}}>growth</span> and{" "}
          <span style={{color: "rgba(9,116,132,1)"}}>innovation</span>.
        </h2>
        <button className="justify-center items-center bg-[#FFE21B] flex gap-2 text-xl text-[#181818] font-semibold mt-10 px-8 py-3 rounded-[20px] max-md:px-5 hover:bg-yellow-300 transition-colors">
          Get Free Consultation
        </button>
      </div>
    </section>
  );
};

export default CallToActionSection;
