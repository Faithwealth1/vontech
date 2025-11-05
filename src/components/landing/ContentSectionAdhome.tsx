import React from 'react';

interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const ContentSectionAdhome: React.FC<ContentSectionProps> = ({ title, children, className = "" }) => {
  return (
    <section className={`flex flex-col items-start gap-10 w-full ${className}`}>
      <h2 className="w-full text-4xl font-bold leading-[45px] bg-gradient-to-r from-[#294C3C] to-[#097484] bg-clip-text text-transparent max-md:text-[28px] max-sm:text-2xl">
        {title}
      </h2>
      <div className="w-full text-[#181818] text-xl leading-[30px] max-md:text-lg max-sm:text-base">
        {children}
      </div>
    </section>
  );
};

export default ContentSectionAdhome;
