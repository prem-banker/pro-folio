// components/Header.tsx
import React from 'react';
import Link from 'next/link';
import NavItem from './navitem';

const Header: React.FC = () => {
  return (
    <header className="bg-primaryLightNavyBlue text-secondaryLightBlue h-16 flex items-center justify-between border-b border-line rounded-lg">
      <div className="container mx-auto  h-full ">
        <div className="flex   h-full items-center">
          <div className="w-[311px] pl-[22px] border-r border-line h-full flex-vertical-center">
            <Link href="/" passHref className="hover:text-secondaryFluorescentGreen">
              prem-banker
            </Link>
          </div>

          <NavItem href="/" text="_hello" paddingX={18} />

          <NavItem href="/about" text="_about-me" paddingX={18} />

          <NavItem href="/projects" text="_projects" paddingX={18} />

          {/* <Link
            href="/"
            passHref
            className="text-labels border border-secondaryWhite p-2 hover:bg-secondaryLightBlue">

            Home

          </Link> */}
          {/* <Link
            href="/about"
            passHref
            className="text-labels border border-secondaryWhite p-2 hover:bg-secondaryLightBlue">

            About Me

          </Link> */}

        </div>
      </div>
      <NavItem href="/contact" text="_contact" paddingX={18} borderLeft={true} borderRight={false}  />
    </header>
  );
};

export default Header;
