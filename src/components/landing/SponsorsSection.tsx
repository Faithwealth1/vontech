import React from 'react';

const SponsorsSection = () => {
  const topLogos = [
    {
      src: "doorway.png",
      alt: "Partner logo 1",
      className: "aspect-[2.58] object-contain w-20"
    },
    {
      src: "aws.png",
      alt: "Partner logo 2",
      className: "aspect-[1.67] object-contain w-[60px]"
    },
    {
      src: "xente.png",
      alt: "Partner logo 3",
      className: "aspect-[3.19] object-contain w-20"
    },
    {
      src: "lendsqr.png",
      alt: "Partner logo 4",
      className: "aspect-[3.33] object-contain w-[90px]"
    }
  ];

  const bottomLogos = [
    {
      src: "creation hub.png",
      alt: "Partner logo 5",
      className: "aspect-[4.83] object-contain w-[150px]"
    },
    {
      src: "sayswitch.png",
      alt: "Partner logo 6",
      className: "aspect-[3.85] object-contain w-[150px]"
    },
    {
      src: "omni.png",
      alt: "Partner logo 7",
      className: "aspect-[4.83] object-contain w-[150px]"
    },
    {
      src: "pedistack.png",
      alt: "Partner logo 8",
      className: "aspect-[3.13] object-contain w-[150px]"
    },
    {
      src: "quabbly.png",
      alt: "Partner logo 9",
      className: "aspect-[2.94] object-contain w-[150px]"
    }
  ];

  return (
    <section className="justify-center items-center z-0 flex w-full flex-col overflow-hidden bg-white px-20 pt-0 pb-[60px] max-md:max-w-full max-md:px-5 max-md:pt-0">
      <div className="flex w-[992px] max-w-full flex-col items-center justify-center">
        <div className="flex w-[619px] max-w-full items-center gap-[40px_100px] justify-between flex-wrap">
          {topLogos.map((logo, index) => (
            <img
              key={`top-${index}`}
              src={logo.src}
              alt={logo.alt}
              className={`${logo.className} self-stretch shrink-0 my-auto`}
            />
          ))}
        </div>
        
        <div className="flex w-full items-center gap-[40px_58px] justify-between flex-wrap mt-2">
          {bottomLogos.map((logo, index) => (
            <img
              key={`bottom-${index}`}
              src={logo.src}
              alt={logo.alt}
              className={`${logo.className} self-stretch shrink-0 my-auto`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
