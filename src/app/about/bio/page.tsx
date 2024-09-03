"use client";
import { useWindowSize } from "@/app/hooks/windowsize";
import BioMobile from "./mobile/biomobile";
import BioWeb from "./web/bioweb";

export default function BioPage({}: {}) {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  return (
    <>
      {isMobile ? (
        <div className="block h-full">
          <BioMobile />
        </div>
      ) : (
        <div className="block h-full">
          <BioWeb />
        </div>
      )}
    </>
  );
}
