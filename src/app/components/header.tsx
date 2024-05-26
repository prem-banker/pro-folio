// components/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-primaryLightNavyBlue text-secondaryLightBlue h-16 flex items-center justify-between border-b border-line rounded-lg">
      <div className="container mx-auto  h-full ">
        <div className="flex space-x-4  h-full items-center">
          <div className="w-[311px] pl-[22px] border-r border-line h-full flex-vertical-center">
            <Link href="/" passHref className="  hover:text-secondaryFluorescentGreen">
              prem-banker
            </Link>
          </div>

          <Link
            href="/"
            passHref
            className="text-labels border border-secondaryWhite p-2 hover:bg-secondaryLightBlue">

            Home

          </Link>
          <Link
            href="/about"
            passHref
            className="text-labels border border-secondaryWhite p-2 hover:bg-secondaryLightBlue">

            About Me

          </Link>
          <Link
            href="/projects"
            passHref
            className="text-labels border border-secondaryWhite p-2 hover:bg-secondaryLightBlue">

            Projects

          </Link>
        </div>
      </div>
      <div>
        <Link
          href="/contact"
          passHref
          className="text-labels border border-secondaryWhite p-2 hover:bg-secondaryLightBlue">

          Contact Me

        </Link>
      </div>
    </header>
  );
};

export default Header;
