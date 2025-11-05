import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import HeroSectionAboutUs from "@/components/landing/HeroSectionAboutUs";
import WhoWeAreSection from "@/components/landing/WhoAreWeSection";
import MissionVisionSection from "@/components/landing/MissionVisionSection";
import CoreValueSection from"@/components/landing/CoreValueSection";
import WhyChooseUsSection from "@/components/landing/WhyChooseUsSection";
import CallToActionSection from "@/components/landing/CallToActionSection";
const AboutUs = () => {
  return (
    <div className="bg-white relative flex flex-col overflow-hidden items-stretch">
      <Header />
      <main>
        <HeroSectionAboutUs />
        <WhoWeAreSection />
         <MissionVisionSection />
        <CoreValueSection />
        <WhyChooseUsSection />
        <CallToActionSection /> 
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
