import React from 'react';
import { TestimonialCard } from './TestimonialCard';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Vontech didn't just implement technology, they helped us rethink how we grow. With real-time insights and AWS-powered analytics, we're now operating on a different level. Our farmers are more empowered than ever.",
      name: "CTO",
      position: "CTO",
      company: "Complete Farmer"
    },
    {
      quote: "Partnering with Vontech was one of the best infrastructure decisions we've made. They didn't just build us a scoring engine, they helped us future-proof our lending operations. The system is fast, scalable, and incredibly cost-effective.",
      name: "Senior Engineering Manager",
      position: "Senior Engineering Manager",
      company: "Lendsqr"
    },
    {
      quote: "Vontech Group's AWS expertise ensured a smooth, secure, scalable, and reliable infrastructure for our growing mobile money platform. Their invaluable guidance helped us design a platform to meet increasing demands.",
      name: "DevOps Engineer",
      position: "DevOps Engineer",
      company: "Tusenti"
    }
  ];

  return (
    <section className="flex flex-col items-start gap-20 self-stretch w-full bg-[#FBFBFB] pt-[60px] pb-[120px] px-20 max-md:pt-10 max-md:pb-20 max-md:px-10 max-sm:pt-[30px] max-sm:pb-[60px] max-sm:px-5">
      <div className="flex flex-col items-start gap-[60px] self-stretch max-w-screen-xl w-full mx-auto my-0">
        <h2 className="self-stretch text-center text-4xl font-bold leading-[45px] bg-clip-text max-sm:text-[28px] text-[#181818]">
          Testimonials
        </h2>
        <div className="flex w-full justify-between items-center gap-5 max-md:flex-col max-md:gap-[30px]">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              position={testimonial.position}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
