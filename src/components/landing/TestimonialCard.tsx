import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  position: string;
  company: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  position,
  company
}) => {
  return (
    <article className="flex w-[402px] flex-col items-start gap-10 shrink-0 border px-[22px] py-8 rounded-[20px] border-solid border-[#E0E0E0] max-md:w-full max-md:max-w-[500px] max-sm:px-[18px] max-sm:py-6 hover:shadow-lg transition-shadow duration-300">
      <blockquote className="w-[358px] text-[#097484] text-base font-normal leading-6 max-md:w-full max-sm:text-sm">
        "{quote}"
      </blockquote>
      <div className="flex items-center gap-4 self-stretch">
        <div className="flex items-center gap-4 flex-[1_0_0]">
          <div className="flex flex-col justify-center items-start gap-0.5 flex-[1_0_0]">
            <cite className="self-stretch text-[#097484] text-xl font-normal leading-[30px] max-sm:text-lg not-italic">
              {position}
            </cite>
            <div className="self-stretch text-[#6A6C6B] text-lg font-normal leading-[27px] max-sm:text-base">
              {company}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
