import React from 'react';
import { Button } from '../Button';

export const FinalThoughtsSection: React.FC = () => {
  return (
    <section className="flex flex-col items-start gap-10 w-full">
      <div className="flex flex-col items-start gap-10 w-full max-sm:gap-[30px]">
        <h2 className="w-full text-4xl font-bold leading-[45px] bg-gradient-to-r from-[#294C3C] to-[#097484] bg-clip-text text-transparent max-md:text-3xl max-sm:text-2xl">
          Final Thoughts
        </h2>
        <p className="w-full text-[#181818] text-xl font-medium leading-[30px] max-sm:text-base">
          Vontech Group is empowering Tusenti to revolutionize mobile money by providing a secure, scalable, and cost-effective AWS infrastructure. This solution will enable Tusenti to focus on its core business, drive innovation, and deliver a seamless experience to its users.
        </p>
      </div>
      
      <p className="w-full text-[#181818] text-xl font-medium leading-[30px] max-sm:text-base">
        Learn how Vontech Group can help your fintech company build a secure and scalable cloud infrastructure. Contact us today for a consultation.
      </p>
      
      <div className="-mt-4">
        <Button>
          Get In Touch
        </Button>
      </div>
    </section>
  );
};
export default FinalThoughtsSection;