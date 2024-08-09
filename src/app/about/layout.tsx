// AboutLayout.tsx
"use client";

import React, { useEffect } from "react";
import { FaCaretDown } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import "../styles/about.css";
import CommandPrompt from "./command-prompt";
import Sidebar from "./sidebar";
import { useRouter } from "next/navigation";
import {
  RouteStackProvider,
  useOpenedFiles,
} from "../contexts/routestackcontext";
import CustomTab from "../components/filetab";

const AboutLayoutContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { openedFiles, openFile, closeFile } = useOpenedFiles();

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
    // removeOpenedFile(file);
    // if (file === openedFiles[openedFiles.length - 1]) {
    //   router.back();
    // }
    // if (openedFiles.length === 1) {
    //   router.push("/about/bio");
    // } else {
    //   router.back();
    // }
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
            <CommandPrompt inputRef={inputRef} />
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
    <RouteStackProvider>
      <AboutLayoutContent>{children}</AboutLayoutContent>
    </RouteStackProvider>
  );
}
