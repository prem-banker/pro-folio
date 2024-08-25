"use client";

import { useEffect, useRef, useState } from "react";
import { FaCaretDown, FaGithub } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import metadata from "../../../../public/data/meta.json";
import userdata from "../../../../public/data/user.json";
import TechIcon from "../../components/techicon";
import "../../styles/projects.css";
import { Project, User } from "../../utils/interfaces";
import { standardizeName } from "../../utils/utils";
import EmptyState from "../emptystate";

export default function ProjectsMobile() {
  const { technologies } = metadata;
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const toggleFilterMenu = () => setIsFilterOpen(!isFilterOpen);
  const projects: Project[] = userdata.user.projects;
  const [activeTechnologies, setActiveTechnologies] = useState<string[]>(
    technologies
  );

  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  useEffect(() => {
    // Filter projects based on active technologies
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
    <div className="flex flex-col h-full relative">
      {/* Header */}
      <div className="h-[40px] flex items-center justify-between border-b border-line px-4">
        <span className="text-white">Projects</span>
        <button
          className="bg-transparent border-none outline-none cursor-pointer"
          onClick={toggleFilterMenu}
        >
          <FaCaretDown className="text-white" />
        </button>
      </div>

      {/* Filter Menu Overlay */}
      {isFilterOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-primaryDeepNavyBlue z-10 flex flex-col">
          <div className="flex items-center justify-between px-4 py-2 border-b border-line">
            <span className="text-white">Filter by Technologies</span>
            <button
              className="bg-transparent border-none outline-none cursor-pointer"
              onClick={toggleFilterMenu}
            >
              <RiCloseLine className="text-xl text-white" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
            {technologies.map((tech, index) => (
              <div key={index} className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id={tech}
                  className="h-4 w-4"
                  checked={activeTechnologies.includes(tech)}
                  onChange={() => toggleCheckbox(tech)}
                />
                <label htmlFor={tech} className="ml-4 text-white">
                  {tech}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects Content */}
      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <div key={index} className="my-4 w-full text-secondaryLightBlue">
              <div className="text-body truncate mb-2 text-secondaryFluorescentGreen">
                <span className="ml-1 text-semibold text-secondaryBrightPurple">
                  Pr#{index + 1}&nbsp;
                </span>
                {project.name}
              </div>
              <div className="border border-line shadow-md bg-primaryDeepNavyBlue rounded-lg flex flex-col max-h-[400px]">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-[150px] object-cover rounded-t-md"
                  />
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-2 right-2 p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300 ease-in-out"
                  >
                    <FaGithub className="text-white text-lg" />
                  </a>
                </div>
                <div className="text-labels mx-4 mt-2 truncate-5">
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
          <div>No projects found.</div>
        )}
      </div>
    </div>
  );
}

const FilterMenu = ({
  isOpen,
  toggleMenu,
  technologies,
  activeTechnologies,
  toggleCheckbox,
  toggleAllTechnologies,
}) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        toggleMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleMenu]);

  return (
    <div
      ref={menuRef}
      className={`absolute right-4 top-12 bg-white border border-line rounded-md shadow-md transition-transform transform ${
        isOpen ? "scale-100" : "scale-0"
      } origin-top-right`}
      style={{ width: "250px" }}
    >
      <div className="flex items-center mt-4 px-4 border-b border-line pb-2">
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
          <div key={index} className="flex items-center mt-4 mx-4">
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
                activeTechnologies.includes(tech) ? "text-primary" : ""
              }`}
            >
              <TechIcon tech={tech} />
              <span className="flex-1 min-w-0">{tech}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

//   return (
//     // TODO: REVISE THE MAINTAIN SIZE SOLUTION
//     <div className="flex flex-col h-full">
//       Header
//       <div className="h-[40px] flex items-center justify-between border-b border-line">
//         <div className="flex-vertical-center">
//           <div className="w-[311px] pl-[22px] border-r border-line flex-vertical-center">
//             <FaCaretDown className="text-white mr-2" />
//             <span className="text-white">projects</span>
//           </div>

//           {activeTechnologies.length > 0 && (
//             <div className="text-secondaryLightBlue w-[200px] px-4 border-r border-line flex h-full items-center justify-between">
//               <span>{getTabName()}</span>

//               <button
//                 className="bg-transparent border-none outline-none cursor-pointer"
//                 onClick={() => setActiveTechnologies([])}
//               >
//                 <RiCloseLine className="text-xl" />
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Sidebar + content */}
//       <div className="flex-1 text-secondaryLightBlue flex items-start maintain-size-x">
//         {/* Sidebar - Tech Select */}
//         <div className="w-[311px] border-r border-line h-full flex flex-col custom-scrollbar">
//           <div className="flex items-center mt-4 px-[22px] border-b border-line pb-2">
//             <input
//               type="checkbox"
//               id="toggleAll"
//               className="h-4 w-4"
//               checked={activeTechnologies.length === technologies.length}
//               onChange={toggleAllTechnologies}
//             />
//             <label htmlFor="toggleAll" className="ml-4">
//               {activeTechnologies.length === technologies.length
//                 ? "Clear all"
//                 : "Select all"}
//             </label>
//           </div>

//           <div>
//             {technologies.map((tech, index) => (
//               <div key={index} className="flex items-center mt-4 mx-[22px]">
//                 <input
//                   type="checkbox"
//                   id={tech}
//                   className="h-4 w-4"
//                   checked={activeTechnologies.includes(tech)}
//                   onChange={() => toggleCheckbox(tech)}
//                 />
//                 <label
//                   htmlFor={tech}
//                   className={`flex items-center space-x-2 ml-4 custom-label ${
//                     activeTechnologies.includes(tech) ? "text-white" : ""
//                   }`}
//                 >
//                   <TechIcon tech={tech} />
//                   <span className="flex-1 min-w-0 custom-label">
//                     {standardizeName(tech)}
//                   </span>
//                 </label>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Content - Projects */}
//         <div className="flex flex-1 w-0 h-full flex-wrap custom-scrollbar pt-8">
//           {filteredProjects.length > 0 ? (
//             filteredProjects.map((project, index) => (
//               <div
//                 key={index}
//                 className="my-4 mx-4 w-[30%] text-secondaryLightBlue"
//               >
//                 <div className="text-body truncate mb-2 text-secondaryFluorescentGreen">
//                   <span className="ml-1 text-semibold text-secondaryBrightPurple">
//                     Pr#{index + 1}&nbsp;
//                   </span>
//                   {project.name}
//                 </div>
//                 <div className="border border-line shadow-md bg-primaryDeepNavyBlue rounded-lg flex flex-col max-h-[400px]">
//                   <div className="relative">
//                     <img
//                       src={project.image}
//                       alt={project.name}
//                       className="w-full h-[150px] object-cover rounded-t-md"
//                     />
//                     <a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="absolute bottom-2 right-2 p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300 ease-in-out"
//                     >
//                       <FaGithub className="text-white text-lg" />
//                     </a>
//                   </div>
//                   <div className="text-labels mx-4 mt-2 truncate-5">
//                     {project.description}
//                   </div>
//                   <a
//                     href={project.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="mx-4 my-4 w-[150px] inline-block"
//                   >
//                     <button
//                       className="w-full bg-buttonbackground py-2 px-3 rounded-md text-white
//       transition-colors duration-300 ease-in-out
//       hover:bg-buttonhover"
//                     >
//                       view-project
//                     </button>
//                   </a>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <EmptyState />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }