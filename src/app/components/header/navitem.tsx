'use client'

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface NavItemProps {
    text: string;
    href: string;
    paddingX?: number;
    borderLeft?: boolean;
    borderRight?: boolean
}

const NavItem: React.FC<NavItemProps> = ({ text, href, paddingX = 2, borderLeft = false, borderRight = true }) => {
    const paddingClass = `px-[${paddingX}px]`;

    const horizontalBorder = `${borderLeft ? 'border-l border-line ' : ' '} ${borderRight ? 'border-r border-line ' : ' '}  `

    const isActive = usePathname() === href;
    const verticalBorder = `${isActive ? 'border-b border-b-accentOrange border-b-4' : ''}`

    return (

        <div className={`${paddingClass} ${verticalBorder} ${horizontalBorder} h-full flex-vertical-center`}>
            <Link href={`${href}`} passHref className="hover:text-secondaryFluorescentGreen">
                {text}
            </Link>
        </div>
    );
};

export default NavItem;
