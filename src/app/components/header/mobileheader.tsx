"use client";
// components/MobileHeader.tsx
import React, { useState } from "react";
import Link from "next/link";

const MobileHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-primaryLightNavyBlue text-secondaryLightBlue h-[56px] flex items-center justify-between border-b border-line rounded-lg p-4 md:hidden">
      <Link href="/" passHref>
        <span className="hover:text-secondaryFluorescentGreen">
          ~$ ./prem-banker
        </span>
      </Link>
      <button
        onClick={toggleMenu}
        className="text-secondaryLightBlue focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-primaryLightNavyBlue z-10 flex flex-col items-center justify-center">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-secondaryLightBlue focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <nav className="flex flex-col space-y-4 w-3/5">
            <Link href="/" passHref>
              <span
                className="hover:text-secondaryFluorescentGreen"
                onClick={toggleMenu}
              >
                _hello
              </span>
            </Link>
            <Link href="/about" passHref>
              <span
                className="hover:text-secondaryFluorescentGreen"
                onClick={toggleMenu}
              >
                _about-me
              </span>
            </Link>
            <Link href="/projects" passHref>
              <span
                className="hover:text-secondaryFluorescentGreen"
                onClick={toggleMenu}
              >
                _projects
              </span>
            </Link>
            <Link href="/contact" passHref>
              <span
                className="hover:text-secondaryFluorescentGreen"
                onClick={toggleMenu}
              >
                _contact-me
              </span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default MobileHeader;
