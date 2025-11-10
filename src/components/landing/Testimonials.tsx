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
    <section className="flex flex-col items-start gap-10 md:gap-20 self-stretch w-full bg-[#FBFBFB] pt-[30px] md:pt-[60px] pb-[60px] md:pb-[120px] px-5 sm:px-10 lg:px-20">
      <div className="flex flex-col items-start gap-8 md:gap-[60px] self-stretch max-w-screen-xl w-full mx-auto my-0">
        <h2 className="self-stretch text-center text-[28px] md:text-4xl font-bold leading-tight md:leading-[45px] text-[#181818]">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
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
export default Testimonials;