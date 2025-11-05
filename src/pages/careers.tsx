import * as React from "react";
import Header from "@/components/landing/Header";
import HeroSectionCareer from "@/components/landing/HeroSectionCareer";
import WhyWorkWithUs from "@/components/landing/WhyWorkWithUs";
import CurrentOpenings from "@/components/landing/CurrentOpenings";
import LifeAtVontech from "@/components/landing/LifeAtVontech";
import CallToAction from "@/components/landing/CallToAction";
import Footer from "@/components/landing/Footer";

const Index: React.FC = () => {
  return (
    <div className="bg-white relative flex flex-col overflow-hidden items-stretch">
      <Header />
      <main>
        <HeroSectionCareer />
        <WhyWorkWithUs />
        <CurrentOpenings />
        <LifeAtVontech />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
