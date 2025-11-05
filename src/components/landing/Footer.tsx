import React from 'react';

const Footer = () => {
  const socialLinks = [
    {
      href: "#facebook",
      bgColor: "bg-[rgba(59,89,152,1)]",
      icon: "facebook.png",
      alt: "Facebook"
    },
    {
      href: "#twitter",
      bgColor: "bg-black",
      icon: "x.png",
      alt: "Twitter"
    },
    {
      href: "#linkedin",
      bgColor: "bg-[rgba(0,119,181,1)]",
      icon: "linkedin.png",
      alt: "LinkedIn"
    },
    {
      href: "#instagram",
      bgColor: "bg-neutral-800",
      icon: "instagram.png",
      alt: "GitHub"
    }
  ];

  const footerSections = [
    {
      title: "Company",
      links: ["About", "Services", "Contact Us"]
    },
    {
      title: "Resources",
      links: ["Webinars", "Career", "Blog"]
    },
    {
      title: "Support",
      links: ["Partners", "Support portals", "Contact us"]
    },
    {
      title: "Policy",
      links: ["Privacy Policy", "Cookies Policy", "Terms and Conditions"]
    }
  ];

  return (
    <footer className="bg-[rgba(10,9,25,1)] self-center relative z-0 flex w-full flex-col overflow-hidden items-stretch justify-center pt-10 pb-[110px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <div className="z-0 flex w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
        <div className="self-stretch min-w-60 w-[323px] my-auto">
          <img
            src="vontech.png"
            alt="VonTech Group Logo"
            className="aspect-[3.66] object-contain w-[165px] max-w-full"
          />
          
          <div className="flex w-full gap-5 mt-[17px]">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`${social.bgColor} flex items-center justify-center w-[50px] h-[50px] rounded-[25px] hover:opacity-80 transition-opacity`}
                aria-label={social.alt}
              >
                <img
                  src={social.icon}
                  alt={social.alt}
                  className="aspect-[1] object-contain w-[25px] self-stretch my-auto"
                />
              </a>
            ))}
          </div>
          
          <p className="text-white text-base font-normal leading-6 mt-[17px]">
            VonTech Group is a cloud consulting company
            <br />
            dedicated to helping businesses achieve their
            <br />
            cloud goals with innovative solutions.
          </p>
        </div>
        
        <nav className="self-stretch flex min-w-60 min-h-[186px] items-stretch gap-[40px_60px] text-base text-white font-normal flex-wrap my-auto max-md:max-w-full">
          {footerSections.map((section, index) => (
            <div key={index} className={index === 0 ? "w-[98px]" : index === 1 ? "whitespace-nowrap w-[89px]" : index === 2 ? "w-[110px]" : "w-[153px]"}>
              <h3 className="text-white text-xl font-medium">
                {section.title}
              </h3>
              {section.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-white mt-7 block hover:text-[#FFE21B] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </nav>
      </div>
      
      <div className="absolute z-0 flex w-full max-w-[1440px] items-center text-sm text-white font-medium text-center leading-[1.4] justify-between p-5 border-[rgba(25,25,25,1)] border-t right-0 bottom-0 md:px-10">
        <div className="text-white self-stretch flex-1 shrink basis-[0%] my-auto md:text-xs">
          Copywrite © 2025 VonTech Group. All Right Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
