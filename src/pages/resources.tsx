import React from 'react';
import Header  from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { CaseStudies } from '@/components/landing/CaseStudies';
import { Testimonials } from '@/components/landing/Testimonials';
import  Footer from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="flex w-full flex-col items-center relative overflow-x-hidden bg-white">
      <div className="w-full flex justify-center px-5">
        <Header />
      </div>
      <main>
        <Hero />
        <CaseStudies />
        <Testimonials />
        <img
          src="banner.png"
          alt="Call to action banner"
          className="w-full h-auto object-cover"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;


