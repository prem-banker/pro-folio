// Folder.tsx
import React, { useState } from "react";
import { FaChevronDown, FaChevronRight, FaFolder } from "react-icons/fa";
import { usePathname } from "next/navigation";
import CustomFile from "./file";
import { FileProps } from "../utils/interfaces";

interface FolderProps {
  color: string;
  name: string;
  files: FileProps[];
}

const Folder: React.FC<FolderProps> = ({ color, name, files: list }) => {
  // if the route of this folder is open, make it open by default
  // TODO: this fix is kinda patchy (or not but cases like having similar folder names would cause issue!),
  // a concrete solution would be to check the whole path with including folder + file name together
  const [isOpen, setIsOpen] = useState(usePathname().includes(name));

  const toggleFolder = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full max-w-md px-6 py-1">
      <div
        className="cursor-pointer flex justify-between items-center"
        onClick={toggleFolder}
      >
        <div
          className={`${
            isOpen ? "flex items-center text-white" : "flex items-center"
          }`}
        >
          {isOpen ? (
            <FaChevronDown className="mr-2" />
          ) : (
            <FaChevronRight className="mr-2" />
          )}

          <FaFolder style={{ color }} className="mr-2" />
          <div>{name}</div>
        </div>
      </div>
      {isOpen && (
        <div className="mt-1 ml-4">
          {list.map((file, index) => (
            <CustomFile key={index} {...file} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Folder;
