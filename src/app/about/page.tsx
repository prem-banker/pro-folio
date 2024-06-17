"use client";

import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import CommandPrompt from "./command-prompt";
import "../styles/about.css";

export default function Page() {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickAnywhere = () => {
    inputRef.current.focus();
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="h-[40px] flex items-center justify-between border-b border-line">
        <div className="flex-vertical-center">
          <div className="w-[311px] pl-[22px] border-r border-line  flex-vertical-center">
            <FaCaretDown className="text-white mr-2" />
            <span className="text-white">about-me</span>
          </div>

          <div className="text-secondaryLightBlue w-[200px] px-4 border-r border-line  flex h-full items-center justify-between">
            <span>hi</span>

            <button className="bg-transparent border-none outline-none cursor-pointer">
              <RiCloseLine className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar + content */}

      <div className="text-secondaryLightBlue flex items-start flex-1 maintain-size">
        {/* Sidebar - about me Select */}
        <div className="w-[311px] border-r border-line h-full"></div>

        {/* Content - info + command prompt */}
        {/* w-0 coz it was expanding and causing its siblings to shrink */}
        <div className="flex-1 flex justify-center items-center"></div>
        <div
          className="flex-1 h-full border-x border-line maintain-size"
          onClick={onClickAnywhere}
        >
          <CommandPrompt inputRef={inputRef} />
        </div>

        {/* <div className="flex flex-grow  h-full ">
          
        </div> */}
      </div>
    </div>
  );
}
