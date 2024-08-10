// AboutLayout.tsx
"use client";

import React, { useEffect } from "react";
import { FaCaretDown } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import "../styles/about.css";
import Sidebar from "./sidebar";
import { useRouter } from "next/navigation";
import {
  FileStackProvider,
  useOpenedFiles,
} from "../contexts/filestackcontext";
import CustomTab from "../components/filetab";
import { TerminalProvider } from "../contexts/terminal/terminalcontext";
import Terminal from "./terminal/terminal";

const AboutLayoutContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { openedFiles, closeFile } = useOpenedFiles();

  const onClickAnywhere = () => {
    inputRef.current?.focus();
  };

  const router = useRouter();

  useEffect(() => {
    // initial route
    router.push("/about/bio");
  }, [router]);

  const handleTabClick = (file: string) => {
    router.push(file);
  };

  const handleTabClose = (file: string) => {
    closeFile(file);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="h-[40px] flex items-center justify-between border-b border-line">
        <div className="flex-vertical-center">
          <div className="w-[311px] pl-[22px] border-r border-line flex-vertical-center">
            <FaCaretDown className="text-white mr-2" />
            <span className="text-white">about-me</span>
          </div>

          {/* The tab bar consisting of files that are opened previously */}

          {openedFiles.map((file, index) => (
            <CustomTab
              key={index}
              text={file}
              onTap={() => handleTabClick(file)}
              onClose={() => handleTabClose(file)}
            />
          ))}
        </div>
      </div>

      <div className="text-secondaryLightBlue flex items-start flex-1 maintain-size">
        <div className="w-[311px] border-r border-line h-full flex-col">
          {/* Contains information in form of folders and files */}
          <Sidebar />
        </div>

        <div className="flex flex-1 h-full">
          <div className="w-1/2 justify-center items-center">{children}</div>
          <div
            className="w-1/2 h-full border-x border-line maintain-size"
            onClick={onClickAnywhere}
          >
            <Terminal inputRef={inputRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FileStackProvider>
      <TerminalProvider>
        <AboutLayoutContent>{children}</AboutLayoutContent>
      </TerminalProvider>
    </FileStackProvider>
  );
}
