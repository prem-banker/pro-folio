// components/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-primaryDarkNavyBlue text-secondaryWhite p-4 border-b border-line">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <span className="font-sans text-xl font-bold border border-secondaryWhite p-2">My Logo</span>
          <Link
            href="/"
            passHref
            className="font-sans text-labels border border-secondaryWhite p-2 hover:bg-secondaryLightBlue">
            
              Home
            
          </Link>
          <Link
            href="/about"
            passHref
            className="font-sans text-labels border border-secondaryWhite p-2 hover:bg-secondaryLightBlue">
            
              About Me
            
          </Link>
          <Link
            href="/projects"
            passHref
            className="font-sans text-labels border border-secondaryWhite p-2 hover:bg-secondaryLightBlue">
            
              Projects
            
          </Link>
        </div>
        <Link
          href="/contact"
          passHref
          className="font-sans text-labels border border-secondaryWhite p-2 hover:bg-secondaryLightBlue">
          
            Contact Me
          
        </Link>
      </div>
    </header>
  );
};

export default Header;
