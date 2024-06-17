// File.tsx
import { usePathname } from "next/navigation";
import React from "react";
import { FaFile } from "react-icons/fa";
import { FileProps } from "../utils/interfaces";

const CustomFile: React.FC<FileProps> = ({ text, onTap }) => {
  const isOpen = usePathname().includes(text);

  return (
    <div
      className={`flex items-center p-2 cursor-pointer ${
        isOpen ? "bg-gray-300" : "bg-transparent"
      }`}
      onClick={onTap}
    >
      <FaFile className="mr-2" />
      <span>{text}</span>
    </div>
  );
};

export default CustomFile;
