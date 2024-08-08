// File.tsx
import { usePathname } from "next/navigation";
import React from "react";
import { FaFile } from "react-icons/fa";
import { FileTabProps } from "../utils/interfaces";
import { RiCloseLine } from "react-icons/ri";

const CustomTab: React.FC<FileTabProps> = ({ text, onTap, onClose }) => {
  const isOpen = usePathname().includes(text);

  return (
    <div
      onClick={onTap}
      className={`text-secondaryLightBlue w-[200px] px-4 border-r border-line flex h-full items-center justify-between cursor-pointer ${
        isOpen ? "border-b border-b-accentOrange border-b-1" : ""
      }`}
    >
      <span>{text}</span>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="bg-transparent border-none outline-none cursor-pointer"
      >
        <RiCloseLine className="text-xl" />
      </button>
    </div>
  );
};

export default CustomTab;
