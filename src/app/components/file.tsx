// File.tsx
import React from "react";
import { FaFile } from "react-icons/fa";

interface FileProps {
  text: string;
  onTap: () => void;
  isActive: boolean;
}

const CustomFile: React.FC<FileProps> = ({ text, onTap, isActive }) => {
  return (
    <div
      className={`flex items-center p-2 cursor-pointer ${
        isActive ? "bg-gray-300" : "bg-transparent"
      }`}
      onClick={onTap}
    >
      <FaFile className="mr-2" />
      <span>{text}</span>
    </div>
  );
};

export default CustomFile;
