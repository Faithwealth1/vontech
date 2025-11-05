import React from 'react';
import  Header  from '@/components/landing/Header';
import  Footer  from '@/components/landing/Footer';
import  HeroSection  from '@/components/sections/HeroSection';
import { ChallengeSection } from '@/components/sections/ChallengeSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { ResultsSection } from '@/components/sections/ResultsSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { FinalThoughtsSection } from '@/components/sections/FinalThoughtsSection';
import { CTASection } from '@/components/sections/CTASection';

const Index = () => {
  return (
    <div className="flex w-full flex-col items-center min-h-screen bg-[#FBFBFB]">
      <Header />
      
      <main className="flex flex-col justify-center items-start gap-10 w-full max-w-[1440px] bg-[#FBFBFB] pt-10 pb-20 px-20 max-md:px-10 max-md:pt-10 max-sm:px-5 max-sm:pt-10">
        <div className="flex flex-col items-start gap-10 w-full max-sm:gap-[30px]">
          <HeroSection />
          
          <p className="w-full text-[#181818] text-xl font-medium leading-[30px] max-sm:text-base">
            Tusenti, a forward-thinking fintech company focused on mobile money solutions, is poised for significant growth. To support their expanding user base and ensure the security and reliability of their platform, Tusenti partnered with Vontech Group to design and implement a robust AWS architecture. This case study outlines the solution Vontech Group is providing to empower Tusenti's mission.
          </p>
        </div>
        
        <ChallengeSection />
        <SolutionSection />
        <ResultsSection />
        <TestimonialSection />
        <FinalThoughtsSection />
      </main>
      
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
