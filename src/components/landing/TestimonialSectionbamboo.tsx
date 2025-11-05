import React from 'react';

const TestimonialSection = () => {
  return (
    <section className="w-full mt-10 max-md:max-w-full">
      <h2 className="text-4xl font-bold leading-none bg-clip-text bg-gradient-to-r from-[#294C3C] to-[#097484] text-transparent max-md:max-w-full">
        Client Testimonial
      </h2>
      <blockquote className="text-[#181818] text-xl font-medium leading-[30px] mt-10 max-md:max-w-full">
        <p className="mb-2">
          "Vontech Group's expertise in AWS and serverless technologies was
          instrumental in helping us quickly develop and deploy our Stock
          Recommender POC. Their solution has enabled us to explore new ways
          to engage our users and enhance our platform."
        </p>
        <cite className="block">
          – <strong>Senior Devops Engineer</strong>
        </cite>
      </blockquote>
    </section>
  );
};

export default TestimonialSection;
