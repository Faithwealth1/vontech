import React from 'react';

interface ContentSectionProps {
  title: React.ReactNode;
  children: React.ReactNode;
}

export const ContentSection: React.FC<ContentSectionProps> = ({ 
  title, 
  children 
}) => {
  return (
    <section className="flex flex-col items-start gap-10 self-stretch">
      <h2 className="self-stretch text-4xl font-bold leading-[45px] max-md:text-[28px] max-sm:text-2xl">
        {typeof title === 'string' ? (
          <span className="bg-gradient-to-r from-[#294C3C] to-[#097484] bg-clip-text text-transparent">
            {title}
          </span>
        ) : (
          title
        )}
      </h2>
      <div className="self-stretch text-[#181818] text-xl font-normal leading-[30px] max-md:text-lg max-sm:text-base">
        {children}
      </div>
    </section>
  );
};
export default ContentSection;