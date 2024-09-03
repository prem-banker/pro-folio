"use client";

import { useEffect, useState } from "react";
import { FaCaretDown, FaGithub } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import metadata from "../../../../public/data/meta.json";
import userdata from "../../../../public/data/user.json";
import TechIcon from "../../components/techicon";
import { Project, User } from "../../utils/interfaces";
import { standardizeName } from "../../utils/utils";
import EmptyState from "../emptystate";
import Loader from "@/app/components/loader/loader";

export default function ProjectsWeb() {
  const { technologies } = metadata;
  const projects: Project[] = userdata.user.projects;
  const [activeTechnologies, setActiveTechnologies] = useState<string[]>(
    technologies
  );

  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  useEffect(() => {
    const newFilteredProjects = projects.filter((project) => {
      return project.techstack.some(
        (tech) =>
          activeTechnologies.includes(tech.toLowerCase()) ||
          activeTechnologies.includes(tech)
      );
    });
    // Update the state with the filtered projects
    setFilteredProjects(newFilteredProjects);
  }, [activeTechnologies, projects]); // Trigger effect when active technologies or projects change

  const toggleCheckbox = (tech: string) => {
    if (activeTechnologies.includes(tech)) {
      setActiveTechnologies(activeTechnologies.filter((t) => t !== tech));
    } else {
      setActiveTechnologies([...activeTechnologies, tech]);
    }
  };

  const toggleAllTechnologies = () => {
    if (activeTechnologies.length === technologies.length) {
      setActiveTechnologies([]);
    } else {
      setActiveTechnologies(technologies);
    }
  };

  const getTabName = () =>
    activeTechnologies.length > 0
      ? activeTechnologies.length === 1
        ? activeTechnologies[0]
        : `${activeTechnologies[0]} + ${activeTechnologies.length - 1}`
      : "Tech";

  return (
    // TODO: REVISE THE MAINTAIN SIZE SOLUTION
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="h-[40px] flex items-center justify-between border-b border-line">
        <div className="flex-vertical-center">
          <div className="w-[220px] pl-[22px] border-r border-line flex-vertical-center">
            <FaCaretDown className="text-white mr-2" />
            <span className="text-white">My Tech Stack</span>
          </div>

          {activeTechnologies.length > 0 && (
            <div className="text-secondaryLightBlue w-[200px] px-4 border-r border-line flex h-full items-center justify-between">
              <span>{getTabName()}</span>

              <button
                className="bg-transparent border-none outline-none cursor-pointer"
                onClick={() => setActiveTechnologies([])}
              >
                <RiCloseLine className="text-xl" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar + content */}
      <div className="flex-1 text-secondaryLightBlue flex items-start maintain-size-x">
        {/* Sidebar - Tech Select */}
        <div className="w-[220px] flex-shrink-0 border-r border-line h-full flex flex-col custom-scrollbar">
          <div className="flex items-center mt-4 px-[22px] border-b border-line pb-2">
            <input
              type="checkbox"
              id="toggleAll"
              className="h-4 w-4"
              checked={activeTechnologies.length === technologies.length}
              onChange={toggleAllTechnologies}
            />
            <label htmlFor="toggleAll" className="ml-4">
              {activeTechnologies.length === technologies.length
                ? "Clear all"
                : "Select all"}
            </label>
          </div>

          <div>
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
                  className={`flex items-center space-x-2 ml-4 custom-label ${
                    activeTechnologies.includes(tech) ? "text-white" : ""
                  }`}
                >
                  <TechIcon tech={tech} />
                  <span className="flex-1 min-w-0 custom-label">
                    {standardizeName(tech)}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Content - Projects */}
        {/* <div className="flex flex-wrap justify-between pt-8"> */}
        <div className="flex h-full flex-wrap justify-start custom-scrollbar pt-8 w-full">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div
                key={index}
                className="flex-grow max-w-[450px] w-full md:w-[calc(50%-1rem)] lg:w-[calc(33%-1rem)] xl:w-[calc(25%-1rem)] my-4 mx-4 text-secondaryLightBlue"
              >
                <div className="text-body truncate mb-2 text-secondaryFluorescentGreen">
                  <span className="ml-1 text-semibold text-secondaryBrightPurple">
                    Pr#{index + 1}&nbsp;
                  </span>
                  {project.name}
                </div>
                <div className="border border-line shadow-md bg-primaryDeepNavyBlue rounded-lg flex flex-col max-h-[450px]">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-[150px] object-cover rounded-t-md"
                    />
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-2 right-2 p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300 ease-in-out"
                      >
                        <FaGithub className="text-white text-lg" />
                      </a>
                    )}
                  </div>
                  <div className="text-labels mx-4 mt-2 truncate-7">
                    {project.description}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-4 my-4 w-[150px] inline-block"
                  >
                    <button
                      className="w-full bg-buttonbackground py-2 px-3 rounded-md text-white 
  transition-colors duration-300 ease-in-out
  hover:bg-buttonhover"
                    >
                      view-project
                    </button>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </div>
  );
}
