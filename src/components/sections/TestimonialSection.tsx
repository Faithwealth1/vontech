import React from 'react';

export const TestimonialSection: React.FC = () => {
  return (
    <section className="flex flex-col items-start gap-10 w-full max-sm:gap-[30px]">
      <h2 className="w-full text-4xl font-bold leading-[45px] bg-gradient-to-r from-[#294C3C] to-[#097484] bg-clip-text text-transparent">
        Client Testimonial
      </h2>
      <blockquote className="w-full text-[#181818] text-xl italic font-normal leading-[30px] max-sm:text-base">
        "Vontech Group's expertise in AWS architecture and security has been invaluable in helping us design a platform that will meet the demands of our growing business. Their guidance and support are ensuring a smooth migration to AWS and a secure, scalable, and reliable infrastructure for our mobile money platform."
        <footer className="mt-2">
          <cite className="font-bold not-italic">– DevOps Engineer, Tusenti</cite>
        </footer>
      </blockquote>
    </section>
  );
};