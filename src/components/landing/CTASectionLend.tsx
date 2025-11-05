import React from 'react';
import ctaImage from '@/assets/cta.png';

export const CTASectionLend: React.FC = () => {
  return (
    <section className="w-full">
      <img 
        src={ctaImage} 
        alt="Get Free Consultation - No matter your industry, our team is here to help you leverage the power of technology for growth and innovation" 
        className="w-full object-cover"
      />
    </section>
  );
};
export default CTASectionLend