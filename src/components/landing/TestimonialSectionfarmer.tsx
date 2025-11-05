import React from 'react';

interface TestimonialSectionProps {
  quote: string;
  author: string;
  collaborationContent: React.ReactNode;
}

export const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  quote,
  author,
  collaborationContent
}) => {
  return (
    <section className="flex flex-col items-start gap-10 self-stretch">
      <div className="flex flex-col items-start gap-5 self-stretch">
        <h2 className="self-stretch text-4xl font-bold leading-[45px] max-md:text-[28px] max-sm:text-2xl">
          <span className="bg-gradient-to-r from-[#294C3C] to-[#097484] bg-clip-text text-transparent">
            Client Testimonial
          </span>
        </h2>
        <blockquote className="self-stretch text-[#181818] text-xl italic font-normal leading-[30px] max-md:text-lg max-sm:text-base">
          "{quote}" —
          <span className="font-bold">{author}</span>
        </blockquote>
      </div>
      <div className="self-stretch text-[#181818] text-xl font-normal leading-[30px] max-md:text-lg max-sm:text-base">
        {collaborationContent}
      </div>
    </section>
  );
};
export default TestimonialSection;