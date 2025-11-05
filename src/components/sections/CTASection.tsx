import React from 'react';
import { Button } from '../Button';
import ctaBackground from '@/assets/cta-bg.png';

export const CTASection: React.FC = () => {
  return (
    <section 
      className="relative flex flex-col justify-center items-center gap-10 w-full px-20 py-20 max-md:px-10 max-md:py-16 max-sm:px-5 max-sm:py-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${ctaBackground})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 flex flex-col justify-center items-center gap-10 w-full max-w-[868px]">
        <h2 className="text-white text-center text-4xl font-bold leading-[45px] max-md:text-3xl max-sm:text-2xl">
          No matter your industry, our team is here to help you leverage the power of technology for{' '}
          <span className="text-white">growth</span> and{' '}
          <span className="text-white">innovation</span>.
        </h2>
        
        <Button>
          Get Free Consultation
        </Button>
      </div>
    </section>
  );
};

