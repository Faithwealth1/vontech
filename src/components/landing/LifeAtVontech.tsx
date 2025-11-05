import * as React from "react";
import Check from "/public/Check.png";

interface LifePointProps {
  title: string;
  description: string;
}

const LifePoint: React.FC<LifePointProps> = ({ title, description }) => {
  return (
    <article className="flex w-full gap-5 flex-wrap mt-[60px] max-md:max-w-full max-md:mt-10 first:mt-0">
      <img 
        src={Check} 
        alt="" 
        className="w-10 h-10 shrink-0 object-contain"
      />
      <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
        <h3 className="text-[#181818] text-2xl font-semibold leading-[1.3] max-md:max-w-full">
          {title}
        </h3>
        <p className="text-[#393C3D] text-base font-normal leading-6 mt-4 max-md:max-w-full">
          {description}
        </p>
      </div>
    </article>
  );
};

const LifeAtVontech: React.FC = () => {
  const lifePoints = [
    {
      title: "Supportive Environment",
      description: "We foster collaboration and growth, ensuring every team member feels valued and empowered."
    },
    {
      title: "Work-Life Balance",
      description: "Flexible practices and a people-first culture to help you excel at work while enjoying life outside it."
    },
    {
      title: "Impactful Work",
      description: "Join projects that make a real difference, driving innovation and creating solutions that matter."
    }
  ];

  return (
    <section className="z-0 w-full bg-white pt-[60px] pb-[120px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <div className="w-full max-md:max-w-full">
        <div className="w-full text-center max-md:max-w-full">
          <h2 className="text-4xl font-bold leading-none bg-clip-text max-md:max-w-full">
            Life at Vontech Group
          </h2>
          <p className="text-[#393C3D] text-lg font-normal mt-2 max-md:max-w-full">
            At Vontech, we create a balance between work and life
          </p>
        </div>
        <div className="flex w-full items-center gap-[40px_110px] justify-center flex-wrap mt-[60px] max-md:max-w-full max-md:mt-10">
          <img
            src="team vontech.png"
            alt="Team working together"
            className="aspect-[1.05] object-contain w-[526px] self-stretch min-w-60 my-auto rounded-[30px] max-md:max-w-full"
          />
          <div className="self-stretch flex min-w-60 flex-col items-stretch justify-center w-[534px] my-auto max-md:max-w-full">
            {lifePoints.map((point, index) => (
              <LifePoint
                key={index}
                title={point.title}
                description={point.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeAtVontech;
