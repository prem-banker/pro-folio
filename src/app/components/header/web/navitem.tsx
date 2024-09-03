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
  // const paddingClass = `px-[${paddingX}px]`;
  const paddingClass = "px-[18px]";

  const horizontalBorder = `${borderLeft ? "border-l border-line " : " "} ${
    borderRight ? "border-r border-line " : " "
  }  `;

  const pathname = usePathname();

  const parentpath = `/${href.split("/")[1]}`;

  const isActive =
    href === "/" ? pathname === href : pathname.startsWith(parentpath);

  const verticalBorder = `${
    isActive ? "border-b border-b-accentOrange border-b-4" : ""
  }`;

  return (
    <Link href={`${href}`} passHref legacyBehavior>
      <div
        className={`${verticalBorder} ${horizontalBorder} md:px-[8px] lg:px-[18px] h-full flex-vertical-center hover:bg-gray-700 hover:text-secondaryFluorescentGreen cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis`}
      >
        {text}
      </div>
    </Link>
  );
};

export default NavItem;
