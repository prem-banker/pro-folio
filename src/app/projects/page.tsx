"use client";
import { useWindowSize } from "../hooks/windowsize";
import "./projects.css";
import ProjectsMobile from "./mobile/projectsmobile";
import ProjectsWeb from "./web/projectsweb";

export default function Page() {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  return (
    <>
      {isMobile ? (
        <div className="block h-full">
          <ProjectsMobile />
        </div>
      ) : (
        <div className="block h-full">
          <ProjectsWeb />
        </div>
      )}
    </>
  );
}
