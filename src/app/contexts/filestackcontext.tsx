import React, { ReactNode, createContext, useContext, useState } from "react";

interface FileStackContextType {
  openedFiles: string[];
  openFile: (link: string) => void;
  closeFile: (link: string) => void;
}

const FileStackContext = createContext<FileStackContextType | undefined>(
  undefined
);

export const FileStackProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [openedFiles, setOpenedFiles] = useState<string[]>([]);

  const openFile = (file: string) => {
    setOpenedFiles((prev) => Array.from(new Set([...prev, file])));
  };

  const closeFile = (file: string) => {
    setOpenedFiles((prev) => prev.filter((f) => f !== file));
  };

  return (
    <FileStackContext.Provider value={{ openedFiles, openFile, closeFile }}>
      {children}
    </FileStackContext.Provider>
  );
};

export const useOpenedFiles = () => {
  const context = useContext(FileStackContext);
  if (context === undefined) {
    throw new Error("useOpenedFiles must be used within a RouteStackProvider");
  }
  return context;
};
