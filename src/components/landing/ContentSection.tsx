import React from 'react';

interface ContentSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const ContentSection: React.FC<ContentSectionProps> = ({ title, subtitle, children }) => {
  return (
    <section className="w-full mt-10 max-md:max-w-full">
      <header className="w-full max-md:max-w-full">
        <h2 className="text-4xl font-bold leading-none bg-gradient-to-r from-[#294C3C] to-[#097484] bg-clip-text text-transparent max-md:max-w-full">
          {title}
        </h2>
        {subtitle && (
          <h3 className="text-[#181818] text-2xl font-semibold leading-[1.3] mt-5 max-md:max-w-full">
            {subtitle}
          </h3>
        )}
      </header>
      <div className="text-[#181818] text-xl font-medium leading-[30px] mt-10 max-md:max-w-full">
        {children}
      </div>
    </section>
  );
};
export default ContentSection;
