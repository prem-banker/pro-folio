import React, { ReactNode, createContext, useContext, useState } from "react";

interface RouteStackContextType {
  openedFiles: string[];
  openFile: (link: string) => void;
  closeFile: (link: string) => void;
}

const RouteStackContext = createContext<RouteStackContextType | undefined>(
  undefined
);

export const RouteStackProvider: React.FC<{ children: ReactNode }> = ({
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
    <RouteStackContext.Provider value={{ openedFiles, openFile, closeFile }}>
      {children}
    </RouteStackContext.Provider>
  );
};

export const useOpenedFiles = () => {
  const context = useContext(RouteStackContext);
  if (context === undefined) {
    throw new Error("useOpenedFiles must be used within a RouteStackProvider");
  }
  return context;
};
