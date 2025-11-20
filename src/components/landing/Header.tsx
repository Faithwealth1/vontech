import React, { useState } from "react";

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8"
  >
    <path d="M3 7h18a1 1 0 1 0 0-2H3a1 1 0 1 0 0 2Zm0 6h18a1 1 0 1 0 0-2H3a1 1 0 1 0 0 2Zm0 6h18a1 1 0 1 0 0-2H3a1 1 0 1 0 0 2Z" />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8"
  >
    <path d="M6.225 4.811A1 1 0 0 0 4.81 6.225L10.586 12l-5.775 5.775a1 1 0 0 0 1.414 1.414L12 13.414l5.775 5.775a1 1 0 0 0 1.414-1.414L13.414 12l5.775-5.775a1 1 0 0 0-1.414-1.414L12 10.586 6.225 4.811Z" />
  </svg>
);

interface HeaderProps {
  variant?: "default" | "darkBg";
}

const Header: React.FC<HeaderProps> = ({ variant = "default" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state

  return (
    <header
      className={`justify-between items-center fixed z-10 flex w-[calc(100%-32px)] md:w-[calc(100%-64px)] lg:w-[1280px] max-w-full gap-5 md:gap-[40px] lg:gap-[100px] md:flex-nowrap -translate-x-2/4 translate-y-[0%] px-8 py-4 rounded-[30px] left-2/4 top-[20px] md:top-[40px] lg:top-[60px] max-md:px-5 max-md:flex-nowrap ${
        variant === "darkBg" ? "bg-gray-700 bg-opacity-90" : "bg-black bg-opacity-80"
      }`}
    >
      <img
        src="vontech.png"
        alt="VonTech Group Logo"
        className="aspect-[4.55] object-contain w-[100px] self-stretch shrink-0 my-auto"
      />

      {/* Mobile and tablet hamburger menu */}
      <button
        className="lg:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* Desktop navigation */}
      <nav className="self-stretch hidden lg:flex min-w-60 items-center gap-9 my-auto max-md:max-w-full">
        <a
          href="/"
          className="text-white text-xl font-medium self-stretch my-auto hover:text-[#FFE21B] transition-colors"
        >
          Home
        </a>
        <a
          href="/aboutUs"
          className="text-white text-xl font-medium self-stretch my-auto hover:text-[#FFE21B] transition-colors"
        >
          About
        </a>
        <a
          href="/services"
          className="text-white text-xl font-medium self-stretch my-auto hover:text-[#FFE21B] transition-colors"
        >
          Services
        </a>

        {/* Resources dropdown (desktop) */}
        <div className="relative self-stretch flex items-center gap-2 my-auto hover:[&_*]:text-[#FFE21B] group">
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`text-xl font-medium self-stretch my-auto transition-colors bg-transparent border-none cursor-pointer p-0 ${
              isDropdownOpen ? "text-[#FFE21B]" : "text-white group-hover:text-[#FFE21B]"
            }`}
          >
            Resources
          </button>
          <div
            className={`self-stretch flex flex-col overflow-hidden items-center justify-center w-[22px] my-auto pt-1 cursor-pointer transition-colors ${
              isDropdownOpen ? "text-[#FFE21B]" : "text-white group-hover:text-[#FFE21B]"
            }`}
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
                href="/resources"
                className="text-[#181818] hover:text-[#097484] text-lg transition-colors"
              >
                Case Study
              </a>
              <a
                href="/resources"
                className="text-[#181818] hover:text-[#097484] text-lg transition-colors"
              >
                Webinars
              </a>
              <a
                href="/resources"
                className="text-[#181818] hover:text-[#097484] text-lg transition-colors"
              >
                Blog
              </a>
              <a
                href="/resources"
                className="text-[#181818] hover:text-[#097484] text-lg transition-colors"
              >
                Support Portal
              </a>
            </div>
          )}
        </div>

        <a
          href="/careers"
          className="text-white text-xl font-medium self-stretch my-auto hover:text-[#FFE21B] transition-colors"
        >
          Career
        </a>
        <a
          href="/events"
          className="text-white text-xl font-medium self-stretch my-auto hover:text-[#FFE21B] transition-colors"
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
        <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-black bg-opacity-90 rounded-[20px] p-6 flex flex-col gap-4 text-white">
          <a
            href="/"
            className="text-white text-xl font-medium hover:text-[#FFE21B] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="/aboutUs"
            className="text-white text-xl font-medium hover:text-[#FFE21B] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="/services"
            className="text-white text-xl font-medium hover:text-[#FFE21B] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>

          {/* Mobile Resources dropdown */}
          <div className="flex flex-col group">
          <div className="flex items-center justify-between gap-2 hover:[&_*]:text-[#FFE21B]">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`text-xl font-medium transition-colors bg-transparent border-none cursor-pointer p-0 ${
                  isDropdownOpen ? "text-[#FFE21B]" : "text-white group-hover:text-[#FFE21B]"
                }`}
              >
                Resources
              </button>
              <button
                type="button"
                aria-label="Toggle resources submenu"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`transition-colors ${
                  isDropdownOpen ? "text-[#FFE21B]" : "text-white group-hover:text-[#FFE21B]"
                }`}
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
                  href="/resources"
                  className="text-white hover:text-[#FFE21B] text-lg transition-colors"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsDropdownOpen(false);
                  }}
                >
                  Case Study
                </a>
                <a
                  href="/resources"
                  className="text-white hover:text-[#FFE21B] text-lg transition-colors"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsDropdownOpen(false);
                  }}
                >
                  Webinars
                </a>
                <a
                  href="/resources"
                  className="text-white hover:text-[#FFE21B] text-lg transition-colors"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsDropdownOpen(false);
                  }}
                >
                  Blog
                </a>
                <a
                  href="/resources"
                  className="text-white hover:text-[#FFE21B] text-lg transition-colors"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsDropdownOpen(false);
                  }}
                >
                  Support Portal
                </a>
              </div>
            )}
          </div>

          <a
            href="/careers"
            className="text-white text-xl font-medium hover:text-[#FFE21B] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Career
          </a>
          <a
            href="/events"
            className="text-white text-xl font-medium hover:text-[#FFE21B] transition-colors"
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
