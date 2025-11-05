import * as React from "react";
import { Button } from "@/components/ui/ButtonCareer";

const HeroSectionCareer: React.FC = () => {
  return (
    <section className="flex flex-col relative z-0 min-h-[712px] w-full items-start gap-[40px_75px] overflow-hidden pt-[250px] pb-[120px] px-20 max-md:max-w-full max-md:px-5 max-md:py-[100px] max-md:items-center">
      <img
        src="hero career bg.png"
        alt="Hero background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="relative z-0 flex min-w-60 flex-col items-stretch w-[663px] my-auto max-md:max-w-full max-md:items-center max-md:text-center">
        <div className="flex w-full flex-col items-stretch justify-center max-md:max-w-full max-md:items-center">
          <h1 className="text-[#181818] text-5xl font-bold leading-[1.2] max-md:max-w-full max-md:text-[40px]">
            Join Our Team of Innovators
          </h1>
          <p className="text-[#393C3D] text-xl font-medium leading-[30px] mt-5 max-md:max-w-full">
            At Vontech Group, we believe in empowering talented individuals to
            achieve their full potential while contributing to innovative
            solutions that transform industries. Our mission is to redefine
            what's possible in the cloud and technology space, and we are
            always on the lookout for passionate professionals to join us.
          </p>
        </div>
        <Button className="mt-[60px] max-md:mt-10 w-fit max-md:mx-auto">
          Get In Touch
        </Button>
      </div>
      <img
        src="team smile.png"
        alt="Team collaboration"
        className="aspect-[0.94] object-contain w-[503px] absolute z-0 min-w-60 h-[606px] right-20 bottom-0 max-md:relative max-md:right-auto max-md:bottom-auto max-md:mx-auto max-md:mt-8 max-md:w-[320px] max-md:h-auto"
      />
    </section>
  );
};

export default HeroSectionCareer;
