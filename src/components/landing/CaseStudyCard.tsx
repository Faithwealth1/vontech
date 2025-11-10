import React from 'react';

interface CaseStudyCardProps {
  title: string;
  description: string;
  image?: string;
  backgroundColor?: string;
  logo?: React.ReactNode;
  link: string; 

}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  description,
  image, 
  backgroundColor,
  logo,
  link
}) => {
  return (
  <a href={link}>
  <article className="flex w-full max-w-[410px] h-full flex-col items-start rounded-[30px] hover:transform hover:scale-105 transition-transform duration-300">
      <div
        className={`flex w-full h-[242px] md:h-[242px] justify-center items-center gap-2.5 p-2.5 rounded-[30px_30px_0_0] max-md:h-auto ${backgroundColor || 'bg-gray-100'}`}
      >
        {logo ? (
          logo
        ) : image ? (
          <img
            src={image}
            alt={`${title} case study`}
            className="w-full h-full max-md:h-auto self-stretch rounded-[30px_30px_0_0] object-cover"
          />
        ) : null}
      </div>
  <div className="flex flex-col items-start gap-4 self-stretch bg-white p-10 max-md:p-6 rounded-[0_0_30px_30px] max-sm:h-auto max-sm:p-[30px] flex-1">
        <h3 className="self-stretch text-[#181818] text-2xl font-bold leading-[31.2px] max-sm:text-xl">
          {title}
        </h3>
        <p className="self-stretch text-[#393C3D] text-base font-normal leading-6 max-sm:text-sm">
          {description}
        </p>
      </div>
    </article>
    </a>
  );
};
