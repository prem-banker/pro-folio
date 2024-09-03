"use client";

import { Checkbox, IconButton, Menu, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { FaCaretDown, FaGithub } from "react-icons/fa";
import metadata from "../../../../public/data/meta.json";
import userdata from "../../../../public/data/user.json";
import TechIcon from "../../components/techicon";
import { Project } from "../../utils/interfaces";
import { standardizeName } from "../../utils/utils";
import EmptyState from "../emptystate";

export default function ProjectsMobile() {
  const { technologies } = metadata;

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

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="flex flex-col h-full">
      <div className="h-[40px] flex items-center justify-between border-b border-line px-4">
        <div className="flex-vertical-center">
          <span className="text-white">Projects</span>
        </div>
        <IconButton className="pr-3 border-l border-line" onClick={handleClick}>
          <FaCaretDown className="text-xl text-white" />
        </IconButton>
      </div>

      {/* Context Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              width: 250,
              maxHeight: 400,
              backgroundColor: "#01080E",
              color: "#FFFFFF",
            },
          },
        }}
      >
        <MenuItem onClick={toggleAllTechnologies}>
          <Checkbox
            checked={activeTechnologies.length === technologies.length}
            onChange={toggleAllTechnologies}
            style={{
              color: "#43D9AD",
            }}
          />
          <span className="ml-2">
            {activeTechnologies.length === technologies.length
              ? "Clear all"
              : "Select all"}
          </span>
        </MenuItem>
        {technologies.map((tech, index) => (
          <MenuItem key={index} onClick={() => toggleCheckbox(tech)}>
            <Checkbox
              checked={activeTechnologies.includes(tech)}
              onChange={() => toggleCheckbox(tech)}
              style={{
                color: "#43D9AD",
              }}
            />
            <TechIcon tech={tech} />
            <span className="ml-2">{standardizeName(tech)}</span>
          </MenuItem>
        ))}
      </Menu>

      {/* Content - Projects */}
      {/* Projects Content */}
      <div className="flex-1 overflow-y-auto py-4 px-4 custom-scrollbar">
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
          <EmptyState />
        )}
      </div>
    </div>
  );
}
