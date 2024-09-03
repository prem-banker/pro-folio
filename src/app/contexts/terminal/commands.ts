// List of commands that do not require API calls

import { Execution } from "@/app/utils/interfaces";
import { say } from "cowsay";
import userdata from "../../../../public/data/user.json";
import * as bin from "./index";

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(", ");
  var c = "";
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 3 === 0) {
      c += Object.keys(bin).sort()[i - 1] + "\n";
    } else {
      c += Object.keys(bin).sort()[i - 1] + " ";
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'summary' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/prem-banker/pro-folio`);
  return "Opening Github repository...";
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${userdata.user.name}. 
Welcome to my website!
More about me:
'resume' - my latest resume.
'help' - list of commands.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${userdata.user.resume_url}`);
  return "Opening resume...";
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${userdata.user.email}`);
  return `Opening mailto:${userdata.user.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  const githubLink = userdata.user.socials.find(
    (social) => social.name.toLowerCase() === "github"
  )?.link;

  if (githubLink) {
    window.open(githubLink);
    return "Opening github...";
  } else {
    return "User's github is not available";
  }
};

export const linkedin = async (args: string[]): Promise<string> => {
  const linkedin = userdata.user.socials.find(
    (social) => social.name.toLowerCase() === "linkedin"
  )?.link;

  if (linkedin) {
    window.open(linkedin);
    return "Opening linkedin...";
  } else {
    return "user' linkedin is not available";
  }
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(" ")}`);
  return `Searching google for ${args.join(" ")}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return say({ text: args.join(" "), r: true });
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${userdata.user.name}`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const summary = async (args?: string[]): Promise<string> => {
  return userdata.user.bio;
};

export const ls = async (args?: string[]): Promise<string> => {
  let output = "education/\n";
  userdata.user.education.forEach(
    (edu) => (output += "├─ " + edu.title.toLowerCase() + "\n")
  );

  output += "work/ \n";

  userdata.user.work.forEach(
    (exp) => (output += "├─ " + exp.company.toLowerCase() + "\n")
  );

  output += "\nType `cat [entity_name]` to know more ";
  return output;
};

export const cat = async (args?: string[]): Promise<string> => {
  if (!args || args.length === 0) {
    return "Please specify an entity name.";
  }

  const entityName = args[0].toLowerCase();

  // Search in education
  const education = userdata.user.education.find(
    (edu) => edu.title.toLowerCase() === entityName
  );
  if (education) {
    return education.description;
  }

  // Search in work experience
  const work = userdata.user.work.find(
    (exp) => exp.company.toLowerCase() === entityName
  );
  if (work) {
    return work.description;
  }

  return "Entity not found. Please check the name and try again.";
};

export const easteregg = async (executions: Execution[]): Promise<string> => {
  if (executions.length === 0) {
    return "There is no easter egg. So please do not try again";
  }

  const lastExecution = executions[executions.length - 1];

  if (lastExecution.command === "easteregg") {
    let count = 0;
    for (let i = executions.length - 1; i >= 0; i--) {
      if (executions[i].command === "easteregg") {
        count++;
      } else {
        break;
      }
    }
    if (count === 1) {
      return `I told you there's no easter egg. Stop trying`;
    } else if (count === 2) {
      return `You are just wasting your time.`;
    } else if (count === 3) {
      return `Can you stop bothering me ? I have better things to do`;
    } else if (count === 4) {
      return `For the final time, there's no easter egg`;
    } else if (count === 5) {
      return say({ text: `MOOOO. There's no easter egg buddy` });
    } else if (count === 6) {
      return `ok I will stop responding now`;
    } else if (count === 7) {
      return `Byeeeeee`;
    } else if (count === 8) {
      return `...`;
    } else if (count === 9) {
      return `..`;
    } else if (count === 10) {
      return `.`;
    } else if (count === 11) {
      return ``;
    } else if (count === 12) {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
      return `HAHAHAHAHAAHAHAHAH`;
    } else {
      return `You got rickrolled ! You found the easteregg though XD`;
    }
  } else {
    const hasEasterEgg = executions.some(
      (execution) => execution.command === "easteregg"
    );
    return hasEasterEgg
      ? "You again ?"
      : "There is no easter egg. So please do not try again";
  }
};

// Banner
export const banner = (args?: string[]): string => {
  return `For my techies, this is a simulation of a terminal.
Type 'help' to see the list of available commands.
Type 'resume' to see my resume.
`;
};
