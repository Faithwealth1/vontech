import React from 'react';
import checkIcon from '/Check.png';

interface CheckPoint {
  text: string;
}

interface ServiceSectionProps {
  title: string;
  description: string;
  checkPoints: CheckPoint[];
  imageSrc: string;
  imageAlt: string;
  imageOnLeft?: boolean;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  checkPoints,
  imageSrc,
  imageAlt,
  imageOnLeft = true
}) => {
  const content = (
    <>
      <div className="w-full max-md:max-w-full">
        <div className="w-full text-4xl font-bold leading-none max-md:max-w-full">
          <h2 className="bg-clip-text max-md:max-w-full">
            {title}
          </h2>
          <div className="min-h-0.5 w-[94px] bg-[#181818] mt-2 border-[rgba(24,24,24,1)] border-solid border-2" />
        </div>
        <p className="text-[#393C3D] text-xl font-medium leading-[30px] mt-10 max-md:max-w-full">
          {description}
        </p>
      </div>
      <div className="flex w-full flex-col items-stretch text-xl text-[#181818] font-medium justify-center mt-10 max-md:max-w-full">
        {checkPoints.map((point, index) => (
          <div key={index} className={`flex w-full items-start gap-4 ${index > 0 ? 'mt-5' : ''} max-md:max-w-full`}>
            <img src={checkIcon} alt="Check" className="w-10 h-10 flex-shrink-0" />
            <div className="text-[#181818] flex-1">
              {point.text}
            </div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <section className="justify-center items-stretch z-0 flex w-full flex-col overflow-hidden bg-white px-20 py-[60px] max-md:max-w-full max-md:px-5">
      <div className="flex w-full items-center gap-[40px_120px] justify-center flex-wrap max-md:max-w-full">
        <div className={`aspect-[1] object-contain w-[400px] self-stretch min-w-60 grow shrink my-auto max-md:max-w-full ${imageOnLeft ? 'md:order-1' : 'md:order-2'} order-2`}>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-contain"
          />
        </div>
        <div className={`self-stretch flex min-w-60 flex-col items-stretch justify-center grow shrink w-[474px] my-auto max-md:max-w-full ${imageOnLeft ? 'md:order-2' : 'md:order-1'} order-1`}>
          {content}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
