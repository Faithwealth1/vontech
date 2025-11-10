import React from 'react';

const CTASection = () => {
  const handleGetConsultation = () => {
    // In a real application, this would open a contact form or booking system
    window.location.href = 'mailto:consultation@vontechgroup.com?subject=Free Consultation Request';
  };

  return (
    <section className="flex flex-col justify-center items-stretch overflow-hidden relative z-0 min-h-[309px] w-full px-20 py-10 max-md:max-w-full max-md:px-5">
      <img
        src="decorative element.png"
        alt="Technology background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="relative flex w-full flex-col items-center justify-center max-md:max-w-full">
        <h2 className="w-full max-w-[868px] text-white text-center text-4xl font-bold leading-[45px] break-words whitespace-normal px-4 max-md:text-[28px] max-sm:text-2xl">
          No matter your industry, our team is here to help you leverage the
          power of technology for
          <span className="ml-1 text-[#097484]">growth</span> and
          <span className="ml-1 text-[#097484]">innovation</span>.
        </h2>
        <button 
          onClick={handleGetConsultation}
          className="justify-center items-center bg-[#FFE21B] flex gap-2 text-xl text-[#181818] font-semibold mt-10 px-8 py-3 rounded-[20px] max-md:px-5 hover:bg-[#FFD700] transition-colors"
        >
          Get Free Consultation
        </button>
      </div>
    </section>
  );
};

export default CTASection;
