import React from 'react';

interface IndustryCardProps {
  icon: string;
  category: string;
  title: string;
  description: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ icon, category, title, description }) => {
  return (
    <article className="shadow-[0_6px_36px_0_rgba(142,142,142,0.15)] self-stretch min-w-60 min-h-[330px] grow shrink w-[502px] bg-white my-auto p-10 rounded-[30px] max-md:max-w-full max-md:px-5">
      <div className="flex flex-col gap-6 text-left">
        <img src={icon} alt={category} className="w-12 h-12" />
        <div>
          <p className="text-[#0D8BD8] text-sm font-semibold tracking-[0.2em] uppercase">
            {category}
          </p>
          <h3 className="text-[#181818] text-2xl font-semibold mt-2">
            {title}
          </h3>
          <p className="text-[#4B4E4F] text-base leading-6 mt-4">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};

export default IndustryCard;
