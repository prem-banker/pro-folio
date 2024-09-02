// AboutLayout.tsx
"use client";

import React, { useEffect } from "react";
import { FaCaretDown } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import "../styles/about.css";
import { useRouter } from "next/navigation";
import {
  FileStackProvider,
  useOpenedFiles,
} from "../contexts/filestackcontext";
import CustomTab from "../components/filetab";
import { TerminalProvider } from "../contexts/terminal/terminalcontext";
import Terminal from "./terminal/terminal";
import Sidebar from "./layout/web/sidebar";
import AboutWeb from "./layout/web/aboutweb";
import AboutMobile from "./layout/mobile/aboutmobile";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FileStackProvider>
        <TerminalProvider>
          <div className="hidden md:block md:h-full">
            <AboutWeb> {children} </AboutWeb>
          </div>
          <div className="block h-full md:hidden">
            <AboutMobile>{children}</AboutMobile>
          </div>
        </TerminalProvider>
      </FileStackProvider>
    </>
  );
}
