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
        <div className="flex-col flex-grow h-full">
          <div className="flex-col flex-grow h-full">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col mb-4">
                <h2 className="text-lg font-semibold">{project.name}</h2>
                <div className="border border-gray-300 p-4 rounded-md shadow-md">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-sm mb-4">{project.description}</p>
                  <Link href={project.url}>
                    <a className="text-blue-500 hover:underline">Read more</a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
