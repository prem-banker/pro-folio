// File.tsx
import { usePathname } from "next/navigation";
import React from "react";
import { FaFile } from "react-icons/fa";
import { FileTabProps } from "../utils/interfaces";
import { RiCloseLine } from "react-icons/ri";
import { getLastElement } from "../utils/utils";
import { useOpenedFiles } from "../contexts/routestackcontext";
import { useRouter } from "next/navigation";

const CustomTab: React.FC<FileTabProps> = ({ text, onTap, onClose }) => {
  const isOpen = usePathname().includes(text);
  const filename = getLastElement(text, "/");
  const { openedFiles } = useOpenedFiles();
  const router = useRouter();

  return (
    <div
      onClick={onTap}
      className={`text-secondaryLightBlue w-[200px] px-4 border-r border-line flex h-full items-center justify-between cursor-pointer ${
        isOpen ? "border-b border-b-accentOrange border-b-1" : ""
      }`}
    >
      <span>{filename}</span>

      <button
        onClick={(e) => {
          e.stopPropagation();
          // TODO : DO SOMETHING ABOUT THIS COMPLEX LOGIC

          if (isOpen) {
            if (openedFiles.length === 1) {
              router.push("/about/bio");
            } else {
              const index = openedFiles.indexOf(text);
              if (index == 0) {
                router.push(openedFiles[index + 1]);
              } else {
                router.push(openedFiles[index - 1]);
              }
            }
            onClose();
          } else {
            onClose();
          }
        }}
        className="bg-transparent border-none outline-none cursor-pointer"
      >
        <RiCloseLine className="text-xl" />
      </button>
    </div>
  );
};

export default CustomTab;
