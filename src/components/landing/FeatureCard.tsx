import React from 'react';

interface FeatureCardProps {
  imageSrc: string;
  alt: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ imageSrc, alt }) => {
  return (
    <article className="items-center shadow-[0_6px_36px_0_rgba(142,142,142,0.15)] self-stretch flex min-w-60 flex-col justify-center aspect-[1] w-[390px] bg-white my-auto px-10 rounded-[30px] max-md:px-5">
      <img src={imageSrc} alt={alt} className="w-full h-full object-contain" />
    </article>
  );
};

export default FeatureCard;
