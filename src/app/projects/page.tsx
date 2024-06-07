import Link from "next/link";
import { FaArrowDown, FaCaretDown, FaChevronDown } from "react-icons/fa";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="h-[40px] flex items-center justify-between border-b border-line">
        <div className="flex-vertical-center">
          <div className="w-[311px] pl-[22px] border-r border-line  flex-vertical-center">
            <FaCaretDown className="text-white  mr-2" />
            <span className="text-white">projects</span>
          </div>
        </div>
      </div>

      {/* Sidebar + content */}

      <div className="text-secondaryLightBlue flex items-center justify-between border-b border-line h-full">
        <div className="flex-vertical-center">
          <div className="w-[311px] pl-[22px] border-r border-line  flex-vertical-center">
            <FaCaretDown className="text-white  mr-2" />
            <span className="text-white">projects</span>
          </div>
        </div>
      </div>
    </div>
  );
}
