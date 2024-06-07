import { DiDocker } from "react-icons/di";
import {
  FaAngular,
  FaJava,
  FaJsSquare,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { FaC, FaComputer, FaGolang } from "react-icons/fa6";
import { SiFlutter } from "react-icons/si";

interface TechIconProps {
  tech: string;
  color?: string;
  size?: number;
}

const TechIcon: React.FC<TechIconProps> = ({
  tech,
  color = "secondaryLightBlue",
  size = 20,
}) => {
  const lowerCaseTechName = tech.toLowerCase();
  const iconSize = `${size}px`; // Convert size to string with 'px' suffix

  let iconColor = `text-${color}`;

  if (lowerCaseTechName.includes("angular")) {
    return <FaAngular className={iconColor} size={iconSize} />;
  } else if (lowerCaseTechName.includes("react")) {
    return <FaReact className={iconColor} size={iconSize} />;
  } else if (
    lowerCaseTechName.includes("javascript") ||
    lowerCaseTechName === "js"
  ) {
    return <FaJsSquare className={iconColor} size={iconSize} />;
  } else if (lowerCaseTechName.includes("flutter")) {
    return <SiFlutter className={iconColor} size={iconSize} />;
  } else if (lowerCaseTechName.includes("node")) {
    return <FaNodeJs className={iconColor} size={iconSize} />;
  } else if (lowerCaseTechName.includes("docker")) {
    return <DiDocker className={iconColor} size={iconSize} />;
  } else if (lowerCaseTechName.includes("python")) {
    return <FaPython className={iconColor} size={iconSize} />;
  } else if (
    lowerCaseTechName.includes("c++") ||
    lowerCaseTechName.includes("cpp")
  ) {
    return <FaC className={iconColor} size={iconSize} />;
  } else if (lowerCaseTechName.includes("java")) {
    return <FaJava className={iconColor} size={iconSize} />;
  } else if (
    lowerCaseTechName.includes("go") ||
    lowerCaseTechName.includes("golang")
  ) {
    return <FaGolang className={iconColor} size={iconSize} />;
  } else if (lowerCaseTechName === "c") {
    return <FaC className={iconColor} size={iconSize} />;
  } else {
    // Return a generic icon for unknown technologies
    return <FaComputer className={iconColor} size={iconSize} />;
  }
};

export default TechIcon;
