import React from 'react';
import { ValueCard } from '../ui/ValueCard';

 const CoreValueSection: React.FC = () => {
  const values = [
    {
      title: "Innovation",
      description: "We embrace creativity and forward-thinking to deliver cutting-edge solutions.",
      image: '/innovation.png', // ✅ direct URL
    },
    {
      title: "Integrity",
      description: "Transparency and honesty are the cornerstones of our business practices.",
      image: '/integrity.png', // ✅
    },
    {
      title: "Excellence",
      description: "We are committed to delivering quality in everything we do.",
      image: '/excellence.png', // ✅
    },
    {
      title: "Collaboration",
      description: "Working together with clients and partners to achieve shared goals.",
      image: '/collaboration.png', // ✅
    }
  ];

  return (
    <section className="justify-center items-stretch z-0 flex w-full flex-col overflow-hidden bg-[#F2F4F3] pt-[60px] pb-[120px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <h2 className="text-center text-4xl font-bold leading-none bg-clip-text max-md:max-w-full">
        Our Core Values
      </h2>
      <div className="flex w-full items-center gap-[40px_60px] flex-wrap mt-[60px] max-md:max-w-full max-md:mt-10">
        {values.map((value, index) => (
          <ValueCard
            key={index}
            title={value.title}
            description={value.description}
            image={value.image}
          />
        ))}
      </div>
    </section>
  );
};
export default CoreValueSection;