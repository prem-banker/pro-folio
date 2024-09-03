// components/WebHeader.tsx
import Link from "next/link";
import React from "react";
import userdata from "../../../../../public/data/user.json";
import NavItem from "./navitem";

const HeaderWeb: React.FC = () => {
  return (
    <header className="bg-primaryLightNavyBlue text-secondaryLightBlue h-[56px] flex items-center justify-between border-b border-line rounded-lg">
      <div className="flex-vertical-center">
        <div className="md:w-[250px] lg:w-[220px]  pl-[22px] border-r border-line flex-vertical-center">
          <Link
            href="/"
            passHref
            className="hover:text-secondaryFluorescentGreen flex-vertical-center"
          >
            <span>~$ ./{userdata.user.logo_text} </span>
            <span className="cursor bg-secondaryFluorescentGreen"></span>
          </Link>
        </div>

        <div className="flex h-full">
          <NavItem href="/" text="_hello" paddingX={18} />

          <NavItem href="/about/bio" text="_about-me" paddingX={18} />

          <NavItem href="/projects" text="_projects" paddingX={18} />
        </div>
      </div>

      <NavItem
        href="/contact"
        text="_contact-me"
        paddingX={18}
        borderLeft={true}
        borderRight={false}
      />
    </header>
  );
};

export default HeaderWeb;
