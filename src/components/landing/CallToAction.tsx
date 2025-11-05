import * as React from "react";
import { Button } from "@/components/ui/ButtonForCareer";

const CallToAction: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-stretch overflow-hidden relative z-0 min-h-[277px] w-full px-20 py-10 max-md:max-w-full max-md:px-5">
      <img
        src="cta bg.png"
        alt="Call to action background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="relative flex w-full flex-col items-center justify-center max-md:max-w-full">
        <div className="flex w-[868px] max-w-full flex-col items-center text-center">
          <h2 className="text-white text-4xl font-bold leading-none max-md:max-w-full">
            Ready to take the next step in your career?
          </h2>
          <p className="text-[#C9C7C7] text-base font-medium leading-6 w-[710px] mt-2.5 max-md:max-w-full">
            We're always on the lookout for talented individuals. Submit your
            resume, and we'll contact you when a suitable opportunity arises.
          </p>
        </div>
        <Button className="mt-10">
          Get In Touch
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
