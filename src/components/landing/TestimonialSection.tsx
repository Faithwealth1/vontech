import React from 'react';

interface TestimonialSectionProps {
  quote: string;
  author: string;
  additionalContent?: React.ReactNode;
}

export const TestimonialSection: React.FC<TestimonialSectionProps> = ({ 
  quote, 
  author, 
  additionalContent 
}) => {
  return (
    <section className="w-full mt-10 max-md:max-w-full">
      <header className="w-full max-md:max-w-full">
        <h2 className="text-4xl font-bold leading-none bg-gradient-to-r from-[#294C3C] to-[#097484] bg-clip-text text-transparent max-md:max-w-full">
          Client Testimonial
        </h2>
        <blockquote className="text-[#181818] text-xl italic font-medium leading-[30px] mt-5 max-md:max-w-full">
          "{quote}" — <cite className="font-bold italic">{author}</cite>
        </blockquote>
      </header>
      {additionalContent && (
        <div className="text-[#181818] text-xl font-medium leading-[30px] mt-10 max-md:max-w-full">
          {additionalContent}
        </div>
      )}
    </section>
  );
};
export default TestimonialSection;