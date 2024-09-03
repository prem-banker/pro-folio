// AboutLayout.tsx
"use client";

import React, { useEffect } from "react";
import { FileStackProvider } from "../contexts/filestackcontext";
import { TerminalProvider } from "../contexts/terminal/terminalcontext";
import "../styles/about.css";
import AboutMobile from "./layout/mobile/aboutmobile";
import AboutWeb from "./layout/web/aboutweb";
import { useWindowSize } from "../hooks/windowsize";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname.endsWith("about")) {
      router.replace("/about/bio");
    }
  }, []);

  return (
    <>
      <FileStackProvider>
        <TerminalProvider>
          {isMobile ? (
            <div className="block h-full">
              <AboutMobile>{children}</AboutMobile>
            </div>
          ) : (
            <div className="block h-full">
              <AboutWeb> {children} </AboutWeb>
            </div>
          )}
        </TerminalProvider>
      </FileStackProvider>
    </>
  );
}
