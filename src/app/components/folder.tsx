// Folder.tsx
import React, { useState } from "react";
import { FaChevronDown, FaChevronRight, FaFolder } from "react-icons/fa";

import CustomFile from "./file";

interface FileProps {
  text: string;
  onTap: () => void;
  isActive: boolean;
}

interface FolderProps {
  color: string;
  name: string;
  files: FileProps[];
}

const Folder: React.FC<FolderProps> = ({ color, name, files: list }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full max-w-md p-2">
      <div
        className="cursor-pointer flex justify-between items-center"
        onClick={toggleFolder}
      >
        <div className="flex items-center">
          {isOpen ? (
            <FaChevronDown className="mr-2" />
          ) : (
            <FaChevronRight className="mr-2" />
          )}

          <FaFolder style={{ color }} className="mr-2" />
          <div className={`${isOpen ? "text-white" : ""}`}>{name}</div>
        </div>
      </div>
      {isOpen && (
        <div className="mt-2 ml-4">
          {list.map((file, index) => (
            <CustomFile key={index} {...file} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Folder;
