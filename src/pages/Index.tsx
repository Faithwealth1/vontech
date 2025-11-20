import React, { Suspense, lazy } from 'react';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import HeroSection from '@/components/landing/HeroSection';

const SponsorsSection = lazy(() => import('@/components/landing/SponsorsSection'));
const CTASection = lazy(() => import('@/components/landing/CTASection'));
const AboutSection = lazy(() => import('@/components/landing/AboutSection'));
const WhyChooseSection = lazy(() => import('@/components/landing/WhyChooseSection'));
const ServicesSection = lazy(() => import('@/components/landing/ServicesSection'));
const MetricsSection = lazy(() => import('@/components/landing/MetricsSection'));
const TestimonialsSection = lazy(() => import('@/components/landing/TestimonialsSection'));

const Index = () => {
  return (
    <div className="bg-white relative flex flex-col overflow-hidden items-stretch">
      <Header />
      
      <main>
        <HeroSection />
        <Suspense fallback={<div className="py-10 text-center text-[#097484]">Loading experience…</div>}>
          <SponsorsSection />
          <CTASection />
          <AboutSection />
          <WhyChooseSection />
          <ServicesSection />
          <MetricsSection />
          <TestimonialsSection />
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
