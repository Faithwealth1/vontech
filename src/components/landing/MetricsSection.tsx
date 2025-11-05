import React, { useEffect, useState } from 'react';

const Statistics = () => {
  const [counters, setCounters] = useState([0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    {
      value: 20,
      suffix: "+",
      title: "Customers Served",
      description: "We've proudly served over 20 customers, delivering cloud solutions that are tailored to their unique needs and business goals."
    },
    {
      value: 30,
      suffix: "+",
      title: "Cloud Solutions Deployed",
      description: "We've proudly served over 20 customers, delivering cloud solutions that are tailored to their unique needs and business goals."
    },
    {
      value: 5,
      suffix: "+",
      title: "Average Customer Satisfaction",
      description: "Our customers consistently rate us highly, with an average satisfaction score reflecting our dedication to quality, reliability, and exceptional support."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('statistics');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        let current = 0;
        const increment = stat.value / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(current);
            return newCounters;
          });
        }, 50);
      });
    }
  }, [isVisible]);

  return (
    <section id="statistics" className="bg-[rgba(251,251,251,1)] w-full overflow-hidden max-md:max-w-full">
      <div className="flex flex-col relative min-h-[466px] w-full items-stretch pt-[69px] pb-9 px-20 max-md:max-w-full max-md:px-5">
        <img
          src="metric bg pattern.png"
          alt="Background pattern"
          className="absolute h-full w-full object-cover inset-0"
        />
        <h2 className="relative text-[#393C3D] text-4xl font-bold self-center">
          Memory in number
        </h2>
        <div className="relative flex items-center gap-6 justify-between flex-wrap mt-20 max-md:mt-10">
          {stats.map((stat, index) => (
            <div key={index} className="self-stretch flex min-w-60 flex-col items-stretch justify-center w-[342px] my-auto p-4">
              <div className="text-[rgba(0,128,0,1)] text-5xl font-bold self-center max-md:text-[40px]">
                {counters[index]}{stat.suffix}
              </div>
              <div className="flex w-full flex-col items-stretch justify-center mt-5">
                <h3 className="text-[#181818] text-2xl font-semibold leading-none self-center">
                  {stat.title}
                </h3>
                <p className="text-[#393C3D] text-center text-lg font-normal mt-4">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;


