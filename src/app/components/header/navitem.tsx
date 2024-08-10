"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  text: string;
  href: string;
  paddingX?: number;
  borderLeft?: boolean;
  borderRight?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  text,
  href,
  paddingX = 2,
  borderLeft = false,
  borderRight = true,
}) => {
  // TODO: FIX THIS HARDCODE
  const paddingClass = `px-[${paddingX}px]`;

  const horizontalBorder = `${borderLeft ? "border-l border-line " : " "} ${
    borderRight ? "border-r border-line " : " "
  }  `;

  const isActive =
    href === "/" ? usePathname() === href : usePathname().startsWith(href);
  const verticalBorder = `${
    isActive ? "border-b border-b-accentOrange border-b-4" : ""
  }`;

  return (
    <Link href={`${href}`} passHref legacyBehavior>
      <div
        className={`${paddingClass} ${verticalBorder} ${horizontalBorder} h-full flex-vertical-center hover:bg-gray-700 hover:text-secondaryFluorescentGreen cursor-pointer`}
      >
        {text}
      </div>
    </Link>
  );

  // return (
  //   <div
  //     className={`${paddingClass} ${verticalBorder} ${horizontalBorder} h-full flex-vertical-center`}
  //   >
  //     <Link
  //       href={`${href}`}
  //       passHref
  //       className="hover:text-secondaryFluorescentGreen"
  //       legacyBehavior
  //     >
  //       {text}
  //     </Link>
  //   </div>
  // );
};

export default NavItem;
