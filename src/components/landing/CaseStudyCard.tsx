import React from 'react';

interface CaseStudyCardProps {
  title: string;
  description: string;
  image?: string;
  backgroundColor?: string;
  logo?: React.ReactNode;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  description,
  image,
  backgroundColor,
  logo
}) => {
  return (
    <article className="flex w-[410px] flex-col items-start rounded-[30px] max-md:w-full max-md:max-w-[410px] hover:transform hover:scale-105 transition-transform duration-300">
      <div 
        className={`flex w-[410px] h-[242px] justify-center items-center gap-2.5 p-2.5 rounded-[30px_30px_0_0] max-md:w-full ${backgroundColor || 'bg-gray-100'}`}
      >
        {logo ? (
          logo
        ) : image ? (
          <img
            src={image}
            alt={`${title} case study`}
            className="h-[242px] self-stretch rounded-[30px_30px_0_0] object-cover"
          />
        ) : null}
      </div>
      <div className="flex h-[199px] flex-col items-start gap-4 self-stretch bg-white p-10 rounded-[0_0_30px_30px] max-sm:h-auto max-sm:p-[30px]">
        <h3 className="self-stretch text-[#181818] text-2xl font-bold leading-[31.2px] max-sm:text-xl">
          {title}
        </h3>
        <p className="self-stretch text-[#393C3D] text-base font-normal leading-6 max-sm:text-sm">
          {description}
        </p>
      </div>
    </article>
  );
};
