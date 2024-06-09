// components/Header.tsx
import React from "react";
import Link from "next/link";
import NavItem from "./navitem";

const Header: React.FC = () => {
  return (
    <header className="bg-primaryLightNavyBlue text-secondaryLightBlue h-[56px] flex items-center justify-between border-b border-line rounded-lg">
      <div className="flex-vertical-center">
        <div className="w-[311px] pl-[22px] border-r border-line h-full flex-vertical-center">
          <Link
            href="/"
            passHref
            className="hover:text-secondaryFluorescentGreen"
          >
            prem-banker
          </Link>
        </div>

        <NavItem href="/" text="_hello" paddingX={18} />

        <NavItem href="/about" text="_about-me" paddingX={18} />

        <NavItem href="/projects" text="_projects" paddingX={18} />
      </div>

      <NavItem
        href="/contact"
        text="_contact"
        paddingX={18}
        borderLeft={true}
        borderRight={false}
      />
    </header>
  );
};

export default Header;
