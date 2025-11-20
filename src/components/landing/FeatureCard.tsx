import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <article className="shadow-[0_6px_36px_0_rgba(142,142,142,0.15)] self-stretch flex min-w-60 min-h-[360px] flex-col justify-between w-[390px] bg-white my-auto px-10 py-12 rounded-[30px] text-center max-md:w-full max-md:px-6 max-md:py-10">
      <img src={icon} alt={title} className="w-12 h-12 self-center object-contain" />
      <h3 className="text-[#181818] text-2xl font-semibold mt-8">{title}</h3>
      <p className="text-[#4B4E4F] text-base leading-6 mt-4">
        {description}
      </p>
    </article>
  );
};

export default FeatureCard;
