// AboutLayout.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FileStackProvider } from "../contexts/filestackcontext";
import { TerminalProvider } from "../contexts/terminal/terminalcontext";
import { useWindowSize } from "../hooks/windowsize";
import AboutMobile from "./layout/mobile/aboutmobile";
import AboutWeb from "./layout/web/aboutweb";

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
