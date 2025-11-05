import React from "react";

const WhoWeAreSection: React.FC = () => {
  return (
    <section className="justify-center items-stretch z-0 flex w-full flex-col overflow-hidden bg-white px-20 py-[60px] max-md:max-w-full max-md:px-5">
      <div className="flex w-full items-center gap-[40px_170px] justify-center flex-wrap max-md:max-w-full">
        <img
          src="Brand connection.png"
          alt="Who we are illustration"
          className="aspect-[1] object-contain w-96 self-stretch min-w-60 grow shrink my-auto max-md:max-w-full"
        />
        <article className="self-stretch min-w-60 grow shrink w-[455px] my-auto max-md:max-w-full">
          <header className="w-full text-4xl font-bold leading-none max-md:max-w-full">
            <h2 className="bg-clip-text max-md:max-w-full">Who We Are</h2>
            <div className="min-h-0.5 w-[90px] bg-[#181818] mt-2 border-[rgba(24,24,24,1)] border-solid border-2" />
          </header>
          <p className="text-[#393C3D] text-xl font-medium leading-[30px] mt-10 max-md:max-w-full">
            Vontech Group is a leading technology solutions provider,
            specializing in cloud services, IT consulting, and digital
            transformation. Founded on the principles of innovation and customer
            success, we partner with organizations to unlock their full
            potential in the digital age
          </p>
        </article>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
