import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false); // separate state

  const resourcesSubpages = [
    { label: "Lendsqr", href: "/lendsqr" },
    { label: "Complete Farmer", href: "/completefarmer" },
    { label: "Adhome", href: "/adhome" },
    { label: "CarAid", href: "/carAid" },
    { label: "Bamboo", href: "/bamboo" },
    { label: "Tusenti", href: "/tusenti" },
  ];

  return (
    <header className="justify-between items-center absolute z-10 flex w-[1280px] max-w-full gap-5 md:gap-[40px] lg:gap-[100px] md:flex-nowrap -translate-x-2/4 translate-y-[0%] bg-[rgba(255,255,255,0.15)] px-8 py-4 rounded-[30px] left-2/4 top-[20px] md:top-[40px] lg:top-[60px] max-md:px-5 max-md:flex-nowrap">
      <img
        src="vontech.png"
        alt="VonTech Group Logo"
        className="aspect-[4.55] object-contain w-[100px] self-stretch shrink-0 my-auto"
      />

      {/* Mobile Hamburger Menu */}
      <button
        className="lg:hidden text-[#181818]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Desktop Navigation */}
      <nav className="self-stretch hidden lg:flex min-w-60 items-center gap-9 my-auto max-md:max-w-full relative">
        <a href="/" className="text-[#181818] text-xl font-medium my-auto hover:text-[#FFE21B] transition-colors">Home</a>
        <a href="/aboutUs" className="text-[#181818] text-xl font-medium my-auto hover:text-[#FFE21B] transition-colors">About</a>
        <a href="/services" className="text-[#181818] text-xl font-medium my-auto hover:text-[#FFE21B] transition-colors">Services</a>

        {/* Desktop Resources Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDesktopDropdownOpen(!isDesktopDropdownOpen)}
            className="flex items-center text-[#181818] text-xl font-medium hover:text-[#FFE21B] transition-colors gap-1"
          >
            Resources
            <img
              src="drop down.svg"
              alt="Dropdown arrow"
              className={`w-6 h-6 transition-transform ${isDesktopDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isDesktopDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-lg py-3 px-4 min-w-[200px] z-50">
              {resourcesSubpages.map((sub) => (
                <a key={sub.label} href={sub.href} className="block py-2 px-2 text-[#181818] font-medium hover:bg-[#FFE21B] hover:text-black rounded-md transition-colors">
                  {sub.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <a href="/careers" className="text-[#181818] text-xl font-medium my-auto hover:text-[#FFE21B] transition-colors">Career</a>
        <a href="/events" className="text-[#181818] text-xl font-medium my-auto hover:text-[#FFE21B] transition-colors">Events</a>
      </nav>

      {/* Login Button */}
      <button className="hidden lg:flex justify-center items-center gap-2 text-xl text-[#181818] font-semibold bg-[#FFE21B] px-8 py-3 rounded-[20px] hover:bg-[#FFD700] transition-colors">
        Login
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-[rgba(255,255,255,0.95)] rounded-[20px] p-6 flex flex-col gap-4">
          <a href="/" className="text-[#181818] text-xl font-medium hover:text-[#097484]" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="/aboutUs" className="text-[#181818] text-xl font-medium hover:text-[#097484]" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="/services" className="text-[#181818] text-xl font-medium hover:text-[#097484]" onClick={() => setIsMenuOpen(false)}>Services</a>

          {/* Mobile Resources Dropdown */}
          <div className="flex flex-col">
            <button
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              className="flex items-center text-[#181818] text-xl font-medium hover:text-[#097484] transition-colors gap-1"
            >
              Resources
              <img
                src="drop down.svg"
                alt="Dropdown arrow"
                className={`w-6 h-6 transition-transform ${isMobileDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isMobileDropdownOpen && (
              <div className="flex flex-col ml-4 mt-2 gap-2">
                {resourcesSubpages.map((sub) => (
                  <a key={sub.label} href={sub.href} className="text-[#181818] text-lg font-medium hover:text-[#097484]" onClick={() => setIsMenuOpen(false)}>
                    {sub.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="/careers" className="text-[#181818] text-xl font-medium hover:text-[#097484]" onClick={() => setIsMenuOpen(false)}>Career</a>
          <a href="/events" className="text-[#181818] text-xl font-medium hover:text-[#097484]" onClick={() => setIsMenuOpen(false)}>Events</a>

          <button className="justify-center items-center flex gap-2 text-xl text-[#181818] font-semibold bg-[#FFE21B] px-8 py-3 rounded-[20px] hover:bg-[#FFD700] transition-colors">Login</button>
        </div>
      )}
    </header>
  );
};

export default Header;
