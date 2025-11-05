import React from 'react';

const FinalThoughtsSection = () => {
  const handleGetInTouch = () => {
    // In a real application, this would navigate to a contact form or open a modal
    window.location.href = 'mailto:contact@vontechgroup.com';
  };

  return (
    <section className="flex w-full flex-col items-stretch mt-10 mb-20 max-md:max-w-full max-md:mb-10">
      <div className="w-full max-md:max-w-full">
        <h2 className="text-4xl font-bold leading-none bg-clip-text bg-gradient-to-r from-[#294C3C] to-[#097484] text-transparent max-md:max-w-full">
          Final Thoughts
        </h2>
        <p className="text-[#181818] text-xl font-medium leading-[30px] mt-10 max-md:max-w-full">
          Vontech Group's solution enabled Bamboo to rapidly develop and
          deploy a Stock Recommender POC, demonstrating the power of AWS for
          fintech innovation. The scalable, cost-effective, and reliable
          architecture provides a strong foundation for future development
          and expansion of Bamboo's platform.
        </p>
      </div>
      <p className="text-[#181818] text-xl font-medium mt-10 max-md:max-w-full">
        Contact Vontech Group today to learn how we can help you leverage
        AWS to accelerate your fintech innovation.
      </p>
      <button 
        onClick={handleGetInTouch}
        className="justify-center items-center flex gap-2 text-xl text-[#181818] font-semibold bg-[#FFE21B] mt-10 px-8 py-3 rounded-[20px] max-md:px-5 hover:bg-[#FFD700] transition-colors w-fit"
      >
        Get In Touch
      </button>
    </section>
  );
};

export default FinalThoughtsSection;
