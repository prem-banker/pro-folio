import Link from "next/link";
import { FaArrowDown, FaCaretDown, FaChevronDown } from "react-icons/fa";
import meta from "../../../public/data/meta.json";
import { getIconComponent, standardizeName } from "../utils/utils";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  const { technologies } = meta;
  return (
    <div className="flex flex-col h-full">
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

      <div className="text-secondaryLightBlue flex flex-grow items-start">
        <div className="w-[311px] border-r border-line h-full">
          {technologies.map((tech, index) => (
            <div key={index} className="flex items-center mb-4">
              <input type="checkbox" id={tech} className="mr-2" />
              <label htmlFor={tech} className="flex items-center space-x-2">
                {getIconComponent(tech)}
                <span>{standardizeName(tech)}</span>
              </label>
            </div>
          ))}
        </div>
        <div className="flex-col flex-grow h-full"></div>

        {/* <div className="flex-vertical-center">
          <div className="w-[311px] pl-[22px] border-r border-line  flex-vertical-center">
            <FaCaretDown className="text-white  mr-2" />
            <span className="text-white">projects</span>
          </div>
        </div> */}
      </div>
    </div>
  );
}
