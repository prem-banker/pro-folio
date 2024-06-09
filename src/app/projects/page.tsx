"use client";

import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import metadata from "../../../public/data/meta.json";
import userdata from "../../../public/data/user.json";
import TechIcon from "../components/techicon";
import "../styles/projects.css";
import { standardizeName } from "../utils/utils";
import { RiCloseLine } from "react-icons/ri";
import Link from "next/link";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  const { technologies } = metadata;
  const { projects } = userdata;
  const [activeTechnologies, setActiveTechnologies] = useState(technologies);

  const toggleCheckbox = (tech: string) => {
    if (activeTechnologies.includes(tech)) {
      setActiveTechnologies(activeTechnologies.filter((t) => t !== tech));
    } else {
      setActiveTechnologies([...activeTechnologies, tech]);
    }
  };

  const clearSelectedTechnologies = () => {
    setActiveTechnologies([]); // Clear the selected technologies
  };

  const getTabName = () => {
    if (activeTechnologies.length > 0) {
      if (activeTechnologies.length === 1) {
        return activeTechnologies[0];
      } else {
        return activeTechnologies[0] + ` + ${activeTechnologies.length - 1}`;
      }
    } else {
      return "Tech";
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="h-[40px] flex items-center justify-between border-b border-line">
        <div className="flex-vertical-center">
          <div className="w-[311px] pl-[22px] border-r border-line  flex-vertical-center">
            <FaCaretDown className="text-white mr-2" />
            <span className="text-white">projects</span>
          </div>

          {activeTechnologies.length > 0 && (
            <div className="text-secondaryLightBlue w-[200px] px-4 border-r border-line  flex h-full items-center justify-between">
              <span>{getTabName()}</span>

              <button
                className="bg-transparent border-none outline-none cursor-pointer"
                onClick={clearSelectedTechnologies}
              >
                <RiCloseLine className="text-xl" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar + content */}

      <div className="text-secondaryLightBlue flex flex-grow items-start">
        {/* Sidebar - Tech Select */}
        <div className="w-[311px] border-r border-line h-full">
          {technologies.map((tech, index) => (
            <div key={index} className="flex items-center mt-4 mx-[22px]">
              <input
                type="checkbox"
                id={tech}
                className="h-4 w-4"
                checked={activeTechnologies.includes(tech)}
                onChange={() => toggleCheckbox(tech)}
              />
              <label
                htmlFor={tech}
                className={`flex items-center space-x-2 ml-4 ${
                  activeTechnologies.includes(tech) ? "text-white" : ""
                }`}
              >
                <TechIcon tech={tech} />
                <span>{standardizeName(tech)}</span>
              </label>
            </div>
          ))}
        </div>

        {/* Content - Projects */}
        <div className="flex h-full flex-wrap mt-16 mx-auto justify-center">
          {projects.map((project, index) => (
            <div key={index} className="my-4 mx-4">
              <div className="text-body text-secondaryLightBlue w-[350px] truncate mb-2">
                <span className="text-semibold text-secondaryBrightPurple">
                  Project {index + 1} &nbsp;
                </span>
                // {project.name}
              </div>
              <div className="border border-line shadow-md bg-primaryDeepNavyBlue rounded-lg flex flex-col w-[350px] h-[320px]">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-[350px] h-[150px] object-cover rounded-md mb-4"
                />
                <div className="text-body text-secondaryLightBlue mx-4 truncate-2">
                  {project.description}
                </div>

                <button className="mx-4 mt-4 w-[150px] bg-buttonbackground py-2.5 px-3.5 rounded-md text-white">
                  view-project
                </button>
                {/* <Link
                  href={project.url}
                  className="text-blue-500 hover:underline"
                >
                  Read more
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
