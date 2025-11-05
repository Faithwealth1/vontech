import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSectionbamboo';
import ChallengeSection from '@/components/landing/ChallengeSectionbamboo';
import SolutionSection from  '@/components/landing/SolutionSectionbamboo';
import ResultsSection from '@/components/landing/ResultsSectionbamboo';
import TestimonialSection from '@/components/landing/TestimonialSectionbamboo';
import FinalThoughtsSection from '@/components/landing/FinalThoughtsSectionbamboo';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="items-stretch relative flex flex-col overflow-hidden bg-[#FBFBFB]">
      <Header />
      
      <main>
        <HeroSection />
        
        <article className="justify-center items-stretch self-center z-0 flex w-[1280px] max-w-full flex-col overflow-hidden bg-[#FBFBFB] px-20 max-md:px-5">
          <ChallengeSection />
          <SolutionSection />
          <ResultsSection />
          <TestimonialSection />
          <FinalThoughtsSection />
        </article>
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
