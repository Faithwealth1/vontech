import React from 'react';
import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSectionCarAid';
import ChallengeSection from '@/components/landing/ChallengeSection';
import SolutionSection from '@/components/landing/SolutionSection';
import ResultsSection from '@/components/landing/ResultsSection';
import FinalThoughtsSection from '@/components/landing/FinalThoughtsSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';

const Index: React.FC = () => {
  return (
    <div className="items-stretch relative flex flex-col overflow-hidden bg-[#FBFBFB]">
      <Header />
      
      <main>
        <HeroSection />
        
        <div className="px-20 max-md:px-5">
          <ChallengeSection />
          <SolutionSection />
          <ResultsSection />
          <FinalThoughtsSection />
        </div>
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
