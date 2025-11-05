import * as React from "react";
import Check from "/public/Check.png";

interface ReasonProps {
  title: string;
  description: string;
}

const Reason: React.FC<ReasonProps> = ({ title, description }) => {
  return (
    <article className="self-stretch flex min-w-60 gap-5 grow shrink w-80 my-auto">
      <img 
        src={Check} 
        alt="check icon" 
        className="w-10 h-10 shrink-0 object-contain"
      />
      <div className="min-w-60 flex-1 shrink basis-[0%]">
        <h3 className="text-[#393C3D] text-2xl font-semibold leading-[1.3]">
          {title}
        </h3>
        <p className="text-[#393C3D] text-base font-normal leading-6 mt-4">
          {description}
        </p>
      </div>
    </article>
  );
};

const WhyWorkWithUs: React.FC = () => {
  const reasons = [
    {
      title: "Innovation at the Core",
      description: "We are born in the cloud, and innovation drives everything we do. Join a team that thrives on exploring cutting-edge technologies and solving complex challenges"
    },
    {
      title: "Diverse Opportunities",
      description: "Whether you're a cloud architect, developer, data analyst, or IT strategist, Vontech offers a wide range of career paths tailored to your skills and aspirations."
    },
    {
      title: "Professional Growth",
      description: "At Vontech, we invest in our people. Benefit from mentorship, on-the-job training, certifications, and career development opportunities that keep you ahead of the curve."
    },
    {
      title: "Collaborative Culture",
      description: "Work in an environment where collaboration, respect, and teamwork are valued. Together, we foster a workplace where every voice matters and contributions are celebrated."
    },
    {
      title: "Global Impact",
      description: "Be part of a company that helps businesses worldwide unlock the full potential of the cloud, driving innovation and delivering incredible experiences across industries."
    }
  ];

  return (
    <section className="justify-center items-stretch z-0 flex w-full flex-col overflow-hidden bg-white px-20 py-[60px] max-md:max-w-full max-md:px-5">
      <div className="flex w-full flex-col items-stretch max-md:max-w-full">
        <h2 className="text-4xl font-bold leading-none bg-clip-text self-center">
          Why Work With Us?
        </h2>
        <div className="flex w-full items-center gap-[60px_40px] text-[#393C3D] justify-center flex-wrap mt-[60px] max-md:max-w-full max-md:mt-10">
          {reasons.map((reason, index) => (
            <Reason
              key={index}
              title={reason.title}
              description={reason.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
