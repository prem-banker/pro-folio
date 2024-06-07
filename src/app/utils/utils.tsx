import React from "react";
import {
  FaAngular,
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaPython,
  FaJava,
} from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { DiDocker } from "react-icons/di";
import { IoLogoNodejs } from "react-icons/io";
import { GrGolang } from "react-icons/gr";
import { FaC } from "react-icons/fa6";

// Define a function to get the icon component based on technology name
const getIconComponent = (techName: string) => {
  const lowerCaseTechName = techName.toLowerCase();
  if (lowerCaseTechName.includes("angular")) {
    return <FaAngular className="text-red-600" />;
  } else if (lowerCaseTechName.includes("react")) {
    return <FaReact className="text-blue-600" />;
  } else if (
    lowerCaseTechName.includes("javascript") ||
    lowerCaseTechName.includes("js")
  ) {
    return <FaJsSquare className="text-yellow-500" />;
  } else if (lowerCaseTechName.includes("flutter")) {
    return <SiFlutter className="text-blue-500" />;
  } else if (lowerCaseTechName.includes("node")) {
    return <FaNodeJs className="text-green-500" />;
  } else if (lowerCaseTechName.includes("docker")) {
    return <DiDocker className="text-blue-400" />;
  } else if (lowerCaseTechName.includes("python")) {
    return <FaPython className="text-blue-300" />;
  } else if (lowerCaseTechName.includes("c")) {
    return <FaC className="text-blue-300" />;
  } else if (
    lowerCaseTechName.includes("c++") ||
    lowerCaseTechName.includes("cpp")
  ) {
    return <FaC className="text-blue-300" />;
  } else if (lowerCaseTechName.includes("java")) {
    return <FaJava className="text-orange-400" />;
  } else if (
    lowerCaseTechName.includes("go") ||
    lowerCaseTechName.includes("golang")
  ) {
    return <GrGolang className="text-blue-500" />;
  } else {
    // Return a generic icon for unknown technologies
    return <GenericIcon />;
  }
};

// Define a generic icon component for unknown technologies
const GenericIcon = () => {
  return <div className="text-gray-400">Icon</div>;
};

export { getIconComponent };

const standardizeName = (name: string) => {
  return name.replace(/\b\w/g, (char) => char.toUpperCase());
};

export { standardizeName };
