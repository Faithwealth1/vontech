import React from 'react';

interface IndustryCardProps {
  imageSrc: string;
  alt: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ imageSrc, alt }) => {
  return (
    <article className="shadow-[0_6px_36px_0_rgba(142,142,142,0.15)] self-stretch min-w-60 min-h-[330px] grow shrink w-[502px] bg-white my-auto p-10 rounded-[30px] max-md:max-w-full max-md:px-5">
      <img src={imageSrc} alt={alt} className="w-full h-full object-contain" />
    </article>
  );
};

export default IndustryCard;
