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
  size?: number;
}

const TechIcon: React.FC<TechIconProps> = ({ tech, size = 20 }) => {
  const lowerCaseTechName = tech.toLowerCase();
  const iconSize = `${size}px`; // Convert size to string with 'px' suffix

  // Define colors for each technology
  const colors: { [key: string]: string } = {
    angular: "#DD0031",
    react: "#61DAFB",
    javascript: "#F7DF1E",
    js: "#F7DF1E",
    flutter: "#02569B",
    node: "#339933",
    docker: "#2496ED",
    python: "#3776AB",
    cpp: "#00599C",
    "c++": "#00599C",
    java: "#007396",
    golang: "#00ADD8",
    go: "#00ADD8",
    c: "#A8B9CC",
    default: "#6A737D", // Default grey color
  };

  const iconColor = colors[lowerCaseTechName] || colors.default;

  if (lowerCaseTechName.includes("angular")) {
    return <FaAngular color={iconColor} size={iconSize} />;
  } else if (lowerCaseTechName.includes("react")) {
    return <FaReact color={iconColor} size={iconSize} />;
  } else if (
    lowerCaseTechName.includes("javascript") ||
    lowerCaseTechName === "js"
  ) {
    return <FaJsSquare color={iconColor} size={iconSize} />;
  } else if (lowerCaseTechName.includes("flutter")) {
    return <SiFlutter color={iconColor} size={iconSize} />;
  } else if (lowerCaseTechName.includes("node")) {
    return <FaNodeJs color={iconColor} size={iconSize} />;
  } else if (lowerCaseTechName.includes("docker")) {
    return <DiDocker color={iconColor} size={iconSize} />;
  } else if (lowerCaseTechName.includes("python")) {
    return <FaPython color={iconColor} size={iconSize} />;
  } else if (
    lowerCaseTechName.includes("c++") ||
    lowerCaseTechName.includes("cpp") ||
    lowerCaseTechName === "c"
  ) {
    return <FaC color={iconColor} size={iconSize} />;
  } else if (lowerCaseTechName.includes("java")) {
    return <FaJava color={iconColor} size={iconSize} />;
  } else if (
    lowerCaseTechName.includes("go") ||
    lowerCaseTechName.includes("golang")
  ) {
    return <FaGolang color={iconColor} size={iconSize} />;
  } else if (lowerCaseTechName === "c") {
    return <FaC color={iconColor} size={iconSize} />;
  } else {
    // Return a generic icon for unknown technologies
    return <FaComputer color={iconColor} size={iconSize} />;
  }
};

export default TechIcon;
