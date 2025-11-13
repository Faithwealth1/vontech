import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state

  return (
    <header className="justify-between items-center absolute z-10 flex w-[1280px] max-w-full gap-5 md:gap-[40px] lg:gap-[100px] md:flex-nowrap -translate-x-2/4 translate-y-[0%] bg-[rgba(255,255,255,0.15)] px-8 py-4 rounded-[30px] left-2/4 top-[20px] md:top-[40px] lg:top-[60px] max-md:px-5 max-md:flex-nowrap">
      <img
        src="vontech.png"
        alt="VonTech Group Logo"
        className="aspect-[4.55] object-contain w-[100px] self-stretch shrink-0 my-auto"
      />

      {/* Mobile and tablet hamburger menu */}
      <button
        className="lg:hidden text-[#181818]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Desktop navigation */}
      <nav className="self-stretch hidden lg:flex min-w-60 items-center gap-9 my-auto max-md:max-w-full">
        <a
          href="/"
          className="text-[#181818] text-xl font-medium self-stretch my-auto hover:text-[#FFE21B] transition-colors"
        >
          Home
        </a>
        <a
          href="/aboutUs"
          className="text-[#181818] text-xl font-medium self-stretch my-auto hover:text-[#FFE21B] transition-colors"
        >
          About
        </a>
        <a
          href="/services"
          className="text-[#181818] text-xl font-medium self-stretch my-auto hover:text-[#FFE21B] transition-colors"
        >
          Services
        </a>

        {/* Resources dropdown (desktop) */}
        <div className="relative self-stretch flex items-center gap-[5px] my-auto">
          <a
            href="/resources"
            className="text-[#181818] text-xl font-medium self-stretch my-auto hover:text-[#FFE21B] transition-colors"
          >
            Resources
          </a>
          <div
            className="self-stretch flex flex-col overflow-hidden items-center justify-center w-[26px] my-auto pt-1 cursor-pointer text-[#181818]"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className={`w-4 h-4 transform transition-transform duration-300 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Dropdown menu (desktop) */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-3 bg-white shadow-lg rounded-[15px] p-4 flex flex-col gap-3 w-48 z-20">
              <a
                href="/lendsqr"
                className="text-[#181818] hover:text-[#097484] text-lg transition-colors"
              >
                Lendsqr
              </a>
              <a
                href="/Completefarmer"
                className="text-[#181818] hover:text-[#097484] text-lg transition-colors"
              >
                Complete Farmer
              </a>
              <a
                href="/adhome"
                className="text-[#181818] hover:text-[#097484] text-lg transition-colors"
              >
                Adhome
              </a>
              <a
                href="/caraid"
                className="text-[#181818] hover:text-[#097484] text-lg transition-colors"
              >
                Caraid
              </a>
              <a
                href="/bamboo"
                className="text-[#181818] hover:text-[#097484] text-lg transition-colors"
              >
                Bamboo
              </a>
              <a
                href="/tusenti"
                className="text-[#181818] hover:text-[#097484] text-lg transition-colors"
              >
                Tusenti
              </a>
            </div>
          )}
        </div>

        <a
          href="/careers"
          className="text-[#181818] text-xl font-medium self-stretch my-auto hover:text-[#FFE21B] transition-colors"
        >
          Career
        </a>
        <a
          href="/events"
          className="text-[#181818] text-xl font-medium self-stretch my-auto hover:text-[#FFE21B] transition-colors"
        >
          Events
        </a>
      </nav>

      {/* Desktop login button */}
      <button className="hidden lg:flex justify-center items-center self-stretch gap-2 text-xl text-[#181818] font-semibold whitespace-nowrap bg-[#FFE21B] my-auto px-8 py-3 rounded-[20px] hover:bg-[#FFD700] transition-colors">
        Login
      </button>

      {/* Mobile and tablet menu dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-[rgba(255,255,255,0.95)] rounded-[20px] p-6 flex flex-col gap-4">
          <a
            href="/"
            className="text-[#181818] text-xl font-medium hover:text-[#097484] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="/aboutUs"
            className="text-[#181818] text-xl font-medium hover:text-[#097484] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="/services"
            className="text-[#181818] text-xl font-medium hover:text-[#097484] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>

          {/* Mobile Resources dropdown */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <a
                href="/resources"
                className="text-[#181818] text-xl font-medium hover:text-[#097484] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </a>
              <button
                type="button"
                aria-label="Toggle resources submenu"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-[#181818] ml-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className={`w-6 h-6 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {isDropdownOpen && (
              <div className="flex flex-col gap-3 mt-3 pl-4">
                <a
                  href="/lendsqr"
                  className="text-[#181818] hover:text-[#097484] text-lg transition-colors"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsDropdownOpen(false);
                  }}
                >
                  Lendsqr
                </a>
                <a
                  href="/Completefarmer"
                  className="text-[#181818] hover:text-[#097484] text-lg transition-colors"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsDropdownOpen(false);
                  }}
                >
                  Complete Farmer
                </a>
                <a
                  href="/adhome"
                  className="text-[#181818] hover:text-[#097484] text-lg transition-colors"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsDropdownOpen(false);
                  }}
                >
                  Adhome
                </a>
                <a
                  href="/caraid"
                  className="text-[#181818] hover:text-[#097484] text-lg transition-colors"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsDropdownOpen(false);
                  }}
                >
                  Caraid
                </a>
                <a
                  href="/bamboo"
                  className="text-[#181818] hover:text-[#097484] text-lg transition-colors"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsDropdownOpen(false);
                  }}
                >
                  Bamboo
                </a>
                <a
                  href="/tusenti"
                  className="text-[#181818] hover:text-[#097484] text-lg transition-colors"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsDropdownOpen(false);
                  }}
                >
                  Tusenti
                </a>
              </div>
            )}
          </div>

          <a
            href="/careers"
            className="text-[#181818] text-xl font-medium hover:text-[#097484] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Career
          </a>
          <a
            href="/events"
            className="text-[#181818] text-xl font-medium hover:text-[#097484] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Events
          </a>

          <button className="justify-center items-center flex gap-2 text-xl text-[#181818] font-semibold bg-[#FFE21B] px-8 py-3 rounded-[20px] hover:bg-[#FFD700] transition-colors">
            Login
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
