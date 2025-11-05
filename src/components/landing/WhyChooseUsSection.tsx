import React from 'react';
import { FeatureCard } from '../ui/FeatureCard';

 const WhyChooseUsSection: React.FC = () => {
  const features = [
    {
      title: "Expertise in multiple industries",
      description: "Our diverse experience across sectors allows us to deliver solutions that align with industry best practices and emerging trends.",
      image: '/card-1.png', // ✅ direct public path
    },
    {
      title: "Tailored solutions for unique challenges",
      description: "We design strategies that address your organization's specific needs, ensuring measurable impact and long-term growth.",
      image: '/card-2.png', // ✅
    },
    {
      title: "Proven success with leading organizations",
      description: "Our track record with top companies demonstrates our ability to drive transformation and deliver results that matter.",
      image: '/card-3.png', // ✅
    }
  ];

  return (
    <section className="z-0 w-full text-center bg-[#FBFBFB] pt-[60px] pb-[120px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <div className="flex w-full flex-col items-stretch max-md:max-w-full">
        <h2 className="text-4xl font-bold leading-none bg-clip-text max-md:max-w-full">
          Why Choose VonTech
        </h2>
        <div className="flex w-full items-center gap-6 justify-center flex-wrap mt-[60px] max-md:max-w-full max-md:mt-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export  default WhyChooseUsSection;