import React from 'react';
import ctaImg from '@/assets/CTA.png';

export const CTABanner: React.FC = () => {
  return (
    <section className="w-full">
      <img 
        src={ctaImg} 
        alt="Get free consultation call to action" 
        className="w-full h-auto"
      />
    </section>
  );
};
