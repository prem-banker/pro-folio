"use client";

import { FaCaretDown } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
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

      <div className="text-secondaryLightBlue flex items-start h-full maintain-size">
        {/* Sidebar - about me Select */}
        <div className="w-[311px] border-r border-line h-full"></div>

        {/* Content - info + command prompt */}
        {/* w-0 coz it was expanding and causing its siblings to shrink */}
        <div className="flex flex-grow  h-full maintain-size custom-scrollbar">
          <div className="w-1/2 flex justify-center items-center test-box"></div>
          <div className="w-1/2 test-box-2"></div>
        </div>
      </div>
    </div>
  );
}
