// AboutLayout.tsx
"use client";

import React from "react";
import { FaCaretDown } from "react-icons/fa";
import "./aboutweb.css";

import CustomTab from "@/app/components/filetab";
import { useOpenedFiles } from "@/app/contexts/filestackcontext";
import { useRouter } from "next/navigation";
import Sidebar from "./sidebar";
import Terminal from "./terminal/terminal";

const AboutWeb: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { openedFiles, closeFile } = useOpenedFiles();

  const onClickAnywhere = () => {
    inputRef.current?.focus();
  };

  const router = useRouter();

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
          <div className="w-[220px] pl-[22px] border-r border-line flex-vertical-center">
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
        <div className="w-[220px] border-r border-line h-full flex-col">
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

export default AboutWeb;
